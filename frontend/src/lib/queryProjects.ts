/*
|--------------------------------------------------------------------------
| compose/filter/enrich projects
|--------------------------------------------------------------------------
*/

import { projects } from "@/data/projects";
import type { Company, Industry, ProductType, Project, SkillId, Track } from "@/data/types";

type SingleFilterValue<T extends string> = T | "all";

export type ProjectFilters = {
  type?: SingleFilterValue<Track>;
  tracks?: Track[];
  industry?: SingleFilterValue<Industry>;
  industries?: Industry[];
  productType?: SingleFilterValue<ProductType>;
  productTypes?: ProductType[];
  company?: SingleFilterValue<Company>;
  companies?: Company[];
  skills?: SkillId[];
  technologies?: string[];
  dateFrom?: number;
  dateTo?: number;
  featuredOnly?: boolean;
};

export type ProjectSortKey = "date-desc" | "date-asc" | "hours-desc" | "systems-desc";

export type EnrichedProject = Project & {
  systemsBuiltCount: number;
  technologiesCount: number;
};

export type ProjectDateRange = {
  start: number;
  end: number;
};

const monthIndexByName: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

function toMonthSerial(year: number, monthIndex: number) {
  return year * 12 + monthIndex;
}

function getCurrentMonthSerial() {
  const currentDate = new Date();

  return toMonthSerial(currentDate.getFullYear(), currentDate.getMonth());
}

function parseMonthYear(value: string) {
  const match = value.trim().match(/^([A-Za-z]+)\s+(\d{4})$/);

  if (!match) {
    return null;
  }

  const [, monthName, yearValue] = match;
  const monthIndex = monthIndexByName[monthName.toLowerCase()];
  const year = Number(yearValue);

  if (monthIndex === undefined || Number.isNaN(year)) {
    return null;
  }

  return toMonthSerial(year, monthIndex);
}

export function getProjectDateRange(project: Project): ProjectDateRange | null {
  const [startValue, endValue] = project.period.en.split(/\s+—\s+|\s+-\s+/);
  const start = startValue ? parseMonthYear(startValue) : null;

  if (start === null) {
    return null;
  }

  const end =
    endValue && endValue.toLowerCase() !== "ongoing"
      ? parseMonthYear(endValue)
      : getCurrentMonthSerial();

  return {
    start,
    end: Math.max(end ?? start, start),
  };
}

function matchesDateRangeFilter(project: Project, filters: ProjectFilters) {
  if (filters.dateFrom === undefined && filters.dateTo === undefined) {
    return true;
  }

  const projectDateRange = getProjectDateRange(project);

  if (!projectDateRange) {
    return false;
  }

  const dateFrom = filters.dateFrom ?? Number.NEGATIVE_INFINITY;
  const dateTo = filters.dateTo ?? Number.POSITIVE_INFINITY;

  return projectDateRange.end >= dateFrom && projectDateRange.start <= dateTo;
}

function matchesSingleValueFilter<T extends string>(
  values: readonly T[],
  selectedValue: SingleFilterValue<T> | undefined,
) {
  if (!selectedValue || selectedValue === "all") {
    return true;
  }

  return values.includes(selectedValue);
}

function matchesMultiValueFilter<T extends string>(
  values: readonly T[],
  selectedValues: readonly T[] | undefined,
) {
  if (!selectedValues || selectedValues.length === 0) {
    return true;
  }

  return selectedValues.some((selectedValue) => values.includes(selectedValue));
}

function getCompanyValues(project: Project): Company[] {
  return project.company ? [project.company] : [];
}

export function getProjects(): Project[] {
  return projects;
}

export function enrichProject(project: Project): EnrichedProject {
  return {
    ...project,
    systemsBuiltCount: project.systemsBuilt.length,
    technologiesCount: project.technologies.length,
  };
}

export function enrichProjects(projectsToEnrich: Project[]): EnrichedProject[] {
  return projectsToEnrich.map(enrichProject);
}

export function filterProjects(
  projectsToFilter: Project[],
  filters: ProjectFilters = {},
): Project[] {
  return projectsToFilter.filter((project) => {
    return (
      matchesSingleValueFilter(project.track, filters.type) &&
      matchesMultiValueFilter(project.track, filters.tracks) &&
      matchesSingleValueFilter([project.industry], filters.industry) &&
      matchesMultiValueFilter([project.industry], filters.industries) &&
      matchesSingleValueFilter([project.productType], filters.productType) &&
      matchesMultiValueFilter([project.productType], filters.productTypes) &&
      matchesSingleValueFilter(getCompanyValues(project), filters.company) &&
      matchesMultiValueFilter(getCompanyValues(project), filters.companies) &&
      matchesMultiValueFilter(project.skills, filters.skills) &&
      matchesMultiValueFilter(project.technologies, filters.technologies) &&
      matchesDateRangeFilter(project, filters) &&
      (filters.featuredOnly ? project.featured === true : true)
    );
  });
}

export function sortProjects(
  projectsToSort: Project[],
  sortKey: ProjectSortKey = "date-desc",
): Project[] {
  return [...projectsToSort].sort((projectA, projectB) => {
    if (sortKey === "hours-desc") {
      return projectB.metrics.hoursInvested - projectA.metrics.hoursInvested;
    }

    if (sortKey === "systems-desc") {
      return projectB.systemsBuilt.length - projectA.systemsBuilt.length;
    }

    const dateA = getProjectDateRange(projectA)?.end ?? 0;
    const dateB = getProjectDateRange(projectB)?.end ?? 0;

    if (sortKey === "date-asc") {
      return dateA - dateB;
    }

    return dateB - dateA;
  });
}

export function queryProjects(
  filters: ProjectFilters = {},
  sortKey: ProjectSortKey = "date-desc",
): EnrichedProject[] {
  const filteredProjects = filterProjects(getProjects(), filters);
  const sortedProjects = sortProjects(filteredProjects, sortKey);

  return enrichProjects(sortedProjects);
}

export function getProjectById(projectId: Project["id"]): EnrichedProject | undefined {
  const project = projects.find((project) => project.id === projectId);

  return project ? enrichProject(project) : undefined;
}
