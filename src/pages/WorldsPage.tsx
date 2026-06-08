import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { PageShell } from "@/components/layout/PageShell";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import {
  OrbitalVisual,
  type OrbitalVariant,
} from "@/components/ui/OrbitalVisual";
import {
  blurEmergence,
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from "@/lib/motion-cinematic";

import worldsHeroDesktop from "@/assets/imagery/hero/worlds-hero-desktop.webp";
import worldsHeroMobile from "@/assets/imagery/hero/worlds-hero-mobile.webp";
import worldsImageDesktop from "@/assets/imagery/sections/worlds-image-1-desktop.webp";
import worldsImageMobile from "@/assets/imagery/sections/worlds-image-1-mobile.webp";

import {
  worldsArchitecture,
  worldsClosing,
  worldsFitSignals,
  worldsHero,
  worldsIntro,
  worldsJourneyLinks,
  worldsPricing,
  worldsSignalCards,
} from "@/data/worldsContent";

type IconItem = {
  icon: string;
};

type SignalCard = IconItem & {
  eyebrow: string;
  items: string[];
};

type ArchitectureItem = IconItem & {
  label: string;
};

type FitSignal = IconItem & {
  text: string;
};

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="ei-section-label-row">
      <span className="ei-section-label">{children}</span>
      <span className="ei-section-label-line" />
    </div>
  );
}

function asOrbitalVariant(icon: string) {
  return icon as OrbitalVariant;
}

function SignalCard({ eyebrow, icon, items }: SignalCard) {
  return (
    <motion.article variants={driftUp} className="ei-card ei-worlds-signal-card">
      <OrbitalVisual
        variant={asOrbitalVariant(icon)}
        size={46}
        className="ei-worlds-signal-icon"
      />

      <h2 className="ei-type-studio-label">{eyebrow}</h2>

      <ul className="ei-worlds-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.article>
  );
}

function ArchitectureItem({ label, icon }: ArchitectureItem) {
  return (
    <motion.li variants={fadeSoft} className="ei-worlds-architecture-item">
      <OrbitalVisual
        variant={asOrbitalVariant(icon)}
        size={54}
        className="ei-worlds-architecture-icon"
      />
      <span>{label}</span>
    </motion.li>
  );
}

function FitSignal({ icon, text }: FitSignal) {
  return (
    <motion.li variants={fadeSoft} className="ei-worlds-fit-item">
      <OrbitalVisual
        variant={asOrbitalVariant(icon)}
        size={56}
        className="ei-worlds-fit-icon"
      />
      <span>{text}</span>
    </motion.li>
  );
}

