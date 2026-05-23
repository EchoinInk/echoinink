import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { EASE, DURATION, VIEWPORT, STAGGER } from '@/lib/motion';

const principles = [
  'Atmosphere over noise.',
  'Emotion over spectacle.',
  'Intention over excess.',
] as const;

export function Philosophy() {
  return (
    <Section className="relative py-24 md:py-36 overflow-hidden">
      {/* Reduced atmosphere - typography-led section */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 65% at 50% 50%, rgba(99,102,241,0.018) 0%, transparent 72%)',
        }}
      />
      <Container>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24">
          <SectionHeading
            eyebrow="Philosophy"
            title="Atmosphere is not decoration — it is how meaning is felt."
            description="Everything begins with emotional truth: a feeling, a tension, a memory, a fragment of identity waiting for language. Echo in Ink builds the worlds those things belong to."
          />

          {/* Principles triptych */}
          <div className="mb-12 md:mb-16 mt-12 md:mt-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VIEWPORT.normal}
              transition={{ duration: DURATION.normal, ease: EASE, delay: 0.14 }}
              className="block font-structural text-[10px] tracking-[0.28em] uppercase text-white/20 mb-8"
            >
              Guided by
            </motion.span>

            <div className="space-y-0 md:ml-8">
              {principles.map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VIEWPORT.normal}
                  transition={{ duration: DURATION.normal, ease: EASE, delay: 0.22 + i * STAGGER.tight }}
                  className="font-editorial text-[1.25rem] md:text-[1.55rem] text-[#E8EAF6]/70 leading-[1.85]"
                  style={{ letterSpacing: '-0.006em' }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Closing */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.slow, ease: EASE, delay: 0.18 }}
            className="font-structural text-[13px] md:text-[14px] text-white/35 leading-[1.95] max-w-[55ch]"
          >
            I create slowly, cinematically, letting each idea breathe into form.
            The goal is not perfection, but presence — work that feels lived-in,
            luminous, and quietly transformative.
          </motion.p>

          {/* Human signal */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.slower, ease: EASE, delay: STAGGER.normal }}
            className="font-structural text-[12px] md:text-[13px] text-white/25 leading-[1.9] max-w-[44ch] mt-8 md:mt-12"
          >
            I create worlds for people who feel too much and think too deeply.
            <br />
            If that's you, you're home.
          </motion.p>
        </div>
      </Container>
    </Section>
  );
}
