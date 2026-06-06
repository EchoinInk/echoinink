import { Helmet } from 'react-helmet-async';
import { PageShell } from '@/components/layout/PageShell';
import { Hero } from '@/components/home/HomeHero';
import { Philosophy } from '@/components/home/HomePhilosophySection';
import { WhatWeCreate } from '@/components/home/HomeWhatWeCreate';
import { LumoCaseStudyTeaser } from '@/components/home/HomeFeaturedLumo';
import { EmergingSystems } from '@/components/home/HomeOurSystems';
import { ClosingSection } from '@/components/home/HomeClosingSection';

export function Home() {
  return (
    <PageShell id="main-content" atmosphere="default" withTopSpacing={false}>
      <Helmet>
        <title>Echo in Ink — We design worlds</title>
        <meta
          name="description"
          content="Echo in Ink is a cinematic design studio crafting identity systems, immersive websites, and atmospheric digital worlds for founders, artists, and emerging brands."
        />
      </Helmet>

      {/* ── HERO — Cinematic world entry ─────────────────────── */}
      <Hero />

      {/* ── PHILOSOPHY — Atmospheric worldview ───────────────── */}
      <Philosophy />

      {/* ── WHAT WE CREATE — 4 transformation card types ─────── */}
      <WhatWeCreate />

      {/* ── FEATURED WORK — LUMO proof anchor ────────────────── */}
      <LumoCaseStudyTeaser />

      {/* ── OUR SYSTEMS — Infrastructure signal ──────────────── */}
      <EmergingSystems />

      {/* ── CLOSING CTA — Ecosystem invitation ───────────────── */}
      <ClosingSection />

      {/* ── REMOVED FOOTER AS IN  — 4-column atmospheric epilogue ───────────── */}
      
    </PageShell>
  );
}