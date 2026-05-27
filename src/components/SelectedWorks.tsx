import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EASE_CINEMATIC as EASE, DURATION, VIEWPORT, STAGGER } from '@/lib/motion-cinematic';

const works = [
  {
    index: '01',
    title: 'Luminous Echoes',
    category: 'Atmospheric Visual',
    description:
      'Atmospheric visual experiments exploring identity through light, shadow, and digital texture.',
    gradient:
      'radial-gradient(ellipse 70% 65% at 38% 55%, rgb(var(--ei-neon-magenta-rgb) / 0.28) 0%, rgb(var(--ei-ion-violet-rgb) / 0.16) 32%, rgb(var(--ei-orbit-blue-rgb) / 0.07) 62%, transparent 82%), radial-gradient(ellipse 40% 50% at 75% 30%, rgb(var(--ei-electric-cobalt-rgb) / 0.10) 0%, transparent 65%)',
    bg: 'var(--ei-cosmic-black)',
    scene:
      'radial-gradient(ellipse 22% 50% at 68% 30%, rgb(var(--ei-photon-white-rgb) / 0.07) 0%, transparent 65%), radial-gradient(ellipse 30% 25% at 18% 82%, rgb(var(--ei-stellar-lilac-rgb) / 0.07) 0%, transparent 60%)',
  },
  {
    index: '02',
    title: 'Inkbound Portraits',
    category: 'Digital Portraiture',
    description:
      'Hand-crafted digital portraits shaped through layered ink, motion, and emotional storytelling.',
    gradient:
      'radial-gradient(ellipse 65% 72% at 58% 42%, rgb(var(--ei-electric-cobalt-rgb) / 0.22) 0%, rgb(var(--ei-orbit-blue-rgb) / 0.12) 42%, transparent 72%)',
    bg: 'var(--ei-cosmic-black)',
    scene:
      'linear-gradient(172deg, rgb(var(--ei-electric-cobalt-rgb) / 0.08) 0%, transparent 38%), radial-gradient(ellipse 16% 62% at 56% 8%, rgb(var(--ei-stellar-lilac-rgb) / 0.07) 0%, transparent 70%)',
  },
  {
    index: '03',
    title: 'The Quiet Worlds Series',
    category: 'Cinematic World-Building',
    description:
      'Cinematic micro-worlds built from sound, colour, and narrative fragments.',
    gradient:
      'radial-gradient(ellipse 68% 60% at 42% 60%, rgb(var(--ei-ion-violet-rgb) / 0.24) 0%, rgb(var(--ei-orbit-blue-rgb) / 0.12) 45%, transparent 88%)',
    bg: 'var(--ei-cosmic-black)',
    scene:
      'radial-gradient(circle at 22% 28%, rgb(var(--ei-stellar-lilac-rgb) / 0.06) 0%, transparent 28%), radial-gradient(circle at 74% 62%, rgb(var(--ei-stellar-lilac-rgb) / 0.05) 0%, transparent 24%), radial-gradient(circle at 85% 20%, rgb(var(--ei-stellar-lilac-rgb) / 0.04) 0%, transparent 18%)',
  },
  {
    index: '04',
    title: 'Signal / Memory',
    category: 'Digital Exploration',
    description:
      'An exploration of digital memory, distortion, and the stories we carry in fragments.',
    gradient:
      'radial-gradient(ellipse 55% 70% at 62% 38%, rgb(var(--ei-electric-cobalt-rgb) / 0.20) 0%, rgb(var(--ei-orbit-blue-rgb) / 0.12) 40%, transparent 70%), radial-gradient(ellipse 45% 45% at 18% 72%, rgb(var(--ei-neon-magenta-rgb) / 0.12) 0%, transparent 62%)',
    bg: 'var(--ei-cosmic-black)',
    scene:
      'repeating-linear-gradient(90deg, transparent, transparent 48px, rgb(var(--ei-electric-cobalt-rgb) / 0.013) 48px, rgb(var(--ei-electric-cobalt-rgb) / 0.013) 49px), linear-gradient(118deg, transparent 28%, rgb(var(--ei-photon-white-rgb) / 0.04) 44%, transparent 62%)',
  },
  {
    index: '05',
    title: 'The Archive of Small Realities',
    category: 'Experimental Studies',
    description:
      'A growing collection of experimental scenes, sketches, and atmospheric studies.',
    gradient:
      'radial-gradient(ellipse 72% 65% at 44% 52%, rgb(var(--ei-neon-magenta-rgb) / 0.20) 0%, rgb(var(--ei-ion-violet-rgb) / 0.11) 42%, transparent 86%)',
    bg: 'var(--ei-cosmic-black)',
    scene:
      'radial-gradient(ellipse 38% 28% at 22% 72%, rgb(var(--ei-stellar-lilac-rgb) / 0.08) 0%, transparent 60%), radial-gradient(ellipse 25% 35% at 82% 22%, rgb(var(--ei-stellar-lilac-rgb) / 0.07) 0%, transparent 55%)',
  },
  {
    index: '06',
    title: 'Motion Studies: Light as Language',
    category: 'Motion & Light',
    description:
      'Short-form motion pieces examining light as an emotional and narrative tool.',
    gradient:
      'radial-gradient(ellipse 58% 74% at 52% 44%, rgb(var(--ei-photon-white-rgb) / 0.07) 0%, rgb(var(--ei-stellar-lilac-rgb) / 0.14) 25%, rgb(var(--ei-ion-violet-rgb) / 0.18) 50%, rgb(var(--ei-orbit-blue-rgb) / 0.08) 72%, transparent 88%)',
    bg: 'var(--ei-cosmic-black)',
    scene:
      'linear-gradient(78deg, transparent 18%, rgb(var(--ei-stellar-lilac-rgb) / 0.06) 36%, rgb(var(--ei-ion-violet-rgb) / 0.04) 52%, transparent 68%), linear-gradient(78deg, transparent 42%, rgb(var(--ei-stellar-lilac-rgb) / 0.04) 58%, transparent 74%)',
  },
] as const;

