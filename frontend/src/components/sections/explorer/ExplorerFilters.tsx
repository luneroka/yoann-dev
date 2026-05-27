import { useLanguage } from "@/context/LanguageContext";
import { companyLabels, domainLabels, skillLabels, trackLabels } from "@/data/labels";
import type { Company, Domain, SkillId, Track } from "@/data/types";
import { translate } from "@/i18n/translate";

type FilterGroupProps = {
  title: string;
  items: string[];
  activeIndexes?: number[];
};

const trackOptions: Track[] = ["dev", "data"];
const domainOptions: Domain[] = ["construction", "internal-tools", "saas"];
const companyOptions: Company[] = ["Solo", "Amazon", "Lidl"];
const skillOptions: SkillId[] = [
  "react",
  "typescript",
  "python",
  "sql",
  "fastapi",
  "power-query",
];

function FilterGroup({ title, items, activeIndexes = [] }: FilterGroupProps) {
  return (
    <div>
      <h3 className="font-body text-[0.68rem] font-bold uppercase tracking-wide text-muted-foreground">
        {title}
      </h3>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {items.map((item, index) => {
          const isActive = activeIndexes.includes(index);

          return (
            <button
              key={item}
              type="button"
              disabled
              className={`inline-flex min-h-7 items-center rounded-full border px-2.5 py-1 font-body text-xs font-semibold transition-smooth disabled:cursor-default disabled:opacity-100 ${
                isActive
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border bg-background text-muted-foreground"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const ExplorerFilters = () => {
  const { copy, locale } = useLanguage();

  const filters = copy.explorer.filters;

  return (
    <aside className="border-b border-border bg-secondary/30 p-4 lg:border-b-0 lg:border-r">
      <div className="mb-5">
        <div>
          <p className="font-heading text-base font-bold text-foreground">{filters.title}</p>
          <p className="mt-1 font-body text-xs text-muted-foreground">{filters.status}</p>
        </div>
      </div>

      <div className="space-y-5">
        <FilterGroup
          title={filters.type}
          items={trackOptions.map((track) => translate(trackLabels[track], locale))}
          activeIndexes={[0, 1]}
        />
        <FilterGroup
          title={filters.domain}
          items={domainOptions.map((domain) => translate(domainLabels[domain], locale))}
          activeIndexes={[0, 1]}
        />
        <FilterGroup
          title={filters.company}
          items={companyOptions.map((company) => translate(companyLabels[company], locale))}
          activeIndexes={[0]}
        />
        <FilterGroup
          title={filters.skills}
          items={skillOptions.map((skill) => translate(skillLabels[skill], locale))}
          activeIndexes={[1, 3]}
        />
      </div>
    </aside>
  );
};

export default ExplorerFilters;
