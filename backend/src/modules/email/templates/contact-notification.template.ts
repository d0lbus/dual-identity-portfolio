// backend/src/modules/email/templates/contact-notification.template.ts
import type { ContactSubmission } from "@prisma/client";
import { escapeHtml } from "../../../shared/utils/escape-html";

export function buildContactNotificationTemplate(
  submission: ContactSubmission,
) {
  const safeName = escapeHtml(submission.name);
  const safeEmail = escapeHtml(submission.email);
  const safeMessage = escapeHtml(submission.message);
  const safeSourcePage = escapeHtml(submission.sourcePage);
  const safePortfolioType = escapeHtml(submission.portfolioType);
  const safeInquiryType = submission.inquiryType
    ? escapeHtml(submission.inquiryType)
    : "Not provided";

  const subject = `New portfolio inquiry from ${submission.name}`;

  const text = [
    "New portfolio inquiry received.",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Portfolio Type: ${submission.portfolioType}`,
    `Source Page: ${submission.sourcePage}`,
    `Inquiry Type: ${submission.inquiryType ?? "Not provided"}`,
    `Message: ${submission.message}`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#111;line-height:1.6">
      <h2>New portfolio inquiry received</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Portfolio Type:</strong> ${safePortfolioType}</p>
      <p><strong>Source Page:</strong> ${safeSourcePage}</p>
      <p><strong>Inquiry Type:</strong> ${safeInquiryType}</p>
      <p><strong>Message:</strong></p>
      <div style="padding:16px;border:1px solid #ddd;white-space:pre-wrap">${safeMessage}</div>
    </div>
  `;

  return {
    subject,
    text,
    html,
  };
}
