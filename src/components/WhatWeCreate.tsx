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
          ATMOSPHERIC LAYERS — Subtle cinematic depth
          Extremely restrained, low-opacity, GPU-friendly
          ═══════════════════════════════════════════════════════════════ */}
      
      {/* Soft violet glow core */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 30% at 50% 30%, rgba(139,92,246,0.03) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Faint orbital trace — horizontal arc */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse 120% 20% at 50% 45%, rgba(99,102,241,0.04) 0%, transparent 50%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Subtle horizontal motion line — very low opacity */}
      <motion.div
        className="absolute left-0 right-0 top-[35%] h-px pointer-events-none"
        initial={{ opacity: 0, scaleX: 0.8 }}
        whileInView={{ opacity: 0.08, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.5) 20%, rgba(99,102,241,0.3) 50%, rgba(139,92,246,0.5) 80%, transparent 100%)',
        }}
      />

      {/* Deeper tonal layering — bottom fade for depth */}
      <div
        className="absolute inset-x-0 bottom-0 h-[40%] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(139,92,246,0.015) 0%, transparent 100%)',
          filter: 'blur(30px)',
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

          {/* Horizontal divider line */}
          <motion.div
            variants={blurEmergence}
            className="w-full h-px bg-white/[0.06] mb-10 md:mb-12"
          />

          {/* Capabilities — quiet editorial list with atmospheric hover */}
          <div className="space-y-0 relative">
            {/* Subtle vertical linework — connecting the rows */}
            <div
              className="absolute left-[33.333%] top-0 bottom-0 w-px pointer-events-none hidden md:block"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, rgba(139,92,246,0.06) 20%, rgba(99,102,241,0.04) 50%, rgba(139,92,246,0.06) 80%, transparent 100%)',
              }}
            />

            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                variants={driftUp}
                className="group relative py-6 md:py-8 border-b border-white/[0.04] last:border-b-0"
              >
                {/* Restrained hover glow — single layer, GPU-friendly */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse 40% 80% at 20% 50%, rgba(139,92,246,0.04) 0%, transparent 60%)',
                    filter: 'blur(20px)',
                  }}
                />

                <div className="grid md:grid-cols-12 gap-3 md:gap-6 items-baseline relative z-10">
                  {/* Label */}
                  <div className="md:col-span-4">
                    <span className="font-structural text-[11px] tracking-[0.14em] uppercase text-white/55 group-hover:text-white/80 transition-colors duration-500">
                      {cap.label}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <div className="md:col-span-8">
                    <p className="font-structural text-[13px] md:text-[14px] leading-[1.7] text-white/45 group-hover:text-white/62 transition-colors duration-500">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

export default WhatWeCreate;
