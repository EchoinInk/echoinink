import { Helmet } from 'react-helmet-async';
import { SignatureCaseStudy } from '@/components/SignatureCaseStudy';

export function LumoPage() {
  return (
    <div className="relative">
      <Helmet>
        <title>Lumo — Echo in Ink</title>
        <meta name="description" content="A signature case study exploring atmospheric identity, narrative design, and cinematic digital experience." />
      </Helmet>
      <SignatureCaseStudy />
    </div>
  );
}
