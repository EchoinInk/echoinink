import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PageShell } from '@/components/layout/PageShell';
import { OfferHero } from '@/components/sections/OfferHero';
import { OfferSection } from '@/components/sections/OfferSection';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection';
import { PricingTiers } from '@/components/sections/PricingTiers';
import { UseCasesList } from '@/components/sections/UseCasesList';
import { OfferClosingCTA } from '@/components/sections/OfferClosingCTA';
import {
  worldsClosing,
  worldsContrast,
  worldsDeliverables,
  worldsHero,
  worldsIntro,
  worldsLayers,
  worldsPricing,
  worldsProcess,
  worldsProof,
  worldsTransformation,
  worldsUseCases,
} from '@/data/worldsContent';

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

      <OfferHero
        eyebrow={worldsHero.eyebrow}
        title={worldsHero.title}
        body={[worldsHero.description]}
        primaryCta={worldsHero.primaryCta}
        secondaryCta={worldsHero.secondaryCta}
      />

      <OfferSection spacing="intimate">
        <p className="max-w-3xl ei-atmosphere-text text-[var(--ei-text-secondary)]">
          {worldsIntro.atmosphere}
        </p>
      </OfferSection>

      <OfferSection title={worldsIntro.heading} description={worldsIntro.body}>
        <UseCasesList items={worldsUseCases} />
      </OfferSection>

      <OfferSection title={worldsContrast.heading} description={worldsContrast.intro}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="ei-card ei-card-soft p-6 md:p-8">
            <span className="ei-type-label text-[var(--ei-text-tertiary)]">Not this</span>
            <ul className="mt-6 space-y-3">
              {worldsContrast.notThis.map((item) => (
                <li key={item} className="ei-type-body text-[var(--ei-text-secondary)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="ei-card ei-card-soft p-6 md:p-8">
            <span className="ei-type-label text-[var(--ei-text-tertiary)]">This</span>
            <ul className="mt-6 space-y-3">
              {worldsContrast.thisIs.map((item) => (
                <li key={item} className="ei-type-body text-[var(--ei-text-secondary)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </OfferSection>

      <OfferSection id="layers" title={worldsLayers.heading}>
        <ProcessSteps steps={worldsLayers.items} />
      </OfferSection>

      <OfferSection title={worldsDeliverables.heading} description={worldsDeliverables.intro}>
        <UseCasesList items={worldsDeliverables.items} />
        <p className="mt-8 max-w-3xl ei-type-body text-[var(--ei-text-tertiary)]">
          {worldsDeliverables.note}
        </p>
      </OfferSection>

      <OfferSection title={worldsTransformation.heading}>
        <BeforeAfterSection
          divider={worldsTransformation.divider}
          before={worldsTransformation.before}
          after={worldsTransformation.after}
        />
      </OfferSection>

      <OfferSection title={worldsProcess.heading}>
        <ProcessSteps steps={worldsProcess.steps} />
      </OfferSection>

      <OfferSection title={worldsProof.heading}>
        <article className="ei-card ei-card-soft max-w-3xl p-6 md:p-8">
          <h3 className="ei-type-section text-[var(--ei-text-primary)]">{worldsProof.title}</h3>
          <p className="mt-4 ei-type-body-large text-[var(--ei-text-secondary)]">
            {worldsProof.description}
          </p>
          <Link to={worldsProof.cta.href} className="ei-link mt-8 inline-block">
            {worldsProof.cta.label} →
          </Link>
        </article>
      </OfferSection>

      <OfferSection title={worldsPricing.heading}>
        <div className="max-w-3xl space-y-4">
          {worldsPricing.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="ei-type-body-large text-[var(--ei-text-secondary)]">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-10">
          <PricingTiers tiers={worldsPricing.tiers} />
        </div>
      </OfferSection>

      <OfferClosingCTA
        atmosphere={worldsClosing.atmosphere}
        heading={worldsClosing.heading}
        cta={worldsClosing.cta}
      />
    </PageShell>
  );
}
