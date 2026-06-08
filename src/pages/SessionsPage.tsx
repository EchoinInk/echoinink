import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

import sessionsHeroDesktop from "@/assets/imagery/hero/sessions-hero-desktop.webp";
import sessionsHeroMobile from "@/assets/imagery/hero/sessions-hero-mobile.webp";
import imageCTA from "@/assets/imagery/sections/sessions-cta-desktop.webp";

import imageFocus from "@/assets/imagery/sections/sessions-focus-desktop.webp";
import imageOffer from "@/assets/imagery/sections/sessions-offer-desktop.webp";


import {
  sessionsApproach,
  sessionsAudience,
  sessionsBring,
  sessionsClosing,
  sessionsHero,
  sessionsOrientation,
  sessionsOutcomes,
  sessionsPricing,
  sessionsTransformation,
  sessionsTypes,
  sessionsUseCases,
} from "@/data/sessionsContent";

type SignalCardProps = {
  eyebrow: string;
  icon: OrbitalVariant;
  items: string[];
};

const signalCards: SignalCardProps[] = [
  {
    eyebrow: "What can emerge",
    icon: "prismMirror",
    items: [
      sessionsUseCases[0],
      sessionsUseCases[1],
      sessionsUseCases[6],
      sessionsUseCases[4],
    ],
  },
  {
    eyebrow: "What it does",
    icon: "focusDial",
    items: sessionsApproach.pillars.map((pillar) => pillar.description),
  },
  {
    eyebrow: "What it feels like",
    icon: "chorusCore",
    items: sessionsTransformation.after.slice(0, 4),
  },
];

const audienceSignals = [
  "You feel something clearly but cannot yet articulate it.",
  "Your direction has become emotionally fragmented.",
  "You are circling the truth without landing on it.",
  "You need clarity before committing to larger creative decisions.",
  "You want a direction that feels internally trustworthy.",
];

const bringItems = sessionsBring.items.slice(0, 4);
const outcomeItems = sessionsOutcomes.items.slice(0, 4);

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="ei-section-label-row">
      <span className="ei-section-label">{children}</span>
      <span className="ei-section-label-line" />
    </div>
  );
}

function SignalCard({ eyebrow, icon, items }: SignalCardProps) {
  return (
    <motion.article variants={driftUp} className="ei-card ei-sessions-card">
      <span className="ei-type-studio-label">{eyebrow}</span>
      <OrbitalVisual
        variant={icon}
        size={78}
        className="ei-sessions-card-icon"
      />
      <ul className="ei-sessions-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <span className="ei-sessions-card-star" aria-hidden="true" />
    </motion.article>
  );
}

