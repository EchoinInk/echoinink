import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

export function EmergingSystems() {
  return (
<Section spacing="md" className="pb-6 md:pb-8">
      <Container>
       <section className="bg-[#050816] py-32 px-8 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-white/30 mb-8">
          Worlds in Formation
        </p>

        <h2 className="text-5xl font-light leading-tight">
          Active archives and systems shaping the future.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <div className="rounded-3xl border border-white/10 p-10 bg-white/[0.03]">
            <h3 className="text-3xl font-light">Echo Systems</h3>

            <p className="mt-4 text-white/60">
              Atmospheric frameworks for creators building with intention.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 p-10 bg-white/[0.03]">
            <h3 className="text-3xl font-light">Echo Vault</h3>

            <p className="mt-4 text-white/60">
              A curated archive of textures, references, and emotional systems.
            </p>
          </div>
        </div>
      </div>
<Container>
    </Section>
  );
}
