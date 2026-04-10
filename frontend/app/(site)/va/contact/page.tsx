// frontend/app/va/contact/page.tsx
import { PageShell } from "@/components/layout/PageShell";
import { VASectionHero } from "@/components/va/VASectionHero";
import { IdealPartnerships } from "@/components/va/IdealPartnerships";
import { ContactPanel } from "@/components/va/ContactPanel";
import { ContactForm } from "@/components/va/ContactForm";
import { EngagementProcess } from "@/components/va/EngagementProcess";
import { QuoteBanner } from "@/components/va/QuoteBanner";
import { vaContactHero, vaQuoteBanners } from "@/data/va";

export default function VAContactPage() {
  return (
    <PageShell className="space-y-0">
      <VASectionHero
        eyebrow={vaContactHero.eyebrow}
        title={vaContactHero.title}
        description={vaContactHero.description}
      />

      <IdealPartnerships />

      <section className="page-frame py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ContactPanel />
          <ContactForm />
        </div>
      </section>

      <EngagementProcess />

      <QuoteBanner {...vaQuoteBanners.contact} light={false} />
    </PageShell>
  );
}
