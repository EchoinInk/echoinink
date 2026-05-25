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
// HOW WE WORK — Engagement clarity
// Minimal operational anchor explaining collaboration flow
// Elegant typography, cinematic spacing, no corporate process graphics
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
      {/* 
        ATMOSPHERIC LAYERS — Calm tonal depth
        Extremely restrained, supports content without competing
      */}
      
      {/* Soft violet haze — upper atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 50% 30%, rgba(99,102,241,0.025) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Deepening gradient at bottom — sense of conclusion */}
      <div
        className="absolute inset-x-0 bottom-0 h-[50%] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(99,102,241,0.02) 0%, transparent 100%)',
          filter: 'blur(40px)',
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

          {/* Phase sequence — elegant vertical flow */}
          <div className="space-y-0">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.label}
                variants={driftUp}
                className="group relative"
              >
                {/* Connection line — subtle, connecting the phases */}
                {i < phases.length - 1 && (
                  <div
                    className="absolute left-6 md:left-8 top-[3rem] md:top-[3.5rem] w-px h-[calc(100%-2rem)] pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(139,92,246,0.15) 0%, rgba(99,102,241,0.05) 100%)',
                    }}
                  />
                )}

                <div className="flex gap-6 md:gap-8 py-6 md:py-8">
                  {/* Phase number — minimal indicator */}
                  <div className="flex-shrink-0 w-12 md:w-16 flex justify-center">
                    <span className="font-structural text-[10px] tracking-[0.2em] uppercase text-white/20 group-hover:text-white/35 transition-colors duration-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Phase content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="font-structural text-[13px] md:text-[14px] tracking-[0.08em] uppercase text-white/65 group-hover:text-white/80 transition-colors duration-500">
                      {phase.label}
                    </h3>
                    <p className="font-structural text-[13px] md:text-[14px] leading-[1.75] text-white/42 group-hover:text-white/55 transition-colors duration-500 max-w-[40ch]">
                      {phase.description}
                    </p>
                  </div>
                </div>
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
