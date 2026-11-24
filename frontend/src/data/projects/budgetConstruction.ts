import type { Project } from "../types";

import dashboardScreenshot from "@/assets/projects/budget-construction/batibudget_dashboard.png";
import lotDetailsScreenshot from "@/assets/projects/budget-construction/batibudget_lot_details.png";
import lotsScreenshot from "@/assets/projects/budget-construction/batibudget_lots.png";
import quoteScreenshot from "@/assets/projects/budget-construction/batibudget_quote.png";
import suppliersScreenshot from "@/assets/projects/budget-construction/batibudget_suppliers.png";
import costAnalysisScreenshot from "@/assets/projects/budget-construction/cost_analysis.png";
import projectOverviewScreenshot from "@/assets/projects/budget-construction/project_overview.png";

export const budgetConstruction = {
  id: "budget-construction",

  title: {
    en: "Bâti Budget – Construction Budget App",
    fr: "Bâti Budget – Application budget chantier",
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
    "react",
    "typescript",
    "tailwindcss",
    "python",
    "fastapi",
    "postgresql",
    "docker",
    "git",
    "figma",
    "power-bi",
    "power-query",
    "claude-code",
  ],
  skills: [
    "api-design",
    "backend-architecture",
    "database-modeling",
    "frontend-architecture",
    "sql",
    "dashboarding",
    "reporting",
    "ai-assisted-development",
    "agent-workflows",
  ],

  metrics: {
    hoursInvested: 600,
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
      en: "React + TypeScript web app organized by project: budget, transactions, suppliers, documents and dashboard",
      fr: "Application web React + TypeScript organisée par projet : budget, transactions, fournisseurs, documents et tableau de bord",
    },
    {
      en: "FastAPI backend with a single financial engine powering KPIs, charts, alerts and CSV exports",
      fr: "Backend FastAPI avec un moteur financier unique alimentant KPIs, graphiques, alertes et exports CSV",
    },
    {
      en: "PostgreSQL data model for budget lines, quotes, DIY estimates, invoices and suppliers, with soft delete and a restorable trash",
      fr: "Modèle de données PostgreSQL pour lignes budgétaires, devis, estimations DIY, factures et fournisseurs, avec suppression douce et corbeille restaurable",
    },
    {
      en: "Private document storage on Cloudflare R2 with signed links and file-signature validation",
      fr: "Stockage documentaire privé sur Cloudflare R2 avec liens signés et validation des fichiers par signature binaire",
    },
    {
      en: "Full security review and hardening: rotating refresh tokens, rate limiting, per-user data isolation test matrix, OWASP ZAP scans",
      fr: "Revue de sécurité complète et durcissement : refresh tokens rotatifs, limitation de débit, matrice de tests d'isolation des données, scans OWASP ZAP",
    },
    {
      en: "Production deployment on a VPS with Docker Compose and Caddy, encrypted off-site backups, Sentry monitoring and CI with 258 backend tests",
      fr: "Déploiement en production sur VPS avec Docker Compose et Caddy, sauvegardes chiffrées hors serveur, supervision Sentry et CI avec 258 tests backend",
    },
    {
      en: "Analytics schema exposing BI-ready PostgreSQL views, with a Power BI report and DAX measures for budget, variance and cash flow",
      fr: "Schéma analytics exposant des vues PostgreSQL prêtes pour la BI, avec rapport Power BI et mesures DAX pour budget, écarts et trésorerie",
    },
    {
      en: "Multi-agent delivery workflow (spec → implementation → QA) with human approval gates, plus custom Claude Code skills for pre-merge checks, deployment and dependency triage",
      fr: "Workflow de livraison multi-agents (spécification → implémentation → QA) avec validations humaines, et skills Claude Code sur mesure pour contrôles pré-merge, déploiement et tri des dépendances",
    },
  ],

  summary: {
    en: "Full-stack web app, in production since July 2026, for planning and tracking the budget of a house construction or renovation: quotes, DIY estimates, invoices, suppliers, documents and a financial dashboard.",
    fr: "Application web full-stack, en production depuis juillet 2026, pour planifier et suivre le budget d'une construction ou rénovation de maison : devis, estimations DIY, factures, fournisseurs, documents et tableau de bord financier.",
  },

  problem: {
    en: "The original Excel tool proved the business logic on a real construction site, but became hard to maintain, share and secure as the project grew.",
    fr: "Le classeur Excel d'origine avait validé la logique métier sur un vrai chantier, mais devenait difficile à maintenir, partager et sécuriser à mesure que le projet grandissait.",
  },

  solution: {
    en: "Rebuilt the proven Excel logic as a budget-first web app: normalized PostgreSQL database, secure FastAPI API, React interface, private document storage and a production setup hardened after a full security review, with a Power BI analytics layer on top.",
    fr: "Reconstruction de la logique Excel éprouvée en application web « budget-first » : base PostgreSQL normalisée, API FastAPI sécurisée, interface React, stockage documentaire privé et mise en production durcie après une revue de sécurité complète, avec une couche analytics Power BI.",
  },

  impact: [
    {
      en: "Turned a single-user spreadsheet into a secure multi-project web app used daily in production.",
      fr: "Transformation d'un tableur mono-utilisateur en application web multi-projets sécurisée, utilisée au quotidien en production.",
    },
    {
      en: "Gave a permanent view of planned budget vs committed, invoiced and paid amounts, with an action center for unpaid invoices, quotes to confirm and budget overruns.",
      fr: "Vision permanente du budget prévisionnel face aux montants engagés, facturés et payés, avec un centre d'actions pour factures impayées, devis à confirmer et dépassements.",
    },
    {
      en: "Centralized quotes, invoices and supplier documents (insurance, Kbis, RIB) with expiry alerts, replacing scattered files.",
      fr: "Centralisation des devis, factures et documents fournisseurs (décennale, Kbis, RIB) avec alertes d'expiration, en remplacement de fichiers dispersés.",
    },
  ],

  screenshots: [
    {
      src: dashboardScreenshot,
      alt: {
        en: "Web app dashboard with planned cost, invoiced, paid and outstanding KPIs, charts by trade, over time and by supplier, and an action center",
        fr: "Tableau de bord de l'application avec KPIs coût prévu, facturé, payé et à payer, graphiques par lot, dans le temps et par fournisseur, et centre d'actions",
      },
      caption: {
        en: "Dashboard",
        fr: "Tableau de bord",
      },
    },
    {
      src: lotsScreenshot,
      alt: {
        en: "Trades overview grouped by construction phase, with planned, invoiced and outstanding amounts per trade",
        fr: "Vue des lots regroupés par phase de chantier, avec montants prévus, facturés et à payer par lot",
      },
      caption: {
        en: "Trades overview",
        fr: "Vue des lots",
      },
    },
    {
      src: lotDetailsScreenshot,
      alt: {
        en: "Trade detail page listing suppliers with their quotes and invoices side by side",
        fr: "Page détail d'un lot listant les fournisseurs avec leurs devis et factures côte à côte",
      },
      caption: {
        en: "Trade details",
        fr: "Détail d'un lot",
      },
    },
    {
      src: quoteScreenshot,
      alt: {
        en: "Quote editing form with trade, amount, supplier, status, reference and document upload",
        fr: "Formulaire d'édition d'un devis avec lot, montant, fournisseur, statut, référence et ajout de documents",
      },
      caption: {
        en: "Quote editing",
        fr: "Édition d'un devis",
      },
    },
    {
      src: suppliersScreenshot,
      alt: {
        en: "Supplier directory with trades, main contact, phone, email and bank details document",
        fr: "Répertoire des fournisseurs avec lots, contact principal, téléphone, email et RIB",
      },
      caption: {
        en: "Supplier directory",
        fr: "Répertoire fournisseurs",
      },
    },
    {
      src: projectOverviewScreenshot,
      alt: {
        en: "Power BI project overview dashboard with budget, actual cost and variance KPIs",
        fr: "Tableau de bord Power BI de synthèse projet avec KPIs budget, coût réel et écart",
      },
      caption: {
        en: "Power BI – Project overview",
        fr: "Power BI – Synthèse projet",
      },
    },
    {
      src: costAnalysisScreenshot,
      alt: {
        en: "Power BI financial monitoring dashboard showing spending trends, paid amounts and unpaid invoices",
        fr: "Tableau de bord Power BI de suivi financier avec tendances de dépenses, montants payés et factures impayées",
      },
      caption: {
        en: "Power BI – Financial monitoring",
        fr: "Power BI – Suivi financier",
      },
    },
  ],

  links: {
    github: "https://github.com/luneroka/budget_construction",
    demo: "https://batibudget.com",
  },

  period: {
    start: "2026-05",
    end: "2026-11",
    precision: "month",
  },

  featured: true,
} satisfies Project;
