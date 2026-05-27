import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import {
  driftUp,
  blurEmergence,
  dissolveReveal,
  EASE_LUXURY,
  DURATION,
} from '@/lib/motion-cinematic';

export function ClosingSection() {
  return (
    <section className="relative py-10 md:py-20">
      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Eyebrow — quiet invitation */}
        <motion.span
          variants={dissolveReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: DURATION.slow, ease: EASE_LUXURY }}
          className="font-structural text-[10px] tracking-[0.28em] uppercase text-white/45 block mb-3 md:mb-4"
        >
          Begin
        </motion.span>

        {/* Heading — the question */}
        <motion.h2
          variants={blurEmergence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.05 }}
          className="font-editorial text-[2.1rem] md:text-[1.8rem] lg:text-[2.2rem] text-[var(--ei-stellar-lilac)] leading-[1.24] mb-3 md:mb-4"
          style={{ letterSpacing: '-0.01em' }}
        >
          Ready to translate your world?
        </motion.h2>

        {/* Description — emotional resonance */}
        <motion.p
          variants={driftUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.1 }}
          className="font-structural text-[15px] md:text-[16px] text-white/60 leading-[1.85] max-w-[40ch] mx-auto mb-6 md:mb-8"
        >
          Let's build something meaningful, atmospheric, and unforgettable.
        </motion.p>

        {/* CTA — refined invitation button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.15 }}
        >
          <Button to="/contact" variant="primary">
            Start a Conversation
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
