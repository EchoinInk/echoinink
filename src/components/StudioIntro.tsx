import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

export function StudioIntro() {
  return (
    <Section className="relative py-24 md:py-36 overflow-hidden">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/70 text-[15px] md:text-[16px] leading-relaxed">
            Some things are felt long before they can be articulated.
          </p>

          <div className="h-8" />

          <p className="text-white/60 text-[15px] md:text-[16px] leading-relaxed">
            Echo in Ink exists for founders, artists, and visionaries carrying something real beneath the surface — something difficult to translate clearly without losing its texture.
          </p>

          <div className="h-10" />

          <p className="text-white/70 text-[15px] md:text-[16px] leading-relaxed">
            This studio was built to preserve that texture.
          </p>

          <div className="h-10" />

          <p className="text-white/60 text-[15px] md:text-[16px] leading-relaxed max-w-[48ch] mx-auto">
            Through identity, atmosphere, narrative, and systems, we create work that feels coherent, emotionally precise, and unmistakably true.
          </p>
        </div>
      </Container>
    </Section>
  );
}
