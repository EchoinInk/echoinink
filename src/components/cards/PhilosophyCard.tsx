import { motion } from 'framer-motion';
import {
  OrbitalVisual,
  type OrbitalVariant,
} from '@/components/ui/OrbitalVisual';
import { EchoCard } from '@/components/ui/EchoCard';
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
  const isValue = variant === 'value';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT.normal}
      transition={{
        duration: DURATION.normal,
        ease: EASE_CINEMATIC,
        delay: index * 0.08,
      }}
    >
      <EchoCard
        variant="static"
        padding="none"
        className={[
          'ei-card-transformation',
          isValue ? 'ei-card-transformation-compact' : '',
        ].join(' ')}
      >
        <div className="ei-card-atmosphere" aria-hidden="true" />
        <div className="ei-card-content">
          <div className="ei-card-transformation-icon" aria-hidden="true">
            <OrbitalVisual variant={icon} size={isValue ? 60 : 70} />
          </div>
          <h3 className="ei-card-transformation-title ei-type-card-title">{title}</h3>
          <p className="ei-card-transformation-copy ei-type-body-small">{description}</p>
        </div>
      </EchoCard>
    </motion.div>
  );
}
