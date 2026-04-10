// frontend/lib/mailto.ts
import type { ContactPayload } from "@/types/contact";

const DEFAULT_CONTACT_EMAIL = "jandolbyaquino19@gmail.com";

type BuildMailtoArgs = {
  to?: string;
  subject: string;
  body: string;
};

export function buildMailtoUrl({
  to = DEFAULT_CONTACT_EMAIL,
  subject,
  body,
}: BuildMailtoArgs) {
  return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export function buildContactMailto(payload: ContactPayload) {
  const subject = `[${payload.portfolioType.toUpperCase()}] ${
    payload.inquiryType ?? "Portfolio Inquiry"
  } — ${payload.name}`;

  const body = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Portfolio Type: ${payload.portfolioType}`,
    `Source Page: ${payload.sourcePage}`,
    `Inquiry Type: ${payload.inquiryType ?? "Not provided"}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  return buildMailtoUrl({
    subject,
    body,
  });
}

export function openContactMailClient(payload: ContactPayload) {
  if (typeof window === "undefined") return;

  const mailtoUrl = buildContactMailto(payload);
  window.location.href = mailtoUrl;
}

export async function copyContactEmail(email: string = DEFAULT_CONTACT_EMAIL) {
  if (typeof navigator === "undefined" || !navigator.clipboard) {
    return false;
  }

  await navigator.clipboard.writeText(email);
  return true;
}

export const contactEmail = DEFAULT_CONTACT_EMAIL;
