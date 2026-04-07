// frontend/app/va/experience/page.tsx
import { PageShell } from "@/components/layout/PageShell";
import { VASectionHero } from "@/components/va/VASectionHero";
import { SummaryStrip } from "@/components/va/SummaryStrip";
import { ExperienceTimeline } from "@/components/va/ExperienceTimeline";
import { RecurringStrengths } from "@/components/va/RecurringStrengths";
import { QuoteBanner } from "@/components/va/QuoteBanner";
import {
  vaExperienceHero,
  vaExperienceMetrics,
  vaQuoteBanners,
} from "@/data/va";

export default function VAExperiencePage() {
  return (
    <PageShell className="space-y-0">
      <VASectionHero
        eyebrow={vaExperienceHero.eyebrow}
        title={vaExperienceHero.title}
        description={vaExperienceHero.description}
      />
      <SummaryStrip items={vaExperienceMetrics} />
      <ExperienceTimeline />
      <RecurringStrengths />
      <QuoteBanner {...vaQuoteBanners.experience} light={false} />
    </PageShell>
  );
}
