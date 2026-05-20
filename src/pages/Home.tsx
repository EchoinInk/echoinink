import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/hero/Hero';
import { StudioIntro } from '@/components/StudioIntro';
import { Philosophy } from '@/components/Philosophy';
import { LumoCaseStudyTeaser } from '@/components/LumoCaseStudyTeaser';
import { ClosingSection } from '@/components/ClosingSection';

export function Home() {
  return (
    <main id="main-content" className="relative">
      <Helmet>
        <title>Echo in Ink — Calm, intentional design studio</title>
        <meta name="description" content="Echo in Ink is a creative studio exploring identity, storytelling, and immersive digital expression through art, design, and atmospheric media." />
      </Helmet>
      <Hero />
      <StudioIntro />
      <div className="absolute size-full bg-white transition-all duration-1000 ease-out bg-[size:16px_16px] bg-[position:0_0,8px_8px] bg-[image:linear-gradient(45deg,#efefef_25%,rgba(239,239,239,0)_25%,rgba(239,239,239,0)_75%,#efefef_75%,#efefef),linear-gradient(45deg,#efefef_25%,rgba(239,239,239,0)_25%,rgba(239,239,239,0)_75%,#efefef_75%,#efefef)] [clip-path:polygon(0px_0px,0%_0px,0%_100%,0px_100%)]"></div>

      <Philosophy />
      <LumoCaseStudyTeaser />
      <ClosingSection />
    </main>
  );
}
