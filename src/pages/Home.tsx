import { Hero } from '@/components/hero/Hero';
import { StudioIntro } from '@/components/StudioIntro';
import { SelectedWorks } from '@/components/SelectedWorks';
import { Philosophy } from '@/components/Philosophy';
import { LumoCaseStudyTeaser } from '@/components/LumoCaseStudyTeaser';
import { StudioNotes } from '@/components/StudioNotes';
import { WorkWithStudio } from '@/components/WorkWithStudio';
import { ClosingSection } from '@/components/ClosingSection';

export function Home() {
  return (
    <div className="relative">
      <Hero />
      <StudioIntro />
      <SelectedWorks />
      <Philosophy />
      <LumoCaseStudyTeaser />
      <StudioNotes />
      <WorkWithStudio />
      <ClosingSection />
    </div>
  );
}
