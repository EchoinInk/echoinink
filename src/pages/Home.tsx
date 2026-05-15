import { Hero } from '@/components/Hero';
import { StudioIntro } from '@/components/StudioIntro';
import { SelectedWorks } from '@/components/SelectedWorks';
import { Philosophy } from '@/components/Philosophy';
import { ClosingSection } from '@/components/ClosingSection';

export function Home() {
  return (
    <div className="relative">
      <Hero />
      <StudioIntro />
      <SelectedWorks />
      <Philosophy />
      <ClosingSection />
    </div>
  );
}
