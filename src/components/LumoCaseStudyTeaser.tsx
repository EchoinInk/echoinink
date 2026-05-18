import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GlowField, GrainOverlay } from './AtmosphericSystem';

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.10, delayChildren: 0.15 },
  },
};

const line = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function LumoCaseStudyTeaser() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #060810 0%, #0a0d1f 50%, #060810 100%)' }}
    >
      {/* Ambient glow — primary violet, upper-left drift */}
      <GlowField
        style={{
          top: '-10%', left: '-10%',
          width: 'clamp(480px, 68vw, 940px)',
          height: 'clamp(480px, 68vw, 940px)',
        }}
        gradient="radial-gradient(ellipse 50% 46% at 38% 42%, rgba(99,102,241,0.095) 0%, rgba(80,72,200,0.036) 46%, transparent 70%)"
        blur={88}
        anim={{ opacity: [0.62, 1, 0.62], scale: [1, 1.028, 1] }}
        duration={34}
      />
      {/* Ambient glow — secondary, lower-right offset */}
      <GlowField
        style={{
          bottom: '-8%', right: '-8%',
          width: 'clamp(300px, 42vw, 620px)',
          height: 'clamp(300px, 42vw, 620px)',
        }}
        gradient="radial-gradient(ellipse 55% 55% at 50% 50%, rgba(88,65,182,0.050) 0%, transparent 70%)"
        blur={72}
        anim={{ opacity: [0.38, 0.76, 0.38] }}
        duration={40}
        delay={9}
      />
      <GrainOverlay range={[0.012, 0.030]} duration={32} delay={4} size={200} />

      <div className="ei-container py-24 md:py-44">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={container}
          className="max-w-[680px]"
        >
          <motion.h2
            variants={line}
            className="font-editorial text-[1.9rem] md:text-[2.9rem] lg:text-[3.6rem] text-[#E8EAF6]/80 leading-[1.16] mb-8 md:mb-10"
            style={{ letterSpacing: '-0.018em' }}
          >
            LUMO — A World Built
            <br className="hidden md:block" />
            for Overwhelmed Humans
          </motion.h2>

          <motion.p
            variants={line}
            className="font-structural text-[13px] md:text-[14px] text-white/40 leading-[1.95] max-w-[54ch] mb-4"
          >
            A product shaped through emotional intelligence, adaptive systems, and humane design.
          </motion.p>

          <motion.p
            variants={line}
            className="font-structural text-[13px] md:text-[14px] text-white/30 leading-[1.95] max-w-[46ch] mb-14 md:mb-20"
          >
            Not just an app — a world built to help people exhale.
          </motion.p>

          <motion.div variants={line}>
            <Link
              to="/work/lumo"
              className="group inline-flex items-center gap-3 font-structural text-[11px] tracking-[0.28em] uppercase text-white/40 transition-colors duration-500 ease-out hover:text-white/70"
            >
              <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-[3px]">
                →
              </span>
              <span>Enter the Case Study</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom blend into case study */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0"
        style={{ height: '80px', background: 'linear-gradient(to bottom, transparent, #060810)' }}
      />
    </section>
  );
}
