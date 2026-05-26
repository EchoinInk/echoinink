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
// Refined for stronger readability, less atmospheric over-layering,
// and a calmer luxury hierarchy.
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
      {/* Atmospheric foundation — reduced and calmer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 62% 36% at 50% 30%, rgba(139,92,246,0.035) 0%, transparent 58%)',
          filter: 'blur(72px)',
        }}
      />

      {/* Primary orbital — single dimensional trace */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background:
            'radial-gradient(ellipse 135% 26% at 44% 45%, rgba(99,102,241,0.028) 0%, transparent 52%)',
          filter: 'blur(56px)',
        }}
      />

      {/* Secondary counter-glow — reduced to avoid visual noise */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        style={{
          background:
            'radial-gradient(ellipse 110% 22% at 64% 38%, rgba(168,85,247,0.024) 0%, transparent 48%)',
          filter: 'blur(64px)',
        }}
      />

      {/* Ambient trace — one line only, quieter */}
      <motion.div
        className="absolute left-[14%] right-[14%] top-[30%] h-px pointer-events-none"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 0.055, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.42) 18%, rgba(99,102,241,0.26) 50%, rgba(139,92,246,0.42) 82%, transparent 100%)',
          filter: 'blur(1px)',
        }}
      />

      {/* Lower tonal grounding */}
      <div
        className="absolute inset-x-0 bottom-0 h-[52%] pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(99,102,241,0.024) 0%, rgba(139,92,246,0.01) 36%, transparent 72%)',
          filter: 'blur(44px)',
        }}
      />

      {/* Soft top containment */}
      <div
        className="absolute inset-x-0 top-0 h-[30%] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 82% 64% at 50% 0%, rgba(3,5,12,0.1) 0%, transparent 68%)',
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
          <motion.div variants={driftUp} className="text-center mb-7 md:mb-12">
            <span className="ei-eyebrow ei-text-space-md block">
              Capabilities
            </span>
            <h2 className="ei-section-title">
              What we create
            </h2>
          </motion.div>

          {/* Editorial divider */}
          <motion.div
            variants={blurEmergence}
            className="w-full h-px mb-7 md:mb-12"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.075) 18%, rgba(255,255,255,0.075) 82%, transparent 100%)',
            }}
          />

          {/* Capabilities */}
          <div className="space-y-0 relative">
            {/* Vertical editorial trace */}
            <motion.div
              className="absolute left-[33.333%] top-0 bottom-0 w-px pointer-events-none hidden md:block"
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 0.72, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              style={{
                background:
                  'linear-gradient(to bottom, transparent 0%, rgba(139,92,246,0.075) 12%, rgba(99,102,241,0.055) 50%, rgba(139,92,246,0.075) 88%, transparent 100%)',
                transformOrigin: 'top',
              }}
            />

            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                variants={driftUp}
                className="group relative"
              >
                {/* Row divider */}
                {i > 0 && (
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-px pointer-events-none"
                    initial={{ opacity: 0, scaleX: 0.85 }}
                    whileInView={{ opacity: 0.42, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.08 * i,
                    }}
                    style={{
                      background:
                        'linear-gradient(90deg, transparent 6%, rgba(139,92,246,0.075) 22%, rgba(99,102,241,0.055) 50%, rgba(139,92,246,0.075) 78%, transparent 94%)',
                    }}
                  />
                )}

                {/* Hover illumination — simplified */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse 58% 90% at 28% 50%, rgba(139,92,246,0.04) 0%, transparent 58%)',
                    filter: 'blur(28px)',
                  }}
                />

                <div className="grid md:grid-cols-12 gap-2 md:gap-6 items-baseline relative z-10 py-5 md:py-10 max-md:border-l max-md:border-white/[0.06] max-md:pl-4">
                  {/* Label */}
                  <div className="md:col-span-4">
                    <span className="font-structural text-[12px] md:text-[13px] tracking-[0.1em] uppercase text-white/68 group-hover:text-white/82 transition-colors duration-500">
                      {cap.label}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-8">
                    <p className="font-structural text-[13px] md:text-[14.5px] leading-[1.6] md:leading-[1.72] text-white/62 group-hover:text-white/78 transition-colors duration-500">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom separator */}
          <motion.div
            variants={blurEmergence}
            className="mt-8 md:mt-12 w-full h-px"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.065) 25%, rgba(99,102,241,0.045) 50%, rgba(139,92,246,0.065) 75%, transparent 100%)',
            }}
          />
        </motion.div>
      </Container>
    </Section>
  );
}

export default WhatWeCreate;