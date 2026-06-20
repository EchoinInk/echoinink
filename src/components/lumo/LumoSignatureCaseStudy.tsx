import type { ReactNode } from "react";
import { motion } from "framer-motion";

import heroDesktop from "@/assets/imagery/hero/lumo-page-hero-desktop.webp";
import heroMobile from "@/assets/imagery/hero/lumo-page-hero-mobile.webp";
import atmosphereDesktop from "@/assets/imagery/hero/lumo-hero-light-horizon-desktop.webp";
import celebrationCloud from "@/assets/projects/lumo/lumo-clouds/lumo-celebrationcloud.png";
import connectedCloud from "@/assets/projects/lumo/lumo-clouds/lumo-connectedcloud.png";
import focusCloud from "@/assets/projects/lumo/lumo-clouds/lumo-focuscloud.png";
import gentleReminderCloud from "@/assets/projects/lumo/lumo-clouds/lumo-gentleremindercloud.png";
import growingCloud from "@/assets/projects/lumo/lumo-clouds/lumo-growingcloud.png";
import overwhelmedCloud from "@/assets/projects/lumo/lumo-clouds/lumo-overwhelmedcloud.png";
import puzzleCloud from "@/assets/projects/lumo/lumo-clouds/lumo-puzzle.png";
import restingCloud from "@/assets/projects/lumo/lumo-clouds/lumo-restingcloud.png";
import smilingCloud from "@/assets/projects/lumo/lumo-clouds/lumo-smilingcloud.png";
import thinkingCloud from "@/assets/projects/lumo/lumo-clouds/lumo-thinkingcloud.png";
import thumbsUpCloud from "@/assets/projects/lumo/lumo-clouds/lumo-thumbsupcloud.png";
import youTriedCloud from "@/assets/projects/lumo/lumo-clouds/lumo-youtriedcloud.png";
import { Container } from "@/components/layout/Container";
import { LumoHero } from "@/components/lumo/LumoHero";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  blurEmergence,
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from "@/lib/motion-cinematic";

const metadata = ["Identity System", "UX/UI Design", "Narrative Architecture"];

const principles = [
  {
    title: "Reduce Overwhelm",
    body: "Simpler choices, clear pacing, and calm grouping keep the next step visible.",
    image: overwhelmedCloud,
    alt: "Lumo cloud looking overwhelmed",
  },
  {
    title: "Support Focus",
    body: "Important actions rise gently to the surface without asking for constant attention.",
    image: focusCloud,
    alt: "Lumo focus cloud",
  },
  {
    title: "Build Momentum",
    body: "Small progress moments feel real, encouraging, and easy to return to.",
    image: growingCloud,
    alt: "Lumo cloud with growth sprout",
  },
  {
    title: "Encourage Self-Kindness",
    body: "The system avoids shame loops and makes room for rest, resets, and trying again.",
    image: thumbsUpCloud,
    alt: "Lumo cloud giving a thumbs up",
  },
];

const characterSystem = [
  {
    name: "Celebration Cloud",
    role: "Marks progress with warmth and energy.",
    image: celebrationCloud,
    alt: "Lumo celebration cloud",
  },
  {
    name: "Focus Cloud",
    role: "Helps attention stay with one kind next step.",
    image: focusCloud,
    alt: "Lumo focus cloud",
  },
  {
    name: "Reminder Cloud",
    role: "Offers gentle prompts without pressure.",
    image: gentleReminderCloud,
    alt: "Lumo gentle reminder cloud",
  },
  {
    name: "Planning Cloud",
    role: "Makes structure feel friendly and reachable.",
    image: thinkingCloud,
    alt: "Lumo thinking cloud",
  },
  {
    name: "Support Cloud",
    role: "Holds space when the day feels heavy.",
    image: connectedCloud,
    alt: "Lumo connected support cloud",
  },
  {
    name: "Try Again Cloud",
    role: "Turns resets into part of the rhythm.",
    image: youTriedCloud,
    alt: "Lumo you tried cloud",
  },
];

const experienceFlow = [
  "Daily focus",
  "Tasks",
  "Calendar",
  "Habits",
  "Meals",
  "Budget",
  "Wellbeing",
];

const outcomeCards = [
  {
    title: "Clearer Daily Focus",
    body: "A gentler way to decide what matters now.",
  },
  {
    title: "Gentle Habit Support",
    body: "Routines designed for consistency without pressure.",
  },
  {
    title: "Reduced Cognitive Load",
    body: "Less visual demand, fewer decisions, and calmer hierarchy.",
  },
  {
    title: "A More Compassionate System",
    body: "Progress language that leaves room for real life.",
  },
];

