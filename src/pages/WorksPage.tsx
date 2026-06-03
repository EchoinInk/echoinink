import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/layout/PageShell';
import { Container } from '@/components/layout/Container';
import { EditorialHero } from '@/components/hero/EditorialHero';
import { WorkFilterBar } from '@/components/works/WorkFilterBar';
import { WorksGrid } from '@/components/works/WorksGrid';
import { ProjectCTA } from '@/components/works/ProjectCTA';
import worksHeroDesktop from '@/assets/imagery/hero/works-hero.png';
import worksHeroMobile from '@/assets/imagery/hero/works-hero-mobile.png';
import cosmicRingsBg from '@/assets/imagery/backgrounds/cosmic-rings-bg.png';
import type { WorkFilter, WorkSort } from '@/data/worksProjects';
import { fadeSoft, VIEWPORT } from '@/lib/motion-cinematic';

export function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>('All Works');
  const [sortBy, setSortBy] = useState<WorkSort>('Latest');

  return (
    <PageShell atmosphere="works" withTopSpacing={false}>
      <Helmet>
        <title>Works | Echo In Ink</title>
        <meta
          name="description"
          content="Selected identity systems, immersive websites, and atmospheric digital experiences by Echo In Ink."
        />
      </Helmet>

      <EditorialHero
        eyebrow="Our Works"
        title="Worlds we've designed and built."
        italicWord="built"
        description="Selected projects that explore identity, emotion, and technology — crafted to leave a lasting impact."
        ctaLabel="Start a Project →"
        ctaHref="/contact"
        image={worksHeroDesktop}
        mobileImage={worksHeroMobile}
        imageAlt="Cinematic nebula visual representing Echo In Ink selected works"
        align="left"
      />

      <Container size="xl" className="relative z-10 pb-24 md:pb-32">
        <motion.section
          variants={fadeSoft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          className="mx-auto max-w-[1180px] pt-12 md:pt-16"
        >
          <WorkFilterBar
            activeFilter={activeFilter}
            sortBy={sortBy}
            onFilterChange={setActiveFilter}
            onSortChange={setSortBy}
          />

          <div className="mt-10 md:mt-14">
            <WorksGrid activeFilter={activeFilter} sortBy={sortBy} />
          </div>
        </motion.section>

        <div className="mx-auto mt-16 max-w-[1180px] md:mt-24">
          <ProjectCTA
            eyebrow="Have a project in mind?"
            heading="Let's build something meaningful."
            body="We partner with founders, creators, and teams to design and build experiences that resonate."
            buttonLabel="Start a Project"
            buttonHref="/contact"
            backgroundImage={cosmicRingsBg}
          />
        </div>
      </Container>
    </PageShell>
  );
}
