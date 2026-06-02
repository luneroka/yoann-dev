import type { Project } from "../types";

import mabibliIndex from "@/assets/projects/ma-bibli/mabibli-index.png";
import mabibliLivre from "@/assets/projects/ma-bibli/mabibli-livre.png";
import mabibliBibli from "@/assets/projects/ma-bibli/mabibli-bibli.png";
import mabibliDashboard from "@/assets/projects/ma-bibli/mabibli-dashboard.png";

export const maBibli = {
  id: "ma-bibli",

  title: {
    en: "Ma Bibli",
    fr: "Ma Bibli",
  },

  company: "Solo",

  role: {
    en: "Personal Full-Stack Project",
    fr: "Projet Full-Stack Personnel",
  },

  track: ["dev"],

  industry: "technology",

  productType: "web-app",

  technologies: ["figma", "tailwindcss", "mongodb", "nodejs", "javascript", "react", "git"],

  skills: [
    "api-design",
    "backend-architecture",
    "database-modeling",
    "frontend-architecture",
    "ux-ui-design",
  ],

  metrics: {
    hoursInvested: 540,
    context: {
      label: {
        en: "Active users",
        fr: "Utilisateurs actifs",
      },
      value: 3,
      unit: {
        en: "",
        fr: "",
      },
    },
  },

  deliverables: [
    {
      en: "Book search and discovery experience through search bar and barcode scan, connected to external book database API.",
      fr: "Expérience de recherche et découverte de livres via barre de recherche et scan du code-barre, connectée à une base de donnée de livres via API.",
    },
    {
      en: "Built a complete CRUD workflow covering the full lifecycle of a personal book collection.",
      fr: "Création d'un workflow CRUD complet couvrant l'ensemble du cycle de vie d'une bibliothèque personnelle.",
    },
    {
      en: "Implemented reading tracking features including read status, favorites and wishlist management.",
      fr: "Mise en place de fonctionnalités de suivi de lecture incluant statut de lecture, favoris et liste d'envies.",
    },
    {
      en: "REST API connected to MongoDB for persistent user data",
      fr: "API REST connectée à MongoDB pour la persistance des données utilisateur",
    },
    {
      en: "Integrated Firebase Authentication, JWT security and Cloudinary image management.",
      fr: "Intégration de Firebase Authentication, de la sécurité JWT et de la gestion d'images Cloudinary.",
    },
  ],

  summary: {
    en: "Full-stack web application allowing readers to manage their personal library, track reading activity and discover books through a modern and responsive experience.",
    fr: "Application web full-stack permettant aux lecteurs de gérer leur bibliothèque personnelle, suivre leur activité de lecture et découvrir de nouveaux livres via une expérience moderne et responsive.",
  },

  problem: {
    en: "Most readers rely on spreadsheets, notes or scattered tools to manage their collection, reading history and future reading plans.",
    fr: "La plupart des lecteurs utilisent des tableurs, des notes ou plusieurs outils dispersés pour gérer leur collection, leur historique de lecture et leurs futures lectures.",
  },

  solution: {
    en: "At the request of a friend, designed and developed a complete library management platform combining collection management, reading tracking, authentication, search and dynamic dashboard.",
    fr: "Sur demande d'un ami lecteur, conception et développement d'une plateforme complète de gestion de bibliothèque combinant authentification, gestion de collection, suivi de lecture, recherche et tableau de bord dynamique.",
  },

  impact: [
    {
      en: "3 active users beneficiating from the app.",
      fr: "Utilisation active par 3 utilisateurs.",
    },
    {
      en: "300+ books added and tracked.",
      fr: "+300 livres ajoutés et bénéficiant du suivi de lecture.",
    },
  ],

  screenshots: [
    {
      src: mabibliIndex,
      alt: {
        en: "Homepage where user can see usage instructions and start searching for books",
        fr: "Page d'accueil présentant le fonctionnement du site et la recherche de livres",
      },
    },
    {
      src: mabibliLivre,
      alt: {
        en: "Book detail page displaying book information and action buttons",
        fr: "Page détaillée d'un livre affichant les informations principales et les boutons d'action",
      },
    },
    {
      src: mabibliBibli,
      alt: {
        en: "Virtual bookshelf for user to see and manage books",
        fr: "Bibliothèque utilisateur pour voir et gérer ses livres lus ou à lire",
      },
    },
    {
      src: mabibliDashboard,
      alt: {
        en: "Dynamic dashboard showing reader statistics",
        fr: "Dashboard dymanic permettant à l'utilisateur de suivre ses statistiques de lecture",
      },
    },
  ],

  links: {
    github: "https://github.com/luneroka/ma-bibli",
    demo: "https://www.ma-bibli.com",
  },

  period: {
    start: "2025-02",
    end: "2025-08",
    precision: "month",
  },

  featured: true,
} satisfies Project;
