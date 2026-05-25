import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/hero/Hero';
import { Philosophy } from '@/components/Philosophy';
import { Pathways } from '@/components/Pathways';
import { LumoCaseStudyTeaser } from '@/components/LumoCaseStudyTeaser';
import { EmergingSystems } from '@/components/EmergingSystems';
import { ClosingSection } from '@/components/ClosingSection';
import { AtmosphericBridge } from '@/components/AtmosphericContinuity';
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

      {/* Atmospheric continuity bridge */}
      <AtmosphericBridge intensity="subtle" fadeDirection="down" />

      {/* ═══════════════════════════════════════════════════════════════
          PHILOSOPHY — Editorial foundation
          ═══════════════════════════════════════════════════════════════ */}
      <Philosophy />

      {/* ═══════════════════════════════════════════════════════════════
          PATHWAYS — Core offerings (Identity, Sessions, Worlds)
          ═══════════════════════════════════════════════════════════════ */}
      <Pathways />

      {/* Bridge to work section */}
      <AtmosphericBridge intensity="medium" fadeDirection="both" />

      {/* ═══════════════════════════════════════════════════════════════
          LUMO CASE STUDY — Featured work, editorial presentation
          ═══════════════════════════════════════════════════════════════ */}
      <LumoCaseStudyTeaser />

      {/* Bridge to emerging systems */}
      <AtmosphericBridge intensity="subtle" fadeDirection="down" />

      {/* ═══════════════════════════════════════════════════════════════
          EMERGING SYSTEMS — Active archives and future worlds
          ═══════════════════════════════════════════════════════════════ */}
      <EmergingSystems />

      {/* Bridge to closing */}
      <AtmosphericBridge intensity="deep" fadeDirection="up" />

      {/* ═══════════════════════════════════════════════════════════════
          CLOSING — Call to action
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