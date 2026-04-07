// frontend/data/se.ts
import type {
  SEBuildArea,
  SECapability,
  SECollaborationPoint,
  SEContactChannel,
  SECredential,
  SEExperience,
  SEHeroContent,
  SEProject,
  SESkillStat,
  SEStackGroup,
  SETechnicalCard,
  SETechStripItem,
} from "@/types/se";

export const seHomeHero: SEHeroContent = {
  eyebrow: "Software Engineering",
  title: "Systems thinking, translated into interface and infrastructure.",
  description:
    "I design and build practical digital systems that balance technical clarity, maintainability, and product-oriented execution. The work spans frontend delivery, backend structure, and operational thinking.",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
};

export const seTechnicalCards: SETechnicalCard[] = [
  {
    id: "product-posture",
    label: "Technical Positioning",
    title:
      "I build products with structural discipline, not isolated features.",
    description:
      "My engineering approach starts with user flow, data shape, and maintainability. Every implementation decision is tied back to long-term clarity.",
    variant: "wide",
  },
  {
    id: "frontend",
    label: "Frontend Systems",
    title: "Frontend",
    description:
      "React, Next.js, TypeScript, Tailwind, and interface architecture that stays clean under growth.",
  },
  {
    id: "backend",
    label: "Backend Systems",
    title: "Backend",
    description:
      "Fastify, Node.js, API design, validation layers, and scalable module organization.",
    variant: "tall",
  },
  {
    id: "delivery",
    label: "Execution",
    title: "Delivery",
    description:
      "From prototype to maintainable implementation, with structured thinking across technical and operational layers.",
    variant: "light",
  },
];

export const seSkillStats: SESkillStat[] = [
  { id: "frontend", label: "Frontend", value: "Next.js / React" },
  { id: "backend", label: "Backend", value: "Node / Fastify" },
  { id: "data", label: "Data", value: "Prisma / SQL" },
  { id: "workflow", label: "Workflow", value: "Systems-First" },
];

export const seCapabilities: SECapability[] = [
  {
    id: "web-platforms",
    title: "Web Platforms",
    description:
      "Building maintainable portfolio, admin, and product-facing platforms with clean routing, strong structure, and scalable component systems.",
  },
  {
    id: "app-logic",
    title: "Application Logic",
    description:
      "Translating requirements into feature sets, business rules, and modular flows that remain understandable as the product expands.",
  },
  {
    id: "api-integration",
    title: "API Integration",
    description:
      "Connecting frontend systems to support layers such as contact flows, chatbot logic, and future service modules without compromising the interface.",
  },
  {
    id: "data-modeling",
    title: "Data Modeling",
    description:
      "Shaping entities and relationships around real workflows so the database supports the product instead of fighting it.",
  },
  {
    id: "ui-systems",
    title: "UI Systems",
    description:
      "Design-aware implementation using shared tokens, reusable sections, and interaction patterns that preserve brand direction.",
  },
  {
    id: "execution-rhythm",
    title: "Execution Rhythm",
    description:
      "Balancing speed with reliability through clear sequencing, review passes, and frontend-first delivery where it matters.",
  },
];

