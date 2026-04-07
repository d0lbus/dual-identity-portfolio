// frontend/components/va/ContactPanel.tsx
import { vaContactQuote, vaDirectChannels } from "@/data/va";
import { Reveal } from "@/components/shared/Reveal";

export function ContactPanel() {
  return (
    <Reveal>
      <div className="space-y-8">
        <div>
          <h2 className="font-headline text-4xl leading-tight text-on-surface md:text-5xl">
            Direct Channels
          </h2>

          <div className="mt-8 space-y-6">
            {vaDirectChannels.map((channel) => (
              <div key={channel.id}>
                <p className="font-label text-[10px] uppercase tracking-[0.22em] text-outline">
                  {channel.label}
                </p>
                <p className="mt-2 text-2xl leading-tight text-on-surface md:text-3xl">
                  {channel.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-sm bg-surface-container-low">
          <div
            className="h-[18rem]"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.28), rgba(0,0,0,0.5)), url(${vaContactQuote.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-hidden="true"
          />
          <div className="p-6">
            <p className="font-headline text-lg italic leading-8 text-on-surface">
              “{vaContactQuote.text}”
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
