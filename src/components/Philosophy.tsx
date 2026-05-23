import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { EASE, DURATION, VIEWPORT, STAGGER } from '@/lib/motion';

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
            title={"Atmosphere is not decoration —\nit is how meaning is felt."}
            description="Everything begins with emotional truth: a feeling, a tension, a memory, a fragment of identity waiting for language. Echo in Ink builds the worlds those things belong to."
          />

          {/* Atmospheric text block with motion */}
<div className="font-structural text-[14px] md:text-[15px] text-white/60 leading-[1.85] space-y-6 mt-12 md:mt-16 mb-12 md:mb-16">

            {[
              "Some things are felt long before they can be articulated.",
              "Echo in Ink exists for founders, artists, and visionaries carrying something real beneath the surface — something difficult to translate clearly without losing its texture.",
              "This studio was built to preserve that texture.",
              "Through identity, atmosphere, narrative, and systems, we create work that feels coherent, emotionally precise, and unmistakably true."
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT.normal}
                transition={{
                  duration: DURATION.normal,
                  ease: EASE,
                  delay: 0.18 + i * STAGGER.normal,
                }}
              >
                {text}
              </motion.p>
            ))}

          </div>

        </div>
      </Container>
    </Section>
  );
}
