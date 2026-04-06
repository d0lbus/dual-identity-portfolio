"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/cn";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="page-frame">
        <div className="glass-nav mt-4 flex h-18 items-center justify-between rounded-sm px-4 soft-outline md:px-6 lg:pl-8 lg:pr-6">
          <Link
            href="/"
            className="font-headline text-lg italic tracking-tight text-on-surface md:text-xl"
          >
            {siteConfig.name}
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {primaryNavigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-label text-[11px] uppercase tracking-[0.2em] tailored-hover",
                    isActive
                      ? "text-on-surface"
                      : "text-on-surface-variant hover:text-on-surface",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Open navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-surface-container-high text-on-surface md:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
            <PrimaryButton href="/se/contact" className="hidden md:inline-flex">
              {siteConfig.ctaLabel}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </header>
  );
}
