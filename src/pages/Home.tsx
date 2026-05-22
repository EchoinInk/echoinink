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
</div>
<Section className="relative pt-20 md:pt-28 lg:pt-36 pb-24 md:pb-36 lg:pb-44 overflow-hidden">
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