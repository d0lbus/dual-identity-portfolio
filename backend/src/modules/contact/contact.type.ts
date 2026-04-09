// backend/src/modules/contact/contact.type.ts
export type PortfolioType = "dualidentity" | "va" | "se";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  sourcePage: string;
  portfolioType: PortfolioType;
  inquiryType?: string;
};

export type ContactResponse = {
  success: true;
  message: string;
  data: {
    id: string;
  };
};
