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
              transition: {
                duration: DURATION.instant,
                ease: EASE_CINEMATIC,
              },
            }
      }
      className={`group relative flex h-full flex-col items-center overflow-hidden rounded-[var(--radius-card)] border text-center transition-[border-color,background,box-shadow,transform] duration-500 hover:border-[var(--ei-card-border-hover)] ${
        isValue
          ? 'min-h-[250px] p-7 md:p-6'
          : 'min-h-[360px] p-8 md:p-10'
      } hover:bg-[var(--ei-card-bg-hover)]`}
      style={{
        background:
          'linear-gradient(180deg, rgb(var(--ei-midnight-rgb) / 0.28) 0%, rgb(var(--ei-midnight-rgb) / 0.14) 52%, rgb(var(--ei-void-rgb) / 0.22) 100%)',
        borderColor: 'rgb(var(--ei-soft-lavender-rgb) / 0.12)',
        boxShadow: 'inset 0 1px 0 rgb(var(--ei-ice-white-rgb) / 0.04)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at 20% 12%, rgb(var(--ei-electric-blue-rgb) / 0.13), transparent 34%), radial-gradient(circle at 84% 88%, rgb(var(--ei-echo-magenta-rgb) / 0.12), transparent 38%)',
        }}
        aria-hidden="true"
      />

      <div
        className={`relative z-10 mx-auto flex justify-center ${
          isValue ? 'mb-4' : 'mb-8'
        }`}
        style={{
          filter:
            'drop-shadow(0 0 18px rgb(var(--ei-electric-blue-rgb) / 0.18))',
        }}
        aria-hidden="true"
      >
        <OrbitalVisual variant={icon} size={isValue ? 60 : 70} />
      </div>

      <div
        className={`relative z-10 flex w-full items-center justify-center ${
          isValue ? 'min-h-[2.6rem]' : 'min-h-[3.8rem]'
        }`}
      >
        <h3
          className={`font-editorial leading-[1.14] tracking-tight ${
            isValue ? 'text-[1.24rem]' : 'text-[1.42rem] md:text-[1.58rem]'
          }`}
          style={{ color: 'var(--ei-text-primary)' }}
        >
          {title}
        </h3>
      </div>

      <p
        className={`relative z-10 mx-auto mt-4 max-w-[18rem] whitespace-pre-line font-structural leading-[1.72] ${
          isValue ? 'text-[13.5px]' : 'text-[14.5px] md:text-[15.5px]'
        }`}
        style={{ color: 'var(--ei-text-secondary)' }}
      >
        {description}
      </p>
    </motion.article>
  );
}