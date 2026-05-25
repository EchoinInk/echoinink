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
      {/* Reverent atmospheric framing - reduced visibility */}
      <div className="absolute inset-0 ei-glow-violet opacity-25" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, rgba(5,7,16,0.2) 100%)' }} />

      {/* Soft top gradient from previous section */}
      <div 
        className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, transparent, rgba(12,14,24,0.25))',
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
          Begin
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
          If the resonance is there, we will build the language your work has been waiting for.
        </motion.p>

        {/* CTA */}
        <motion.div variants={driftUp} className="mt-12">
          <Button to="/contact">Start a Conversation</Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
