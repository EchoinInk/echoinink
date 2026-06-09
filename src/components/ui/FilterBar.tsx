import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface FilterOption<T extends string = string> {
  label: string;
  value: T;
}

interface FilterBarProps<T extends string = string> {
  filters: readonly (T | FilterOption<T>)[];
  activeFilter: T;
  onFilterChange: (filter: T) => void;
  ariaLabel: string;
  sort?: ReactNode;
  className?: string;
  tone?: "default" | "editorial";
}

function normalizeFilter<T extends string>(filter: T | FilterOption<T>): FilterOption<T> {
  return typeof filter === "string" ? { label: filter, value: filter } : filter;
}

export function FilterBar<T extends string>({
  filters,
  activeFilter,
  onFilterChange,
  ariaLabel,
  sort,
  className,
  tone = "default"
}: FilterBarProps<T>) {
  return (
    <div className={cn("ei-filter-bar", className)} data-tone={tone}>
      <div role="group" aria-label={ariaLabel} className="ei-filter-bar-scroll">
        <div className="ei-filter-bar-options">
          {filters.map((item) => {
            const filter = normalizeFilter(item);
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                aria-pressed={isActive}
                className="ei-filter-pill"
                data-active={isActive ? "true" : "false"}
                onClick={() => onFilterChange(filter.value)}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>
      {sort ? <div className="ei-filter-bar-sort">{sort}</div> : null}
    </div>
  );
}
