import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Philosophy() {
  return (
    <section className="relative ei-section py-32 md:py-52 overflow-hidden">
      {/* Faint indigo atmospheric center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 65% at 50% 50%, rgba(99,102,241,0.04) 0%, transparent 72%)',
        }}
      />

      {/* Thin separator above */}
      <div className="ei-container mb-24 md:mb-36">
        <div
          className="w-full h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.06) 75%, transparent)',
          }}
        />
      </div>

      <div className="ei-container">
        <div className="max-w-2xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: EASE, delay: 0 }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-12 md:mb-16"
          >
            Approach
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.3, ease: EASE, delay: 0.12 }}
            className="font-editorial text-[1.55rem] md:text-[2rem] lg:text-[2.4rem] text-[#E8EAF6]/75 leading-[1.42] mb-12 md:mb-16"
            style={{ letterSpacing: '-0.008em' }}
          >
            We believe design is a form of emotional authorship.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.28 }}
            className="font-structural text-[13px] md:text-[14px] text-white/35 leading-[1.95] max-w-[22rem] mx-auto"
          >
            Every project begins not with what it should look like, but what it
            should feel like. From that feeling, form emerges — atmospheric,
            intentional, authored.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
