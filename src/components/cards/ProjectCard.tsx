import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { DURATION, EASE_CINEMATIC, VIEWPORT } from '@/lib/motion-cinematic';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  href?: string;
  variant: 'large' | 'small';
  featured?: boolean;
  status?: string;
  index?: number;
}

function ProjectMeta({
  number,
  category,
  status,
}: {
  number: string;
  category: string;
  status?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-6">
      <p className="ei-project-card-category">
        {status ? `${status} · ${category}` : category}
      </p>
      <span className="ei-type-studio-label shrink-0">{number}</span>
    </div>
  );
}

function CardAction({ linked }: { linked: boolean }) {
  return (
    <span className="ei-card-action mt-7">
      {linked ? 'View Case Study' : 'Archive Note'}
      {linked ? <span className="ei-card-action-arrow">→</span> : null}
    </span>
  );
}

export function ProjectCard({
  title,
  category,
  description,
  image,
  href,
  variant,
  featured = false,
  status,
  index = 0,
}: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const isLinked = Boolean(href);
  const number = String(index + 1).padStart(2, '0');

  const hoverMotion =
    !prefersReducedMotion && isLinked
      ? {
          y: -4,
          transition: { duration: DURATION.instant, ease: EASE_CINEMATIC },
        }
      : undefined;

  const articleMotion = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT.normal,
    transition: {
      duration: DURATION.slow,
      ease: EASE_CINEMATIC,
      delay: index * 0.08,
    },
    whileHover: hoverMotion,
  };

  if (featured && href) {
    return (
      <motion.article
        {...articleMotion}
        className="ei-card group relative overflow-hidden rounded-[var(--ei-card-radius-xl)]"
      >
        <Link
          to={href}
          className="relative block min-h-[430px] text-inherit no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ei-halo-blue-rgb)/0.72)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ei-void)] md:min-h-[460px]"
          aria-label={`${title} — ${category}. ${description}`}
        >
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="ei-project-card-image absolute inset-0 h-full w-full object-cover object-[57%_50%] transition-transform duration-700 ease-[cubic-bezier(0.22,_1,_0.36,_1)] group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'var(--ei-image-overlay-left)' }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgb(var(--ei-void-rgb) / 0.12) 0%, rgb(var(--ei-void-rgb) / 0.36) 100%)',
            }}
          />

          <div className="relative z-10 flex min-h-[430px] max-w-[560px] flex-col justify-between p-7 md:min-h-[460px] md:p-10 lg:p-12">
            <div>
              <ProjectMeta number={number} category={category} status={status} />

              <h2 className="ei-project-card-featured-title mt-9">{title}</h2>

              <p className="ei-type-studio-body-small mt-5 max-w-[34ch] text-[var(--ei-color-text-secondary)]">
                {description}
              </p>
            </div>

            <CardAction linked={isLinked} />
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      {...articleMotion}
      className={`ei-card group relative min-h-[300px] overflow-hidden ${
        variant === 'large' ? 'md:min-h-[360px]' : 'md:min-h-[330px]'
      }`}
      aria-label={!isLinked ? `${title} — ${status ?? category}` : undefined}
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="ei-project-card-image absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,_1,_0.36,_1)] group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'var(--ei-image-overlay-left)' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 68% 62% at 78% 26%, rgb(var(--ei-violet-rgb) / 0.1) 0%, transparent 68%)',
        }}
      />

      <div className="relative z-10 flex min-h-[300px] flex-col justify-between p-6 md:min-h-[330px] md:p-7 lg:p-8">
        <div>
          <ProjectMeta number={number} category={category} status={status} />

          <h2 className="ei-project-card-title mt-8 max-w-[15ch]">{title}</h2>

          <p className="ei-project-card-description mt-4 max-w-[36ch]">
            {description}
          </p>
        </div>

        <CardAction linked={isLinked} />
      </div>
    </motion.article>
  );
}
