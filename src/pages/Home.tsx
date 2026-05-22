import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/hero/Hero';
import { StudioIntro } from '@/components/StudioIntro';
import { Philosophy } from '@/components/Philosophy';
import { LumoCaseStudyTeaser } from '@/components/LumoCaseStudyTeaser';
import { ClosingSection } from '@/components/ClosingSection';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

export function Home() {
  return (
    <main id="main-content" className="relative">
      <Helmet>
        <title>Echo in Ink — Calm, intentional design studio</title>
        <meta name="description" content="Echo in Ink is a creative studio exploring identity, storytelling, and immersive digital expression through art, design, and atmospheric media." />
      </Helmet>
      <Hero />
<div className="relative -mt-16 md:-mt-24 pointer-events-none">
  <div className="h-32 md:h-40 lg:h-48 bg-gradient-to-b from-transparent via-black/10 to-black" />
</div>        <div className="h-24 md:h-32 lg:h-40 bg-gradient-to-b from-transparent via-black/15 to-black" />
      </div>
      <Section className="relative py-24 md:py-36 lg:py-44 overflow-hidden">
        <Container size="xl">
          <div className="max-w-[680px] mx-auto text-center">

            {/* Eyebrow */}
            <p className="font-structural text-[14px] md:text-[15px] text-white/70 leading-[1.75] mb-10 md:mb-12 tracking-wide">
              A creative studio shaped by intention.
            </p>

            {/* Core statement */}
            <p className="font-structural text-[15px] md:text-[16px] text-white/55 leading-[1.9] max-w-[58ch] mx-auto">
              Echo in Ink is where ideas are distilled, clarified, and rebuilt with care.
            </p>

            <div className="h-8" />

            {/* Atmospheric expansion */}
            <p className="font-structural text-[14px] md:text-[15px] text-white/45 leading-[1.95] max-w-[62ch] mx-auto italic">
              A place for brands, founders, and dreamers who want work that feels alive—quiet, intelligent, and deeply considered.
            </p>

            <div className="h-6" />

            {/* Closing anchor */}
            <p className="font-structural text-[14px] md:text-[15px] text-white/60 leading-[1.75] tracking-wide">
              We make meaning visible.
            </p>

          </div>
        </Container>
      </Section>
      <StudioIntro />
      <Philosophy />
      <LumoCaseStudyTeaser />
      <ClosingSection />
    </main>
  );
}