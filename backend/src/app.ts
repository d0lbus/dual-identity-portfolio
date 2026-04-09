// backend/src/app.ts
import Fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./config/env";
import { createLoggerConfig } from "./config/logger";
import corsPlugin from "./plugins/cors";
import prismaPlugin from "./plugins/prisma";
import rateLimitPlugin from "./plugins/rate-limit";
import securityPlugin from "./plugins/security";
import { AppError } from "./shared/errors/app-error";
import healthRoutes from "./modules/health/health.route";
import contactRoutes from "./modules/contact/contact.route";
import chatbotRoutes from "./modules/chatbot/chatbot.route";

export async function buildApp() {
  const app = Fastify({
    logger: createLoggerConfig(),
  });

  app.decorate("env", env);

  await app.register(corsPlugin);
  await app.register(securityPlugin);
  await app.register(rateLimitPlugin);
  await app.register(prismaPlugin);

  await app.register(healthRoutes);
  await app.register(contactRoutes);
  await app.register(chatbotRoutes);

  app.setErrorHandler((error, request, reply) => {
    if (error instanceof ZodError) {
      return reply.status(400).send({
        success: false,
        code: "VALIDATION_ERROR",
        message: "Invalid request payload.",
        details: error.flatten(),
      });
    }

    if (error instanceof AppError) {
      return reply.status(error.statusCode).send({
        success: false,
        code: error.code,
        message: error.message,
        details: error.details,
      });
    }

    request.log.error({ err: error }, "Unhandled server error.");

    return reply.status(500).send({
      success: false,
      code: "INTERNAL_SERVER_ERROR",
      message: "Something went wrong.",
    });
  });

  return app;
}
