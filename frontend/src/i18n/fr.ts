export const fr = {
  hero: {
    eyebrow: "DÉVELOPPEUR FULL-STACK | DATA ANALYST",
    name: "Yoann R.",
    subtitle: {
      intro: "Explorez mon parcours entre opérations, ",
      firstHighlight: "data",
      middle: " et ",
      secondHighlight: "développement",
      end: ".",
    },
    description:
      "Un CV interactif regroupant mes projets, compétences et réalisations professionnelles.",
    ctaPrimary: "Explorer les projets",
    ctaSecondary: "Contactez-moi",
    discoverJourney: "Découvrir mon parcours",
    highlightsLabel: "Points forts techniques",
    linkedinLabel: "Voir le profil LinkedIn de Yoann Robert",
    githubLabel: "Voir le profil GitHub de Yoann Robert",
    highlightCards: [
      {
        value: "8+",
        label: "Ans en environnements opérationnels",
        detail: "Compréhension des enjeux métiers",
      },
      {
        value: "4",
        label: "Industries explorées",
        detail: "Retail, Logistique, Construction, Services",
      },
      {
        value: "SQL + Python",
        label: "Stack analytique principale",
        detail: "Données, analyses, automatisation",
      },
      {
        value: "React + FastAPI",
        label: "Architecture full-stack",
        detail: "APIs robustes & interfaces modernes",
      },
    ],
  },

  journey: {
    title: "Mon parcours",
    subtitle: "De la data opérationnelle au développement.",
    timelineLabel: "Parcours professionnel",
    discoverExplorer: "Découvrir l’explorateur de projets",
    steps: [
      {
        period: "2016 – 2017",
        title: "Apple",
        highlights: ["Support client", "Diagnostic technique", "Opérations retail"],
      },
      {
        period: "2017 – 2023",
        title: "Amazon",
        highlights: ["Opérations", "Analyse de performance", "Amélioration continue"],
      },
      {
        period: "2024",
        title: "Lidl",
        highlights: ["Opérations retail", "Gestion de magasin", "Expérience client"],
      },
      {
        period: "2024 – Aujourd’hui",
        title: "Web & Data",
        highlights: ["Développement full-stack", "Data analytics", "Création de produits"],
      },
    ],
  },

  nav: {
    home: "Accueil",
    journey: "Parcours",
    explorer: "Projets",
    skills: "Compétences",
    contact: "Contact",
  },

  contact: {
    title: "Contactez-moi",
    phrase: "Ouvert aux opportunités en développement web et data.",
    emailLabel: "Envoyer un email à Yoann Robert",
    linkedinLabel: "Voir le profil LinkedIn de Yoann Robert",
    githubLabel: "Voir le profil GitHub de Yoann Robert",
  },

  explorer: {
    eyebrow: "EXPLORATEUR DE PROJETS",
    title: "Explorateur de projets interactif",
    subtitle:
      "Explorez mes projets comme un tableau de bord analytique : filtrez, comparez et mettez en évidence les expériences les plus pertinentes.",
    discoverSkills: "Voir mes compétences",
    emptyState: "Aucun élément ne correspond aux filtres.",
    filters: {
      title: "Filtres",
      status: "Cliquez pour affiner",
      helpLabel: "Comment utiliser les filtres",
      helpSteps: [
        "Utilisez les filtres selon les critères qui vous intéressent",
        "Le tableau de bord se met à jour automatiquement",
        "Cliquez sur un projet pour en savoir plus",
      ],
      all: "Tout",
      date: "Date",
      dateFrom: "Date de début",
      dateTo: "Date de fin",
      type: "Type",
      industry: "Secteur",
      productType: "Type de produit",
      company: "Entreprise",
      technologies: "Technologies",
      skills: "Compétences",
    },
    query: {
      label: "Aperçu SQL",
      generatedHint: "Généré automatiquement depuis les filtres",
      readOnlyLabel: "Requête SQL en lecture seule générée depuis les filtres actifs",
      statement: "SELECT * FROM projects WHERE focus IN ('Dev', 'Data');",
    },
    kpis: {
      hoursInvested: "Heures investies",
      deliverables: "Livrables de projet",
      skillsDemonstrated: "Compétences démontrées",
      skillsDemonstratedHelper: "Compétences uniques démontrées dans les projets sélectionnés",
      contextMetric: "Métrique contexte",
    },
    charts: {
      impactOverview: "Projets par heures investies",
      technologiesCovered: "Technologies couvertes",
      timeline: "Derniers projets",
    },
    projectDetailsModal: {
      close: "Fermer les détails du projet",
      closeButton: "Fermer",
      previousImage: "Image précédente",
      nextImage: "Image suivante",
      imageCounter: "Image",
      overview: "Vue d'ensemble",
      gallery: "Galerie",
      details: "Détails",
      company: "Entreprise",
      role: "Rôle",
      period: "Période",
      domain: "Domaine",
      metrics: "Métriques",
      skillsUsed: "Compétences utilisées",
      hours: "Heures",
      technologies: "Technologies",
      problem: "Problème",
      solution: "Solution",
      impact: "Impact",
      deliverables: "Livrables",
      viewDeliverables: "Voir les livrables du projet",
      noImages: "Aucune capture disponible pour ce projet pour le moment.",
      liveDemo: "Live Demo",
      github: "GitHub",
    },
  },

  skillsExpertise: {
    title: "Compétences & expertise",
    intro:
      "Une synthèse des compétences démontrées à travers mes projets, entre développement full-stack, analyse de données et logique produit orientée métier.",
    discoverContact: "Me contacter",
    labels: {
      capabilities: "Capacités",
      coreTools: "Outils clés",
      featuredProjects: "Projets associés",
      industries: "Secteurs",
      projectTypes: "Types de projets",
      seeDetails: "Voir détails",
      hideDetails: "Masquer les détails",
    },
    projectCountLabel: "projets cartographiés",
    emptyState: "Aucune donnée projet associée pour le moment.",
    cards: {
      frontend: {
        title: "Développement Frontend",
        description:
          "Créer des interfaces responsive, propres et maintenables pour des produits orientés utilisateurs.",
        capabilities: [
          "Architecture de composants React",
          "Types et interfaces TypeScript",
          "Layouts de dashboards responsive",
          "Filtrage et interactions côté client",
          "Interfaces conçues pour le multilingue",
        ],
      },
      backend: {
        title: "Ingénierie Backend",
        description:
          "Concevoir des APIs, des modèles relationnels et une logique métier pour des applications structurées.",
        capabilities: [
          "Conception d'API REST",
          "Modélisation relationnelle",
          "Modélisation de workflows métier",
          "Usage de PostgreSQL et SQLAlchemy",
          "Environnements de développement Docker",
        ],
      },
      data: {
        title: "Data & Analytics",
        description:
          "Transformer des données opérationnelles en tableaux de bord, KPIs et outils d’aide à la décision.",
        capabilities: [
          "Analyse basée sur SQL",
          "Suivi de KPIs et reporting",
          "Dashboarding Power BI & Tableau",
          "Modélisation de données",
          "Analyse de performance opérationnelle",
        ],
      },
      domain: {
        title: "Expertise métier",
        description:
          "Appliquer la technique à des contextes business, types de projets et environnements opérationnels concrets.",
        capabilities: [
          "Compréhension des processus métier",
          "Workflows opérationnels",
          "Outils internes",
          "Logique SaaS et produit",
          "Aide à la décision pilotée par la donnée",
        ],
      },
    },
  },

  filters: {
    type: "Type",
    tracks: "Axes",
    industries: "Secteurs",
    productTypes: "Types de produit",
    companies: "Entreprises",
    technologies: "Technologies",
    skills: "Compétences",
    featuredOnly: "Mis en avant uniquement",
    reset: "Réinitialiser les filtres",
  },

  sections: {
    problem: "Problème",
    solution: "Solution",
    impact: "Impact",
    metrics: "Métriques",
    skills: "Compétences",
  },

  footer: {
    name: "Yoann Robert",
    copyright: "Tous droits réservés.",
    linkedinLabel: "Voir le profil LinkedIn de Yoann Robert",
    githubLabel: "Voir le profil GitHub de Yoann Robert",
  },
} as const;
