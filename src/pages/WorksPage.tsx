import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import worksHeroDesktop from '@/assets/imagery/hero/works-hero-signal-stream-desktop.webp';
import worksHeroMobile from '@/assets/imagery/hero/works-hero-signal-stream-mobile.webp';
import worksCtaImage from '@/assets/imagery/sections/works-cta.webp';
import { ContentFrame } from '@/components/layout/ContentFrame';
import { PageShell } from '@/components/layout/PageShell';
import { Section } from '@/components/layout/Section';
import { CTASection } from '@/components/sections/CTASection';
import { PageSectionHero } from '@/components/sections/PageSectionHero';
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

const selectedSignals = [
  {
    title: 'Clearer positioning',
    description:
      'Sharper articulation of what the product is, who it serves, and why it matters.'
  },
  {
    title: 'Stronger product story',
    description: 'Case-study narratives structured around problem, system, and outcome.'
  },
  {
    title: 'Faster evaluation',
    description:
      'Portfolio paths designed for clients, founders, and collaborators to scan with confidence.'
  },
  {
    title: 'Launch-ready systems',
    description:
      'Reusable visual and content patterns built for consistency beyond a single page.'
  }
];

const lumoProofStrip = [
  {
    title: 'Challenge',
    anchor: 'Create',
    description:
      'a coherent product identity for an emotionally supportive planning product.'
  },
  {
    title: 'Solution',
    anchor: 'Use',
    description:
      'atmosphere, narrative, and reusable systems to unify the brand, interface, and case-study journey.'
  },
  {
    title: 'Outcome',
    anchor: 'Make',
    description: 'the value easier to understand, navigate, and remember.'
  }
];

const worksProofStats = [
  {
    value: worksProjects.length.toString(),
    label: 'Ideas made clearer'
  },
  {
    value: worksProjects.filter((project) => project.presentation === 'study').length.toString(),
    label: 'Full story paths'
  },
  {
    value: worksProjects.filter((project) => project.presentation === 'fragment').length.toString(),
    label: 'Focused proof points'
  },
  {
    value: '2026',
    label: 'Select project openings'
  }
];

const processValues: Array<{
  step: string;
  title: string;
  description: string;
  icon: OrbitalVariant;
  tone: 'blue' | 'violet' | 'magenta';
}> = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand the market, audience, offer, and emotional territory.',
    icon: 'innerTide',
    tone: 'violet'
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Shape the identity, interface direction, content rhythm, and visual system.',
    icon: 'vectorLattice',
    tone: 'blue'
  },
  {
    step: '03',
    title: 'Validate',
    description:
      'Pressure-test the story across real contexts, user paths, and stakeholder needs.',
    icon: 'signalBridge',
    tone: 'magenta'
  },
  {
    step: '04',
    title: 'Launch',
    description:
      'Deliver the assets, guidance, and reusable patterns needed to move consistently.',
    icon: 'quietAxis',
    tone: 'violet'
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
      <PageSectionHero
        eyebrow="Selected proof"
        title="Proof, shaped as atmosphere."
        italicWord="atmosphere."
        description="Independent designer for product identities, digital experiences, and visual systems — built to make ambitious ideas easier to understand."
        image={worksHeroDesktop}
        mobileImage={worksHeroMobile}
        imageAlt="Dark cinematic signal stream with luminous blue-violet atmosphere"
        align="left"
        ctaLabel="Start a Project"
        ctaHref="/contact"
        secondaryCtaLabel="View Selected Work"
        secondaryCtaHref="#selected-works"
      />

      <Section spacing="none" className="ei-works-section ei-works-signals">
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.div variants={driftUp} className="ei-works-section-heading">
              <SectionLabel label="Selected signals" index="02" />
              <div>
                <h2>Evidence that the atmosphere is doing its job.</h2>
                <p>
                  Brand systems, product stories, and digital experiences designed to make complex
                  value easier to trust, understand, and act on.
                </p>
                <p className="ei-works-audience-note">
                  Partnering with startups, software companies, and ambitious teams seeking clarity
                  through design.
                </p>
              </div>
            </motion.div>

            <motion.dl variants={fadeSoft} className="ei-works-proof-stats">
              {worksProofStats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </motion.dl>

            <div className="ei-works-signal-grid">
              {selectedSignals.map((signal, index) => (
                <motion.div key={signal.title} variants={driftUp}>
                  <EchoCard
                    variant={index === 0 ? 'proof' : 'static'}
                    padding="lg"
                    className="ei-works-signal-card"
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{signal.title}</h3>
                    <p>{signal.description}</p>
                  </EchoCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ContentFrame>
      </Section>

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
                  </div>

                  <div className="ei-works-featured-copy">
                    <SectionLabel label="Credibility anchor" index="03" />
                    <div className="ei-works-featured-meta">
                      <span>{featuredProject.status}</span>
                      <span>{featuredProject.category}</span>
                    </div>
                    <motion.h2 variants={blurEmergence}>{featuredProject.title}</motion.h2>
                    <p className="ei-works-featured-outcome">{featuredProject.proofLine}</p>
                    <p className="ei-works-featured-description">{featuredProject.description}</p>

                    <dl className="ei-works-featured-proof-strip">
                      {lumoProofStrip.map((item) => (
                        <div key={item.title}>
                          <dt>{item.title}</dt>
                          <dd>
                            <strong>{item.anchor}</strong> {item.description}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <Button to={featuredProject.href ?? '/works/lumo'} variant="secondary">
                      View case study <span aria-hidden="true">→</span>
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
              <SectionLabel label="Selected works" index="04" />
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
              <SectionLabel label="Process framework" index="06" />
              <div>
                <h2>From atmosphere to usable system.</h2>
                <p>
                  A practical sequence for turning emotional direction into identity, interface,
                  content, and launch-ready patterns.
                </p>
              </div>
            </motion.div>

            <div className="ei-works-proof-grid">
              {processValues.map((value, index) => (
                <motion.div key={value.title} variants={driftUp}>
                  <EchoCard
                    variant={index === 1 ? 'feature' : 'static'}
                    padding="lg"
                    className="ei-works-proof-card"
                  >
                    <IconWell size="md" tone={value.tone} orbital glow>
                      <OrbitalVisual variant={value.icon} size={42} />
                    </IconWell>
                    <span>{value.step}</span>
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
              Start a Project
            </Button>
            <Button to="/sessions" variant="secondary">
              Discuss your product <span aria-hidden="true">→</span>
            </Button>
          </>
        }
        secondary={
          <>
            <p>
              Currently accepting select product design, brand identity, and digital experience
              projects for 2026.
            </p>
            <Link to="#selected-works">Explore the work before reaching out.</Link>
          </>
        }
      />
    </PageShell>
  );
}
