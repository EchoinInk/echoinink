import { motion } from 'framer-motion';

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
          className="font-editorial text-4xl md:text-6xl font-light text-white/90 leading-[1.15]"
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
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 px-10 py-5 rounded-full border border-violet-400/40 bg-white/5 hover:bg-white/10 transition font-structural tracking-[0.18em] uppercase text-[11px]"
        >
          Work With The Studio
        </motion.button>
      </div>
    </section>
  );
}
