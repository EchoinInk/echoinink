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
// WHY PEOPLE COME HERE — Micro-section, editorial list
// Restrained, resonant, authored — not a feature list
// ═══════════════════════════════════════════════════════════════

const reasons = [
  'clarity',
  'identity',
  'atmosphere',
  'narrative cohesion',
  'creative direction',
  'reflective tools',
];

export function WhyPeopleComeHere() {
  return (
    <Section spacing="sm" className="relative overflow-hidden">
      {/* Whisper-level atmospheric layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
            background:
              'radial-gradient(ellipse 40% 50% at 50% 50%, rgb(113, 7, 234 / 0.025) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <Container size="md">
        <motion.div
          variants={staggerContainer(STAGGER.loose, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.span
            variants={driftUp}
            className="font-structural text-[9px] tracking-[0.32em] uppercase text-white/60 block mb-6"
          >
            People come to Echo in Ink for
          </motion.span>

          {/* Top divider */}
          <motion.div
            variants={blurEmergence}
            className="w-full h-px mb-8"
            style={{
                background:
                  'linear-gradient(90deg, transparent 0%, rgb(var(--ei-ice-white-rgb) / 0.06) 20%, rgb(113, 7, 234 / 0.12) 50%, rgb(var(--ei-ice-white-rgb) / 0.06) 80%, transparent 100%)',
            }}
          />

          {/* Reasons — horizontal flowing editorial list */}
          <motion.div
            variants={blurEmergence}
            className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-8 md:gap-y-4"
          >
            {reasons.map((reason, i) => (
              <motion.span
                key={reason}
                variants={driftUp}
                className="font-editorial italic text-[1rem] md:text-[1.1rem] text-white/60 hover:text-white/80 transition-colors duration-500"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                — {reason}
              </motion.span>
            ))}
          </motion.div>

          {/* Bottom divider */}
          <motion.div
            variants={blurEmergence}
            className="w-full h-px mt-8"
            style={{
                background:
                  'linear-gradient(90deg, transparent 0%, rgb(var(--ei-ice-white-rgb) / 0.06) 20%, rgb(113, 7, 234 / 0.12) 50%, rgb(var(--ei-ice-white-rgb) / 0.06) 80%, transparent 100%)',
            }}
          />
        </motion.div>
      </Container>
    </Section>
  );
}
