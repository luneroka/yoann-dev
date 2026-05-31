import type { Project } from "../types";

import helpInvestIndex from "@/assets/projects/help-invest/help-invest-index.png";
import helpInvestDashboard from "@/assets/projects/help-invest/help-invest-dashboard.png";

export const helpInvest = {
  id: "help-invest",

  title: {
    en: "Help-Invest",
    fr: "Help-Invest",
  },

  company: "Solo",

  role: {
    en: "Personal Full-Stack Project",
    fr: "Projet Full-Stack Personnel",
  },

  track: ["dev"],

  industry: "technology",

  productType: "web-app",

  technologies: ["javascript", "react", "python", "flask", "postgresql", "docker", "git"],

  skills: [
    "api-design",
    "backend-architecture",
    "database-modeling",
    "sql",
    "frontend-architecture",
  ],

  metrics: {
    hoursInvested: 360,
    context: {
      label: {
        en: "Certfificate obtained",
        fr: "Certification obtenue",
      },
      value: 1,
      unit: {
        en: "",
        fr: "",
      },
    },
  },

  deliverables: [
    {
      en: "Complete personal investment portfolio management workflow covering investments, encrypted transactions and asset allocation tracking",
      fr: "Workflow complet de gestion de portefeuille d'investissement personnel couvrant les investissements, les transactions chiffrées et le suivi de répartition des actifs",
    },
    {
      en: "Interactive dashboards and charts visualizing portfolio composition across savings, real estate and stock market assets",
      fr: "Dashboards et graphiques interactifs permettant de visualiser la composition du portefeuille entre épargne, immobilier et marché actions",
    },
    {
      en: "Secure authentication and account management system using Firebase",
      fr: "Système sécurisé d'authentification et de gestion de compte via Firebase",
    },
    {
      en: "REST API powered by Flask and PostgreSQL",
      fr: "API REST développée avec Flask et PostgreSQL",
    },
    {
      en: "Application containerized with Docker to streamline development and deployment workflows",
      fr: "Application conteneurisée avec Docker afin de simplifier les workflows de développement et de déploiement",
    },
  ],

  summary: {
    en: "Full-stack investment portfolio visualization platform allowing users to track assets, transactions and portfolio allocation through interactive dashboards.",
    fr: "Plateforme full-stack de visualisation de portefeuille d'investissement permettant de suivre ses actifs, ses transactions et la répartition du portefeuille via des dashboards interactifs.",
  },

  problem: {
    en: "Individual investors often rely on spreadsheets and fragmented tools to monitor their investments, making portfolio tracking and allocation analysis difficult.",
    fr: "Les investisseurs particuliers s'appuient souvent sur des tableurs et des outils dispersés pour suivre leurs investissements, rendant l'analyse du portefeuille complexe.",
  },

  solution: {
    en: "Designed and developed a full-stack application combining portfolio management, transaction tracking, risk profiling and interactive visual analytics in a single platform, then completed and presented it as the final project for Harvard's CS50 program.",
    fr: "Conception et développement d'une application full-stack combinant gestion de portefeuille, suivi des transactions, profil de risque et analyse visuelle interactive dans une seule plateforme, puis réalisation et présentation du projet final pour le programme CS50 de Harvard.",
  },

  impact: [
    {
      en: "Actively used by 1 user for personal investment tracking.",
      fr: "Utilisée activement par 1 utilisateur pour le suivi de ses investissements personnels.",
    },
    {
      en: "Completed and presented as the final project for Harvard's CS50 program, unlocking completion certificate.",
      fr: "Réalisé et présenté comme projet final du programme CS50 de Harvard, ayant permis l'obtention de la certification.",
    },
  ],

  screenshots: [
    {
      src: helpInvestIndex,
      alt: {
        en: "Homepage presenting the Help-Invest platform",
        fr: "Page d'accueil présentant la plateforme Help-Invest",
      },
    },
    {
      src: helpInvestDashboard,
      alt: {
        en: "Investment dashboard displaying portfolio allocation and analytics",
        fr: "Dashboard d'investissement affichant la répartition du portefeuille et les analyses",
      },
    },
  ],

  links: {
    github: "https://github.com/luneroka/help-invest",
  },

  period: {
    start: "2024-11",
    end: "2024-12",
    precision: "month",
  },

  featured: true,
} satisfies Project;
