/*
|--------------------------------------------------------------------------
| compose/filter/enrich projects
|--------------------------------------------------------------------------
*/

import { projects } from "@/data/projects";
import type {
  Company,
  Industry,
  Locale,
  ProductType,
  Project,
  ProjectPeriod,
  SkillId,
  TechnologyId,
  Track,
} from "@/data/types";

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
  technologies?: TechnologyId[];
  dateFrom?: number;
  dateTo?: number;
  featuredOnly?: boolean;
};

export type ProjectSortKey = "date-desc" | "date-asc" | "hours-desc" | "systems-desc";

export type EnrichedProject = Project & {
  deliverablesCount: number;
  technologiesCount: number;
};

export type ProjectDateRange = {
  start: number;
  end: number;
};

function toMonthSerial(year: number, monthIndex: number) {
  return year * 12 + monthIndex;
}

function getCurrentMonthSerial() {
  const currentDate = new Date();

  return toMonthSerial(currentDate.getFullYear(), currentDate.getMonth());
}

function parseYearMonth(value: ProjectPeriod["start"]) {
  const [yearValue, monthValue] = value.split("-");
  const year = Number(yearValue);
  const month = Number(monthValue);

  if (Number.isNaN(year) || Number.isNaN(month) || month < 1 || month > 12) {
    return null;
  }

  return toMonthSerial(year, month - 1);
}

function getYearFromMonthSerial(value: number) {
  return Math.floor(value / 12);
}

function formatMonthSerial(value: number, locale: Locale) {
  const year = getYearFromMonthSerial(value);
  const monthIndex = value % 12;

  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(new Date(year, monthIndex, 1));
}

export function formatProjectPeriod(period: ProjectPeriod, locale: Locale) {
  const start = parseYearMonth(period.start);
  const end = period.end ? parseYearMonth(period.end) : null;

  if (start === null) {
    return "";
  }

  if (period.precision === "year") {
    const startYear = String(getYearFromMonthSerial(start));
    const endYear = end ? String(getYearFromMonthSerial(end)) : null;

    return !endYear || endYear === startYear ? startYear : `${startYear} — ${endYear}`;
  }

  const startLabel = formatMonthSerial(start, locale);

  if (end === start) {
    return startLabel;
  }

  const endLabel = end ? formatMonthSerial(end, locale) : locale === "fr" ? "en cours" : "ongoing";

  return `${startLabel} — ${endLabel}`;
}

export function getProjectDateRange(project: Project): ProjectDateRange | null {
  const start = parseYearMonth(project.period.start);

  if (start === null) {
    return null;
  }

  const end = project.period.end ? parseYearMonth(project.period.end) : getCurrentMonthSerial();

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
    deliverablesCount: project.deliverables.length,
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
      return projectB.deliverables.length - projectA.deliverables.length;
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
