// frontend/components/se/VisualSeparationSection.tsx
import { Reveal } from "@/components/shared/Reveal";

export function VisualSeparationSection() {
  return (
    <section className="page-frame pb-20 md:pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-sm bg-surface-container-low p-10 md:p-16">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute left-[8%] top-[18%] h-px w-[32%] bg-outline-variant/30" />
            <div className="absolute left-[20%] top-[42%] h-px w-[55%] bg-outline-variant/30" />
            <div className="absolute left-[52%] top-[24%] h-[34%] w-px bg-outline-variant/30" />
            <div className="absolute left-[72%] top-[52%] h-[26%] w-px bg-outline-variant/30" />
            <div className="absolute left-[14%] top-[60%] h-3 w-3 rounded-full border border-outline-variant/40" />
            <div className="absolute left-[48%] top-[18%] h-3 w-3 rounded-full border border-outline-variant/40" />
            <div className="absolute left-[78%] top-[48%] h-3 w-3 rounded-full border border-outline-variant/40" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="font-label text-[10px] uppercase tracking-[0.24em] text-outline">
              Signal Separation
            </p>
            <h2 className="mt-4 font-headline text-4xl leading-tight text-on-surface md:text-5xl">
              Clear architecture begins with clear boundaries.
            </h2>
            <p className="mt-4 text-sm leading-7 text-on-surface-variant md:text-base">
              Good systems do not hide complexity by pretending it does not
              exist. They separate concerns, respect structure, and make future
              work easier.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
