import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/hero/Hero';
import { StudioIntro } from '@/components/StudioIntro';
import { Philosophy } from '@/components/Philosophy';
import { Pathways } from '@/components/Pathways';
import { LumoCaseStudyTeaser } from '@/components/LumoCaseStudyTeaser';
import { EmergingSystems } from '@/components/EmergingSystems';
import { ClosingSection } from '@/components/ClosingSection';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

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

      {/* Transition — tightened atmospheric bridge */}
      <div className="relative -mt-16 md:-mt-24 pointer-events-none">
        <div className="h-36 md:h-48 lg:h-56 bg-gradient-to-b from-transparent via-black/25 to-black" />
      </div>

      {/* Intro — now reduced to avoid duplication with StudioIntro */}
      <Section className="relative pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-12 lg:pb-16 overflow-hidden">
        <Container size="xl">
          <div className="max-w-[620px] mx-auto text-center">
            <p className="text-white/70 text-[14px] md:text-[15px] tracking-wide leading-relaxed">
              A creative studio shaped by intention.
            </p>
          </div>
        </Container>
      </Section>

      {/* Main editorial block */}
      <StudioIntro />

      <Philosophy />
      <Pathways />
      <LumoCaseStudyTeaser />
      <EmergingSystems />

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

      <ClosingSection />
    </main>
  );
}