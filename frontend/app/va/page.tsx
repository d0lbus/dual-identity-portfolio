// frontend/app/va/page.tsx
import { PageShell } from "@/components/layout/PageShell";
import { VASectionHero } from "@/components/va/VASectionHero";
import { ValueBento } from "@/components/va/ValueBento";
import { ServicePreviewList } from "@/components/va/ServicePreviewList";
import { ExperienceToolsSection } from "@/components/va/ExperienceToolsSection";
import { QuoteBanner } from "@/components/va/QuoteBanner";
import { vaHomeHero, vaQuoteBanners } from "@/data/va";

export default function VAPage() {
  return (
    <PageShell className="space-y-0">
      <VASectionHero
        eyebrow={vaHomeHero.eyebrow}
        title={vaHomeHero.title}
        description={vaHomeHero.description}
        image={vaHomeHero.asideImage}
        imagePosition="center"
      />
      <ValueBento />
      <ServicePreviewList />
      <ExperienceToolsSection />
      <QuoteBanner {...vaQuoteBanners.home} />
    </PageShell>
  );
}
