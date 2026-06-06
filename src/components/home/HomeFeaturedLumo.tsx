import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import lumoinkdrift from "@/assets/imagery/sections/lumo-featured-bg.webp";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import {
  blurEmergence,
  driftUp,
  staggerContainer,
  orchestratedReveal,
  STAGGER,
  VIEWPORT,
  DURATION,
} from "@/lib/motion-cinematic";

const disciplines = [
  "Identity System",
  "Narrative Architecture",
  "Interface Direction",
  "Emotional UX",
];

export function LumoCaseStudyTeaser() {
  const prefersReduced = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawImageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [10, -10],
  );

  const imageY = useSpring(rawImageY, {
    stiffness: 28,
    damping: 44,
    restDelta: 0.001,
  });

  return (
    <Section
      spacing="none"
      className="relative overflow-hidden pt-6 pb-2 md:pt-8 md:pb-4"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 28% at 66% 48%, rgb(var(--ei-violet-rgb) / 0.045) 0%, transparent 68%)",
          filter: "blur(70px)",
        }}
      />

      <Container>
        <motion.div
          ref={sectionRef}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          className="mx-auto max-w-6xl"
        >
          <motion.div
            variants={driftUp}
            className="mb-8 flex items-center gap-3 md:mb-10"
          >
            <span className="ei-type-label">Featured Work</span>

            <div
              className="h-px w-10 shrink-0 rounded-full shadow-[0_0_12px_rgb(var(--ei-halo-blue-rgb)/0.35)]"
              style={{
                background:
                  "linear-gradient(90deg, rgb(var(--ei-midnight-rgb) / 0.12) 0%, rgb(var(--ei-halo-blue-rgb) / 0.85) 100%)",
              }}
            />
          </motion.div>

          <motion.article
            variants={blurEmergence}
            className="ei-card ei-card-world"
          >
            <Link to="/works/lumo" className="ei-card-world-link group">

  <div className="ei-card-world-media">
                <motion.div variants={staggerContainer(STAGGER.normal, 0.15)}>
                  <motion.h2
                    variants={orchestratedReveal(0, 3)}
                    className="ei-card-world-title font-editorial text-[3.75rem] leading-[0.92] tracking-[-0.045em] md:text-[4.6rem] lg:text-[5.15rem]"
                  >
                    LUMO
                  </motion.h2>

                  <motion.p
                    variants={orchestratedReveal(1, 3)}
                    className="mt-5 max-w-[18ch] font-editorial text-[1.35rem] leading-[1.18] tracking-[-0.025em] text-[var(--ei-color-text-secondary)] md:text-[1.5rem]"
                  >
                    A world built for overwhelmed humans.
                  </motion.p>

                  <motion.p
                    variants={orchestratedReveal(2, 3)}
                    className="ei-card-world-copy-text mt-7 font-structural text-[0.8125rem] leading-[1.75] tracking-[-0.003em]"
                  >
                    An emotionally intelligent app shaped by an identity system
                    built to calm cognitive noise through atmosphere, rhythm,
                    and restraint.
                  </motion.p>
                </motion.div>

                <motion.div variants={driftUp}>
                  <span className="ei-card-action">
                    View Case Study{" "}
                    <span className="ei-card-action-arrow">→</span>
                  </span>
                </motion.div>
              </div>

              <div className="ei-card-world-media">
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
                    className="h-full w-full object-cover object-[57%_50%]"
                  />
                </motion.div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[28%]"
                  style={{
                    background:
                      "linear-gradient(to right, rgb(var(--ei-void-rgb) / 0.42) 0%, rgb(var(--ei-void-rgb) / 0.18) 52%, transparent 100%)",
                  }}
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-[1]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgb(var(--ei-void-rgb) / 0.08) 0%, transparent 38%, rgb(var(--ei-void-rgb) / 0.16) 100%)",
                  }}
                />

                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-[3] mix-blend-overlay"
                  style={{
                    opacity: 0.025,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                  }}
                  animate={
                    prefersReduced
                      ? undefined
                      : { opacity: [0.015, 0.03, 0.015] }
                  }
                  transition={
                    prefersReduced
                      ? undefined
                      : {
                          duration: DURATION.breath,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatType: "mirror",
                        }
                  }
                />
              </div>
            </Link>
          </motion.article>

          <motion.div
            variants={driftUp}
            className="mt-5 flex flex-wrap items-center gap-y-2 md:justify-end"
          >
            {disciplines.map((tag, i) => (
              <span key={tag} className="flex items-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ei-color-text-secondary)]">
                  {tag}
                </span>

                {i < disciplines.length - 1 && (
                  <span className="mx-4 font-mono text-[10px] text-[var(--ei-color-text-muted)]">
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