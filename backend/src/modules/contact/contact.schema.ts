// backend/src/modules/contact/contact.schema.ts
import { z } from "zod";

export const portfolioTypeSchema = z.enum(["dualidentity", "va", "se"]);

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(5000),
  sourcePage: z.string().trim().min(1).max(200),
  portfolioType: portfolioTypeSchema,
  inquiryType: z.string().trim().min(1).max(120).optional(),
});
