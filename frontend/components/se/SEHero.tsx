// frontend/components/se/SEHero.tsx
import { Eyebrow } from "@/components/shared/Eyebrow";
import { Reveal } from "@/components/shared/Reveal";

type SEHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export function SEHero({ eyebrow, title, description, image }: SEHeroProps) {
  return (
    <section className="page-frame py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <Reveal>
          <div className="space-y-6">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="max-w-[12ch] font-body text-5xl font-extrabold uppercase tracking-[-0.05em] text-on-surface md:text-7xl">
              {title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-on-surface-variant">
              {description}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden rounded-sm bg-surface-container-low">
            <div
              className="h-[20rem] md:h-[24rem]"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.48)), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-hidden="true"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-background/40 px-6 py-5 backdrop-blur-sm">
              <p className="font-label text-[10px] uppercase tracking-[0.24em] text-primary">
                Technical Editorial Posture
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
