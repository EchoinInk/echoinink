import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import {
  blurEmergence,
  driftUp,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from "@/lib/motion-cinematic";

const fragments = [
  {
    text: "Brands shift fast and fade faster. We build worlds.",
    accent: false,
  },
  {
    text: "Worlds that hold feeling, depth, and intelligence.",
    accent: false,
  },
  {
    text: "Worlds that make people remember what cannot be explained.",
    accent: false,
  },
  {
    text: "We do not decorate brands. We reveal what they are becoming.",
    accent: true,
  },
];

export function Philosophy() {
  return (
    <Section
      spacing="none"
      className="relative overflow-hidden pt-8 pb-2 md:pt-12 md:pb-4"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 30% at 30% 40%, rgb(var(--ei-violet-rgb) / 0.018) 0%, transparent 60%)",
          filter: "blur(50px)",
        }}
      />

      <Container>
        <motion.div
          className="mx-auto max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
        >
          {/* Section eyebrow */}
          <motion.div
            variants={driftUp}
            className="mb-6 flex items-center gap-3 md:mb-8"
          >
            <span className="ei-type-label">Our Philosophy</span>

            <div
              className="h-px w-10 shrink-0 rounded-full shadow-[0_0_12px_rgb(var(--ei-halo-blue-rgb)/0.75)]"
              style={{
                background:
                  "linear-gradient(90deg, rgb(var(--ei-midnight-rgb) / 0.15) 0%, rgb(var(--ei-halo-blue-rgb) / 0.95) 100%)",
              }}
            />
          </motion.div>

          <div className="grid items-start gap-8 md:grid-cols-[2fr_3fr] md:gap-12">
            {/* Left — Heading + body */}
            <motion.div variants={staggerContainer(STAGGER.loose, 0)}>
              <motion.h2
                variants={blurEmergence}
                className="ei-type-philosophy-heading mb-5 whitespace-pre-line"
              >
                {"Atmosphere is not decoration —\nit is how meaning is felt."}
              </motion.h2>

              <motion.p
                variants={driftUp}
                className="ei-type-philosophy-body max-w-[38ch]"
              >
                Everything we create is immersed in the invisible. A language of
                emotion, memory, and intention.
              </motion.p>
            </motion.div>

            {/* Right — Philosophy fragments */}
            <motion.div
              variants={staggerContainer(STAGGER.normal, 0.25)}
              className="mt-0 grid grid-cols-2 gap-4 md:mt-6 md:grid-cols-4 md:gap-5"
            >
              {fragments.map((fragment, i) => (
                <motion.div
                  key={i}
                  variants={driftUp}
                  className="relative pl-4"
                >
                  {/* Vertical divider */}
                  {i !== 0 && (
                    <div
                      className="absolute left-0 top-0 h-full w-px"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 0%, rgb(var(--ei-ice-white-rgb) / 0.08) 18%, rgb(var(--ei-ice-white-rgb) / 0.08) 82%, transparent 100%)",
                      }}
                    />
                  )}

                  {/* Glow anchor dot */}
                  <div className="mb-3" aria-hidden="true">
                    <span className="relative inline-block h-3 w-3">
                      <span
                        className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{
                          background: fragment.accent
                            ? "var(--ei-halo-blue)"
                            : "rgb(var(--ei-violet-rgb) / 0.45)",
                        }}
                      />

                      <span
                        className="absolute inset-0 rounded-full blur-sm"
                        style={{
                          background: fragment.accent
                            ? "rgb(var(--ei-halo-blue-rgb) / 0.3)"
                            : "rgb(var(--ei-ice-white-rgb) / 0.2)",
                        }}
                      />
                    </span>
                  </div>

                  {/* Fragment text */}
                  <p
                    className={[
                      "ei-type-philosophy-fragment",
                      fragment.accent
                        ? "ei-type-philosophy-fragment-accent"
                        : "",
                    ].join(" ")}
                  >
                    {fragment.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
