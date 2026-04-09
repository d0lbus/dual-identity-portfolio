// backend/src/modules/contact/contact.route.ts
import type { FastifyInstance } from "fastify";
import { contactController } from "./contact.controller";

export default async function contactRoutes(fastify: FastifyInstance) {
  fastify.post(
    "/api/contact",
    {
      config: {
        rateLimit: {
          max: 5,
          timeWindow: "1 minute",
        },
      },
    },
    contactController,
  );
}
