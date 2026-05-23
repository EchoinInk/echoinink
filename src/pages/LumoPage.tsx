import { Helmet } from 'react-helmet-async';
import { SignatureCaseStudy } from '@/components/SignatureCaseStudy';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/Button';

export function LumoPage() {
  return (
    <div className="relative">
      <Helmet>
        <title>Lumo — Echo in Ink</title>
        <meta name="description" content="A signature case study exploring atmospheric identity, narrative design, and cinematic digital experience." />
      </Helmet>
      <SignatureCaseStudy />

      {/* Process Breakdown */}
      <Section>
        <Container>
          <h2 className="section-heading">The Process</h2>
          <div className="prose prose-invert max-w-none space-y-2">
            <p>Emotional discovery</p>
            <p>Narrative mapping</p>
            <p>System architecture</p>
            <p>Visual atmosphere</p>
            <p>Interaction language</p>
            <p>Integration & refinement</p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="space-y-4">
            <h3 className="font-serif text-2xl md:text-3xl tracking-tight">
              Ready to build a world shaped by feeling?
            </h3>
            <Button to="/contact">
              Begin a Collaboration
            </Button>
          </div>
        </Container>
      </Section>

      {/* Routing */}
      <Section>
        <Container>
          <div className="flex flex-col space-y-2 text-muted">
            <a href="/identity" className="hover:text-white transition-colors">
              Explore Identity →
            </a>
            <a href="/sessions" className="hover:text-white transition-colors">
              Book a Session →
            </a>
            <a href="/works" className="hover:text-white transition-colors">
              Return to Works →
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
}
