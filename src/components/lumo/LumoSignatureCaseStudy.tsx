import { motion } from "framer-motion";

import lumoStudy from "@/assets/projects/lumo-case-study.png";
import lumoAtmosphere from "@/assets/imagery/sections/lumo-featured-bg.webp";
import lumoAtmosphereMobile from "@/assets/imagery/sections/lumo-featured-mobile.webp";
import { CaseStudyLayout } from "@/components/layout/CaseStudyLayout";
import { CTASection } from "@/components/sections/CTASection";
import { EchoHero } from "@/components/sections/EchoHero";
import { Button } from "@/components/ui/Button";
import { EchoCard } from "@/components/ui/EchoCard";
import { IconWell } from "@/components/ui/IconWell";
import { OrbitalVisual, type OrbitalVariant } from "@/components/ui/OrbitalVisual";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  blurEmergence,
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from "@/lib/motion-cinematic";

const snapshots: Array<{
  label: string;
  title: string;
  body: string;
  icon: OrbitalVariant;
  tone: "blue" | "violet" | "magenta";
}> = [
  {
    label: "Challenge",
    title: "A meaningful signal without a clear form",
    body: "Lumo held depth, intention, and care, but needed an identity capable of communicating that purpose with clarity.",
    icon: "quietAxis",
    tone: "blue",
  },
  {
    label: "Direction",
    title: "Calm made structural",
    body: "The work translated emotional safety into atmosphere, language, hierarchy, and an interface direction built around restraint.",
    icon: "innerTide",
    tone: "violet",
  },
  {
    label: "Outcome",
    title: "One coherent world",
    body: "A luminous identity and digital system that feels human, recognisable, and unmistakably aligned with Lumo.",
    icon: "synthesisStar",
    tone: "magenta",
  },
];

const systemLayers = [
  { name: "Identity", detail: "A quiet, recognisable centre" },
  { name: "Colour", detail: "Atmosphere used as information" },
  { name: "Typography", detail: "Editorial warmth with structural clarity" },
  { name: "Components", detail: "Repeatable patterns with room to breathe" },
  { name: "Experience", detail: "A calm path through every touchpoint" },
];

const process = [
  ["Signal", "Find the emotional truth beneath the brief."],
  ["Atmosphere", "Shape tone, pace, light, and visual language."],
  ["System", "Build the rules that keep the world coherent."],
  ["Interface", "Translate the system into usable expression."],
  ["Expression", "Refine the details that make the work memorable."],
];

const outcomes: Array<{
  title: string;
  body: string;
  icon: OrbitalVariant;
  tone: "blue" | "violet" | "magenta";
}> = [
  {
    title: "Clearer identity",
    body: "A distinct visual and verbal centre that communicates purpose with confidence.",
    icon: "focusDial",
    tone: "blue",
  },
  {
    title: "Stronger digital atmosphere",
    body: "An immersive environment designed to create focus, emotional space, and deeper connection.",
    icon: "chorusCore",
    tone: "violet",
  },
  {
    title: "More coherent expression",
    body: "A unified system that can scale across touchpoints without losing its emotional character.",
    icon: "signalBridge",
    tone: "magenta",
  },
];

function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
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

function HeroArtifact() {
  return (
    <div className="ei-lumo-hero-artifact" aria-hidden="true">
      <div className="ei-lumo-hero-orbit" />
      <div className="ei-lumo-hero-mark">
        <span>Lumo</span>
        <i />
      </div>
      <div className="ei-lumo-hero-specimen">
        <span>Clarity</span>
        <strong>changes everything.</strong>
        <small>Identity / atmosphere / experience</small>
      </div>
    </div>
  );
}

function SnapshotSection() {
  return (
    <Reveal className="ei-lumo-snapshot">
      {snapshots.map((item) => (
        <motion.div key={item.label} variants={driftUp}>
          <EchoCard variant="index" padding="md" className="ei-lumo-snapshot-card">
            <IconWell size="md" tone={item.tone} orbital>
              <OrbitalVisual variant={item.icon} size={44} />
            </IconWell>
            <div>
              <span className="ei-lumo-card-label">{item.label}</span>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          </EchoCard>
        </motion.div>
      ))}
    </Reveal>
  );
}

