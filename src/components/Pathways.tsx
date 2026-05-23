import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import GlowCard from '@/components/GlowCard';
import { Link } from 'react-router-dom';

export function Pathways() {
  return (
    <Section className="relative py-24 md:py-36">
      <Container>
        <div className="mb-20">
          <p className="uppercase text-xs tracking-[0.3em] text-white/30 mb-6">
            What We Design
          </p>

          <h2 className="text-4xl md:text-5xl font-light max-w-3xl leading-tight text-white/90">
            We build worlds with intention and precision.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <Link to="/sessions">
            <GlowCard
              title="Sessions"
              description="Focused creative direction for moments of emotional transition."
              image="/images/session-card.jpg"
            />
          </Link>

          <Link to="/identity">
            <GlowCard
              title="Identity"
              description="Narrative and visual translation for founders and studios."
              image="/images/identity-card.jpg"
            />
          </Link>

          <Link to="/worlds">
            <GlowCard
              title="Worlds"
              description="Immersive digital ecosystems designed for resonance."
              image="/images/worlds-card.jpg"
            />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
