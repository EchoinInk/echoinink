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
<Section spacing="md" className="pb-6 md:pb-8">
      <Container>

        <SectionHeading
          eyebrow="What We Design"
          title={"We build worlds with \nintention and precision."}
          description="Explore our core areas of creative direction."
          className="mb-12"
        />

        <div className="grid md:grid-cols-3 gap-8">

          <Link to="/sessions">
            <GlowCard
              title="Sessions"
              description="Clarity before expression. Focused creative direction for moments of misalignment, evolution, or translation."
              image={sessionsImage}
              className="max-h-[450px]"
            />
          </Link>

          <Link to="/identity">
            <GlowCard
              title="Identity"
              description={
                "Where inner worlds become coherent external form. Emotional, narrative,\nand visual translation for founders, studios, and evolving brands."
              }
              image={identityImage}
              className="max-h-[450px]"
            />
          </Link>

          <Link to="/worlds">
            <GlowCard
              title="Worlds"
              description="Identity extend into living systems. Immersive digital ecosystems designed for coherence, resonance, and long‑term evolution."
              image={worldsImage}
                className="max-h-[450px]"
            />
          </Link>

        </div>
      </Container>
    </Section>
  );
}
