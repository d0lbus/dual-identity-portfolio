// frontend/components/va/RecurringStrengths.tsx
import { vaRecurringStrengths } from "@/data/va";
import { Reveal } from "@/components/shared/Reveal";

export function RecurringStrengths() {
  return (
    <section className="page-frame py-20 md:py-28">
      <div className="rounded-sm bg-surface-container-low p-10 md:p-14">
        <Reveal>
          <p className="font-label text-[10px] uppercase tracking-[0.26em] text-outline">
            The Curator’s DNA
          </p>
          <h2 className="mt-4 font-headline text-4xl leading-tight text-on-surface md:text-5xl">
            Recurring Strengths
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {vaRecurringStrengths.map((item) => (
            <Reveal key={item.id}>
              <article>
                <h3 className="font-headline text-2xl italic text-on-surface">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
