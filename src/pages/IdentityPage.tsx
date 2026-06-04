import { Helmet } from "react-helmet-async";
import { PageShell } from "@/components/layout/PageShell";
import { EditorialImageHero } from "@/components/sections/EditorialImageHero";
import identityHeroAtmosphere from "@/assets/imagery/hero/identity-hero-atmosphere.png";
import { OfferSection } from "@/components/sections/OfferSection";
import { DeliverableCard } from "@/components/cards/DeliverableCard";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { UseCasesList } from "@/components/sections/UseCasesList";
import { OfferClosingCTA } from "@/components/sections/OfferClosingCTA";
import {
  identityAudience,
  identityClosing,
  identityDeliverables,
  identityHero,
  identityPricing,
  identityProcess,
  identityTransformation,
  identityUseCases
} from "@/data/identityContent";

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

      <EditorialImageHero
        variant="intimate"
        eyebrow="Identity"
        title={identityHero.titleLines.join("\n")}
        italicWord="Identity"
        description={identityHero.body.join("\n")}
        ctaLabel="Start a Conversation →"
        ctaHref="/contact"
        image={identityHeroAtmosphere}
        mobileImage={identityHeroAtmosphere}
        imageAlt="Cinematic nebula visual representing Echo In Ink selected works"
        align="left"
      />

      <OfferSection eyebrow="Who it is for" title={identityAudience.eyebrow}>
        <div className="max-w-3xl space-y-5">
          {identityAudience.intro.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="ei-type-body-large text-[var(--ei-text-secondary)]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </OfferSection>

      <OfferSection eyebrow="Use cases">
        <UseCasesList items={identityUseCases} />
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
        <ProcessSteps steps={identityProcess.steps} closing={identityProcess.closing} />
      </OfferSection>

      <OfferSection title={identityTransformation.heading} spacing="pause" centered>
        <p className="mx-auto max-w-[28ch] ei-atmosphere-text text-[var(--ei-text-secondary)]">
          {identityTransformation.divider}
        </p>
      </OfferSection>

      <OfferSection eyebrow="Investment" description={identityPricing.intro}>
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
