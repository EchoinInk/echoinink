import { motion } from 'framer-motion';
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

  return (
    <div className="ei-deliverable-motif ei-deliverable-motif-glyph" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none" className="ei-deliverable-glyph">
        {motif === 'tone' && (
          <path
            d="M3 24h6l3-9 4 18 4-24 4 30 4-21 3 6h10"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {motif === 'manifesto' && (
          <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <path d="M24 6v36M6 24h36M11 11l26 26M37 11 11 37" />
          </g>
        )}
        {motif === 'notes' && (
          <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <path d="M12 16h24M12 24h24M12 32h16" />
          </g>
        )}
        {motif === 'feeling' && (
          <g stroke="currentColor" fill="none">
            <circle cx="24" cy="24" r="4" strokeWidth="1.4" />
            <circle cx="24" cy="24" r="10" strokeWidth="1.2" opacity="0.7" />
            <circle cx="24" cy="24" r="16" strokeWidth="1" opacity="0.4" />
          </g>
        )}
      </svg>
    </div>
  );
}

export function DeliverableCard({
  title,
  description,
  motif = 'feeling',
  index = 0,
}: DeliverableCardProps) {
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
