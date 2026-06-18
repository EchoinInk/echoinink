import { motion } from 'framer-motion';
import { EchoCard } from '@/components/ui/EchoCard';
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
    <motion.div variants={driftUp}>
      <EchoCard
        variant="index"
        padding="none"
        className="ei-card-system"
        data-status={status}
        style={{ ['--ei-system-card-accent' as string]: accent }}
      >
        <div className="ei-card-content">
          <div className="ei-card-system-header">
            <div>
              {category && <span className="ei-card-system-category ei-type-meta">{category}</span>}
              <h3 className="ei-card-system-title ei-type-card-title">{title}</h3>
            </div>
            <span className="ei-card-system-status ei-type-meta" data-status={status}>
              {statusLabel[status]}
            </span>
          </div>
          <p className="ei-card-system-copy ei-type-body-small">{description}</p>
        </div>
      </EchoCard>
    </motion.div>
  );
}
