import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { ContentContainer } from '@/components/layout/ContentContainer';
import { SectionHeading } from '@/components/layout/SectionHeading';

const EASE = [0.22, 1, 0.36, 1] as const;

const principles = [
  'Atmosphere over noise.',
  'Emotion over spectacle.',
  'Intention over excess.',
] as const;

export function Philosophy() {
  return (
    <Section className="relative py-20 md:py-52 overflow-hidden">
      {/* Faint indigo atmospheric center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 65% at 50% 50%, rgba(99,102,241,0.04) 0%, transparent 72%)',
        }}
      />

      {/* Thin separator above */}
      <ContentContainer className="mb-14 md:mb-36">
        <div
          className="w-full h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.06) 75%, transparent)',
          }}
        />
      </ContentContainer>

      <ContentContainer>
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Approach"
            title="I believe creativity is a form of worldbuilding — a way of translating memory, identity, and emotion into something you can step inside."
            description="Every piece begins with a feeling: a fragment of self, a moment of resonance, a story waiting to surface."
          />

          {/* Principles triptych */}
          <div className="mb-16 md:mb-24 mt-16 md:mt-24">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.14 }}
              className="block font-structural text-[10px] tracking-[0.28em] uppercase text-white/20 mb-8"
            >
              Guided by
            </motion.span>

            <div className="space-y-0">
              {principles.map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.0, ease: EASE, delay: 0.22 + i * 0.1 }}
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
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.18 }}
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
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 1.5, ease: EASE, delay: 0.22 }}
            className="font-structural text-[12px] md:text-[13px] text-white/25 leading-[1.9] max-w-[44ch] mt-14 md:mt-20"
          >
            I create worlds for people who feel too much and think too deeply.
            <br />
            If that's you, you're home.
          </motion.p>
        </div>
      </ContentContainer>
    </Section>
  );
}
