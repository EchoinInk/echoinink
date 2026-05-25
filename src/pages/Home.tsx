import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/hero/Hero';
import { Philosophy } from '@/components/Philosophy';
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

      {/* ═══════════════════════════════════════════════════════════════
          HERO — Cinematic entrance with volumetric depth layers
          ═══════════════════════════════════════════════════════════════ */}
      <Hero />

      {/* ═══════════════════════════════════════════════════════════════
          PHILOSOPHY — Editorial foundation
          ═══════════════════════════════════════════════════════════════ */}
      <Philosophy />

      {/* ═══════════════════════════════════════════════════════════════
          PATHWAYS — Core offerings (Identity, Sessions, Worlds)
          ═══════════════════════════════════════════════════════════════ */}
      <Pathways />

      {/* ═══════════════════════════════════════════════════════════════
          LUMO CASE STUDY — Featured work, editorial presentation
          ═══════════════════════════════════════════════════════════════ */}
      <LumoCaseStudyTeaser />

      {/* ═══════════════════════════════════════════════════════════════
          EMERGING SYSTEMS — Active archives and future worlds
          ═══════════════════════════════════════════════════════════════ */}
      <EmergingSystems />

      {/* ═══════════════════════════════════════════════════════════════
          CLOSING — Call to action
          Seamless transition, no bridge needed
          ═══════════════════════════════════════════════════════════════ */}
      <ClosingSection />

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER — Atmospheric epilogue
          World dissolving into darkness
          ═══════════════════════════════════════════════════════════════ */}
      <Footer />
    </main>
  );
}