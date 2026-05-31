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
          ? 'min-h-[210px] hover:border-[rgb(var(--ei-ice-white-rgb)/0.10)] hover:shadow-[inset_0_0_0_1px_rgb(var(--ei-luxe-violet-rgb)/0.05)]'
          : 'min-h-[300px] hover:border-[rgb(var(--ei-ice-white-rgb)/0.12)] hover:bg-[rgb(var(--ei-deep-indigo-rgb)/0.22)]'
      } ${isValue ? 'p-6 md:p-7' : 'p-8 md:p-9'}`}
      style={{
        background: 'rgb(var(--ei-deep-indigo-rgb) / 0.18)',
        borderColor: 'rgb(var(--ei-ice-white-rgb) / 0.10)',
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full border transition-[border-color,box-shadow] duration-500 ${
          isValue
            ? 'mb-5 h-11 w-11 border-[rgb(var(--ei-luxe-violet-rgb)/0.22)] group-hover:shadow-[0_0_20px_rgb(var(--ei-luxe-violet-rgb)/0.10)]'
            : 'mb-7 h-12 w-12 group-hover:border-[rgb(var(--ei-ice-white-rgb)/0.14)] group-hover:shadow-[0_0_24px_rgb(var(--ei-aurora-blue-rgb)/0.06)]'
        }`}
        style={{
          borderColor: isValue
            ? 'rgb(var(--ei-luxe-violet-rgb) / 0.22)'
            : 'rgb(var(--ei-ice-white-rgb) / 0.10)',
          background: 'rgb(var(--ei-deep-indigo-rgb) / 0.24)',
        }}
        aria-hidden="true"
      >
        <OrbitalVisual variant={icon} size={isValue ? 26 : 30} />
      </div>

      <h3
        className={`font-editorial leading-[1.14] tracking-tight ${
          isValue ? 'text-[1.05rem] md:text-[1.15rem]' : 'text-[1.4rem] md:text-[1.55rem]'
        }`}
        style={{ color: 'var(--ei-text-primary)' }}
      >
        {title}
      </h3>

      <p
        className={`mt-4 font-structural leading-[1.72] ${
          isValue ? 'text-[13px] md:text-[14px]' : 'text-[14px] md:text-[15px]'
        }`}
        style={{ color: 'rgb(var(--ei-ice-white-rgb) / 0.68)' }}
      >
        {description}
      </p>
    </motion.article>
  );
}
