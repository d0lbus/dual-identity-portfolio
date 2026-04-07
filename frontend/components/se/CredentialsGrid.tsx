// frontend/components/se/CredentialsGrid.tsx
import { seCredentials } from "@/data/se";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/shared/Reveal";

export function CredentialsGrid() {
  return (
    <section className="page-frame py-20 md:py-28">
      <div className="grid gap-4 md:grid-cols-3">
        {seCredentials.map((item) => (
          <Reveal key={item.id}>
            <article
              className={cn(
                "h-full rounded-sm p-8 md:p-10",
                item.variant === "light"
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container text-on-surface",
                item.variant === "wide" ? "md:col-span-2" : "",
              )}
            >
              <p
                className={cn(
                  "font-label text-[10px] uppercase tracking-[0.22em]",
                  item.variant === "light"
                    ? "text-on-primary/80"
                    : "text-outline",
                )}
              >
                {item.issuer} / {item.year}
              </p>
              <h3 className="mt-4 font-body text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                {item.title}
              </h3>
              <p
                className={cn(
                  "mt-4 text-sm leading-7",
                  item.variant === "light"
                    ? "text-on-primary/80"
                    : "text-on-surface-variant",
                )}
              >
                {item.summary}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
