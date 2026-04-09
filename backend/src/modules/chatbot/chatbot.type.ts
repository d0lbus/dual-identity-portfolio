// backend/src/modules/chatbot/chatbot.type.ts
export type ChatbotPortfolioType = "dualidentity" | "va" | "se";

export type ChatbotMessagePayload = {
  sessionKey: string;
  portfolioType: ChatbotPortfolioType;
  message: string;
};

export type ChatbotMessageResponse = {
  reply: string;
  sessionKey: string;
};

export type ChatbotHistoryMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};
