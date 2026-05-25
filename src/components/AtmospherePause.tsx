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
      {/* Reduced ambient glow field - more subtle */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          opacity: [0.2, 0.32, 0.2],
        }}
        transition={{
          ...AMBIENT.luminance,
          duration: AMBIENT.luminance.duration * 1.2,
        }}
        style={{
          background: 'radial-gradient(ellipse 30% 22% at 50% 48%, rgba(99,102,241,0.025) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Distant depth layer */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 40% 60%, rgba(3,5,12,0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer(STAGGER.loose, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
        >
          {/* Eyebrow — atmospheric, reduced visibility */}
          <motion.span 
            variants={driftUp}
            className="ei-eyebrow block"
            style={{ marginBottom: '3rem' }}
          >
            The Space Between
          </motion.span>

          {/* Poetic fragment - more intimate */}
          <motion.p 
            variants={fadeSoft}
            className="ei-atmosphere-text"
            style={{ lineHeight: 1.7 }}
          >
            "In silence, the work finds its voice.
            <br />
            In pause, the vision clarifies."
          </motion.p>

          {/* Decorative line - more subtle */}
          <motion.div
            variants={fadeSoft}
            className="mx-auto w-px h-12 mt-12"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)',
            }}
          />
        </motion.div>
      </div>

      {/* Softer bottom transition fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(12,14,24,0.3) 50%, rgba(15,18,32,0.7) 100%)',
        }}
      />
    </section>
  );
}
