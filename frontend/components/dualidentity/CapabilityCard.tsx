// frontend/components/dualidentity/CapabilityCard.tsx
import {
  Blocks,
  BriefcaseBusiness,
  CloudCog,
  MonitorCog,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/cn";
import type { CapabilityCardData } from "@/data/site";

type CapabilityCardProps = {
  card: CapabilityCardData;
};

const iconMap: Record<CapabilityCardData["icon"], LucideIcon> = {
  architecture: Blocks,
  operations: Sparkles,
  frontend: MonitorCog,
  liaison: BriefcaseBusiness,
  cloud: CloudCog,
};

export function CapabilityCard({ card }: CapabilityCardProps) {
  const Icon = iconMap[card.icon];

  return (
    <article className="tailored-hover min-w-[18rem] rounded-sm bg-surface-container-high p-8 md:min-w-[20rem] md:p-10">
      <Icon className="h-5 w-5 text-primary" />

      <h3
        className={cn(
          "mt-6 text-2xl leading-tight text-on-surface",
          card.tone === "serif"
            ? "font-headline italic"
            : "font-body font-bold tracking-[-0.03em]",
        )}
      >
        {card.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-on-surface-variant">
        {card.description}
      </p>
    </article>
  );
}
