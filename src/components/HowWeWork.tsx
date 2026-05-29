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
          background: 'radial-gradient(ellipse 45% 50% at 30% 40%, rgb(var(--ei-deep-indigo-rgb) / 0.04) 0%, transparent 55%)',
  {
    label: 'Identity System',
    description: 'Translating meaning into form. Visual, narrative, and emotional coherence.',
  },
  {
    label: 'Digital Experience',
    description: 'Building the environment where the identity lives and breathes.',
          background: 'radial-gradient(ellipse 60% 40% at 70% 60%, rgb(var(--ei-luxe-violet-rgb) / 0.03) 0%, transparent 50%)',
  {
    label: 'Atmospheric Launch',
    description: 'Release into the world with quiet confidence and lasting resonance.',
  },
];

export function HowWeWork() {
          background: 'linear-gradient(to top, rgb(var(--ei-deep-indigo-rgb) / 0.035) 0%, rgb(var(--ei-luxe-violet-rgb) / 0.015) 30%, transparent 70%)',
    <Section spacing="sm" className="relative overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════
          ATMOSPHERIC LAYERS — Ceremonial depth
          Dimensional backdrop for ritualistic experience
          ═══════════════════════════════════════════════════════════════ */}

      {/* Primary violet luminescence — sacred center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 45% 50% at 30% 40%, rgb(var(--ei-deep-indigo-rgb) / 0.04) 0%, transparent 55%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Secondary atmospheric layer — soft depth field */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 70% 60%, rgb(var(--ei-luxe-violet-rgb) / 0.03) 0%, transparent 50%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Bottom tonal conclusion — ceremonial closure */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgb(var(--ei-deep-indigo-rgb) / 0.035) 0%, rgb(var(--ei-luxe-violet-rgb) / 0.015) 30%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <Container className="relative z-10">
                background: 'linear-gradient(to bottom, rgb(var(--ei-luxe-violet-rgb) / 0.15) 0%, rgb(var(--ei-deep-indigo-rgb) / 0.2) 20%, rgb(var(--ei-luxe-violet-rgb) / 0.2) 50%, rgb(var(--ei-deep-indigo-rgb) / 0.2) 80%, rgb(var(--ei-luxe-violet-rgb) / 0.15) 100%)',
          variants={staggerContainer(STAGGER.loose, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          className="max-w-4xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={driftUp} className="text-center mb-8 md:mb-16">
            <span className="ei-eyebrow ei-text-space-md block">
              Collaboration
            </span>
            <h2 className="ei-section-title">
              How we work
            </h2>
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════
              CEREMONIAL PHASE SEQUENCE — Ritualistic journey
              Vertical illuminated timeline, geometric markers, sacred spacing
              ═══════════════════════════════════════════════════════════════ */}
                      background: 'linear-gradient(to bottom, rgb(var(--ei-luxe-violet-rgb) / 0.12) 0%, rgb(var(--ei-deep-indigo-rgb) / 0.06) 50%, rgb(var(--ei-luxe-violet-rgb) / 0.03) 100%)',
            {/* Illuminated timeline — the sacred path */}
            <motion.div
              className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] pointer-events-none hidden md:block"
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: 'linear-gradient(to bottom, rgb(var(--ei-luxe-violet-rgb) / 0.15) 0%, rgb(var(--ei-deep-indigo-rgb) / 0.2) 20%, rgb(var(--ei-luxe-violet-rgb) / 0.2) 50%, rgb(var(--ei-deep-indigo-rgb) / 0.2) 80%, rgb(var(--ei-luxe-violet-rgb) / 0.15) 100%)',
                transformOrigin: 'top',
                filter: 'blur(0.5px)',
                        background: 'radial-gradient(circle, rgb(var(--ei-luxe-violet-rgb) / 0.15) 0%, transparent 70%)',
            />

            {phases.map((phase, i) => (
              <motion.div
                key={phase.label}
                variants={driftUp}
                className="group relative"
              >
                        background: 'linear-gradient(135deg, rgb(var(--ei-luxe-violet-rgb) / 0.8) 0%, rgb(var(--ei-deep-indigo-rgb) / 0.6) 100%)',
                {i < phases.length - 1 && (
                        boxShadow: '0 0 12px rgb(var(--ei-luxe-violet-rgb) / 0.3)',
                    className="absolute left-6 md:left-8 top-[5rem] md:top-[5.5rem] w-[2px] h-[calc(100%-4rem)] pointer-events-none hidden md:block"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                    style={{
                      background: 'linear-gradient(to bottom, rgb(var(--ei-luxe-violet-rgb) / 0.12) 0%, rgb(var(--ei-deep-indigo-rgb) / 0.06) 50%, rgb(var(--ei-luxe-violet-rgb) / 0.03) 100%)',
                    }}
                  />
                )}

                <div className="flex gap-5 md:gap-12 py-7 md:py-12">
                  {/* Geometric phase marker — soft sacred geometry */}
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

                  const phases = [
                    { label: 'Strategic Foundation', description: 'Understanding the inner terrain. What truth wants to emerge.' },
                    { label: 'Identity System', description: 'Translating meaning into form. Visual, narrative, and emotional coherence.' },
                    { label: 'Digital Experience', description: 'Building the environment where the identity lives and breathes.' },
                    { label: 'Atmospheric Launch', description: 'Release into the world with quiet confidence and lasting resonance.' },
                  ];

                  export function HowWeWork() {
                    return (
                      <Section spacing="sm" className="relative overflow-hidden">
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: 'radial-gradient(ellipse 45% 50% at 30% 40%, rgb(var(--ei-deep-indigo-rgb) / 0.04) 0%, transparent 55%)',
                            filter: 'blur(100px)',
                          }}
                        />

                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: 'radial-gradient(ellipse 60% 40% at 70% 60%, rgb(var(--ei-luxe-violet-rgb) / 0.03) 0%, transparent 50%)',
                            filter: 'blur(80px)',
                          }}
                        />

                        <div
                          className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
                          style={{
                            background: 'linear-gradient(to top, rgb(var(--ei-deep-indigo-rgb) / 0.035) 0%, rgb(var(--ei-luxe-violet-rgb) / 0.015) 30%, transparent 70%)',
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
                            <motion.div variants={driftUp} className="text-center mb-8 md:mb-16">
                              <span className="ei-eyebrow ei-text-space-md block">Collaboration</span>
                              <h2 className="ei-section-title">How we work</h2>
                            </motion.div>

                            <div className="space-y-0 relative">
                              <motion.div
                                className="absolute left-6 md:left-8 top-0 bottom-0 w-[2px] pointer-events-none hidden md:block"
                                initial={{ opacity: 0, scaleY: 0 }}
                                whileInView={{ opacity: 1, scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                style={{
                                  background: 'linear-gradient(to bottom, rgb(var(--ei-luxe-violet-rgb) / 0.15) 0%, rgb(var(--ei-deep-indigo-rgb) / 0.2) 20%, rgb(var(--ei-luxe-violet-rgb) / 0.2) 50%, rgb(var(--ei-deep-indigo-rgb) / 0.2) 80%, rgb(var(--ei-luxe-violet-rgb) / 0.15) 100%)',
                                  transformOrigin: 'top',
                                  filter: 'blur(0.5px)',
                                }}
                              />

                              {phases.map((phase, i) => (
                                <motion.div key={phase.label} variants={driftUp} className="group relative">
                                  {i < phases.length - 1 && (
                                    <motion.div
                                      className="absolute left-6 md:left-8 top-[5rem] md:top-[5.5rem] w-[2px] h-[calc(100%-4rem)] pointer-events-none hidden md:block"
                                      initial={{ opacity: 0 }}
                                      whileInView={{ opacity: 1 }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                                      style={{
                                        background: 'linear-gradient(to bottom, rgb(var(--ei-luxe-violet-rgb) / 0.12) 0%, rgb(var(--ei-deep-indigo-rgb) / 0.06) 50%, rgb(var(--ei-luxe-violet-rgb) / 0.03) 100%)',
                                      }}
                                    />
                                  )}

                                  <div className="flex gap-5 md:gap-12 py-7 md:py-12">
                                    <div className="flex-shrink-0 w-10 md:w-16 flex flex-col items-center relative">
                                      <motion.div
                                        className="absolute w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                        style={{
                                          background: 'radial-gradient(circle, rgb(var(--ei-luxe-violet-rgb) / 0.15) 0%, transparent 70%)',
                                          filter: 'blur(8px)',
                                        }}
                                      />

                                      <div
                                        className="relative w-2.5 h-2.5 md:w-3 md:h-3 opacity-60 group-hover:opacity-100 transition-all duration-500"
                                        style={{
                                          background: 'linear-gradient(135deg, rgb(var(--ei-luxe-violet-rgb) / 0.8) 0%, rgb(var(--ei-deep-indigo-rgb) / 0.6) 100%)',
                                          transform: 'rotate(45deg)',
                                          boxShadow: '0 0 12px rgb(var(--ei-luxe-violet-rgb) / 0.3)',
                                        }}
                                      />

                                      <span className="font-structural text-[10px] tracking-[0.2em] uppercase text-white/45 group-hover:text-white/52 transition-colors duration-500 mt-2 md:mt-3">{String(i + 1).padStart(2, '0')}</span>
                                    </div>

                                    <div className="flex-1 space-y-3 md:space-y-4">
                                      <h3 className="font-structural text-[13px] md:text-[14px] tracking-[0.08em] uppercase text-white/72 group-hover:text-white/90 transition-colors duration-500">{phase.label}</h3>
                                      <p className="font-structural text-[13px] md:text-[14px] leading-[1.6] md:leading-[1.75] text-white/60 group-hover:text-white/72 transition-colors duration-500 max-w-[44ch]">{phase.description}</p>
                                    </div>
                                  </div>

                                  {i < phases.length - 1 && (
                                    <motion.div
                                      className="absolute left-0 right-0 bottom-0 h-px pointer-events-none"
                                      initial={{ opacity: 0, scaleX: 0.9 }}
                                      whileInView={{ opacity: 1, scaleX: 1 }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                                      style={{
                                        background: 'linear-gradient(90deg, transparent 0%, rgb(var(--ei-luxe-violet-rgb) / 0.08) 20%, rgb(var(--ei-deep-indigo-rgb) / 0.06) 50%, rgb(var(--ei-luxe-violet-rgb) / 0.08) 80%, transparent 100%)',
                                      }}
                                    />
                                  )}
                                </motion.div>
                              ))}
                            </div>

                            <motion.div variants={blurEmergence} className="mt-8 md:mt-16 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgb(var(--ei-luxe-violet-rgb) / 0.08) 30%, rgb(var(--ei-deep-indigo-rgb) / 0.08) 70%, transparent 100%)' }} />
                          </motion.div>
                        </Container>
                      </Section>
                    );
                  }
