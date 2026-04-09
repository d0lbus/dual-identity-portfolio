// backend/src/config/logger.ts
import type { FastifyServerOptions } from "fastify";
import { env } from "./env";

export function createLoggerConfig(): FastifyServerOptions["logger"] {
  if (env.NODE_ENV === "production") {
    return {
      level: env.LOG_LEVEL,
    };
  }

  return {
    level: env.LOG_LEVEL,
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "SYS:standard",
        ignore: "pid,hostname",
      },
    },
  };
}
