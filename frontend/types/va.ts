// frontend/types/va.ts
export type VABentoCard = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tone?: "dark" | "light";
  metric?: string;
};

export type VAServicePreview = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export type VAServiceHighlight = {
  id: string;
  title: string;
  description: string;
  bullets?: string[];
  tone?: "default" | "light";
};

export type VAServiceCategory = {
  id: string;
  number: string;
  title: string;
  summary: string;
  items: string[];
};

export type VAWorkflowStep = {
  id: string;
  title: string;
  description: string;
};

export type VAWhyWorkPoint = {
  id: string;
  title: string;
  description: string;
};

export type VAMetric = {
  id: string;
  label: string;
  value: string;
};

export type VAExperience = {
  id: string;
  timeframe: string;
  role: string;
  organization: string;
  summary: string;
  highlights: string[];
  tone?: "featured" | "default";
};

export type VAStrength = {
  id: string;
  title: string;
  description: string;
};

export type VASkillGroup = {
  id: string;
  title: string;
  description?: string;
  skills: string[];
  tone?: "default" | "wide" | "light";
};

export type VASoftSkill = {
  id: string;
  label: string;
  title: string;
  description: string;
};

export type VAIdealPartner = {
  id: string;
  title: string;
  description: string;
};

export type VADirectChannel = {
  id: string;
  label: string;
  value: string;
};
