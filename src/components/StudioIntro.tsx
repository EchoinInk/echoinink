import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

export function StudioIntro() {
  return (
    <section className="relative ei-section py-32 md:py-48 lg:py-56 overflow-hidden">
      {/* Atmospheric depth accent — soft violet cloud, right side */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          right: '-8%',
          width: 'clamp(320px, 42vw, 640px)',
          height: 'clamp(320px, 42vw, 640px)',
          background: 'radial-gradient(ellipse 68% 68% at 70% 44%, rgba(168,85,247,0.055) 0%, transparent 72%)',
          filter: 'blur(90px)',
        }}
      />
      {/* Warm hint — lower left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '5%',
          left: '-4%',
          width: 'clamp(200px, 28vw, 420px)',
          height: 'clamp(200px, 28vw, 420px)',
          background: 'radial-gradient(ellipse 70% 70% at 32% 60%, rgba(232,121,249,0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="ei-container">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, ease: EASE, delay: 0 }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-12 md:mb-16"
          >
            Studio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.15, ease: EASE, delay: 0.12 }}
            className="font-editorial text-[2rem] md:text-[2.6rem] lg:text-[3.2rem] text-[#E8EAF6]/80 leading-[1.17] mb-10 md:mb-14"
            style={{ letterSpacing: '-0.012em' }}
          >
            Where identity meets atmosphere,
            <br className="hidden md:block" />
            and stories find their form.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.24 }}
            className="font-structural text-[14px] md:text-[15px] text-white/40 leading-[1.88] max-w-[28rem]"
          >
            Echo in Ink is a creative studio at the intersection of art, emotion,
            and digital world-building. We craft immersive experiences, atmospheric
            narratives, and experimental visual media — work that lives at the edge
            of feeling and form.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
