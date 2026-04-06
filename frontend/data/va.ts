// frontend/data/va.ts
import type {
  VABentoCard,
  VADirectChannel,
  VAExperience,
  VAIdealPartner,
  VAMetric,
  VAServiceCategory,
  VAServiceHighlight,
  VAServicePreview,
  VASkillGroup,
  VASoftSkill,
  VAStrength,
  VAWhyWorkPoint,
  VAWorkflowStep,
} from "@/types/va";

export const vaHomeHero = {
  eyebrow: "Executive Virtual Assistance",
  title: "Architectural support for scaling visions.",
  description:
    "I bridge the gap between high-level strategy and operational precision. For founders and executives, I provide the structural integrity your business needs to grow without friction.",
  asideImage:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80",
};

export const vaValueCards: VABentoCard[] = [
  {
    id: "precision",
    title: "Precision over Proximity",
    description:
      "My approach is rooted in engineering logic. I build systems that automate the mundane and elevate the essential.",
  },
  {
    id: "strategy",
    title: "01. Strategy",
    subtitle: "Alignment First",
    description:
      "The work starts with structure, clear priorities, and business-aware execution.",
    tone: "light",
  },
  {
    id: "execution",
    title: "02. Execution",
    subtitle: "Flawless Delivery",
    description:
      "Every deliverable is carried with discretion, speed, and predictable follow-through.",
  },
  {
    id: "growth",
    title: "Business Growth",
    description:
      "Freeing up executive time through curated operational workflows and calendar architecture.",
    metric: "20h+",
  },
];

export const vaServicePreview: VAServicePreview[] = [
  {
    id: "admin",
    number: "01",
    title: "Executive Administration",
    description:
      "Inbox zero strategy, complex travel mapping, and stakeholder liaison services for high-worth operators.",
  },
  {
    id: "ops",
    number: "02",
    title: "Operational Architecture",
    description:
      "Designing Notion ecosystems, CRM automation, and internal SOP development to ensure team scalability.",
  },
  {
    id: "pm",
    number: "03",
    title: "Project Management",
    description:
      "Overseeing technical builds and content launches from planning to retrospective using clear systems and accountability.",
  },
];

export const vaExperienceHighlights = [
  {
    id: "lead-ops",
    timeframe: "2021 — Present",
    title: "Lead Operations Strategist",
    description:
      "Managing a portfolio of digital operations, publishing pipelines, and founder-facing administrative systems with a focus on clarity and consistency.",
  },
  {
    id: "exec-support",
    timeframe: "2021 — 2024",
    title: "Executive Assistant to CEO",
    description:
      "Point of contact for global stakeholders, documentation handling, and communication support in high-stakes working environments.",
  },
];

export const vaToolsSnapshot = {
  title: "Tools Snapshot",
  tools: [
    "Notion",
    "Slack Ops",
    "Calendly",
    "Airtable",
    "Zapier",
    "QuickBooks",
  ],
  quote:
    "Efficiency is not about doing more. It is about doing what matters with architectural precision.",
};

export const vaQuoteBanners = {
  home: {
    title: "Ready to architect your business for scale?",
    primaryLabel: "Book a Discovery Call",
    primaryHref: "/va/contact",
  },
  services: {
    title: "Ready to refine your operations?",
    primaryLabel: "Secure Your Consultation",
    primaryHref: "/va/contact",
  },
  experience: {
    title: "Ready to elevate your infrastructure?",
    primaryLabel: "Start a Consultation",
    primaryHref: "/va/contact",
    secondaryLabel: "Download Portfolio PDF",
    secondaryHref: "#",
  },
  skills: {
    title: "Ready to elevate your infrastructure?",
    primaryLabel: "Initiate Collaboration",
    primaryHref: "/va/contact",
    secondaryLabel: "Download Full CV",
    secondaryHref: "#",
  },
  contact: {
    title: "Ready to curate your next breakthrough?",
    primaryLabel: "Schedule a Call",
    primaryHref: "/va/contact",
    secondaryLabel: "View Experience",
    secondaryHref: "/va/experience",
    backgroundImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
  },
};

export const vaServicesHero = {
  eyebrow: "Services & Capabilities",
  title: "Structured Refinement",
  description:
    "Navigating the intersection of operational excellence and technical precision. I provide high-touch support designed for creators, engineers, and visionaries.",
};

export const vaServiceHighlights: VAServiceHighlight[] = [
  {
    id: "admin-ops",
    title: "Admin & Operations",
    description:
      "Seamlessly managing the gears of your business. From complex scheduling to system audits, I ensure your operational foundation is unbreakable.",
    bullets: [
      "Executive calendar strategy",
      "SOP development",
      "CRM maintenance",
    ],
  },
  {
    id: "research",
    title: "Web Research",
    description:
      "Deep-dive data gathering, competitor analysis, and market synthesis for informed decision-making.",
  },
  {
    id: "website",
    title: "Website Support",
    description:
      "Technical maintenance and CMS curation for modern web properties.",
  },
  {
    id: "youtube",
    title: "YouTube Ops",
    description:
      "Workflow management for high-growth channels and publishing teams.",
    tone: "light",
  },
];

