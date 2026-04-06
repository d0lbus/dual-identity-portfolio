import Link from "next/link";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-outline-variant/10 bg-surface-container-low px-6 py-10 lg:pl-28">
      <div className="page-frame flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="font-headline text-xl italic text-on-surface">
            {siteConfig.name}
          </p>
          <p className="max-w-xl text-sm leading-7 text-on-surface-variant">
            Dark editorial portfolio foundation prepared for the dual identity,
            VA, and SE route system.
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-label text-[11px] uppercase tracking-[0.18em] text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
