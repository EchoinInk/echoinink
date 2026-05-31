import { Helmet } from 'react-helmet-async';
import { PageShell } from '@/components/system';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { OriginSection } from '@/components/studio/OriginSection';
import { PhilosophyGrid } from '@/components/studio/PhilosophyGrid';
import { ValuesGrid } from '@/components/studio/ValuesGrid';
import { StudioCTA } from '@/components/studio/StudioCTA';
import studioHeroDesktop from '@/assets/imagery/hero/studio-hero.png';
import studioHeroMobile from '@/assets/imagery/hero/studio-hero-mobile.png';
import heroLandscape from '@/assets/imagery/backgrounds/hero-01.png';

export function Studio() {
  return (
    <Layout>
      <Helmet>
        <title>Studio | Echo In Ink</title>
      </Helmet>
   
      <Section>
      <Container>
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
            Studio
          </h1>
          <p className="mt-4 text-lg text-muted">
          The philosophy behind the worlds.
          </p>
          <p className="mt-1 text-sm text-muted/70">
          Translating inner worlds into coherent external form.
          </p>
        </Container>
      </Section>
    
      <Section>
      <Container size="xl" className="relative z-10 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1180px]">
          <OriginSection />
          <PhilosophyGrid />
          <ValuesGrid />

          <div className="pt-[clamp(5rem,10vw,7.5rem)]">
            <StudioCTA
              eyebrow="Continue the conversation"
              heading="Aligned in philosophy?"
              body={
                "If our approach resonates,\nlet's explore how we can build\nsomething meaningful together."
              }
              primaryLabel="Work with the Studio"
              primaryHref="/contact"
              secondaryLinks={[
                { label: 'Book a Session', href: '/sessions' },
                { label: 'Explore the Works', href: '/works' },
              ]}
              backgroundImage={heroLandscape}
            />
          </div>
        </div>
      </Container>
      </Section>
      </Layout>
  );
}
