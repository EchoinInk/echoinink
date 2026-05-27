import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from 'framer-motion';
import lumoinkdrift from '@/assets/ei-lumofeatured-bg.png';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import {
  blurEmergence,
  driftUp,
  staggerContainer,
  orchestratedReveal,
  STAGGER,
  VIEWPORT,
  DURATION,
} from '@/lib/motion-cinematic';

// ═══════════════════════════════════════════════════════════════
// LUMO CASE STUDY TEASER — Cinematic editorial moment
// Breaks from standard card patterns — more magazine, less component
// ═══════════════════════════════════════════════════════════════

const disciplines = [
  'Identity System',
  'Narrative Architecture',
  'Interface Direction',
  'Emotional UX',
];

export function LumoCaseStudyTeaser() {
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const rawImageY = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [14, -14]);
  const imageY = useSpring(rawImageY, { stiffness: 28, damping: 44, restDelta: 0.001 });

  return (
    <Section spacing="sm" className="overflow-hidden relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 35% at 65% 45%, rgb(var(--ei-ion-violet-rgb) / 0.04) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <Container>
        <motion.div
          ref={sectionRef}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          className="max-w-6xl mx-auto"
        >
          {/* Section eyebrow */}
          <motion.div
            variants={driftUp}
            className="flex items-center gap-3 mb-8 md:mb-10"
          >
            <span className="ei-eyebrow">Featured Work</span>
<div
          className="h-px w-9 shrink-0 rounded-full shadow-[0_0_12px_rgb(var(--ei-neon-magenta-rgb)/0.45)]"
          style={{
            background:
              'linear-gradient(90deg, rgb(var(--ei-orbit-blue-rgb) / 0.15) 0%, rgb(var(--ei-neon-magenta-rgb) / 0.95) 100%)',
          }}
        />          </motion.div>

          {/* Featured world card — 2-col split */}
          <motion.div
            variants={blurEmergence}
            className="relative overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-[var(--ei-deep-nebula)]/80 grid md:grid-cols-[2fr_3fr] min-h-[380px]"
          >
            {/* Ambient glow behind card */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 60% 55% at 68% 50%, rgb(var(--ei-ion-violet-rgb) / 0.07) 0%, transparent 65%)',
                filter: 'blur(40px)',
              }}
            />

            {/* LEFT — Text content */}
            <motion.div
              variants={staggerContainer(STAGGER.normal, 0.15)}
              className="relative z-10 flex flex-col p-10 md:p-12"
            >
              <motion.h2
                variants={orchestratedReveal(0, 3)}
                className="font-editorial text-[3.5rem] md:text-[4.5rem] text-[var(--ei-text-primary)] leading-none mb-3"
                style={{ letterSpacing: '-0.025em' }}
              >
                LUMO
              </motion.h2>

              <motion.p
                variants={orchestratedReveal(1, 3)}
                className="font-editorial text-lg md:text-xl text-white/75 mb-5 leading-[1.35]"
                style={{ letterSpacing: '-0.01em' }}
              >
                A world built for overwhelmed humans.
              </motion.p>

              <motion.p
                variants={orchestratedReveal(2, 3)}
                className="font-structural text-[13px] text-white/55 leading-[1.75] max-w-[38ch] mb-auto"
              >
                An emotionally intelligent app shaped by an identity system built to calm cognitive noise through atmosphere, rhythm, and restraint.
              </motion.p>

              <motion.div variants={driftUp} className="mt-8">
                <Link
                  to="/works/lumo"
                  className="group inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--ei-orchid-plasma)]/75 hover:text-[var(--ei-orchid-plasma)] transition-colors duration-500"
                >
                  <span className="relative">
                    View Case Study
                    <span className="absolute -bottom-px left-0 w-0 h-px bg-[var(--ei-orchid-plasma)]/40 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">→</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT — Parallax image */}
            <div className="relative overflow-hidden min-h-[260px] md:min-h-0">
              <motion.div
                className="absolute inset-0"
                style={{ y: imageY, scale: 1.05 }}
              >
                <img
                  src={lumoinkdrift}
                  alt="LUMO — atmospheric UI exploration"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Left-edge fade to blend with text panel */}
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-24 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, rgb(var(--ei-deep-nebula-rgb) / 0.85), transparent)',
                }}
              />

              {/* Grain */}
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
                animate={prefersReduced ? undefined : { opacity: [0.01, 0.02, 0.01] }}
                transition={prefersReduced ? undefined : { duration: DURATION.breath, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }}
              />
            </div>
          </motion.div>

          {/* Discipline tags strip */}
          <motion.div
            variants={driftUp}
            className="mt-4 md:mt-5 flex flex-wrap items-center gap-x-0 gap-y-2"
          >
            {disciplines.map((tag, i) => (
              <span key={tag} className="flex items-center">
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/40">
                  {tag}
                </span>
                {i < disciplines.length - 1 && (
                  <span className="font-mono text-[10px] text-white/20 mx-3">+</span>
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}