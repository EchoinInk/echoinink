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
  const explorations = visibleProjects.filter(
    (project) =>
      project.presentation === 'fragment' && project.context?.status !== 'Internal system experiment'
  );
  const systemExperiments = visibleProjects.filter(
    (project) => project.context?.status === 'Internal system experiment'
  );

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

      {explorations.length > 0 ? (
        <section className="ei-works-fragments" aria-labelledby="works-explorations-heading">
          <div className="ei-works-section-heading ei-works-fragments-heading">
            <SectionLabel label="Explorations and concepts" index="06" />
            <div>
              <h2 id="works-explorations-heading" className="ei-type-section-heading">
                Concept work, held in proportion.
              </h2>
              <p className="ei-type-studio-body">
                Independent studies that show direction, atmosphere, and system thinking without
                presenting themselves as commissioned case studies.
              </p>
            </div>
          </div>

          <div className="ei-works-fragment-list">
            {explorations.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={selectedProjects.length + index + 1}
              />
            ))}
          </div>
        </section>
      ) : null}

      {systemExperiments.length > 0 ? (
        <section className="ei-works-fragments" aria-labelledby="works-system-experiments-heading">
          <div className="ei-works-section-heading ei-works-fragments-heading">
            <SectionLabel label="Systems and experiments" index="07" />
            <div>
              <h2 id="works-system-experiments-heading" className="ei-type-section-heading">
                Internal systems, shown as systems.
              </h2>
              <p className="ei-type-studio-body">
                Prototype-level interface thinking, labelled clearly as system experimentation
                rather than client delivery.
              </p>
            </div>
          </div>

          <div className="ei-works-fragment-list">
            {systemExperiments.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={selectedProjects.length + explorations.length + index + 1}
              />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
