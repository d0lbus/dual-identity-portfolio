// frontend/components/layout/SideRail.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { railNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

function getRailContext(pathname: string) {
  if (pathname.startsWith("/va")) {
    return "Virtual Assistance";
  }

  if (pathname.startsWith("/se")) {
    return "Software Engineering";
  }

  return "Dual Identity";
}

export function SideRail() {
  const pathname = usePathname();
  const contextLabel = getRailContext(pathname);

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-20 border-r border-outline-variant/15 bg-surface-container-lowest lg:flex lg:flex-col lg:items-center lg:py-24">
      <div className="flex h-full flex-col items-center">
        <div className="font-headline text-xl italic text-primary">
          {siteConfig.shortName}
        </div>

        <div className="mt-14 flex flex-col gap-5">
          {railNavigation.map(({ href, icon: Icon, label }) => {
            const active = href !== "#" && pathname === href;

            return (
              <Link
                key={label}
                href={href}
                className={cn(
                  "group flex flex-col items-center gap-2 rounded-sm p-3 tailored-hover",
                  active
                    ? "bg-surface-container-high text-on-surface"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface",
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="font-label text-[9px] uppercase tracking-[0.22em]">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-auto flex flex-col items-center gap-4">
          <div className="h-14 w-px bg-outline-variant/30" />
          <span className="origin-center rotate-180 [writing-mode:vertical-rl] font-label text-[9px] uppercase tracking-[0.28em] text-outline">
            {contextLabel}
          </span>
        </div>
      </div>
    </aside>
  );
}
