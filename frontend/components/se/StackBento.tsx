// frontend/components/se/StackBento.tsx
import { seStackGroups } from "@/data/se";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function StackBento() {
  return (
    <section className="page-frame py-20 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Structured by category, not reduced to a badge cloud."
          className="mb-12"
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {seStackGroups.map((group) => (
          <Reveal key={group.id}>
            <article
              className={cn(
                "h-full rounded-sm p-8 md:p-10",
                group.variant === "light"
                  ? "bg-primary text-on-primary"
                  : group.variant === "inset"
                    ? "bg-surface-container-lowest text-on-surface"
                    : "bg-surface-container text-on-surface",
                group.variant === "wide" ? "md:col-span-2" : "",
              )}
            >
              <h3 className="font-body text-2xl font-bold tracking-[-0.04em]">
                {group.title}
              </h3>
              <p
                className={cn(
                  "mt-4 max-w-2xl text-sm leading-7",
                  group.variant === "light"
                    ? "text-on-primary/80"
                    : "text-on-surface-variant",
                )}
              >
                {group.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={cn(
                      "rounded-sm px-3 py-2 font-label text-[10px] uppercase tracking-[0.22em]",
                      group.variant === "light"
                        ? "bg-on-primary/10 text-on-primary"
                        : "bg-surface-container-high text-on-surface",
                    )}
                  >
                    {item}
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
