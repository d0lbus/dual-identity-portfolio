// frontend/components/va/WhyWorkWithMe.tsx
import { vaWhyWorkPoints, vaWhyWorkWithMe } from "@/data/va";
import { Reveal } from "@/components/shared/Reveal";

export function WhyWorkWithMe() {
  return (
    <section className="page-frame py-20 md:py-28">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm bg-surface-container-low">
            <div
              className="h-[26rem] md:h-[34rem]"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.42)), url(${vaWhyWorkWithMe.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-hidden="true"
            />
            <div className="absolute bottom-0 right-0 rounded-tl-sm bg-primary px-8 py-6 text-on-primary">
              <p className="font-headline text-4xl italic">
                {vaWhyWorkWithMe.metric}
              </p>
              <p className="mt-2 font-label text-[10px] uppercase tracking-[0.22em]">
                {vaWhyWorkWithMe.metricLabel}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <h2 className="max-w-[12ch] font-headline text-5xl leading-[0.95] text-on-surface md:text-6xl">
              {vaWhyWorkWithMe.title}
            </h2>

            <div className="mt-10 space-y-8">
              {vaWhyWorkPoints.map((point) => (
                <div key={point.id}>
                  <h3 className="font-body text-xl font-semibold tracking-[-0.03em] text-on-surface">
                    {point.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-on-surface-variant">
                    {point.description}
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
