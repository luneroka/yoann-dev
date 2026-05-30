import type {
  Company,
  ContextMetricType,
  Industry,
  LocalizedString,
  ProductType,
  SkillId,
  TechnologyId,
  Track,
} from "./types";

export const trackLabels = {
  dev: { en: "Dev", fr: "Dev" },
  data: { en: "Data", fr: "Data" },
} satisfies Record<Track, LocalizedString>;

export const industryLabels = {
  logistics: { en: "Logistics", fr: "Logistique" },
  retail: { en: "Retail", fr: "Retail" },
  construction: { en: "Construction", fr: "Construction" },
  technology: { en: "Technology", fr: "Technologie" },
} satisfies Record<Industry, LocalizedString>;

export const productTypeLabels = {
  saas: { en: "SaaS", fr: "SaaS" },
  "internal-tool": { en: "Internal tool", fr: "Outil interne" },
  "web-app": { en: "Web app", fr: "Application web" },
  analysis: { en: "Data Analysis", fr: "Analyse Data" },
} satisfies Record<ProductType, LocalizedString>;

export const companyLabels = {
  Amazon: { en: "Amazon", fr: "Amazon" },
  Lidl: { en: "Lidl", fr: "Lidl" },
  Solo: { en: "Solo projects", fr: "Projets solo" },
} satisfies Record<Company, LocalizedString>;

export const technologyLabels = {
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
  minitab: { en: "Minitab", fr: "Minitab" },
} satisfies Record<TechnologyId, LocalizedString>;

export const skillLabels = {
  "data-analysis": { en: "Data analysis", fr: "Analyse de données" },
  "data-modeling": { en: "Data modeling", fr: "Modélisation de données" },
  etl: { en: "ETL", fr: "ETL" },
  dashboarding: { en: "Dashboarding", fr: "Création de dashboards" },
  "api-design": { en: "API design", fr: "Conception d'API" },
  "backend-architecture": { en: "Backend architecture", fr: "Architecture backend" },
  "database-modeling": {
    en: "Database modeling",
    fr: "Modélisation de base de données",
  },
  "frontend-architecture": {
    en: "Frontend architecture",
    fr: "Architecture frontend",
  },
  "ux-ui-design": {
    en: "UX/UI design",
    fr: "UX/UI design",
  },
  "product-discovery": {
    en: "Product discovery",
    fr: "Découverte produit",
  },
  "stakeholder-management": {
    en: "Stakeholder management",
    fr: "Gestion des parties prenantes",
  },
  "process-optimization": { en: "Process optimization", fr: "Optimisation de processus" },
  communication: { en: "Communication", fr: "Communication" },
  "project-management": { en: "Project management", fr: "Gestion de projet" },
  "kpi-design": { en: "KPI design", fr: "Conception de KPI" },
  reporting: { en: "Reporting", fr: "Reporting" },
} satisfies Record<SkillId, LocalizedString>;

export const contextMetricTypeLabels = {
  budget_managed: { en: "Budget managed", fr: "Budget géré" },
  records_analyzed: { en: "Records analyzed", fr: "Enregistrements analysés" },
  reports_built: { en: "Reports built", fr: "Rapports créés" },
  users_impacted: { en: "Users impacted", fr: "Utilisateurs impactés" },
  performance_gain: { en: "Performance gain", fr: "Gain de performance" },
  other: { en: "Other", fr: "Autre" },
} satisfies Record<ContextMetricType, LocalizedString>;
