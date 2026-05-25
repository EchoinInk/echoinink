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
// HOW WE WORK — Ceremonial collaboration system
// Ritualistic journey through the creative process
// Intentional, calm, authored, trustworthy — NOT a corporate infographic
// ═══════════════════════════════════════════════════════════════

const phases = [
  {
    label: 'Strategic Foundation',
    description: 'Understanding the inner terrain. What truth wants to emerge.',
  },
  {
    label: 'Identity System',
    description: 'Translating meaning into form. Visual, narrative, and emotional coherence.',
  },
  {
    label: 'Digital Experience',
    description: 'Building the environment where the identity lives and breathes.',
  },
  {
    label: 'Atmospheric Launch',
    description: 'Release into the world with quiet confidence and lasting resonance.',
  },
];

export function HowWeWork() {
  return (
    <Section spacing="sm" className="relative overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════
          ATMOSPHERIC LAYERS — Ceremonial depth
          Dimensional backdrop for ritualistic experience
          ═══════════════════════════════════════════════════════════════ */}

      {/* Primary violet luminescence — sacred center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 45% 50% at 30% 40%, rgba(99,102,241,0.04) 0%, transparent 55%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Secondary atmospheric layer — soft depth field */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 70% 60%, rgba(139,92,246,0.03) 0%, transparent 50%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Bottom tonal conclusion — ceremonial closure */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(99,102,241,0.035) 0%, rgba(139,92,246,0.015) 30%, transparent 70%)',
          filter: 'blur(50px)',
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
          <motion.div variants={driftUp} className="text-center mb-12 md:mb-16">
            <span className="ei-eyebrow ei-text-space-md block">
              Collaboration
            </span>
            <h2 className="ei-section-title">
              How we work
            </h2>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════
              PHASE SEQUENCE — Ceremonial vertical flow
              Faint timeline trace, restrained glow markers, editorial hierarchy
              ═══════════════════════════════════════════════════════════════ */}
          <div className="space-y-0 relative">
            {/* Central timeline trace — faint, elegant, connecting all phases */}
            <div
              className="absolute left-6 md:left-8 top-0 bottom-0 w-px pointer-events-none hidden md:block"
              style={{
                background: 'linear-gradient(to bottom, rgba(139,92,246,0.08) 0%, rgba(99,102,241,0.12) 25%, rgba(139,92,246,0.12) 50%, rgba(99,102,241,0.12) 75%, rgba(139,92,246,0.08) 100%)',
              }}
            />

            {phases.map((phase, i) => (
              <motion.div
                key={phase.label}
                variants={driftUp}
                className="group relative"
              >
                {/* Connection line segment — subtle phase-to-phase gradient */}
                {i < phases.length - 1 && (
                  <div
                    className="absolute left-6 md:left-8 top-[4.5rem] md:top-[5rem] w-px h-[calc(100%-3rem)] pointer-events-none hidden md:block"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(139,92,246,0.10) 0%, rgba(99,102,241,0.04) 100%)',
                    }}
                  />
                )}

                <div className="flex gap-6 md:gap-10 py-8 md:py-10">
                  {/* Phase indicator — glowing marker with number */}
                  <div className="flex-shrink-0 w-12 md:w-16 flex flex-col items-center relative">
                    {/* Glow marker — restrained, appears on hover */}
                    <div
                      className="absolute w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)',
                        filter: 'blur(4px)',
                        transform: 'translateY(2px)',
                      }}
                    />
                    {/* Phase number — minimal, with stronger hierarchy */}
                    <span className="font-structural text-[11px] tracking-[0.18em] uppercase text-white/28 group-hover:text-white/48 transition-colors duration-500 relative z-10">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Phase content — refined spacing and hierarchy */}
                  <div className="flex-1 space-y-3">
                    {/* Phase label — stronger presence, ceremonial feel */}
                    <h3 className="font-structural text-[13px] md:text-[14px] tracking-[0.06em] uppercase text-white/70 group-hover:text-white/88 transition-colors duration-500">
                      {phase.label}
                    </h3>
                    {/* Phase description — improved readability, restrained */}
                    <p className="font-structural text-[13px] md:text-[14px] leading-[1.7] text-white/48 group-hover:text-white/62 transition-colors duration-500 max-w-[42ch]">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Soft horizontal separator between phases — whisper-level */}
                {i < phases.length - 1 && (
                  <div
                    className="absolute left-0 right-0 bottom-0 h-px pointer-events-none opacity-50"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.06) 15%, rgba(99,102,241,0.05) 50%, rgba(139,92,246,0.06) 85%, transparent 100%)',
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom atmospheric line — quiet closure */}
          <motion.div
            variants={blurEmergence}
            className="mt-12 md:mt-16 w-full h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.08) 30%, rgba(99,102,241,0.08) 70%, transparent 100%)',
            }}
          />
        </motion.div>
      </Container>
    </Section>
  );
}

export default HowWeWork;
