// frontend/components/layout/Footer.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  primaryNavigation,
  seNavigation,
  vaNavigation,
} from "@/data/navigation";
import { siteConfig } from "@/data/site";

function getFooterConfig(pathname: string) {
  if (pathname.startsWith("/va")) {
    return {
      brandHref: "/va",
      nav: vaNavigation,
    };
  }

  if (pathname.startsWith("/se")) {
    return {
      brandHref: "/se",
      nav: seNavigation,
    };
  }

  return {
    brandHref: "/",
    nav: primaryNavigation,
  };
}

export function Footer() {
  const pathname = usePathname();
  const { brandHref, nav } = getFooterConfig(pathname);

  return (
    <footer className="border-t border-outline-variant/10 bg-surface-container-low px-6 py-10 lg:pl-28">
      <div className="page-frame flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <Link
            href={brandHref}
            className="font-headline text-xl italic text-on-surface"
          >
            {siteConfig.name}
          </Link>
          <p className="max-w-xl text-sm leading-7 text-on-surface-variant">
            A dual-identity editorial portfolio shaped around service,
            architecture, and precise implementation.
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
