import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/hero/Hero';
import { Philosophy } from '@/components/Philosophy';
import { AtmospherePause } from '@/components/AtmospherePause';
import { Pathways } from '@/components/Pathways';
import { LumoCaseStudyTeaser } from '@/components/LumoCaseStudyTeaser';
import { WorkWithStudio } from '@/components/WorkWithStudio';
import { ClosingSection } from '@/components/ClosingSection';
import { AtmosphericContinuity, AtmosphericBridge } from '@/components/AtmosphericContinuity';
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

      {/* Ultra-subtle atmospheric layer between Philosophy and Pause */}
      <AtmosphericContinuity
        height="80px"
        accentPosition="left"
        accentColor="violet"
      />

      {/* ═══════════════════════════════════════════════════════════════
          ATMOSPHERE PAUSE — Cinematic breathing moment
          ═══════════════════════════════════════════════════════════════ */}
      <AtmospherePause />

      {/* Atmospheric continuity after pause */}
      <AtmosphericContinuity
        height="100px"
        accentPosition="right"
        accentColor="indigo"
      />

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

      {/* Atmospheric separation */}
      <AtmosphericContinuity
        height="60px"
        accentPosition="center"
        accentColor="pink"
      />

      {/* ═══════════════════════════════════════════════════════════════
          WORK WITH STUDIO — Asymmetric orchestrated offerings
          ═══════════════════════════════════════════════════════════════ */}
      <WorkWithStudio />

      {/* Deep atmospheric bridge before closing */}
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