import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from 'framer-motion';
import lumoinkdrift from '@/assets/ei-lumofeatured-bg.png';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import {
  blurEmergence,
  driftUp,
  orchestratedReveal,
  VIEWPORT,
  EASE_LUXURY,
  DURATION,
} from '@/lib/motion-cinematic';

// ═══════════════════════════════════════════════════════════════
// LUMO CASE STUDY TEASER — Cinematic editorial moment
// Breaks from standard card patterns — more magazine, less component
// ═══════════════════════════════════════════════════════════════

export function LumoCaseStudyTeaser() {
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const rawImageY = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [12, -12]);
  const imageY = useSpring(rawImageY, { stiffness: 30, damping: 42, restDelta: 0.001 });

  return (
    <Section spacing="sm" className="ei-section-intimate overflow-hidden relative">
      {/* Subtle atmospheric depth — reduced for cleaner balance */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 40% 25% at 20% 30%, rgba(168,85,247,0.02) 0%, transparent 60%)',
          filter: 'blur(50px)',
        }}
      />

      <Container>
        <motion.div
          ref={sectionRef}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
        >
          {/* ═══════════════════════════════════════════════════════════════
              EDITORIAL COMPOSITION
              Asymmetric, magazine-style layout
              ═══════════════════════════════════════════════════════════════ */}
          <div className="relative max-w-6xl mx-auto">
            {/* Atmospheric depth layer — behind image, breathing */}
            <motion.div
              className="absolute -inset-3 md:-inset-6 pointer-events-none rounded-[2rem] md:rounded-[2.5rem]"
              style={{
                background: 'radial-gradient(ellipse 55% 40% at 70% 50%, rgba(139,92,246,0.07) 0%, transparent 65%)',
                filter: 'blur(40px)',
              }}
              animate={prefersReduced ? undefined : {
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.02, 1],
              }}
              transition={prefersReduced ? undefined : {
                duration: DURATION.ambient,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror',
              }}
            />

            {/* Background image with editorial treatment */}
            <motion.div
              className="relative overflow-hidden rounded-2xl md:rounded-3xl"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              {/* Parallax image layer — dimensional depth */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ y: imageY, scale: 1.04 }}
              >
                <img
                  src={lumoinkdrift}
                  alt="Lumo Ink Drift"
                  className="w-full h-full object-cover"
                  style={{ minHeight: '400px' }}
                />
              </motion.div>

              {/* Visible image placeholder for aspect ratio */}
              <div
                className="w-full h-auto"
                style={{ aspectRatio: '16/9', minHeight: '400px' }}
              />

              {/* Sophisticated overlay — asymmetric gradient for editorial feel */}
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    linear-gradient(135deg, rgba(10,12,24,0.92) 0%, rgba(10,12,24,0.75) 35%, rgba(10,12,24,0.4) 60%, transparent 100%)
                  `,
                }}
              />

              {/* Animated grain texture overlay — cinematic life */}
              <motion.div
                className="absolute inset-0 mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
                animate={prefersReduced ? undefined : {
                  opacity: [0.012, 0.022, 0.012],
                }}
                transition={prefersReduced ? undefined : {
                  duration: DURATION.breath,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'mirror',
                }}
              />

              {/* Subtle hover depth — compositional glow response */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1 },
                }}
                transition={{ duration: DURATION.slow, ease: EASE_LUXURY }}
                style={{
                  background: 'radial-gradient(ellipse 60% 50% at 30% 70%, rgba(139,92,246,0.04) 0%, transparent 70%)',
                }}
              />

              {/* Content — repositioned upward for better balance */}
              <div className="absolute inset-0 p-6 md:p-10 lg:p-12 flex flex-col">
                {/* Top — Editorial label */}
                <motion.div
                  variants={orchestratedReveal(0, 4)}
                  className="flex items-center gap-3 mb-auto"
                >
                  <span className="font-structural text-[9px] tracking-[0.28em] uppercase text-violet-300/55">
                    Featured Case
                  </span>
                  <div className="h-px w-6 bg-violet-300/20" />
                </motion.div>

                {/* Main content — tighter vertical rhythm */}
                <div className="max-w-lg mt-6 md:mt-10">
                  {/* Project title — large, editorial */}
                  <motion.h2
                    variants={orchestratedReveal(1, 4)}
                    className="font-editorial text-3xl md:text-4xl lg:text-5xl text-white/95 mb-2.5"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    LUMO
                  </motion.h2>

                  {/* Tagline — human, emotional, protected */}
                  <motion.p
                    variants={orchestratedReveal(2, 4)}
                    className="font-editorial text-lg md:text-xl text-white/75 mb-3 leading-[1.35]"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    A world built for overwhelmed humans.
                  </motion.p>

                  {/* Description — restrained, atmospheric */}
                  <motion.p
                    variants={orchestratedReveal(3, 4)}
                    className="font-structural text-[12px] md:text-[13px] text-white/50 leading-[1.7] max-w-[42ch] mb-5"
                  >
                    An emotionally intelligent app shaped by an identity system built to calm cognitive noise through atmosphere, rhythm, and restraint.
                  </motion.p>

                  {/* CTA — quiet confidence, exploratory */}
                  <motion.div variants={blurEmergence}>
                    <Link
                      to="/work/lumo"
                      className="group inline-flex items-center gap-2.5 font-structural text-[9px] tracking-[0.16em] uppercase text-violet-300/80 hover:text-violet-200 transition-colors duration-500"
                    >
                      <span className="relative">
                        View Case Study
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-violet-300/40 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                      </span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                        →
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* ═══════════════════════════════════════════════════════════════
                EDITORIAL PROOF BLOCK — Homepage addition
                Scope, Problem, Outcome, Positioning
                Tighter spacing, soft hierarchy, atmospheric separators
                ═══════════════════════════════════════════════════════════════ */}
            <motion.div
              variants={driftUp}
              className="mt-7 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-5"
            >
              {/* Micro-tagline */}
              <div className="md:col-span-12 mb-1">
                <span className="font-editorial text-[15px] md:text-[17px] text-white/60 italic">
                  An exploration into emotionally intelligent interfaces.
                </span>
              </div>

              {/* Scope */}
              <div className="md:col-span-3">
                <span className="font-structural text-[9px] tracking-[0.2em] uppercase text-white/45 block mb-2.5">
                  Scope
                </span>
                <p className="font-structural text-[13px] leading-[1.7] text-white/65">
                  Identity system, interface direction, and atmospheric world-building.
                </p>
              </div>

              {/* Problem */}
              <div className="md:col-span-3">
                <span className="font-structural text-[9px] tracking-[0.2em] uppercase text-white/45 block mb-2.5">
                  Problem
                </span>
                <p className="font-structural text-[13px] leading-[1.7] text-white/65">
                  LUMO needed a visual language that felt alive, adaptive, and emotionally intelligent — a system that could hold both clarity and feeling without slipping into clinical tech aesthetics.
                </p>
              </div>

              {/* Outcome */}
              <div className="md:col-span-3">
                <span className="font-structural text-[9px] tracking-[0.2em] uppercase text-white/45 block mb-2.5">
                  Outcome
                </span>
                <p className="font-structural text-[13px] leading-[1.7] text-white/65">
                  A modular identity and atmospheric UI system used across product, marketing, and motion, giving LUMO a distinct emotional signature and a world its users could feel as much as navigate.
                </p>
              </div>

              {/* Positioning */}
              <div className="md:col-span-3">
                <span className="font-structural text-[9px] tracking-[0.2em] uppercase text-white/45 block mb-2.5">
                  Positioning
                </span>
                <p className="font-structural text-[13px] leading-[1.7] text-white/65">
                  An internal Echo in Ink world-building project exploring emotionally responsive interfaces.
                </p>
              </div>
            </motion.div>

            {/* Atmospheric separator */}
            <motion.div
              variants={blurEmergence}
              className="mt-8 md:mt-14 w-full h-px"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.06) 20%, rgba(99,102,241,0.06) 80%, transparent 100%)',
              }}
            />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}