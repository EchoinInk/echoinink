import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  blurEmergence,
  orchestratedReveal,
  EASE_LUXURY,
  DURATION,
  VIEWPORT,
  atmosphericFloat,
} from '@/lib/motion-cinematic';

// ═══════════════════════════════════════════════════════════════
// ORCHESTRATED OFFERINGS — Asymmetric hierarchy
// Identity is the dominant emotional anchor
// Sessions and Worlds are quieter supporting elements
// ═══════════════════════════════════════════════════════════════

const offerings = [
  {
    index: '01',
    title: 'Atmospheric Identity Kits',
    description:
      'Curated identity systems shaped through atmosphere, emotion, and visual storytelling — for creators, founders, and brands seeking clarity that feels authentically theirs.',
    cta: 'Explore Identity Systems',
    href: '/identity',
    hierarchy: 'primary', // Dominant card
    accent: 'violet',
  },
  {
    index: '02',
    title: 'Echo Sessions',
    description:
      'Premium 1:1 creative direction experiences for identity clarity, narrative positioning, and aesthetic alignment — when your work needs a witness and a direction.',
    cta: 'Begin a Session',
    href: '/sessions',
    hierarchy: 'secondary',
    accent: 'indigo',
  },
  {
    index: '03',
    title: 'Creative Universe Building',
    description:
      'Rare, selective collaborations to build immersive worlds around a brand, release, or creative vision — for those ready to invest in something that will be remembered.',
    cta: 'Build a World',
    href: '/worlds',
    hierarchy: 'secondary',
    accent: 'pink',
  },
] as const;

const accentMap = {
  violet: 'rgba(168,85,247,0.04)',
  indigo: 'rgba(99,102,241,0.035)',
  pink: 'rgba(232,121,249,0.03)',
};