export const seProjects: SEProject[] = [
  {
    id: "kayali-lms",
    name: "Project LMS",
    category: "Multi-Tenant Learning Platform",
    problem:
      "Hospitality training systems often break across roles, locations, and inconsistent learning flows.",
    outcome:
      "Designed a tenant-aware LMS direction with modular courses, AI-assisted training generation, and clear role separation.",
    summary:
      "A Laravel and React learning platform concept focused on scalable hotel training operations, structured content delivery, and administrative clarity.",
    stack: ["Laravel", "React", "MySQL", "Multi-Tenancy", "OpenAI"],
    featured: true,
  },
  {
    id: "portfolio-platform",
    name: "Dual Identity Portfolio",
    category: "Brand Platform",
    problem:
      "Most portfolios flatten technical and service work into one generic identity, weakening clarity.",
    outcome:
      "Built a route-based portfolio platform with distinct VA and SE paths while preserving one editorial design language.",
    summary:
      "A dark editorial monorepo portfolio with a frontend-first delivery sequence and a support backend for lead capture and chatbot use.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Fastify", "Prisma"],
  },
  {
    id: "filing-module",
    name: "Filing Module",
    category: "Internal System",
    problem:
      "Request handling and exports for operations teams needed clearer structure and more reliable data output.",
    outcome:
      "Worked on statistics logic, export structures, and support flows that improved maintainability and reporting clarity.",
    summary:
      "An internal module focused on request processing, export formatting, and technical documentation across operational scenarios.",
    stack: ["Node.js", "TypeScript", "Prisma", "MySQL"],
  },
  {
    id: "tindascan",
    name: "TindaScan",
    category: "POS / Bookkeeping",
    problem:
      "Small stores often need easier transaction tracking without enterprise-level system complexity.",
    outcome:
      "Defined an OCR-ready bookkeeping and POS direction with mobile-first flows and practical operational scope.",
    summary:
      "A POS and transaction platform concept built around inventory, sales, OCR-based matching, and single-store usability.",
    stack: ["React Native", "FastAPI", "SQLAlchemy", "MySQL", "OCR"],
  },
  {
    id: "relsone-revamp",
    name: "NMLS Frontend Revamp",
    category: "Frontend System Refresh",
    problem:
      "The student-facing platform needed a clearer visual hierarchy and stronger brand coherence.",
    outcome:
      "Improved layouts, navigation flow, and visual consistency while keeping the system usable for production needs.",
    summary:
      "A frontend modernization effort focused on login, dashboard, course discovery, and support flow improvements.",
    stack: ["React", "CSS", "Routing", "Vercel"],
  },
  {
    id: "upsert-solution",
    name: "Upsert Solution",
    category: "Agency Infrastructure",
    problem:
      "Small business websites often lack credibility, clarity, and a systemized delivery process.",
    outcome:
      "Created a service direction centered on practical websites, booking flows, and growth-oriented implementation.",
    summary:
      "A business website agency concept focused on modern service sites, redesigns, and maintainable web delivery.",
    stack: ["Next.js", "Tailwind CSS", "Brand Systems"],
  },
];

export const seTechStrip: SETechStripItem[] = [
  { id: "ts", label: "TypeScript" },
  { id: "react", label: "React" },
  { id: "next", label: "Next.js" },
  { id: "tailwind", label: "Tailwind CSS" },
  { id: "node", label: "Node.js" },
  { id: "fastify", label: "Fastify" },
  { id: "prisma", label: "Prisma" },
  { id: "mysql", label: "MySQL" },
  { id: "python", label: "Python" },
  { id: "figma", label: "Figma" },
  { id: "api", label: "API Design" },
  { id: "systems", label: "Systems Thinking" },
];

export const seStackGroups: SEStackGroup[] = [
  {
    id: "languages",
    title: "Programming Languages",
    summary:
      "Primary languages used for modern web platforms, backend modules, and maintainable internal systems.",
    items: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C#"],
    variant: "wide",
  },
  {
    id: "databases",
    title: "Databases",
    summary:
      "Relational-first data thinking shaped around product behavior, clarity, and future scale.",
    items: ["MySQL", "PostgreSQL", "Prisma ORM", "Schema Planning"],
    variant: "inset",
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    summary:
      "Application foundations focused on composability, delivery speed, and maintainable frontends.",
    items: ["Next.js", "React", "Tailwind CSS", "Fastify", "Zod"],
    variant: "light",
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    summary:
      "Execution tools for collaboration, deployment, design alignment, and technical consistency.",
    items: ["GitHub", "Vercel", "Postman", "Trello", "Figma", "Railway"],
  },
  {
    id: "strengths",
    title: "Engineering Strengths",
    summary:
      "The patterns I bring into projects beyond syntax and stack familiarity.",
    items: [
      "System decomposition",
      "Frontend-first execution",
      "Clean code organization",
      "Design-aware implementation",
      "Requirements translation",
    ],
    variant: "wide",
  },
];

