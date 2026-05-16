import { motion } from 'framer-motion';
import bgWide from '@/assets/ei-hero-bg-dark-21x9.png';

const EASE = [0.22, 1, 0.36, 1] as const;

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '68vh' }}>
      {/* Background — atmospheric image at low opacity */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgWide})`, opacity: 0.28 }}
        />

        {/* Top fade — blends from page background into image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, #0F1220 0%, rgba(15,18,32,0.6) 20%, transparent 42%, transparent 62%, rgba(15,18,32,0.65) 82%, #0F1220 100%)',
          }}
        />

        {/* Subtle indigo center bloom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 55% 65% at 50% 52%, rgba(99,102,241,0.07) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: '68vh', paddingTop: '10vh', paddingBottom: '14vh' }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE }}
          className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-12"
        >
          Echo in Ink
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.12 }}
          className="font-editorial text-[1.9rem] md:text-[2.6rem] lg:text-[3.2rem] text-[#E8EAF6]/80 leading-[1.22] mb-10 max-w-[28rem]"
          style={{ letterSpacing: '-0.01em' }}
        >
          Step deeper into the world.
        </motion.h2>

        {/* Body paragraphs */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.26 }}
          className="font-structural text-[13px] md:text-[14px] text-white/30 leading-[1.95] max-w-[38ch] mb-5"
        >
          Echo in Ink is an ongoing exploration — a living archive of stories,
          atmospheres, and luminous digital experiments.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.36 }}
          className="font-structural text-[13px] md:text-[14px] text-white/25 leading-[1.95] max-w-[34ch] mb-12"
        >
          If something here resonates, stay a while. Wander.
          <br />
          There's more to discover in the quiet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.48 }}
        >
          <button className="ei-gradient-border-btn relative inline-flex items-center justify-center px-8 py-3.5 font-structural text-[11px] tracking-[0.2em] uppercase text-white/85 transition-all duration-500 hover:text-white hover:scale-[1.02]">
            <span className="relative z-10">Enter the Archive</span>
          </button>
        </motion.div>
      </div>

      {/* Page footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 pb-8 md:pb-12 z-10"
      >
        <div className="ei-container">
          <div className="flex items-end justify-between">
            <span className="font-structural text-[9px] tracking-[0.28em] uppercase text-white/20">
              INK MEETS LIGHT.
            </span>
            <span className="font-structural text-[9px] tracking-[0.28em] uppercase text-white/20">
              EMOTIONS BECOME DESIGN.
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
