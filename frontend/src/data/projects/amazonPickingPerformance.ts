import type { Project } from "../types";

export const amazonPickingPerformance = {
  id: "amazon-picking-performance",

  title: {
    en: "Picking Performance Optimization Study",
    fr: "Étude d'optimisation de la performance Picking",
  },

  company: "Amazon",
  role: {
    en: "Area Manager / Project Owner",
    fr: "Area Manager / Resp. Project",
  },

  track: ["data"],
  industry: "logistics",
  productType: "analysis",

  technologies: ["excel", "minitab"],
  skills: [
    "data-analysis",
    "reporting",
    "process-optimization",
    "stakeholder-management",
    "communication",
  ],

  metrics: {
    hoursInvested: 240,
    context: {
      label: {
        en: "Productivity gained",
        fr: "Gain productivité",
      },
      value: +2.95,
      unit: {
        en: "p.p.",
        fr: "p.p.",
      },
      showPositiveSign: true,
    },
  },

  systemsBuilt: [
    {
      en: "Controlled field test comparing two operational procedures",
      fr: "Test terrain contrôlé comparant deux procédures opérationnelles",
    },
    {
      en: "Weekly data collection process across individual picking rotations",
      fr: "Processus de collecte hebdomadaire des données sur les rotations individuelles de picking",
    },
    {
      en: "Statistical analysis framework using Minitab, normality checks and one-sample t-tests",
      fr: "Cadre d'analyse statistique basé sur Minitab, des tests de normalité et des tests t à un échantillon",
    },
    {
      en: "Performance segmentation by associate category to identify where the process created value",
      fr: "Segmentation de la performance par catégorie d'associés afin d'identifier où la procédure créait de la valeur",
    },
    {
      en: "Operational recommendation balancing statistical evidence, business impact and deployment risk",
      fr: "Recommandation opérationnelle combinant preuves statistiques, impact métier et risque de déploiement",
    },
  ],

  summary: {
    en: "Ran a controlled field study to validate a new picking procedure, quantify its productivity impact, and turn mixed performance signals into a clear deployment recommendation.",
    fr: "Pilotage d'une étude terrain contrôlée pour valider une nouvelle procédure de picking, quantifier son impact sur la productivité et transformer des signaux de performance contrastés en recommandation de déploiement.",
  },

  problem: {
    en: "The operation saw early productivity gains from a new picking method, but needed to know where it actually helped, whether the uplift was reliable, and how to roll it out without slowing top performers.",
    fr: "Plusieurs opérateurs observaient des gains de performance avec une nouvelle méthode de picking. Le besoin était de quantifier précisément la création de valeur, si l'amélioration était fiable et comment la déployer sans ralentir les meilleurs performeurs.",
  },

  solution: {
    en: "Built the test protocol, analyzed 106 observations in Minitab, segmented the impact by associate performance level, and recommended the procedure as optional guidance: high upside for lower performers, limited disruption for top performers.",
    fr: "Construction du protocole de test, analyse de 106 observations dans Minitab, segmentation de l'impact par niveau de performance et recommandation d'une adoption optionnelle : fort potentiel pour les opérateurs en difficulté, faible perturbation pour les meilleurs performeurs.",
  },

  impact: [
    {
      en: "Measured a +2.95 percentage point increase in global productivity during the test period.",
      fr: "Mesure d'une hausse de productivité globale de +2,95 points de pourcentage pendant la période de test.",
    },
    {
      en: "Identified that the procedure created stronger value for underperforming associates than for top performers.",
      fr: "Identification d'un impact positif plus fort de la procédure sur les opérateurs en difficulté que sur les meilleurs performeurs.",
    },
    {
      en: "Used statistical testing to avoid overclaiming results at a 95% confidence level while still informing a low-risk operational recommendation.",
      fr: "Utilisation de tests statistiques pour éviter de surinterpréter les résultats au seuil de confiance de 95 %, tout en formulant une recommandation opérationnelle à faible risque.",
    },
    {
      en: "Recommended the procedure as optional guidance rather than a mandatory standard to preserve high-performer autonomy.",
      fr: "Recommandation de la procédure comme bonne pratique optionnelle plutôt que comme standard obligatoire afin de préserver l'autonomie des meilleurs performeurs.",
    },
  ],

  period: {
    start: "2023-01",
    end: "2023-12",
    precision: "year",
  },

  featured: true,
} satisfies Project;
