// frontend/components/va/VASectionHero.tsx
import { Eyebrow } from "@/components/shared/Eyebrow";
import { Reveal } from "@/components/shared/Reveal";

type VASectionHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imagePosition?: "top" | "center";
};

export function VASectionHero({
  eyebrow,
  title,
  description,
  image,
  imagePosition = "center",
}: VASectionHeroProps) {
  return (
    <section className="page-frame py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
        <Reveal>
          <div className="space-y-6">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="max-w-[12ch] font-headline text-5xl leading-[0.92] text-on-surface md:text-7xl">
              {title}
            </h1>
            {!image ? (
              <p className="max-w-xl text-lg leading-8 text-on-surface-variant">
                {description}
              </p>
            ) : null}
          </div>
        </Reveal>

        <Reveal>
          {image ? (
            <div className="relative overflow-hidden rounded-sm bg-surface-container-low">
              <div
                className="h-[18rem] md:h-[20rem]"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0.42)), url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: imagePosition,
                }}
                aria-hidden="true"
              />
            </div>
          ) : (
            <div className="rounded-sm bg-surface-container-low p-8 md:p-10">
              <p className="max-w-md text-base leading-8 text-on-surface-variant">
                {description}
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
