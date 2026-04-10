// frontend/app/se/tech-stack/page.tsx
import { PageShell } from "@/components/layout/PageShell";
import { SEHero } from "@/components/se/SEHero";
import { StackBento } from "@/components/se/StackBento";
import { seHomeHero } from "@/data/se";

export default function SETechStackPage() {
  return (
    <PageShell className="space-y-0">
      <SEHero
        eyebrow="Tech Stack"
        title="A stack arranged by system role, not by trend."
        description="This is the engineering layer behind the work: programming languages, frameworks, data tools, and practical strengths shaped into a readable structure."
        image={seHomeHero.image}
      />
      <StackBento />
    </PageShell>
  );
}
