import { motion } from 'framer-motion';
import {
  blurEmergence,
  driftUp,
  EASE_LUXURY,
  DURATION,
  VIEWPORT,
} from '@/lib/motion-cinematic';

// ═══════════════════════════════════════════════════════════════
// CINEMATIC STATEMENT — A breathing moment in the page tempo
// Full-width atmospheric statement with tonal contrast
// Functions as a "cut to black" moment in film pacing
// ═══════════════════════════════════════════════════════════════

export function CinematicStatement() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden py-12 md:py-32">
      {/* 
        ATMOSPHERIC LAYERS — Subtle tonal shift
        Creates contrast through a slightly brighter, more luminous atmosphere
      */}
      
      {/* Base atmospheric glow — violet core */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 40%, rgb(113, 7, 234 / 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 30% 60%, rgb(113, 7, 234 / 0.04) 0%, transparent 50%)
          `,
          filter: 'blur(100px)',
        }}
      />

      {/* Soft luminance field — brighter tone for contrast */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VIEWPORT.normal}
        transition={{ duration: DURATION.slower, ease: EASE_LUXURY }}
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 50% 45%, rgb(221, 18, 203 / 0.03) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Content — centered, immersive, editorial */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          className="space-y-8"
        >
          {/* Eyebrow — quiet indicator of tonal shift */}
          <motion.span
            variants={driftUp}
            className="font-structural text-[9px] tracking-[0.32em] uppercase text-white/45 block"
          >
            A different frequency
          </motion.span>

          {/* Main statement — the emotional anchor */}
          <motion.h2
            variants={blurEmergence}
            className="font-editorial text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] text-white/80 leading-[1.25] tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            <span className="block mb-2">We do not decorate brands.</span>
            <span className="block text-white/55">We reveal what they are becoming.</span>
          </motion.h2>

          {/* Supporting line — the philosophy reinforcement */}
          <motion.p
            variants={driftUp}
            className="font-structural text-[12px] md:text-[13px] text-white/65 leading-[1.8] max-w-[48ch] mx-auto pt-4"
          >
            Every project begins with a question: what truth wants to emerge through this work?
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom fade — dissolves into next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgb(11, 13, 42 / 0.5) 50%, rgb(5, 3, 11 / 0.9) 100%)',
        }}
      />
    </section>
  );
}

export default CinematicStatement;
