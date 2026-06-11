import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import worksHeroDesktop from '@/assets/imagery/hero/works-hero-desktop.webp';
import worksHeroMobile from '@/assets/imagery/hero/works-hero-mobile.webp';
import worksCtaImage from '@/assets/imagery/sections/works-cta.webp';
import { ContentFrame } from '@/components/layout/ContentFrame';
import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { CTASection } from '@/components/sections/CTASection';
import { EchoHero } from '@/components/sections/EchoHero';
import { Button } from '@/components/ui/Button';
import { EchoCard } from '@/components/ui/EchoCard';
import { IconWell } from '@/components/ui/IconWell';
import { OrbitalVisual, type OrbitalVariant } from '@/components/ui/OrbitalVisual';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { WorkFilterBar } from '@/components/works/WorkFilterBar';
import { WorksGrid } from '@/components/works/WorksGrid';
import { worksProjects, type WorkFilter, type WorkSort } from '@/data/worksProjects';
import {
  blurEmergence,
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT
} from '@/lib/motion-cinematic';

const featuredProject = worksProjects.find((project) => project.featured);

const proofValues: Array<{
  title: string;
  description: string;
  icon: OrbitalVariant;
  tone: 'blue' | 'violet' | 'magenta';
}> = [
  {
    title: 'Atmosphere',
    description:
      'An emotional climate that makes the work recognisable before every detail is explained.',
    icon: 'innerTide',
    tone: 'violet'
  },
  {
    title: 'System',
    description:
      'A coherent visual and verbal language designed to hold together across real touchpoints.',
    icon: 'vectorLattice',
    tone: 'blue'
  },
  {
    title: 'Commercial clarity',
    description:
      'A sharper expression of value, so people can understand the offer and trust where it leads.',
    icon: 'signalBridge',
    tone: 'magenta'
  }
];

