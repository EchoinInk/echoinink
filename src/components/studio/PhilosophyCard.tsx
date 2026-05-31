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
              y: isValue ? -2 : -3,
              transition: { duration: DURATION.instant, ease: EASE_CINEMATIC },
            }
      }
      className={`group relative flex h-full flex-col rounded-[var(--radius-card)] border transition-[border-color,background,box-shadow] duration-500 ${
        isValue
          ? 'min-h-[180px] hover:border-[rgb(var(--ei-ice-white-rgb)/0.088)] hover:shadow-[inset_0_0_0_1px_rgb(var(--ei-luxe-violet-rgb)/0.04)]'
          : 'hover:border-[var(--ei-card-border-hover)] hover:bg-[var(--ei-card-bg-hover)]'
      } ${isValue ? 'p-5 md:p-6' : 'p-6 md:p-7'}`}
      style={{
        background: 'var(--ei-card-bg)',
        borderColor: 'rgb(var(--ei-ice-white-rgb) / 0.08)',
      }}
    >
      <div
        className={`mb-4 flex items-center justify-center rounded-full border transition-[border-color,box-shadow] duration-500 ${
          isValue
            ? 'h-10 w-10 group-hover:shadow-[0_0_16px_rgb(var(--ei-luxe-violet-rgb)/0.08)]'
            : 'mb-5 h-14 w-14 group-hover:border-[var(--ei-card-border-hover)] group-hover:shadow-[0_0_20px_rgb(var(--ei-aurora-blue-rgb)/0.08)]'
        }`}
        style={{
          borderColor: 'rgb(var(--ei-ice-white-rgb) / 0.08)',
          background: 'rgb(var(--ei-deep-indigo-rgb) / 0.28)',
        }}
        aria-hidden="true"
      >
        <OrbitalVisual variant={icon} size={isValue ? 24 : 34} />
      </div>

      <h3
        className={`font-editorial leading-[1.16] tracking-tight ${
          isValue ? 'text-[1rem] md:text-[1.05rem]' : 'text-[1.25rem] md:text-[1.4rem]'
        }`}
        style={{ color: 'var(--ei-text-primary)' }}
      >
        {title}
      </h3>

      <p
        className={`mt-2.5 font-structural leading-[1.66] ${
          isValue ? 'text-[12px] md:text-[13px]' : 'text-[13px] md:text-[14px]'
        }`}
        style={{ color: 'var(--ei-text-secondary)' }}
      >
        {description}
      </p>
    </motion.article>
  );
}
