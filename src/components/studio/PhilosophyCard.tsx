import { motion, useReducedMotion } from 'framer-motion';
import { OrbitalVisual, type OrbitalVariant } from '@/components/ui/OrbitalVisual';
import { DURATION, EASE_CINEMATIC, VIEWPORT } from '@/lib/motion-cinematic';

interface PhilosophyCardProps {
  title: string;
  description: string;
  icon: OrbitalVariant;
  index?: number;
  variant?: 'philosophy' | 'value';
}

export function PhilosophyCard({
  title,
  description,
  icon,
  index = 0,
  variant = 'philosophy',
}: PhilosophyCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const isValue = variant === 'value';

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT.normal}
      transition={{
        duration: DURATION.normal,
        ease: EASE_CINEMATIC,
        delay: index * 0.08,
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -2,
              transition: { duration: DURATION.instant, ease: EASE_CINEMATIC },
            }
      }
      className={`group relative flex h-full flex-col rounded-[var(--radius-card)] border transition-[border-color,background] duration-500 hover:border-[var(--ei-card-border-hover)] ${
        isValue ? 'min-h-[196px] p-6' : 'min-h-[280px] p-7 md:p-8'
      } hover:bg-[var(--ei-card-bg-hover)]`}
      style={{
        background: 'var(--ei-card-bg)',
        borderColor: 'var(--ei-card-border)',
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full border ${
          isValue ? 'mb-4 h-10 w-10' : 'mb-6 h-12 w-12'
        }`}
        style={{
          borderColor: isValue
            ? 'rgb(var(--ei-luxe-violet-rgb) / 0.20)'
            : 'var(--border-soft)',
          background: 'rgb(var(--ei-deep-indigo-rgb) / 0.24)',
        }}
        aria-hidden="true"
      >
        <OrbitalVisual variant={icon} size={isValue ? 24 : 30} />
      </div>

      <h3
        className={`font-editorial leading-[1.14] tracking-tight ${
          isValue ? 'text-[1.05rem]' : 'text-[1.35rem] md:text-[1.45rem]'
        }`}
        style={{ color: 'var(--ei-text-primary)' }}
      >
        {title}
      </h3>

      <p
        className={`mt-3 font-structural leading-[1.68] ${
          isValue ? 'text-[13px]' : 'text-[14px] md:text-[15px]'
        }`}
        style={{ color: 'var(--ei-text-secondary)' }}
      >
        {description}
      </p>
    </motion.article>
  );
}