function ChallengeSection() {
  return (
    <Reveal className="ei-lumo-editorial-split">
      <motion.div variants={driftUp}>
        <SectionLabel label="The challenge" index="02" />
        <h2 className="ei-lumo-section-title">The signal needed a clearer form.</h2>
      </motion.div>
      <motion.div variants={fadeSoft} className="ei-lumo-editorial-copy">
        <p>
          Lumo began not with a conventional brief, but with a feeling: something
          between overwhelm and the quiet wish for a different way to move through
          the day.
        </p>
        <p>
          The audience was not looking for more productivity. They were looking for
          permission to slow down, breathe, and move without the pressure of constant
          optimisation. Calm was not a visual preference. It was a product requirement.
        </p>
        <p className="ei-lumo-emphasis">
          The brand had to feel like a presence, not another tool making demands.
        </p>
      </motion.div>
    </Reveal>
  );
}

function AtmosphereSection() {
  return (
    <Reveal>
      <motion.div variants={driftUp} className="ei-lumo-section-heading">
        <SectionLabel label="Atmospheric direction" index="03" />
        <h2 className="ei-lumo-section-title">
          A visual language with room to think and breathe.
        </h2>
      </motion.div>

      <motion.div variants={blurEmergence}>
        <EchoCard variant="proof" padding="none" className="ei-lumo-atmosphere-board">
          <div className="ei-lumo-board-image">
            <picture>
              <source media="(max-width: 767px)" srcSet={lumoAtmosphereMobile} />
              <img
                src={lumoAtmosphere}
                alt="Lumo atmospheric direction in blue and violet light"
              />
            </picture>
            <span>A digital atmosphere shaped for clarity and emotional space.</span>
          </div>

          <div className="ei-lumo-board-specimens">
            <div className="ei-lumo-palette" aria-label="Lumo colour atmosphere">
              <span className="ei-lumo-swatch ei-lumo-swatch-moonlit" />
              <span className="ei-lumo-swatch ei-lumo-swatch-violet" />
              <span className="ei-lumo-swatch ei-lumo-swatch-blue" />
              <span className="ei-lumo-swatch ei-lumo-swatch-midnight" />
              <span className="ei-lumo-swatch ei-lumo-swatch-ink" />
            </div>
            <div className="ei-lumo-type-study">
              <span>Aa</span>
              <strong>Aa</strong>
              <small>Editorial warmth / structural clarity</small>
            </div>
            <ul className="ei-lumo-tone-words" aria-label="Lumo tone words">
              <li>Calm</li>
              <li>Intentional</li>
              <li>Luminous</li>
              <li>Human</li>
              <li>Timeless</li>
            </ul>
            <div className="ei-lumo-interface-fragment">
              <span>Focus creates flow.</span>
              <div><i /><i /><i /></div>
            </div>
          </div>
        </EchoCard>
      </motion.div>
    </Reveal>
  );
}

