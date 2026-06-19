import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

import { EchoCard } from '@/components/ui/EchoCard';
import type { WorkProject } from '@/data/worksProjects';
import { DURATION, EASE_CINEMATIC, VIEWPORT } from '@/lib/motion-cinematic';

interface ProjectCardProps extends WorkProject {
  index?: number;
}

export function ProjectCard({
  title,
  category,
  proofLine,
  image,
  href,
  presentation,
  status,
  index = 0
}: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const isLinked = Boolean(href);
  const number = String(index + 1).padStart(2, '0');

  const hoverMotion =
    !prefersReducedMotion && isLinked
      ? {
          y: -3,
          transition: { duration: DURATION.instant, ease: EASE_CINEMATIC }
        }
      : undefined;

  const content = (
    <>
      <div className="ei-works-project-media">
        <img src={image} alt="" aria-hidden="true" loading="lazy" />
        <div className="ei-works-project-media-scrim" aria-hidden="true" />
      </div>

      <div className="ei-works-project-copy">
        <div className="ei-works-project-header">
          <h3>{title}</h3>
          <div className="ei-works-project-meta">
            <span>{category}</span>
            <span>{status ?? 'Study'}</span>
            <span>{number}</span>
          </div>
        </div>

        <p className="ei-works-project-proof">{proofLine}</p>

        <span className="ei-card-action">
          {isLinked
            ? 'View case study'
            : presentation === 'fragment'
              ? 'Proof fragment'
              : 'Selected study'}
          {isLinked ? <span className="ei-card-action-arrow ei-cta-arrow-right">→</span> : null}
        </span>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT.normal}
      transition={{
        duration: DURATION.slow,
        ease: EASE_CINEMATIC,
        delay: index * 0.06
      }}
      whileHover={hoverMotion}
      className="ei-works-project-motion"
    >
      <EchoCard
        variant={presentation === 'study' ? 'feature' : 'index'}
        interactive={isLinked}
        padding="none"
        className="ei-works-project-card"
        data-presentation={presentation}
        aria-label={!isLinked ? `${title} — ${status ?? category}` : undefined}
      >
        {href ? (
          <Link
            to={href}
            className="ei-works-project-link"
            aria-label={`${title} — ${category}. ${proofLine}`}
          >
            {content}
          </Link>
        ) : (
          content
        )}
      </EchoCard>
    </motion.div>
  );
}
