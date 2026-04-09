// backend/src/modules/contact/contact.service.ts
import type { FastifyInstance } from "fastify";
import { createContactSubmission } from "./contact.repository";
import { sendContactNotification } from "../email/email.service";
import type { ContactPayload, ContactResponse } from "./contact.type";

export async function submitContactInquiry(
  app: FastifyInstance,
  payload: ContactPayload,
): Promise<ContactResponse> {
  const submission = await createContactSubmission(app, payload);

  await sendContactNotification({
    env: app.env,
    logger: app.log,
    submission,
  });

  return {
    success: true,
    message: "Inquiry received successfully.",
    data: {
      id: submission.id,
    },
  };
}
