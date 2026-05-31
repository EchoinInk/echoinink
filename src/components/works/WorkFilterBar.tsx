import { EchoSelect } from '@/components/ui/EchoSelect';
import { workFilters, workSortOptions, type WorkFilter, type WorkSort } from '@/data/worksProjects';

interface WorkFilterBarProps {
  activeFilter: WorkFilter;
  sortBy: WorkSort;
  onFilterChange: (filter: WorkFilter) => void;
  onSortChange: (sort: WorkSort) => void;
}

export function WorkFilterBar({
  activeFilter,
  sortBy,
  onFilterChange,
  onSortChange,
}: WorkFilterBarProps) {
  return (
    <div
      className="flex flex-col gap-6 border-b pb-8 md:flex-row md:items-end md:justify-between md:gap-10"
      style={{ borderColor: 'var(--border-soft)' }}
    >
      <div
        role="group"
        aria-label="Filter projects by category"
        className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0"
      >
        {workFilters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => onFilterChange(filter)}
              className="relative shrink-0 rounded-full border px-4 py-2.5 font-structural text-[10px] uppercase tracking-[0.18em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ei-void-black)]"
              style={{
                color: isActive ? 'var(--ei-text-primary)' : 'var(--ei-text-tertiary)',
                background: isActive ? 'var(--ei-filter-bg-active)' : 'transparent',
                borderColor: isActive ? 'var(--ei-filter-border-active)' : 'transparent',
                boxShadow: isActive
                  ? '0 0 20px rgb(var(--ei-aurora-blue-rgb) / 0.08)'
                  : 'none',
              }}
            >
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-3 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
                  style={{
                    background: 'var(--ei-text-accent)',
                    boxShadow: '0 0 8px rgb(var(--ei-aurora-blue-rgb) / 0.6)',
                  }}
                />
              )}
              {filter}
            </button>
          );
        })}
      </div>

      <div className="w-full shrink-0 md:w-[200px]">
        <EchoSelect
          id="works-sort"
          name="works-sort"
          label="Sort"
          value={sortBy}
          options={[...workSortOptions]}
          onChange={(event) => onSortChange(event.target.value as WorkSort)}
          className="[&_button]:min-h-[46px] [&_button]:rounded-full [&_button]:px-4 [&_button]:py-2.5 [&_button]:text-[10px] [&_button]:uppercase [&_button]:tracking-[0.16em]"
        />
      </div>
    </div>
  );
}
