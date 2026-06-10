import { EchoSelect } from '@/components/ui/EchoSelect';
import { FilterBar } from '@/components/ui/FilterBar';
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
  onSortChange
}: WorkFilterBarProps) {
  return (
    <FilterBar
      filters={workFilters}
      activeFilter={activeFilter}
      onFilterChange={onFilterChange}
      ariaLabel="Filter projects by category"
      tone="editorial"
      className="ei-works-filter-bar"
      sort={
        <EchoSelect
          id="works-sort"
          name="works-sort"
          label="Sort"
          value={sortBy}
          options={[...workSortOptions]}
          onChange={(event) => onSortChange(event.target.value as WorkSort)}
          className="ei-works-sort"
        />
      }
    />
  );
}
