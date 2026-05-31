import { projects as allProjects } from "./projects";
import type { ContextMetric, Project, SkillId } from "./types";

export interface ExplorerMetricSummary {
  hoursInvested: number;
  deliverables: number;
  skillsDemonstrated: number;
  skills: SkillId[];
  contextMetrics: ContextMetric[];
}

export function getTotalHours(projects: Project[]): number {
  return projects.reduce((sum, project) => sum + project.metrics.hoursInvested, 0);
}

export function getTotalDeliverables(projects: Project[]): number {
  return projects.reduce((sum, project) => sum + project.deliverables.length, 0);
}

export function getUniqueSkills(projects: Project[]): SkillId[] {
  return Array.from(new Set(projects.flatMap((project) => project.skills))).sort();
}

export function getTotalSkillsDemonstrated(projects: Project[]): number {
  return getUniqueSkills(projects).length;
}

export function getContextMetrics(projects: Project[]): ContextMetric[] {
  return projects.map((project) => project.metrics.context);
}

export function getExplorerMetricSummary(projects: Project[]): ExplorerMetricSummary {
  const skills = getUniqueSkills(projects);

  return {
    hoursInvested: getTotalHours(projects),
    deliverables: getTotalDeliverables(projects),
    skillsDemonstrated: skills.length,
    skills,
    contextMetrics: getContextMetrics(projects),
  };
}

export const explorerMetricSummary = getExplorerMetricSummary(allProjects);
