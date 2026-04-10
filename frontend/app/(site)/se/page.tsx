// frontend/app/se/page.tsx
import { PageShell } from "@/components/layout/PageShell";
import { SEHero } from "@/components/se/SEHero";
import { TechnicalBento } from "@/components/se/TechnicalBento";
import { SkillsSnapshot } from "@/components/se/SkillsSnapshot";
import { CapabilityGrid } from "@/components/se/CapabilityGrid";
import { ProjectGrid } from "@/components/se/ProjectGrid";
import { ExperienceCanvas } from "@/components/se/ExperienceCanvas";
import { CollaborationSection } from "@/components/se/CollaborationSection";
import { seExperiences, seHomeHero, seProjects } from "@/data/se";

export default function SEPage() {
  return (
    <PageShell className="space-y-0">
      <SEHero
        eyebrow={seHomeHero.eyebrow}
        title={seHomeHero.title}
        description={seHomeHero.description}
        image={seHomeHero.image}
      />
      <TechnicalBento />
      <SkillsSnapshot />
      <CapabilityGrid />
      <ProjectGrid projects={seProjects} mode="preview" showMoreLink />
      <ExperienceCanvas experiences={seExperiences} mode="preview" />
      <CollaborationSection />
    </PageShell>
  );
}
