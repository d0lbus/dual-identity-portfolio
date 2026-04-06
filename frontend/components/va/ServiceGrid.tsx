// frontend/components/va/ServiceGrid.tsx
import { vaServiceHighlights } from "@/data/va";
import { Reveal } from "@/components/shared/Reveal";

export function ServiceGrid() {
  const [primary, secondary, tertiary, lightCard] = vaServiceHighlights;

  return (
    <section className="bg-surface-container-low py-14 md:py-18">
      <div className="page-frame">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-sm bg-surface-container p-8 md:p-10">
              <p className="font-label text-[10px] uppercase tracking-[0.22em] text-primary">
                Core Service
              </p>
              <h2 className="mt-6 font-headline text-4xl leading-tight text-on-surface">
                {primary.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-on-surface-variant">
                {primary.description}
              </p>

              <ul className="mt-6 space-y-2">
                {primary.bullets?.map((bullet) => (
                  <li
                    key={bullet}
                    className="font-label text-[10px] uppercase tracking-[0.22em] text-on-surface"
                  >
                    • {bullet}
                  </li>
                ))}
              </ul>
            </article>

            <div className="grid gap-4">
              <article className="rounded-sm bg-surface-container p-8 md:p-10">
                <h3 className="font-body text-2xl font-semibold tracking-[-0.03em] text-on-surface">
                  {secondary.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  {secondary.description}
                </p>
              </article>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-sm bg-surface-container p-8">
                  <h3 className="font-body text-xl font-semibold tracking-[-0.03em] text-on-surface">
                    {tertiary.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                    {tertiary.description}
                  </p>
                </article>

                <article className="rounded-sm bg-primary p-8 text-on-primary">
                  <h3 className="font-body text-xl font-semibold tracking-[-0.03em]">
                    {lightCard.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-on-primary/80">
                    {lightCard.description}
                  </p>
                </article>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
