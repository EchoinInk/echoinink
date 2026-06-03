import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/cards/ProjectCard';
import {
  worksProjects,
  type WorkFilter,
  type WorkProject,
  type WorkSort,
} from '@/data/worksProjects';
import { fadeSoft, VIEWPORT } from '@/lib/motion-cinematic';

interface WorksGridProps {
  activeFilter: WorkFilter;
  sortBy: WorkSort;
}

function filterProjects(projects: WorkProject[], filter: WorkFilter): WorkProject[] {
  if (filter === 'All Works') return projects;
  return projects.filter((project) => project.tags.includes(filter));
}

function sortProjects(projects: WorkProject[], sort: WorkSort): WorkProject[] {
  const sorted = [...projects];

  if (sort === 'Featured') {
    return sorted.sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false));
  }

  if (sort === 'A–Z') {
    return sorted.sort((a, b) => a.title.localeCompare(b.title));
  }

  return sorted;
}

export function WorksGrid({ activeFilter, sortBy }: WorksGridProps) {
  const visibleProjects = useMemo(() => {
    const filtered = filterProjects(worksProjects, activeFilter);
    return sortProjects(filtered, sortBy);
  }, [activeFilter, sortBy]);

  const largeProjects = visibleProjects.filter((project) => project.variant === 'large');
  const smallProjects = visibleProjects.filter((project) => project.variant === 'small');

  if (visibleProjects.length === 0) {
    return (
      <motion.p
        variants={fadeSoft}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.loose}
        className="py-20 text-center font-structural text-[14px]"
        style={{ color: 'var(--ei-text-tertiary)' }}
      >
        No projects match this filter yet.
      </motion.p>
    );
  }

  return (
    <div className="space-y-6 md:space-y-8">
      {largeProjects.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {largeProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      )}

      {smallProjects.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {smallProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={largeProjects.length + index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
