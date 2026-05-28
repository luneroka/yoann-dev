import { useLanguage } from "@/context/LanguageContext";
import { companyLabels, domainLabels, skillLabels, trackLabels } from "@/data/labels";
import type { Company, Domain, Project, SkillId, Track } from "@/data/types";
import { translate } from "@/i18n/translate";
import type { ProjectFilters } from "@/lib/queryProjects";

import ExplorerDateRangeSlider from "./ExplorerDateRangeSlider";
import ExplorerFilterGroup from "./ExplorerFilterGroup";
import ExplorerSkillsDropdown from "./ExplorerSkillsDropdown";
import {
  getDateBounds,
  getUniqueValues,
  hasActiveFilters,
  isSelected,
  resetDateFilter,
  toggleAllValues,
  toggleArrayValue,
  updateArrayFilter,
  updateDateFilter,
} from "./helpers/explorerFilters";

type ExplorerFiltersProps = {
  projects: Project[];
  filters: ProjectFilters;
  onFiltersChange: (filters: ProjectFilters) => void;
};

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
        <p className="font-heading text-base font-bold text-foreground">
          {explorerFiltersCopy.title}
        </p>
        <p className="mt-1 font-body text-xs text-muted-foreground">
          {explorerFiltersCopy.status}
        </p>
      </div>

      <div className="space-y-5">
        {dateBounds && dateFrom !== undefined && dateTo !== undefined ? (
          <ExplorerDateRangeSlider
            allLabel={explorerFiltersCopy.all}
            dateFromLabel={explorerFiltersCopy.dateFrom}
            dateToLabel={explorerFiltersCopy.dateTo}
            isFiltered={isDateFiltered}
            locale={locale}
            title={explorerFiltersCopy.date}
            bounds={dateBounds}
            dateFrom={dateFrom}
            dateTo={dateTo}
            onReset={toggleAllDates}
            onUpdateDateFrom={updateDateFrom}
            onUpdateDateTo={updateDateTo}
          />
        ) : null}

        <ExplorerFilterGroup
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
        <ExplorerFilterGroup
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
        <ExplorerFilterGroup
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
        <ExplorerSkillsDropdown
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
            className="w-full cursor-pointer rounded-md border border-border bg-background px-3 py-2 font-body text-xs font-bold text-muted-foreground transition-smooth hover:border-primary/40 hover:text-primary"
          >
            {copy.filters.reset}
          </button>
        ) : null}
      </div>
    </aside>
  );
};

export default ExplorerFilters;
