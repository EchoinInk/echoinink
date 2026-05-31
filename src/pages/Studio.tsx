import { Helmet } from 'react-helmet-async';
import { PageShell } from '@/components/system';
import { Container } from '@/components/layout/Container';
import { EditorialHero } from '@/components/hero/EditorialHero';
import { OriginSection } from '@/components/studio/OriginSection';
import { PhilosophyGrid } from '@/components/studio/PhilosophyGrid';
import { ValuesGrid } from '@/components/studio/ValuesGrid';
import { StudioCTA } from '@/components/studio/StudioCTA';
import studioHeroDesktop from '@/assets/imagery/hero/studio-hero.png';
import studioHeroMobile from '@/assets/imagery/hero/studio-hero-mobile.png';
import heroLandscape from '@/assets/imagery/backgrounds/hero-01.png';
import { motion } from 'framer-motion';

export function Studio() {
  return (
    <PageShell atmosphere="studio" withTopSpacing={false}>
      <Helmet>
        <title>Studio | Echo In Ink</title>
        <meta
          name="description"
          content="The philosophy, principles, and creative direction behind Echo In Ink."
        />
      </Helmet>

      <EditorialHero
        eyebrow="Studio"
        title="The philosophy behind the worlds."
        italicWord="worlds."
        description="Translating inner worlds into coherent external form."
        image={studioHeroDesktop}
        mobileImage={studioHeroMobile}
        imageAlt="Cinematic cosmic void surrounded by violet and blue nebula energy"
      />

      <Container size="xl" className="relative z-10 pb-24 md:pb-32">
      <motion.section
          variants={fadeSoft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          className="mx-auto max-w-[1180px] pt-12 md:pt-16"
        ><div>
          <OriginSection />
          <PhilosophyGrid />
          <ValuesGrid />
          </div>
          </motion.section>

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
    </PageShell>
  );
}
