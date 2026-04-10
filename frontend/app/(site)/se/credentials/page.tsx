// frontend/app/se/credentials/page.tsx
import { PageShell } from "@/components/layout/PageShell";
import { SEHero } from "@/components/se/SEHero";
import { CredentialsGrid } from "@/components/se/CredentialsGrid";
import { seHomeHero } from "@/data/se";

export default function SECredentialsPage() {
  return (
    <PageShell className="space-y-0">
      <SEHero
        eyebrow="Credentials & Validation"
        title="Supporting proof that strengthens the engineering story."
        description="A record of exposure, technical learning, leadership, and structured documentation that reinforces the main body of work."
        image={seHomeHero.image}
      />
      <CredentialsGrid />
    </PageShell>
  );
}
