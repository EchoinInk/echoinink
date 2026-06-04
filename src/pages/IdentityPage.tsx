import { Helmet } from 'react-helmet-async';
import { PageShell } from '@/components/layout/PageShell';
import { OfferHero } from '@/components/sections/OfferHero';
import { OfferSection } from '@/components/sections/OfferSection';
import { IdentityHeroVisual } from '@/components/sections/IdentityHeroVisual';
import { DeliverableCard } from '@/components/cards/DeliverableCard';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { PricingTiers } from '@/components/sections/PricingTiers';
import { UseCasesList } from '@/components/sections/UseCasesList';
import { OfferClosingCTA } from '@/components/sections/OfferClosingCTA';
import { SectionHeading } from '@/components/ui/PageSectionHeading';
import {
  identityAudience,
  identityClosing,
  identityDeliverables,
  identityHero,
  identityPricing,
  identityProcess,
  identityTransformation,
  identityUseCases,
} from '@/data/identityContent';

export default function Identity() {
  return (
    <PageShell atmosphere="identity" withTopSpacing={false}>
      <Helmet>
        <title>Atmospheric Identity Direction — Echo in Ink</title>
        <meta
          name="description"
          content="Atmospheric Identity Kits translate the emotional shape of your work into clear creative direction — palette, typography, mood, tone, and visual notes."
        />
      </Helmet>

      <OfferHero
        atmosphereLine={identityHero.atmosphereLine}
        eyebrow={identityHero.eyebrow}
        title={identityHero.titleLines[0]}
        titleLines={identityHero.titleLines}
        body={identityHero.body}
        primaryCta={identityHero.primaryCta}
        secondaryCta={identityHero.secondaryCta}
        media={<IdentityHeroVisual />}
      />

      <OfferSection spacing="intimate">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="max-w-xl">
            <SectionHeading eyebrow="Who it is for" title={identityAudience.eyebrow} />
            <div className="mt-8 space-y-5">
              {identityAudience.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="ei-type-body-large text-[var(--ei-text-secondary)]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Use cases" />
            <div className="mt-4">
              <UseCasesList items={identityUseCases} variant="marked" />
            </div>
          </div>
        </div>
      </OfferSection>

      <OfferSection title={identityDeliverables.heading}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {identityDeliverables.items.map((item, index) => (
            <DeliverableCard key={item.title} {...item} index={index} />
          ))}
        </div>
        <p className="mt-10 max-w-3xl ei-type-body-large text-[var(--ei-text-secondary)]">
          {identityDeliverables.closing}
        </p>
      </OfferSection>

      <OfferSection id="process" title={identityProcess.heading}>
        <ProcessSteps steps={identityProcess.steps} closing={identityProcess.closing} layout="horizontal" />
      </OfferSection>

      <OfferSection title={identityTransformation.heading} spacing="intimate" centered>
        <p className="mx-auto max-w-[28ch] ei-atmosphere-text text-[var(--ei-text-secondary)]">
          {identityTransformation.divider}
        </p>
      </OfferSection>

      <OfferSection
        eyebrow="Investment"
        description={identityPricing.intro}
      >
        <PricingTiers tiers={identityPricing.tiers} />
        <p className="mt-8 max-w-3xl ei-type-body-large text-[var(--ei-text-secondary)]">
          {identityPricing.anchor}
        </p>
      </OfferSection>

      <OfferClosingCTA
        heading={identityClosing.heading}
        subline={identityClosing.subline}
        cta={identityClosing.cta}
      />
    </PageShell>
  );
}
