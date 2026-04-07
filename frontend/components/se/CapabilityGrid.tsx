// frontend/components/se/CapabilityGrid.tsx
import { seCapabilities } from "@/data/se";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function CapabilityGrid() {
  return (
    <section className="page-frame py-20 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Capabilities"
          title="Technical execution that stays useful beyond the first release."
          className="mb-12"
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {seCapabilities.map((item) => (
          <Reveal key={item.id}>
            <article className="h-full rounded-sm bg-surface-container p-8 md:p-10">
              <h3 className="font-body text-2xl font-semibold tracking-[-0.04em] text-on-surface">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
