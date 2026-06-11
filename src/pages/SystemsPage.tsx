import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import systemsHeroDesktop from "@/assets/imagery/hero/systems-hero-desktop.webp";
import systemsHeroMobile from "@/assets/imagery/hero/systems-hero-mobile.webp";
import systemsCTAImage from "@/assets/imagery/sections/cta-image-desktop.webp";
import { ContentFrame } from "@/components/layout/ContentFrame";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { EchoHero } from "@/components/sections/EchoHero";
import { Button } from "@/components/ui/Button";
import { EchoCard } from "@/components/ui/EchoCard";
import { IconWell } from "@/components/ui/IconWell";
import { OrbitalVisual } from "@/components/ui/OrbitalVisual";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  featuredSystem,
  latestSystems,
  systemPathway,
  systemsCategories,
  systemsClosing,
  systemsHero,
  systemsUseCases
} from "@/data/systemsContent";
import {
  blurEmergence,
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT
} from "@/lib/motion-cinematic";

function scrollToSystems() {
  const systemsSection = document.getElementById("systems-categories");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  systemsSection?.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start"
  });
}

function SystemsHeroArchitecture() {
  return (
    <div className="ei-systems-hero-architecture" aria-hidden="true">
      <span className="ei-systems-hero-orbit ei-systems-hero-orbit-one" />
      <span className="ei-systems-hero-orbit ei-systems-hero-orbit-two" />
      <span className="ei-systems-hero-orbit ei-systems-hero-orbit-three" />
      <span className="ei-systems-hero-node ei-systems-hero-node-core">
        <OrbitalVisual variant="vectorLattice" size={96} />
      </span>
      <span className="ei-systems-hero-node ei-systems-hero-node-foundation">Foundation</span>
      <span className="ei-systems-hero-node ei-systems-hero-node-tools">Tools</span>
      <span className="ei-systems-hero-node ei-systems-hero-node-direction">Direction</span>
      <span className="ei-systems-hero-node ei-systems-hero-node-output">Output</span>
    </div>
  );
}

