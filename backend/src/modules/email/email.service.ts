// backend/src/modules/email/email.service.ts
import type { ContactSubmission } from "@prisma/client";
import type { FastifyBaseLogger } from "fastify";
import { Resend } from "resend";
import type { Env } from "../../config/env";
import { buildContactNotificationTemplate } from "./templates/contact-notification.template";

type SendContactNotificationInput = {
  env: Env;
  logger: FastifyBaseLogger;
  submission: ContactSubmission;
};

export async function sendContactNotification({
  env,
  logger,
  submission,
}: SendContactNotificationInput) {
  if (!env.CONTACT_EMAIL_ENABLED) {
    logger.info("Contact email notifications are disabled.");
    return;
  }

  if (!env.RESEND_API_KEY || !env.INTERNAL_NOTIFICATION_EMAIL) {
    logger.warn(
      "Skipping contact email notification because RESEND_API_KEY or INTERNAL_NOTIFICATION_EMAIL is missing.",
    );
    return;
  }

  const resend = new Resend(env.RESEND_API_KEY);
  const template = buildContactNotificationTemplate(submission);

  const { error } = await resend.emails.send({
    from: env.EMAIL_FROM,
    to: [env.INTERNAL_NOTIFICATION_EMAIL],
    replyTo: submission.email,
    subject: template.subject,
    html: template.html,
    text: template.text,
  });

  if (error) {
    logger.error({ error }, "Failed to send contact notification email.");
  }
}
