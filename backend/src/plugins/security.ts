// backend/src/plugins/security.ts
import fp from "fastify-plugin";

export default fp(async function securityPlugin(fastify) {
  fastify.addHook("onSend", async (_request, reply, payload) => {
    reply.header("X-Content-Type-Options", "nosniff");
    reply.header("X-Frame-Options", "DENY");
    reply.header("Referrer-Policy", "no-referrer");
    reply.header(
      "Permissions-Policy",
      "camera=(), microphone=(), geolocation=()",
    );
    reply.header("Cross-Origin-Resource-Policy", "same-site");

    return payload;
  });
});
