import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { EASE, DURATION, VIEWPORT } from '@/lib/motion';

export function StudioIntro() {
  return (
    <Section className="relative py-20 md:py-32 lg:py-36 overflow-hidden">
      {/* Subtle tonal transition from hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 120% 80% at 50% 20%, rgba(99,102,241,0.015) 0%, transparent 50%)',
        }}
      />
      {/* Atmospheric depth accent — soft violet cloud, right side */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          right: '-8%',
          width: 'clamp(320px, 42vw, 640px)',
          height: 'clamp(320px, 42vw, 640px)',
          background: 'radial-gradient(ellipse 68% 68% at 70% 44%, rgba(168,85,247,0.045) 0%, transparent 72%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Warm hint — lower left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '5%',
          left: '-4%',
          width: 'clamp(200px, 28vw, 420px)',
          height: 'clamp(200px, 28vw, 420px)',
          background: 'radial-gradient(ellipse 70% 70% at 32% 60%, rgba(232,121,249,0.032) 0%, transparent 70%)',
          filter: 'blur(75px)',
        }}
      />

      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeading
            eyebrow="Studio"
            title="Echo in Ink is a cinematic creative studio shaped by curiosity, identity, and the emotional gravity of storytelling."
            description="I work at the intersection of art, design, and digital expression — crafting visuals, narratives, and immersive worlds that feel intentional, atmospheric, and full of light."
            centered
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.slow, ease: EASE, delay: 0.36 }}
            className="font-structural text-[14px] md:text-[15px] text-white/50 leading-[1.85] max-w-[42ch] mx-auto mt-8 md:mt-10"
          >
            This is a studio built on authorship and atmosphere — a place where ideas take shape in ink and unfold into luminous digital experiences.
          </motion.p>
        </div>
      </Container>
    </Section>
  );
}
