// frontend/app/se/projects/page.tsx
import { PageShell } from "@/components/layout/PageShell";
import { SEHero } from "@/components/se/SEHero";
import { ProjectGrid } from "@/components/se/ProjectGrid";
import { TechStripMarquee } from "@/components/se/TechStripMarquee";
import { seHomeHero, seProjects } from "@/data/se";

export default function SEProjectsPage() {
  return (
    <PageShell className="space-y-0">
      <SEHero
        eyebrow="Projects"
        title="Proof through shipped direction, not just stated capability."
        description="A curated collection of systems, platforms, and product-facing builds shaped around maintainability, structure, and real-world usefulness."
        image={seHomeHero.image}
      />
      <ProjectGrid projects={seProjects} mode="full" />
      <TechStripMarquee />
    </PageShell>
  );
}
