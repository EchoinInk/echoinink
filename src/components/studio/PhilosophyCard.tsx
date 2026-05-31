import { motion, useReducedMotion } from 'framer-motion';
import { OrbitalVisual, type OrbitalVariant } from '@/components/ui/OrbitalVisual';
import { DURATION, EASE_CINEMATIC, VIEWPORT } from '@/lib/motion-cinematic';

interface PhilosophyCardProps {
  title: string;
  description: string;
  icon: OrbitalVariant;
  index?: number;
  compact?: boolean;
}

export function PhilosophyCard({
  title,
  description,
  icon,
  index = 0,
  compact = false,
}: PhilosophyCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT.normal}
      transition={{
        duration: DURATION.slow,
        ease: EASE_CINEMATIC,
        delay: index * 0.08,
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: compact ? -2 : -4,
              transition: { duration: DURATION.instant, ease: EASE_CINEMATIC },
            }
      }
      className="group relative flex h-full flex-col rounded-[var(--radius-card)] border p-6 transition-[border-color,background,box-shadow] duration-500 hover:border-[var(--ei-card-border-hover)] hover:bg-[var(--ei-card-bg-hover)] hover:shadow-[var(--ei-card-shadow-hover)] md:p-7"
      style={{
        background: 'var(--ei-card-bg)',
        borderColor: 'var(--ei-card-border)',
      }}
    >
      <div
        className={`mb-5 flex items-center justify-center rounded-full border transition-[border-color,box-shadow] duration-500 group-hover:border-[var(--ei-card-border-hover)] group-hover:shadow-[0_0_24px_rgb(var(--ei-aurora-blue-rgb)/0.12)] ${compact ? 'h-11 w-11' : 'h-14 w-14'}`}
        style={{
          borderColor: 'var(--border-soft)',
          background: 'rgb(var(--ei-deep-indigo-rgb) / 0.28)',
        }}
        aria-hidden="true"
      >
        <OrbitalVisual variant={icon} size={compact ? 28 : 34} />
      </div>

      <h3
        className={`font-editorial leading-[1.16] tracking-tight ${compact ? 'text-[1.05rem] md:text-[1.15rem]' : 'text-[1.25rem] md:text-[1.4rem]'}`}
        style={{ color: 'var(--ei-text-primary)' }}
      >
        {title}
      </h3>

      <p
        className={`mt-3 font-structural leading-[1.68] ${compact ? 'text-[12px] md:text-[13px]' : 'text-[13px] md:text-[14px]'}`}
        style={{ color: 'var(--ei-text-secondary)' }}
      >
        {description}
      </p>
    </motion.article>
  );
}
