import { motion } from 'framer-motion';
import { SystemCard, type SystemCardProps } from './cards/SystemCard';
import { staggerContainer, STAGGER, VIEWPORT } from '@/lib/motion-cinematic';

// ═══════════════════════════════════════════════════════════════
// SYSTEM GRID — Responsive grid layout for SystemCard instances
// ═══════════════════════════════════════════════════════════════

interface SystemGridProps {
  systems: SystemCardProps[];
  columns?: 2 | 3;
}

export function SystemGrid({ systems, columns = 3 }: SystemGridProps) {
  const gridClass =
    columns === 2
      ? 'grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5'
      : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5';

  return (
    <motion.div
      variants={staggerContainer(STAGGER.normal, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.normal}
      className={gridClass}
    >
      {systems.map((system) => (
        <SystemCard key={system.title} {...system} />
      ))}
    </motion.div>
  );
}
