// frontend/components/se/CollaborationSection.tsx
import Link from "next/link";
import { seCollaborationPoints, seContactChannels } from "@/data/se";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { Reveal } from "@/components/shared/Reveal";

type CollaborationSectionProps = {
  showActions?: boolean;
};

export function CollaborationSection({
  showActions = true,
}: CollaborationSectionProps) {
  return (
    <section className="page-frame py-20 md:py-28">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <div className="space-y-8">
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.24em] text-outline">
                Collaboration
              </p>
              <h2 className="mt-4 max-w-[12ch] font-body text-4xl font-extrabold uppercase tracking-[-0.05em] text-on-surface md:text-5xl">
                Built for projects that need structure, not noise.
              </h2>
            </div>

            <div className="space-y-6">
              {seContactChannels.map((channel) => (
                <div key={channel.id}>
                  <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
                    {channel.label}
                  </p>
                  <p className="mt-2 text-xl leading-tight text-on-surface md:text-2xl">
                    {channel.value}
                  </p>
                </div>
              ))}
            </div>

            {showActions ? (
              <div className="flex flex-wrap gap-4">
                <PrimaryButton href="/se/contact">
                  Start a Project
                </PrimaryButton>
                <Link
                  href="/se/projects"
                  className="inline-flex items-center justify-center rounded-sm bg-transparent px-5 py-3 font-label text-xs uppercase tracking-[0.18em] text-primary transition-all duration-300 hover:bg-surface-container-high hover:tracking-[0.22em]"
                >
                  View Work
                </Link>
              </div>
            ) : null}
          </div>
        </Reveal>

        <div className="grid gap-4">
          {seCollaborationPoints.map((point) => (
            <Reveal key={point.id}>
              <article className="rounded-sm bg-surface-container p-8 md:p-10">
                <h3 className="font-body text-2xl font-semibold tracking-[-0.04em] text-on-surface">
                  {point.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  {point.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
