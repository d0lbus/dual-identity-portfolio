// frontend/types/se.ts
export type SEHeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export type SETechnicalCard = {
  id: string;
  label: string;
  title: string;
  description: string;
  variant?: "wide" | "tall" | "default" | "light";
};

export type SESkillStat = {
  id: string;
  label: string;
  value: string;
};

export type SECapability = {
  id: string;
  title: string;
  description: string;
};

export type SEProject = {
  id: string;
  name: string;
  category: string;
  problem: string;
  outcome: string;
  summary: string;
  stack: string[];
  featured?: boolean;
};

export type SEStackGroup = {
  id: string;
  title: string;
  summary: string;
  items: string[];
  variant?: "default" | "wide" | "inset" | "light";
};

export type SEExperience = {
  id: string;
  title: string;
  organization: string;
  timeframe: string;
  summary: string;
  highlights: string[];
  featured?: boolean;
};

export type SECredential = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  summary: string;
  variant?: "default" | "wide" | "light";
};

export type SEBuildArea = {
  id: string;
  title: string;
  description: string;
};

export type SECollaborationPoint = {
  id: string;
  title: string;
  description: string;
};

export type SEContactChannel = {
  id: string;
  label: string;
  value: string;
};

export type SETechStripItem = {
  id: string;
  label: string;
};
