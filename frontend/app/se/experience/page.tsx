// frontend/app/se/experience/page.tsx
import { PageShell } from "@/components/layout/PageShell";
import { SEHero } from "@/components/se/SEHero";
import { ExperienceCanvas } from "@/components/se/ExperienceCanvas";
import { CollaborationSection } from "@/components/se/CollaborationSection";
import { seExperiences, seHomeHero } from "@/data/se";

export default function SEExperiencePage() {
  return (
    <PageShell className="space-y-0">
      <SEHero
        eyebrow="Experience"
        title="Curated through contribution, iteration, and ownership."
        description="Professional exposure, founder work, and hands-on delivery across product thinking, systems planning, and frontend implementation."
        image={seHomeHero.image}
      />
      <ExperienceCanvas experiences={seExperiences} mode="full" />
      <CollaborationSection />
    </PageShell>
  );
}
