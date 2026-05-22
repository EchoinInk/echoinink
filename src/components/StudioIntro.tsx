import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

export function StudioIntro() {
  return (
    <Section className="relative py-20 md:py-32 overflow-hidden">
      <Container>
        <div className="max-w-2xl mx-auto text-center">

          <p className="text-white/70 text-[15px] md:text-[16px]">
            A studio shaped by intention.
          </p>

          <div className="h-10" />

          <p className="text-white/60 text-[15px] md:text-[16px] leading-relaxed">
            We work at the intersection of editorial design and emotional clarity —
            refining ideas until only their essential form remains.
          </p>

          <div className="h-8" />

          <p className="text-white/60 text-[15px] md:text-[16px] leading-relaxed">
            Nothing excessive. Nothing performative.
          </p>

          <div className="h-10" />

          <p className="text-white/70 text-[15px] md:text-[16px]">
            Ideas finding resonance.
          </p>

        </div>
      </Container>
    </Section>
  );
}