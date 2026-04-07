// frontend/components/se/ExperienceCanvas.tsx
import type { SEExperience } from "@/types/se";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/shared/Reveal";

type ExperienceCanvasProps = {
  experiences: SEExperience[];
  mode?: "preview" | "full";
};

export function ExperienceCanvas({
  experiences,
  mode = "preview",
}: ExperienceCanvasProps) {
  const items = mode === "preview" ? experiences.slice(0, 2) : experiences;
  const featured = items.find((item) => item.featured) ?? items[0];
  const supporting = items.filter((item) => item.id !== featured?.id);

  return (
    <section className="page-frame py-20 md:py-28">
      <div className="grid gap-4 md:grid-cols-3">
        {featured ? (
          <Reveal>
            <article className="rounded-sm bg-surface-container p-8 md:col-span-2 md:p-10">
              <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
                {featured.timeframe}
              </p>
              <h2 className="mt-4 font-body text-3xl font-extrabold uppercase tracking-[-0.05em] text-on-surface md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-3 font-headline text-2xl italic text-on-surface">
                {featured.organization}
              </p>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-on-surface-variant">
                {featured.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {featured.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm bg-surface-container-high px-3 py-2 font-label text-[10px] uppercase tracking-[0.22em] text-on-surface"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ) : null}

        <div className="grid gap-4">
          {supporting.map((item, index) => (
            <Reveal key={item.id}>
              <article
                className={cn(
                  "h-full rounded-sm bg-surface-container p-8",
                  mode === "full" && index === supporting.length - 1
                    ? "md:col-span-1"
                    : "",
                )}
              >
                <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
                  {item.timeframe}
                </p>
                <h3 className="mt-3 font-body text-2xl font-semibold tracking-[-0.04em] text-on-surface">
                  {item.title}
                </h3>
                <p className="mt-2 font-headline text-xl italic text-on-surface">
                  {item.organization}
                </p>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  {item.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="font-label text-[10px] uppercase tracking-[0.22em] text-outline"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
