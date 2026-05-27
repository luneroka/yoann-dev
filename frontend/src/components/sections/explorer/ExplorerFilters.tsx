import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { companyLabels, domainLabels, skillLabels, trackLabels } from "@/data/labels";
import type { Company, Domain, Project, SkillId, Track } from "@/data/types";
import { translate } from "@/i18n/translate";
import { getProjectDateRange, type ProjectFilters } from "@/lib/queryProjects";

type FilterItem<T extends string> = {
  value: T;
  label: string;
  active: boolean;
};

type FilterGroupProps<T extends string> = {
  allLabel: string;
  title: string;
  items: FilterItem<T>[];
  allActive: boolean;
  onToggleAll: () => void;
  onToggle: (value: T) => void;
};

type SkillsDropdownProps = {
  allLabel: string;
  title: string;
  items: FilterItem<SkillId>[];
  allActive: boolean;
  onToggleAll: () => void;
  onToggle: (value: SkillId) => void;
};

type ExplorerFiltersProps = {
  projects: Project[];
  filters: ProjectFilters;
  onFiltersChange: (filters: ProjectFilters) => void;
};

function getUniqueValues<T extends string>(values: T[]): T[] {
  return Array.from(new Set(values)).sort();
}

function getDateBounds(projects: Project[]) {
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

function formatMonthSerial(value: number, locale: string) {
  const year = Math.floor(value / 12);
  const monthIndex = value % 12;

  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
  }).format(new Date(year, monthIndex, 1));
}

function getRangePercent(value: number, min: number, max: number) {
  if (max === min) {
    return 0;
  }

  return ((value - min) / (max - min)) * 100;
}

function isSelected<T extends string>(selectedValues: readonly T[] | undefined, value: T) {
  return selectedValues?.includes(value) ?? false;
}

function toggleArrayValue<T extends string>(values: readonly T[] | undefined, value: T) {
  const selectedValues = values ?? [];
  const nextValues = selectedValues.includes(value)
    ? selectedValues.filter((selectedValue) => selectedValue !== value)
    : [...selectedValues, value];

  return nextValues.length > 0 ? nextValues : undefined;
}

function toggleAllValues<T extends string>(
  values: readonly T[] | undefined,
  options: readonly T[],
) {
  const allSelected = options.every((option) => values?.includes(option));

  return allSelected ? undefined : [...options];
}

