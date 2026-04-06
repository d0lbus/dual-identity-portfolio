// frontend/components/dualidentity/CapabilityBento.tsx
import { capabilityCards } from "@/data/site";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { CapabilityCard } from "@/components/dualidentity/CapabilityCard";
import { Reveal } from "@/components/shared/Reveal";

export function CapabilityBento() {
  return (
    <section className="bg-surface-container-low py-20 md:py-24">
      <div className="mx-auto w-full max-w-[120rem] px-6 md:px-10 lg:px-16">
        <Reveal>
          <div className="mb-12">
            <Eyebrow>Functional Toolkit</Eyebrow>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {capabilityCards.map((card) => (
              <CapabilityCard key={card.id} card={card} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
