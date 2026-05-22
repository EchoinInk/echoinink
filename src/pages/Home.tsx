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
<div className="relative -mt-20 md:-mt-28 pointer-events-none">
  <div className="h-40 md:h-56 lg:h-64 
    bg-gradient-to-b from-transparent via-black/20 to-black" />
</div>
<Section className="relative pt-20 md:pt-28 lg:pt-36 pb-16 md:pb-20 lg:pb-24 overflow-hidden">
          <Container size="xl">
          <div className="max-w-[680px] mx-auto text-center">
            {/* Eyebrow */}
            <p className="...">
  A creative studio shaped by intention.
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