import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { PageShell } from '@/components/layout/PageShell';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { PageSectionHero } from '@/components/sections/PageSectionHero';
import { Button } from '@/components/ui/Button';
import { OrbitalVisual } from '@/components/ui/OrbitalVisual';

import systemsHeroDesktop from '@/assets/imagery/hero/systems-hero-desktop.webp';
import systemsHeroMobile from '@/assets/imagery/hero/systems-hero-mobile.webp';
import featuredSystemImage from '@/assets/imagery/sections/book-session-bg.png';

import {
  featuredSystem,
  latestSystems,
  systemsCategories,
  systemsClosing,
  systemsHero,
} from '@/data/systemsContent';
import {
  blurEmergence,
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from '@/lib/motion-cinematic';

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="ei-section-label-row">
      <span className="ei-section-label">{children}</span>
      <span className="ei-section-label-line" />
    </div>
  );
}

export function SystemsPage() {
  return (
    <PageShell
      atmosphere="works"
      withTopSpacing={false}
      className="ei-systems-page"
    >
      <Helmet>
        <title>Systems — Echo in Ink</title>
        <meta
          name="description"
          content={systemsHero.description}
        />
      </Helmet>

      <PageSectionHero
        eyebrow={systemsHero.eyebrow}
        title={systemsHero.title}
        italicWord={systemsHero.italicWord}
        description={systemsHero.description}
        ctaLabel={systemsHero.primaryCta.label}
        ctaHref={systemsHero.primaryCta.href}
        secondaryCtaLabel={systemsHero.secondaryCta.label}
        secondaryCtaHref={systemsHero.secondaryCta.href}
        image={systemsHeroDesktop}
        mobileImage={systemsHeroMobile}
        imageAlt="A luminous orbital gateway rising above an atmospheric landscape"
        align="left"
        variant="studio"
      />

      <Section
        id="systems-categories"
        spacing="none"
        className="relative scroll-mt-24 pt-6 pb-2 md:pt-8 md:pb-4"
      >
        <Container size="xl" className="relative z-10">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="mx-auto max-w-[1180px]"
          >
            <motion.div variants={fadeSoft} className="mb-8 md:mb-10">
              <SectionLabel>Explore by Category</SectionLabel>
            </motion.div>

            <motion.div
              variants={staggerContainer(STAGGER.tight, 0)}
              className="ei-systems-category-grid"
            >
              {systemsCategories.map((category) => (
                <motion.article key={category.title} variants={driftUp}>
                  <a
                    href="#featured-system"
                    className="ei-systems-category-card ei-card group"
                  >
                    <div
                      className="ei-systems-category-icon"
                      aria-hidden="true"
                    >
                      <OrbitalVisual
                        variant={category.icon}
                        size={52}
                        className="opacity-95"
                      />
                    </div>

                    <h2 className="ei-type-studio-card-title max-w-[13ch]">
                      {category.title}
                    </h2>

                    <p className="ei-type-studio-card-body mt-4">
                      {category.description}
                    </p>

                    <span className="ei-card-action mt-auto pt-7">
                      Explore
                      <span className="ei-card-action-arrow" aria-hidden="true">
                        →
                      </span>
                    </span>
                  </a>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section
        id="featured-system"
        spacing="none"
        className="relative scroll-mt-24 pt-6 pb-2 md:pt-8 md:pb-4"
      >
        <Container size="xl" className="relative z-10">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="mx-auto max-w-[1180px]"
          >
            <motion.div variants={fadeSoft} className="mb-8 md:mb-10">
              <SectionLabel>Featured System</SectionLabel>
            </motion.div>

            <motion.article
              variants={fadeSoft}
              className="ei-systems-featured ei-card"
            >
              <div className="ei-systems-featured-copy">
                <motion.span
                  variants={driftUp}
                  className="ei-type-studio-label"
                >
                  {featuredSystem.category}
                </motion.span>

                <motion.h2
                  variants={blurEmergence}
                  className="ei-type-section mt-5 max-w-[14ch]"
                >
                  {featuredSystem.title}
                </motion.h2>

                <motion.p
                  variants={driftUp}
                  className="ei-type-studio-card-body mt-5 max-w-[42ch]"
                >
                  {featuredSystem.description}
                </motion.p>

                <motion.ul
                  variants={staggerContainer(STAGGER.tight, 0)}
                  className="ei-systems-feature-list"
                >
                  {featuredSystem.features.map((feature) => (
                    <motion.li key={feature} variants={driftUp}>
                      <span aria-hidden="true">✦</span>
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div variants={driftUp} className="mt-8">
                  <Button
                    to={featuredSystem.cta.href}
                    variant="tertiary"
                    className="gap-3"
                  >
                    {featuredSystem.cta.label}
                    <span aria-hidden="true">→</span>
                  </Button>
                </motion.div>
              </div>

              <motion.div
                variants={fadeSoft}
                className="ei-systems-featured-media"
                aria-hidden="true"
              >
                <img src={featuredSystemImage} alt="" />
                <div className="ei-systems-product-cover">
                  <span>The</span>
                  <strong>Identity Clarity</strong>
                  <strong>Prompt Kit</strong>
                  <i aria-hidden="true" />
                </div>
              </motion.div>
            </motion.article>
          </motion.div>
        </Container>
      </Section>

      <Section
        spacing="none"
        className="relative pt-6 pb-2 md:pt-8 md:pb-4"
      >
        <Container size="xl" className="relative z-10">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="mx-auto max-w-[1180px]"
          >
            <motion.div
              variants={fadeSoft}
              className="mb-8 flex items-center justify-between gap-6 md:mb-10"
            >
              <SectionLabel>Latest Additions</SectionLabel>

              <a
                href="#systems-categories"
                className="ei-link-subtle hidden items-center gap-2 sm:inline-flex"
              >
                View All Systems <span aria-hidden="true">→</span>
              </a>
            </motion.div>

            <motion.div
              variants={staggerContainer(STAGGER.tight, 0)}
              className="ei-systems-latest-grid"
            >
              {latestSystems.map((system) => (
                <motion.article key={system.title} variants={driftUp}>
                  <Link
                    to="/contact"
                    className="ei-systems-product-card ei-card group"
                    aria-label={`Enquire about ${system.title}`}
                  >
                    <img
                      src={system.image}
                      alt=""
                      style={{ objectPosition: system.imagePosition }}
                    />
                    <div
                      className="ei-systems-product-overlay"
                      aria-hidden="true"
                    />

                    <div className="ei-systems-product-copy">
                      <span className="ei-type-studio-label">New</span>

                      <h2 className="ei-type-studio-card-title mt-4 max-w-[14ch]">
                        {system.title}
                      </h2>

                      <p className="ei-type-small mt-4">
                        {system.description}
                      </p>

                      <div className="mt-auto flex items-end justify-between gap-4 pt-7">
                        <span className="ei-systems-price">{system.price}</span>
                        <span
                          className="ei-card-action-arrow ei-systems-product-arrow"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section
        spacing="none"
        className="relative pt-8 pb-10 md:pt-10 md:pb-12"
      >
        <Container size="xl" className="relative z-10">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="mx-auto max-w-[1180px]"
          >
            <motion.div variants={fadeSoft} className="ei-systems-closing">
              <div
                className="ei-systems-closing-icon"
                aria-hidden="true"
              >
                <OrbitalVisual variant="synthesisStar" size={58} />
              </div>

              <motion.div variants={driftUp} className="relative z-10">
                <h2 className="ei-type-studio-slim-cta">
                  {systemsClosing.title}
                </h2>
                <p className="ei-type-studio-body-small mt-2">
                  {systemsClosing.description}
                </p>
              </motion.div>

              <motion.div variants={driftUp} className="relative z-10">
                <Button
                  to={systemsClosing.cta.href}
                  variant="secondary"
                  className="min-h-[42px] gap-3 px-6 py-3"
                >
                  {systemsClosing.cta.label}
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
