// frontend/components/dualidentity/IdentityPanel.tsx
"use client";

import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { cn } from "@/lib/cn";
import type { IdentityPanelData } from "@/data/site";

type IdentityPanelProps = {
  panel: IdentityPanelData;
};

export function IdentityPanel({ panel }: IdentityPanelProps) {
  const isVA = panel.id === "va";

  return (
    <Link
      href={panel.href}
      className="group relative flex min-h-[46rem] flex-1 overflow-hidden bg-surface-container-low focus-visible:outline-none"
    >
      <div
        className={cn(
          "absolute inset-0 scale-[1.04] bg-cover bg-center grayscale transition-all duration-700 ease-[var(--ease-editorial)] group-hover:scale-100 group-hover:grayscale-0",
          isVA ? "brightness-[0.75]" : "brightness-[0.72]",
        )}
        style={{ backgroundImage: `url(${panel.image})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/80 transition-all duration-700 ease-[var(--ease-editorial)] group-hover:bg-background/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-background/10" />

      <div className="relative z-10 flex h-full w-full flex-col justify-end p-8 md:p-12 lg:p-16 xl:p-20">
        <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary/75">
          {panel.eyebrow}
        </span>

        <h1
          className={cn(
            "mt-5 max-w-[12ch] leading-[0.95] text-on-surface transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:-translate-y-1",
            isVA
              ? "font-headline text-5xl italic font-medium md:text-7xl"
              : "font-body text-5xl font-extrabold uppercase tracking-[-0.05em] md:text-7xl",
          )}
        >
          {panel.title}
        </h1>

        <p
          className={cn(
            "mt-6 max-w-md text-lg leading-8 text-on-surface-variant transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:-translate-y-1",
            isVA ? "font-headline" : "font-body",
          )}
        >
          {panel.description}
        </p>

        <div className="mt-10 inline-flex items-center gap-4 text-on-surface">
          <span
            className={cn(
              "border-b border-on-surface/30 pb-1 text-lg transition-all duration-500 ease-[var(--ease-editorial)] group-hover:border-on-surface",
              isVA ? "font-headline" : "font-body font-bold",
            )}
          >
            {panel.ctaLabel}
          </span>

          {isVA ? (
            <ArrowRight className="h-5 w-5 transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:translate-x-2" />
          ) : (
            <Terminal className="h-5 w-5 transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:translate-x-2" />
          )}
        </div>
      </div>
    </Link>
  );
}
