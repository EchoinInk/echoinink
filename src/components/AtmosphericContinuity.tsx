// ═══════════════════════════════════════════════════════════════
// AtmosphericContinuity — Ultra-subtle section transitions
// Creates emotional presence during "empty" space between sections
// Opacity: 2–4% — felt more than seen
// ═══════════════════════════════════════════════════════════════

import { motion, useReducedMotion } from 'framer-motion';
import { atmosphericFloat, DURATION, EASE_LUXURY } from '@/lib/motion-cinematic';

interface AtmosphericContinuityProps {
  /** Height of the transition zone */
  height?: string;
  /** Position of the atmospheric accent: 'left' | 'center' | 'right' */
  accentPosition?: 'left' | 'center' | 'right';
  /** Color accent: 'indigo' | 'violet' | 'pink' | 'aqua' */
  accentColor?: 'indigo' | 'violet' | 'pink' | 'aqua';
  /** Optional className for additional styling */
  className?: string;
}

const colorMap = {
  indigo: {
    main: 'rgba(99,102,241,0.03)',
    secondary: 'rgba(99,102,241,0.015)',
  },
  violet: {
    main: 'rgba(168,85,247,0.03)',
    secondary: 'rgba(168,85,247,0.015)',
  },
  pink: {
    main: 'rgba(232,121,249,0.03)',
    secondary: 'rgba(232,121,249,0.015)',
  },
  aqua: {
    main: 'rgba(30,200,255,0.03)',
    secondary: 'rgba(30,200,255,0.015)',
  },
};

const positionMap = {
  left: { left: '-5%', top: '20%' },
  center: { left: '50%', top: '30%', transform: 'translateX(-50%)' },
  right: { right: '-5%', top: '25%' },
};

export function AtmosphericContinuity({
  height = '120px',
  accentPosition = 'left',
  accentColor = 'violet',
  className = '',
}: AtmosphericContinuityProps) {
  const prefersReduced = useReducedMotion();
  const colors = colorMap[accentColor];
  const position = positionMap[accentPosition];

  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      {/* Ultra-subtle radial nebula — 2-3% opacity */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        initial={{ opacity: 0 }}
        animate={prefersReduced ? { opacity: 0.025 } : atmosphericFloat.animate}
        transition={prefersReduced ? { duration: 1 } : atmosphericFloat.transition}
        style={{
          ...position,
          background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${colors.main} 0%, ${colors.secondary} 50%, transparent 75%)`,
          filter: 'blur(100px)',
        }}
      />

      {/* Secondary faint haze layer — even more subtle */}
      {!prefersReduced && (
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.015, 0.025, 0.015],
            scale: [1, 1.01, 1],
          }}
          transition={{
            duration: DURATION.ambient * 2.2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
            delay: 2,
          }}
          style={{
            ...(accentPosition === 'left'
              ? { right: '10%', bottom: '10%' }
              : accentPosition === 'right'
                ? { left: '15%', top: '15%' }
                : { left: '20%', bottom: '20%' }),
            background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${colors.secondary} 0%, transparent 70%)`,
            filter: 'blur(80px)',
          }}
        />
      )}

      {/* Near-invisible texture layer — creates depth without visibility */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(5,7,16,0.4) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 50% 0%, rgba(5,7,16,0.3) 0%, transparent 50%)
          `,
          opacity: 0.6,
        }}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// AtmosphericBridge — Full-width atmospheric bridge between major sections
// Creates smooth emotional transitions
// ═══════════════════════════════════════════════════════════════

interface AtmosphericBridgeProps {
  /** Intensity of the atmospheric effect: 'subtle' | 'medium' | 'deep' */
  intensity?: 'subtle' | 'medium' | 'deep';
  /** Direction of the fade: 'up' | 'down' | 'both' */
  fadeDirection?: 'up' | 'down' | 'both';
  className?: string;
}

export function AtmosphericBridge({
  intensity = 'subtle',
  fadeDirection = 'both',
  className = '',
}: AtmosphericBridgeProps) {
  const opacityMap = {
    subtle: { start: 0.08, end: 0.03 },
    medium: { start: 0.12, end: 0.05 },
    deep: { start: 0.2, end: 0.08 },
  };

  const { start, end } = opacityMap[intensity];

  const getGradient = () => {
    switch (fadeDirection) {
      case 'up':
        return `linear-gradient(to top, rgba(15,18,32,${start}) 0%, rgba(15,18,32,${end}) 50%, transparent 100%)`;
      case 'down':
        return `linear-gradient(to bottom, rgba(15,18,32,${start}) 0%, rgba(15,18,32,${end}) 50%, transparent 100%)`;
      case 'both':
      default:
        return `
          linear-gradient(to bottom, rgba(15,18,32,${start}) 0%, transparent 50%),
          linear-gradient(to top, rgba(15,18,32,${start}) 0%, transparent 50%)
        `;
    }
  };

  return (
    <motion.div
      className={`w-full h-12 md:h-16 pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: DURATION.slow, ease: EASE_LUXURY }}
      style={{
        background: getGradient(),
      }}
      aria-hidden="true"
    />
  );
}

// ═══════════════════════════════════════════════════════════════
// AtmosphericVeil — Soft darkness overlay for section boundaries
// Creates the feeling of space dissolving
// ═══════════════════════════════════════════════════════════════

interface AtmosphericVeilProps {
  /** Position of the veil: 'top' | 'bottom' | 'full' */
  position?: 'top' | 'bottom' | 'full';
  /** Height of the veil when not full */
  height?: string;
  /** Opacity of the darkness */
  opacity?: number;
  className?: string;
}

export function AtmosphericVeil({
  position = 'bottom',
  height = '200px',
  opacity = 0.4,
  className = '',
}: AtmosphericVeilProps) {
  const getBackground = () => {
    const baseColor = `rgba(5,7,16,${opacity})`;

    switch (position) {
      case 'top':
        return `linear-gradient(to bottom, ${baseColor} 0%, transparent 100%)`;
      case 'bottom':
        return `linear-gradient(to top, ${baseColor} 0%, transparent 100%)`;
      case 'full':
      default:
        return `radial-gradient(ellipse 100% 100% at 50% 50%, ${baseColor} 0%, transparent 70%)`;
    }
  };

  return (
    <div
      className={`absolute inset-x-0 pointer-events-none ${className}`}
      style={{
        ...(position === 'top' ? { top: 0, height } : position === 'bottom' ? { bottom: 0, height } : { inset: 0 }),
        background: getBackground(),
      }}
      aria-hidden="true"
    />
  );
}

export default AtmosphericContinuity;
