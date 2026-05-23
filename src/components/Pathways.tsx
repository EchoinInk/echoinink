import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Link } from 'react-router-dom';
import GlowCard from '@/components/GlowCard';

export function Pathways() {
  return (
    <Section className="relative py-32 md:py-40">
      <Container>

        {/* Eyebrow */}
        <p className="font-structural uppercase text-[11px] tracking-[0.28em] text-white/30 mb-6">
          What We Design
        </p>

        {/* Main Heading */}
        <h2 className="font-editorial text-[2.6rem] md:text-[3rem] leading-[1.2] text-white/90 mb-4">
          We build worlds with intention and precision.
        </h2>

        {/* Subheading */}
        <p className="font-structural text-[15px] text-white/55 leading-[1.85] max-w-[60ch] mb-20">
          Explore our core areas of creative direction.
        </p>

        {/* GlowCards */}
        <div className="grid md:grid-cols-3 gap-12">

          <Link to="/sessions">
            <GlowCard
              title="Sessions"
              description="Clarity before expression. Focused creative direction for moments of misalignment, evolution, or translation."
              image="/images/session-card.jpg"
            />
          </Link>

          <Link to="/identity">
            <GlowCard
              title="Identity"
              description="Where inner worlds become coherent external form. Emotional, narrative, and visual translation for founders, studios, and evolving brands."
              image="/images/identity-card.jpg"
            />
          </Link>

          <Link to="/worlds">
            <GlowCard
              title="Worlds"
              description="Identity extended into living systems. Immersive digital ecosystems designed for coherence, resonance, and long‑term evolution."
              image="/images/worlds-card.jpg"
            />
          </Link>

        </div>
      </Container>
    </Section>
  );
}
