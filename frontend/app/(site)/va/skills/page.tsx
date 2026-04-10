// frontend/app/va/skills/page.tsx
import { PageShell } from "@/components/layout/PageShell";
import { VASectionHero } from "@/components/va/VASectionHero";
import { SkillsBento } from "@/components/va/SkillsBento";
import { SoftSkillsSection } from "@/components/va/SoftSkillsSection";
import { QuoteBanner } from "@/components/va/QuoteBanner";
import { vaQuoteBanners, vaSkillsHero } from "@/data/va";

export default function VASkillsPage() {
  return (
    <PageShell className="space-y-0">
      <VASectionHero
        eyebrow={vaSkillsHero.eyebrow}
        title={vaSkillsHero.title}
        description={vaSkillsHero.description}
        image={vaSkillsHero.image}
      />
      <SkillsBento />
      <SoftSkillsSection />
      <QuoteBanner {...vaQuoteBanners.skills} light={false} />
    </PageShell>
  );
}
