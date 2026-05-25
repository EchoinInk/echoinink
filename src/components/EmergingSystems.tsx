import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

export function EmergingSystems() {
  return (
<Section spacing="md" className="pb-6 md:pb-8">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-editorial text-[1.8rem] md:text-[2.4rem] text-white/85 mb-10">
            Worlds in Formation
          </h3>

          <div className="space-y-12">
            <div>
              <p className="font-structural text-[14px] md:text-[15px] text-white/60 leading-[1.85]">
                <span className="text-white/80">Echo Systems</span> — Atmospheric tools and frameworks for creators building with intention.
              </p>
            </div>

            <div>
              <p className="font-structural text-[14px] md:text-[15px] text-white/60 leading-[1.85]">
                <span className="text-white/80">Echo Vault</span> — A curated archive of textures, references, systems, and emotional environments.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
