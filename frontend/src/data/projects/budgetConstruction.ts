import type { Project } from "../types";

export const budgetConstruction = {
  id: "budget-construction",

  title: {
    en: "Construction Budget Platform",
    fr: "Budget Construction (Web)",
  },

  company: "Solo",
  role: {
    en: "Personal Full-Stack Project",
    fr: "Projet Full-Stack Personnel",
  },

  track: ["dev"],
  industry: "construction",
  productType: "web-app",

  technologies: ["figma", "postgresql", "python", "fastapi", "git", "docker"],
  skills: [
    "api-design",
    "backend-architecture",
    "database-modeling",
    "frontend-architecture",
    "sql",
  ],

  metrics: {
    hoursInvested: 160,
    context: {
      label: {
        en: "Users Impacted",
        fr: "Utilisateurs Impactés",
      },
      value: 4,
      unit: {
        en: "",
        fr: "",
      },
    },
  },

  deliverables: [
    {
      en: "FastAPI backend for construction budget tracking",
      fr: "Backend FastAPI pour le suivi budgétaire de construction",
    },
    {
      en: "PostgreSQL data model for items, transactions and budget candidates",
      fr: "Modèle de données PostgreSQL pour produits, transactions et suivi budget",
    },
    {
      en: "Quote, invoice and DIY estimate import and tracking workflow",
      fr: "Workflow d'ajout et de suivi des devis, factures et estimations DIY",
    },
    {
      en: "Dockerized application runtime",
      fr: "Environnement d'exécution applicatif Dockerisé",
    },
  ],

  summary: {
    en: "Full-stack web application to track quotes, invoices, DIY estimates and actual construction expenses.",
    fr: "Application web full-stack pour suivre devis, estimations DIY et factures de dépenses réelles de construction ou rénovation immobilière.",
  },

  problem: {
    en: "The original Excel-based process became hard to maintain as the project logic grew.",
    fr: "Le processus initial sous Excel devenait difficile à maintenir avec la complexité croissante du projet.",
  },

  solution: {
    en: "Designed a FastAPI backend with PostgreSQL, structured around project items, transactions and budget candidates.",
    fr: "Conception d'un backend FastAPI avec PostgreSQL, structuré autour des postes projet, transactions et budgets.",
  },

  impact: [
    {
      en: "Turned a complex spreadsheet workflow into a scalable web architecture.",
      fr: "Transformation d'un workflow Excel complexe en architecture web évolutive.",
    },

    {
      en: "Clarified the distinction between planned budget, quotes, DIY estimates and actual invoices.",
      fr: "Clarification entre budget prévu, devis, estimations DIY et factures réelles.",
    },
  ],

  screenshots: [],

  links: {
    github: "https://github.com/luneroka/budget_construction",
  },

  period: {
    start: "2026-05",
    end: null,
    precision: "month",
  },

  featured: true,
} satisfies Project;
