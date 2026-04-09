import type { ContactSubmission } from "@prisma/client";
import type { FastifyInstance as App } from "fastify";
import type { ContactPayload } from "./contact.type";

export async function createContactSubmission(
  app: App,
  payload: ContactPayload,
) {
  return app.prisma.contactSubmission.create({
    data: {
      name: payload.name,
      email: payload.email,
      message: payload.message,
      sourcePage: payload.sourcePage,
      portfolioType: payload.portfolioType,
      inquiryType: payload.inquiryType,
    },
  });
}
