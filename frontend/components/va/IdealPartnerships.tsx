// frontend/components/va/IdealPartnerships.tsx
import { vaIdealPartners } from "@/data/va";
import { Reveal } from "@/components/shared/Reveal";

export function IdealPartnerships() {
  return (
    <section className="bg-surface-container-low py-20 md:py-24">
      <div className="page-frame">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
            <h2 className="font-headline text-4xl leading-tight text-on-surface md:text-5xl">
              Ideal Partnerships
            </h2>
            <div className="h-px bg-outline-variant/15" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {vaIdealPartners.map((partner) => (
            <Reveal key={partner.id}>
              <article className="h-full rounded-sm bg-surface px-8 py-10">
                <h3 className="font-body text-xl font-semibold tracking-[-0.03em] text-on-surface">
                  {partner.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  {partner.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
