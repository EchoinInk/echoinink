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
      {/* Restrained atmospheric depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 30% at 50% 30%, rgba(139,92,246,0.025) 0%, transparent 60%)',
          filter: 'blur(60px)',
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

          {/* Capabilities — quiet editorial list */}
          <div className="space-y-0">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                variants={driftUp}
                className="group py-6 md:py-8 border-b border-white/[0.04] last:border-b-0"
              >
                <div className="grid md:grid-cols-12 gap-3 md:gap-6 items-baseline">
                  {/* Label */}
                  <div className="md:col-span-4">
                    <span className="font-structural text-[11px] tracking-[0.14em] uppercase text-white/55 group-hover:text-white/75 transition-colors duration-500">
                      {cap.label}
                    </span>
                  </div>
                  
                  {/* Description */}
                  <div className="md:col-span-8">
                    <p className="font-structural text-[13px] md:text-[14px] leading-[1.7] text-white/45 group-hover:text-white/60 transition-colors duration-500">
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