export const seExperiences: SEExperience[] = [
  {
    id: "fullsuite",
    title: "Software Engineering Intern",
    organization: "FullSuite",
    timeframe: "2025 — 2026",
    summary:
      "Worked on internal systems, technical specifications, frontend revamps, testing support, and execution planning across multiple product directions.",
    highlights: [
      "Internal Tools",
      "Tech Specs",
      "Frontend Revamp",
      "Module Work",
    ],
    featured: true,
  },
  {
    id: "upsert",
    title: "Founder",
    organization: "Upsert Solution",
    timeframe: "Current",
    summary:
      "Building a service direction centered on practical websites for growth-focused businesses, with strong attention to structure, delivery, and positioning.",
    highlights: ["Web Services", "Client Strategy", "Brand Execution"],
  },
  {
    id: "virtual-assistance",
    title: "Operations & Technical Support",
    organization: "Client Service Work",
    timeframe: "2021 — Present",
    summary:
      "Executed business-facing support while also contributing technical thinking, content workflows, and systems-oriented operations.",
    highlights: ["Operations", "Publishing Systems", "Client Communication"],
  },
  {
    id: "founder-brand",
    title: "Founder",
    organization: "Lofit Clothing",
    timeframe: "2021 — Present",
    summary:
      "Handled brand planning, product direction, digital presence, and entrepreneurial execution in a real-world operating context.",
    highlights: ["Brand Building", "Execution", "Ownership"],
  },
];

export const seCredentials: SECredential[] = [
  {
    id: "career-talks",
    title: "Career Talks & Industry Exposure",
    issuer: "Software Engineering Speakers",
    year: "2026",
    summary:
      "Engaged in professional discussions around market navigation, self-advocacy, burnout, and career readiness.",
    variant: "wide",
  },
  {
    id: "internship-exposure",
    title: "Hands-On Internship Delivery",
    issuer: "FullSuite",
    year: "2025 — 2026",
    summary:
      "Practical exposure across internal systems, design-aware implementation, specification writing, and technical collaboration.",
  },
  {
    id: "project-leadership",
    title: "Startup and Project Leadership",
    issuer: "Independent Work",
    year: "Ongoing",
    summary:
      "Built execution habits through founder-led projects, service offers, and self-directed technical delivery.",
    variant: "light",
  },
  {
    id: "research",
    title: "Research and Systems Thinking",
    issuer: "Academic + Applied Projects",
    year: "Ongoing",
    summary:
      "Worked on structured research, planning documents, and implementation strategies for real product scenarios.",
  },
  {
    id: "web-delivery",
    title: "Frontend & Web Delivery",
    issuer: "Portfolio / Client / Internal Work",
    year: "Ongoing",
    summary:
      "Repeated exposure to production-like frontend workflows, routing systems, interaction design, and layout execution.",
  },
  {
    id: "documentation",
    title: "Technical Documentation",
    issuer: "Product Specification Work",
    year: "Ongoing",
    summary:
      "Prepared technical specs, implementation prompts, and structured project directions for engineering work.",
  },
];

export const seContactHero: SEHeroContent = {
  eyebrow: "Collaboration",
  title: "Let’s build something clear, useful, and structurally sound.",
  description:
    "I work best on projects that need both implementation focus and systems thinking. The goal is not just to ship. It is to build with clarity.",
  image:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80",
};

export const seBuildAreas: SEBuildArea[] = [
  {
    id: "business-sites",
    title: "Business Websites",
    description:
      "Modern service-focused websites with strong structure, clear messaging, and polished UI systems.",
  },
  {
    id: "portals",
    title: "Dashboards & Portals",
    description:
      "Role-oriented interfaces, internal tools, and organized product environments with maintainable components.",
  },
  {
    id: "frontend-systems",
    title: "Frontend Systems",
    description:
      "Next.js, React, and TypeScript implementations that preserve design intent while remaining scalable in code.",
  },
  {
    id: "api-support",
    title: "Support APIs",
    description:
      "Fastify-based support layers for forms, notification flows, chatbot features, and structured data handling.",
  },
];

export const seCollaborationPoints: SECollaborationPoint[] = [
  {
    id: "fit",
    title: "Best Fit",
    description:
      "Projects that need clean implementation, design sensitivity, and a builder who can think beyond isolated tickets.",
  },
  {
    id: "approach",
    title: "Approach",
    description:
      "I prefer clear scopes, practical sequencing, and frontend-first product shaping before support layers are expanded.",
  },
  {
    id: "priority",
    title: "Priority",
    description:
      "Interfaces must feel intentional. Code must remain maintainable. The product should make sense both visually and structurally.",
  },
];

export const seContactChannels: SEContactChannel[] = [
  {
    id: "email",
    label: "Email",
    value: "jandolbyaquino19@gmail.com",
  },
  {
    id: "location",
    label: "Base",
    value: "Philippines / Remote",
  },
  {
    id: "focus",
    label: "Current Focus",
    value: "Frontend Systems + Product Buildouts",
  },
];
