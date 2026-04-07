// frontend/components/se/TechStripMarquee.tsx
import { seTechStrip } from "@/data/se";

export function TechStripMarquee() {
  const items = [...seTechStrip, ...seTechStrip];

  return (
    <section className="overflow-hidden border-y border-outline-variant/15 bg-surface-container-low py-4">
      <div className="animate-[marquee_24s_linear_infinite] whitespace-nowrap">
        {items.map((item) => (
          <span
            // eslint-disable-next-line react-hooks/purity
            key={`${item.id}-${Math.random().toString(36).slice(2, 8)}`}
            className="mx-5 inline-flex font-label text-[10px] uppercase tracking-[0.28em] text-on-surface-variant"
          >
            {item.label}
          </span>
        ))}
      </div>
    </section>
  );
}
