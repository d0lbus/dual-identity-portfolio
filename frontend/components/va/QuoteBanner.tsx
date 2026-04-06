// frontend/components/va/QuoteBanner.tsx
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/shared/Reveal";

type QuoteBannerProps = {
  title: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  backgroundImage?: string;
  light?: boolean;
};

export function QuoteBanner({
  title,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  backgroundImage,
  light = true,
}: QuoteBannerProps) {
  return (
    <section className="page-frame py-20 md:py-28">
      <Reveal>
        <div
          className={cn(
            "relative overflow-hidden rounded-sm p-10 md:p-16",
            light
              ? "bg-primary text-on-primary"
              : "bg-surface-container text-on-surface",
          )}
        >
          {backgroundImage ? (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center opacity-35"
                style={{ backgroundImage: `url(${backgroundImage})` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-background/55" />
            </>
          ) : null}

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2
              className={cn(
                "font-headline text-4xl leading-tight md:text-6xl",
                backgroundImage ? "text-on-surface" : "",
              )}
            >
              {title}
            </h2>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
              <Link
                href={primaryHref}
                className={cn(
                  "inline-flex items-center justify-center rounded-sm px-8 py-4 font-label text-[11px] uppercase tracking-[0.22em] transition-all duration-300 hover:tracking-[0.28em]",
                  light && !backgroundImage
                    ? "bg-on-primary text-primary"
                    : "bg-primary text-on-primary",
                )}
              >
                {primaryLabel}
              </Link>

              {secondaryLabel && secondaryHref ? (
                <Link
                  href={secondaryHref}
                  className={cn(
                    "inline-flex items-center justify-center border px-8 py-4 font-label text-[11px] uppercase tracking-[0.22em] transition-all duration-300 hover:tracking-[0.28em]",
                    backgroundImage
                      ? "border-on-surface/20 text-on-surface"
                      : "border-outline-variant/20 text-current",
                  )}
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
