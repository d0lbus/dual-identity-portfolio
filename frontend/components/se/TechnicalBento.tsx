// frontend/components/se/TechnicalBento.tsx
import { seTechnicalCards } from "@/data/se";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/shared/Reveal";

export function TechnicalBento() {
  return (
    <section className="bg-surface-container-low py-16 md:py-20">
      <div className="page-frame">
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-[minmax(14rem,auto)_minmax(14rem,auto)]">
          {seTechnicalCards.map((card) => (
            <Reveal key={card.id}>
              <article
                className={cn(
                  "h-full rounded-sm p-8 md:p-10",
                  card.variant === "light"
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container text-on-surface",
                  card.variant === "wide" ? "md:col-span-2" : "",
                  card.variant === "tall" ? "md:row-span-2" : "",
                )}
              >
                <p
                  className={cn(
                    "font-label text-[10px] uppercase tracking-[0.24em]",
                    card.variant === "light"
                      ? "text-on-primary/80"
                      : "text-outline",
                  )}
                >
                  {card.label}
                </p>

                <h2
                  className={cn(
                    "mt-6 leading-tight",
                    card.variant === "wide"
                      ? "max-w-[16ch] font-headline text-4xl md:text-5xl"
                      : "font-body text-3xl font-bold tracking-[-0.04em]",
                  )}
                >
                  {card.title}
                </h2>

                <p
                  className={cn(
                    "mt-4 max-w-2xl text-sm leading-7",
                    card.variant === "light"
                      ? "text-on-primary/80"
                      : "text-on-surface-variant",
                  )}
                >
                  {card.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
