import Link from "next/link";
import { cn } from "@/lib/cn";

type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
};

export function PrimaryButton({
  href,
  children,
  variant = "solid",
  className,
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-sm px-5 py-3 text-xs uppercase tracking-[0.18em] tailored-hover",
        variant === "solid"
          ? "bg-primary text-on-primary hover:tracking-[0.22em]"
          : "bg-transparent text-primary hover:bg-surface-container-high",
        className,
      )}
    >
      {children}
    </Link>
  );
}
