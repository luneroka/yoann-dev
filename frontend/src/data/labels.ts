import type {
  Company,
  ContextMetricType,
  Domain,
  LocalizedString,
  SkillId,
  Track,
} from "./types";

export const trackLabels = {
  dev: { en: "Dev", fr: "Dev" },
  data: { en: "Data", fr: "Data" },
} satisfies Record<Track, LocalizedString>;

export const domainLabels = {
  logistics: { en: "Logistics", fr: "Logistique" },
  retail: { en: "Retail", fr: "Retail" },
  construction: { en: "Construction", fr: "Construction" },
  saas: { en: "SaaS", fr: "SaaS" },
  "internal-tools": { en: "Internal tools", fr: "Outils internes" },
} satisfies Record<Domain, LocalizedString>;

export const companyLabels = {
  Amazon: { en: "Amazon", fr: "Amazon" },
  Lidl: { en: "Lidl", fr: "Lidl" },
  Solo: { en: "Solo projects", fr: "Projets solo" },
} satisfies Record<Company, LocalizedString>;

export const skillLabels = {
  javascript: { en: "JavaScript", fr: "JavaScript" },
  typescript: { en: "TypeScript", fr: "TypeScript" },
  react: { en: "React", fr: "React" },
  tailwindcss: { en: "Tailwind CSS", fr: "Tailwind CSS" },
  nodejs: { en: "Node.js", fr: "Node.js" },
  nextjs: { en: "Next.js", fr: "Next.js" },
  python: { en: "Python", fr: "Python" },
  fastapi: { en: "FastAPI", fr: "FastAPI" },
  flask: { en: "Flask", fr: "Flask" },
  mongodb: { en: "MongoDB", fr: "MongoDB" },
  postgresql: { en: "PostgreSQL", fr: "PostgreSQL" },
  sql: { en: "SQL", fr: "SQL" },
  excel: { en: "Excel", fr: "Excel" },
  vba: { en: "VBA", fr: "VBA" },
  "power-query": { en: "Power Query", fr: "Power Query" },
  tableau: { en: "Tableau", fr: "Tableau" },
  "power-bi": { en: "Power BI", fr: "Power BI" },
  git: { en: "Git", fr: "Git" },
  docker: { en: "Docker", fr: "Docker" },
} satisfies Record<SkillId, LocalizedString>;

export const contextMetricTypeLabels = {
  budget_managed: { en: "Budget managed", fr: "Budget géré" },
  records_analyzed: { en: "Records analyzed", fr: "Enregistrements analysés" },
  reports_built: { en: "Reports built", fr: "Rapports créés" },
  users_impacted: { en: "Users impacted", fr: "Utilisateurs impactés" },
  performance_gain: { en: "Performance gain", fr: "Gain de performance" },
  other: { en: "Other", fr: "Autre" },
} satisfies Record<ContextMetricType, LocalizedString>;
