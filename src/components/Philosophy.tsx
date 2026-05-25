import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { 
  fadeSoft, 
  driftUp, 
  staggerContainer, 
  STAGGER,
  DURATION,
  EASE_CINEMATIC,
  VIEWPORT 
} from '@/lib/motion-cinematic';

export function Philosophy() {
  const paragraphs = [
    "Some things are felt long before they can be articulated.",
    "Echo in Ink exists for founders, artists, and visionaries carrying something real beneath the surface — something difficult to translate clearly without losing its texture.",
    "This studio was built to preserve that texture.",
    "Through identity, atmosphere, narrative, and systems, we create work that feels coherent, emotionally precise, and unmistakably true."
  ];

  return (
    <Section spacing="lg" className="ei-section-standard overflow-hidden relative">
      {/* Unified soft atmosphere */}
      <div className="absolute inset-0 ei-glow-indigo opacity-60" />

      <Container>
        <motion.div 
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
        >
          {/* Left column — Section heading */}
          <motion.div variants={staggerContainer(STAGGER.loose, 0)}>
            <motion.span 
              variants={driftUp}
              className="ei-eyebrow ei-text-space-md block"
            >
              Philosophy
            </motion.span>
            
            <motion.h2 
              variants={driftUp}
              className="ei-section-title ei-text-space-lg whitespace-pre-line"
            >
              {"Atmosphere is not decoration —\nit is how meaning is felt."}
            </motion.h2>
            
            <motion.p 
              variants={driftUp}
              className="ei-section-description"
            >
              Everything begins with emotional truth: a feeling, a tension, a memory, a fragment of identity waiting for language. Echo in Ink builds the worlds those things belong to.
            </motion.p>
          </motion.div>

          {/* Right column — Editorial text block */}
          <motion.div 
            className="ei-text-block mt-4 md:mt-8"
            variants={staggerContainer(STAGGER.normal, 0.3)}
          >
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                variants={fadeSoft}
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
