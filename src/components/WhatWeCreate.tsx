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
          ATMOSPHERIC LAYERS — Enhanced cinematic depth
          Whisper-level effects, GPU-friendly, opacity/transform based
          ═══════════════════════════════════════════════════════════════ */}

      {/* Soft violet glow core — deepened slightly */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 35% at 50% 25%, rgba(139,92,246,0.04) 0%, transparent 60%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Faint orbital trace — elliptical arc with subtle asymmetry */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: 'radial-gradient(ellipse 140% 25% at 45% 50%, rgba(99,102,241,0.035) 0%, transparent 50%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Secondary orbital — subtle counter-arc for dimensional depth */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        style={{
          background: 'radial-gradient(ellipse 100% 20% at 60% 40%, rgba(168,85,247,0.025) 0%, transparent 45%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Soft horizontal motion line — minimal, restrained */}
      <motion.div
        className="absolute left-0 right-0 top-[38%] h-px pointer-events-none"
        initial={{ opacity: 0, scaleX: 0.6 }}
        whileInView={{ opacity: 0.1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: 'linear-gradient(90deg, transparent 5%, rgba(139,92,246,0.4) 25%, rgba(99,102,241,0.25) 50%, rgba(139,92,246,0.4) 75%, transparent 95%)',
        }}
      />

      {/* Deeper tonal layering — bottom fade for spatial depth */}
      <div
        className="absolute inset-x-0 bottom-0 h-[50%] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(99,102,241,0.025) 0%, rgba(139,92,246,0.01) 40%, transparent 100%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Subtle top vignette — framing the section */}
      <div
        className="absolute inset-x-0 top-0 h-[30%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(3,5,12,0.08) 0%, transparent 60%)',
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
            <h2 className="ei-section-title">
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

          {/* Capabilities — quiet editorial list with enhanced atmospheric hover */}
          <div className="space-y-0 relative">
            {/* Subtle vertical linework — connecting the rows with gradient fade */}
            <div
              className="absolute left-[33.333%] top-0 bottom-0 w-px pointer-events-none hidden md:block"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, rgba(139,92,246,0.08) 15%, rgba(99,102,241,0.05) 50%, rgba(139,92,246,0.08) 85%, transparent 100%)',
              }}
            />

            {/* Soft row dividers — whisper-level separators */}
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                variants={driftUp}
                className="group relative"
              >
                {/* Row divider — soft horizontal line */}
                {i > 0 && (
                  <div
                    className="absolute top-0 left-0 right-0 h-px pointer-events-none opacity-40"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.08) 20%, rgba(99,102,241,0.06) 50%, rgba(139,92,246,0.08) 80%, transparent 100%)',
                    }}
                  />
                )}

                {/* Restrained hover glow — soft radial emergence */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: 'radial-gradient(ellipse 50% 100% at 25% 50%, rgba(139,92,246,0.05) 0%, transparent 60%)',
                    filter: 'blur(25px)',
                  }}
                />

                <div className="grid md:grid-cols-12 gap-3 md:gap-6 items-baseline relative z-10 py-7 md:py-9">
                  {/* Label */}
                  <div className="md:col-span-4">
                    <span className="font-structural text-[11px] tracking-[0.14em] uppercase text-white/58 group-hover:text-white/82 transition-colors duration-500">
                      {cap.label}
                    </span>
                  </div>

                  {/* Description — slightly improved readability */}
                  <div className="md:col-span-8">
                    <p className="font-structural text-[13px] md:text-[14px] leading-[1.7] text-white/50 group-hover:text-white/68 transition-colors duration-500">
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
