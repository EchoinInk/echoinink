import { Helmet } from 'react-helmet-async';
import { PageShell } from '@/components/layout/PageShell';
import { OfferHero } from '@/components/sections/OfferHero';
import { OfferSection } from '@/components/sections/OfferSection';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection';
import { PricingTiers } from '@/components/sections/PricingTiers';
import { UseCasesList } from '@/components/sections/UseCasesList';
import { OfferClosingCTA } from '@/components/sections/OfferClosingCTA';
import { VIEWPORT } from '@/lib/motion-cinematic';
import { motion } from 'framer-motion';
import {
  sessionsApproach,
  sessionsAudience,
  sessionsBring,
  sessionsClosing,
  sessionsHero,
  sessionsOrientation,
  sessionsOutcomes,
  sessionsPricing,
  sessionsTransformation,
  sessionsTypes,
  sessionsUseCases,
} from '@/data/sessionsContent';

function SessionTypeCard({
  number,
  title,
  description,
  bestFor,
  index,
}: {
  number: string;
  title: string;
  description: string;
  bestFor: string;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT.normal}
      transition={{ delay: index * 0.06 }}
      className="ei-card ei-card-soft p-6 md:p-8"
    >
      <span className="ei-type-label text-[var(--ei-text-tertiary)]">{number}</span>
      <h3 className="mt-4 ei-type-section text-[1.15rem] text-[var(--ei-text-primary)]">{title}</h3>
      <p className="mt-3 ei-type-body text-[var(--ei-text-secondary)]">{description}</p>
      {bestFor ? (
        <p className="mt-5 ei-type-small text-[var(--ei-text-tertiary)]">Best for: {bestFor}</p>
      ) : null}
    </motion.article>
  );
}

export default function SessionsPage() {
  return (
    <PageShell atmosphere="sessions" withTopSpacing={false}>
      <Helmet>
        <title>Echo Sessions — Echo in Ink</title>
        <meta
          name="description"
          content="One-to-one creative direction sessions for founders, artists, writers, and makers — clarity, naming, identity, and worldbuilding."
        />
      </Helmet>

      <OfferHero
        eyebrow={sessionsHero.eyebrow}
        subtitle={sessionsHero.subtitle}
        title={sessionsHero.title}
        tagline={sessionsHero.tagline}
        body={sessionsHero.body}
        primaryCta={sessionsHero.primaryCta}
        secondaryCta={sessionsHero.secondaryCta}
      />

      <OfferSection title={sessionsOrientation.heading}>
        <div className="max-w-3xl space-y-5">
          {sessionsOrientation.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="ei-type-body-large text-[var(--ei-text-secondary)]">
              {paragraph}
            </p>
          ))}
        </div>
      </OfferSection>

      <OfferSection eyebrow="Use cases">
        <UseCasesList items={sessionsUseCases} />
      </OfferSection>

      <OfferSection title={sessionsApproach.heading}>
        <div className="grid gap-5 md:grid-cols-3">
          {sessionsApproach.pillars.map((pillar, index) => (
            <SessionTypeCard
              key={pillar.title}
              number={`0${index + 1}`}
              title={pillar.title}
              description={pillar.description}
              bestFor=""
              index={index}
            />
          ))}
        </div>
      </OfferSection>

      <OfferSection title={sessionsBring.heading} description={sessionsBring.intro}>
        <UseCasesList items={sessionsBring.items} />
      </OfferSection>

      <OfferSection id="session-types" eyebrow="Session types">
        <div className="grid gap-5 lg:grid-cols-3">
          {sessionsTypes.map((session, index) => (
            <SessionTypeCard key={session.title} {...session} index={index} />
          ))}
        </div>
      </OfferSection>

      <OfferSection title={sessionsOutcomes.heading} description={sessionsOutcomes.intro}>
        <UseCasesList items={sessionsOutcomes.items} />
        <div className="mt-10 max-w-2xl ei-card ei-card-soft p-6 md:p-8">
          <span className="ei-type-label text-[var(--ei-text-tertiary)]">Optional add-on</span>
          <h3 className="mt-3 ei-type-section text-[1.1rem] text-[var(--ei-text-primary)]">
            {sessionsOutcomes.addon.title}
          </h3>
          <p className="mt-3 ei-type-body text-[var(--ei-text-secondary)]">
            {sessionsOutcomes.addon.description}
          </p>
        </div>
      </OfferSection>

      <OfferSection title={sessionsTransformation.heading}>
        <BeforeAfterSection
          divider={sessionsTransformation.divider}
          before={sessionsTransformation.before}
          after={sessionsTransformation.after}
        />
      </OfferSection>

      <OfferSection title={sessionsPricing.heading}>
        <div className="max-w-3xl space-y-4">
          {sessionsPricing.intro.map((paragraph) => (
            <p key={paragraph} className="ei-type-body-large text-[var(--ei-text-secondary)]">
              {paragraph}
            </p>
          ))}
          <p className="ei-type-label text-[var(--ei-text-tertiary)]">{sessionsPricing.note}</p>
        </div>
        <div className="mt-10">
          <PricingTiers tiers={sessionsPricing.tiers} />
        </div>
      </OfferSection>

      <OfferSection spacing="intimate">
        <p className="max-w-3xl ei-type-body-large text-[var(--ei-text-secondary)]">{sessionsAudience}</p>
      </OfferSection>

      <OfferClosingCTA
        heading={sessionsClosing.heading}
        subline={sessionsClosing.subline}
        cta={sessionsClosing.cta}
      />
    </PageShell>
  );
}
