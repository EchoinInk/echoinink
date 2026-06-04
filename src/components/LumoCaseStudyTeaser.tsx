import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from 'framer-motion';
import lumoinkdrift from '@/assets/imagery/sections/lumo-featured-bg.png';
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

  const rawImageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [10, -10]
  );

  const imageY = useSpring(rawImageY, {
    stiffness: 28,
    damping: 44,
    restDelta: 0.001,
  });

  return (
    <Section spacing="sm" className="relative overflow-hidden">
      {/* Very subtle atmospheric wash, like the mockup */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 45% 28% at 66% 48%, rgb(var(--ei-luxe-violet-rgb) / 0.045) 0%, transparent 68%)',
          filter: 'blur(70px)',
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
            className="mb-8 flex items-center gap-3 md:mb-10"
          >
            <span className="ei-eyebrow">Featured Work</span>

            <div
              className="h-px w-10 shrink-0 rounded-full shadow-[0_0_12px_rgb(var(--ei-aurora-blue-rgb)/0.35)]"
              style={{
                background:
                  'linear-gradient(90deg, rgb(var(--ei-deep-indigo-rgb) / 0.12) 0%, rgb(var(--ei-aurora-blue-rgb) / 0.85) 100%)',
              }}
            />
          </motion.div>

          {/* Featured world card */}
          <motion.article
            variants={blurEmergence}
            className="
              relative grid overflow-hidden
              rounded-[28px]
              border border-white/[0.085]
              bg-[rgb(var(--ei-void-rgb)/0.88)]
              shadow-[0_24px_80px_rgb(0_0_0/0.28)]
              md:grid-cols-[40%_60%]
              lg:grid-cols-[40%_60%]
              min-h-[330px]
              md:min-h-[350px]
            "
          >
            {/* Inner low glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgb(var(--ei-void-rgb) / 0.92) 0%, rgb(var(--ei-void-rgb) / 0.78) 38%, transparent 70%)',
              }}
            />

            {/* LEFT — Text content */}
            <motion.div
              variants={staggerContainer(STAGGER.normal, 0.15)}
              className="
                relative z-10 flex flex-col
                px-8 py-10
                sm:px-10
                md:px-12 md:py-12
                lg:px-14 lg:py-14
              "
            >
              <motion.h2
                variants={orchestratedReveal(0, 3)}
                className="
                  font-editorial
                  text-[3.75rem]
                  leading-[0.92]
                  tracking-[-0.045em]
                  text-white
                  md:text-[4.6rem]
                  lg:text-[5.15rem]
                "
              >
                LUMO
              </motion.h2>

              <motion.p
                variants={orchestratedReveal(1, 3)}
                className="
                  mt-5 max-w-[18ch]
                  font-editorial
                  text-[1.35rem]
                  leading-[1.18]
                  tracking-[-0.025em]
                  text-white/78
                  md:text-[1.5rem]
                "
              >
                A world built for overwhelmed humans.
              </motion.p>

              <motion.p
                variants={orchestratedReveal(2, 3)}
                className="
                  mt-7 max-w-[35ch]
                  font-structural
                  text-[13px]
                  leading-[1.8]
                  tracking-[-0.01em]
                  text-white/58
                "
              >
                An emotionally intelligent app shaped by an identity system built
                to calm cognitive noise through atmosphere, rhythm, and restraint.
              </motion.p>

              <motion.div variants={driftUp} className="mt-auto pt-10">
                <Link
                  to="/works/lumo"
                  className="
                    group inline-flex items-center gap-2.5
                    font-mono text-[10px] uppercase tracking-[0.22em]
                    text-white/76 transition-colors duration-500
                    hover:text-[var(--ei-luxe-violet)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--ei-aurora-blue-rgb)/0.32)]
                  "
                >
                  <span className="relative">
                    View Case Study
                    <span
                      className="
                        absolute -bottom-px left-0 h-px w-0
                        bg-[var(--ei-luxe-violet)]/70
                        transition-all duration-500
                        ease-[cubic-bezier(0.22,1,0.36,1)]
                        group-hover:w-full
                      "
                    />
                  </span>

                  <span
                    className="
                      transition-transform duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT — Image */}
            <div className="relative min-h-[260px] overflow-hidden md:min-h-full">
              <motion.div
                className="absolute inset-0"
                style={{
                  y: imageY,
                  scale: 1.04,
                }}
              >
                <img
                  src={lumoinkdrift}
                  alt="LUMO — atmospheric UI exploration"
                  className="
                    h-full w-full object-cover
                    object-[58%_50%]
                  "
                />
              </motion.div>

              {/* Mockup-style fade from text into image */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-[34%]"
                style={{
                  background:
                    'linear-gradient(to right, rgb(var(--ei-void-rgb) / 0.92) 0%, rgb(var(--ei-void-rgb) / 0.45) 42%, transparent 100%)',
                }}
              />

              {/* Darken far edges slightly */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgb(0 0 0 / 0.16) 0%, transparent 35%, rgb(0 0 0 / 0.22) 100%)',
                }}
              />

              {/* Soft grain */}
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 mix-blend-overlay"
                style={{
                  opacity: 0.025,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
                animate={prefersReduced ? undefined : { opacity: [0.015, 0.03, 0.015] }}
                transition={
                  prefersReduced
                    ? undefined
                    : {
                        duration: DURATION.breath,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatType: 'mirror',
                      }
                }
              />
            </div>
          </motion.article>

          {/* Discipline tags strip */}
          <motion.div
            variants={driftUp}
            className="
              mt-5 flex flex-wrap items-center
              gap-y-2
              md:justify-end
            "
          >
            {disciplines.map((tag, i) => (
              <span key={tag} className="flex items-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/52">
                  {tag}
                </span>

                {i < disciplines.length - 1 && (
                  <span className="mx-4 font-mono text-[10px] text-white/32">
                    +
                  </span>
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}