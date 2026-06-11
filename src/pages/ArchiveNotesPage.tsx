import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import archiveImageDesktop from '@/assets/imagery/hero/notes-hero-light-ribbon-desktop.webp';
import archiveImageMobile from '@/assets/imagery/hero/notes-hero-light-ribbon-mobile.webp';
import { ArchiveIndexList } from '@/components/archive/ArchiveIndexList';
import { ContentFrame } from '@/components/layout/ContentFrame';
import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { CTASection } from '@/components/sections/CTASection';
import { EchoHero } from '@/components/sections/EchoHero';
import { Button } from '@/components/ui/Button';
import { EchoCard } from '@/components/ui/EchoCard';
import { IconWell } from '@/components/ui/IconWell';
import { OrbitalVisual } from '@/components/ui/OrbitalVisual';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { archiveIndex, archiveNotes, archivePhilosophy } from '@/data/archiveContent';
import {
  blurEmergence,
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from '@/lib/motion-cinematic';

const noteIndexEntries = archiveIndex.filter((entry) => entry.category === 'Notes');

function scrollToSection(id: string) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById(id)?.scrollIntoView({
    behavior: reduceMotion ? 'auto' : 'smooth',
    block: 'start',
  });
}

export function ArchiveNotesPage() {
  return (
    <PageShell atmosphere="default" withTopSpacing={false} className="ei-editorial-page ei-notes-page">
      <Helmet>
        <title>Notes — Echo in Ink</title>
        <meta
          name="description"
          content="Short studio-thinking fragments on identity, atmosphere, systems, memory, and creative worldbuilding."
        />
      </Helmet>

      <EchoHero
        variant="standard"
        eyebrow="Archive · Notes"
        index="01"
        title={<>Fragments from <em>the studio.</em></>}
        description="Short observations on identity, atmosphere, systems, memory, and the quiet structures beneath creative work."
        kicker="Ideas kept close to the moment they arrived."
        backgroundImage={archiveImageDesktop}
        mobileBackgroundImage={archiveImageMobile}
        imageAlt=""
        headingId="notes-hero-heading"
        className="ei-notes-hero"
        actions={
          <Button onClick={() => scrollToSection('featured-note')} variant="tertiary">
            Read the latest note <span aria-hidden="true">↓</span>
          </Button>
        }
      />

      <Section id="featured-note" spacing="none" className="ei-editorial-page-section ei-notes-featured-section">
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={blurEmergence}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <EchoCard variant="feature" padding="none" className="ei-notes-featured">
              <div className="ei-notes-featured-mark" aria-hidden="true">
                <OrbitalVisual variant="quietAxis" size={160} />
              </div>
              <div className="ei-notes-featured-copy">
                <SectionLabel label="Featured note" index="02" tone="accent" />
                <span>{archiveNotes[0].thread} · {archiveNotes[0].readTime}</span>
                <h2>{archiveNotes[0].title}</h2>
                <p>{archiveNotes[0].excerpt}</p>
                <Button onClick={() => scrollToSection(archiveNotes[0].id)} variant="tertiary">
                  Continue reading <span aria-hidden="true">↓</span>
                </Button>
              </div>
            </EchoCard>
          </motion.div>
        </ContentFrame>
      </Section>

      <Section spacing="none" className="ei-editorial-page-section">
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.normal, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.div variants={driftUp} className="ei-editorial-section-heading">
              <SectionLabel label="Recent notes" index="03" />
              <h2>Small pieces with enough room to resonate.</h2>
            </motion.div>
            <div className="ei-notes-list">
              {archiveNotes.map((note, index) => (
                <motion.article
                  key={note.id}
                  id={note.id}
                  variants={fadeSoft}
                  className="ei-notes-row"
                >
                  <div className="ei-notes-row-number">{String(index + 1).padStart(2, '0')}</div>
                  <IconWell size="sm" tone={index === 2 ? 'magenta' : 'violet'} orbital>
                    <OrbitalVisual variant={index === 1 ? 'innerTide' : 'synthesisStar'} size={24} />
                  </IconWell>
                  <div className="ei-notes-row-copy">
                    <span>{note.thread} · {note.readTime}</span>
                    <h3>{note.title}</h3>
                    <p>{note.excerpt}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </ContentFrame>
      </Section>

      <Section spacing="none" className="ei-editorial-page-section ei-notes-threads-section">
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.normal, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.div variants={driftUp} className="ei-editorial-section-heading">
              <SectionLabel label="Browse threads" index="04" />
              <h2>Recurring questions, gathered by signal.</h2>
            </motion.div>
            <motion.div variants={fadeSoft} className="ei-notes-thread-map">
              {archivePhilosophy.themes.map((theme, index) => (
                <EchoCard key={theme} variant="index" padding="md" className="ei-notes-thread">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{theme}</strong>
                </EchoCard>
              ))}
            </motion.div>
          </motion.div>
        </ContentFrame>
      </Section>

      <Section spacing="none" className="ei-editorial-page-section">
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.normal, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.div variants={driftUp} className="ei-archive-index-heading">
              <div className="ei-editorial-section-heading">
                <SectionLabel label="Note index" index="05" />
                <h2>Notes inside the larger archive.</h2>
              </div>
              <Button to="/archive/map" variant="tertiary">
                View full index <span aria-hidden="true">→</span>
              </Button>
            </motion.div>
            <motion.div variants={fadeSoft}>
              <ArchiveIndexList entries={noteIndexEntries} />
            </motion.div>
          </motion.div>
        </ContentFrame>
      </Section>

      <CTASection
        variant="editorialInvitation"
        eyebrow="Keep following"
        heading="Notes are one path through the Archive."
        body="Move into longer essays, case fragments, systems thinking, and worldbuilding."
        actions={
          <>
            <Button to="/archive" variant="primary">Enter the Archive</Button>
            <Button to="/archive/map" variant="secondary">Open the index</Button>
          </>
        }
        headingId="notes-cta-heading"
        className="ei-editorial-cta"
      />
    </PageShell>
  );
}
