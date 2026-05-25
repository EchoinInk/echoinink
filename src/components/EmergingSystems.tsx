import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Link } from 'react-router-dom';
import GlowCard from '@/components/GlowCard';
import systemsImage from '@/assets/Systems.png';
import vaultImage from '@/assets/Vault.png';

export function EmergingSystems() {
  return (
    <Section spacing="md" className="pb-6 md:pb-8">
      <Container>
        <div className="max-w-6xl mx-auto text-center">
          <p
            className="font-structural text-[10px] tracking-[0.38em] uppercase text-white/30"
            style={{ marginBottom: 'var(--ei-space-24)' }}
          >
            Worlds in Formation
          </p>

          <h2
            className="font-editorial text-[2.1rem] text-[#E8EAF6]/90 leading-[1.24] whitespace-pre-line mb-16"
            style={{ letterSpacing: '-0.012em' }}
          >
            Active archives and systems shaping the future.
          </h2>

          {/* Horizontal layout */}
          <div className="grid md:grid-cols-1 gap-10">
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
              <Link to="/systems" className="flex-1">
                <GlowCard
                  title="Echo Systems"
                  description="Atmospheric frameworks for creators building with intention."
                  image={systemsImage}
                  className="aspect-[3/1]" // makes card wider
                />
              </Link>

              <Link to="/vault" className="flex-1">
                <GlowCard
                  title="Echo Vault"
                  description="A curated archive of textures, references, and emotional systems."
                  image={vaultImage}
                  className="aspect-[3/1]" // same horizontal ratio
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}