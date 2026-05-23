import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EASE, DURATION, VIEWPORT, STAGGER } from '@/lib/motion';
import { Layout } from "@/components/Layout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { PageCTA } from '@/components/PageCTA';

export default function Studio() {
  return (
    <Layout>
      <Helmet>
        <title>Studio — Echo in Ink</title>
      </Helmet>
      {/* Header */}
      <Section>
        <Container>
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
            Studio
          </h1>
          <p className="mt-4 text-lg text-muted">
            The philosophy behind the world.
          </p>
        </Container>
      </Section>

      {/* Origin */}
      <Section>
        <Container>
          <h2 className="section-heading">Origin</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p>Echo in Ink began quietly.</p>
            <p>
              Not as a business plan. <br />
              Not as a brand system. <br />
              Not as a strategy for visibility.
            </p>
            <p>It began as a response to dissonance.</p>
            <p>
              A fatigue with work that looked polished but felt hollow. <br />
              With brands performing coherence instead of embodying it. <br />
              With design reduced to aesthetics instead of emotional structure. <br />
              With expression flattened into templates that erased nuance.
            </p>
            <p>Something essential was being lost in translation.</p>
            <p>Not visually — emotionally.</p>
            <p>
              Echo in Ink formed as a counter‑space to that loss. A place where
              identity could be approached with care. Where atmosphere carried
              meaning. Where clarity did not require self‑erasure.
            </p>
            <p>
              Before it had language, it was simply a need for coherence. It
              became the home I needed before I knew how to name it.
            </p>
            <p>So I built it for others too.</p>
          </div>
        </Container>
      </Section>

      {/* Philosophy */}
      <Section>
        <Container>
          <h2 className="section-heading">Philosophy</h2>
          <div className="prose prose-invert max-w-none space-y-10">
            <div>
              <h3 className="font-serif text-xl">Emotional Truth is the Real Strategy</h3>
              <p>
                If the emotional centre is unclear, everything built around it
                will eventually fracture.
              </p>
              <p>
                Positioning without emotional truth becomes performance. <br />
                Aesthetics without meaning become disposable. <br />
                Visibility without coherence becomes noise.
              </p>
              <p>The work begins by finding what is actually true beneath expression.</p>
            </div>

            <div>
              <h3 className="font-serif text-xl">Identity is Relational, Not Decorative</h3>
              <p>Identity is not a system of assets. It is the experience of being understood.</p>
              <p>
                It exists in the relationship between inner world and outer form,
                intention and perception, feeling and expression.
              </p>
              <p>
                The work is not to invent identity — but to translate what already
                exists with enough fidelity that it survives contact with the world.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl">Atmosphere is Information</h3>
              <p>Nothing is neutral.</p>
              <p>
                Spacing carries meaning. <br />
                Rhythm carries meaning. <br />
                Motion carries meaning. <br />
                Silence carries meaning.
              </p>
              <p>Atmosphere is not applied to meaning — it is how meaning is felt.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Approach */}
      <Section>
        <Container>
          <h2 className="section-heading">Approach</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p>The studio works through translation rather than construction.</p>
            <p>
              Every project begins with what is already present — but not yet
              articulated.
            </p>
            <p>
              We listen for signal beneath noise. <br />
              We identify emotional structure beneath expression. <br />
              We translate internal coherence into external form. <br />
              We refine until only essential truth remains.
            </p>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container>
          <h2 className="section-heading">Process</h2>
          <ol className="prose prose-invert max-w-none space-y-4">
            <li>
              <strong>Listening</strong> — Understanding the emotional and narrative
              landscape beneath the surface.
            </li>
            <li>
              <strong>Signal Mapping</strong> — Identifying tensions, clarity points,
              and unresolved structure.
            </li>
            <li>
              <strong>Translation</strong> — Converting internal logic into language,
              atmosphere, and system.
            </li>
            <li>
              <strong>Construction</strong> — Building coherent expression across
              identity, interaction, and form.
            </li>
            <li>
              <strong>Refinement</strong> — Removing distortion until only essential
              signal remains.
            </li>
          </ol>
        </Container>
      </Section>

      {/* Values */}
      <Section>
        <Container>
          <h2 className="section-heading">Values</h2>
          <ul className="prose prose-invert max-w-none space-y-2">
            <li>Depth over speed</li>
            <li>Coherence over volume</li>
            <li>Meaning over performance</li>
            <li>Restraint over excess</li>
            <li>Truth over optimisation</li>
            <li>Atmosphere over decoration</li>
            <li>Precision over noise</li>
          </ul>
        </Container>
      </Section>

      {/* Studio Principles */}
      <Section>
        <Container>
          <h2 className="section-heading">Studio Principles</h2>
          <div className="prose prose-invert max-w-none space-y-10">
            <p>
              Everything is intentional. <br />
              Nothing is decorative. <br />
              If it does not carry meaning, it does not remain.
            </p>
            <p>
              Clarity is not simplification. <br />
              It is the removal of distortion.
            </p>
            <p>Emotion is structural, not aesthetic.</p>
            <p>Identity is something you recognize, not something you invent.</p>
            <p>Coherence is a form of care.</p>
          </div>
        </Container>
      </Section>

      {/* Emotional Signature */}
      <Section>
        <Container>
          <h2 className="section-heading">Emotional Signature</h2>
          <div className="prose prose-invert max-w-none space-y-4">
            <p>Encountering Echo in Ink should feel like:</p>
            <ul className="space-y-2">
              <li>entering a quieter internal space</li>
              <li>being understood before explaining yourself</li>
              <li>emotional friction dissolving</li>
              <li>clarity arriving without force</li>
              <li>depth without heaviness</li>
              <li>precision without coldness</li>
              <li>recognition without exposure</li>
            </ul>
            <p>Nothing should feel extracted. Only clarified.</p>
          </div>
        </Container>
      </Section>

      {/* Core Definition */}
      <Section>
        <Container>
          <h2 className="section-heading">Core Definition</h2>
          <p className="prose prose-invert max-w-none">
            Echo in Ink is a studio that translates inner worlds into identities
            that survive contact with the world.
          </p>
        </Container>
      </Section>

      {/* Final Principle */}
      <Section>
        <Container>
          <h2 className="section-heading">Final Principle</h2>
          <p className="prose prose-invert max-w-none">
            Echo in Ink does not create identity. It protects what is already
            true from being lost during expression.
          </p>
        </Container>
      </Section>

      <PageCTA page="studio" />
    </Layout>

  );
}
