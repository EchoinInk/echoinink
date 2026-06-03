import { motion, useReducedMotion } from 'framer-motion';
import { DURATION, EASE_CINEMATIC, VIEWPORT } from '@/lib/motion-cinematic';

export type DeliverableMotif =
  | 'palette'
  | 'type'
  | 'moodboard'
  | 'tone'
  | 'manifesto'
  | 'notes'
  | 'feeling';

interface DeliverableCardProps {
  title: string;
  description: string;
  motif?: DeliverableMotif;
  index?: number;
}

function MotifField({ motif }: { motif: DeliverableMotif }) {
  if (motif === 'palette') {
    return (
      <div className="ei-deliverable-motif ei-deliverable-motif-palette" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    );
  }

  if (motif === 'type') {
    return (
      <div className="ei-deliverable-motif ei-deliverable-motif-type" aria-hidden="true">
        <span className="ei-deliverable-type-display">Aa</span>
        <span className="ei-deliverable-type-caption">Direction</span>
      </div>
    );
  }

  if (motif === 'moodboard') {
    return (
      <div className="ei-deliverable-motif ei-deliverable-motif-moodboard" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    );
  }

  return <div className="ei-deliverable-motif ei-deliverable-motif-light" aria-hidden="true" />;
}

export function DeliverableCard({
  title,
  description,
  motif = 'feeling',
  index = 0,
}: DeliverableCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT.normal}
      transition={{
        duration: DURATION.normal,
        ease: EASE_CINEMATIC,
        delay: index * 0.06,
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : { y: -2, transition: { duration: DURATION.instant, ease: EASE_CINEMATIC } }
      }
      className="ei-card ei-card-soft ei-card-deliverable"
    >
      <MotifField motif={motif} />
      <div className="ei-card-content">
        <h3 className="ei-type-section text-[1.15rem] md:text-[1.25rem] text-[var(--ei-text-primary)]">
          {title}
        </h3>
        <p className="mt-3 ei-type-body text-[var(--ei-text-secondary)]">{description}</p>
      </div>
    </motion.article>
  );
}
