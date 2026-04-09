// backend/src/modules/chatbot/chatbot.type.ts
export type ChatbotPortfolioType = "dualidentity" | "va" | "se";

export type ChatbotRole = "user" | "assistant" | "system";

export type ChatbotMessagePayload = {
  sessionKey: string;
  portfolioType: "va" | "se" | "dualidentity";
  message: string;
};

export type ChatbotMessageResponse = {
  reply: string;
  sessionKey: string;
};

export type ChatbotHistoryMessage = {
  role: ChatbotRole;
  content: string;
};
