import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/hero/Hero';
import { Philosophy } from '@/components/Philosophy';
import { Pathways } from '@/components/Pathways';
import { LumoCaseStudyTeaser } from '@/components/LumoCaseStudyTeaser';
import { EmergingSystems } from '@/components/EmergingSystems';
import { PageCTA } from '@/components/PageCTA';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { ClosingSection } from '@/components/ClosingSection';

export function Home() {
  return (
    <main id="main-content" className="relative">
      <Helmet>
        <title>Echo in Ink — Calm, intentional design studio</title>
        <meta
          name="description"
          content="Echo in Ink is a creative studio exploring identity, storytelling, and immersive digital expression through art, design, and atmospheric media."
        />
      </Helmet>
      {/* Hero */}
      <Hero />
    {/* Main editorial block */}
      <Philosophy />
      <Pathways />
      <LumoCaseStudyTeaser />
      <EmergingSystems />
<Closing
      {/* Breathing bridge — atmospheric transition between worlds */}
      <div
        aria-hidden="true"
        className="relative h-20 md:h-28 lg:h-32 pointer-events-none overflow-hidden"
        style={{
          background: 'linear-gradient(to bottom, #080A14, #0A0D18)',
        }}
      >
        {/* Soft radial drift for emotional continuity */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(99,102,241,0.03) 0%, transparent 70%)',
          }}
        />
      </div>

      <PageCTA page="home" />
    </main>
  );
}