// frontend/app/page.tsx
import { PageShell } from "@/components/layout/PageShell";
import { IdentityGatewayHero } from "@/components/dualidentity/IdentityGatewayHero";
import { SharedFoundationSection } from "@/components/dualidentity/SharedFoundationSection";
import { CapabilityBento } from "@/components/dualidentity/CapabilityBento";
import { IntegratedCTA } from "@/components/dualidentity/IntegratedCTA";

export default function HomePage() {
  return (
    <PageShell className="space-y-0">
      <IdentityGatewayHero />
      <SharedFoundationSection />
      <CapabilityBento />
      <IntegratedCTA />
    </PageShell>
  );
}
