// frontend/app/va/services/page.tsx
import { PageShell } from "@/components/layout/PageShell";
import { VASectionHero } from "@/components/va/VASectionHero";
import { ServiceGrid } from "@/components/va/ServiceGrid";
import { ServiceCategorySection } from "@/components/va/ServiceCategorySection";
import { WorkflowSection } from "@/components/va/WorkflowSection";
import { WhyWorkWithMe } from "@/components/va/WhyWorkWithMe";
import { QuoteBanner } from "@/components/va/QuoteBanner";
import {
  vaQuoteBanners,
  vaServiceCategories,
  vaServicesHero,
  vaWorkflowSteps,
} from "@/data/va";
import { SectionHeading } from "@/components/shared/SectionHeading";

export default function VAServicesPage() {
  return (
    <PageShell className="space-y-0">
      <VASectionHero
        eyebrow={vaServicesHero.eyebrow}
        title={vaServicesHero.title}
        description={vaServicesHero.description}
      />

      <ServiceGrid />

      <section className="page-frame py-20 md:py-28">
        <SectionHeading
          eyebrow="Service Spheres"
          title="The architectural breakdown of value."
          className="mb-10"
        />
        <div>
          {vaServiceCategories.map((category) => (
            <ServiceCategorySection key={category.id} category={category} />
          ))}
        </div>
      </section>

      <WorkflowSection
        eyebrow="The Workflow Architecture"
        title="Collaboration built on logic, transparency, and relentless iterative improvement."
        description="A quieter process layer that keeps every engagement predictable, documented, and easy to move through."
        steps={vaWorkflowSteps}
      />

      <WhyWorkWithMe />

      <QuoteBanner {...vaQuoteBanners.services} light={false} />
    </PageShell>
  );
}
