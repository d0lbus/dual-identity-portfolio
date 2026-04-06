// frontend/components/dualidentity/IdentityGatewayHero.tsx
import { identityPanels } from "@/data/site";
import { IdentityPanel } from "@/components/dualidentity/IdentityPanel";

export function IdentityGatewayHero() {
  return (
    <section className="mx-auto w-full max-w-[120rem] px-4 md:px-6 lg:px-8">
      <div className="overflow-hidden rounded-sm bg-surface-container-low">
        <div className="flex min-h-[calc(100vh-8rem)] flex-col md:flex-row">
          {identityPanels.map((panel) => (
            <IdentityPanel key={panel.id} panel={panel} />
          ))}
        </div>
      </div>
    </section>
  );
}
