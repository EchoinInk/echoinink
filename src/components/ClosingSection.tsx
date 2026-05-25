import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import { 
  driftUp, 
  staggerContainer,
  STAGGER,
  VIEWPORT 
} from '@/lib/motion-cinematic';

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden ei-section-closing text-center">
      {/* Reverent atmospheric framing */}
      <div className="absolute inset-0 ei-glow-violet opacity-60" />
      <div className="absolute inset-0 ei-vignette-soft" />

      {/* Sacred top gradient from previous section */}
      <div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, transparent, rgba(15,18,32,0.4))',
        }}
      />

      <motion.div 
        className="relative z-10 max-w-3xl mx-auto px-6"
        variants={staggerContainer(STAGGER.cinematic, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.loose}
      >
        {/* Eyebrow */}
        <motion.span
          variants={driftUp}
          className="ei-eyebrow ei-text-space-xl block"
        >
          Let's Create
        </motion.span>

        {/* Heading */}
        <motion.h2
          variants={driftUp}
          className="ei-section-title whitespace-pre-line"
        >
          {"Ready to translate\nyour world?"}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={driftUp}
          className="ei-section-description mt-8 mx-auto"
        >
          If the resonance is there, we'll build the language your inner world has been waiting for.
        </motion.p>

        {/* CTA */}
        <motion.div variants={driftUp} className="mt-12">
          <Button to="/contact">Work With the Studio</Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
