import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { DURATION, EASE_CINEMATIC, VIEWPORT } from '@/lib/motion-cinematic';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  tags?: string[];
  variant: 'large' | 'small';
  featured?: boolean;
  index?: number;
}

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Project categories">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border px-2.5 py-1 font-structural text-[9px] uppercase tracking-[0.18em]"
          style={{
            color: 'var(--ei-text-tertiary)',
            borderColor: 'var(--border-soft)',
            background: 'rgb(var(--ei-deep-indigo-rgb) / 0.22)',
          }}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function CardCta({ label = 'View project' }: { label?: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 font-structural text-[10px] uppercase tracking-[0.2em] transition-[gap,color] duration-500 group-hover:gap-3"
      style={{ color: 'var(--ei-text-tertiary)' }}
    >
      <span className="transition-colors duration-500 group-hover:text-[var(--ei-text-primary)]">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[var(--ei-text-accent)]"
      >
        →
      </span>
    </span>
  );
}

export function ProjectCard({
  title,
  category,
  description,
  image,
  href,
  tags = [],
  variant,
  featured = false,
  index = 0,
}: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const isLarge = variant === 'large';
  const ctaLabel = featured ? 'View case study' : 'View project';

  const hoverMotion = prefersReducedMotion
    ? {}
    : {
        y: -4,
        transition: { duration: DURATION.instant, ease: EASE_CINEMATIC },
      };

  const imageScale = prefersReducedMotion ? 1 : isLarge ? 1.02 : 1.025;

  if (featured && isLarge) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT.normal}
        transition={{
          duration: DURATION.slow,
          ease: EASE_CINEMATIC,
          delay: index * 0.08,
        }}
        whileHover={hoverMotion}
        className="group relative overflow-hidden rounded-[var(--radius-card)] border transition-[border-color,background,box-shadow] duration-500 hover:border-[var(--ei-card-border-hover)] hover:bg-[var(--ei-card-bg-hover)] hover:shadow-[var(--ei-card-shadow-hover)] focus-within:border-[var(--ei-card-border-hover)] focus-within:shadow-[var(--ei-card-shadow-hover)]"
        style={{
          background: 'var(--ei-card-bg)',
          borderColor: 'var(--ei-card-border)',
        }}
      >
        <Link
          to={href}
          className="grid min-h-[420px] md:min-h-[360px] md:grid-cols-[1fr_1.1fr] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ei-void-black)]"
          aria-label={`${title} — ${category}. ${description}`}
        >
          <div className="flex flex-col justify-between gap-8 p-7 md:p-10 lg:p-12">
            <div>
              <span
                className="inline-flex items-center gap-2 font-structural text-[9px] uppercase tracking-[0.22em]"
                style={{ color: 'var(--ei-text-accent)' }}
              >
                <span aria-hidden="true">✦</span>
                Featured case study
              </span>

              <h2
                className="mt-5 font-editorial text-[2rem] leading-[1.08] tracking-tight md:text-[2.4rem] lg:text-[2.75rem]"
                style={{ color: 'var(--ei-text-primary)' }}
              >
                {title}
              </h2>

              <p
                className="mt-3 font-structural text-[12px] uppercase tracking-[0.16em]"
                style={{ color: 'var(--ei-text-tertiary)' }}
              >
                {category}
              </p>

              <p
                className="mt-6 max-w-[38ch] font-structural text-[14px] leading-[1.72] md:text-[15px]"
                style={{ color: 'var(--ei-text-secondary)' }}
              >
                {description}
              </p>
            </div>

            <div className="space-y-5">
              {tags.length > 0 && <ProjectTags tags={tags} />}
              <CardCta label={ctaLabel} />
            </div>
          </div>

          <div className="relative min-h-[220px] overflow-hidden md:min-h-full">
            <motion.img
              src={image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
              whileHover={{ scale: imageScale }}
              transition={{ duration: 0.7, ease: EASE_CINEMATIC }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{ background: 'var(--ei-image-overlay-soft)' }}
            />
          </div>
        </Link>
      </motion.article>
    );
  }

  if (isLarge) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT.normal}
        transition={{
          duration: DURATION.slow,
          ease: EASE_CINEMATIC,
          delay: index * 0.08,
        }}
        whileHover={hoverMotion}
        className="group relative overflow-hidden rounded-[var(--radius-card)] border transition-[border-color,background,box-shadow] duration-500 hover:border-[var(--ei-card-border-hover)] hover:bg-[var(--ei-card-bg-hover)] hover:shadow-[var(--ei-card-shadow-hover)] focus-within:border-[var(--ei-card-border-hover)] focus-within:shadow-[var(--ei-card-shadow-hover)]"
        style={{
          background: 'var(--ei-card-bg)',
          borderColor: 'var(--ei-card-border)',
        }}
      >
        <Link
          to={href}
          className="relative block min-h-[480px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ei-void-black)] md:min-h-[520px]"
          aria-label={`${title} — ${category}. ${description}`}
        >
          <motion.img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            whileHover={{ scale: imageScale }}
            transition={{ duration: 0.7, ease: EASE_CINEMATIC }}
          />

          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'var(--ei-image-overlay-soft)' }}
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 80%, rgb(var(--ei-aurora-blue-rgb) / 0.08) 0%, transparent 70%)',
            }}
          />

          <div className="absolute inset-x-0 bottom-0 z-10 p-7 md:p-9">
            <p
              className="font-structural text-[10px] uppercase tracking-[0.2em]"
              style={{ color: 'var(--ei-text-tertiary)' }}
            >
              {category}
            </p>
            <h2
              className="mt-2 font-editorial text-[1.75rem] leading-[1.1] tracking-tight md:text-[2rem]"
              style={{ color: 'var(--ei-text-primary)' }}
            >
              {title}
            </h2>
            <div className="mt-5">
              <CardCta label={ctaLabel} />
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT.normal}
      transition={{
        duration: DURATION.slow,
        ease: EASE_CINEMATIC,
        delay: index * 0.08,
      }}
      whileHover={hoverMotion}
      className="group relative overflow-hidden rounded-[var(--radius-card)] border transition-[border-color,background,box-shadow] duration-500 hover:border-[var(--ei-card-border-hover)] hover:bg-[var(--ei-card-bg-hover)] hover:shadow-[var(--ei-card-shadow-hover)] focus-within:border-[var(--ei-card-border-hover)] focus-within:shadow-[var(--ei-card-shadow-hover)]"
      style={{
        background: 'var(--ei-card-bg)',
        borderColor: 'var(--ei-card-border)',
      }}
    >
      <Link
        to={href}
        className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ei-void-black)]"
        aria-label={`${title} — ${category}. ${description}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            whileHover={{ scale: imageScale }}
            transition={{ duration: 0.7, ease: EASE_CINEMATIC }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 50% 100%, rgb(var(--ei-luxe-violet-rgb) / 0.1) 0%, transparent 70%)',
            }}
          />
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
          <div>
            <p
              className="font-structural text-[9px] uppercase tracking-[0.2em]"
              style={{ color: 'var(--ei-text-tertiary)' }}
            >
              {category}
            </p>
            <h2
              className="mt-2 font-editorial text-[1.35rem] leading-[1.14] tracking-tight md:text-[1.5rem]"
              style={{ color: 'var(--ei-text-primary)' }}
            >
              {title}
            </h2>
          </div>

          <p
            className="line-clamp-3 font-structural text-[13px] leading-[1.68]"
            style={{ color: 'var(--ei-text-secondary)' }}
          >
            {description}
          </p>

          {tags.length > 0 && <ProjectTags tags={tags} />}

          <div className="mt-auto pt-2">
            <CardCta label={ctaLabel} />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
