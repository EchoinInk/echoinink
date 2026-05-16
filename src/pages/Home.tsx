import { Hero } from '@/components/Hero';
import { StudioIntro } from '@/components/StudioIntro';
import { SelectedWorks } from '@/components/SelectedWorks';
import { Philosophy } from '@/components/Philosophy';
import { WorkWithStudio } from '@/components/WorkWithStudio';
import { ClosingSection } from '@/components/ClosingSection';

export function Home() {
  return (
    <div className="relative">
      <Hero />
      <StudioIntro />
      <SelectedWorks />
      <Philosophy />
      <WorkWithStudio />
      <ClosingSection />
    </div>
  );
}
