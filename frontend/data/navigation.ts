// frontend/data/navigation.ts
import {
  ArrowLeftRight,
  BriefcaseBusiness,
  FileUser,
  FolderGit2,
} from "lucide-react";
import type { NavigationLink, RailLink } from "@/types/navigation";

export const primaryNavigation: NavigationLink[] = [
  { label: "Dual Identity", href: "/" },
  { label: "VA", href: "/va" },
  { label: "SE", href: "/se" },
];

export const vaNavigation: NavigationLink[] = [
  { label: "Services", href: "/va/services" },
  { label: "Experience", href: "/va/experience" },
  { label: "Skills", href: "/va/skills" },
  { label: "Contact", href: "/va/contact" },
];

export const seNavigation: NavigationLink[] = [
  { label: "Projects", href: "/se/projects" },
  { label: "Tech Stack", href: "/se/tech-stack" },
  { label: "Experience", href: "/se/experience" },
  { label: "Credentials", href: "/se/credentials" },
  { label: "Contact", href: "/se/contact" },
];

export const railNavigation: RailLink[] = [
  { label: "Identity", href: "/", icon: ArrowLeftRight },
  { label: "LinkedIn", href: "#", icon: BriefcaseBusiness },
  { label: "GitHub", href: "#", icon: FolderGit2 },
  { label: "Resume", href: "#", icon: FileUser },
];
