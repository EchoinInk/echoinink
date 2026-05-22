import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GlowField, GrainOverlay } from './AtmosphericSystem';

import { EASE, DURATION, VIEWPORT, STAGGER } from '@/lib/motion';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.10, delayChildren: 0.15 },
  },
};

const line = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.normal, ease: EASE } },
};

export function LumoCaseStudyTeaser() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #060810 0%, #0B0E1A 50%, #080A14 100%)' }}
    >
      {/* Unified atmospheric light source — indigo-violet bloom */}
      <GlowField
        style={{
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(560px, 75vw, 1000px)',
          height: 'clamp(400px, 50vw, 600px)',
        }}
        gradient="radial-gradient(ellipse 50% 40% at 50% 60%, rgba(99,102,241,0.06) 0%, rgba(80,72,200,0.02) 50%, transparent 75%)"
        blur={80}
        anim={{ opacity: [0.5, 0.75, 0.5] }}
        duration={42}
      />
      {/* Minimal grain — near imperceptible texture */}
      <GrainOverlay range={[0.008, 0.015]} duration={36} delay={6} size={220} />

      <div className="ei-container py-16 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={container}
          className="max-w-4xl"
        >
          <motion.h2
            variants={line}
            className="font-editorial text-[1.7rem] md:text-[2.5rem] lg:text-[3.1rem] text-[#E8EAF6]/80 leading-[1.16] mb-6 md:mb-8"
            style={{ letterSpacing: '-0.012em' }}
          >
            LUMO — A World Built for Overwhelmed Humans
          </motion.h2>

          <motion.p
            variants={line}
            className="font-structural text-[13px] md:text-[14px] text-white/55 leading-[1.85] max-w-[48ch] mb-3 md:mb-4"
          >
            An emotionally intelligent identity system designed to calm cognitive noise through atmosphere, rhythm, and restraint.
          </motion.p>

          <motion.p
            variants={line}
            className="font-structural text-[12px] md:text-[13px] text-white/35 leading-[1.9] max-w-[42ch] mb-8 md:mb-12 italic"
          >
            Built from feeling first — not features.
          </motion.p>

          <motion.div variants={line}>
            <Link
              to="/work/lumo"
              className="group inline-flex items-center gap-2.5 font-structural text-[11px] tracking-[0.26em] uppercase text-white/45 transition-colors duration-700 ease-out hover:text-white/65"
            >
              <span className="inline-block transition-transform duration-700 ease-out group-hover:translate-x-[2px]">
                →
              </span>
              <span>Enter the Case Study</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient bridge — soft transition to next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 md:h-32"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(6,8,16,0.5) 60%, #080A14)' }}
      />
    </section>
  );
}
