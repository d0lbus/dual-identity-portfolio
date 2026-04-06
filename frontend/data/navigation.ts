import { ArrowLeftRight, LucideGit, FileText } from "lucide-react";
import type { NavigationLink, RailLink } from "@/types/navigation";

export const primaryNavigation: NavigationLink[] = [
  { label: "Dual Identity", href: "/" },
  { label: "VA", href: "/va" },
  { label: "SE", href: "/se" },
];

export const railNavigation: RailLink[] = [
  { label: "Identity", href: "/", icon: ArrowLeftRight },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "GitHub", href: "#", icon: Github },
  { label: "Resume", href: "#", icon: FileText },
];
