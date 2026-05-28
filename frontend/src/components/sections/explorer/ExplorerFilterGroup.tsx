import type { FilterItem } from "./helpers/explorerFilters";

type ExplorerFilterGroupProps<T extends string> = {
  allLabel: string;
  title: string;
  items: FilterItem<T>[];
  allActive: boolean;
  onToggleAll: () => void;
  onToggle: (value: T) => void;
};

const inactiveClass =
  "border-border bg-background text-muted-foreground hover:border-primary/35 hover:text-primary";
const activeClass = "border-primary/40 bg-primary/10 text-primary";

const ExplorerFilterGroup = <T extends string>({
  allLabel,
  title,
  items,
  allActive,
  onToggleAll,
  onToggle,
}: ExplorerFilterGroupProps<T>) => {
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
            allActive ? activeClass : inactiveClass
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
              item.active ? activeClass : inactiveClass
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExplorerFilterGroup;
