import { Helmet } from 'react-helmet-async';
import { SignatureCaseStudy } from '@/components/SignatureCaseStudy';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/Button';
import { PageCTA } from '@/components/PageCTA';

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

      <PageCTA page="worlds" />
    </div>
  );
}
