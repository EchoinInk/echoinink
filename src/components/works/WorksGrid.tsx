import { useMemo } from 'react';
import { motion } from 'framer-motion';

import { ProjectCard } from '@/components/cards/ProjectCard';
import { SectionLabel } from '@/components/ui/SectionLabel';
import {
  worksProjects,
  type WorkFilter,
  type WorkProject,
  type WorkSort
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
    return sorted.sort(
      (a, b) => Number(a.presentation === 'fragment') - Number(b.presentation === 'fragment')
    );
  }

  if (sort === 'A–Z') {
    return sorted.sort((a, b) => a.title.localeCompare(b.title));
  }

  return sorted;
}

export function WorksGrid({ activeFilter, sortBy }: WorksGridProps) {
  const visibleProjects = useMemo(() => {
    const nonFeaturedProjects = worksProjects.filter((project) => !project.featured);
    return sortProjects(filterProjects(nonFeaturedProjects, activeFilter), sortBy);
  }, [activeFilter, sortBy]);

  const selectedProjects = visibleProjects.filter((project) => project.presentation === 'study');
  const fragments = visibleProjects.filter((project) => project.presentation === 'fragment');

  if (visibleProjects.length === 0) {
    return (
      <motion.p
        variants={fadeSoft}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.normal}
        className="ei-works-empty"
      >
        No projects match this filter yet.
      </motion.p>
    );
  }

  return (
    <div className="ei-works-collection">
      {selectedProjects.length > 0 ? (
        <div className="ei-works-selected-grid">
          {selectedProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index + 1} />
          ))}
        </div>
      ) : null}

      {fragments.length > 0 ? (
        <section className="ei-works-fragments" aria-labelledby="works-fragments-heading">
          <div className="ei-works-section-heading ei-works-fragments-heading">
            <SectionLabel label="Case fragments" index="05" />
            <div>
              <h2 id="works-fragments-heading">Smaller studies, held in proportion.</h2>
              <p>
                Concepts and system fragments that show the thinking without asking them to carry
                the weight of a full case study.
              </p>
            </div>
          </div>

          <div className="ei-works-fragment-list">
            {fragments.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={selectedProjects.length + index + 1}
              />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