export function SystemsPage() {
  return (
    <PageShell atmosphere="works" withTopSpacing={false} className="ei-systems-page">
      <Helmet>
        <title>Systems — Echo in Ink</title>
        <meta name="description" content={systemsHero.description} />
      </Helmet>

      <EchoHero
        variant="archive"
        eyebrow={systemsHero.eyebrow}
        index="01"
        title={
          <>
            Atmosphere, made <em>usable.</em>
          </>
        }
        description={systemsHero.description}
        backgroundImage={systemsHeroDesktop}
        mobileBackgroundImage={systemsHeroMobile}
        imageAlt=""
        media={<SystemsHeroArchitecture />}
        headingId="systems-hero-heading"
        className="ei-systems-hero"
        contentClassName="ei-systems-hero-content"
        actions={
          <>
            <Button to={systemsHero.primaryCta.href} variant="primary" onClick={scrollToSystems}>
              {systemsHero.primaryCta.label}
            </Button>
            <Button to={systemsHero.secondaryCta.href} variant="tertiary">
              {systemsHero.secondaryCta.label} <span aria-hidden="true">→</span>
            </Button>
          </>
        }
      />

      <Section
        id="systems-categories"
        spacing="none"
        className="ei-systems-section ei-systems-categories"
      >
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.div variants={driftUp} className="ei-systems-section-heading">
              <SectionLabel label="System architecture" index="02" />
              <div>
                <h2>Four layers. One coherent creative ecosystem.</h2>
                <p>
                  Start with the layer you need now, or combine them into a complete path from
                  early signal to finished world.
                </p>
              </div>
            </motion.div>

            <div className="ei-systems-category-grid">
              {systemsCategories.map((category, index) => (
                <motion.div key={category.title} variants={driftUp}>
                  <EchoCard
                    variant={index === 1 ? "feature" : "index"}
                    padding="lg"
                    className="ei-systems-category-card"
                  >
                    <div className="ei-systems-category-topline">
                      <IconWell
                        size="md"
                        tone={index === 3 ? "magenta" : "violet"}
                        orbital
                        glow
                      >
                        <OrbitalVisual variant={category.icon} size={42} />
                      </IconWell>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="ei-systems-category-layer">{category.layer}</p>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                    <dl className="ei-systems-category-facts">
                      <div>
                        <dt>Best for</dt>
                        <dd>{category.bestFor}</dd>
                      </div>
                      <div>
                        <dt>Output</dt>
                        <dd>{category.output}</dd>
                      </div>
                    </dl>
                    <ul>
                      {category.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </EchoCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ContentFrame>
      </Section>

      <Section
        id="featured-system"
        spacing="none"
        className="ei-systems-section ei-systems-featured-section"
      >
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.div variants={fadeSoft}>
              <EchoCard variant="offer" padding="none" className="ei-systems-featured">
                <div className="ei-systems-featured-copy">
                  <SectionLabel label="Featured system" index="03" />
                  <p className="ei-systems-featured-category">{featuredSystem.category}</p>
                  <motion.h2 variants={blurEmergence}>{featuredSystem.title}</motion.h2>
                  <p className="ei-systems-featured-description">{featuredSystem.description}</p>

                  <dl className="ei-systems-featured-facts">
                    <div>
                      <dt>Best for</dt>
                      <dd>{featuredSystem.bestFor}</dd>
                    </div>
                    <div>
                      <dt>Output</dt>
                      <dd>{featuredSystem.output}</dd>
                    </div>
                  </dl>

                  <div className="ei-systems-featured-parts">
                    <span>Inside the system</span>
                    <ul>
                      {featuredSystem.features.map((feature) => (
                        <li key={feature}>
                          <span aria-hidden="true">+</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="ei-systems-featured-actions">
                    <Button to={featuredSystem.cta.href} variant="secondary">
                      {featuredSystem.cta.label} <span aria-hidden="true">→</span>
                    </Button>
                    <span>{featuredSystem.format}</span>
                  </div>
                </div>

                <div className="ei-systems-featured-media" aria-hidden="true">
                  <img src={systemsCTAImage} alt="" loading="lazy" />
                  <div className="ei-systems-featured-map">
                    <span className="ei-systems-map-node ei-systems-map-node-signal">Signal</span>
                    <span className="ei-systems-map-node ei-systems-map-node-core">
                      Identity
                      <strong>Clarity</strong>
                    </span>
                    <span className="ei-systems-map-node ei-systems-map-node-voice">Voice</span>
                    <span className="ei-systems-map-node ei-systems-map-node-world">World</span>
                    <span className="ei-systems-map-line ei-systems-map-line-one" />
                    <span className="ei-systems-map-line ei-systems-map-line-two" />
                    <span className="ei-systems-map-line ei-systems-map-line-three" />
                  </div>
                </div>
              </EchoCard>
            </motion.div>
          </motion.div>
        </ContentFrame>
      </Section>

      <Section spacing="none" className="ei-systems-section ei-systems-modules">
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.div variants={driftUp} className="ei-systems-section-heading">
              <SectionLabel label="Tools and modules" index="04" />
              <div>
                <h2>Use one module. Build a larger system.</h2>
                <p>
                  Focused tools for a specific creative decision, designed to remain useful when
                  the work grows.
                </p>
              </div>
            </motion.div>

            <div className="ei-systems-module-grid">
              {latestSystems.map((system, index) => (
                <motion.div
                  key={system.title}
                  variants={driftUp}
                  className={index === 0 ? "ei-systems-module-featured" : undefined}
                >
                  <EchoCard variant="interactive" padding="none" className="ei-systems-module-card">
                    <Link to="/contact" aria-label={`Enquire about ${system.title}`}>
                      <div className="ei-systems-module-media">
                        <img
                          src={system.image}
                          alt=""
                          loading="lazy"
                          style={{ objectPosition: system.imagePosition }}
                        />
                      </div>
                      <div className="ei-systems-module-copy">
                        <div className="ei-systems-module-meta">
                          <span>{system.type}</span>
                          <span>{system.status}</span>
                        </div>
                        <h3>{system.title}</h3>
                        <p>{system.description}</p>
                        <dl>
                          <div>
                            <dt>Best for</dt>
                            <dd>{system.useCase}</dd>
                          </div>
                          <div>
                            <dt>Output</dt>
                            <dd>{system.output}</dd>
                          </div>
                        </dl>
                        <div className="ei-systems-module-action">
                          <span>{system.price}</span>
                          <span>
                            Explore <i aria-hidden="true">→</i>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </EchoCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ContentFrame>
      </Section>

      <Section spacing="none" className="ei-systems-section ei-systems-use-cases">
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.div variants={driftUp} className="ei-systems-section-heading">
              <SectionLabel label="Built for" index="05" />
              <div>
                <h2>Practical support for work with depth.</h2>
                <p>
                  Each system helps turn an intuitive creative challenge into a clearer decision,
                  direction, or deliverable.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeSoft}>
              <EchoCard variant="index" padding="none" className="ei-systems-use-case-table">
                {systemsUseCases.map((useCase) => (
                  <div key={useCase.audience} className="ei-systems-use-case-row">
                    <h3>{useCase.audience}</h3>
                    <p>{useCase.need}</p>
                    <span>{useCase.fit}</span>
                  </div>
                ))}
              </EchoCard>
            </motion.div>
          </motion.div>
        </ContentFrame>
      </Section>

      <Section spacing="none" className="ei-systems-section ei-systems-pathway">
        <ContentFrame width="standard" gutters>
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.div variants={driftUp} className="ei-systems-section-heading">
              <SectionLabel label="A larger pathway" index="06" />
              <div>
                <h2>From first signal to a world people can enter.</h2>
                <p>
                  Systems can stand alone, or connect with Echo Sessions and studio work as the
                  project becomes more defined.
                </p>
              </div>
            </motion.div>

            <ol className="ei-systems-pathway-list">
              {systemPathway.map((step, index) => (
                <motion.li key={step.title} variants={driftUp}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <IconWell size="sm" tone={index === 3 ? "magenta" : "blue"}>
                    <OrbitalVisual variant={step.icon} size={26} />
                  </IconWell>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </ContentFrame>
      </Section>

      <CTASection
        variant="imagePanel"
        eyebrow="Choose your next layer"
        heading={
          <>
            Build the structure that lets the <em>atmosphere hold.</em>
          </>
        }
        body={`${systemsClosing.title} ${systemsClosing.description}`}
        image={systemsCTAImage}
        imageAlt=""
        className="ei-systems-closing"
        actions={
          <>
            <Button to={systemsClosing.cta.href} variant="primary">
              {systemsClosing.cta.label}
            </Button>
            <Button to="/sessions" variant="tertiary">
              Start with a session <span aria-hidden="true">→</span>
            </Button>
          </>
        }
        secondary={
          <Link to="/contact">
            Not sure where to begin? Tell us what you are shaping{" "}
            <span aria-hidden="true">→</span>
          </Link>
        }
      />
    </PageShell>
  );
}
