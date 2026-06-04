import { motion } from 'framer-motion';
import {
  blurEmergence,
  driftUp,
  EASE_LUXURY,
  DURATION,
  VIEWPORT,
} from '@/lib/motion-cinematic';

// ═══════════════════════════════════════════════════════════════
// HUMAN SIGNAL — Authored founder voice. An intimate moment.
// The studio speaking directly. Cinematic, restrained, personal.
// ═══════════════════════════════════════════════════════════════

export function HumanSignal() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Warm atmospheric glow — softly personal */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 50%, rgb(var(--ei-orchid-pink-rgb) / 0.03) 0%, rgb(var(--ei-soft-lavender-rgb) / 0.02) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          className="space-y-6"
        >
          {/* Opening mark */}
          <motion.span
            variants={driftUp}
            transition={{ duration: DURATION.slow, ease: EASE_LUXURY }}
            className="font-editorial italic text-[2rem] text-white/20 leading-none block"
          >
            "
          </motion.span>

          {/* The signal */}
          <motion.p
            variants={blurEmergence}
            transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.08 }}
            className="font-editorial text-[1.35rem] md:text-[1.65rem] text-white/75 leading-[1.45] tracking-tight"
            style={{ letterSpacing: '-0.01em' }}
          >
            I create worlds for people who feel too much and think too deeply.
            <span className="block mt-3 text-white/90">
              If that's you, you're home.
            </span>
          </motion.p>

          {/* Attribution */}
          <motion.span
            variants={driftUp}
            transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.14 }}
            className="font-structural text-[10px] tracking-[0.22em] uppercase text-white/50 block pt-2"
          >
            Echo in Ink
          </motion.span>
        </motion.div>
      </div>

      {/* Vignette fades */}
      <div
        className="absolute inset-x-0 top-0 h-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgb(var(--ei-midnight-rgb) / 0.5) 0%, transparent 100%)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgb(var(--ei-midnight-rgb) / 0.5) 0%, transparent 100%)',
        }}
      />
    </section>
  );
}
