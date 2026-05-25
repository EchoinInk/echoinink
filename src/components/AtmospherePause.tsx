// ═══════════════════════════════════════════════════════════════
// AtmospherePause — Cinematic breathing moment
// A meditative pause in the page flow for emotional reset
// ═══════════════════════════════════════════════════════════════

import { motion } from 'framer-motion';
import { 
  fadeSoft, 
  driftUp, 
  staggerContainer,
  STAGGER,
  VIEWPORT,
  AMBIENT 
} from '@/lib/motion-cinematic';

export function AtmospherePause() {
  return (
    <section className="relative overflow-hidden ei-section-pause">
      {/* Ambient glow field */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={AMBIENT.luminance}
        style={{
          background: 'radial-gradient(ellipse 35% 25% at 50% 50%, rgba(99,102,241,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Soft vignette edges */}
      <div className="absolute inset-0 ei-vignette-soft" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer(STAGGER.loose, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
        >
          {/* Eyebrow — atmospheric */}
          <motion.span 
            variants={driftUp}
            className="ei-eyebrow ei-text-space-xl block"
          >
            The Space Between
          </motion.span>

          {/* Poetic fragment */}
          <motion.p 
            variants={fadeSoft}
            className="ei-atmosphere-text"
          >
            "In silence, the work finds its voice.
            <br />
            In pause, the vision clarifies."
          </motion.p>

          {/* Decorative line */}
          <motion.div
            variants={fadeSoft}
            className="mt-16 mx-auto w-px h-16"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent)',
            }}
          />
        </motion.div>
      </div>

      {/* Bottom transition fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(15,18,32,0.5))',
        }}
      />
    </section>
  );
}
