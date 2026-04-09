// backend/src/modules/health/health.route.ts
import type { FastifyInstance } from "fastify";
import { healthController } from "./health.controller";

export default async function healthRoutes(fastify: FastifyInstance) {
  fastify.get("/health", healthController);
}
