import { motion } from 'framer-motion';
import { EASE, DURATION, VIEWPORT, STAGGER } from '@/lib/motion';
import { Button } from '@/components/Button';

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden bg-[#040816] py-40 text-white text-center">
      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#6b4dff22,transparent_60%)]" />

      <div className="relative z-10 px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.38em] font-structural text-xs text-white/30 mb-8 font-structural"
        >
          Let’s Create
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
          className="font-editorial text-[2.1rem] font-light text-[#E8EAF6]/90 leading-[1.24] whitespace-pre-line"
        >
          Ready to translate your world?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 text-white/60 max-w-2xl mx-auto font-structural text-[14px] md:text-[15px] leading-[1.8]"
        >
          If the resonance is there, we’ll build the language your inner world
          has been waiting for.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT.normal}
          transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.tight }}
          className="mt-12"
        >
          <Button to="/contact">Work With the Studio</Button>
        </motion.div>

      </div>
    </section>
  );
}
