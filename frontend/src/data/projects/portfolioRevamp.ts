import type { Project } from "../types";

export const portfolioRevamp = {
  id: "yoannrobert-portfolio-revamp",

  title: {
    en: "Web & Analytics Portfolio Revamp",
    fr: "Refonte Portfolio Web & Analytics",
  },

  company: "Solo",
  role: {
    en: "Personal Full-Stack Project",
    fr: "Projet Full-Stack Personnel",
  },

  track: ["dev", "data"],
  industry: "technology",
  productType: "web-app",

  technologies: ["figma", "tailwindcss", "typescript", "react", "git"],
  skills: ["ux-ui-design", "product-discovery", "communication", "process-optimization"],

  metrics: {
    hoursInvested: 60,
    context: {
      label: {
        en: "Filter dimensions",
        fr: "Dimensions de filtre",
      },
      value: 7,
      unit: {
        en: "",
        fr: "",
      },
    },
  },

  deliverables: [
    {
      en: "Interactive portfolio structured as a business intelligence-style dashboard instead of a classic static profile page",
      fr: "Portfolio interactif structuré comme un dashboard de type business intelligence plutôt qu'une page profil statique classique",
    },
    {
      en: "Bilingual content architecture separating reusable UI copy from project-specific localized data",
      fr: "Architecture de contenu bilingue séparant les libellés UI réutilisables des données projet traduits",
    },
    {
      en: "Project explorer experience with recruiter-friendly filtering",
      fr: "Expérience d'exploration des projets avec filtres adaptés au recrutement",
    },
    {
      en: "Hybrid positioning system designed to present both full-stack development projects and data-oriented professional experience",
      fr: "Système de positionnement hybride conçu pour présenter à la fois des projets full-stack et une expérience professionnelle orientée data",
    },
  ],

  summary: {
    en: "Personal portfolio redesigned as an interactive analytics dashboard to present a hybrid Full-Stack and Data profile through structured project data.",
    fr: "Portfolio personnel repensé sous forme de dashboard analytique interactif pour présenter mon profil hybride Full-Stack et Data à travers des données projet structurées.",
  },

  problem: {
    en: "A classic developer portfolio was not enough to communicate a profile combining software development, operational data analysis and business-oriented systems thinking. The challenge was to make the portfolio itself demonstrate those strengths instead of only describing them.",
    fr: "Un portfolio développeur classique ne suffisait pas à communiquer un profil combinant développement logiciel, analyse de données opérationnelles et vision système orientée métier. L'enjeu était de démontrer ces forces via le portfolio lui-même, plutôt que de simplement les décrire.",
  },

  solution: {
    en: "Built a React and TypeScript portfolio around a structured data model, localized project content, dashboard-inspired sections and recruiter-oriented filters.",
    fr: "Construction d'un portfolio en React et TypeScript autour d'un modèle de données structuré, de contenus projet dans 2 langues, de sections inspirées des dashboards data et de filtres orientés recruteurs.",
  },

  impact: [
    {
      en: "Product-like interface that demonstrates frontend architecture, content modeling and analytical thinking at the same time.",
      fr: "Interface produit démontrant simultanément architecture frontend, modélisation de contenu et raisonnement analytique.",
    },
    {
      en: "Made the entire website accessible in both French and English through a single language toggle, allowing visitors to explore the same content in their preferred language.",
      fr: "Site entièrement accessible en français et en anglais grâce à un sélecteur de langue unique, permettant aux visiteurs d'explorer le même contenu dans la langue de leur choix.",
    },
    {
      en: "Improved recruiter readability by making the Full-Stack and Data positioning more explicit.",
      fr: "Amélioration de la lisibilité recruteur en rendant le positionnement Full-Stack et Data plus explicite.",
    },
    {
      en: "Built a foundation ready to host future project case studies, professional experience, analytics metrics and more advanced dashboard interactions.",
      fr: "Mise en place d'une base prête à accueillir de futurs projets, expériences professionnelles, métriques analytiques et interactions dashboard plus avancées.",
    },
  ],

  screenshots: [],

  links: {
    github: "https://github.com/luneroka/yoannrobert-dev",
  },

  period: {
    start: "2026-05",
    end: "2026-05",
    precision: "month",
  },

  featured: true,
} satisfies Project;
