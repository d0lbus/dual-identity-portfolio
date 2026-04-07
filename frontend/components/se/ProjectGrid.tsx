// frontend/components/se/ProjectGrid.tsx
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { SEProject } from "@/types/se";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/shared/Reveal";

type ProjectGridProps = {
  projects: SEProject[];
  mode?: "preview" | "full";
  showMoreLink?: boolean;
};

export function ProjectGrid({
  projects,
  mode = "preview",
  showMoreLink = false,
}: ProjectGridProps) {
  const items = mode === "preview" ? projects.slice(0, 3) : projects;
  const featured = items.find((item) => item.featured) ?? items[0];
  const rest = items.filter((item) => item.id !== featured?.id);

  return (
    <section className="page-frame py-20 md:py-28">
      <div className="grid gap-4 md:grid-cols-3">
        {featured ? (
          <Reveal>
            <article className="rounded-sm bg-surface-container p-8 md:col-span-2 md:p-10">
              <p className="font-label text-[10px] uppercase tracking-[0.22em] text-primary">
                Featured Project
              </p>
              <h2 className="mt-6 font-body text-4xl font-extrabold uppercase tracking-[-0.05em] text-on-surface md:text-5xl">
                {featured.name}
              </h2>
              <p className="mt-3 font-label text-[10px] uppercase tracking-[0.22em] text-outline">
                {featured.category}
              </p>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-on-surface-variant">
                {featured.summary}
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
                    Problem
                  </p>
                  <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                    {featured.problem}
                  </p>
                </div>

                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
                    Outcome
                  </p>
                  <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                    {featured.outcome}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {featured.stack.map((stack) => (
                  <span
                    key={stack}
                    className="rounded-sm bg-surface-container-high px-3 py-2 font-label text-[10px] uppercase tracking-[0.22em] text-on-surface"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ) : null}

        <div className="grid gap-4">
          {rest.slice(0, mode === "preview" ? 2 : 2).map((item) => (
            <Reveal key={item.id}>
              <article className="h-full rounded-sm bg-surface-container p-8">
                <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
                  {item.category}
                </p>
                <h3 className="mt-4 font-body text-2xl font-semibold tracking-[-0.04em] text-on-surface">
                  {item.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  {item.summary}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {mode === "full" && rest.length > 2 ? (
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {rest.slice(2).map((item, index) => (
            <Reveal key={item.id}>
              <article
                className={cn(
                  "h-full rounded-sm bg-surface-container p-8 md:p-10",
                  index % 3 === 0 ? "md:col-span-2" : "",
                )}
              >
                <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
                  {item.category}
                </p>
                <h3 className="mt-4 font-body text-2xl font-semibold tracking-[-0.04em] text-on-surface md:text-3xl">
                  {item.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  {item.summary}
                </p>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
                      Problem
                    </p>
                    <p className="mt-2 text-sm leading-7 text-on-surface-variant">
                      {item.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
                      Outcome
                    </p>
                    <p className="mt-2 text-sm leading-7 text-on-surface-variant">
                      {item.outcome}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((stack) => (
                    <span
                      key={stack}
                      className="font-label text-[10px] uppercase tracking-[0.22em] text-outline"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      ) : null}

      {showMoreLink ? (
        <Reveal>
          <div className="mt-10">
            <Link
              href="/se/projects"
              className="inline-flex items-center gap-3 font-label text-[11px] uppercase tracking-[0.22em] text-on-surface transition-all duration-300 hover:tracking-[0.28em]"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      ) : null}
    </section>
  );
}
