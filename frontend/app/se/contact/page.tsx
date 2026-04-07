// frontend/app/se/contact/page.tsx
import { PageShell } from "@/components/layout/PageShell";
import { SEHero } from "@/components/se/SEHero";
import { BuildCapabilitySummary } from "@/components/se/BuildCapabilitySummary";
import { CollaborationSection } from "@/components/se/CollaborationSection";
import { ContactConversionPanel } from "@/components/se/ContactConversionPanel";
import { VisualSeparationSection } from "@/components/se/VisualSeparationSection";
import { seContactHero } from "@/data/se";

export default function SEContactPage() {
  return (
    <PageShell className="space-y-0">
      <SEHero
        eyebrow={seContactHero.eyebrow}
        title={seContactHero.title}
        description={seContactHero.description}
        image={seContactHero.image}
      />
      <BuildCapabilitySummary />
      <section className="page-frame py-4 md:py-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <CollaborationSection showActions={false} />
          <ContactConversionPanel />
        </div>
      </section>
      <VisualSeparationSection />
    </PageShell>
  );
}
