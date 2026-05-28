import type { Skill } from "./types";

export const skills: Skill[] = [
  {
    id: "data-analysis",
    label: { en: "Data analysis", fr: "Analyse de données" },
    category: "data",
    level: "comfortable",
    featured: true,
    showAsFilter: true,
  },
  {
    id: "data-modeling",
    label: { en: "Data modeling", fr: "Modélisation de données" },
    category: "data",
    level: "working",
    featured: true,
    showAsFilter: true,
  },
  {
    id: "etl",
    label: { en: "ETL", fr: "ETL" },
    category: "data",
    level: "working",
    showAsFilter: true,
  },
  {
    id: "dashboarding",
    label: { en: "Dashboarding", fr: "Création de dashboards" },
    category: "data",
    level: "working",
    showAsFilter: true,
  },
  {
    id: "api-design",
    label: { en: "API design", fr: "Conception d'API" },
    category: "backend",
    level: "working",
    featured: true,
    showAsFilter: true,
  },
  {
    id: "backend-architecture",
    label: { en: "Backend architecture", fr: "Architecture backend" },
    category: "backend",
    level: "working",
    featured: true,
    showAsFilter: true,
  },
  {
    id: "database-modeling",
    label: { en: "Database modeling", fr: "Modélisation de base de données" },
    category: "backend",
    level: "working",
    showAsFilter: true,
  },
  {
    id: "process-optimization",
    label: { en: "Process optimization", fr: "Optimisation de processus" },
    category: "operations",
    level: "comfortable",
    showAsFilter: true,
  },
  {
    id: "budget-workflow-modeling",
    label: {
      en: "Budget workflow modeling",
      fr: "Modélisation de workflows budgétaires",
    },
    category: "business-analysis",
    level: "working",
    showAsFilter: true,
  },
];
