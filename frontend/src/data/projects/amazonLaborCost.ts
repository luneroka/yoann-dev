import type { Project } from "../types";

export const amazonLaborCost = {
  id: "amazon-cost-reduction",

  title: {
    en: "Labour Cost Analysis",
    fr: "Analyse des coûts de main-d'œuvre",
  },

  company: "Amazon",
  role: {
    en: "Area Manager / Project Contributor",
    fr: "Area Manager / Contributeur Projet",
  },

  track: ["data"],
  industry: "logistics",
  productType: "analysis",

  technologies: ["python", "excel", "power-query", "vba"],
  skills: [
    "data-analysis",
    "kpi-design",
    "reporting",
    "etl",
    "process-optimization",
    "stakeholder-management",
    "project-management",
  ],

  metrics: {
    hoursInvested: 480,
    context: {
      label: {
        en: "Cost savings delivered",
        fr: "Économies réalisées",
      },
      value: 3.2,
      unit: {
        en: "M€",
        fr: "M€",
      },
    },
  },

  deliverables: [
    {
      en: "Python data extraction pipeline feeding Excel Power Query datasets",
      fr: "Pipeline d'extraction de données Python alimentant les jeux de données Power Query Excel",
    },
    {
      en: "Workforce utilization and overtime tracking KPI",
      fr: "Indicateur de suivi de l'utilisation des effectifs et des heures supplémentaires",
    },
    {
      en: "Automated weekly reporting workflow",
      fr: "Workflow automatisé de reporting hebdomadaire",
    },
    {
      en: "Operational performance review framework for site-level optimization opportunities",
      fr: "Cadre de revue de performance opérationnelle pour identifier les opportunités d'optimisation par site",
    },
    {
      en: "Project methodology and governance documentation",
      fr: "Documentation de la méthodologie et de la gouvernance du projet",
    },
  ],

  summary: {
    en: "Designed and operationalized a network-wide analytics framework to identify workforce optimization opportunities and reduce labour costs across approximately 30 fulfilment centers in Amazon's UK & Ireland network.",
    fr: "Conception et déploiement d'un dispositif analytique sur environ 30 centres logistiques du réseau Amazon UK & Irlande afin d'identifier des opportunités d'optimisation des effectifs et de réduire les coûts de main‑d'œuvre.",
  },

  problem: {
    en: "Rising labour costs and operational inefficiencies required rapid identification of optimization opportunities while maintaining operational performance and service levels.",
    fr: "L'augmentation des coûts de main-d'œuvre et certaines inefficacités opérationnelles nécessitaient l'identification rapide d'opportunités d'optimisation tout en maintenant la performance et le niveau de service.",
  },

  solution: {
    en: "Built a workforce utilization KPI and automated reporting pipeline that surfaced site-level overtime drivers, prioritized savings opportunities, and equipped senior Operations leaders with a weekly decision rhythm across the UK & Ireland network.",
    fr: "Création d'un indicateur d'utilisation des effectifs et d'un pipeline de reporting automatisé pour révéler les facteurs d'heures supplémentaires par site, prioriser les économies et donner aux responsables Operations un rythme de décision hebdomadaire sur le réseau UK & Irlande.",
  },

  impact: [
    {
      en: "Contributed to a network-wide optimization initiative that generated €3.2M in savings within three months.",
      fr: "Contribution à une initiative d'optimisation à l'échelle du réseau ayant généré 3,2 M€ d'économies en trois mois.",
    },
    {
      en: "Created and transferred ownership of a new network-wide metric still used after project handover.",
      fr: "Création puis transfert de responsabilité d'un nouvel indicateur déployé à l'échelle du réseau.",
    },
    {
      en: "Established weekly operational reviews with sites senior leaders.",
      fr: "Mise en place de revues opérationnelles hebdomadaires avec les responsables de sites.",
    },
    {
      en: "Provided visibility into overtime cost drivers and site-level optimization opportunities.",
      fr: "Amélioration de la visibilité sur les facteurs de coûts liés aux heures supplémentaires et les opportunités d'optimisation par site.",
    },
  ],

  period: {
    start: "2023-01",
    end: "2023-12",
    precision: "year",
  },

  featured: true,
} satisfies Project;
