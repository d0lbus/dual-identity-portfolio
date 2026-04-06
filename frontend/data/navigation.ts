import {
  ArrowLeftRight,
  BriefcaseBusiness,
  FolderGit2,
  FileUser,
} from "lucide-react";
import type { NavigationLink, RailLink } from "@/types/navigation";

export const primaryNavigation: NavigationLink[] = [
  { label: "Dual Identity", href: "/" },
  { label: "VA", href: "/va" },
  { label: "SE", href: "/se" },
];

export const railNavigation: RailLink[] = [
  { label: "Identity", href: "/", icon: ArrowLeftRight },
  { label: "LinkedIn", href: "#", icon: BriefcaseBusiness },
  { label: "GitHub", href: "#", icon: FolderGit2 },
  { label: "Resume", href: "#", icon: FileUser },
];
