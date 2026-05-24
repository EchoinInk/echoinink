import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { Link } from 'react-router-dom';
import GlowCard from '@/components/GlowCard';
import sessionsImage from '@/assets/Sessions.png';
import identityImage from '@/assets/Identity.png';
import worldsImage from '@/assets/Worlds.png';

export function Pathways() {
  return (
    <Section className="relative py-32 md:py-40">
      <Container>

        <SectionHeading
          eyebrow="What We Design"
          title={"We build worlds with \nintention and precision."}
          description="Explore our core areas of creative direction."
          className="mb-15"
        />

        <div className="grid md:grid-cols-3 gap-8">

          <Link to="/sessions">
            <GlowCard
              title="Sessions"
              description="Clarity before expression. Focused creative direction for moments of misalignment, evolution, or translation."
              image={sessionsImage}
            />
          </Link>

          <Link to="/identity">
            <GlowCard
              title="Identity"
              description={
                "Where inner worlds become coherent external form. Emotional, narrative,\nand visual translation for founders, studios, and evolving brands."
              }
              image={identityImage}
            />
          </Link>

          <Link to="/worlds">
            <GlowCard
              title="Worlds"
              description="Identity extended into living systems. Immersive digital ecosystems designed for coherence, resonance, and long‑term evolution."
              image={worldsImage}
            />
          </Link>

        </div>
      </Container>
    </Section>
  );
}
