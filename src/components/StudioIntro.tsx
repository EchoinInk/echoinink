import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

export function StudioIntro() {
  return (
    <Section className="relative py-16 md:py-32 lg:py-36 overflow-hidden">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/70 leading-relaxed text-[15px] md:text-[16px]">
            A studio shaped by intention.
          </p>

          <div className="h-8" />

          <p className="text-white/60 leading-relaxed text-[15px] md:text-[16px]">
            We work at the intersection of editorial design and emotional clarity —
            where ideas are not amplified, but refined.
          </p>

          <div className="h-6" />

          <p className="text-white/60 leading-relaxed text-[15px] md:text-[16px]">
            Every system is reduced to its essential form.
            Nothing excessive. Nothing performative.
          </p>

          <div className="h-8" />

          <p className="text-white/70 leading-relaxed text-[15px] md:text-[16px]">
            Ideas finding resonance. Emotion translated into form.
          </p>
        </div>
      </Container>
    </Section>
  );
}
