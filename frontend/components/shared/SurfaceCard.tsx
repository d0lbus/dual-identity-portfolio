import { cn } from "@/lib/cn";

type SurfaceCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function SurfaceCard({ children, className }: SurfaceCardProps) {
  return (
    <div
      className={cn(
        "surface-panel soft-outline tailored-hover rounded-sm p-8 md:p-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
