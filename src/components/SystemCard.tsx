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
  available: 'rgb(var(--ei-aurora-blue-rgb) / 0.55)',
  soon: 'rgb(var(--ei-soft-lavender-rgb) / 0.45)',
  active: 'rgb(var(--ei-orchid-pink-rgb) / 0.55)',
};

export function SystemCard({
  title,
  description,
  category,
  status = 'available',
  accent = 'rgb(var(--ei-luxe-violet-rgb) / 0.06)',
}: SystemCardProps) {
  return (
    <motion.div
      variants={driftUp}
      className="group relative rounded-2xl overflow-hidden cursor-default"
      style={{
        background: `radial-gradient(ellipse 80% 80% at 50% 0%, ${accent} 0%, transparent 60%), rgb(var(--ei-ice-white-rgb) / 0.02)`,
        border: '1px solid rgb(var(--ei-ice-white-rgb) / 0.07)',
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 0%, ${accent} 0%, transparent 55%)`,
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px opacity-40 group-hover:opacity-70 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${statusColor[status]} 30%, ${statusColor[status]} 70%, transparent 100%)`,
        }}
      />

      <div className="relative z-10 p-6 md:p-7 flex flex-col gap-3 min-h-[180px]">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            {category && (
              <span className="font-structural text-[9px] tracking-[0.24em] uppercase text-white/50 block mb-1.5">
                {category}
              </span>
            )}
            <h3 className="font-editorial text-[1rem] md:text-[1.1rem] text-white/85 group-hover:text-white/95 transition-colors duration-500 leading-[1.3]">
              {title}
            </h3>
          </div>
          <span
            className="font-structural text-[8px] tracking-[0.18em] uppercase px-2 py-1 rounded-full shrink-0 mt-0.5"
            style={{
              color: statusColor[status],
              background: `${statusColor[status].replace('0.55', '0.10').replace('0.45', '0.10')}`,
              border: `1px solid ${statusColor[status].replace('0.55', '0.20').replace('0.45', '0.18')}`,
            }}
          >
            {statusLabel[status]}
          </span>
        </div>

        {/* Description */}
        <p className="font-structural text-[12px] md:text-[13px] text-white/50 group-hover:text-white/65 transition-colors duration-500 leading-[1.7] flex-1">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
