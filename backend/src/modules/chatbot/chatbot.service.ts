import type { FastifyInstance } from "fastify";
import { generateChatReply } from "../../lib/llm";
import {
  createChatMessage,
  getOrCreateChatSession,
  listRecentChatMessages,
} from "./chatbot.repository";
import type {
  ChatbotMessagePayload,
  ChatbotMessageResponse,
  ChatbotHistoryMessage,
} from "./chatbot.type";

export async function sendChatbotMessage(
  app: FastifyInstance,
  payload: ChatbotMessagePayload,
): Promise<ChatbotMessageResponse> {
  if (!app.env.CHATBOT_PERSISTENCE_ENABLED) {
    const reply = await generateChatReply({
      env: app.env,
      portfolioType: payload.portfolioType,
      messages: [
        {
          role: "user",
          content: payload.message,
        },
      ],
    });

    return {
      reply,
      sessionKey: payload.sessionKey,
    };
  }

  const session = await getOrCreateChatSession(
    app,
    payload.sessionKey,
    payload.portfolioType,
  );

  await createChatMessage(app, session.id, "user", payload.message);

  const recentMessages: ChatbotHistoryMessage[] = await listRecentChatMessages(
    app,
    session.id,
  );

  const reply = await generateChatReply({
    env: app.env,
    portfolioType: payload.portfolioType,
    messages: recentMessages.map((message: ChatbotHistoryMessage) => ({
      role: message.role === "system" ? "assistant" : message.role,
      content: message.content,
    })),
  });

  await createChatMessage(app, session.id, "assistant", reply);

  return {
    reply,
    sessionKey: session.sessionKey,
  };
}
