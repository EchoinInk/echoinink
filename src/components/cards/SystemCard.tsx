import { motion } from 'framer-motion';
import { driftUp } from '@/lib/motion-cinematic';

// ═══════════════════════════════════════════════════════════════
// SYSTEM CARD — Single tool/framework card in the Systems grid
// Text-focused, glass atmospheric, matches brand motion language
// ═══════════════════════════════════════════════════════════════

export interface SystemCardProps {
  title: string;
  description: string;
  category?: string;
  status?: 'available' | 'soon' | 'active';
  accent?: string;
}

const statusLabel: Record<string, string> = {
  available: 'Available',
  soon: 'Coming Soon',
  active: 'Active',
};

const statusColor: Record<string, string> = {
  available: 'rgb(73, 133, 253 / 0.55)',
  soon: 'rgb(227, 216, 253 / 0.45)',
  active: 'rgb(221, 18, 203 / 0.55)',
};

export function SystemCard({
  title,
  description,
  category,
  status = 'available',
  accent = 'rgb(113, 7, 234 / 0.06)',
}: SystemCardProps) {
  return (
    <motion.article
  variants={driftUp}
  className="ei-card ei-card-system"
  data-status={status}
>
  <div className="ei-card-content">
    <div className="ei-card-system-header">
      <div>
        {category && (
          <span className="ei-card-system-category">
            {category}
          </span>
        )}
        <h3 className="ei-type-section-structural ei-card-system-title">
          {title}
        </h3>
      </div>
      <span
        className="ei-card-system-status"
        data-status={status}
      >
        {statusLabel[status]}
      </span>
    </div>
    <p className="ei-type-small ei-card-system-copy">
      {description}
    </p>
  </div>
</motion.article>
  );
}
