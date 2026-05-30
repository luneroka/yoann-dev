import type { Project } from "../types";

export const amazonEosBridge = {
  id: "amazon-eos-bridge",

  title: {
    en: "End-of-Shift Reporting",
    fr: "Reporting End-Of-Shift",
  },

  company: "Amazon",
  role: {
    en: "Operations Manager / Project Owner",
    fr: "Operations Manager / Resp. Projet",
  },

  track: ["data"],
  industry: "logistics",
  productType: "analysis",

  technologies: ["excel", "vba"],
  skills: [
    "data-analysis",
    "etl",
    "kpi-design",
    "reporting",
    "process-optimization",
    "stakeholder-management",
    "communication",
  ],

  metrics: {
    hoursInvested: 80,
    context: {
      label: {
        en: "Avg. time saved",
        fr: "Gain moyen",
      },
      value: 30,
      unit: {
        en: "min/shift/manager",
        fr: "min/shift/manager",
      },
    },
  },

  systemsBuilt: [
    {
      en: "VBA workflow pulling subprocess-level performance data into Excel",
      fr: "Workflow VBA important les données de performance par sous-processus dans Excel",
    },
    {
      en: "Automated KPI table with process, volume, target rate, actual rate, hours +/-, and % to plan",
      fr: "Table KPI automatisée avec process, volume, taux cible, taux réel, heures +/- et % au plan",
    },
    {
      en: "Standardized productivity bridge template across Outbound departments",
      fr: "Template standardisé de bridge productivité pour les départements Outbound",
    },
    {
      en: "Comment workflow focused only on subprocesses performing below plan",
      fr: "Workflow de commentaires ciblé uniquement sur les sous-processus sous le plan",
    },
  ],

  summary: {
    en: "Built an Excel/VBA End-of-Shift bridge that automatically pulled subprocess performance data, cutting manual KPI entry and letting managers focus on underperformance comments.",
    fr: "Création d'un bridge End-of-Shift Excel/VBA qui importait automatiquement les données de performance par sous-processus, réduisant la saisie manuelle des KPI pour concentrer les managers sur les commentaires de sous-performance.",
  },

  problem: {
    en: "Managers were manually typing performance metrics for multiple subprocesses per department before adding explanations for productivity gaps.",
    fr: "Les managers saisissaient manuellement les métriques de performance pour plusieurs sous-processus par département avant d'expliquer les écarts de productivité.",
  },

  solution: {
    en: "Developed a VBA data pull that populated each bridge with process name, volume completed, target rate, actual rate, hours +/-, and % to plan. Managers only had to comment on subprocesses below plan, making shift reviews faster and more data-driven.",
    fr: "Développement d'une extraction VBA alimentant chaque bridge avec le nom du process, le volume réalisé, le taux cible, le taux réel, les heures +/- et le % au plan. Les managers n'avaient plus qu'à commenter les sous-processus sous le plan, rendant les revues de shift plus rapides et plus data-driven.",
  },

  impact: [
    {
      en: "Removed repetitive manual entry across multiple subprocesses per department, saving managers an average of 30 min/shift.",
      fr: "Suppression de la saisie manuelle répétitive sur plusieurs sous-processus par département, avec un gain moyen de 30 min/shift/manager.",
    },
    {
      en: "Standardized productivity KPIs across Outbound shift reports.",
      fr: "Standardisation des KPI de productivité dans les rapports de shift Outbound.",
    },
    {
      en: "Refocused manager input on root causes and corrective actions for underperforming processes.",
      fr: "Recentrage de la contribution des managers sur les causes racines et actions correctives des process sous-performants.",
    },
    {
      en: "Made shift performance easier to compare across departments.",
      fr: "Comparaison de la performance shift facilitée entre départements.",
    },
  ],

  period: {
    start: "2023-04",
    end: "2023-04",
    precision: "month",
  },

  featured: true,
} satisfies Project;
