// frontend/components/va/ValueBento.tsx
import { vaValueCards } from "@/data/va";
import { Reveal } from "@/components/shared/Reveal";

export function ValueBento() {
  const [featured, strategy, execution, growth] = vaValueCards;

  return (
    <section className="bg-surface-container-low py-14 md:py-18">
      <div className="page-frame">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-[minmax(13rem,auto)_minmax(8rem,auto)]">
            <article className="rounded-sm bg-surface-container p-8 md:col-span-2 md:row-span-1 md:p-10">
              <p className="font-label text-[10px] uppercase tracking-[0.24em] text-primary">
                Value Foundation
              </p>
              <h2 className="mt-20 font-headline text-4xl leading-tight text-on-surface">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-on-surface-variant">
                {featured.description}
              </p>
            </article>

            <article className="rounded-sm bg-primary p-8 text-on-primary md:p-10">
              <h3 className="font-headline text-3xl leading-tight">
                {strategy.title}
              </h3>
              <p className="mt-14 font-label text-[10px] uppercase tracking-[0.24em]">
                {strategy.subtitle}
              </p>
            </article>

            <article className="rounded-sm bg-surface-container p-8 md:p-10">
              <h3 className="font-headline text-3xl leading-tight text-on-surface">
                {execution.title}
              </h3>
              <p className="mt-14 font-label text-[10px] uppercase tracking-[0.24em] text-outline">
                {execution.subtitle}
              </p>
            </article>

            <article className="rounded-sm bg-surface-container p-8 md:col-span-2 md:p-10">
              <div className="flex h-full flex-col justify-between gap-8 md:flex-row md:items-end">
                <div>
                  <h3 className="font-headline text-3xl leading-tight text-on-surface">
                    {growth.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-on-surface-variant">
                    {growth.description}
                  </p>
                </div>
                <p className="font-headline text-5xl italic text-on-surface">
                  {growth.metric}
                </p>
              </div>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