function SystemSection() {
  return (
    <Reveal className="ei-lumo-system-grid">
      <motion.div variants={driftUp} className="ei-lumo-system-copy">
        <SectionLabel label="The system created" index="04" />
        <h2 className="ei-lumo-section-title">Feeling translated into repeatable form.</h2>
        <p>
          The result was not a collection of isolated assets. It was a modular identity
          and interface system designed to remain calm, legible, and emotionally
          consistent across touchpoints.
        </p>
        <ul>
          <li>Scalable identity logic</li>
          <li>Atmospheric design tokens</li>
          <li>Content-led layouts</li>
          <li>Adaptive expression across devices</li>
        </ul>
      </motion.div>

      <motion.div variants={blurEmergence} className="ei-lumo-system-diagram">
        <div className="ei-lumo-system-core">
          <span>Lumo</span>
          <i />
        </div>
        <div className="ei-lumo-system-layers">
          {systemLayers.map((layer) => (
            <div key={layer.name} className="ei-lumo-system-layer">
              <span>{layer.name}</span>
              <p>{layer.detail}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Reveal>
  );
}

function ProofSection() {
  return (
    <Reveal>
      <motion.div variants={driftUp} className="ei-lumo-section-heading">
        <SectionLabel label="Visual proof" index="05" />
        <h2 className="ei-lumo-section-title">The world, held in a coherent visual field.</h2>
      </motion.div>

      <div className="ei-lumo-gallery">
        <motion.figure variants={blurEmergence} className="ei-lumo-gallery-primary">
          <img src={lumoStudy} alt="Lumo violet atmospheric identity study" />
          <figcaption>
            <span>Identity atmosphere</span>
            <p>Light, depth, and restraint establish a recognisable emotional centre.</p>
          </figcaption>
        </motion.figure>

        <motion.figure variants={fadeSoft} className="ei-lumo-gallery-secondary">
          <img src={lumoAtmosphere} alt="Lumo blue and violet digital atmosphere study" />
          <figcaption>
            <span>Digital environment</span>
            <p>A flexible field for editorial content, interface, and quiet interaction.</p>
          </figcaption>
        </motion.figure>

        <motion.div variants={fadeSoft} className="ei-lumo-gallery-study">
          <span className="ei-lumo-study-kicker">Expression study</span>
          <strong>Clarity is the beginning of alignment.</strong>
          <div className="ei-lumo-study-orbit" aria-hidden="true" />
          <small>Lumo / emotional architecture</small>
        </motion.div>
      </div>
    </Reveal>
  );
}

function ProcessSection() {
  return (
    <Reveal>
      <motion.div variants={driftUp} className="ei-lumo-section-heading">
        <SectionLabel label="Our process" index="06" />
      </motion.div>
      <motion.ol variants={staggerContainer(STAGGER.tight, 0.1)} className="ei-lumo-process">
        {process.map(([title, body], index) => (
          <motion.li key={title} variants={driftUp}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </motion.li>
        ))}
      </motion.ol>
    </Reveal>
  );
}

function ResultsSection() {
  return (
    <Reveal>
      <motion.div variants={driftUp} className="ei-lumo-section-heading">
        <SectionLabel label="What changed" index="07" />
        <h2 className="ei-lumo-section-title">
          Less noise. More recognition, atmosphere, and coherence.
        </h2>
      </motion.div>
      <div className="ei-lumo-results">
        {outcomes.map((item) => (
          <motion.div key={item.title} variants={driftUp}>
            <EchoCard variant="static" padding="lg" className="ei-lumo-result-card">
              <IconWell size="md" tone={item.tone} glow>
                <OrbitalVisual variant={item.icon} size={44} />
              </IconWell>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </EchoCard>
          </motion.div>
        ))}
      </div>
    </Reveal>
  );
}

function ReflectionSection() {
  return (
    <Reveal className="ei-lumo-reflection">
      <motion.blockquote variants={blurEmergence}>
        “Design is emotional architecture.”
      </motion.blockquote>
      <motion.p variants={fadeSoft}>
        Lumo was never only a design project. It was an act of care: a world shaped
        to help overwhelmed humans feel held rather than hurried.
      </motion.p>
    </Reveal>
  );
}

export function SignatureCaseStudy() {
  return (
    <CaseStudyLayout
      className="ei-lumo-case-study"
      hero={
        <EchoHero
          variant="caseStudy"
          eyebrow="Case study · Lumo"
          index="01"
          title={
            <>
              Lumo
              <span className="ei-lumo-hero-title-line">
                A world built for overwhelmed humans.
              </span>
            </>
          }
          description="A luminous identity and digital experience shaped around clarity, atmosphere, and emotional safety."
          kicker={
            <dl className="ei-lumo-hero-meta">
              <div>
                <dt>Project</dt>
                <dd>Lumo</dd>
              </div>
              <div>
                <dt>Scope</dt>
                <dd>Identity + digital experience</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>Creative direction + design</dd>
              </div>
              <div>
                <dt>Deliverables</dt>
                <dd>Identity, atmosphere, interface system</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>Exploratory concept phase</dd>
              </div>
            </dl>
          }
          actions={
            <Button to="#lumo-snapshot" variant="tertiary">
              Explore the case study <span aria-hidden="true">↓</span>
            </Button>
          }
          media={<HeroArtifact />}
          backgroundImage={lumoAtmosphere}
          mobileBackgroundImage={lumoAtmosphereMobile}
          imageAlt=""
          headingId="lumo-hero-heading"
          className="ei-lumo-hero"
          contentClassName="ei-lumo-hero-content"
        />
      }
      outcome={
        <div id="lumo-snapshot">
          <SnapshotSection />
        </div>
      }
      context={<ChallengeSection />}
      signal={<AtmosphereSection />}
      system={<SystemSection />}
      proof={<ProofSection />}
      process={<ProcessSection />}
      results={<ResultsSection />}
      reflection={<ReflectionSection />}
      nextStep={
        <CTASection
          variant="editorialInvitation"
          eyebrow="Continue the journey"
          heading="Explore more work shaped by atmosphere."
          body="See how Echo in Ink turns emotional truth into identity, systems, and digital experience."
          actions={
            <>
              <Button to="/works" variant="primary">View all works</Button>
              <Button to="/contact" variant="secondary">Start a project conversation</Button>
            </>
          }
          className="ei-lumo-cta"
          headingId="lumo-cta-heading"
        />
      }
    />
  );
}
