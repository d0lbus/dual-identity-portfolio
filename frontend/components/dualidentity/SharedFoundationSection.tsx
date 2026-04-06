// frontend/components/dualidentity/SharedFoundationSection.tsx
import { sharedFoundationContent } from "@/data/site";
import { Eyebrow } from "@/components/shared/Eyebrow";
import { Reveal } from "@/components/shared/Reveal";

export function SharedFoundationSection() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-[110rem] gap-14 px-6 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20 lg:px-16">
        <Reveal>
          <div className="relative h-[28rem] overflow-hidden rounded-sm bg-surface-container-low md:h-[34rem]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-45 mix-blend-luminosity transition-opacity duration-700 ease-[var(--ease-editorial)] hover:opacity-60"
              style={{
                backgroundImage: `url(${sharedFoundationContent.image})`,
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>
        </Reveal>

        <Reveal>
          <div className="space-y-8">
            <Eyebrow>{sharedFoundationContent.eyebrow}</Eyebrow>

            <h2 className="max-w-[18ch] font-headline text-4xl leading-tight text-on-surface md:text-5xl">
              The intersection of <span className="italic">empathy</span> and{" "}
              <span className="font-body font-bold uppercase tracking-[-0.04em]">
                logic
              </span>
              .
            </h2>

            <div className="space-y-6">
              {sharedFoundationContent.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-2xl text-lg leading-8 text-on-surface-variant"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid gap-8 pt-4 sm:grid-cols-2">
              {sharedFoundationContent.points.map((point) => (
                <div key={point.label} className="space-y-3">
                  <span className="font-label text-[10px] uppercase tracking-[0.28em] text-primary">
                    {point.label}
                  </span>
                  <p className="text-sm leading-7 text-on-surface-variant">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
