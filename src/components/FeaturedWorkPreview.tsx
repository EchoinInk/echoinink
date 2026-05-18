import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EASE, DURATION, VIEWPORT } from '@/lib/motion';

const featuredWorks = [
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
] as const;

type Work = (typeof featuredWorks)[number];

function FeaturedWorkCard({ work, delay = 0 }: { work: Work; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT.normal}
      transition={{ duration: DURATION.slow, ease: EASE, delay }}
      className="relative overflow-hidden group cursor-pointer aspect-[4/3] md:aspect-[16/9]"
    >
      {/* Atmospheric gradient background */}
      <div
        className="absolute inset-0 transition-transform duration-[1600ms] ease-out group-hover:scale-[1.025]"
        style={{ background: work.gradient, backgroundColor: work.bg }}
      />

      {/* Scene layer */}
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
          height: '60%',
          background: 'linear-gradient(to bottom, transparent, rgba(4,5,14,0.92) 100%)',
        }}
      />

      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
        {/* Description — revealed on hover */}
        <p className="font-structural text-[11px] md:text-[12px] text-white/30 leading-[1.78] mb-3 max-w-xs opacity-0 translate-y-1 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:translate-y-0">
          {work.description}
        </p>

        {/* Title */}
        <h3
          className="font-editorial text-[1.25rem] md:text-[1.65rem] text-[#E8EAF6]/90 leading-[1.12] mb-1.5"
          style={{ letterSpacing: '-0.008em' }}
        >
          {work.title}
        </h3>

        {/* Editorial subtitle */}
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

export function FeaturedWorkPreview() {
  return (
    <section className="relative ei-section py-16 md:py-24 overflow-hidden" aria-labelledby="featured-preview-heading">
      {/* Section header */}
      <div className="ei-container mb-8 md:mb-10">
        <div className="flex items-baseline justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE }}
            className="font-structural text-[10px] tracking-[0.38em] uppercase text-white/20"
          >
            Featured Work
          </motion.span>
          <Link
            to="/works"
            className="font-structural text-[10px] tracking-[0.25em] text-white/40 hover:text-white/60 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0F1220] rounded-sm"
          >
            View All
          </Link>
        </div>
        <div
          className="w-full h-px mt-4"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.07) 25%, rgba(255,255,255,0.07) 75%, transparent)',
          }}
        />
      </div>

      {/* Preview grid */}
      <div className="ei-container max-w-6xl">
        <div className="space-y-4 md:space-y-5">
          {/* Featured work */}
          <FeaturedWorkCard work={featuredWorks[0]} />

          {/* Two smaller works */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-start">
            <FeaturedWorkCard work={featuredWorks[1]} delay={0.05} />
            <FeaturedWorkCard work={featuredWorks[2]} delay={0.1} />
          </div>
        </div>
      </div>
    </section>
  );
}
