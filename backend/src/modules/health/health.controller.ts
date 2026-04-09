// backend/src/modules/health/health.controller.ts
import type { FastifyReply, FastifyRequest } from "fastify";

export async function healthController(
  _request: FastifyRequest,
  reply: FastifyReply,
) {
  return reply.send({
    status: "ok",
    service: "portfolio-api",
  });
}
