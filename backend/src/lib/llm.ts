// backend/src/lib/llm.ts
import type { Env } from "../config/env";
import { AppError } from "../shared/errors/app-error";
import type { ChatbotPortfolioType } from "../modules/chatbot/chatbot.type";

type LLMMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

type GenerateChatReplyInput = {
  env: Env;
  portfolioType: ChatbotPortfolioType;
  messages: LLMMessage[];
};

function buildSystemPrompt(portfolioType: ChatbotPortfolioType) {
  const common = [
    "You are a portfolio assistant for Jan Dolby Aquino.",
    "Be concise, helpful, and honest.",
    "Only answer questions relevant to the portfolio, services, projects, skills, or collaboration.",
    "If the user asks something unknown, say you are not sure and suggest the contact page.",
    "Never invent unavailable pricing, employment history, or guarantees.",
  ].join(" ");

  if (portfolioType === "va") {
    return [
      common,
      "The current context is the Virtual Assistant portfolio.",
      "Emphasize operations, executive support, research, publishing systems, organization, and service-oriented execution.",
    ].join(" ");
  }

  if (portfolioType === "se") {
    return [
      common,
      "The current context is the Software Engineer portfolio.",
      "Emphasize frontend systems, backend support layers, maintainability, product structure, and technical implementation.",
    ].join(" ");
  }

  return [
    common,
    "The current context is the dual-identity portfolio.",
    "Help visitors understand the difference between the VA path and the SE path and route them clearly.",
  ].join(" ");
}

function fallbackReply(portfolioType: ChatbotPortfolioType) {
  if (portfolioType === "va") {
    return "I can help explain the VA side of the portfolio, including executive support, operations, and workflow-driven services. For a tailored inquiry, please use the VA contact page.";
  }

  if (portfolioType === "se") {
    return "I can help explain the engineering side of the portfolio, including frontend systems, backend support layers, and product-oriented implementation. For project inquiries, please use the SE contact page.";
  }

  return "This portfolio has two paths: Virtual Assistant and Software Engineer. If you need service and operations support, choose the VA route. If you need technical builds and product implementation, choose the SE route.";
}

function extractReplyText(content: unknown): string {
  if (typeof content === "string") {
    return content.trim();
  }

  if (Array.isArray(content)) {
    return content
      .map((item) => {
        if (typeof item === "string") return item;
        if (
          typeof item === "object" &&
          item !== null &&
          "text" in item &&
          typeof (item as { text?: unknown }).text === "string"
        ) {
          return (item as { text: string }).text;
        }

        return "";
      })
      .join("")
      .trim();
  }

  return "";
}

export async function generateChatReply({
  env,
  portfolioType,
  messages,
}: GenerateChatReplyInput): Promise<string> {
  if (!env.OPENAI_API_KEY) {
    return fallbackReply(portfolioType);
  }

  const response = await fetch(`${env.OPENAI_BASE_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: env.OPENAI_MODEL,
      temperature: 0.5,
      max_tokens: 300,
      messages: [
        {
          role: "system",
          content: buildSystemPrompt(portfolioType),
        },
        ...messages,
      ],
    }),
  });

  if (!response.ok) {
    throw new AppError(
      502,
      "CHAT_PROVIDER_ERROR",
      "The chatbot provider request failed.",
    );
  }

  const data = (await response.json()) as {
    choices?: Array<{
      message?: {
        content?: unknown;
      };
    }>;
  };

  const reply = extractReplyText(data.choices?.[0]?.message?.content);

  if (!reply) {
    throw new AppError(
      502,
      "CHAT_PROVIDER_EMPTY_REPLY",
      "The chatbot provider returned an empty reply.",
    );
  }

  return reply;
}