export function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>('All Works');
  const [sortBy, setSortBy] = useState<WorkSort>('Latest');

  return (
    <PageShell atmosphere="works" withTopSpacing={false} className="ei-works-page">
      <Helmet>
        <title>Works | Echo In Ink</title>
        <meta
          name="description"
          content="Selected identity systems, immersive websites, and atmospheric digital experiences by Echo In Ink."
        />
      </Helmet>

      <EchoHero
        variant="archive"
        eyebrow="Selected proof"
        index="01"
        title={
          <>
            Proof, shaped as <em>atmosphere.</em>
          </>
        }
        description="A curated body of identity, narrative, and digital work — showing how feeling becomes structure, and structure becomes value."
        backgroundImage={worksHeroDesktop}
        mobileBackgroundImage={worksHeroMobile}
        imageAlt=""
        headingId="works-hero-heading"
        className="ei-works-hero"
        contentClassName="ei-works-hero-content"
        actions={
          <>
            <Button to="/works/lumo" variant="primary">
              View featured case study
            </Button>
            <Button to="#selected-works" variant="tertiary">
              Explore selected work <span aria-hidden="true">→</span>
            </Button>
          </>
        }
      />

      {featuredProject ? (
        <Section spacing="none" className="ei-works-section ei-works-featured">
          <ContentFrame width="standard" gutters>
            <motion.div
              variants={staggerContainer(STAGGER.loose, 0)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT.normal}
            >
              <motion.div variants={fadeSoft}>
                <EchoCard variant="proof" padding="none" className="ei-works-featured-panel">
                  <div className="ei-works-featured-media">
                    <img src={featuredProject.image} alt="" aria-hidden="true" />
                    <div className="ei-works-featured-scrim" aria-hidden="true" />
                    <span>Featured case study</span>
                  </div>

                  <div className="ei-works-featured-copy">
                    <SectionLabel label="Credibility anchor" index="02" />
                    <div className="ei-works-featured-meta">
                      <span>{featuredProject.status}</span>
                      <span>{featuredProject.category}</span>
                    </div>
                    <motion.h2 variants={blurEmergence}>{featuredProject.title}</motion.h2>
                    <p className="ei-works-featured-outcome">{featuredProject.proofLine}</p>
                    <p className="ei-works-featured-description">{featuredProject.description}</p>

                    <dl className="ei-works-featured-facts">
                      <div>
                        <dt>Challenge</dt>
                        <dd>{featuredProject.challenge}</dd>
                      </div>
                      <div>
                        <dt>Scope</dt>
                        <dd>{featuredProject.scope}</dd>
                      </div>
                      <div>
                        <dt>Output</dt>
                        <dd>{featuredProject.output}</dd>
                      </div>
                      <div>
                        <dt>Result</dt>
                        <dd>{featuredProject.result}</dd>
                      </div>
                    </dl>

                    <Button to={featuredProject.href ?? '/works/lumo'} variant="secondary">
                      Enter the Lumo case study <span aria-hidden="true">→</span>
                    </Button>
                  </div>
                </EchoCard>
              </motion.div>
            </motion.div>
          </ContentFrame>
        </Section>
      ) : null}

      <Section id="selected-works" spacing="none" className="ei-works-section ei-works-selected">
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.div variants={driftUp} className="ei-works-section-heading">
              <SectionLabel label="Selected works" index="03" />
              <div>
                <h2>Curated by the weight of the proof.</h2>
                <p>
                  Full studies lead. Concepts and fragments follow in a quieter register, so every
                  piece is honest about what it demonstrates.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeSoft} className="ei-works-filter-wrap">
              <WorkFilterBar
                activeFilter={activeFilter}
                sortBy={sortBy}
                onFilterChange={setActiveFilter}
                onSortChange={setSortBy}
              />
            </motion.div>

            <motion.div variants={fadeSoft}>
              <WorksGrid activeFilter={activeFilter} sortBy={sortBy} />
            </motion.div>
          </motion.div>
        </ContentFrame>
      </Section>

      <Section spacing="none" className="ei-works-section ei-works-proof">
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.div variants={driftUp} className="ei-works-section-heading">
              <SectionLabel label="What the work demonstrates" index="05" />
              <div>
                <h2>Beauty is only useful when it carries meaning.</h2>
                <p>
                  The work is designed to create recognition, coherence, and a clearer path into the
                  value behind the offer.
                </p>
              </div>
            </motion.div>

            <div className="ei-works-proof-grid">
              {proofValues.map((value, index) => (
                <motion.div key={value.title} variants={driftUp}>
                  <EchoCard
                    variant={index === 1 ? 'feature' : 'static'}
                    padding="lg"
                    className="ei-works-proof-card"
                  >
                    <IconWell size="md" tone={value.tone} orbital glow>
                      <OrbitalVisual variant={value.icon} size={42} />
                    </IconWell>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </EchoCard>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeSoft} className="ei-works-proof-note">
              Looking for the thinking behind the work?{' '}
              <Link to="/studio">
                Explore the studio approach <span aria-hidden="true">→</span>
              </Link>
            </motion.p>
          </motion.div>
        </ContentFrame>
      </Section>

      <CTASection
        variant="imagePanel"
        eyebrow="Begin a project"
        heading={
          <>
            Make the value <em>felt.</em>
          </>
        }
        body="Bring the idea, tension, or ambition. We will shape the atmosphere, system, and expression around what it needs to become."
        image={worksCtaImage}
        imageAlt=""
        className="ei-works-closing"
        actions={
          <>
            <Button to="/contact" variant="primary">
              Start a conversation
            </Button>
            <Button to="/studio" variant="tertiary">
              Explore the studio <span aria-hidden="true">→</span>
            </Button>
          </>
        }
        secondary={
          <Link to="/sessions">Need clarity before a full engagement? Explore Echo Sessions.</Link>
        }
      />
    </PageShell>
  );
}
