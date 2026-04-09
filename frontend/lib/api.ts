// frontend/lib/api.ts
import type { ContactPayload } from "@/types/contact";

export type ContactApiResponse = {
  success: boolean;
  message: string;
  data?: {
    id: string;
  };
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "") ??
  "http://localhost:4000";

export async function submitContactInquiry(
  payload: ContactPayload,
): Promise<ContactApiResponse> {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => null)) as
    | ContactApiResponse
    | { message?: string }
    | null;

  if (!response.ok) {
    throw new Error(data?.message ?? "Failed to submit inquiry.");
  }

  return data as ContactApiResponse;
}