export function WorkWithStudio() {
  return (
    <section className="relative ei-section py-28 md:py-44 overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════
          ATMOSPHERIC BACKDROP
          Soft volumetric haze — creates depth without demanding attention
          ═══════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary violet glow for Identity — stronger */}
        <motion.div
          className="absolute"
          animate={atmosphericFloat.animate}
          transition={atmosphericFloat.transition}
          style={{
            top: '8%',
            left: '-8%',
            width: 'clamp(320px, 42vw, 600px)',
            height: 'clamp(320px, 42vw, 600px)',
            background: `radial-gradient(ellipse 65% 65% at 35% 50%, ${accentMap.violet} 0%, transparent 70%)`,
            filter: 'blur(90px)',
          }}
        />
        {/* Secondary indigo — quieter */}
        <motion.div
          className="absolute"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.4, 0.5, 0.4],
          }}
          transition={{
            duration: DURATION.ambient * 2.2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
            delay: 1,
          }}
          style={{
            top: '45%',
            right: '-5%',
            width: 'clamp(200px, 28vw, 400px)',
            height: 'clamp(200px, 28vw, 400px)',
            background: `radial-gradient(ellipse 60% 60% at 60% 45%, ${accentMap.indigo} 0%, transparent 70%)`,
            filter: 'blur(75px)',
          }}
        />
        {/* Distant pink — faintest */}
        <motion.div
          className="absolute"
          animate={{
            y: [-8, 8, -8],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: DURATION.ambient * 2.8,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
            delay: 2,
          }}
          style={{
            bottom: '8%',
            left: '20%',
            width: 'clamp(180px, 24vw, 360px)',
            height: 'clamp(180px, 24vw, 360px)',
            background: `radial-gradient(ellipse 55% 55% at 50% 50%, ${accentMap.pink} 0%, transparent 70%)`,
            filter: 'blur(65px)',
          }}
        />
      </div>

      {/* Section entry separator */}
      <div className="ei-container mb-16 md:mb-24">
        <motion.div
          className="w-full h-px"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={VIEWPORT.normal}
          transition={{ duration: DURATION.slower, ease: EASE_LUXURY }}
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 75%, transparent)',
            transformOrigin: 'center',
          }}
        />
      </div>

      <div className="ei-container">
        <div className="max-w-5xl">
          {/* Section label */}
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.loose}
            transition={{ duration: DURATION.slow, ease: EASE_LUXURY }}
            className="block font-structural text-[10px] tracking-[0.28em] uppercase text-white/25 mb-14 md:mb-18"
          >
            Work With the Studio
          </motion.span>

          {/* Display heading — refined, more intentional spacing */}
          <motion.h2
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={VIEWPORT.loose}
            transition={{ duration: DURATION.slower, ease: EASE_LUXURY, delay: 0.1 }}
            className="font-editorial text-[1.9rem] md:text-[2.5rem] lg:text-[3rem] text-[#E8EAF6]/75 leading-[1.22] mb-8 md:mb-12 md:text-left text-center"
            style={{ letterSpacing: '-0.01em' }}
          >
            Authored creative direction
            <br className="hidden md:block" />
            <span className="text-white/50">for founders, artists, and makers.</span>
          </motion.h2>

          {/* Subheading — quieter, supporting */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.loose}
            transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.2 }}
            className="font-structural text-[13px] md:text-[14px] text-white/30 leading-[1.9] max-w-[52ch] mb-20 md:mb-28 md:text-left text-center"
          >
            Echo in Ink offers authored creative direction for founders, artists,
            and makers seeking clarity, identity, and atmosphere.
          </motion.p>

          {/* Top rule */}
          <motion.div
            className="w-full h-px mb-16 md:mb-20"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.slower, ease: EASE_LUXURY, delay: 0.1 }}
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.04) 65%, transparent 100%)',
              transformOrigin: 'left',
            }}
          />

          {/* ═══════════════════════════════════════════════════════════════
              ORCHESTRATED OFFERINGS LIST
              Asymmetric hierarchy: Identity dominates, others support
              ═══════════════════════════════════════════════════════════════ */}
          <div className="space-y-0">
            {offerings.map((item, i) => {
              const isPrimary = item.hierarchy === 'primary';
              const variants = orchestratedReveal(i, offerings.length);

              return (
                <motion.div
                  key={item.index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT.tight}
                  variants={variants}
                  className={`relative ${isPrimary ? 'pb-16 md:pb-20' : 'py-12 md:py-14'}`}
                >
                  {/* Primary card gets subtle atmospheric accent */}
                  {isPrimary && (
                    <div
                      className="absolute -inset-6 md:-inset-8 pointer-events-none opacity-40"
                      style={{
                        background: `radial-gradient(ellipse 70% 60% at 20% 50%, ${accentMap.violet} 0%, transparent 70%)`,
                        filter: 'blur(60px)',
                      }}
                    />
                  )}

                  <div className={`relative flex gap-6 md:gap-10 items-start ${isPrimary ? 'md:pl-4' : ''}`}>
                    {/* Index number */}
                    <span
                      className={`font-structural tracking-[0.24em] text-white/20 mt-2 shrink-0 w-6 ${
                        isPrimary ? 'text-[11px]' : 'text-[9px]'
                      }`}
                    >
                      {item.index}
                    </span>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className={`font-editorial text-[#E8EAF6]/80 leading-[1.18] mb-4 md:mb-5 ${
                          isPrimary
                            ? 'text-[1.6rem] md:text-[2rem] lg:text-[2.2rem]'
                            : 'text-[1.3rem] md:text-[1.6rem] text-[#E8EAF6]/60'
                        }`}
                        style={{ letterSpacing: '-0.01em' }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`font-structural leading-[1.85] max-w-[50ch] mb-6 md:mb-8 ${
                          isPrimary
                            ? 'text-[14px] md:text-[15px] text-white/40'
                            : 'text-[13px] md:text-[14px] text-white/30'
                        }`}
                      >
                        {item.description}
                      </p>

                      {/* CTA Button */}
                      <Link
                        to={item.href}
                        className={`ei-gradient-border-btn-refined inline-flex items-center justify-center font-structural uppercase transition-all duration-700 ${
                          isPrimary
                            ? 'px-7 py-3.5 text-[10px] tracking-[0.18em] text-white/85 hover:text-white/95'
                            : 'px-6 py-2.5 text-[9px] tracking-[0.2em] text-white/60 hover:text-white/80'
                        }`}
                      >
                        <span className="relative z-10">{item.cta}</span>
                      </Link>
                    </div>
                  </div>

                  {/* Separator — different style for primary vs secondary */}
                  {i < offerings.length - 1 && (
                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-px ${isPrimary ? 'mt-16 md:mt-20' : ''}`}
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={VIEWPORT.tight}
                      transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.1 }}
                      style={{
                        background: isPrimary
                          ? 'linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 70%, transparent 100%)'
                          : 'linear-gradient(90deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 60%, transparent 100%)',
                        transformOrigin: 'left',
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CINEMATIC BRIDGE
          Atmospheric transition to next section
          ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        className="absolute inset-x-0 bottom-0 pointer-events-none h-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: DURATION.slower, ease: EASE_LUXURY }}
        style={{
          background: `
            linear-gradient(to bottom, transparent 0%, rgba(99,102,241,0.015) 40%, rgba(5,7,16,0.3) 100%)
          `,
        }}
      />
    </section>
  );
}
