import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import {
  blurEmergence,
  driftUp,
  staggerContainer,
  STAGGER,
  VIEWPORT,
  EASE_LUXURY,
  DURATION,
} from '@/lib/motion-cinematic';

export function Philosophy() {
  const paragraphs = [
    "Some things are felt long before they can be said.",
    "Echo in Ink exists for founders, artists, and visionaries carrying something real beneath the surface — something difficult to translate without losing its texture.",
    "This studio was built to preserve that texture.",
    "Through identity, atmosphere, and narrative, we create work that feels coherent, precise, and true."
  ];

  return (
    <Section spacing="sm" className="ei-section-standard overflow-hidden relative">
      {/* Soft atmospheric continuation */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 30% 40%, rgba(99,102,241,0.02) 0%, transparent 60%)',
          filter: 'blur(50px)',
        }}
      />

      <Container>
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
        >
          {/* Left column — Section heading with blur emergence */}
          <motion.div variants={staggerContainer(STAGGER.loose, 0)}>
            <motion.span
              variants={driftUp}
              className="ei-eyebrow ei-text-space-md block"
            >
              Philosophy
            </motion.span>

            <motion.h2
              variants={blurEmergence}
              className="ei-section-title ei-text-space-lg whitespace-pre-line"
            >
              {"Atmosphere is not decoration —\nit is how meaning is felt."}
            </motion.h2>

            <motion.p
              variants={driftUp}
              className="ei-section-description"
            >
              Everything begins with emotional truth: a feeling, a tension, a memory waiting for language.
            </motion.p>
          </motion.div>

          {/* Right column — Editorial text block with cinematic reveal */}
          <motion.div
            className="mt-4 md:mt-8"
            variants={staggerContainer(STAGGER.normal, 0.3)}
          >
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                variants={blurEmergence}
                custom={i}
                className="ei-body-large"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
