// frontend/components/va/ExperienceToolsSection.tsx
import { vaExperienceHighlights, vaToolsSnapshot } from "@/data/va";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ExperienceToolsSection() {
  return (
    <section className="page-frame py-20 md:py-28">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <Reveal>
          <div>
            <SectionHeading title="Experience Highlights" className="mb-10" />
            <div className="space-y-8">
              {vaExperienceHighlights.map((item) => (
                <article
                  key={item.id}
                  className="border-b border-outline-variant/15 pb-8 last:border-b-0"
                >
                  <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
                    {item.timeframe}
                  </p>
                  <h3 className="mt-3 font-body text-xl font-semibold tracking-[-0.03em] text-on-surface md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-on-surface-variant">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <aside className="rounded-sm bg-surface-container p-8 md:p-10">
            <h3 className="font-headline text-3xl italic text-on-surface">
              {vaToolsSnapshot.title}
            </h3>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {vaToolsSnapshot.tools.map((tool) => (
                <div
                  key={tool}
                  className="rounded-sm bg-surface-container-high px-4 py-3 font-label text-[10px] uppercase tracking-[0.22em] text-on-surface"
                >
                  {tool}
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-outline-variant/15 pt-6 font-headline text-lg italic leading-8 text-on-surface-variant">
              “{vaToolsSnapshot.quote}”
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
