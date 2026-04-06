// frontend/types/contact.ts
export type PortfolioType = "dualidentity" | "va" | "se";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  sourcePage: string;
  portfolioType: PortfolioType;
  inquiryType?: string;
};
