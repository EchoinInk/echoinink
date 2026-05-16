import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const works = [
  {
    index: '01',
    title: 'Luminous Echoes',
    category: 'Atmospheric Visual',
    description:
      'Atmospheric visual experiments exploring identity through light, shadow, and digital texture.',
    gradient:
      'radial-gradient(ellipse 70% 65% at 38% 55%, rgba(232,121,249,0.28) 0%, rgba(168,85,247,0.16) 32%, rgba(99,102,241,0.07) 62%, transparent 82%), radial-gradient(ellipse 40% 50% at 75% 30%, rgba(30,200,255,0.10) 0%, transparent 65%)',
    bg: '#05040D',
    scene:
      'radial-gradient(ellipse 22% 50% at 68% 30%, rgba(255,240,200,0.07) 0%, transparent 65%), radial-gradient(ellipse 30% 25% at 18% 82%, rgba(180,80,160,0.07) 0%, transparent 60%)',
  },
  {
    index: '02',
    title: 'Inkbound Portraits',
    category: 'Digital Portraiture',
    description:
      'Hand-crafted digital portraits shaped through layered ink, motion, and emotional storytelling.',
    gradient:
      'radial-gradient(ellipse 65% 72% at 58% 42%, rgba(30,200,255,0.22) 0%, rgba(99,102,241,0.12) 42%, transparent 72%)',
    bg: '#03060F',
    scene:
      'linear-gradient(172deg, rgba(30,180,255,0.08) 0%, transparent 38%), radial-gradient(ellipse 16% 62% at 56% 8%, rgba(200,230,255,0.07) 0%, transparent 70%)',
  },
  {
    index: '03',
    title: 'The Quiet Worlds Series',
    category: 'Cinematic World-Building',
    description:
      'Cinematic micro-worlds built from sound, colour, and narrative fragments.',
    gradient:
      'radial-gradient(ellipse 68% 60% at 42% 60%, rgba(168,85,247,0.24) 0%, rgba(99,102,241,0.12) 45%, transparent 88%)',
    bg: '#06040E',
    scene:
      'radial-gradient(circle at 22% 28%, rgba(210,180,250,0.06) 0%, transparent 28%), radial-gradient(circle at 74% 62%, rgba(170,130,240,0.05) 0%, transparent 24%), radial-gradient(circle at 85% 20%, rgba(180,150,230,0.04) 0%, transparent 18%)',
  },
  {
    index: '04',
    title: 'Signal / Memory',
    category: 'Digital Exploration',
    description:
      'An exploration of digital memory, distortion, and the stories we carry in fragments.',
    gradient:
      'radial-gradient(ellipse 55% 70% at 62% 38%, rgba(30,200,255,0.20) 0%, rgba(30,80,200,0.12) 40%, transparent 70%), radial-gradient(ellipse 45% 45% at 18% 72%, rgba(232,121,249,0.12) 0%, transparent 62%)',
    bg: '#030810',
    scene:
      'repeating-linear-gradient(90deg, transparent, transparent 48px, rgba(30,200,255,0.013) 48px, rgba(30,200,255,0.013) 49px), linear-gradient(118deg, transparent 28%, rgba(255,255,255,0.04) 44%, transparent 62%)',
  },
  {
    index: '05',
    title: 'The Archive of Small Realities',
    category: 'Experimental Studies',
    description:
      'A growing collection of experimental scenes, sketches, and atmospheric studies.',
    gradient:
      'radial-gradient(ellipse 72% 65% at 44% 52%, rgba(232,121,249,0.20) 0%, rgba(168,85,247,0.11) 42%, transparent 86%)',
    bg: '#07040C',
    scene:
      'radial-gradient(ellipse 38% 28% at 22% 72%, rgba(220,150,60,0.08) 0%, transparent 60%), radial-gradient(ellipse 25% 35% at 82% 22%, rgba(180,90,200,0.07) 0%, transparent 55%)',
  },
  {
    index: '06',
    title: 'Motion Studies: Light as Language',
    category: 'Motion & Light',
    description:
      'Short-form motion pieces examining light as an emotional and narrative tool.',
    gradient:
      'radial-gradient(ellipse 58% 74% at 52% 44%, rgba(255,255,255,0.07) 0%, rgba(200,180,240,0.14) 25%, rgba(168,85,247,0.18) 50%, rgba(99,102,241,0.08) 72%, transparent 88%)',
    bg: '#060608',
    scene:
      'linear-gradient(78deg, transparent 18%, rgba(220,200,255,0.06) 36%, rgba(168,85,247,0.04) 52%, transparent 68%), linear-gradient(78deg, transparent 42%, rgba(200,180,240,0.04) 58%, transparent 74%)',
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
      'font-editorial text-[1.65rem] md:text-[2.2rem] lg:text-[2.75rem] text-[#E8EAF6]/90 leading-[1.12] mb-1.5',
    standard:
      'font-editorial text-[1.45rem] md:text-[1.9rem] text-[#E8EAF6]/85 leading-[1.15] mb-1.5',
    landscape:
      'font-editorial text-[1.15rem] md:text-[1.45rem] text-[#E8EAF6]/80 leading-[1.15] mb-1.5',
    square:
      'font-editorial text-[1.1rem] md:text-[1.35rem] text-[#E8EAF6]/75 leading-[1.18] mb-1.5',
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
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1.2, ease: EASE, delay }}
      className={`relative overflow-hidden group cursor-pointer ${aspectClass}`}
    >
      {/* Atmospheric gradient background */}
      <div
        className="absolute inset-0 transition-transform duration-[1600ms] ease-out group-hover:scale-[1.025]"
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
            'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 30%, rgba(4,5,14,0.65) 100%)',
        }}
      />

      {/* Bottom reading gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: isFull ? '60%' : '72%',
          background: 'linear-gradient(to bottom, transparent, rgba(4,5,14,0.92) 100%)',
        }}
      />

      {/* Text overlay */}
      <div className={`absolute bottom-0 left-0 right-0 ${padClass}`}>
        {/* Description — revealed on hover, slides up into caption */}
        <p className="font-structural text-[11px] md:text-[12px] text-white/30 leading-[1.78] mb-3 max-w-xs opacity-0 translate-y-1 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          {work.description}
        </p>

        {/* Title */}
        <h3 className={titleClass} style={{ letterSpacing: '-0.008em' }}>
          {work.title}
        </h3>

        {/* Editorial subtitle — category + index on one credited line */}
        <div className="flex items-baseline gap-3 mt-2">
          <span className="font-structural text-[9px] tracking-[0.22em] uppercase text-white/30">
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

export function SelectedWorks() {
  return (
    <section className="relative ei-section py-24 md:py-36 overflow-hidden">
      {/* Section header */}
      <div className="ei-container mb-10 md:mb-14">
        <div className="flex items-baseline justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: EASE }}
            className="font-structural text-[10px] tracking-[0.38em] uppercase text-white/20"
          >
            Selected Works
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: EASE, delay: 0.1 }}
            className="font-structural text-[10px] tracking-[0.25em] text-white/15"
          >
            2024 — 2025
          </motion.span>
        </div>
        <div
          className="w-full h-px mt-5"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 25%, rgba(255,255,255,0.07) 75%, transparent)',
          }}
        />
      </div>

      {/* Gallery */}
      <div className="ei-container">
        <div className="space-y-4 md:space-y-6">
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
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.1 }}
          className="flex justify-center mt-14 md:mt-20"
        >
          <button className="ei-gradient-border-btn relative inline-flex items-center gap-3 px-8 py-3.5 font-structural text-[11px] tracking-[0.2em] uppercase text-white/65 transition-all duration-500 hover:text-white hover:scale-[1.02]">
            <span className="relative z-10">View All Works</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
