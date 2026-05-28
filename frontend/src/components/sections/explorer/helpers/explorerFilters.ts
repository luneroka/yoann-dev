import type { Project } from "@/data/types";
import { getProjectDateRange, type ProjectFilters } from "@/lib/queryProjects";

export type FilterItem<T extends string> = {
  value: T;
  label: string;
  active: boolean;
};

export type ProjectDateBounds = {
  min: number;
  max: number;
};

export function getUniqueValues<T extends string>(values: T[]): T[] {
  return Array.from(new Set(values)).sort();
}

export function getDateBounds(projects: Project[]): ProjectDateBounds | null {
  const ranges = projects
    .map((project) => getProjectDateRange(project))
    .filter((range) => range !== null);

  if (ranges.length === 0) {
    return null;
  }

  return {
    min: Math.min(...ranges.map((range) => range.start)),
    max: Math.max(...ranges.map((range) => range.end)),
  };
}

export function formatMonthSerial(value: number, locale: string) {
  const year = Math.floor(value / 12);
  const monthIndex = value % 12;

  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
  }).format(new Date(year, monthIndex, 1));
}

export function getRangePercent(value: number, min: number, max: number) {
  if (max === min) {
    return 0;
  }

  return ((value - min) / (max - min)) * 100;
}

export function isSelected<T extends string>(
  selectedValues: readonly T[] | undefined,
  value: T,
) {
  return selectedValues?.includes(value) ?? false;
}

export function toggleArrayValue<T extends string>(
  values: readonly T[] | undefined,
  value: T,
) {
  const selectedValues = values ?? [];
  const nextValues = selectedValues.includes(value)
    ? selectedValues.filter((selectedValue) => selectedValue !== value)
    : [...selectedValues, value];

  return nextValues.length > 0 ? nextValues : undefined;
}

export function toggleAllValues<T extends string>(
  values: readonly T[] | undefined,
  options: readonly T[],
) {
  const allSelected = options.every((option) => values?.includes(option));

  return allSelected ? undefined : [...options];
}

export function updateArrayFilter<
  K extends
    | "tracks"
    | "industries"
    | "productTypes"
    | "companies"
    | "technologies"
    | "skills",
>(
  filters: ProjectFilters,
  key: K,
  values: ProjectFilters[K],
) {
  const nextFilters = { ...filters };

  if (values && values.length > 0) {
    return {
      ...nextFilters,
      [key]: values,
    };
  }

  delete nextFilters[key];

  return nextFilters;
}

export function hasActiveFilters(filters: ProjectFilters) {
  return Boolean(
    filters.tracks?.length ||
      filters.industries?.length ||
      filters.productTypes?.length ||
      filters.companies?.length ||
      filters.technologies?.length ||
      filters.skills?.length ||
      filters.dateFrom !== undefined ||
      filters.dateTo !== undefined,
  );
}

export function updateDateFilter(
  filters: ProjectFilters,
  dateFrom: number,
  dateTo: number,
) {
  return {
    ...filters,
    dateFrom,
    dateTo,
  };
}

export function resetDateFilter(filters: ProjectFilters) {
  const nextFilters = { ...filters };

  delete nextFilters.dateFrom;
  delete nextFilters.dateTo;

  return nextFilters;
}
