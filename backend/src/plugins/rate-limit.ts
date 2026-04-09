// backend/src/plugins/rate-limit.ts
import rateLimit from "@fastify/rate-limit";
import fp from "fastify-plugin";

export default fp(async function rateLimitPlugin(fastify) {
  await fastify.register(rateLimit, {
    global: false,
    max: 100,
    timeWindow: "1 minute",
  });
});
