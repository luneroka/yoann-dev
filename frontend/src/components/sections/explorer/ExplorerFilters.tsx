import { useLanguage } from "@/context/LanguageContext";
import { companyLabels, domainLabels, skillLabels, trackLabels } from "@/data/labels";
import type { Company, Domain, Project, SkillId, Track } from "@/data/types";
import { translate } from "@/i18n/translate";
import type { ProjectFilters } from "@/lib/queryProjects";

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

type ExplorerFiltersProps = {
  projects: Project[];
  filters: ProjectFilters;
  onFiltersChange: (filters: ProjectFilters) => void;
};

function getUniqueValues<T extends string>(values: T[]): T[] {
  return Array.from(new Set(values)).sort();
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

function toggleAllValues<T extends string>(values: readonly T[] | undefined, options: readonly T[]) {
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
      filters.skills?.length,
  );
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
  const explorerFiltersCopy = copy.explorer.filters;

  function toggleTrack(track: Track) {
    onFiltersChange(
      updateArrayFilter(activeFilters, "tracks", toggleArrayValue(activeFilters.tracks, track)),
    );
  }

  function toggleAllTracks() {
    onFiltersChange(
      updateArrayFilter(activeFilters, "tracks", toggleAllValues(activeFilters.tracks, trackOptions)),
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
      updateArrayFilter(activeFilters, "skills", toggleAllValues(activeFilters.skills, skillOptions)),
    );
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
        <FilterGroup
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
            className="w-full rounded-md border border-border bg-background px-3 py-2 font-body text-xs font-bold text-muted-foreground transition-smooth hover:border-primary/40 hover:text-primary"
          >
            {copy.filters.reset}
          </button>
        ) : null}
      </div>
    </aside>
  );
};

export default ExplorerFilters;
