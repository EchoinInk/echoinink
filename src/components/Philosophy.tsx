import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import {
  blurEmergence,
  driftUp,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from '@/lib/motion-cinematic';

const fragments = [
  {
    text: 'Brands change now and forget later. We build worlds.',
    accent: false,
  },
  {
    text: 'Worlds that hold feeling, depth, and intelligence.',
    accent: false,
  },
  {
    text: 'Worlds that make people remember what cannot be explained.',
    accent: false,
  },
  {
    text: 'We do not decorate brands. We reveal what they are becoming.',
    accent: true,
  },
];

export function Philosophy() {
  return (
    <Section spacing="sm" className="ei-section-standard relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 30% at 30% 40%, rgb(var(--ei-ion-violet-rgb) / 0.018) 0%, transparent 60%)',
          filter: 'blur(50px)',
        }}
      />

<Container>
  <motion.div className="mx-auto max-w-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
        >
          {/* Section eyebrow */}
          <motion.div
            variants={driftUp}
            className="mb-8 flex items-center gap-4 md:mb-12"
          >
            <span className="ei-eyebrow">Our Philosophy</span>

            <div
              className="h-px w-10 shrink-0 rounded-full shadow-[0_0_12px_rgb(var(--ei-neon-magenta-rgb)/0.45)]"
              style={{
                background:
                  'linear-gradient(90deg, rgb(var(--ei-orbit-blue-rgb) / 0.15) 0%, rgb(var(--ei-neon-magenta-rgb) / 0.95) 100%)',
              }}
            />
          </motion.div>

          {/* Two-column: heading left, fragments right */}
<div className="grid items-start gap-8 md:grid-cols-[1.15fr_1fr] md:gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">            {/* Left — Heading + body */}
            <motion.div variants={staggerContainer(STAGGER.loose, 0)}>
              <motion.h2
                variants={blurEmergence}
                className="ei-section-title mb-5 mt-3 max-w-[23ch] whitespace-pre-line md:mt-4"
              >
                {'Atmosphere is not decoration —\nit is how meaning is felt.'}
              </motion.h2>

              <motion.p
                variants={driftUp}
                className="font-structural max-w-[38ch] text-[14px] leading-[1.75] text-white/60 md:text-[15px]"
              >
                Everything we create is immersed in the invisible. A language of
                emotion, memory, and intention.
              </motion.p>
            </motion.div>

            {/* Right — 4 philosophy fragment columns */}
            <motion.div
              variants={staggerContainer(STAGGER.normal, 0.25)}
              className="mt-2 grid grid-cols-2 gap-x-8 gap-y-10 md:mt-0 xl:grid-cols-4"
            >
              {fragments.map((fragment, i) => (
                <motion.div
                  key={i}
                  variants={driftUp}
                  className="relative pl-6"
                >
                  {/* Vertical divider */}
                  {i !== 0 && (
                    <div
                      className="absolute left-0 top-0 h-full w-px"
                      style={{
                        background:
                          'linear-gradient(to bottom, transparent 0%, rgb(var(--ei-photon-white-rgb) / 0.08) 18%, rgb(var(--ei-photon-white-rgb) / 0.08) 82%, transparent 100%)',
                      }}
                    />
                  )}

                  {/* Glow anchor dot */}
                  <div className="mb-4" aria-hidden="true">
                    <span className="relative inline-block h-3 w-3">
                      <span
                        className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{
                          background: fragment.accent
                            ? 'var(--ei-orchid-plasma)'
                            : 'rgb(var(--ei-stellar-lilac-rgb) / 0.45)',
                        }}
                      />

                      <span
                        className="absolute inset-0 rounded-full blur-sm"
                        style={{
                          background: fragment.accent
                            ? 'rgb(var(--ei-ion-violet-rgb) / 0.3)'
                            : 'rgb(var(--ei-ion-violet-rgb) / 0.2)',
                        }}
                      />
                    </span>
                  </div>

                  {/* Fragment text */}
                  <p
                    className="font-structural text-[12px] leading-[1.7] md:text-[13px]"
                    style={{
                      color: fragment.accent
                        ? 'var(--ei-neon-magenta)'
                        : 'rgb(var(--ei-photon-white-rgb) / 0.62)',
                    }}
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