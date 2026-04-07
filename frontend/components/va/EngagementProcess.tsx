// frontend/components/va/EngagementProcess.tsx
import { vaEngagementLifecycle } from "@/data/va";
import { Reveal } from "@/components/shared/Reveal";

export function EngagementProcess() {
  return (
    <section className="bg-surface-container-low py-20 md:py-24">
      <div className="page-frame">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-4xl leading-tight text-on-surface md:text-5xl">
              Engagement Lifecycle
            </h2>
            <p className="mt-4 text-sm leading-7 text-on-surface-variant">
              From first contact to final delivery, the process is defined by
              transparency and iterative precision.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {vaEngagementLifecycle.map((step, index) => (
            <Reveal key={step.id}>
              <article className="rounded-sm bg-surface p-8 md:p-10">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-outline-variant/20 font-label text-sm uppercase tracking-[0.2em] text-on-surface">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 font-body text-xl font-semibold tracking-[-0.03em] text-on-surface">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
