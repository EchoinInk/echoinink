import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EASE_CINEMATIC as EASE, DURATION, VIEWPORT, STAGGER } from '@/lib/motion-cinematic';
import { Layout } from "@/components/Layout";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/Button";

export default function Works() {
  return (
    <Layout>
      <Helmet>
        <title>Works — Echo in Ink</title>
      </Helmet>

      {/* Header */}
      <Section>
        <Container>
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
            Works
          </h1>
          <p className="mt-4 text-lg text-muted">
            Selected expressions of translation.
          </p>
          <p className="mt-1 text-sm text-muted/70">
            Where inner worlds become visible form.
          </p>
        </Container>
      </Section>

      {/* Orientation */}
      <Section>
        <Container>
          <h2 className="section-heading">Orientation</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p>
              These are not portfolio pieces in the traditional sense. They are
              translated states of coherence — moments where emotional truth,
              identity, and system alignment were brought into form.
            </p>
            <p>
              Each work is a study in what happens when clarity is treated as
              structure.
            </p>
          </div>
        </Container>
      </Section>

      {/* Featured Work */}
      <Section>
        <Container>
          <h2 className="section-heading">Signature Work</h2>

          <div className="space-y-4">
            <h3 className="font-serif text-2xl">LUMO</h3>
            <p className="text-muted">
              A world built for overwhelmed humans.
            </p>
            <p className="prose prose-invert max-w-none">
              An emotionally intelligent identity system designed to reduce
              cognitive noise through atmosphere, rhythm, and restraint. Built
              from feeling first — not features.
            </p>

            <div className="flex flex-col space-y-2">
              <a href="/works/lumo" className="hover:text-white transition-colors">
                View Case Study →
              </a>
              <a href="/works/lumo#system" className="hover:text-white transition-colors">
                See the system in motion →
              </a>
            </div>

            <p className="text-sm text-muted/70 mt-4">
              This project defines the foundation of Echo in Ink's approach to
              worldbuilding systems.
            </p>
          </div>
        </Container>
      </Section>

      {/* Selected Works */}
      <Section>
        <Container>
          <h2 className="section-heading">Selected Works</h2>

          <div className="space-y-10">
            {/* Aurum */}
            <div>
              <h3 className="font-serif text-xl">AURUM</h3>
              <p className="text-muted">Identity translation for a founder-led studio</p>
              <p className="text-sm text-muted/70">Identity</p>
              <a href="/works/aurum" className="hover:text-white transition-colors">
                View Case Study →
              </a>
            </div>

            {/* North Field */}
            <div>
              <h3 className="font-serif text-xl">NORTH FIELD</h3>
              <p className="text-muted">
                Atmospheric identity system for a creative direction practice
              </p>
              <p className="text-sm text-muted/70">Identity / Systems</p>
              <a href="/works/north-field" className="hover:text-white transition-colors">
                View Case Study →
              </a>
            </div>

            {/* Still Form */}
            <div>
              <h3 className="font-serif text-xl">STILL FORM</h3>
              <p className="text-muted">
                Narrative identity system exploring restraint and clarity
              </p>
              <p className="text-sm text-muted/70">Identity</p>
              <a href="/works/still-form" className="hover:text-white transition-colors">
                View Case Study →
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Case Study Format System */}
      <Section>
        <Container>
          <h2 className="section-heading">Case Study Structure</h2>
          <ol className="prose prose-invert max-w-none space-y-4">
            <li><strong>Context</strong> — What existed before translation.</li>
            <li><strong>Tension</strong> — What was unclear, fragmented, or misaligned.</li>
            <li><strong>Signal</strong> — What emerged as the core emotional truth.</li>
            <li><strong>System</strong> — How that truth was translated into identity, atmosphere, or structure.</li>
            <li><strong>Outcome</strong> — What coherence looked like after implementation.</li>
          </ol>
        </Container>
      </Section>

      {/* Lumo Expansion */}
      <Section>
        <Container>
          <h2 className="section-heading">LUMO</h2>
          <p className="prose prose-invert max-w-none">
            LUMO is the foundational case study of Echo in Ink's systems
            philosophy. It represents the shift from identity design to living
            expressive systems.
          </p>
          <a href="/works/lumo" className="hover:text-white transition-colors mt-4 block">
            Explore Lumo →
          </a>
        </Container>
      </Section>

      {/* Principle of Work */}
      <Section>
        <Container>
          <h2 className="section-heading">Principle of Work</h2>
          <div className="prose prose-invert max-w-none space-y-4">
            <p>Every work exists for one reason:</p>
            <p><strong>To preserve emotional truth in form.</strong></p>
            <p>
              Nothing is added for decoration. <br />
              Nothing is included without function. <br />
              Everything exists to maintain coherence under expression.
            </p>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section>
        <Container>
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight">
            Work With the Studio
          </h2>
          <p className="text-muted mt-2">Selected clarity, made visible.</p>
          <Button to="/contact">
            Begin a Collaboration
          </Button>
        </Container>
      </Section>
    </Layout>
  );
}
