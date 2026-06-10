import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import { ContentFrame } from '@/components/layout/ContentFrame';
import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { CTASection } from '@/components/sections/CTASection';
import { EchoHero } from '@/components/sections/EchoHero';
import { Button } from '@/components/ui/Button';
import { EchoCard } from '@/components/ui/EchoCard';
import { EchoSelect } from '@/components/ui/EchoSelect';
import { FilterBar } from '@/components/ui/FilterBar';
import { IconWell } from '@/components/ui/IconWell';
import { OrbitalVisual, type OrbitalVariant } from '@/components/ui/OrbitalVisual';
import { SectionLabel } from '@/components/ui/SectionLabel';
import {
  archiveCta,
  archiveFeatured,
  archiveFilters,
  archiveHero,
  archiveIndex,
  archiveIndexMeta,
  archiveNotes,
  archivePhilosophy,
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
      <em>{emphasis}</em>
      {after}
    </>
  );
}

export function ArchivePage() {
  const [activeFilter, setActiveFilter] = useState<ArchiveFilter>('All');
  const [sortBy, setSortBy] = useState<ArchiveSort>('Latest');
  const visibleEntries =
    activeFilter === 'All'
      ? archiveIndex
      : archiveIndex.filter((entry) => entry.category === activeFilter);

  return (
    <PageShell atmosphere="default" withTopSpacing={false} className="ei-archive-page">
      <Helmet>
        <title>Archive — Echo in Ink</title>
        <meta name="description" content={archiveHero.description} />
      </Helmet>

      <EchoHero
        variant="archive"
        eyebrow={archiveHero.eyebrow}
        index="01"
        title={
          <>
            Thoughts. Notes. <em>Worlds.</em>
          </>
        }
        description={archiveHero.description}
        kicker="An authored index of ideas in motion."
        backgroundImage={archiveImageDesktop}
        mobileBackgroundImage={archiveImageMobile}
        imageAlt=""
        headingId="archive-hero-heading"
        className="ei-archive-hero"
        contentClassName="ei-archive-hero-content"
        actions={
          <Button to="#archive-featured" variant="tertiary">
            Enter the index <span aria-hidden="true">↓</span>
          </Button>
        }
      />

      <Section id="archive-featured" spacing="none" className="ei-archive-section ei-archive-featured-section">
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.div variants={fadeSoft}>
              <EchoCard variant="feature" padding="none" className="ei-archive-featured">
                <picture className="ei-archive-featured-media" aria-hidden="true">
                  <source media="(min-width: 768px)" srcSet={archiveEssayDesktop} />
                  <img src={archiveEssayMobile} alt="" />
                </picture>

                <div className="ei-archive-featured-copy">
                  <SectionLabel label={archiveFeatured.label} index="02" tone="accent" />

                  <div className="ei-archive-card-meta">
                    <span>{archiveFeatured.category}</span>
                    <span>{archiveFeatured.readTime}</span>
                  </div>

                  <motion.h2 variants={blurEmergence}>
                    <EmphasizedText
                      text={archiveFeatured.title}
                      emphasis={archiveFeatured.emphasis}
                    />
                  </motion.h2>

                  <p>{archiveFeatured.excerpt}</p>

                  <Button to="#archive-index" variant="tertiary">
                    {archiveFeatured.action} <span aria-hidden="true">→</span>
                  </Button>
                </div>
              </EchoCard>
            </motion.div>
          </motion.div>
        </ContentFrame>
      </Section>

      <Section spacing="none" className="ei-archive-section ei-archive-categories">
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.div variants={driftUp} className="ei-archive-section-heading">
              <SectionLabel label="Ways into the archive" index="03" />
              <div>
                <h2>Follow a subject, or follow the signal.</h2>
                <p>
                  Essays hold the longer argument. Notes and fragments keep the unfinished edges
                  visible. Case signals show where ideas became form.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeSoft} className="ei-archive-filter-wrap">
              <FilterBar
                filters={archiveFilters}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                ariaLabel="Filter archive entries by category"
                tone="editorial"
                className="ei-archive-filter-bar"
                sort={
                  <EchoSelect
                    id="archive-sort"
                    name="archive-sort"
                    label="Order"
                    value={sortBy}
                    options={[...archiveSortOptions]}
                    onChange={(event) =>
                      setSortBy((event.target.value || 'Latest') as ArchiveSort)
                    }
                    className="ei-archive-sort"
                  />
                }
              />
            </motion.div>
          </motion.div>
        </ContentFrame>
      </Section>

      <Section spacing="none" className="ei-archive-section ei-archive-notes-section">
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.div variants={driftUp} className="ei-archive-section-heading">
              <SectionLabel label="Recent notes" index="04" />
              <div>
                <h2>Shorter observations. Quiet points of return.</h2>
              </div>
            </motion.div>

            <motion.div variants={staggerContainer(STAGGER.normal, 0)} className="ei-archive-notes">
              {archiveNotes.map((note, index) => (
                <motion.div key={note.title} variants={driftUp}>
                  <EchoCard variant="interactive" padding="lg" className="ei-archive-note-card">
                    <div className="ei-archive-note-topline">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <span>
                        {note.category} · {note.readTime}
                      </span>
                    </div>

                    <IconWell
                      size="sm"
                      tone={index === 2 ? 'magenta' : 'violet'}
                      orbital
                      className="ei-archive-note-icon"
                    >
                      <OrbitalVisual
                        variant={index === 1 ? 'axiomRing' : 'synthesisStar'}
                        size={26}
                      />
                    </IconWell>

                    <h3>
                      <EmphasizedText text={note.title} emphasis={note.emphasis} />
                    </h3>
                    <p>{note.excerpt}</p>

                    <Button to="#archive-index" variant="tertiary">
                      {note.action} <span aria-hidden="true">→</span>
                    </Button>
                  </EchoCard>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </ContentFrame>
      </Section>

      <Section id="archive-index" spacing="none" className="ei-archive-section ei-archive-index-section">
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.div variants={driftUp} className="ei-archive-index-heading">
              <div className="ei-archive-section-heading">
                <SectionLabel label="Archive index" index="05" />
                <div>
                  <h2>Ideas, arranged for discovery.</h2>
                  <p>Read across disciplines, or trace one recurring concern through the index.</p>
                </div>
              </div>
              <span className="ei-archive-index-count">
                {activeFilter === 'All'
                  ? archiveIndexMeta.count
                  : `${visibleEntries.length} ${visibleEntries.length === 1 ? 'Entry' : 'Entries'}`}
              </span>
            </motion.div>

            <motion.div variants={fadeSoft}>
              <EchoCard variant="index" padding="none" className="ei-archive-index-table">
                {visibleEntries.length > 0 ? (
                  visibleEntries.map((entry) => (
                    <a key={entry.title} href="#archive-index" className="ei-archive-index-row">
                      <IconWell size="sm" tone="violet" className="ei-archive-index-icon">
                        <OrbitalVisual variant={entry.icon as OrbitalVariant} size={22} />
                      </IconWell>
                      <span className="ei-archive-index-copy">
                        <span className="ei-archive-index-title">{entry.title}</span>
                        <span className="ei-archive-index-descriptor">{entry.descriptor}</span>
                      </span>
                      <span className="ei-archive-index-category">{entry.category}</span>
                      <span className="ei-archive-index-read">{entry.readTime}</span>
                      <span className="ei-archive-index-date">{entry.date}</span>
                      <span className="ei-archive-index-arrow" aria-hidden="true">
                        →
                      </span>
                    </a>
                  ))
                ) : (
                  <p className="ei-archive-index-empty">
                    No indexed entries currently sit under this signal.
                  </p>
                )}
              </EchoCard>
            </motion.div>
          </motion.div>
        </ContentFrame>
      </Section>

      <Section spacing="none" className="ei-archive-section ei-archive-philosophy-section">
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <EchoCard variant="offer" padding="none" className="ei-archive-philosophy">
              <div className="ei-archive-philosophy-copy">
                <SectionLabel label="A living constellation" index="06" tone="accent" />
                <motion.h2 variants={blurEmergence}>{archivePhilosophy.title}</motion.h2>
                <p>{archivePhilosophy.description}</p>
              </div>

              <motion.div variants={fadeSoft} className="ei-archive-constellation" aria-hidden="true">
                <span className="ei-archive-constellation-orbit" />
                <span className="ei-archive-constellation-axis" />
                {archivePhilosophy.themes.map((theme, index) => (
                  <span
                    key={theme}
                    className="ei-archive-constellation-node"
                    data-node={String(index + 1)}
                  >
                    <span />
                    {theme}
                  </span>
                ))}
                <OrbitalVisual
                  variant="synthesisStar"
                  size={74}
                  className="ei-archive-constellation-center"
                />
              </motion.div>
            </EchoCard>
          </motion.div>
        </ContentFrame>
      </Section>

      <CTASection
        variant="editorialInvitation"
        eyebrow="Follow the signal"
        heading={archiveCta.title}
        body={archiveCta.description}
        className="ei-archive-closing"
        headingId="archive-cta-heading"
        actions={
          <>
            <Button to="#archive-index" variant="secondary">
              Explore the index <span aria-hidden="true">↑</span>
            </Button>
            <Button to={archiveCta.href} variant="tertiary">
              {archiveCta.action} <span aria-hidden="true">→</span>
            </Button>
          </>
        }
      />
    </PageShell>
  );
}
