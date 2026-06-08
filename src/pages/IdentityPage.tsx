import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import { DeliverableCard } from "@/components/cards/DeliverableCard";
import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { UseCasesList } from "@/components/sections/UseCasesList";
import { Button } from "@/components/ui/Button";
import identityHeroDesktop from "@/assets/imagery/hero/identity-hero-desktop.webp";
import identityHeroMobile from "@/assets/imagery/hero/identity-hero-mobile.webp";
import {
  identityAudience,
  identityClosing,
  identityDeliverables,
  identityHero,
  identityPricing,
  identityProcess,
  identityTransformation,
  identityUseCases,
} from "@/data/identityContent";
import {
  blurEmergence,
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from "@/lib/motion-cinematic";

function IdentityHeroTitle() {
  return (
    <>
      Every world{" "}
      <br />
      begins with a{" "}
      <em className="ei-type-studio-hero-emphasis">{identityHero.italicWord}</em>.
    </>
  );
}

export default function Identity() {
  return (
    <PageShell
      atmosphere="identity"
      withTopSpacing={false}
      className="ei-identity-page"
    >
      <Helmet>
        <title>Atmospheric Identity Direction — Echo in Ink</title>
        <meta
          name="description"
          content="Atmospheric Identity Kits translate the emotional shape of your work into clear creative direction — palette, typography, mood, tone, and visual notes."
        />
      </Helmet>

      <motion.section
        variants={staggerContainer(STAGGER.cinematic, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.loose}
        className="ei-identity-hero"
        aria-labelledby="identity-hero-heading"
      >
        <Container size="xl" className="relative z-10">
          <div className="ei-identity-hero-grid">
            <motion.div variants={driftUp} className="ei-identity-hero-copy">
              <p className="ei-type-studio-label">{identityHero.eyebrow}</p>

              <h1
                id="identity-hero-heading"
                className="ei-type-studio-hero ei-identity-hero-title"
              >
                <IdentityHeroTitle />
              </h1>

              <p className="ei-type-studio-label ei-identity-hero-subheading">
                {identityHero.subheading}
              </p>

              <div className="ei-identity-hero-body">
                {identityHero.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <motion.div variants={fadeSoft} className="ei-identity-hero-actions">
                <Button to={identityHero.primaryCta.href} variant="primary">
                  {identityHero.primaryCta.label}
                  <span aria-hidden="true">→</span>
                </Button>
                <Button
                  to={identityHero.secondaryCta.href}
                  variant="tertiary"
                  className="ei-identity-secondary-link"
                >
                  {identityHero.secondaryCta.label}
                  <span aria-hidden="true">→</span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeSoft} className="ei-identity-hero-stage">
              <picture className="ei-identity-hero-picture">
                <source media="(min-width: 768px)" srcSet={identityHeroDesktop} />
                <img
                  src={identityHeroMobile}
                  alt="Atmospheric moonlit world in violet and blue light."
                  className="ei-identity-hero-image"
                />
              </picture>
              <div className="ei-identity-hero-gridlines" aria-hidden="true" />
              <div className="ei-identity-hero-orbit" aria-hidden="true" />
              <div className="ei-identity-hero-veil" aria-hidden="true" />
            </motion.div>

            <motion.ul
              variants={fadeSoft}
              className="ei-identity-hero-rail"
              aria-label="Identity atmosphere includes"
            >
              {identityHero.atmosphereRail.map((item) => (
                <li key={item}>
                  <span aria-hidden="true" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>
        </Container>
      </motion.section>

      <Section spacing="none" className="ei-identity-section ei-identity-intro-section">
        <Container size="xl" className="relative z-10">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="ei-identity-intro-grid"
          >
            <motion.div variants={driftUp} className="ei-identity-audience">
              <h2 className="ei-type-studio-philosophy">
                For the creator who can{" "}
                <em className="ei-type-studio-philosophy-emphasis">feel</em>
                <br />
                the world, but cannot yet
                <br />
                see it{" "}
                <em className="ei-type-studio-philosophy-emphasis">clearly</em>.
              </h2>

              <div className="ei-identity-star-rule" aria-hidden="true" />

              <div className="ei-identity-audience-copy">
                {identityAudience.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeSoft} className="ei-identity-use-cases">
              <p className="ei-type-studio-label">Use cases</p>
              <UseCasesList items={identityUseCases} variant="marked" />
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section spacing="none" className="ei-identity-section">
        <Container size="xl" className="relative z-10">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="ei-identity-deliverables-panel"
          >
            <motion.p variants={fadeSoft} className="ei-type-studio-label">
              {identityDeliverables.heading}
            </motion.p>

            <div className="ei-identity-deliverables-grid">
              {identityDeliverables.items.map((item, index) => (
                <DeliverableCard key={item.title} {...item} index={index} />
              ))}
            </div>

            <motion.p variants={fadeSoft} className="ei-identity-deliverables-closing">
              {identityDeliverables.closing}
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      <Section
        id="process"
        spacing="none"
        className="ei-identity-section ei-identity-process-section"
      >
        <Container size="xl" className="relative z-10">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="ei-identity-process-grid"
          >
            <motion.h2 variants={blurEmergence} className="ei-type-studio-label">
              {identityProcess.heading}
            </motion.h2>

            <motion.div variants={driftUp} className="ei-identity-process-steps">
              <ProcessSteps
                steps={identityProcess.steps}
                closing={identityProcess.closing}
                layout="horizontal"
              />
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section spacing="none" className="ei-identity-transformation">
        <Container size="xl" className="relative z-10">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="ei-identity-transformation-inner"
          >
            <motion.p variants={driftUp} className="ei-type-studio-philosophy">
              {identityTransformation.heading}
              <br />
              <em>{identityTransformation.divider}</em>
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      <Section spacing="none" className="ei-identity-section ei-identity-pricing-section">
        <Container size="xl" className="relative z-10">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="ei-identity-pricing-grid"
          >
            <motion.div variants={driftUp} className="ei-identity-pricing-copy">
              <p className="ei-type-studio-label">{identityPricing.eyebrow}</p>
              <h2 className="ei-type-studio-philosophy">{identityPricing.heading}</h2>
              <p>{identityPricing.intro}</p>
            </motion.div>

            <motion.div variants={fadeSoft} className="ei-identity-pricing-cards">
              {identityPricing.tiers.map((tier) => (
                <article
                  key={tier.name}
                  className={`ei-card ei-identity-price-card ${
                    tier.featured ? "ei-identity-price-card-featured" : ""
                  }`}
                >
                  <p className="ei-type-studio-label">{tier.name}</p>
                  <p className="ei-identity-price">
                    {tier.price}
                    {tier.currency && <span>{tier.currency}</span>}
                  </p>
                  <p className="ei-type-small">{tier.summary}</p>
                  <ul className="ei-identity-price-features">
                    {tier.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <Button
                    to={tier.cta.href}
                    variant={tier.featured ? "primary" : "secondary"}
                    className="ei-identity-price-button"
                  >
                    {tier.cta.label}
                    <span aria-hidden="true">→</span>
                  </Button>
                </article>
              ))}
            </motion.div>

            <motion.aside variants={driftUp} className="ei-identity-pricing-anchor">
              <span aria-hidden="true">✦</span>
              <p>{identityPricing.anchor}</p>
            </motion.aside>
          </motion.div>
        </Container>
      </Section>

      <Section spacing="none" className="ei-identity-closing-section">
        <Container size="xl" className="relative z-10">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="ei-identity-closing-strip"
          >
            <div className="ei-identity-closing-mark" aria-hidden="true">
              E
            </div>

            <motion.div variants={driftUp} className="ei-identity-closing-copy">
              <h2 className="ei-type-studio-slim-cta">{identityClosing.heading}</h2>
              <p className="ei-type-studio-body-small">{identityClosing.subline}</p>
            </motion.div>

            <motion.div variants={fadeSoft} className="ei-identity-closing-action">
              <Button to={identityClosing.cta.href} variant="primary">
                {identityClosing.cta.label}
                <span aria-hidden="true">→</span>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </PageShell>
  );
}
}
