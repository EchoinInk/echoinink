import { Helmet } from 'react-helmet-async';

import LumoHero from '@/components/lumo/LumoHero';
import LumoOverview from '@/components/lumo/LumoOverview';
import LumoBelief from '@/components/lumo/LumoBelief';
import LumoArchitecture from '@/components/lumo/LumoArchitecture';
import LumoVisualGrid from '@/components/lumo/LumoVisualGrid';
import LumoOutcome from '@/components/lumo/LumoOutcome';
import LumoAudience from '@/components/lumo/LumoAudience';
import LumoCTA from '@/components/lumo/LumoCTA';

export function LumoPage() {
  return (
    <main className="relative">
      <Helmet>
        <title>Lumo — Echo in Ink</title>
        <meta name="description" content="A signature case study exploring atmospheric identity, narrative design, and cinematic digital experience." />
      </Helmet>

      {/* Atmospheric base */}
      <div className="absolute inset-0 ei-glow-violet opacity-25 pointer-events-none" />

      <LumoHero />
      <LumoOverview />
      <LumoBelief />
      <LumoArchitecture />
      <LumoVisualGrid />
      <LumoOutcome />
      <LumoAudience />
      <LumoCTA />
    </main>
  );
}
