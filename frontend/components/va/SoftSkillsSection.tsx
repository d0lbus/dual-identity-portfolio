// frontend/components/va/SoftSkillsSection.tsx
import { vaSoftSkills, vaSystematicFlow } from "@/data/va";
import { Reveal } from "@/components/shared/Reveal";

export function SoftSkillsSection() {
  return (
    <>
      <section className="page-frame py-20 md:py-28">
        <div className="rounded-sm bg-surface-container-low p-10 md:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <h2 className="max-w-[8ch] font-headline text-4xl italic leading-tight text-on-surface md:text-6xl">
                The Cognitive Layer.
              </h2>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-2">
              {vaSoftSkills.map((item) => (
                <Reveal key={item.id}>
                  <article>
                    <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
                      {item.label}
                    </p>
                    <h3 className="mt-3 font-body text-xl font-semibold tracking-[-0.03em] text-on-surface">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-frame py-4 md:py-8">
        <div className="grid gap-6 rounded-sm bg-surface-container p-6 md:grid-cols-[1fr_0.95fr] md:p-8">
          <Reveal>
            <div
              className="min-h-[20rem] rounded-sm"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.42)), url(${vaSystematicFlow.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-hidden="true"
            />
          </Reveal>

          <Reveal>
            <div className="h-full rounded-sm bg-surface-container-high p-8 md:p-10">
              <p className="font-label text-[10px] uppercase tracking-[0.24em] text-outline">
                {vaSystematicFlow.eyebrow}
              </p>
              <h2 className="mt-4 font-headline text-4xl leading-tight text-on-surface">
                {vaSystematicFlow.title}
              </h2>

              <div className="mt-8 space-y-6">
                {vaSystematicFlow.steps.map((step, index) => (
                  <div key={step.id}>
                    <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
                      {["I", "II", "III"][index]}
                    </p>
                    <h3 className="mt-2 font-body text-xl font-semibold tracking-[-0.03em] text-on-surface">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-on-surface-variant">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
