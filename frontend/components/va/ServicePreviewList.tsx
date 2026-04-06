// frontend/components/va/ServicePreviewList.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { vaServicePreview } from "@/data/va";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ServicePreviewList() {
  return (
    <section className="page-frame py-20 md:py-28">
      <Reveal>
        <SectionHeading title="Curated Services" className="mb-14" />
      </Reveal>

      <div className="space-y-10">
        {vaServicePreview.map((service) => (
          <Reveal key={service.id}>
            <div className="grid gap-5 border-b border-outline-variant/15 pb-10 md:grid-cols-[4rem_1fr_1.2fr] md:gap-10">
              <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
                {service.number}
              </p>
              <h3 className="font-headline text-3xl leading-tight text-on-surface">
                {service.title}
              </h3>
              <p className="text-sm leading-7 text-on-surface-variant">
                {service.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10">
          <Link
            href="/va/services"
            className="inline-flex items-center gap-3 font-label text-[11px] uppercase tracking-[0.22em] text-on-surface transition-all duration-300 hover:tracking-[0.28em]"
          >
            View Full Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
