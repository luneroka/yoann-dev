import type { ElementType } from "react";

/*
|--------------------------------------------------------------------------
| Core Entity Types
|--------------------------------------------------------------------------
*/

export type Locale = "en" | "fr";

export type LocalizedString = Record<Locale, string>;

export type Track = "dev" | "data";

export type Domain = "logistics" | "retail" | "construction" | "saas" | "internal-tools";

export type Company = "Amazon" | "Lidl" | "Solo";

export type SkillId =
  | "javascript"
  | "typescript"
  | "react"
  | "tailwindcss"
  | "nodejs"
  | "nextjs"
  | "python"
  | "fastapi"
  | "flask"
  | "mongodb"
  | "postgresql"
  | "sql"
  | "excel"
  | "vba"
  | "etl"
  | "data-modeling"
  | "power-query"
  | "tableau"
  | "power-bi"
  | "git"
  | "docker";

export type SkillCategory = "frontend" | "backend" | "data" | "database" | "tooling";

export type SkillLevel = "comfortable" | "working" | "learning";

/*
|--------------------------------------------------------------------------
| Metrics
|--------------------------------------------------------------------------
*/

export type ContextMetricType =
  | "budget_managed"
  | "records_analyzed"
  | "reports_built"
  | "users_impacted"
  | "performance_gain"
  | "other";

export interface ContextMetric {
  type: ContextMetricType;
  label: LocalizedString;
  value: number;
  unit?: LocalizedString;
}

export interface ProjectMetrics {
  hoursInvested: number;
  context: ContextMetric;
}

export type ProjectScreenshot = {
  src: string;
  alt: {
    en: string;
    fr: string;
  };
  caption?: {
    en: string;
    fr: string;
  };
};

/*
|--------------------------------------------------------------------------
| Shared Interfaces
|--------------------------------------------------------------------------
*/

export interface Skill {
  id: SkillId;
  label: LocalizedString;
  icon: ElementType<{ className?: string }>;
  category: SkillCategory;
  level: SkillLevel;
  featured?: boolean;
  showAsFilter?: boolean;
}

export interface Project {
  id: string;

  title: LocalizedString;
  company?: Company;
  role?: LocalizedString | null;

  track: Track[];
  domains: Domain[];

  skills: SkillId[];

  metrics: ProjectMetrics;
  systemsBuilt: LocalizedString[];
  technologies: string[];

  summary: LocalizedString;
  problem?: LocalizedString;
  solution?: LocalizedString;

  impact: LocalizedString[];
  screenshots?: ProjectScreenshot[];

  period: LocalizedString;

  featured?: boolean;
}

/*
|--------------------------------------------------------------------------
| Explorer Filtering
|--------------------------------------------------------------------------
*/

export interface ExplorerFilters {
  tracks?: Track[];
  domains?: Domain[];

  companies?: Company[];

  skills: SkillId[];

  featuredOnly?: boolean;
}
