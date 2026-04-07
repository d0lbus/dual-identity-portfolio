// frontend/components/se/SkillsSnapshot.tsx
import { seSkillStats } from "@/data/se";
import { Reveal } from "@/components/shared/Reveal";

export function SkillsSnapshot() {
  return (
    <section className="page-frame py-16 md:py-20">
      <div className="grid gap-4 md:grid-cols-4">
        {seSkillStats.map((item) => (
          <Reveal key={item.id}>
            <article className="rounded-sm bg-surface-container p-6 md:p-8">
              <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
                {item.label}
              </p>
              <p className="mt-4 font-body text-xl font-semibold tracking-[-0.03em] text-on-surface md:text-2xl">
                {item.value}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
