// frontend/components/va/SkillsBento.tsx
import { vaSkillGroups } from "@/data/va";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/shared/Reveal";

export function SkillsBento() {
  return (
    <section className="page-frame py-14 md:py-18">
      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-[auto_auto]">
        {vaSkillGroups.map((group, index) => (
          <Reveal key={group.id}>
            <article
              className={cn(
                "rounded-sm p-8 md:p-10",
                group.tone === "light"
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container text-on-surface",
                group.tone === "wide" ? "md:col-span-2" : "",
                index === 3 ? "md:col-span-2" : "",
              )}
            >
              <h3 className="font-headline text-3xl leading-tight">
                {group.title}
              </h3>
              {group.description ? (
                <p
                  className={cn(
                    "mt-4 max-w-xl text-sm leading-7",
                    group.tone === "light"
                      ? "text-on-primary/80"
                      : "text-on-surface-variant",
                  )}
                >
                  {group.description}
                </p>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      "rounded-sm px-3 py-2 font-label text-[10px] uppercase tracking-[0.22em]",
                      group.tone === "light"
                        ? "bg-on-primary/10 text-on-primary"
                        : "bg-surface-container-high text-on-surface",
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
