import { Footer } from "@/components/layout/Footer";
import { SideRail } from "@/components/layout/SideRail";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { cn } from "@/lib/cn";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageShell({ children, className }: PageShellProps) {
  return (
    <div className="editorial-shell">
      <SiteHeader />
      <SideRail />
      <main className={cn("pt-28 lg:pl-20", className)}>{children}</main>
      <Footer />
    </div>
  );
}
