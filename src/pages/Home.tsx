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
      <Section className="relative py-20 md:py-32 lg:py-36 overflow-hidden">
        <Container size="xl">
          <div className="max-w-[600px] md:max-w-[680px] mx-auto text-center">
            <p className="font-structural text-[14px] md:text-[15px] text-white/70 leading-[1.75] mb-8 md:mb-10">
              A creative studio shaped by intention.
            </p>
            <p className="font-structural text-[14px] md:text-[15px] text-white/50 leading-[1.85] max-w-[48ch] mx-auto">
              Echo in Ink is where ideas are distilled, clarified, and rebuilt with care.
              <br />
              A place for brands, founders, and dreamers who want work that feels alive—quiet, intelligent, and deeply considered.
              <br />
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