function updateArrayFilter<K extends "tracks" | "domains" | "companies" | "skills">(
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

function hasActiveFilters(filters: ProjectFilters) {
  return Boolean(
    filters.tracks?.length ||
    filters.domains?.length ||
    filters.companies?.length ||
    filters.skills?.length ||
    filters.dateFrom !== undefined ||
    filters.dateTo !== undefined,
  );
}

function updateDateFilter(filters: ProjectFilters, dateFrom: number, dateTo: number) {
  return {
    ...filters,
    dateFrom,
    dateTo,
  };
}

function resetDateFilter(filters: ProjectFilters) {
  const nextFilters = { ...filters };

  delete nextFilters.dateFrom;
  delete nextFilters.dateTo;

  return nextFilters;
}

function FilterGroup<T extends string>({
  allLabel,
  title,
  items,
  allActive,
  onToggleAll,
  onToggle,
}: FilterGroupProps<T>) {
  return (
    <div>
      <h3 className="font-body text-[0.68rem] font-bold uppercase tracking-wide text-muted-foreground">
        {title}
      </h3>

      <div className="mt-2 flex flex-wrap gap-1.5">
        <button
          type="button"
          onClick={onToggleAll}
          aria-pressed={allActive}
          className={`inline-flex min-h-7 cursor-pointer items-center rounded-full border px-2.5 py-1 font-body text-xs font-semibold transition-smooth ${
            allActive
              ? "border-primary/40 bg-primary/10 text-primary"
              : "border-border bg-background text-muted-foreground hover:border-primary/35 hover:text-primary"
          }`}
        >
          {allLabel}
        </button>

        {items.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => onToggle(item.value)}
            aria-pressed={item.active}
            className={`inline-flex min-h-7 cursor-pointer items-center rounded-full border px-2.5 py-1 font-body text-xs font-semibold transition-smooth ${
              item.active
                ? "border-primary/40 bg-primary/10 text-primary"
                : "border-border bg-background text-muted-foreground hover:border-primary/35 hover:text-primary"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function SkillsDropdown({
  allLabel,
  title,
  items,
  allActive,
  onToggleAll,
  onToggle,
}: SkillsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedItems = items.filter((item) => item.active);
  const buttonLabel =
    selectedItems.length > 0
      ? selectedItems.map((item) => item.label).join(", ")
      : allLabel;

  return (
    <div className="relative">
      <h3 className="font-body text-[0.68rem] font-bold uppercase tracking-wide text-muted-foreground">
        {title}
      </h3>

      <button
        type="button"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        aria-expanded={isOpen}
        className="mt-2 flex min-h-9 w-full cursor-pointer items-center justify-between gap-2 rounded-md border border-border bg-background px-3 py-2 text-left font-body text-xs font-semibold text-foreground transition-smooth hover:border-primary/35"
      >
        <span className="min-w-0 truncate">{buttonLabel}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-smooth ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen ? (
        <div className="mt-2 max-h-64 overflow-y-auto rounded-md border border-border bg-popover p-2 pb-3 shadow-medium">
          <button
            type="button"
            onClick={onToggleAll}
            aria-pressed={allActive}
            className={`flex w-full cursor-pointer items-center justify-between rounded-sm px-2.5 py-2 font-body text-xs font-semibold transition-smooth ${
              allActive
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-primary"
            }`}
          >
            <span>{allLabel}</span>
            <span
              className={`h-3 w-3 rounded-sm border ${
                allActive ? "border-primary bg-primary" : "border-border"
              }`}
              aria-hidden="true"
            />
          </button>

          <div className="my-1 h-px bg-border" />

          {items.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => onToggle(item.value)}
              aria-pressed={item.active}
              className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-sm px-2.5 py-2 font-body text-xs font-semibold transition-smooth ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-primary"
              }`}
            >
              <span className="truncate">{item.label}</span>
              <span
                className={`h-3 w-3 shrink-0 rounded-sm border ${
                  item.active ? "border-primary bg-primary" : "border-border"
                }`}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

const ExplorerFilters = ({
  projects,
  filters: activeFilters,
  onFiltersChange,
}: ExplorerFiltersProps) => {
  const { copy, locale } = useLanguage();

  const trackOptions = getUniqueValues(projects.flatMap((project) => project.track));
  const domainOptions = getUniqueValues(projects.flatMap((project) => project.domains));
  const companyOptions = getUniqueValues(
    projects.flatMap((project) => (project.company ? [project.company] : [])),
  );
  const skillOptions = getUniqueValues(projects.flatMap((project) => project.skills));
  const dateBounds = getDateBounds(projects);
  const dateFrom = activeFilters.dateFrom ?? dateBounds?.min;
  const dateTo = activeFilters.dateTo ?? dateBounds?.max;
  const dateFromPercent =
    dateBounds && dateFrom !== undefined
      ? getRangePercent(dateFrom, dateBounds.min, dateBounds.max)
      : 0;
  const dateToPercent =
    dateBounds && dateTo !== undefined
      ? getRangePercent(dateTo, dateBounds.min, dateBounds.max)
      : 100;
  const isDateFiltered =
    dateBounds !== null &&
    (activeFilters.dateFrom !== undefined || activeFilters.dateTo !== undefined);
  const explorerFiltersCopy = copy.explorer.filters;

  function toggleTrack(track: Track) {
    onFiltersChange(
      updateArrayFilter(activeFilters, "tracks", toggleArrayValue(activeFilters.tracks, track)),
    );
  }

  function toggleAllTracks() {
    onFiltersChange(
      updateArrayFilter(
        activeFilters,
        "tracks",
        toggleAllValues(activeFilters.tracks, trackOptions),
      ),
    );
  }

  function toggleDomain(domain: Domain) {
    onFiltersChange(
      updateArrayFilter(activeFilters, "domains", toggleArrayValue(activeFilters.domains, domain)),
    );
  }

  function toggleAllDomains() {
    onFiltersChange(
      updateArrayFilter(
        activeFilters,
        "domains",
        toggleAllValues(activeFilters.domains, domainOptions),
      ),
    );
  }

  function toggleCompany(company: Company) {
    onFiltersChange(
      updateArrayFilter(
        activeFilters,
        "companies",
        toggleArrayValue(activeFilters.companies, company),
      ),
    );
  }

  function toggleAllCompanies() {
    onFiltersChange(
      updateArrayFilter(
        activeFilters,
        "companies",
        toggleAllValues(activeFilters.companies, companyOptions),
      ),
    );
  }

  function toggleSkill(skill: SkillId) {
    onFiltersChange(
      updateArrayFilter(activeFilters, "skills", toggleArrayValue(activeFilters.skills, skill)),
    );
  }

  function toggleAllSkills() {
    onFiltersChange(
      updateArrayFilter(
        activeFilters,
        "skills",
        toggleAllValues(activeFilters.skills, skillOptions),
      ),
    );
  }

  function updateDateFrom(value: number) {
    if (!dateBounds || dateTo === undefined) {
      return;
    }

    onFiltersChange(updateDateFilter(activeFilters, Math.min(value, dateTo), dateTo));
  }

  function updateDateTo(value: number) {
    if (!dateBounds || dateFrom === undefined) {
      return;
    }

    onFiltersChange(updateDateFilter(activeFilters, dateFrom, Math.max(value, dateFrom)));
  }

  function toggleAllDates() {
    if (!dateBounds || !isDateFiltered) {
      return;
    }

    onFiltersChange(resetDateFilter(activeFilters));
  }

  return (
    <aside className="border-b border-border bg-secondary/30 p-4 lg:border-b-0 lg:border-r">
      <div className="mb-5">
        <div>
          <p className="font-heading text-base font-bold text-foreground">
            {explorerFiltersCopy.title}
          </p>
          <p className="mt-1 font-body text-xs text-muted-foreground">
            {explorerFiltersCopy.status}
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {dateBounds && dateFrom !== undefined && dateTo !== undefined ? (
          <div>
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-body text-[0.68rem] font-bold uppercase tracking-wide text-muted-foreground">
                {explorerFiltersCopy.date}
              </h3>
              <button
                type="button"
                onClick={toggleAllDates}
                aria-pressed={!isDateFiltered}
                className={`inline-flex min-h-7 cursor-pointer items-center rounded-full border px-2.5 py-1 font-body text-xs font-semibold transition-smooth ${
                  !isDateFiltered
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border bg-background text-muted-foreground hover:border-primary/35 hover:text-primary"
                }`}
              >
                {explorerFiltersCopy.all}
              </button>
            </div>

            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between gap-3 font-body text-xs font-semibold text-foreground">
                <span>{formatMonthSerial(dateFrom, locale)}</span>
                <span>{formatMonthSerial(dateTo, locale)}</span>
              </div>

              <div className="relative h-7">
                <div className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-primary/10" />
                <div
                  className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-primary"
                  style={{
                    left: `${dateFromPercent}%`,
                    right: `${100 - dateToPercent}%`,
                  }}
                />
                <input
                  type="range"
                  min={dateBounds.min}
                  max={dateBounds.max}
                  value={dateFrom}
                  onChange={(event) => updateDateFrom(Number(event.target.value))}
                  className="date-range-input absolute inset-x-0 top-1/2 z-20 h-7 w-full -translate-y-1/2"
                  aria-label={explorerFiltersCopy.dateFrom}
                />
                <input
                  type="range"
                  min={dateBounds.min}
                  max={dateBounds.max}
                  value={dateTo}
                  onChange={(event) => updateDateTo(Number(event.target.value))}
                  className="date-range-input absolute inset-x-0 top-1/2 z-30 h-7 w-full -translate-y-1/2"
                  aria-label={explorerFiltersCopy.dateTo}
                />
              </div>
            </div>
          </div>
        ) : null}

        <FilterGroup
          allLabel={explorerFiltersCopy.all}
          title={explorerFiltersCopy.type}
          allActive={trackOptions.every((track) => activeFilters.tracks?.includes(track))}
          onToggleAll={toggleAllTracks}
          items={trackOptions.map((track) => ({
            value: track,
            label: translate(trackLabels[track], locale),
            active: isSelected(activeFilters.tracks, track),
          }))}
          onToggle={toggleTrack}
        />
        <FilterGroup
          allLabel={explorerFiltersCopy.all}
          title={explorerFiltersCopy.domain}
          allActive={domainOptions.every((domain) => activeFilters.domains?.includes(domain))}
          onToggleAll={toggleAllDomains}
          items={domainOptions.map((domain) => ({
            value: domain,
            label: translate(domainLabels[domain], locale),
            active: isSelected(activeFilters.domains, domain),
          }))}
          onToggle={toggleDomain}
        />
        <FilterGroup
          allLabel={explorerFiltersCopy.all}
          title={explorerFiltersCopy.company}
          allActive={companyOptions.every((company) => activeFilters.companies?.includes(company))}
          onToggleAll={toggleAllCompanies}
          items={companyOptions.map((company) => ({
            value: company,
            label: translate(companyLabels[company], locale),
            active: isSelected(activeFilters.companies, company),
          }))}
          onToggle={toggleCompany}
        />
        <SkillsDropdown
          allLabel={explorerFiltersCopy.all}
          title={explorerFiltersCopy.skills}
          allActive={skillOptions.every((skill) => activeFilters.skills?.includes(skill))}
          onToggleAll={toggleAllSkills}
          items={skillOptions.map((skill) => ({
            value: skill,
            label: translate(skillLabels[skill], locale),
            active: isSelected(activeFilters.skills, skill),
          }))}
          onToggle={toggleSkill}
        />

        {hasActiveFilters(activeFilters) ? (
          <button
            type="button"
            onClick={() => onFiltersChange({})}
            className="w-full rounded-md border border-border bg-background px-3 py-2 font-body text-xs font-bold text-muted-foreground transition-smooth hover:border-primary/40 hover:text-primary cursor-pointer"
          >
            {copy.filters.reset}
          </button>
        ) : null}
      </div>
    </aside>
  );
};

export default ExplorerFilters;
