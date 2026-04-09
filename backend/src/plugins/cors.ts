// backend/src/plugins/cors.ts
import cors from "@fastify/cors";
import fp from "fastify-plugin";

export default fp(async function corsPlugin(fastify) {
  await fastify.register(cors, {
    origin: fastify.env.FRONTEND_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  });
});
