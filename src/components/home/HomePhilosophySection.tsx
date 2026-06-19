import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
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
      className="relative overflow-hidden pt-12 pb-2 md:pt-16 md:pb-4"
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

      <Container className="relative z-10">
        <motion.div
          className="mx-auto max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
        >
          <motion.div
            variants={driftUp}
            className="mb-6 md:mb-8"
          >
            <SectionLabel
              label="Our Philosophy"
              className="ei-home-philosophy-label"
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
                        className="absolute left-1/2 top-1/2 h-[0.34rem] w-[0.34rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{
                          background: fragment.accent
                            ? "var(--ei-halo-blue)"
                            : "rgb(var(--ei-violet-rgb) / 0.62)",
                        }}
                      />

                      <span
                        className="absolute inset-[0.1rem] rounded-full"
                        style={{
                          background: fragment.accent
                            ? "rgb(var(--ei-halo-blue-rgb) / 0.22)"
                            : "rgb(var(--ei-ice-white-rgb) / 0.08)",
                          boxShadow: fragment.accent
                            ? "0 0 10px rgb(var(--ei-halo-blue-rgb) / 0.28)"
                            : "0 0 5px rgb(var(--ei-ice-white-rgb) / 0.08)",
                          opacity: fragment.accent ? 0.9 : 0.72,
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