type Work = (typeof works)[number];
type WorkVariant = 'featured' | 'standard' | 'landscape' | 'square';

function WorkPanel({
  work,
  variant = 'landscape',
  delay = 0,
}: {
  work: Work;
  variant?: WorkVariant;
  delay?: number;
}) {
  const isFull = variant === 'featured' || variant === 'standard';

  const aspectClass = {
    featured: 'aspect-[4/3] md:aspect-[16/9]',
    standard: 'aspect-[4/3] md:aspect-[21/9]',
    landscape: 'aspect-[4/3]',
    square: 'aspect-[1/1]',
  }[variant];

  const titleClass = {
    featured:
      'font-editorial text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-[var(--ei-stellar-lilac)]/90 leading-[1.14] mb-1.5',
    standard:
      'font-editorial text-[1.3rem] md:text-[1.7rem] text-[var(--ei-stellar-lilac)]/85 leading-[1.16] mb-1.5',
    landscape:
      'font-editorial text-[1.1rem] md:text-[1.35rem] text-[var(--ei-stellar-lilac)]/80 leading-[1.16] mb-1.5',
    square:
      'font-editorial text-[1.05rem] md:text-[1.25rem] text-[var(--ei-stellar-lilac)]/75 leading-[1.18] mb-1.5',
  }[variant];

  const padClass = {
    featured: 'p-6 md:p-10',
    standard: 'p-5 md:p-8',
    landscape: 'p-5 md:p-6',
    square: 'p-5 md:p-6',
  }[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT.normal}
      transition={{ duration: DURATION.slow, ease: EASE, delay }}
      className={`relative overflow-hidden group cursor-pointer ${aspectClass}`}
    >
      {/* Atmospheric gradient background */}
      <div
        className="absolute inset-0 transition-transform duration-[2000ms] ease-out group-hover:scale-[1.015]"
        style={{ background: work.gradient, backgroundColor: work.bg }}
      />

      {/* Scene layer — emotional identity fragment per work */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: work.scene }}
      />

      {/* Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 30%, rgb(var(--ei-cosmic-black-rgb) / 0.65) 100%)',
        }}
      />

      {/* Bottom reading gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: isFull ? '60%' : '72%',
          background: 'linear-gradient(to bottom, transparent, rgb(var(--ei-cosmic-black-rgb) / 0.92) 100%)',
        }}
      />

      {/* Text overlay */}
      <div className={`absolute bottom-0 left-0 right-0 ${padClass}`}>
        {/* Description — revealed on hover, slides up into caption */}
        <p className="font-structural text-[11px] md:text-[12px] text-white/45 leading-[1.78] mb-3 max-w-xs opacity-0 translate-y-1 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          {work.description}
        </p>

        {/* Title */}
        <h3 className={titleClass} style={{ letterSpacing: '-0.008em' }}>
          {work.title}
        </h3>

        {/* Editorial subtitle — category + index on one credited line */}
        <div className="flex items-baseline gap-3 mt-2">
          <span className="font-structural text-[9px] tracking-[0.22em] uppercase text-white/45">
            {work.category}
          </span>
          <span className="font-structural text-[8px] tracking-[0.2em] text-white/15">
            {work.index}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function SelectedWorks({ hideViewAll = false }: { hideViewAll?: boolean }) {
  return (
    <section className="relative ei-section py-16 md:py-32 overflow-hidden">
      {/* Reduced atmosphere - typography-led section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgb(var(--ei-orbit-blue-rgb) / 0.012) 0%, transparent 75%)',
        }}
      />
      {/* Section header */}
      <div className="ei-container mb-10 md:mb-14">
        <div className="flex items-baseline justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE }}
            className="font-structural text-[10px] tracking-[0.38em] uppercase text-white/20"
          >
            Selected Works
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.1 }}
            className="font-structural text-[10px] tracking-[0.25em] text-white/30"
          >
            2024 — 2025
          </motion.span>
        </div>
        <div
          className="w-full h-px mt-5"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgb(var(--ei-photon-white-rgb) / 0.07) 25%, rgb(var(--ei-photon-white-rgb) / 0.07) 75%, transparent)',
          }}
        />
      </div>

      {/* Gallery */}
      <div className="ei-container max-w-6xl">
        <div className="space-y-5 md:space-y-7">
          {/* 01 — featured hero panel */}
          <WorkPanel work={works[0]} variant="featured" />

          {/* 02–03 — landscape + square, editorially asymmetric */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-start">
            <WorkPanel work={works[1]} variant="landscape" delay={0.05} />
            <WorkPanel work={works[2]} variant="square" delay={0.1} />
          </div>

          {/* 04 — standard featured panel */}
          <WorkPanel work={works[3]} variant="standard" />

          {/* 05–06 — square + landscape (mirrored rhythm) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-start">
            <WorkPanel work={works[4]} variant="square" delay={0.05} />
            <WorkPanel work={works[5]} variant="landscape" delay={0.1} />
          </div>
        </div>

        {/* CTA */}
        {!hideViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.1 }}
            className="flex justify-center mt-14 md:mt-20"
          >
            <button className="ei-focus-glow ei-gradient-border-btn relative inline-flex items-center gap-3 px-8 py-3.5 font-structural text-[11px] tracking-[0.2em] uppercase text-white/70 transition-all duration-500 hover:text-white hover:scale-[1.02] focus-visible:text-white focus-visible:scale-[1.02]">
              <span className="relative z-10">View Selected Works</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
