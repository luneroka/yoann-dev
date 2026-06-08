import type { Project } from "../types";

import costAnalysisScreenshot from "@/assets/projects/budget-construction/cost_analysis.png";
import detailedAnalysisScreenshot from "@/assets/projects/budget-construction/detailed_analysis.png";
import projectOverviewScreenshot from "@/assets/projects/budget-construction/project_overview.png";
import supplierPerformanceScreenshot from "@/assets/projects/budget-construction/supplier_performance.png";

export const budgetConstruction = {
  id: "budget-construction",

  title: {
    en: "Construction Budget Platform",
    fr: "Plateforme Budget Construction",
  },

  company: "Solo",
  role: {
    en: "Personal Full-Stack Project",
    fr: "Projet Full-Stack Personnel",
  },

  track: ["dev", "data"],
  industry: "construction",
  productType: "web-app",

  technologies: [
    "figma",
    "postgresql",
    "python",
    "fastapi",
    "git",
    "docker",
    "power-bi",
    "power-query",
  ],
  skills: [
    "api-design",
    "backend-architecture",
    "database-modeling",
    "frontend-architecture",
    "sql",
    "dashboarding",
    "reporting",
  ],

  metrics: {
    hoursInvested: 220,
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
      en: "Analytics schema exposing BI-ready PostgreSQL views for Power BI",
      fr: "Schéma analytics exposant des vues PostgreSQL prêtes pour Power BI",
    },
    {
      en: "Power BI semantic model with DAX measures for budget, actual cost, variance and cash flow KPIs",
      fr: "Modèle sémantique Power BI avec mesures DAX pour budget, coût réel, écarts et KPIs de trésorerie",
    },
    {
      en: "Quote, invoice and DIY estimate import and tracking workflow",
      fr: "Workflow d'ajout et de suivi des devis, factures et estimations DIY",
    },
    {
      en: "Interactive financial dashboards for cost analysis, supplier performance and detailed project monitoring",
      fr: "Tableaux de bord financiers interactifs pour l'analyse des coûts, la performance fournisseurs et le suivi détaillé du projet",
    },
  ],

  summary: {
    en: "Full-stack construction budget platform connected to a Power BI analytics layer for tracking quotes, invoices, DIY estimates, actual costs and budget variance.",
    fr: "Plateforme full-stack de suivi budgétaire de construction connectée à une couche analytics Power BI pour suivre devis, estimations DIY, factures, coûts réels et écarts budgétaires.",
  },

  problem: {
    en: "The original Excel-based process became hard to maintain as the project logic grew.",
    fr: "Le processus initial sous Excel devenait difficile à maintenir avec la complexité croissante du projet.",
  },

  solution: {
    en: "Designed a FastAPI backend with PostgreSQL, then built analytics views and a direct PostgreSQL to Power BI reporting workflow with DAX measures and interactive financial dashboards.",
    fr: "Conception d'un backend FastAPI avec PostgreSQL, puis création de vues analytics et d'un flux de reporting PostgreSQL vers Power BI avec mesures DAX et tableaux de bord financiers interactifs.",
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
    {
      en: "Enabled users to monitor project KPIs through interactive dashboards that refresh from the PostgreSQL database as budget and invoice data evolves.",
      fr: "Possibilité pour les utilisateurs de suivre les KPIs projet via des tableaux de bord interactifs alimentés par les données PostgreSQL à mesure que budget et factures évoluent.",
    },
  ],

  screenshots: [
    {
      src: projectOverviewScreenshot,
      alt: {
        en: "Power BI project overview dashboard with budget, actual cost and variance KPIs",
        fr: "Tableau de bord Power BI de synthèse projet avec KPIs budget, coût réel et écart",
      },
      caption: {
        en: "Project overview",
        fr: "Synthèse projet",
      },
    },
    {
      src: costAnalysisScreenshot,
      alt: {
        en: "Power BI financial monitoring dashboard showing spending trends, paid amounts and unpaid invoices",
        fr: "Tableau de bord Power BI de suivi financier avec tendances de dépenses, montants payés et factures impayées",
      },
      caption: {
        en: "Financial monitoring",
        fr: "Suivi financier",
      },
    },
    {
      src: supplierPerformanceScreenshot,
      alt: {
        en: "Power BI supplier analysis dashboard comparing spend, invoice volume and late payments",
        fr: "Tableau de bord Power BI d'analyse fournisseurs comparant dépenses, volume de factures et retards de paiement",
      },
      caption: {
        en: "Supplier analysis",
        fr: "Analyse fournisseurs",
      },
    },
    {
      src: detailedAnalysisScreenshot,
      alt: {
        en: "Power BI detailed cost analysis dashboard with category distribution and subcategory budget variance",
        fr: "Tableau de bord Power BI d'analyse détaillée des coûts avec répartition par catégorie et écarts par sous-catégorie",
      },
      caption: {
        en: "Detailed cost analysis",
        fr: "Analyse détaillée des coûts",
      },
    },
  ],

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
