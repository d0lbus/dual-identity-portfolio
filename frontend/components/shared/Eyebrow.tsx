import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "font-label text-[10px] uppercase tracking-[0.32em] text-outline",
        className,
      )}
    >
      {children}
    </span>
  );
}
