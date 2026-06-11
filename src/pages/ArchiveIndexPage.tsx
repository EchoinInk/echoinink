import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import archiveImageDesktop from '@/assets/imagery/hero/archive-hero-orbital-map-desktop.webp';
import archiveImageMobile from '@/assets/imagery/hero/archive-hero-orbital-map-mobile.webp';
import { ArchiveConstellation } from '@/components/archive/ArchiveConstellation';
import { ArchiveIndexList } from '@/components/archive/ArchiveIndexList';
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
import { OrbitalVisual } from '@/components/ui/OrbitalVisual';
import { SectionLabel } from '@/components/ui/SectionLabel';
import {
  archiveFilters,
  archiveIndex,
  archiveIndexSortOptions,
  archivePhilosophy,
  type ArchiveFilter,
  type ArchiveIndexSort,
} from '@/data/archiveContent';
import {
  blurEmergence,
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from '@/lib/motion-cinematic';

const featuredEntries = archiveIndex.slice(0, 3);

function scrollToIndex() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById('full-index')?.scrollIntoView({
    behavior: reduceMotion ? 'auto' : 'smooth',
    block: 'start',
  });
}

export function ArchiveIndexPage() {
  const [activeFilter, setActiveFilter] = useState<ArchiveFilter>('All');
  const [sortBy, setSortBy] = useState<ArchiveIndexSort>('Latest');
  const [query, setQuery] = useState('');

  const visibleEntries = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = archiveIndex.filter((entry) => {
      const matchesFilter = activeFilter === 'All' || entry.category === activeFilter;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${entry.title} ${entry.descriptor} ${entry.category}`
          .toLowerCase()
          .includes(normalizedQuery);
      return matchesFilter && matchesQuery;
    });

    return [...filtered].sort((left, right) => {
      if (sortBy === 'Title') {
        return left.title.localeCompare(right.title);
      }

      const direction = sortBy === 'Oldest' ? 1 : -1;
      return (Date.parse(left.date) - Date.parse(right.date)) * direction;
    });
  }, [activeFilter, query, sortBy]);

  return (
    <PageShell atmosphere="default" withTopSpacing={false} className="ei-editorial-page ei-index-page">
      <Helmet>
        <title>Archive Index — Echo in Ink</title>
        <meta
          name="description"
          content="A structured map of essays, notes, case fragments, systems, experiments, and worldbuilding from Echo in Ink."
        />
      </Helmet>

      <EchoHero
        variant="archive"
        eyebrow="Archive · Index"
        index="01"
        title={<>A map of <em>the signal.</em></>}
        description="A structured companion to the Archive: entries arranged for discovery across ideas, disciplines, and recurring themes."
        kicker={`${archiveIndex.length} current entries · six connected fields`}
        backgroundImage={archiveImageDesktop}
        mobileBackgroundImage={archiveImageMobile}
        imageAlt=""
        headingId="archive-index-hero-heading"
        className="ei-index-hero"
        actions={
          <Button onClick={scrollToIndex} variant="tertiary">
            Enter the index <span aria-hidden="true">↓</span>
          </Button>
        }
      />

      <Section spacing="none" className="ei-editorial-page-section ei-index-featured-section">
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.normal, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.div variants={driftUp} className="ei-editorial-section-heading">
              <SectionLabel label="Featured entries" index="02" />
              <h2>Three points of entry into the current field.</h2>
            </motion.div>
            <div className="ei-index-featured-grid">
              {featuredEntries.map((entry, index) => (
                <motion.div key={entry.title} variants={fadeSoft}>
                  <EchoCard variant="proof" padding="lg" className="ei-index-featured-card">
                    <div className="ei-index-featured-topline">
                      <IconWell size="sm" tone={index === 2 ? 'magenta' : 'violet'} orbital>
                        <OrbitalVisual variant={entry.icon} size={24} />
                      </IconWell>
                      <span>{entry.category} · {entry.readTime}</span>
                    </div>
                    <h3>{entry.title}</h3>
                    <p>{entry.descriptor}</p>
                    <Button to={entry.href} variant="tertiary">
                      Locate entry <span aria-hidden="true">→</span>
                    </Button>
                  </EchoCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ContentFrame>
      </Section>

      <Section spacing="none" className="ei-editorial-page-section ei-index-map-section">
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.normal, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.div variants={driftUp} className="ei-editorial-section-heading">
              <SectionLabel label="Category map" index="03" />
              <h2>Different forms, connected by the same questions.</h2>
            </motion.div>
            <motion.div variants={blurEmergence} className="ei-index-category-map">
              {archiveFilters.slice(1).map((category, index) => {
                const entryCount = archiveIndex.filter(
                  (entry) => entry.category === category,
                ).length;

                return (
                  <EchoCard key={category} variant="index" padding="md" className="ei-index-category">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <strong>{category}</strong>
                    <small>{entryCount} {entryCount === 1 ? 'entry' : 'entries'}</small>
                  </EchoCard>
                );
              })}
            </motion.div>
          </motion.div>
        </ContentFrame>
      </Section>

      <Section id="full-index" spacing="none" className="ei-editorial-page-section">
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.normal, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.div variants={driftUp} className="ei-archive-index-heading">
              <div className="ei-editorial-section-heading">
                <SectionLabel label="Full index" index="04" />
                <h2>Read across disciplines, or trace one concern.</h2>
              </div>
              <span className="ei-archive-index-count">
                {visibleEntries.length} {visibleEntries.length === 1 ? 'entry' : 'entries'}
              </span>
            </motion.div>

            <motion.div variants={fadeSoft} className="ei-index-discovery-tools">
              <label className="ei-index-search">
                <span>Search the index</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search titles, descriptions, or categories"
                />
              </label>
             <FilterBar<ArchiveFilter>
  filters={archiveFilters}
  activeFilter={activeFilter}
  onFilterChange={setActiveFilter}
  ariaLabel="Filter archive index by category"
  tone="editorial"
  className="ei-archive-filter-bar"
  sort={
    <EchoSelect
      id="archive-index-sort"
      name="archive-index-sort"
      label="Order"
      variant="editorial"
      value={sortBy}
      options={[...archiveIndexSortOptions]}
      onChange={(event) => setSortBy(event.target.value as ArchiveIndexSort)}
    />
  }
/>
            </motion.div>

            <motion.div variants={fadeSoft}>
              <ArchiveIndexList
                entries={visibleEntries}
                emptyMessage="No entries match this combination of signal and search."
              />
            </motion.div>
          </motion.div>
        </ContentFrame>
      </Section>

      <Section spacing="none" className="ei-editorial-page-section ei-index-constellation-section">
        <ContentFrame width="standard" gutters>
          <EchoCard variant="offer" padding="none" className="ei-archive-philosophy">
            <div className="ei-archive-philosophy-copy">
              <SectionLabel label="Themes and constellations" index="05" tone="accent" />
              <h2>{archivePhilosophy.title}</h2>
              <p>{archivePhilosophy.description}</p>
            </div>
            <ArchiveConstellation />
          </EchoCard>
        </ContentFrame>
      </Section>

      <CTASection
        variant="editorialInvitation"
        eyebrow="Return to the living archive"
        heading="The index is a map. The Archive is the field."
        body="Move back into featured essays, recent notes, and ideas still taking shape."
        actions={
          <>
            <Button to="/archive" variant="primary">Explore the Archive</Button>
            <Button to="/archive/notes" variant="secondary">Read studio notes</Button>
          </>
        }
        headingId="index-cta-heading"
        className="ei-editorial-cta"
      />
    </PageShell>
  );
}
