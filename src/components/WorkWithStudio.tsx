import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EASE, DURATION, VIEWPORT, STAGGER } from '@/lib/motion';

const offerings = [
  {
    index: '01',
    title: 'Atmospheric Identity Kits',
    description:
      'Curated identity systems shaped through atmosphere, emotion, and visual storytelling — for creators, founders, and brands seeking clarity that feels authentically theirs.',
    cta: 'Explore Identity Systems',
    href: '/identity',
  },
  {
    index: '02',
    title: 'Echo Sessions',
    description:
      'Premium 1:1 creative direction experiences for identity clarity, narrative positioning, and aesthetic alignment — when your work needs a witness and a direction.',
    cta: 'Begin a Session',
    href: '/sessions',
  },
  {
    index: '03',
    title: 'Creative Universe Building',
    description:
      'Rare, selective collaborations to build immersive worlds around a brand, release, or creative vision — for those ready to invest in something that will be remembered.',
    cta: 'Build a World',
    href: '/worlds',
  },
] as const;

export function WorkWithStudio() {
  return (
    <section className="relative ei-section py-28 md:py-44 overflow-hidden">
      {/* Atmospheric accent — faint indigo, left */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '12%',
          left: '-6%',
          width: 'clamp(280px, 38vw, 560px)',
          height: 'clamp(280px, 38vw, 560px)',
          background:
            'radial-gradient(ellipse 68% 68% at 32% 52%, rgba(99,102,241,0.036) 0%, transparent 72%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Atmospheric accent — faint violet, right */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%',
          right: '-4%',
          width: 'clamp(200px, 28vw, 440px)',
          height: 'clamp(200px, 28vw, 440px)',
          background:
            'radial-gradient(ellipse 70% 70% at 68% 44%, rgba(168,85,247,0.04) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Section entry separator */}
      <div className="ei-container mb-16 md:mb-24">
        <div
          className="w-full h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.06) 75%, transparent)',
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
            transition={{ duration: DURATION.slow, ease: EASE }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-14 md:mb-18"
          >
            Work With the Studio
          </motion.span>

          {/* Display heading - asymmetric alignment with refined cadence */}
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.loose}
            transition={{ duration: DURATION.normal, ease: 'easeInOut', delay: 0.1 }}
            className="font-editorial text-[1.9rem] md:text-[2.5rem] lg:text-[3rem] text-[#E8EAF6]/80 leading-[1.24] mb-8 md:mb-10 md:text-left text-center"
            style={{ letterSpacing: '-0.008em' }}
          >
            Authored creative direction
            <br className="hidden md:block" />
            for founders, artists, and makers.
          </motion.h2>

          {/* Subheading - tighter compression */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.loose}
            transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.normal }}
            className="font-structural text-[13px] md:text-[14px] text-white/35 leading-[1.95] max-w-[55ch] mb-16 md:mb-20 md:text-left text-center"
          >
            Echo in Ink offers authored creative direction for founders, artists,
            and makers seeking clarity, identity, and atmosphere.
          </motion.p>

          {/* Top rule */}
          <div
            className="w-full h-px"
            style={{
              background:
                'linear-gradient(90deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.07) 65%, transparent 100%)',
            }}
          />

          {/* Offerings */}
          <div>
            {offerings.map((item, i) => (
              <motion.div
                key={item.index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT.tight}
                transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.tight * i }}
              >
                <div className="flex gap-6 md:gap-10 items-start py-12 md:py-16">
                  <span className="font-structural text-[9px] tracking-[0.28em] text-white/20 mt-2 shrink-0 w-5">
                    {item.index}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="font-editorial text-[1.4rem] md:text-[1.8rem] text-[#E8EAF6]/75 leading-[1.2] mb-4 md:mb-5"
                      style={{ letterSpacing: '-0.008em' }}
                    >
                      {item.title}
                    </h3>
                    <p className="font-structural text-[13px] md:text-[14px] text-white/40 leading-[1.88] max-w-[52ch] mb-7 md:mb-8">
                      {item.description}
                    </p>
                    <Link
                      to={item.href}
                      className="ei-gradient-border-btn inline-flex items-center justify-center px-6 py-2.5 font-structural text-[10px] tracking-[0.22em] uppercase text-white/65 transition-all duration-500 hover:text-white hover:scale-[1.02]"
                    >
                      <span className="relative z-10">{item.cta}</span>
                    </Link>
                  </div>
                </div>
                {i < offerings.length - 1 && (
                  <div
                    className="w-full h-px"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)',
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Cinematic atmospheric bridge to CTA */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: '120px',
          background: 'linear-gradient(to bottom, transparent, rgba(99,102,241,0.012) 50%, rgba(99,102,241,0.018))',
        }}
      />
    </section>
  );
}
