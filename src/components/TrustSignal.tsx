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
// TRUST SIGNAL — Restrained trust mechanism
// Understated, elegant, editorial — feels authored, not marketed
// ═══════════════════════════════════════════════════════════════

const projectTypes = [
  { category: 'Identity', context: 'For brands becoming' },
  { category: 'Websites', context: 'For worlds unfolding' },
  { category: 'Direction', context: 'For clarity emerging' },
  { category: 'Systems', context: 'For coherence holding' },
];

export function TrustSignal() {
  return (
    <Section spacing="sm" className="relative overflow-hidden py-8 md:py-10">
      {/* Atmospheric depth — whisper-level */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 30% at 50% 50%, rgb(var(--ei-midnight-rgb) / 0.02) 0%, transparent 60%)',
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
          {/* Eyebrow — quiet indicator */}
          <motion.div variants={driftUp} className="text-center mb-8">
            <span className="font-structural text-[10px] tracking-[0.22em] uppercase text-white/55">
              Currently shaping
            </span>
          </motion.div>

          {/* Project types — horizontal, understated, editorial */}
          <motion.div
            variants={blurEmergence}
            className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12"
          >
            {projectTypes.map((type, i) => (
              <motion.div
                key={type.category}
                variants={driftUp}
                className="group text-center"
              >
                <span className="font-structural text-[12px] md:text-[13px] tracking-[0.1em] uppercase text-white/65 group-hover:text-white/80 transition-colors duration-500 block">
                  {type.category}
                </span>
                <span className="font-editorial text-[12px] md:text-[13px] italic text-white/50 group-hover:text-white/62 transition-colors duration-500 block mt-1">
                  {type.context}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Quiet separator */}
          <motion.div
            variants={blurEmergence}
            className="mt-8 md:mt-12 w-full h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgb(var(--ei-luxe-violet-rgb) / 0.05) 30%, rgb(var(--ei-midnight-rgb) / 0.05) 70%, transparent 100%)',
            }}
          />
        </motion.div>
      </Container>
    </Section>
  );
}

export default TrustSignal;
