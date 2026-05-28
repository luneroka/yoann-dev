import { useState } from "react";
import { ChevronDown } from "lucide-react";

import type { FilterItem } from "./helpers/explorerFilters";

type ExplorerSkillsDropdownProps<T extends string> = {
  allLabel: string;
  title: string;
  items: FilterItem<T>[];
  allActive: boolean;
  onToggleAll: () => void;
  onToggle: (value: T) => void;
};

const ExplorerSkillsDropdown = <T extends string,>({
  allLabel,
  title,
  items,
  allActive,
  onToggleAll,
  onToggle,
}: ExplorerSkillsDropdownProps<T>) => {
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
};

export default ExplorerSkillsDropdown;
