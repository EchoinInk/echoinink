import { motion, useReducedMotion } from 'framer-motion';
import type { OrbitalVariant } from '@/components/orbitals/orbitals';
import { OrbitalVisual } from '@/components/ui/OrbitalVisual';
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
          transition: {
            duration: DURATION.instant,
            ease: EASE_CINEMATIC,
          },
        }
  }
  className={[
    'ei-card',
    'ei-card-interactive',
    'ei-card-transformation',
    isValue ? 'ei-card-transformation-compact' : '',
  ].join(' ')}
>
  <div className="ei-card-atmosphere" aria-hidden="true" />
  <div className="ei-card-content">
    <div className="ei-card-transformation-icon" aria-hidden="true">
      <OrbitalVisual variant={icon} size={isValue ? 60 : 70} />
    </div>
    <h3 className="ei-type-section ei-card-transformation-title">
      {title}
    </h3>
    <p className="ei-type-small ei-card-transformation-copy">
      {description}
    </p>
  </div>
</motion.article>
  );
}
