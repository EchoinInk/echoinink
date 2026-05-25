import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/hero/Hero';
import { Philosophy } from '@/components/Philosophy';
import { AtmospherePause } from '@/components/AtmospherePause';
import { Pathways } from '@/components/Pathways';
import { LumoCaseStudyTeaser } from '@/components/LumoCaseStudyTeaser';
import { EmergingSystems } from '@/components/EmergingSystems';
import { ClosingSection } from '@/components/ClosingSection';
import Footer from '@/components/Footer';

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
      
      {/* Hero — Cinematic entrance with EI monogram */}
      <Hero />
      
      {/* Philosophy — Editorial foundation */}
      <Philosophy />
      
      {/* Atmospheric pause — Cinematic breathing moment */}
      <AtmospherePause />
      
      {/* Pathways — Core offerings */}
      <Pathways />
      
      {/* Featured work — Lumo case study */}
      <LumoCaseStudyTeaser />
      
      {/* Emerging systems — Future offerings */}
      <EmergingSystems />
      
      {/* Closing — Call to action */}
      <ClosingSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}