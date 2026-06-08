import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageSectionHero } from '@/components/sections/PageSectionHero';
import { WorkFilterBar } from '@/components/works/WorkFilterBar';
import { WorksGrid } from '@/components/works/WorksGrid';
import { Button } from '@/components/ui/Button';
import worksHeroDesktop from '@/assets/imagery/hero/works-hero-desktop.webp';
import worksHeroMobile from '@/assets/imagery/hero/works-hero-mobile.webp';
import worksCtaImage from '@/assets/imagery/sections/works-cta.webp';
import type { WorkFilter, WorkSort } from '@/data/worksProjects';
import {
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from '@/lib/motion-cinematic';

function WorksSectionLabel({ children }: { children: string }) {
  return (
    <div className="ei-section-label-row">
      <span className="ei-section-label">{children}</span>
      <span className="ei-section-label-line" />
    </div>
  );
}

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

      <PageSectionHero
        eyebrow="The Archive"
        title="Works shaped with atmosphere."
        italicWord="atmosphere"
        description="A curated body of identity, narrative, and experiential projects — shaped by feeling, built with clarity, and designed to leave a lasting echo."
        ctaLabel="View Our Approach →"
        ctaHref="/studio"
        ctaVariant="tertiary"
        image={worksHeroDesktop}
        mobileImage={worksHeroMobile}
        imageAlt="Cinematic nebula visual representing Echo In Ink selected works"
        align="left"
      />

      <Section spacing="compact" className="relative z-10">
        <Container size="xl">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="mx-auto max-w-[1180px]"
          >
            <motion.div
              variants={driftUp}
              className="mb-6 flex flex-col gap-5 border-b pb-7 md:mb-7 md:flex-row md:items-end md:justify-between"
              style={{ borderColor: 'var(--ei-color-border-soft)' }}
            >
              <WorksSectionLabel>Selected Works</WorksSectionLabel>

              <p className="ei-type-studio-body-small max-w-[36ch] text-[var(--ei-color-text-tertiary)] md:text-right">
                Case studies, concepts, and system fragments from the Echo in Ink archive.
              </p>
            </motion.div>

            <motion.div variants={fadeSoft}>
              <WorkFilterBar
                activeFilter={activeFilter}
                sortBy={sortBy}
                onFilterChange={setActiveFilter}
                onSortChange={setSortBy}
              />
            </motion.div>

            <motion.div variants={fadeSoft} className="mt-7 md:mt-8">
              <WorksGrid activeFilter={activeFilter} sortBy={sortBy} />
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section spacing="none" className="relative z-10 pt-8 pb-10 md:pt-10 md:pb-12">
        <Container size="xl">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="mx-auto max-w-[1180px]"
          >
            <motion.div
              variants={fadeSoft}
              className="relative flex flex-col gap-6 overflow-hidden rounded-[var(--ei-card-radius-lg)] border px-7 py-7 shadow-[inset_0_1px_0_rgb(var(--ei-ice-white-rgb)/0.045),0_0_76px_rgb(var(--ei-violet-rgb)/0.075)] md:flex-row md:items-center md:justify-between md:px-10"
              style={{
                background:
                  'linear-gradient(100deg, rgb(var(--ei-midnight-rgb) / 0.64), rgb(var(--ei-void-rgb) / 0.9) 58%, rgb(var(--ei-violet-rgb) / 0.13))',
                borderColor: 'rgb(var(--ei-moonlit-rgb) / 0.16)',
              }}
            >
              <img
                src={worksCtaImage}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(90deg, rgb(var(--ei-void-rgb) / 0.88), rgb(var(--ei-void-rgb) / 0.62) 54%, rgb(var(--ei-void-rgb) / 0.32))',
                }}
              />

              <motion.div variants={driftUp} className="relative z-10 max-w-[42rem]">
                <p className="ei-type-studio-slim-cta">
                  Begin a world of <em className="ei-type-studio-hero-emphasis">your own</em>.
                </p>
                <p className="ei-type-studio-body-small mt-2 text-[var(--ei-color-text-secondary)]">
                  Every great project begins with a conversation.
                </p>
              </motion.div>

              <motion.div variants={driftUp} className="relative z-10 md:ml-8">
                <Button
                  to="/contact"
                  variant="secondary"
                  className="min-h-[42px] gap-3 self-start px-6 py-3 md:self-center"
                >
                  Start a Project
                  <span aria-hidden="true">→</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </PageShell>
  );
}
