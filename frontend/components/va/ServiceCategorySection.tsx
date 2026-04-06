// frontend/components/va/ServiceCategorySection.tsx
import type { VAServiceCategory } from "@/types/va";
import { Reveal } from "@/components/shared/Reveal";

type ServiceCategorySectionProps = {
  category: VAServiceCategory;
};

export function ServiceCategorySection({
  category,
}: ServiceCategorySectionProps) {
  return (
    <Reveal>
      <section className="grid gap-6 border-b border-outline-variant/15 py-10 md:grid-cols-[4rem_0.9fr_1.1fr] md:gap-10">
        <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
          {category.number}
        </p>

        <div>
          <h3 className="font-headline text-3xl leading-tight text-on-surface">
            {category.title}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-on-surface-variant">
            {category.summary}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {category.items.map((item) => (
            <div
              key={item}
              className="rounded-sm bg-surface-container px-5 py-5 text-sm leading-7 text-on-surface-variant"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
