// frontend/components/se/ContactConversionPanel.tsx
"use client";

import { FormEvent, useMemo, useState } from "react";
import type { ContactPayload } from "@/types/contact";
import { Reveal } from "@/components/shared/Reveal";
import { submitContactInquiry } from "@/lib/api";

const initialState = {
  name: "",
  email: "",
  projectType: "General Project Inquiry",
  message: "",
};

const projectTypes = [
  "General Project Inquiry",
  "Business Website",
  "Frontend System",
  "Dashboard / Portal",
  "Support API Layer",
];

export function ContactConversionPanel() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const payload = useMemo<ContactPayload>(
    () => ({
      name: form.name,
      email: form.email,
      message: form.message,
      sourcePage: "/se/contact",
      portfolioType: "se",
      inquiryType: form.projectType,
    }),
    [form],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitContactInquiry(payload);
      setStatus("success");
      setForm(initialState);
    } catch (error) {
      setStatus("idle");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to submit inquiry.",
      );
    }
  }

  return (
    <Reveal>
      <form
        onSubmit={handleSubmit}
        className="rounded-sm bg-surface-container p-8 md:p-10"
      >
        <p className="font-label text-[10px] uppercase tracking-[0.24em] text-outline">
          Contact Conversion Panel
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <label className="space-y-3">
            <span className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
              Name
            </span>
            <input
              type="text"
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
              required
              placeholder="John Doe"
              className="w-full border-b border-outline bg-transparent px-0 py-3 text-on-surface outline-none transition-colors focus:border-primary"
            />
          </label>

          <label className="space-y-3">
            <span className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
              Email
            </span>
            <input
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  email: event.target.value,
                }))
              }
              required
              placeholder="email@address.com"
              className="w-full border-b border-outline bg-transparent px-0 py-3 text-on-surface outline-none transition-colors focus:border-primary"
            />
          </label>
        </div>

        <label className="mt-6 block space-y-3">
          <span className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
            Project Type
          </span>
          <select
            value={form.projectType}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                projectType: event.target.value,
              }))
            }
            className="w-full border-b border-outline bg-transparent px-0 py-3 text-on-surface outline-none transition-colors focus:border-primary"
          >
            {projectTypes.map((type) => (
              <option
                key={type}
                value={type}
                className="bg-surface text-on-surface"
              >
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="mt-6 block space-y-3">
          <span className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
            Project Notes
          </span>
          <textarea
            value={form.message}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                message: event.target.value,
              }))
            }
            required
            rows={6}
            placeholder="Share the product, scope, or problem you want to solve."
            className="w-full resize-none border border-outline-variant/20 bg-transparent px-4 py-4 text-on-surface outline-none transition-colors focus:border-primary"
          />
        </label>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-primary px-8 py-4 font-label text-[11px] uppercase tracking-[0.22em] text-on-primary transition-all duration-300 hover:tracking-[0.28em] disabled:opacity-70"
        >
          {status === "submitting" ? "Submitting..." : "Send Project Inquiry"}
        </button>

        {status === "success" ? (
          <p className="mt-4 text-xs leading-6 text-on-surface-variant">
            Inquiry received successfully.
          </p>
        ) : null}

        {errorMessage ? (
          <p className="mt-4 text-xs leading-6 text-red-300">{errorMessage}</p>
        ) : null}
      </form>
    </Reveal>
  );
}
