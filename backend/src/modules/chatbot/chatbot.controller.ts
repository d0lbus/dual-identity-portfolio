// backend/src/modules/chatbot/chatbot.controller.ts
import type { FastifyReply, FastifyRequest } from "fastify";
import { AppError } from "../../shared/errors/app-error";
import { chatbotMessageSchema } from "./chatbot.schema";
import { sendChatbotMessage } from "./chatbot.service";

export async function chatbotMessageController(
  request: FastifyRequest<{ Body: unknown }>,
  reply: FastifyReply,
) {
  const parsed = chatbotMessageSchema.safeParse(request.body);

  if (!parsed.success) {
    throw new AppError(
      400,
      "CHATBOT_VALIDATION_ERROR",
      "Invalid chatbot payload.",
      parsed.error.flatten(),
    );
  }

  const result = await sendChatbotMessage(request.server, parsed.data);

  return reply.send(result);
}
