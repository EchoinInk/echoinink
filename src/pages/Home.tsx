import { Hero } from '@/components/Hero';
import { StudioIntro } from '@/components/StudioIntro';
import { SelectedWorks } from '@/components/SelectedWorks';
import { Philosophy } from '@/components/Philosophy';
import { SignatureCaseStudy } from '@/components/SignatureCaseStudy';
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
      <div id="lumo-case-study">
        <SignatureCaseStudy />
      </div>
      <StudioNotes />
      <WorkWithStudio />
      <ClosingSection />
    </div>
  );
}