function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={staggerContainer(STAGGER.normal, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.normal}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StorySection({
  index,
  label,
  title,
  intro,
  children,
  className,
}: {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={className} aria-labelledby={`lumo-section-${index}`}>
      <Container size="xl">
        <Reveal className="ei-lumo-story-shell">
          <motion.div variants={driftUp} className="ei-lumo-story-heading">
            <SectionLabel label={label} index={index} />
            <h2 id={`lumo-section-${index}`} className="ei-lumo-section-title">
              {title}
            </h2>
            {intro ? <div className="ei-lumo-section-intro">{intro}</div> : null}
          </motion.div>
          {children}
        </Reveal>
      </Container>
    </section>
  );
}

function SparkMark({ label }: { label?: string }) {
  return (
    <span className="ei-lumo-spark-mark" aria-hidden={label ? undefined : true}>
      {label ? <span>{label}</span> : null}
    </span>
  );
}

function HeroClouds() {
  return (
    <div className="ei-lumo-hero-clouds" aria-hidden="true">
      <img src={smilingCloud} alt="" />
      <span className="ei-lumo-hero-orbit ei-lumo-hero-orbit-one" />
      <span className="ei-lumo-hero-orbit ei-lumo-hero-orbit-two" />
    </div>
  );
}

function ScreenArtifact({ title, index }: { title: string; index: number }) {
  return (
    <article className="ei-lumo-screen-artifact">
      <div className="ei-lumo-screen-topline">
        <span>Lumo</span>
        <i />
      </div>
      <h3>{title}</h3>
      <div className="ei-lumo-screen-body" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="ei-lumo-screen-footer">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <SparkMark />
      </div>
    </article>
  );
}

function LumoIntroSection() {
  return (
    <section className="ei-lumo-intro" aria-labelledby="lumo-section-01">
      <Container size="xl">
        <Reveal className="ei-lumo-intro-panel">
          <motion.div variants={driftUp} className="ei-lumo-intro-copy">
            <SectionLabel label="Introduction" index="01" />
            <h2 id="lumo-section-01" className="ei-lumo-section-title">
              Focus your light. Achieve more.
            </h2>
            <p>
              Lumo helps overwhelmed people organise life gently, turning everyday
              planning into a softer system of focus, routines, reminders, and care.
            </p>
            <dl className="ei-lumo-principle-list">
              <div>
                <dt>Calm first</dt>
                <dd>Every interaction lowers pressure before it asks for action.</dd>
              </div>
              <div>
                <dt>One next step</dt>
                <dd>Structure is present, but never louder than the person using it.</dd>
              </div>
            </dl>
          </motion.div>
          <motion.div variants={blurEmergence} className="ei-lumo-intro-mascot">
            <img src={smilingCloud} alt="Smiling Lumo cloud mascot" />
          </motion.div>
          <motion.blockquote variants={fadeSoft} className="ei-lumo-intro-quote">
            Lumo is not just a planner. It is a calm companion that helps you focus,
            stay kind to yourself, and make real progress.
          </motion.blockquote>
        </Reveal>
      </Container>
    </section>
  );
}

function LumoOverviewSection() {
  return (
    <StorySection
      index="02"
      label="Product overview"
      title="Everything in one gentle system."
      intro="The product story is built around a complete support ecosystem: daily clarity, practical routines, emotional safety, and low-friction progress."
      className="ei-lumo-overview"
    >
      <motion.div variants={blurEmergence} className="ei-lumo-product-board">
        <div className="ei-lumo-board-copy">
          <span>Experience map</span>
          <p>
            Existing final screenshots are not present in this repo, so this board
            uses an asset-ready presentation with the available Lumo atmosphere and
            product narrative structure.
          </p>
        </div>
        <div className="ei-lumo-board-visual">
          <picture>
            <img src={atmosphereDesktop} alt="Lumo blue violet atmospheric product world" />
          </picture>
          <div className="ei-lumo-board-screens" aria-label="Lumo product areas">
            {experienceFlow.slice(0, 5).map((item, index) => (
              <ScreenArtifact key={item} title={item} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </StorySection>
  );
}

function LumoNarrativeSystem() {
  const items = [
    {
      title: "The Challenge",
      body: "Traditional planning tools can be dense, demanding, and cognitively draining, especially when life already feels full.",
      image: puzzleCloud,
    },
    {
      title: "The Outcome",
      body: "Lumo reframes planning as gentle support: clear enough to guide, soft enough to return to.",
      image: gentleReminderCloud,
    },
    {
      title: "The System",
      body: "Clarity, routines, emotional safety, and low-friction progress work together as one calm product world.",
      image: growingCloud,
    },
  ];

  return (
    <StorySection
      index="03"
      label="Challenge · Outcome · System"
      title="Planning, rebuilt as support."
      className="ei-lumo-narrative"
    >
      <motion.div variants={staggerContainer(STAGGER.tight, 0.08)} className="ei-lumo-narrative-panel">
        {items.map((item) => (
          <motion.article key={item.title} variants={driftUp}>
            <img src={item.image} alt="" aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </motion.article>
        ))}
      </motion.div>
    </StorySection>
  );
}

function LumoPrinciplesSection() {
  return (
    <StorySection
      index="04"
      label="Designing for neurodivergent minds"
      title="Built with empathy. Backed by intention."
      intro="The design direction treats accessibility as atmosphere, pacing, copy, hierarchy, and emotional permission working together."
      className="ei-lumo-principles"
    >
      <motion.div variants={staggerContainer(STAGGER.tight, 0.08)} className="ei-lumo-principles-grid">
        {principles.map((principle) => (
          <motion.article key={principle.title} variants={driftUp}>
            <img src={principle.image} alt={principle.alt} />
            <h3>{principle.title}</h3>
            <p>{principle.body}</p>
          </motion.article>
        ))}
      </motion.div>
    </StorySection>
  );
}

function LumoCharacterSystem() {
  return (
    <StorySection
      index="05"
      label="Character system"
      title="A little cloud. A big difference."
      intro="The cloud character gives Lumo emotional warmth, recognisable feedback, and a softer way to guide people through the product."
      className="ei-lumo-characters"
    >
      <motion.div variants={staggerContainer(STAGGER.tight, 0.08)} className="ei-lumo-character-rail">
        {characterSystem.map((character) => (
          <motion.figure key={character.name} variants={driftUp}>
            <img src={character.image} alt={character.alt} />
            <figcaption>
              <span>{character.name}</span>
              <p>{character.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </StorySection>
  );
}

function LumoProductGallery() {
  return (
    <StorySection
      index="06"
      label="Product experience"
      title="Made for real life. Not perfect days."
      intro="The product flow is organized around everyday recovery: start small, regain context, make one useful move, and return without shame."
      className="ei-lumo-experience"
    >
      <motion.div variants={fadeSoft} className="ei-lumo-gallery-scroll" aria-label="Lumo product experience areas">
        {experienceFlow.map((item, index) => (
          <ScreenArtifact key={item} title={item} index={index} />
        ))}
      </motion.div>
    </StorySection>
  );
}

function LumoIdentitySystem() {
  const swatches = ["Sky Blue", "Bright Indigo", "Violet", "Magenta", "Coral", "Lime", "Ink", "Mist"];

  return (
    <StorySection
      index="07"
      label="Identity system"
      title="A new spark of clarity."
      intro="No finished logo asset exists in the repo, so this section presents the available typographic identity direction, color logic, and sparkle motif as a production-ready system frame."
      className="ei-lumo-identity"
    >
      <motion.div variants={blurEmergence} className="ei-lumo-identity-board">
        <div className="ei-lumo-wordmark-panel">
          <SparkMark />
          <strong>Lumo</strong>
          <span>Focus your light. Achieve more.</span>
        </div>
        <div className="ei-lumo-type-panel">
          <span>Aa</span>
          <strong>Aa</strong>
          <p>Fraunces editorial warmth with clean structural product rhythm.</p>
        </div>
        <div className="ei-lumo-swatch-panel" aria-label="Lumo color atmosphere">
          {swatches.map((swatch) => (
            <span key={swatch} title={swatch} />
          ))}
        </div>
        <div className="ei-lumo-icon-panel" aria-label="Lumo app icon treatments">
          <SparkMark />
          <SparkMark />
          <SparkMark />
        </div>
      </motion.div>
    </StorySection>
  );
}

function LumoEcosystemSection() {
  return (
    <StorySection
      index="08"
      label="Ecosystem"
      title="All pieces working together in harmony."
      intro="The complete world combines atmosphere, characters, product rhythm, copy, and brand details without turning the page into a noisy collage."
      className="ei-lumo-ecosystem"
    >
      <motion.div variants={blurEmergence} className="ei-lumo-ecosystem-collage">
        <img className="ei-lumo-ecosystem-atmosphere" src={atmosphereDesktop} alt="" aria-hidden="true" />
        <img className="ei-lumo-ecosystem-cloud cloud-one" src={smilingCloud} alt="Smiling Lumo cloud mascot" />
        <img className="ei-lumo-ecosystem-cloud cloud-two" src={restingCloud} alt="Resting Lumo cloud mascot" />
        <img className="ei-lumo-ecosystem-cloud cloud-three" src={celebrationCloud} alt="Celebrating Lumo cloud mascot" />
        <div className="ei-lumo-ecosystem-screens" aria-label="Lumo ecosystem elements">
          {experienceFlow.slice(0, 4).map((item, index) => (
            <ScreenArtifact key={item} title={item} index={index} />
          ))}
        </div>
      </motion.div>
    </StorySection>
  );
}

function LumoQuoteSection() {
  return (
    <StorySection
      index="09"
      label="Design intent"
      title="A calmer way back to yourself."
      className="ei-lumo-quote"
    >
      <motion.div variants={blurEmergence} className="ei-lumo-quote-panel">
        <blockquote>
          Lumo should feel like the moment the room gets quieter: the next step is
          still there, but it no longer feels like a demand.
        </blockquote>
        <div>
          <span>Experience principle</span>
          <p>No fabricated testimonial is used. This statement describes the intended product feeling.</p>
        </div>
        <img src={gentleReminderCloud} alt="Gentle reminder Lumo cloud" />
      </motion.div>
    </StorySection>
  );
}

function LumoOutcomeSection() {
  return (
    <StorySection
      index="10"
      label="Final outcome"
      title="Lumo turns planning into a supportive ecosystem."
      intro="Because no verified metrics are present in the repo, the outcome is expressed as qualitative product value rather than invented numbers."
      className="ei-lumo-outcome"
    >
      <motion.div variants={staggerContainer(STAGGER.tight, 0.08)} className="ei-lumo-outcome-grid">
        {outcomeCards.map((card) => (
          <motion.article key={card.title} variants={driftUp}>
            <SparkMark />
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </motion.article>
        ))}
      </motion.div>
    </StorySection>
  );
}

function LumoClosingCTA() {
  return (
    <section className="ei-lumo-closing" aria-labelledby="lumo-section-11">
      <Container size="xl">
        <Reveal className="ei-lumo-closing-panel">
          <motion.div variants={driftUp}>
            <SectionLabel label="Ready to build with" index="11" />
            <h2 id="lumo-section-11" className="ei-lumo-section-title">
              Every world starts with a spark.
            </h2>
            <p>Let us create something meaningful together.</p>
          </motion.div>
          <motion.div variants={fadeSoft} className="ei-lumo-closing-action">
            <Button to="/contact" variant="primary">
              Start a Conversation <span aria-hidden="true" className="ei-cta-arrow">→</span>
            </Button>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}

export function SignatureCaseStudy() {
  return (
    <article className="ei-lumo-case-study">
      <header>
        <LumoHero
          variant="caseStudy"
          eyebrow="Case study"
          title="Lumo"
          description="A luminous identity and digital experience shaped around clarity, emotional safety, and coherent expression for overwhelmed humans."
          kicker={
            <>
              <p className="ei-lumo-hero-title-line">A world built for overwhelmed humans.</p>
              <ul className="ei-lumo-hero-meta" aria-label="Lumo project scope">
                {metadata.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          }
          actions={
            <Button to="#lumo-section-01" variant="tertiary">
              Case study overview <span aria-hidden="true" className="ei-cta-arrow ei-cta-arrow-down">↓</span>
            </Button>
          }
          media={<HeroClouds />}
          backgroundImage={heroDesktop}
          mobileBackgroundImage={heroMobile}
          imageAlt=""
          headingId="lumo-hero-heading"
          className="ei-lumo-hero"
          contentClassName="ei-lumo-hero-content"
        />
      </header>

      <LumoIntroSection />
      <LumoOverviewSection />
      <LumoNarrativeSystem />
      <LumoPrinciplesSection />
      <LumoCharacterSystem />
      <LumoProductGallery />
      <LumoIdentitySystem />
      <LumoEcosystemSection />
      <LumoQuoteSection />
      <LumoOutcomeSection />
      <LumoClosingCTA />
    </article>
  );
}
