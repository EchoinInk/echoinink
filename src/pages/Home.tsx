import { Helmet } from 'react-helmet-async';
import { PageShell } from '@/components/system';
import { Hero } from '@/components/hero/Hero';
import { CinematicStatement } from '@/components/CinematicStatement';
import { Philosophy } from '@/components/Philosophy';
import { EcosystemPathways } from '@/components/EcosystemPathways';
import { SelectedWorks } from '@/components/SelectedWorks';
import { Pathways } from '@/components/Pathways';
import { SystemPreview } from '@/components/SystemPreview';
import { LumoCaseStudyTeaser } from '@/components/LumoCaseStudyTeaser';
import { WhyPeopleComeHere } from '@/components/WhyPeopleComeHere';
import { HumanSignal } from '@/components/HumanSignal';
import { ClosingSection } from '@/components/ClosingSection';

export function Home() {
  return (
    <PageShell id="main-content" atmosphere="default" withTopSpacing={false}>
      <Helmet>
        <title>Echo in Ink — Identity systems, atmospheric worlds, reflective tools</title>
        <meta
          name="description"
          content="Echo in Ink builds identity systems, atmospheric worlds, and reflective tools for founders and artists. Studio, Systems, and Lumo."
        />
      </Helmet>

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO — Cinematic entrance with volumetric depth layers
          ═══════════════════════════════════════════════════════════════ */}
      <Hero />

      {/* ═══════════════════════════════════════════════════════════════
          2. ETHOS — "A different frequency" — tonal breathing moment
          ═══════════════════════════════════════════════════════════════ */}
      <CinematicStatement />

      {/* ═══════════════════════════════════════════════════════════════
          3. PHILOSOPHY — "Atmosphere is not decoration…"
          ═══════════════════════════════════════════════════════════════ */}
      <Philosophy />

      {/* ═══════════════════════════════════════════════════════════════
          4. ECOSYSTEM PATHWAYS — Studio → Systems → Lumo
          ═══════════════════════════════════════════════════════════════ */}
      <EcosystemPathways />

      {/* ═══════════════════════════════════════════════════════════════
          5. SELECTED WORKS — Archive preview
          ═══════════════════════════════════════════════════════════════ */}
      <SelectedWorks />

      {/* ═══════════════════════════════════════════════════════════════
          6. STUDIO OFFERS — Sessions / Identity / Worlds
          ═══════════════════════════════════════════════════════════════ */}
      <Pathways />

      {/* ═══════════════════════════════════════════════════════════════
          7. SYSTEMS PREVIEW — Frameworks, tools, GPT systems
          ═══════════════════════════════════════════════════════════════ */}
      <SystemPreview />

      {/* ═══════════════════════════════════════════════════════════════
          8. LUMO PREVIEW — Reflective technology, featured work
          ═══════════════════════════════════════════════════════════════ */}
      <LumoCaseStudyTeaser />

      {/* ═══════════════════════════════════════════════════════════════
          9. WHY PEOPLE COME HERE — Editorial resonance list
          ═══════════════════════════════════════════════════════════════ */}
      <WhyPeopleComeHere />

      {/* ═══════════════════════════════════════════════════════════════
          10. HUMAN SIGNAL — Founder voice, intimate authored moment
          ═══════════════════════════════════════════════════════════════ */}
      <HumanSignal />

      {/* ═══════════════════════════════════════════════════════════════
          11. ATMOSPHERIC CLOSING — "Start a World"
          ═══════════════════════════════════════════════════════════════ */}
      <ClosingSection />
    </PageShell>
  );
}