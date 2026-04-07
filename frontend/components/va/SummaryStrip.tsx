// frontend/components/va/SummaryStrip.tsx
import type { VAMetric } from "@/types/va";

type SummaryStripProps = {
  items: VAMetric[];
};

export function SummaryStrip({ items }: SummaryStripProps) {
  return (
    <section className="bg-surface-container-low py-5">
      <div className="page-frame grid gap-6 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.id} className="space-y-2">
            <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
              {item.label}
            </p>
            <p className="font-headline text-2xl leading-tight text-on-surface md:text-3xl">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
