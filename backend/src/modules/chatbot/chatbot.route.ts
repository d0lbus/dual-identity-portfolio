// backend/src/modules/chatbot/chatbot.route.ts
import type { FastifyInstance } from "fastify";
import { chatbotMessageController } from "./chatbot.controller";

export default async function chatbotRoutes(fastify: FastifyInstance) {
  fastify.post(
    "/api/chatbot/message",
    {
      config: {
        rateLimit: {
          max: 12,
          timeWindow: "1 minute",
        },
      },
    },
    chatbotMessageController,
  );
}
