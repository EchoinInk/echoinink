import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GlowField, GrainOverlay } from './AtmosphericSystem';
import lumocloudform from '@/assets/lumocasestudy.png';
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
    <section className="relative bg-[#040816] px-8 py-32 text-white overflow-hidden">
      {/* Atmospheric glow */}
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

      {/* Grain */}
      <GrainOverlay range={[0.008, 0.015]} duration={36} delay={6} size={220} />

      {/* CARD */}
      <div className="max-w-7xl mx-auto overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03]">
        <div className="grid md:grid-cols-2 items-center">
          
          {/* LEFT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={container}
            className="p-16"
          >
            <motion.p
              variants={line}
              className="uppercase text-[11px] tracking-[0.3em] text-white/30 mb-6 font-structural"
            >
              Featured Case
            </motion.p>

            <motion.h2
              variants={line}
              className="font-editorial text-5xl font-light leading-tight"
            >
              LUMO
            </motion.h2>

            <motion.p
              variants={line}
              className="mt-6 text-white/60 leading-relaxed font-structural text-[14px] max-w-[48ch]"
            >
              A world built for overwhelmed humans. Emotional identity systems
              designed to calm cognitive noise.
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

          {/* RIGHT SIDE — CLOUD IMAGE */}
          <div className="h-full min-h-[500px]">
            <img
              src={lumo}
              alt="Lumo Indigo Cloudform"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}