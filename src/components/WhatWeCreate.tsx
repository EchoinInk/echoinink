import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import {
  driftUp,
  blurEmergence,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from '@/lib/motion-cinematic';

// ═══════════════════════════════════════════════════════════════
// WHAT WE CREATE — Grounded functional anchor
// Minimal editorial layout explaining Echo in Ink's capabilities
// Enhanced with atmospheric depth, faint orbital traces, subtle motion
// ═══════════════════════════════════════════════════════════════

const capabilities = [
  {
    label: 'Brand Identity',
    description: 'Emotional and visual systems that preserve the texture of what you carry.',
  },
  {
    label: 'Digital Experience',
    description: 'Atmospheric interfaces shaped around coherence, resonance, and calm.',
  },
  {
    label: 'Narrative Systems',
    description: 'Story architecture that reveals what is becoming, not just what is.',
  },
  {
    label: 'Creative Direction',
    description: 'Guidance through moments of transition, misalignment, or emergence.',
  },
];

export function WhatWeCreate() {
  return (
    <Section spacing="sm" className="relative overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════
          ATMOSPHERIC LAYERS — Deep dimensional immersion
          Orbital systems, ambient traces, cinematic layering
          Whisper-level, GPU-friendly, authored atmosphere
          ═══════════════════════════════════════════════════════════════ */}

      {/* Primary violet glow core — central luminescence */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 40% at 50% 30%, rgba(139,92,246,0.05) 0%, transparent 55%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Primary orbital — elliptical arc with gentle drift */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: 'radial-gradient(ellipse 150% 30% at 40% 45%, rgba(99,102,241,0.04) 0%, transparent 50%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Secondary orbital — counter-arc creating dimensional tension */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        style={{
          background: 'radial-gradient(ellipse 120% 25% at 65% 35%, rgba(168,85,247,0.035) 0%, transparent 45%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Tertiary orbital — subtle depth layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        style={{
          background: 'radial-gradient(ellipse 80% 35% at 55% 60%, rgba(99,102,241,0.025) 0%, rgba(139,92,246,0.02) 50%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Ambient line traces — horizontal, subtle glow paths */}
      <motion.div
        className="absolute left-[10%] right-[10%] top-[28%] h-px pointer-events-none"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 0.08, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.5) 15%, rgba(99,102,241,0.3) 50%, rgba(139,92,246,0.5) 85%, transparent 100%)',
          filter: 'blur(1px)',
        }}
      />

      <motion.div
        className="absolute left-[15%] right-[15%] top-[72%] h-px pointer-events-none"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 0.06, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.4) 20%, rgba(139,92,246,0.25) 50%, rgba(168,85,247,0.4) 80%, transparent 100%)',
          filter: 'blur(1px)',
        }}
      />

      {/* Deeper tonal layering — spatial depth foundation */}
      <div
        className="absolute inset-x-0 bottom-0 h-[60%] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(99,102,241,0.035) 0%, rgba(139,92,246,0.015) 30%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Top atmospheric framing — vignette for containment */}
      <div
        className="absolute inset-x-0 top-0 h-[35%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 85% 70% at 50% 0%, rgba(3,5,12,0.12) 0%, transparent 65%)',
        }}
      />

      {/* Side atmospheric framing — subtle depth edges */}
      <div
        className="absolute inset-y-0 left-0 w-[20%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 80% at 0% 50%, rgba(3,5,12,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-[20%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 80% at 100% 50%, rgba(3,5,12,0.06) 0%, transparent 70%)',
        }}
      />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer(STAGGER.loose, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={driftUp} className="text-center mb-10 md:mb-12">
            <span className="ei-eyebrow ei-text-space-md block">
              Capabilities
            </span>
            <h2 className="ei-section">
              What we create
            </h2>
          </motion.div>

          {/* Horizontal divider line — soft atmospheric separator */}
          <motion.div
            variants={blurEmergence}
            className="w-full h-px mb-10 md:mb-12"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 15%, rgba(255,255,255,0.08) 85%, transparent 100%)',
            }}
          />

          {/* Capabilities — immersive editorial list with sophisticated hover */}
          <div className="space-y-0 relative">
            {/* Vertical timeline trace — elegant connecting line */}
            <motion.div
              className="absolute left-[33.333%] top-0 bottom-0 w-px pointer-events-none hidden md:block"
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, rgba(139,92,246,0.12) 10%, rgba(99,102,241,0.08) 50%, rgba(139,92,246,0.12) 90%, transparent 100%)',
                transformOrigin: 'top',
              }}
            />

            {/* Soft row dividers — atmospheric separators */}
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                variants={driftUp}
                className="group relative"
              >
                {/* Row divider — ambient horizontal line */}
                {i > 0 && (
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                    initial={{ opacity: 0, scaleX: 0.8 }}
                    whileInView={{ opacity: 0.5, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 * i }}
                    style={{
                      background: 'linear-gradient(90deg, transparent 5%, rgba(139,92,246,0.1) 20%, rgba(99,102,241,0.08) 50%, rgba(139,92,246,0.1) 80%, transparent 95%)',
                    }}
                  />
                )}

                {/* Sophisticated hover illumination — multi-layer glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `
                      radial-gradient(ellipse 60% 100% at 20% 50%, rgba(139,92,246,0.06) 0%, transparent 55%),
                      radial-gradient(ellipse 40% 80% at 80% 50%, rgba(99,102,241,0.04) 0%, transparent 50%)
                    `,
                    filter: 'blur(30px)',
                  }}
                />

                {/* Subtle edge highlight on hover */}
                <div
                  className="absolute inset-y-0 left-0 w-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(139,92,246,0.3) 50%, transparent 100%)',
                  }}
                />

                <div className="grid md:grid-cols-12 gap-3 md:gap-6 items-baseline relative z-10 py-8 md:py-10">
                  {/* Label — enhanced hierarchy */}
                  <div className="md:col-span-4">
                    <span className="font-structural text-[11px] tracking-[0.12em] uppercase text-white/60 group-hover:text-white/85 transition-colors duration-500">
                      {cap.label}
                    </span>
                  </div>

                  {/* Description — refined readability */}
                  <div className="md:col-span-8">
                    <p className="font-structural text-[13px] md:text-[14px] leading-[1.7] text-white/52 group-hover:text-white/72 transition-colors duration-500">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom atmospheric separator */}
          <motion.div
            variants={blurEmergence}
            className="mt-10 md:mt-12 w-full h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.08) 25%, rgba(99,102,241,0.06) 50%, rgba(139,92,246,0.08) 75%, transparent 100%)',
            }}
          />
        </motion.div>
      </Container>
    </Section>
  );
}

export default WhatWeCreate;
