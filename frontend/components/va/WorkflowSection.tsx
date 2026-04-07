// frontend/components/va/WorkflowSection.tsx
import type { VAWorkflowStep } from "@/types/va";
import { Reveal } from "@/components/shared/Reveal";

type WorkflowSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: VAWorkflowStep[];
  centered?: boolean;
};

export function WorkflowSection({
  eyebrow,
  title,
  description,
  steps,
  centered = true,
}: WorkflowSectionProps) {
  return (
    <section className="bg-surface-container-low py-20 md:py-24">
      <div className="page-frame">
        <Reveal>
          <div
            className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
          >
            <p className="font-label text-[10px] uppercase tracking-[0.26em] text-outline">
              {eyebrow}
            </p>
            <h2 className="mt-4 font-headline text-4xl leading-tight text-on-surface md:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-on-surface-variant md:text-base">
              {description}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.id}>
              <article className="rounded-sm bg-surface-container p-8 md:p-10">
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
