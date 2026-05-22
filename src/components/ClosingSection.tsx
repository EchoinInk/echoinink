import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GlowField, GrainOverlay } from './AtmosphericSystem';
import { EASE, DURATION, VIEWPORT, STAGGER } from '@/lib/motion';

export function ClosingSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: '58vh',
        background: 'linear-gradient(180deg, #080A14 0%, #0B0E1A 40%, #0A0D18 100%)',
      }}
    >
      {/* Unified atmospheric system — single radial bloom */}
      <GlowField
        style={{
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(480px, 65vw, 900px)',
          height: 'clamp(360px, 45vw, 550px)',
        }}
        gradient="radial-gradient(ellipse 48% 42% at 50% 55%, rgba(99,102,241,0.05) 0%, rgba(80,72,200,0.015) 55%, transparent 80%)"
        blur={76}
        anim={{ opacity: [0.4, 0.65, 0.4] }}
        duration={46}
      />
      {/* Minimal grain texture */}
      <GrainOverlay range={[0.008, 0.015]} duration={38} delay={4} size={220} />

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT.normal}
          transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.tight }}
          className="font-editorial text-[1.7rem] md:text-[2.4rem] lg:text-[3rem] text-[#E8EAF6]/75 leading-[1.22] mb-8 max-w-4xl"
          style={{ letterSpacing: '-0.008em' }}
        >
          Some things become clearer once they are seen properly.
        </motion.h2>

        {/* Archive description — single authoritative statement */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT.normal}
          transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.tight * 2 }}
          className="font-structural text-[14px] md:text-[15px] text-white/40 leading-[1.8] max-w-[40ch] mb-10 md:mb-12"
        >
          Echo in Ink is an ongoing exploration — a living archive of stories, atmospheres, and luminous digital experiments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT.normal}
          transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.tight * 3 }}
        >
          <Link
            to="/works"
            className="group relative inline-flex items-center gap-2.5 font-structural text-[11px] tracking-[0.24em] uppercase text-white/50 transition-colors duration-700 ease-out hover:text-white/75"
          >
            <span>Enter the Studio</span>
            <span className="inline-block transition-transform duration-700 ease-out group-hover:translate-x-[2px]">
              →
            </span>
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