export function WorldsPage() {
  return (
    <PageShell atmosphere="worlds" withTopSpacing={false}>
      <Helmet>
        <title>World Architecture — Echo in Ink</title>
        <meta
          name="description"
          content="Creative universe building for founders, artists, and projects that need emotional architecture, narrative direction, and atmospheric digital presence."
        />
      </Helmet>

      <motion.section
        variants={staggerContainer(STAGGER.cinematic, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.loose}
        className="ei-worlds-hero"
        aria-labelledby="worlds-hero-heading"
      >
        <picture className="ei-worlds-hero-image" aria-hidden="true">
          <source media="(min-width: 768px)" srcSet={worldsHeroDesktop} />
          <img src={worldsHeroMobile} alt="" fetchPriority="high" />
        </picture>

        <div className="ei-worlds-hero-overlay" aria-hidden="true" />
        <div className="ei-worlds-hero-vignette" aria-hidden="true" />

        <Container size="xl" className="relative z-10">
          <motion.div variants={driftUp} className="ei-worlds-hero-copy">
            <SectionLabel>/ Worlds</SectionLabel>

            <motion.h1
              id="worlds-hero-heading"
              variants={blurEmergence}
              className="ei-type-studio-hero"
            >
              Build the{" "}
              <em className="ei-type-studio-hero-emphasis">world</em> your work
              belongs to.
            </motion.h1>

            <motion.div
              variants={fadeSoft}
              className="ei-worlds-hero-description"
            >
              <p className="ei-type-studio-body">{worldsIntro.atmosphere}</p>
              <p className="ei-type-studio-body">{worldsHero.description}</p>
            </motion.div>

            <motion.div variants={fadeSoft} className="ei-worlds-hero-actions">
              <Button to={worldsHero.primaryCta.href} variant="primary">
                {worldsHero.primaryCta.label}
              </Button>
              <a href={worldsHero.secondaryCta.href} className="ei-link">
                {worldsHero.secondaryCta.label} →
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </motion.section>

      <Section spacing="none" className="ei-worlds-main">
        <Container size="xl" className="relative z-10">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="ei-worlds-stack"
          >
            <div className="ei-worlds-signal-grid">
              {worldsSignalCards.map((card) => (
                <SignalCard key={card.eyebrow} {...card} />
              ))}
            </div>

            <motion.article
              variants={fadeSoft}
              id="layers"
              className="ei-card ei-worlds-architecture-panel"
            >
              <SectionLabel>World Architecture</SectionLabel>
              <ul className="ei-worlds-architecture-row">
                {worldsArchitecture.map((item) => (
                  <ArchitectureItem key={item.label} {...item} />
                ))}
              </ul>
            </motion.article>

            <motion.article
              variants={fadeSoft}
              className="ei-card ei-worlds-investment-panel"
            >
              <div className="ei-worlds-investment-copy">
                <SectionLabel>Investment</SectionLabel>
                <h2 className="ei-type-section">{worldsPricing.heading}</h2>
                <div className="ei-worlds-investment-intro">
                  {worldsPricing.intro.map((paragraph) => (
                    <p key={paragraph} className="ei-type-body">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <Button to="/contact" variant="primary">
                  Begin a collaboration
                </Button>
              </div>

              <div className="ei-worlds-investment-orbit" aria-hidden="true">
                <OrbitalVisual variant="axiomRing" size={220} />
              </div>

              <div className="ei-worlds-tier-list">
                {worldsPricing.tiers.map((tier) => (
                  <div key={tier.name} className="ei-worlds-tier">
                    <span className="ei-type-studio-label">{tier.name}</span>
                    <strong>{tier.price}</strong>
                    <p>{tier.description}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article variants={fadeSoft} className="ei-card ei-worlds-fit-panel">
              <div className="ei-worlds-fit-heading">
                <span className="ei-type-studio-label">This is for you if...</span>
              </div>
              <ul className="ei-worlds-fit-row">
                {worldsFitSignals.map((item) => (
                  <FitSignal key={item.text} {...item} />
                ))}
              </ul>
            </motion.article>

            <motion.article variants={fadeSoft} className="ei-card ei-worlds-journey">
              <picture className="ei-worlds-journey-image" aria-hidden="true">
                <source media="(min-width: 768px)" srcSet={worldsImageDesktop} />
                <img src={worldsImageMobile} alt="" loading="lazy" />
              </picture>
              <div className="ei-worlds-journey-overlay" aria-hidden="true" />

              <div className="ei-worlds-journey-content">
                <SectionLabel>Continue your journey</SectionLabel>
                <h2 className="ei-type-section">
                  Some projects are not brands. They are{" "}
                  <em className="ei-type-studio-hero-emphasis">worlds</em>.
                </h2>
                <p className="ei-type-body">{worldsClosing.heading}</p>

                <div className="ei-worlds-journey-actions">
                  {worldsJourneyLinks.map((link) =>
                    link.variant === "primary" ? (
                      <Button key={link.href} to={link.href} variant="primary">
                        {link.label}
                      </Button>
                    ) : (
                      <Link key={link.href} to={link.href} className="ei-link">
                        {link.label} →
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </motion.article>
          </motion.div>
        </Container>
      </Section>
    </PageShell>
  );
}
