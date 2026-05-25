import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GlowField, GrainOverlay } from './AtmosphericSystem';
import lumocloudform from '@/assets/lumocasestudy.png';
import { Section } from '@/components/layout/Section';
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
<Section spacing="lg" className="pb-4 md:pb-6 overflow-hidden">

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
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] h-[400px]">

  {/* BACKGROUND IMAGE */}
  <img
    src={lumocloudform}
    alt="Lumo Indigo Cloudform"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* OPTIONAL: dark overlay for readability */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

  {/* CONTENT */}
  <div className="relative grid md:grid-cols-2 items-center p-16">

    {/* LEFT SIDE TEXT */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={container}
      className="flex flex-col justify-center"
    >
      <motion.p
        variants={line}
        className="uppercase text-[11px] tracking-[0.3em] text-white/40 mb-6 font-structural"
      >
        Featured Case
      </motion.p>

      <motion.h2
        variants={line}
        className="font-editorial text-5xl font-light leading-tight"
      >
        LUMO
      </motion.h2>

<motion.h3
  variants={line}
  className="font-editorial text-2xl font-light leading-snug mt-2"
>
  A World Built for<br />
  Overwhelmed Humans
</motion.h3>


      <motion.p
        variants={line}
        className="mt-6 text-white/70 leading-relaxed font-structural text-[14px] max-w-[48ch]"
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

    {/* RIGHT SIDE EMPTY (image is bg) */}
    <div className="hidden md:block" />

  </div>
</div>
    </Section>
  );
}