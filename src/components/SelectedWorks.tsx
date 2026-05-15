import { motion } from 'framer-motion';
import watercolor from '@/assets/watercolor.png';
import monogramGlow from '@/assets/monogram-balanced-glow.png';
import monogramThree from '@/assets/monogram-balanced-3.png';

const EASE = [0.22, 1, 0.36, 1] as const;

const works = [
  {
    index: '01',
    title: 'Resonance Studies',
    category: 'Visual Identity',
    description:
      'An exploration of how identity dissolves and reforms — built from atmospheric memory, sound, and layered visual texture.',
    image: watercolor,
    imageAlt: 'Resonance Studies',
    overlayGradient:
      'radial-gradient(ellipse 70% 80% at 55% 50%, rgba(168,85,247,0.18) 0%, rgba(99,102,241,0.10) 50%, transparent 80%)',
  },
  {
    index: '02',
    title: 'Luminous Archive',
    category: 'Atmospheric Media',
    description:
      'A world constructed from light and language — where observation changes the observed, and luminosity becomes narrative.',
    image: monogramGlow,
    imageAlt: 'Luminous Archive',
    overlayGradient:
      'radial-gradient(ellipse 65% 75% at 48% 52%, rgba(30,200,255,0.14) 0%, rgba(99,102,241,0.08) 55%, transparent 82%)',
  },
  {
    index: '03',
    title: 'Ink Garden',
    category: 'Immersive Experience',
    description:
      'A digital garden where language dissolves into texture. An invitation to wander — through symbol, form, and silence.',
    image: monogramThree,
    imageAlt: 'Ink Garden',
    overlayGradient:
      'radial-gradient(ellipse 72% 70% at 44% 55%, rgba(232,121,249,0.16) 0%, rgba(168,85,247,0.09) 50%, transparent 80%)',
  },
] as const;

type Work = (typeof works)[number];

function WorkEntry({ work, reverse, index }: { work: Work; reverse: boolean; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.3, ease: EASE, delay: 0 }}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-16 lg:gap-24 items-center`}
    >
      {/* Text block */}
      <div className={`flex-1 flex flex-col ${reverse ? 'md:items-end md:text-right' : 'md:items-start'}`}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE, delay: 0.15 + index * 0.05 }}
          className="font-structural text-[10px] tracking-[0.32em] text-white/20 mb-5 block"
        >
          {work.index}
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.2 + index * 0.05 }}
          className="font-editorial text-[1.65rem] md:text-[2rem] lg:text-[2.4rem] text-[#E8EAF6]/80 leading-[1.15] mb-4"
          style={{ letterSpacing: '-0.01em' }}
        >
          {work.title}
        </motion.h3>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.28 + index * 0.05 }}
          className="font-structural text-[10px] tracking-[0.22em] uppercase text-white/30 mb-7 block"
        >
          {work.category}
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.32 + index * 0.05 }}
          className="font-structural text-[13px] md:text-[14px] text-white/40 leading-[1.88] max-w-[22rem]"
        >
          {work.description}
        </motion.p>
      </div>

      {/* Image panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.08 }}
        className="flex-shrink-0 w-full md:w-[52%] lg:w-[50%]"
      >
        <div
          className="relative overflow-hidden group"
          style={{ aspectRatio: '16 / 10', backgroundColor: '#08090F' }}
        >
          {/* Base image */}
          <img
            src={work.image}
            alt={work.imageAlt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
            style={{
              opacity: 0.45,
              filter: 'brightness(0.65) saturate(0.85)',
            }}
          />

          {/* Atmospheric tint overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: work.overlayGradient, mixBlendMode: 'screen' }}
          />

          {/* Cinematic edge vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(5,7,14,0.55) 100%)',
            }}
          />

          {/* Hover reveal: category label */}
          <div className="absolute bottom-5 left-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
            <span className="font-structural text-[9px] tracking-[0.3em] uppercase text-white/40">
              {work.category}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export function SelectedWorks() {
  return (
    <section className="relative ei-section py-16 md:py-24 overflow-hidden">
      {/* Atmospheric background hint */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70vw',
          height: '60vw',
          background:
            'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(99,102,241,0.03) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Section label */}
      <div className="ei-container mb-16 md:mb-24">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: EASE }}
          className="font-structural text-[10px] tracking-[0.38em] uppercase text-white/20"
        >
          Selected Works
        </motion.span>
      </div>

      {/* Separator */}
      <div className="ei-container mb-16 md:mb-24">
        <div
          className="w-full h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 25%, rgba(255,255,255,0.07) 75%, transparent)',
          }}
        />
      </div>

      {/* Work entries */}
      <div className="ei-container space-y-28 md:space-y-44">
        {works.map((work, i) => (
          <WorkEntry key={work.index} work={work} reverse={i % 2 === 1} index={i} />
        ))}
      </div>
    </section>
  );
}
