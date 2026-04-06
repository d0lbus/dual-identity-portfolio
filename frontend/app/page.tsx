import { PageShell } from "@/components/layout/PageShell";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SurfaceCard } from "@/components/shared/SurfaceCard";

export default function HomePage() {
  return (
    <PageShell>
      <section className="page-frame py-20 md:py-28">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-8">
              <Eyebrow>Phase 1 / Shared Foundation</Eyebrow>
              <h1 className="max-w-4xl font-headline text-5xl leading-tight text-on-surface md:text-7xl">
                The visual shell is now prepared for the dual-identity build.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-on-surface-variant md:text-xl">
                This placeholder exists only to validate the shared editorial
                system before the actual dual identity landing page is built in
                Phase 2.
              </p>
              <div className="flex flex-wrap gap-4">
                <PrimaryButton href="/">Foundation Ready</PrimaryButton>
                <PrimaryButton href="/va" variant="ghost">
                  VA Route Next
                </PrimaryButton>
              </div>
            </div>

            <SurfaceCard className="min-h-[360px] bg-surface-container-low">
              <div className="flex h-full flex-col justify-between gap-10">
                <div className="space-y-4">
                  <Eyebrow>Shared System</Eyebrow>
                  <p className="font-body text-2xl leading-9 text-on-surface">
                    Serif-led identity, tonal surfaces, fixed navigation,
                    desktop side rail, and restrained motion.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-on-surface-variant">
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-[0.22em] text-primary">
                      Fonts
                    </p>
                    <p className="mt-2">Noto Serif, Manrope, Inter</p>
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-[0.22em] text-primary">
                      Tone
                    </p>
                    <p className="mt-2">
                      Deep charcoal, layered, architectural
                    </p>
                  </div>
                </div>
              </div>
            </SurfaceCard>
          </div>
        </Reveal>
      </section>
      <section className="bg-surface-container-low py-20 md:py-28">
        <div className="page-frame space-y-12">
          <SectionHeading
            eyebrow="Foundation Pieces"
            title="These are the only parts implemented in this pass."
            description="The goal here is to stabilize the system that every later page will inherit, not to start the actual dual identity layout yet."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <SurfaceCard>
              <Eyebrow>01</Eyebrow>
              <h3 className="mt-5 font-headline text-2xl text-on-surface">
                Shared layout shell
              </h3>
              <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                Header, side rail, footer, and desktop content offset are
                already structured for reuse.
              </p>
            </SurfaceCard>

            <SurfaceCard className="bg-surface-container-high">
              <Eyebrow>02</Eyebrow>
              <h3 className="mt-5 font-headline text-2xl text-on-surface">
                Tokenized styling
              </h3>
              <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                Shared color tokens, font roles, spacing rhythm, and restrained
                motion rules are centralized.
              </p>
            </SurfaceCard>

            <SurfaceCard>
              <Eyebrow>03</Eyebrow>
              <h3 className="mt-5 font-headline text-2xl text-on-surface">
                Reusable primitives
              </h3>
              <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                Eyebrows, section headings, surface cards, CTA buttons, and
                reveal wrappers are ready for Phase 2.
              </p>
            </SurfaceCard>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
