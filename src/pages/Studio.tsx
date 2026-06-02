import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import { PageShell } from '@/components/system';
import { Container } from '@/components/layout/Container';
import { EditorialHero } from '@/components/hero/EditorialHero';
import { NumberedSectionLabel } from '@/components/editorial/NumberedSectionLabel';
import { QuoteCard } from '@/components/studio/QuoteCard';
import { PhilosophyCard } from '@/components/studio/PhilosophyCard';
import { ValuesGrid } from '@/components/studio/ValuesGrid';
import { ProjectCTA } from '@/components/works/ProjectCTA';

import studioHeroDesktop from '@/assets/imagery/hero/studio-hero.png';
import studioHeroMobile from '@/assets/imagery/hero/studio-hero-mobile.png';
import studioCTABg from '@/assets/imagery/sections/studio-ct-bg.png';

import {
  originCopy,
  philosophyItems,
  studioQuoteLines,
} from '@/data/studioContent';

import {
  driftUp,
  fadeSoft,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from '@/lib/motion-cinematic';

export function Studio() {
  return (
    <PageShell atmosphere="studio" withTopSpacing={false}>
      <Helmet>
        <title>Studio | Echo In Ink</title>
        <meta
          name="description"
          content="The philosophy, principles, and creative direction behind Echo In Ink."
        />
      </Helmet>

      <EditorialHero
        variant="studio"
        eyebrow="Studio"
        title="The philosophy behind the worlds."
        italicWord="worlds."
        description="Translating inner worlds into coherent external form."
        image={studioHeroDesktop}
        mobileImage={studioHeroMobile}
        imageAlt="Cinematic cosmic void surrounded by violet and blue nebula energy"
      />

      {/* ORIGIN */}
      <Container size="xl" className="relative z-10">
        <motion.section
          variants={staggerContainer(STAGGER.loose, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          aria-labelledby="origin-heading"
          className="
            mx-auto grid max-w-[1180px] items-center gap-12
            py-12 md:py-16
            lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.78fr)]
            lg:gap-16
          "
        >
        <div className="grid grid-cols-[40px_160px_minmax(0,1fr)] gap-x-4 md:grid-cols-[48px_190px_minmax(0,1fr)] md:gap-x-6">
  <motion.span
    variants={driftUp}
    className="pt-1 font-structural text-[11px] uppercase tracking-[0.2em]"
    style={{ color: 'var(--ei-text-tertiary)' }}
  >
    {originCopy.number}
  </motion.span>

  <motion.div variants={driftUp} className="pt-1">
    <NumberedSectionLabel number="" label={originCopy.label} />
  </motion.div>

  <div className="pt-10 md:pt-14">
    <motion.h2
      id="origin-heading"
      variants={driftUp}
      className="
        max-w-[24ch] whitespace-pre-line
        font-editorial text-[clamp(2rem,3.4vw,3rem)]
        leading-[1.16] tracking-tight
      "
      style={{ color: 'var(--ei-text-primary)' }}
    >
      {originCopy.heading}
    </motion.h2>

    <motion.div variants={fadeSoft} className="mt-8 space-y-5">
      {originCopy.paragraphs.map((paragraph) => (
        <p
          key={paragraph.slice(0, 32)}
          className="
            max-w-[46ch] font-structural text-[15px]
            leading-[1.78] md:text-[16px]
          "
          style={{ color: 'var(--ei-text-secondary)' }}
        >
          {paragraph}
        </p>
      ))}
    </motion.div>
  </div>
</div>

          <QuoteCard lines={studioQuoteLines} />
        </motion.section>
      </Container>

      {/* PHILOSOPHY */}
      <Container size="xl" className="relative z-10">
        <motion.section
          variants={fadeSoft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          aria-labelledby="philosophy-heading"
          className="mx-auto max-w-[1180px] py-12 md:py-16"
        >
         <div className="grid grid-cols-[40px_160px_minmax(0,1fr)] gap-x-4 md:grid-cols-[48px_190px_minmax(0,1fr)] md:gap-x-6">
  <motion.span
    variants={driftUp}
    className="pt-1 font-structural text-[11px] uppercase tracking-[0.2em]"
    style={{ color: 'var(--ei-text-tertiary)' }}
  >
    02
  </motion.span>

  <motion.div variants={driftUp} className="pt-1">
    <NumberedSectionLabel number="" label="Philosophy" />
  </motion.div>

  <div className="pt-10 md:pt-14">
    <motion.div variants={driftUp}>
      <h2
        id="philosophy-heading"
        className="ei-section-title mb-5 whitespace-pre-line"
        style={{ color: 'var(--ei-text-primary)' }}
      >
        Three beliefs shape the work.
      </h2>

      <p
        className="max-w-[38ch] font-structural text-[14px] leading-[1.75] md:text-[15px]"
        style={{ color: 'var(--ei-text-secondary)' }}
      >
        A studio philosophy built around clarity, emotional truth, and
        meaningful expression.
      </p>
    </motion.div>

    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
      {philosophyItems.map((item, index) => (
        <PhilosophyCard
          key={item.title}
          {...item}
          index={index}
          variant="philosophy"
        />
      ))}
    </div>
  </div>
</div>
        </motion.section>
      </Container>

      {/* VALUES */}
      <Container size="xl" className="relative z-10">
        <motion.section
          variants={fadeSoft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          aria-labelledby="values-heading"
          className="mx-auto max-w-[1180px] py-12 md:py-16"
        >
          <div className="grid grid-cols-[40px_160px_minmax(0,1fr)] gap-x-4 md:grid-cols-[48px_190px_minmax(0,1fr)] md:gap-x-6">
  <motion.span
    variants={driftUp}
    className="pt-1 font-structural text-[11px] uppercase tracking-[0.2em]"
    style={{ color: 'var(--ei-text-tertiary)' }}
  >
    03
  </motion.span>

  <motion.div variants={driftUp} className="pt-1">
    <NumberedSectionLabel number="" label="Values" />
  </motion.div>

  <div className="pt-10 md:pt-14">
    <motion.div variants={driftUp}>
      <h2
        id="values-heading"
        className="ei-section-title mb-5 whitespace-pre-line"
        style={{ color: 'var(--ei-text-primary)' }}
      >
        The principles that keep the work clear.
      </h2>
    </motion.div>

    <div className="mt-12">
      <ValuesGrid showHeader={false} />
    </div>
  </div>
</div>
        </motion.section>
      </Container>

      {/* CTA */}
      <Container size="xl" className="relative z-10">
        <div className="mx-auto max-w-[1180px] py-12 md:py-16">
          <ProjectCTA
            eyebrow="Continue the conversation"
            heading="Aligned in philosophy?"
            body="If our approach resonates, let's explore how we can build something meaningful together."
            buttonLabel="Work with the Studio"
            buttonHref="/contact"
            backgroundImage={studioCTABg}
            secondaryLinks={[
              {
                label: 'Book a Session',
                href: '/sessions',
              },
              {
                label: 'Explore the Works',
                href: '/works',
              },
            ]}
          />
        </div>
      </Container>
    </PageShell>
  );
}