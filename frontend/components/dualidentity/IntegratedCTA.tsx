// frontend/components/dualidentity/IntegratedCTA.tsx
import Link from "next/link";
import { integratedCTA } from "@/data/site";
import { Reveal } from "@/components/shared/Reveal";

export function IntegratedCTA() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto w-full max-w-[110rem] px-6 md:px-10 lg:px-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm bg-surface-container p-10 text-center md:p-16">
            <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="font-headline text-3xl leading-tight text-on-surface md:text-5xl">
                {integratedCTA.title}
              </h2>

              <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row">
                <Link
                  href={integratedCTA.primaryHref}
                  className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 font-label text-xs uppercase tracking-[0.2em] text-on-primary transition-all duration-500 ease-[var(--ease-editorial)] hover:tracking-[0.26em]"
                >
                  {integratedCTA.primaryLabel}
                </Link>

                <Link
                  href={integratedCTA.secondaryHref}
                  className="inline-flex items-center justify-center rounded-sm bg-transparent px-8 py-4 font-label text-xs uppercase tracking-[0.2em] text-on-surface transition-all duration-500 ease-[var(--ease-editorial)] hover:bg-surface-container-high hover:tracking-[0.26em]"
                >
                  {integratedCTA.secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