export const vaServiceCategories: VAServiceCategory[] = [
  {
    id: "content",
    number: "01",
    title: "Content & YouTube Ops",
    summary:
      "Architecting the bridge between raw creativity and published impact.",
    items: [
      "Workflow management",
      "Trello and Notion content pipeline architecture",
      "Monthly growth synthesis and retention analysis",
    ],
  },
  {
    id: "copy",
    number: "02",
    title: "Copywriting",
    summary:
      "Precision language tailored to your brand’s unique architectural voice.",
    items: [
      "Email campaigns",
      "High-conversion sequences that feel human and high-end",
      "LinkedIn thought leadership and technical blog posts",
    ],
  },
];

export const vaWorkflowSteps: VAWorkflowStep[] = [
  {
    id: "discovery",
    title: "Discovery",
    description:
      "A deep-dive audit of your current systems, bottlenecks, and long-term vision.",
  },
  {
    id: "integration",
    title: "Integration",
    description:
      "Seamlessly weaving support into your existing stack with minimal friction.",
  },
  {
    id: "optimization",
    title: "Optimization",
    description:
      "Continuous refinement cycles to ensure peak operational efficiency.",
  },
];

export const vaWhyWorkWithMe = {
  image:
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80",
  metric: "100%",
  metricLabel: "Client-Focused Lens",
  title: "Engineering the Administrative.",
};

export const vaWhyWorkPoints: VAWhyWorkPoint[] = [
  {
    id: "systems",
    title: "Systems Over Tasks",
    description:
      "I do not just complete tasks. I design systems that make the work cleaner, lighter, and more repeatable.",
  },
  {
    id: "dual-identity",
    title: "The Dual Identity",
    description:
      "As both a software engineer and VA, I speak the language of service and infrastructure without translation overhead.",
  },
  {
    id: "clarity",
    title: "Radical Clarity",
    description:
      "Proactive communication that removes ambiguity and keeps projects moving without anxiety.",
  },
];

export const vaExperienceHero = {
  eyebrow: "Professional Lineage",
  title: "Precision in Execution.",
  description:
    "A record of scaling operations, securing infrastructure, and delivering high-touch services for high-stakes environments.",
};

export const vaExperienceMetrics: VAMetric[] = [
  { id: "ownership", label: "Ownership", value: "100% Retained" },
  { id: "reach", label: "Scale Managed", value: "50M+ Impressions" },
  { id: "uptime", label: "Uptime", value: "99.9% Reliable" },
  { id: "finish", label: "Client Satisfaction", value: "Tier 1 Polish" },
];

export const vaExperiences: VAExperience[] = [
  {
    id: "leon",
    timeframe: "Present",
    role: "Operations Lead",
    organization: "Leon! Animations",
    summary:
      "Architecting the pipeline for high-fidelity motion graphics production. Managing cross-functional creative teams and ensuring surgical precision in delivery timelines.",
    highlights: ["Operations", "Pipeline Design", "Creative Ops"],
    tone: "featured",
  },
  {
    id: "pillar",
    timeframe: "2023 — 2024",
    role: "Content Systems Support",
    organization: "Pillar & Scroll",
    summary:
      "Bridging the gap between legacy wisdom and digital scale through content structure, brand integrity, and systems automation.",
    highlights: ["Content Strategy", "Brand Integrity", "Systems Automation"],
  },
  {
    id: "nerf",
    timeframe: "2021 — 2022",
    role: "Technical & Logistics Support",
    organization: "Nerf Esports",
    summary:
      "Spearheaded the technical backend for competitive event operations, ensuring low-latency communication and broadcast stability.",
    highlights: ["Technical Infrastructure"],
  },
  {
    id: "lofit",
    timeframe: "Founder",
    role: "Brand Operations",
    organization: "Lofit Clothing",
    summary:
      "E-commerce optimization and digital presence curation. Transitioned brand identity from local boutique to global aesthetic player.",
    highlights: ["Director Impact"],
  },
  {
    id: "youtube-ops",
    timeframe: "YouTube Ops",
    role: "Publishing Systems",
    organization: "Creator Operations",
    summary:
      "Managing the invisible engine behind publishing velocity, metadata optimization, distribution, and growth analytics.",
    highlights: ["Growth Velocity"],
  },
  {
    id: "upsert",
    timeframe: "Current",
    role: "Founder",
    organization: "Upsert Solution",
    summary:
      "Software engineering foundations focused on business websites, API-ready thinking, and maintainable digital operations for client-facing brands.",
    highlights: ["Secure Architecture", "Scalable Databases"],
  },
];

export const vaRecurringStrengths: VAStrength[] = [
  {
    id: "ownership",
    title: "Unwavering Ownership",
    description:
      "I do not just complete tasks. I own the outcome. Whether it is a technical stack or a client service flow, the buck stops with me.",
  },
  {
    id: "clarity",
    title: "Architectural Clarity",
    description:
      "Simplifying complexity into actionable structures. I build systems that outlast the current project and preserve long-term sanity.",
  },
  {
    id: "finish",
    title: "The High-Touch Finish",
    description:
      "Precision is the difference between a product and a brand. Every deliverable is curated to represent the highest level of polish.",
  },
];

