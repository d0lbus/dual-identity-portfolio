// backend/src/modules/chatbot/chatbot.repository.ts
import type { FastifyInstance } from "fastify";
import type { ChatbotPortfolioType } from "./chatbot.type";

export async function getOrCreateChatSession(
  app: FastifyInstance,
  sessionKey: string,
  portfolioType: ChatbotPortfolioType,
) {
  return app.prisma.chatSession.upsert({
    where: {
      sessionKey,
    },
    update: {
      portfolioType,
    },
    create: {
      sessionKey,
      portfolioType,
    },
  });
}

export async function createChatMessage(
  app: FastifyInstance,
  chatSessionId: string,
  role: "user" | "assistant",
  content: string,
) {
  return app.prisma.chatMessage.create({
    data: {
      chatSessionId,
      role,
      content,
    },
  });
}

export async function listRecentChatMessages(
  app: FastifyInstance,
  chatSessionId: string,
  limit = 10,
) {
  const messages = await app.prisma.chatMessage.findMany({
    where: {
      chatSessionId,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: limit,
  });

  return messages.reverse();
}
