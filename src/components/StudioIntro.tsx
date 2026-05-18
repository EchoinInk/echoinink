import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { ContentContainer } from '@/components/layout/ContentContainer';
import { SectionHeading } from '@/components/layout/SectionHeading';

const EASE = [0.22, 1, 0.36, 1] as const;

export function StudioIntro() {
  return (
    <Section className="relative py-20 md:py-48 lg:py-56 overflow-hidden">
      {/* Atmospheric depth accent — soft violet cloud, right side */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '10%',
          right: '-8%',
          width: 'clamp(320px, 42vw, 640px)',
          height: 'clamp(320px, 42vw, 640px)',
          background: 'radial-gradient(ellipse 68% 68% at 70% 44%, rgba(168,85,247,0.055) 0%, transparent 72%)',
          filter: 'blur(90px)',
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
          background: 'radial-gradient(ellipse 70% 70% at 32% 60%, rgba(232,121,249,0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <ContentContainer>
        <div className="max-w-4xl">
          <SectionHeading eyebrow="Studio" title="" className="[&>h2]:hidden" />
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, ease: EASE, delay: 0 }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-12 md:mb-16"
          >
            Studio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.15, ease: EASE, delay: 0.12 }}
            className="font-editorial text-[2rem] md:text-[2.6rem] lg:text-[3.2rem] text-[#E8EAF6]/85 leading-[1.24] mb-10 md:mb-14"
            style={{ letterSpacing: '-0.012em' }}
          >
            Echo in Ink is a cinematic creative studio
            <br className="hidden md:block" />
            shaped by curiosity, identity,
            <br className="hidden md:block" />
            and the emotional gravity of storytelling.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.24 }}
            className="font-structural text-[14px] md:text-[15px] text-white/45 leading-[1.88] max-w-[62ch] mb-6 md:mb-8"
          >
            I work at the intersection of art, design, and digital expression —
            crafting visuals, narratives, and immersive worlds that feel intentional,
            atmospheric, and full of light.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.36 }}
            className="font-structural text-[13px] md:text-[14px] text-white/35 leading-[1.88] max-w-[58ch]"
          >
            This is a studio built on authorship and atmosphere — a place where ideas take shape in ink and unfold into luminous digital experiences.
          </motion.p>
        </div>
      </ContentContainer>
    </Section>
  );
}
