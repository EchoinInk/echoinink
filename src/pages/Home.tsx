import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/hero/Hero';
import { FeaturedWorkPreview } from '@/components/FeaturedWorkPreview';
import { StudioIntro } from '@/components/StudioIntro';
import { SelectedWorks } from '@/components/SelectedWorks';
import { Philosophy } from '@/components/Philosophy';
import { LumoCaseStudyTeaser } from '@/components/LumoCaseStudyTeaser';
import { StudioNotes } from '@/components/StudioNotes';
import { WorkWithStudio } from '@/components/WorkWithStudio';
import { ClosingSection } from '@/components/ClosingSection';

export function Home() {
  return (
    <main id="main-content" className="relative">
      <Helmet>
        <title>Echo in Ink — Calm, intentional design studio</title>
        <meta name="description" content="Echo in Ink is a creative studio exploring identity, storytelling, and immersive digital expression through art, design, and atmospheric media." />
      </Helmet>
      <Hero />
      <FeaturedWorkPreview />
      <StudioIntro />
      <SelectedWorks />
      <Philosophy />
      <LumoCaseStudyTeaser />
      <StudioNotes />
      <WorkWithStudio />
      <ClosingSection />
    </main>
  );
}
