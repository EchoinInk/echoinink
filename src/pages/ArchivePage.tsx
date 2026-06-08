import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import { Container } from '@/components/layout/Container';
import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { EchoSelect } from '@/components/ui/EchoSelect';
import { OrbitalVisual, type OrbitalVariant } from '@/components/ui/OrbitalVisual';
import {
  archiveCta,
  archiveFeatured,
  archiveFilters,
  archiveHero,
  archiveIndex,
  archiveIndexMeta,
  archiveNotes,
  archiveSortOptions,
  type ArchiveFilter,
  type ArchiveSort,
} from '@/data/archiveContent';
import archiveImageDesktop from '@/assets/imagery/hero/archive-hero-desktop.webp';
import archiveImageMobile from '@/assets/imagery/hero/archive-hero-mobile.webp';
import archiveEssayDesktop from '@/assets/imagery/sections/archive-essay-desktop.webp';
import archiveEssayMobile from '@/assets/imagery/sections/archive-essay-mobile.webp';
import {
  blurEmergence,
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from '@/lib/motion-cinematic';

function ArchiveSectionLabel({
  children,
  meta,
}: {
  children: string;
  meta?: string;
}) {
  return (
    <div className="ei-archive-section-label-row">
      <div className="ei-section-label-row">
        <span className="ei-section-label">{children}</span>
        <span className="ei-section-label-line" />
      </div>
      {meta ? <span className="ei-type-label ei-archive-section-meta">{meta}</span> : null}
    </div>
  );
}

function EmphasizedText({
  text,
  emphasis,
}: {
  text: string;
  emphasis?: string;
}) {
  if (!emphasis || !text.includes(emphasis)) {
    return <>{text}</>;
  }

  const [before, after] = text.split(emphasis);

  return (
    <>
      {before}
      <em className="ei-type-studio-hero-emphasis">{emphasis}</em>
      {after}
    </>
  );
}

export function ArchivePage() {
  const [activeFilter, setActiveFilter] = useState<ArchiveFilter>('All');
  const [sortBy, setSortBy] = useState<ArchiveSort>('Latest');

  return (
    <PageShell atmosphere="default" withTopSpacing={false} className="ei-archive-page">
      <Helmet>
        <title>Archive — Echo in Ink</title>
        <meta name="description" content={archiveHero.description} />
      </Helmet>

      <motion.section
        variants={staggerContainer(STAGGER.cinematic, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.loose}
        className="ei-archive-hero"
        aria-labelledby="archive-hero-heading"
      >
        <picture className="ei-archive-hero-media" aria-hidden="true">
          <source media="(min-width: 768px)" srcSet={archiveImageDesktop} />
          <img src={archiveImageMobile} alt="" fetchpriority="high" />
        </picture>

        <div className="ei-archive-hero-scrim" aria-hidden="true" />

        <Container size="xl" className="relative z-10">
          <motion.div variants={driftUp} className="ei-archive-hero-copy">
            <div className="ei-archive-kicker">
              <span className="ei-type-studio-label">{archiveHero.eyebrow}</span>
              <span className="ei-archive-kicker-line" aria-hidden="true" />
            </div>

            <h1 id="archive-hero-heading" className="ei-type-studio-hero ei-archive-hero-title">
              {archiveHero.titleLines.map((line) => (
                <span key={line} className="block">
                  {line === archiveHero.italicLine ? (
                    <em className="ei-type-studio-hero-emphasis">{line}</em>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p className="ei-type-studio-body ei-archive-hero-description">
              {archiveHero.description}
            </p>
          </motion.div>
        </Container>
      </motion.section>

      <Section spacing="none" className="ei-archive-content-section">
        <Container size="xl">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="ei-archive-inner"
          >
            <motion.div variants={fadeSoft} className="ei-archive-filter-shell">
              <div
                role="group"
                aria-label="Filter archive entries by category"
                className="ei-archive-filter-list"
              >
                {archiveFilters.map((filter) => {
                  const isActive = activeFilter === filter;

                  return (
                    <button
                      key={filter}
                      type="button"
                      aria-pressed={isActive}
                      className="ei-archive-filter-button ei-focus-rounded"
                      data-active={isActive ? 'true' : undefined}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>

              <EchoSelect
                id="archive-sort"
                name="archive-sort"
                label="Sort"
                value={sortBy}
                options={[...archiveSortOptions]}
                onChange={(event) => setSortBy((event.target.value || 'Latest') as ArchiveSort)}
                className="ei-archive-sort"
              />
            </motion.div>

            <motion.article variants={fadeSoft} className="ei-archive-featured">
              <div className="ei-archive-featured-media" aria-hidden="true">
                <img src={archiveEssayDesktop} alt="" />
              </div>

              <div className="ei-archive-featured-copy">
                <div className="ei-archive-card-meta">
                  <span>{archiveFeatured.label}</span>
                  <span>
                    {archiveFeatured.category} <span aria-hidden="true">·</span>{' '}
                    {archiveFeatured.readTime}
                  </span>
                </div>

                <h2 className="ei-archive-featured-title">
                  <EmphasizedText
                    text={archiveFeatured.title}
                    emphasis={archiveFeatured.emphasis}
                  />
                </h2>

                <p className="ei-type-studio-body ei-archive-featured-body">
                  {archiveFeatured.excerpt}
                </p>

                <a href="#archive-index" className="ei-card-action ei-archive-action">
                  {archiveFeatured.action}
                  <span className="ei-card-action-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </div>
            </motion.article>
          </motion.div>
        </Container>
      </Section>

      <Section spacing="none" className="ei-archive-notes-section">
        <Container size="xl">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="ei-archive-inner"
          >
            <motion.div variants={driftUp}>
              <ArchiveSectionLabel>Recent Notes</ArchiveSectionLabel>
            </motion.div>

            <motion.div variants={staggerContainer(STAGGER.normal, 0)} className="ei-archive-notes">
              {archiveNotes.map((note, index) => (
                <motion.article
                  key={note.title}
                  variants={driftUp}
                  className="ei-card ei-card-soft ei-archive-note-card"
                >
                  <div className="ei-archive-note-atmosphere" aria-hidden="true">
                    <OrbitalVisual
                      variant={index === 1 ? 'axiomRing' : 'synthesisStar'}
                      size={index === 1 ? 118 : 78}
                    />
                  </div>

                  <div className="ei-archive-note-meta">
                    {note.category} <span aria-hidden="true">·</span> {note.readTime}
                  </div>

                  <h3 className="ei-archive-note-title">
                    <EmphasizedText text={note.title} emphasis={note.emphasis} />
                  </h3>

                  <p className="ei-type-studio-body-small ei-archive-note-body">{note.excerpt}</p>

                  <a href="#archive-index" className="ei-card-action ei-archive-action">
                    {note.action}
                    <span className="ei-card-action-arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section id="archive-index" spacing="none" className="ei-archive-index-section">
        <Container size="xl">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="ei-archive-inner"
          >
            <motion.div variants={driftUp}>
              <ArchiveSectionLabel meta={archiveIndexMeta.count}>Archive Index</ArchiveSectionLabel>
            </motion.div>

            <motion.div variants={fadeSoft} className="ei-archive-index-table">
              {archiveIndex.map((entry) => (
                <a key={entry.title} href="#archive-index" className="ei-archive-index-row">
                  <span className="ei-archive-index-icon" aria-hidden="true">
                    <OrbitalVisual variant={entry.icon as OrbitalVariant} size={24} />
                  </span>
                  <span className="ei-archive-index-title">{entry.title}</span>
                  <span className="ei-archive-index-category">{entry.category}</span>
                  <span className="ei-archive-index-read">{entry.readTime}</span>
                  <span className="ei-archive-index-date">{entry.date}</span>
                  <span className="ei-archive-index-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section spacing="none" className="ei-archive-cta-section">
        <Container size="xl">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="ei-archive-inner"
          >
            <motion.div variants={fadeSoft} className="ei-archive-cta">

              <motion.div variants={blurEmergence} className="ei-archive-cta-copy">
                <p className="ei-type-studio-slim-cta">{archiveCta.title}</p>
              </motion.div>

              <motion.div variants={driftUp} className="ei-archive-cta-action">
                <p className="ei-type-studio-body-small">{archiveCta.description}</p>
                <Button
                  to={archiveCta.href}
                  variant="secondary"
                  className="min-h-[42px] gap-3 px-6 py-3"
                >
                  {archiveCta.action}
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
