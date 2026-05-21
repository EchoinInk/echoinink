import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import bgWide from '@/assets/ei-hero-bg-dark-21x9.png';
import { EASE, DURATION, VIEWPORT, STAGGER } from '@/lib/motion';

export function ClosingSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '52vh' }}>
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
              'radial-gradient(ellipse 55% 65% at 50% 52%, rgba(99,102,241,0.055) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: '58vh', paddingTop: '8vh', paddingBottom: '10vh' }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT.normal}
          transition={{ duration: DURATION.slow, ease: EASE }}
          className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-8"
        >
          Echo in Ink
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT.normal}
          transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.tight }}
          className="font-editorial text-[1.8rem] md:text-[2.5rem] lg:text-[3.1rem] text-[#E8EAF6]/85 leading-[1.24] mb-8 max-w-4xl"
          style={{ letterSpacing: '-0.008em' }}
        >
          Step deeper into the world.
        </motion.h2>

        {/* Body paragraphs */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT.normal}
          transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.tight * 2 }}
          className="font-structural text-[14px] md:text-[15px] text-white/35 leading-[1.85] max-w-[38ch] mb-6 md:mb-7"
        >
          Echo in Ink is an ongoing exploration — a living archive of stories,
          atmospheres, and luminous digital experiments.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT.normal}
          transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.tight * 3 }}
          className="font-structural text-[14px] md:text-[15px] text-white/30 leading-[1.85] max-w-[38ch] mb-9 md:mb-11"
        >
          If something here resonates, stay a while. Wander.
          <br />
          There's more to discover in the quiet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT.normal}
          transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.tight * 4 }}
        >
          <Link
            to="/works"
            className="ei-gradient-border-btn relative inline-flex items-center justify-center px-8 py-3.5 font-structural text-[11px] tracking-[0.2em] uppercase text-white/85 transition-all duration-700 hover:text-white hover:bg-white/5"
          >
            <span className="relative z-10">Enter the Archive</span>
          </Link>
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
