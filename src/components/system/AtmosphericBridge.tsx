import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { atmosphericFade, EASE_CINEMATIC, DURATION } from '@/system/motion/cinematic';

interface AtmosphericBridgeProps {
  children?: ReactNode;
  height?: 'sm' | 'md' | 'lg';
  gradient?: 'ink' | 'violet' | 'aqua' | 'transparent';
  className?: string;
}

const heightClasses = {
  sm: 'h-16 md:h-24',
  md: 'h-24 md:h-40',
  lg: 'h-40 md:h-60',
};

const gradientStyles = {
  ink: 'linear-gradient(to bottom, transparent 0%, rgb(var(--ei-midnight-rgb) / 0.6) 50%, rgb(var(--ei-midnight-rgb) / 0.95) 100%)',
  violet: 'linear-gradient(to bottom, transparent 0%, rgb(var(--ei-midnight-rgb) / 0.04) 50%, rgb(var(--ei-midnight-rgb) / 0.8) 100%)',
  aqua: 'linear-gradient(to bottom, transparent 0%, rgb(var(--ei-electric-blue-rgb) / 0.03) 50%, rgb(var(--ei-midnight-rgb) / 0.8) 100%)',
  transparent: 'transparent',
};

/**
 * AtmosphericBridge — A transitional layer between sections.
 * Provides smooth tonal carryover, gradient bridges, and
 * prevents harsh visual cuts.
 */
export function AtmosphericBridge({
  children,
  height = 'md',
  gradient = 'ink',
  className = '',
}: AtmosphericBridgeProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={atmosphericFade}
      transition={{ duration: DURATION.slow, ease: EASE_CINEMATIC }}
      className={`
        relative overflow-hidden
        ${heightClasses[height]}
        ${className}
      `.trim()}
      style={{
        background: gradientStyles[gradient],
      }}
    >
      {children}
    </motion.div>
  );
}

export default AtmosphericBridge;
