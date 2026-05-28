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
    <Section spacing="sm" className="ei-section-standard overflow-hidden relative">
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
  <motion.div
    className="max-w-[1240px] mx-auto"
    initial="hidden"
    whileInView="visible"
    viewport={VIEWPORT.normal}
  >
    {/* Section eyebrow */}
    <motion.div
      variants={driftUp}
      className="flex items-center gap-4 mb-8 md:mb-12"
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
<div className="grid md:grid-cols-[0.95fr_1.25fr] lg:grid-cols-[1fr_1.35fr] gap-10 md:gap-14 lg:gap-16 items-start">      {/* Left — Heading + body */}
      <motion.div
        variants={staggerContainer(STAGGER.loose, 0)}
        className="max-w-[780px]"
      >
        <motion.h2
  variants={blurEmergence}
  className="ei-section-title mt-3 md:mt-4 mb-5 max-w-[23ch] whitespace-pre-line"
>
  {'Atmosphere is not decoration —\nit is how meaning is felt.'}
</motion.h2>

        <motion.p
          variants={driftUp}
          className="font-structural text-[14px] md:text-[15px] leading-[1.75] text-white/60 max-w-[52ch]"
        >
          Everything we create is immersed in the invisible. A language of
          emotion, memory, and intention.
        </motion.p>
      </motion.div>

      {/* Right — 4 philosophy fragment columns */}
      <motion.div
        variants={staggerContainer(STAGGER.normal, 0.25)}
        className="grid grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-10 mt-2 md:mt-0"
      >
        {fragments.map((fragment, i) => (
          <motion.div
            key={i}
            variants={driftUp}
            className="relative pl-6"
          >
            {i !== 0 && (
              <div
                className="absolute left-0 top-0 h-full w-px"
                style={{
                  background:
                    'linear-gradient(to bottom, transparent 0%, rgb(var(--ei-photon-white-rgb) / 0.08) 18%, rgb(var(--ei-photon-white-rgb) / 0.08) 82%, transparent 100%)',
                }}
              />
            )}

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

            <p
              className="font-structural text-[12px] md:text-[13px] leading-[1.7]"
              style={{
                color: fragment.accent
                  ? 'var(--ei-electric-cobalt)'
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