import type { Project } from "../types";

import dashboardScreenshot from "@/assets/projects/budget-construction-excel/dashboard.png";
import fournisseursScreenshot from "@/assets/projects/budget-construction-excel/fournisseurs.png";
import inputScreenshot from "@/assets/projects/budget-construction-excel/input_form_full.png";
import rechercheScreenshot from "@/assets/projects/budget-construction-excel/recherche.png";

export const budgetConstructionExcel = {
  id: "budget-construction-excel",

  title: {
    en: "Construction Budget Tool",
    fr: "Budget Construction (Excel)",
  },

  company: "Solo",
  role: {
    en: "Personal Data Project",
    fr: "Projet Data Personnel",
  },

  track: ["data"],
  industry: "construction",
  productType: "internal-tool",

  technologies: ["excel", "vba", "power-query"],
  skills: ["data-analysis", "data-modeling", "dashboarding", "process-optimization"],

  metrics: {
    hoursInvested: 80,
    context: {
      label: {
        en: "Performance Gained",
        fr: "Gain de Performance",
      },
      value: 50,
      unit: {
        en: "%",
        fr: "%",
      },
    },
  },

  systemsBuilt: [
    {
      en: "Structured Excel budget workbook",
      fr: "Classeur Excel structuré pour le suivi budgétaire",
    },
    {
      en: "Power Query import and consolidation flow",
      fr: "Flux d'import et de consolidation Power Query",
    },
    {
      en: "VBA reporting automation",
      fr: "Automatisation du reporting en VBA",
    },
    {
      en: "File import system with Google Apps Script",
      fr: "Système d'import de fichiers Drive avec Google Apps Script",
    },
    {
      en: "Cash flow and remaining-cost tracking views",
      fr: "Vues de suivi de trésorerie et des coûts restants",
    },
  ],

  summary: {
    en: "Excel-based budget tracking system built to manage construction costs, quotes, invoices and cash flow during a real house-building project.",
    fr: "Système de suivi budgétaire sous Excel conçu pour gérer coûts de construction, devis, factures et trésorerie lors d'un véritable projet de construction immobilière.",
  },

  problem: {
    en: "A relative preparing to build their house plans to manage the project directly: compare quotes, hire contractors and track expenses across every stage of construction. They needed a reliable way to keep the budget under control without relying on fragmented spreadsheets.",
    fr: "Un proche préparant la construction de sa maison prévoit de piloter directement le projet : comparer les devis, sélectionner les artisans et suivre les dépenses à chaque étape du chantier. Il avait besoin d'un outil fiable pour maîtriser son budget sans dépendre de tableurs fragmentés.",
  },

  solution: {
    en: "Designed an advanced Excel system using structured tables, formulas, Power Query and VBA automation to centralize budgeting, reporting and expense monitoring.",
    fr: "Conception d'un système Excel avancé utilisant tables structurées, formules, Power Query et automatisations VBA pour centraliser budget, reporting et suivi des dépenses.",
  },

  impact: [
    {
      en: "Improved visibility over projected budget, signed quotes, paid invoices and remaining construction costs.",
      fr: "Amélioration de la visibilité sur le budget prévisionnel, les devis signés, les factures payées et les coûts restants.",
    },
    {
      en: "Estimated 50% time saving on budget tracking and reporting compared with a manual spreadsheet workflow.",
      fr: "Gain de temps estimé à 50 % sur le suivi budgétaire et le reporting par rapport à une gestion manuelle sous tableur classique.",
    },
    {
      en: "Reduced administrative friction through automated imports, consolidation and reporting, allowing the user to focus on managing the construction project.",
      fr: "Réduction des contraintes administratives grâce à l'automatisation des imports, de la consolidation et du reporting, permettant à l'utilisateur de se concentrer sur le pilotage du chantier.",
    },
  ],

  screenshots: [
    {
      src: dashboardScreenshot,
      alt: {
        en: "Construction budget platform dashboard",
        fr: "Tableau de bord de la plateforme de suivi budgétaire",
      },
    },
    {
      src: inputScreenshot,
      alt: {
        en: "Automated input form allowing user to record transactions",
        fr: "Formulaire de saisie automatisé pour enregistrer les transactions",
      },
    },
    {
      src: fournisseursScreenshot,
      alt: {
        en: "Supplier table with VBA modal for adding new ones",
        fr: "Table de gestion des fournisseurs avec ajout simplifié via modal VBA",
      },
    },
    {
      src: rechercheScreenshot,
      alt: {
        en: "Search sheet with filters and transaction deletion capability",
        fr: "Feuille de recherche de transactions avec filtres et fonction de suppression",
      },
    },
  ],

  links: {
    github: "https://github.com/luneroka/budget_construction_excel",
  },

  period: {
    start: "2026-01",
    end: "2026-05",
    precision: "month",
  },

  featured: true,
} satisfies Project;
