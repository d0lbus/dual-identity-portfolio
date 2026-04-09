// backend/src/modules/chatbot/chatbot.repository.ts
import type { FastifyInstance } from "fastify";
import type {
  ChatbotPortfolioType,
  ChatbotHistoryMessage,
  ChatbotRole,
} from "./chatbot.type";

function isChatbotRole(value: string): value is ChatbotRole {
  return value === "user" || value === "assistant" || value === "system";
}

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
  sessionId: string,
): Promise<ChatbotHistoryMessage[]> {
  const messages = await app.prisma.chatMessage.findMany({
    where: {
      chatSessionId: sessionId,
    },
    orderBy: {
      createdAt: "asc",
    },
    take: 12,
  });

  return messages.map((message) => {
    if (!isChatbotRole(message.role)) {
      throw new Error(
        `Invalid chatbot role found in database: ${message.role}`,
      );
    }

    return {
      role: message.role,
      content: message.content,
    };
  });
}
