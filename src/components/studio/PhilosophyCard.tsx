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
              y: -3,
              transition: { duration: DURATION.instant, ease: EASE_CINEMATIC },
            }
      }
      className={`group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border transition-[border-color,background,box-shadow,transform] duration-500 hover:border-[var(--ei-card-border-hover)] ${
        isValue
  ? 'min-h-[250px] p-7 md:p-8'
  : 'min-h-[360px] p-8 md:p-10'
      } hover:bg-[var(--ei-card-bg-hover)]`}
      style={{
        background:
          'linear-gradient(180deg, rgb(var(--ei-deep-indigo-rgb) / 0.28) 0%, rgb(var(--ei-deep-indigo-rgb) / 0.14) 52%, rgb(var(--ei-void-black-rgb) / 0.22) 100%)',
        borderColor: 'rgb(var(--ei-soft-lavender-rgb) / 0.12)',
        boxShadow: 'inset 0 1px 0 rgb(var(--ei-ice-white-rgb) / 0.04)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at 20% 12%, rgb(var(--ei-aurora-blue-rgb) / 0.13), transparent 34%), radial-gradient(circle at 84% 88%, rgb(var(--ei-luxe-violet-rgb) / 0.12), transparent 38%)',
        }}
        aria-hidden="true"
      />

      <div
        className={`relative z-10 flex items-center justify-center rounded-full border ${
          isValue ? 'mb-5 h-11 w-11' : 'mb-7 h-13 w-13'
        }`}
        style={{
          width: isValue ? '2.75rem' : '3.25rem',
          height: isValue ? '2.75rem' : '3.25rem',
          borderColor: isValue
            ? 'rgb(var(--ei-luxe-violet-rgb) / 0.24)'
            : 'rgb(var(--ei-soft-lavender-rgb) / 0.14)',
          background:
            'radial-gradient(circle at 50% 38%, rgb(var(--ei-aurora-blue-rgb) / 0.16), rgb(var(--ei-deep-indigo-rgb) / 0.24) 64%, rgb(var(--ei-void-black-rgb) / 0.22) 100%)',
          boxShadow:
            '0 0 22px rgb(var(--ei-luxe-violet-rgb) / 0.08), inset 0 0 18px rgb(var(--ei-ice-white-rgb) / 0.025)',
        }}
        aria-hidden="true"
      >
        <OrbitalVisual variant={icon} size={isValue ? 24 : 30} />
      </div>

      <h3
        className={`relative z-10 font-editorial leading-[1.14] tracking-tight ${
          isValue ? 'text-[1.08rem]' : 'text-[1.42rem] md:text-[1.58rem]'
        }`}
        style={{ color: 'var(--ei-text-primary)' }}
      >
        {title}
      </h3>

      <p
        className={`relative z-10 mt-4 font-structural leading-[1.72] ${
          isValue ? 'text-[13.5px]' : 'text-[14.5px] md:text-[15.5px]'
        }`}
        style={{ color: 'var(--ei-text-secondary)' }}
      >
        {description}
      </p>
    </motion.article>
  );
}