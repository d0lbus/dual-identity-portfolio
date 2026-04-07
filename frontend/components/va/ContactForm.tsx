// frontend/components/va/ContactForm.tsx
"use client";

import { FormEvent, useMemo, useState } from "react";
import { vaInquiryTypes } from "@/data/va";
import type { ContactPayload } from "@/types/contact";
import { Reveal } from "@/components/shared/Reveal";

const initialState = {
  name: "",
  email: "",
  inquiryType: vaInquiryTypes[0],
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const payload = useMemo<ContactPayload>(
    () => ({
      name: form.name,
      email: form.email,
      message: form.message,
      sourcePage: "/va/contact",
      portfolioType: "va",
      inquiryType: form.inquiryType,
    }),
    [form],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    window.setTimeout(() => {
      console.log("Mock VA contact submission", payload);
      setStatus("success");
      setForm(initialState);
    }, 700);
  }

  return (
    <Reveal>
      <form
        onSubmit={handleSubmit}
        className="rounded-sm bg-surface-container p-8 md:p-10"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <label className="space-y-3">
            <span className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
              Identity / Name
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
              Communication Email
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
            Inquiry Type
          </span>
          <select
            value={form.inquiryType}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                inquiryType: event.target.value,
              }))
            }
            className="w-full border-b border-outline bg-transparent px-0 py-3 text-on-surface outline-none transition-colors focus:border-primary"
          >
            {vaInquiryTypes.map((type) => (
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
            The Blueprint / Message
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
            placeholder="Describe your vision or the problem we are solving..."
            className="w-full resize-none border border-outline-variant/20 bg-transparent px-4 py-4 text-on-surface outline-none transition-colors focus:border-primary"
          />
        </label>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-8 inline-flex w-full items-center justify-center rounded-sm bg-primary px-8 py-4 font-label text-[11px] uppercase tracking-[0.22em] text-on-primary transition-all duration-300 hover:tracking-[0.28em] disabled:opacity-70"
        >
          {status === "submitting" ? "Transmitting..." : "Transmit Inquiry"}
        </button>

        <p className="mt-4 text-xs leading-6 text-on-surface-variant">
          {status === "success"
            ? "Mock submission complete. The payload shape is preserved for backend integration later."
            : "This is currently a mocked frontend-first submission. Backend API wiring comes in Phase 6."}
        </p>
      </form>
    </Reveal>
  );
}
