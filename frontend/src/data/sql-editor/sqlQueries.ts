/*
|--------------------------------------------------------------------------
| Fake SQL Editor presets
|--------------------------------------------------------------------------
*/

import type { ProjectFilters } from "@/lib/queryProjects";

function formatSqlList(values: string[]) {
  return values.map((value) => `'${value}'`).join(", ");
}

function formatMonthSerial(value: number) {
  const year = Math.floor(value / 12);
  const month = (value % 12) + 1;

  return `${year}-${String(month).padStart(2, "0")}`;
}

export function buildProjectsSqlQuery(filters: ProjectFilters = {}) {
  const conditions: string[] = [];

  if (filters.type && filters.type !== "all") {
    conditions.push(`track = '${filters.type}'`);
  }

  if (filters.tracks && filters.tracks.length > 0) {
    conditions.push(`track IN (${formatSqlList(filters.tracks)})`);
  }

  if (filters.domain && filters.domain !== "all") {
    conditions.push(`domain = '${filters.domain}'`);
  }

  if (filters.domains && filters.domains.length > 0) {
    conditions.push(`domain IN (${formatSqlList(filters.domains)})`);
  }

  if (filters.company && filters.company !== "all") {
    conditions.push(`company = '${filters.company}'`);
  }

  if (filters.companies && filters.companies.length > 0) {
    conditions.push(`company IN (${formatSqlList(filters.companies)})`);
  }

  if (filters.skills && filters.skills.length > 0) {
    conditions.push(`skills IN (${formatSqlList(filters.skills)})`);
  }

  if (filters.technologies && filters.technologies.length > 0) {
    conditions.push(`technologies IN (${formatSqlList(filters.technologies)})`);
  }

  if (filters.dateFrom !== undefined) {
    conditions.push(`period_end >= '${formatMonthSerial(filters.dateFrom)}'`);
  }

  if (filters.dateTo !== undefined) {
    conditions.push(`period_start <= '${formatMonthSerial(filters.dateTo)}'`);
  }

  if (filters.featuredOnly) {
    conditions.push("featured = true");
  }

  if (conditions.length === 0) {
    return "SELECT * FROM projects;";
  }

  return `SELECT * FROM projects WHERE ${conditions.join(" AND ")};`;
}

export const defaultProjectsSqlQuery = buildProjectsSqlQuery();
