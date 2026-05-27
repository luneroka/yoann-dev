import { projects as allProjects } from "./projects";
import type { ContextMetric, Project } from "./types";

export interface ExplorerMetricSummary {
  hoursInvested: number;
  systemsBuilt: number;
  technologiesUsed: number;
  technologies: string[];
  contextMetrics: ContextMetric[];
}

export function getTotalHours(projects: Project[]): number {
  return projects.reduce((sum, project) => sum + project.metrics.hoursInvested, 0);
}

export function getTotalSystemsBuilt(projects: Project[]): number {
  return projects.reduce((sum, project) => sum + project.systemsBuilt.length, 0);
}

export function getUniqueTechnologies(projects: Project[]): string[] {
  return Array.from(new Set(projects.flatMap((project) => project.technologies))).sort();
}

export function getTotalTechnologiesUsed(projects: Project[]): number {
  return getUniqueTechnologies(projects).length;
}

export function getContextMetrics(projects: Project[]): ContextMetric[] {
  return projects.map((project) => project.metrics.context);
}

export function getExplorerMetricSummary(projects: Project[]): ExplorerMetricSummary {
  const technologies = getUniqueTechnologies(projects);

  return {
    hoursInvested: getTotalHours(projects),
    systemsBuilt: getTotalSystemsBuilt(projects),
    technologiesUsed: technologies.length,
    technologies,
    contextMetrics: getContextMetrics(projects),
  };
}

export const explorerMetricSummary = getExplorerMetricSummary(allProjects);
