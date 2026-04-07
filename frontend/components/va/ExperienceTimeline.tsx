// frontend/components/va/ExperienceTimeline.tsx
import { vaExperiences } from "@/data/va";
import { Reveal } from "@/components/shared/Reveal";

export function ExperienceTimeline() {
  const featured = vaExperiences.find((item) => item.tone === "featured");
  const supporting = vaExperiences.filter((item) => item.tone !== "featured");
  const upsert = supporting.find((item) => item.id === "upsert");
  const cards = supporting.filter((item) => item.id !== "upsert");

  return (
    <section className="page-frame py-16 md:py-20">
      <div className="space-y-4">
        {featured ? (
          <Reveal>
            <article className="rounded-sm bg-surface-container p-8 md:p-10">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
                    {featured.timeframe}
                  </p>
                  <h2 className="mt-3 font-headline text-4xl leading-tight text-on-surface">
                    {featured.organization}
                  </h2>
                  <p className="mt-3 font-body text-xl font-semibold tracking-[-0.03em] text-on-surface">
                    {featured.role}
                  </p>
                  <p className="mt-5 max-w-3xl text-sm leading-7 text-on-surface-variant">
                    {featured.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {featured.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm bg-surface-container-high px-3 py-2 font-label text-[10px] uppercase tracking-[0.22em] text-on-surface"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ) : null}

        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((item) => (
            <Reveal key={item.id}>
              <article className="h-full rounded-sm bg-surface-container p-8">
                <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
                  {item.timeframe}
                </p>
                <h3 className="mt-3 font-headline text-3xl leading-tight text-on-surface">
                  {item.organization}
                </h3>
                <p className="mt-3 font-body text-lg font-semibold tracking-[-0.03em] text-on-surface">
                  {item.role}
                </p>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  {item.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="font-label text-[10px] uppercase tracking-[0.22em] text-outline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {upsert ? (
          <Reveal>
            <article className="grid gap-6 rounded-sm bg-surface-container p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
              <div>
                <h3 className="font-headline text-4xl leading-tight text-on-surface">
                  {upsert.organization}
                </h3>
                <p className="mt-3 font-body text-xl font-semibold tracking-[-0.03em] text-on-surface">
                  {upsert.role}
                </p>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-on-surface-variant">
                  {upsert.summary}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {upsert.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-sm bg-surface-container-high px-6 py-8 text-center"
                  >
                    <p className="font-headline text-3xl text-on-surface">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
