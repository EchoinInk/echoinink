import { Helmet } from 'react-helmet-async';
import { PageShell } from '@/components/system';
import { Container } from '@/components/layout/Container';
import { StudioHero } from '@/components/studio/StudioHero';
import { OriginSection } from '@/components/studio/OriginSection';
import { SectionImagery } from '@/components/studio/SectionImagery';
import { PhilosophyGrid } from '@/components/studio/PhilosophyGrid';
import { ValuesGrid } from '@/components/studio/ValuesGrid';
import { StudioCTA } from '@/components/studio/StudioCTA';
import studioHeroDesktop from '@/assets/imagery/hero/studio-hero.png';
import studioHeroMobile from '@/assets/imagery/hero/studio-hero-mobile.png';
import heroLandscape from '@/assets/imagery/backgrounds/hero-01.png';
import cosmicRingsBg from '@/assets/imagery/backgrounds/cosmic-rings-bg.png';

export function Studio() {
  return (
    <PageShell atmosphere="studio" withTopSpacing={false}>
      <Helmet>
        <title>Studio | Echo In Ink</title>
        <meta
          name="description"
          content="The philosophy and practice behind Echo In Ink — translating inner worlds into coherent identity, atmosphere, and form."
        />
      </Helmet>

      <StudioHero
        eyebrow="Studio"
        title="The philosophy behind the worlds."
        italicWord="worlds"
        description="Translating inner worlds into coherent external form."
        image={studioHeroDesktop}
        mobileImage={studioHeroMobile}
        imageAlt="Cinematic cosmic void surrounded by violet and blue nebula energy"
      />

      <Container size="xl" className="relative z-10">
        <div className="mx-auto max-w-[1180px]">
          <OriginSection />
        </div>
      </Container>

      <SectionImagery
        image={heroLandscape}
        alt="Atmospheric mountain landscape beneath a violet aurora sky"
        focalPosition="center 40%"
      />

      <Container size="xl" className="relative z-10">
        <div className="mx-auto max-w-[1180px]">
          <PhilosophyGrid />
        </div>
      </Container>

      <SectionImagery
        image={cosmicRingsBg}
        alt="Orbital rings and atmospheric depth in deep space"
        focalPosition="70% 50%"
      />

      <Container size="xl" className="relative z-10 pb-24 md:pb-40">
        <div className="mx-auto max-w-[1180px]">
          <ValuesGrid />

          <div className="pt-[clamp(5rem,12vw,10rem)]">
            <StudioCTA
              eyebrow="Continue the conversation"
              heading="Aligned in philosophy?"
              body="If our approach resonates, let's explore how we can build something meaningful together."
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
    </PageShell>
  );
}
