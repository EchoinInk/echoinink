import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GlowField, GrainOverlay } from './AtmosphericSystem';
import featuredcaseImage from '@/assets/lumocasestudy.png';
import { EASE, DURATION } from '@/lib/motion';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.10, delayChildren: 0.15 },
  },
};

const line = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE },
  },
};

export function LumoCaseStudyTeaser() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${featuredcaseImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Atmospheric overlays */}
      <GlowField
        style={{
          top: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(600px, 80vw, 1100px)',
          height: 'clamp(420px, 55vw, 700px)',
        }}
        gradient="radial-gradient(ellipse 55% 45% at 50% 60%, rgba(99,102,241,0.06) 0%, rgba(80,72,200,0.02) 50%, transparent 75%)"
        blur={90}
        anim={{ opacity: [0.45, 0.75, 0.45] }}
        duration={46}
      />

      <GrainOverlay range={[0.008, 0.015]} duration={36} delay={6} size={220} />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-[#040816]/60 mix-blend-multiply backdrop-blur-[2px]" />

      {/* Text Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={container}
        className="relative z-10 text-center px-8 max-w-3xl"
      >
        <motion.p
          variants={line}
          className="uppercase text-[11px] tracking-[0.3em] text-white/40 mb-6 font-structural"
        >
          Featured Case
        </motion.p>

        <motion.h1
          variants={line}
          className="font-editorial text-5xl md:text-6xl font-light leading-tight mb-6"
        >
          LUMO
        </motion.h1>

        <motion.p
          variants={line}
          className="font-structural text-[14px] text-white/60 leading-relaxed max-w-[48ch] mx-auto"
        >
          A world built for overwhelmed humans. Emotional identity systems designed to calm cognitive noise.
        </motion.p>

        <motion.div variants={line}>
          <Link
            to="/work/lumo"
            className="mt-10 inline-block text-violet-300 uppercase tracking-[0.2em] text-sm font-structural hover:text-violet-200 transition-colors duration-500"
          >
            View Case Study →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}