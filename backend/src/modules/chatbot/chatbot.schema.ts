// backend/src/modules/chatbot/chatbot.schema.ts
import { z } from "zod";

export const chatbotPortfolioTypeSchema = z.enum(["dualidentity", "va", "se"]);

export const chatbotMessageSchema = z.object({
  sessionKey: z.string().trim().min(3).max(120),
  portfolioType: chatbotPortfolioTypeSchema,
  message: z.string().trim().min(1).max(2000),
});