export function SessionsPage() {
  const primaryTier = sessionsPricing.tiers[0];
  const deepTier = sessionsPricing.tiers[1];

  return (
    <PageShell atmosphere="sessions" withTopSpacing={false}>
      <Helmet>
        <title>Echo Sessions — Echo in Ink</title>
        <meta
          name="description"
          content="One-to-one creativee direction sessions for founders, artists, writers, and makers — clarity, naming, identity, and worldbuilding.."
        />
      </Helmet>

      <motion.section
        variants={staggerContainer(STAGGER.cinematic, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.loose}
        className="ei-sessions-hero"
        aria-labelledby="sessions-hero-heading"
      >
        <picture className="ei-sessions-hero-image" aria-hidden="true">
          <source media="(min-width: 768px)" srcSet={sessionsHeroDesktop} />
          <img src={sessionsHeroMobile} alt="" fetchPriority="high" />
        </picture>

        <div className="ei-sessions-hero-overlay" aria-hidden="true" />
        <div className="ei-sessions-hero-vignette" aria-hidden="true" />

        <Container size="xl" className="relative z-10">
          <motion.div variants={driftUp} className="ei-sessions-hero-copy">
            <SectionLabel>Signal Session</SectionLabel>

            <motion.h1
              id="sessions-hero-heading"
              variants={blurEmergence}
              className="ei-type-studio-hero"
            >
              Clarity before expression.
            </motion.h1>

            <motion.p
              variants={fadeSoft}
              className="ei-type-studio-body ei-sessions-hero-description"
            >
              {sessionsHero.body[0]}
            </motion.p>

            <motion.div variants={fadeSoft} className="ei-sessions-hero-meta">
              <div>
                <OrbitalVisual variant="synthesisStar" size={42} />
                <span>60 or 90 minutes of focused creative direction</span>
              </div>
              <div>
                <OrbitalVisual variant="focusDial" size={42} />
                <span>Optional Session Reflection Note</span>
              </div>
            </motion.div>

            <motion.div variants={fadeSoft} className="ei-sessions-hero-actions">
              <Button to={sessionsHero.primaryCta.href} variant="primary">
                {sessionsHero.primaryCta.label}
              </Button>
              <a href="#session-types" className="ei-link">
                {sessionsHero.secondaryCta.label} →
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </motion.section>

      <Section spacing="none" className="ei-sessions-main">
        <Container size="xl" className="relative z-10">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
            className="ei-sessions-stack"
          >
            <motion.figure variants={fadeSoft} className="ei-sessions-quote">
              <blockquote className="ei-type-quote">
                “{sessionsTransformation.divider}”
              </blockquote>
            </motion.figure>

            <div className="ei-sessions-signal-grid">
              {signalCards.map((card) => (
                <SignalCard key={card.eyebrow} {...card} />
              ))}
            </div>

            <div className="ei-sessions-detail-grid" id="session-types">
              <motion.article
                variants={driftUp}
                className="ei-card ei-sessions-detail-panel"
              >
                <SectionLabel>Format</SectionLabel>
                <div className="ei-sessions-format-line">
                  <OrbitalVisual variant="signalBridge" size={58} />
                  <div>
                    <p className="ei-type-body">{sessionsPricing.note}</p>
                    <p className="ei-type-small">
                      {primaryTier.name} - {primaryTier.duration} -{" "}
                      {primaryTier.price}
                    </p>
                    <p className="ei-type-small">
                      {deepTier.name} - {deepTier.duration} - {deepTier.price}
                    </p>
                  </div>
                </div>
                <div className="ei-sessions-session-types">
                  {sessionsTypes.map((session) => (
                    <div key={session.title}>
                      <span>{session.number}</span>
                      <p>{session.title}</p>
                    </div>
                  ))}
                </div>
                <div className="ei-sessions-detail-image" aria-hidden="true">
                  <img src={imageFocus} alt="" loading="lazy" />
                </div>
              </motion.article>

              <motion.article
                variants={driftUp}
                className="ei-card ei-sessions-detail-panel"
              >
                <SectionLabel>This is for you if...</SectionLabel>
                <OrbitalVisual
                  variant="threadBeacon"
                  size={64}
                  className="ei-sessions-audience-icon"
                />
                <ul className="ei-sessions-list ei-sessions-list-left">
                  {audienceSignals.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.article>
            </div>

            <motion.article variants={fadeSoft} className="ei-card ei-sessions-offer">
              <div className="ei-sessions-offer-copy">
                <span className="ei-type-studio-label">Session offer</span>
                <h2 className="ei-type-section">{sessionsPricing.heading}</h2>
                <div className="ei-sessions-offer-intro">
                  {sessionsPricing.intro.map((paragraph) => (
                    <p key={paragraph} className="ei-type-body">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <p className="ei-sessions-price">{sessionsPricing.note}</p>
                <p className="ei-type-small">
                  {primaryTier.description} {deepTier.description}
                </p>
                <div className="ei-sessions-offer-lists">
                  <div>
                    <span className="ei-type-studio-label">
                      {sessionsBring.heading}
                    </span>
                    <ul className="ei-sessions-list ei-sessions-list-left">
                      {bringItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="ei-type-studio-label">
                      {sessionsOutcomes.heading}
                    </span>
                    <ul className="ei-sessions-list ei-sessions-list-left">
                      {outcomeItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="ei-sessions-offer-image" aria-hidden="true">
                <img src={imageOffer} alt="" loading="lazy" />
              </div>
            </motion.article>

            <motion.article variants={fadeSoft} className="ei-sessions-audience">
              <h2 className="ei-type-section">{sessionsOrientation.heading}</h2>
              <div className="ei-sessions-orientation">
                {sessionsOrientation.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="ei-type-body">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="ei-type-body-large">{sessionsAudience}</p>
            </motion.article>

            <motion.article variants={fadeSoft} className="ei-card ei-sessions-cta">
              <div className="ei-sessions-cta-image" aria-hidden="true">
                <img src={imageCTA} alt="" loading="lazy" />
              </div>
              <div className="ei-sessions-cta-copy">
                <h2 className="ei-type-section">{sessionsClosing.heading}</h2>
                <p className="ei-type-body">{sessionsClosing.subline}</p>
                <Button to={sessionsClosing.cta.href} variant="primary">
                  {sessionsClosing.cta.label}
                  <span aria-hidden="true">→</span>
                </Button>
                <div className="ei-sessions-secondary-links">
                  <Link to="/identity">Explore Identity Translation →</Link>
                  <Link to="/works">Explore the Works →</Link>
                </div>
              </div>
            </motion.article>
          </motion.div>
        </Container>
      </Section>
    </PageShell>
  );
}