export const vaSkillsHero = {
  eyebrow: "Capabilities Matrix",
  title: "Refining Practical Competence.",
  description:
    "A curated balance between the meticulous organization of a high-tier Virtual Assistant and the architectural logic of a Software Engineer.",
  image:
    "https://images.unsplash.com/photo-1516321310764-8d5f1cf5b1df?auto=format&fit=crop&q=80",
};

export const vaSkillGroups: VASkillGroup[] = [
  {
    id: "admin",
    title: "Admin & Operations",
    description:
      "Complex scheduling, inbox architecture, and process automation across moving parts.",
    skills: ["Complex Scheduling", "Inbox Architecture", "Process Automation"],
    tone: "wide",
  },
  {
    id: "research",
    title: "Deep Research",
    description:
      "Systematic information gathering, data synthesis, and competitor analysis for informed decision-making.",
    skills: ["Accuracy", "Synthesis", "Insight Mapping"],
  },
  {
    id: "editorial",
    title: "Editorial Polish",
    description:
      "Copywriting, content scheduling, and precision proofreading for brand-safe communication.",
    skills: ["Ghostwriting", "SEO", "Content Setup"],
  },
  {
    id: "technical",
    title: "Technical Stack",
    description:
      "Frontend and backend fluency that strengthens execution quality in technical environments.",
    skills: [
      "React / Tailwind",
      "Node.js / Python",
      "API Integration",
      "Relational Data Management",
    ],
    tone: "default",
  },
];

export const vaSoftSkills: VASoftSkill[] = [
  {
    id: "logic",
    label: "01 / Logic",
    title: "Analytical Precision",
    description:
      "Approaching tasks with a developer’s mindset by breaking complex problems into modular, manageable components.",
  },
  {
    id: "empathy",
    label: "02 / Empathy",
    title: "High-Touch Service",
    description:
      "Understanding the nuances of professional relationships and delivering support that anticipates executive needs.",
  },
  {
    id: "speed",
    label: "03 / Speed",
    title: "Rapid Integration",
    description:
      "Learning new tools and ecosystems in hours, not days. Perpetual learning is the default state.",
  },
  {
    id: "focus",
    label: "04 / Focus",
    title: "Deep Work Native",
    description:
      "Optimized for long periods of focused execution across engineering, research, and administrative builds.",
  },
];

export const vaSystematicFlow = {
  eyebrow: "Execution Philosophy",
  title: "The Systematic Flow",
  image:
    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80",
  steps: [
    {
      id: "audit",
      title: "Audit & Deconstruction",
      description:
        "Identifying bottlenecks and mapping the current operational landscape before touching a single tool.",
    },
    {
      id: "implementation",
      title: "Architectural Implementation",
      description:
        "Building clean, scalable systems using the most efficient technology, from simple requests to automated pipelines.",
    },
    {
      id: "optimization",
      title: "Iterative Optimization",
      description:
        "Continuous refinement based on real-world usage data and feedback loops.",
    },
  ],
};

export const vaContactHero = {
  eyebrow: "Initiate Collaboration",
  title: "Let’s build meaningful systems.",
  description:
    "Whether you need technical infrastructure or high-level administrative precision, I curate solutions that scale with your vision.",
};

export const vaIdealPartners: VAIdealPartner[] = [
  {
    id: "founders",
    title: "Scale-Up Founders",
    description:
      "Visionaries who need a partner to translate chaotic growth into structured engineering and operational excellence.",
  },
  {
    id: "architects",
    title: "Technical Architects",
    description:
      "Teams requiring precise execution, clean documentation, and calm administrative support for complex project lifecycles.",
  },
  {
    id: "directors",
    title: "Creative Directors",
    description:
      "Studio heads looking for an operator who can manage high-touch client relationships and technical delivery.",
  },
];

export const vaDirectChannels: VADirectChannel[] = [
  {
    id: "email",
    label: "Electronic Mail",
    value: "jandolbyaquino19@gmail.com",
  },
  {
    id: "social",
    label: "Professional Handle",
    value: "@curator_engineering",
  },
  {
    id: "timezone",
    label: "Global Presence",
    value: "Remote / UTC+8",
  },
];

export const vaContactQuote = {
  text: "Logic will get you from A to B. Imagination will take you everywhere.",
  image:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80",
};

export const vaInquiryTypes = [
  "Software Engineering Partnership",
  "Executive Support Retainer",
  "Operations Architecture",
  "Content & Publishing Support",
  "General Inquiry",
];

export const vaEngagementLifecycle: VAWorkflowStep[] = [
  {
    id: "discovery",
    title: "Discovery Dial",
    description:
      "A 20-minute focused consultation to assess synergy and define project architectural requirements.",
  },
  {
    id: "proposal",
    title: "System Proposal",
    description:
      "A detailed roadmap covering technical stack, administrative workflow, and milestones for delivery.",
  },
  {
    id: "iteration",
    title: "Agile Iteration",
    description:
      "Active development or support phase with weekly syncs and transparent progress tracking via shared tools.",
  },
];
