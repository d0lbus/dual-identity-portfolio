// frontend/data/site.ts
export type IdentityPanelData = {
  id: "va" | "se";
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  image: string;
  tone: "serif" | "sans";
};

export type CapabilityCardData = {
  id: string;
  icon: "architecture" | "operations" | "frontend" | "liaison" | "cloud";
  title: string;
  description: string;
  tone?: "serif" | "sans";
};

export const siteConfig = {
  name: "Architectural Curator",
  shortName: "AC",
  description:
    "A dual-identity editorial portfolio for Virtual Assistance and Software Engineering.",
  ctaLabel: "Connect",
};

export const identityPanels: IdentityPanelData[] = [
  {
    id: "va",
    eyebrow: "Identity 01",
    title: "Virtual Assistant",
    description:
      "Precision-led executive support and organizational architecture for visionary leaders.",
    href: "/va",
    ctaLabel: "Explore Service",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    tone: "serif",
  },
  {
    id: "se",
    eyebrow: "Identity 02",
    title: "Software Engineer",
    description:
      "Constructing resilient digital infrastructure with technical rigor and aesthetic intent.",
    href: "/se",
    ctaLabel: "View Projects",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
    tone: "sans",
  },
];

export const sharedFoundationContent = {
  eyebrow: "Two Identities, One Foundation",
  title: "The intersection of empathy and logic.",
  paragraphs: [
    "I build solutions that do not just function. They serve. My dual identity allows me to navigate high-level business strategy as a Virtual Assistant while executing complex technical requirements as a Software Engineer.",
    "Whether it is streamlining operational workflows or architecting a React-based application, the objective remains the same: clarity through precision.",
  ],
  image:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
  points: [
    {
      label: "Service Logic",
      text: "Client-centric systems designed for effortless scale and human connection.",
    },
    {
      label: "Technical Core",
      text: "Clean, maintainable codebases built on modern standards and modularity.",
    },
  ],
};

export const capabilityCards: CapabilityCardData[] = [
  {
    id: "system-architecture",
    icon: "architecture",
    title: "System Architecture",
    description:
      "Designing robust backend structures and API integrations with Python and Node.js.",
    tone: "sans",
  },
  {
    id: "operations-management",
    icon: "operations",
    title: "Operations Management",
    description:
      "Streamlining business workflows and CRM architecture for maximum efficiency.",
    tone: "serif",
  },
  {
    id: "frontend-engineering",
    icon: "frontend",
    title: "Frontend Engineering",
    description:
      "Crafting immersive user interfaces using React, Tailwind, and restrained motion.",
    tone: "sans",
  },
  {
    id: "executive-liaison",
    icon: "liaison",
    title: "Executive Liaison",
    description:
      "High-touch communication and project management for founders and c-suite stakeholders.",
    tone: "serif",
  },
  {
    id: "cloud-deployment",
    icon: "cloud",
    title: "Cloud Deployment",
    description:
      "Managing modern deployment flows, environments, and maintainable release practices.",
    tone: "sans",
  },
];

export const integratedCTA = {
  title: "Start a conversation with both halves.",
  primaryLabel: "Hire the VA",
  primaryHref: "/va/contact",
  secondaryLabel: "Hire the Engineer",
  secondaryHref: "/se/contact",
};
