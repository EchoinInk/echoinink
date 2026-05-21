import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/hero/Hero';
import { StudioIntro } from '@/components/StudioIntro';
import { Philosophy } from '@/components/Philosophy';
import { LumoCaseStudyTeaser } from '@/components/LumoCaseStudyTeaser';
import { ClosingSection } from '@/components/ClosingSection';

export function Home() {
  return (
    <main id="main-content" className="relative">
      <Helmet>
        <title>Echo in Ink — Calm, intentional design studio</title>
        <meta name="description" content="Echo in Ink is a creative studio exploring identity, storytelling, and immersive digital expression through art, design, and atmospheric media." />
      </Helmet>
      <Hero />
      <StudioIntro />
      <Philosophy />
      <LumoCaseStudyTeaser />
      <ClosingSection />
    </main>
  );
}