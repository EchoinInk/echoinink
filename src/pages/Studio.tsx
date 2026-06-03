import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import { PageShell } from '@/components/system';
import { Container } from '@/components/layout/Container';
import { EditorialHero } from '@/components/hero/EditorialHero';
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

function StudioSectionRail({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <motion.div
      variants={driftUp}
      className="
        pointer-events-none absolute top-12 z-10 hidden items-center gap-5
        md:top-16 md:flex
      "
      style={{
        left: 'max(2rem, calc((100vw - 1180px) / 2 - 7.5rem))',
      }}
    >
      <span
        className="font-structural text-[11px] uppercase tracking-[0.22em]"
        style={{ color: 'var(--ei-text-tertiary)' }}
      >
        {number}
      </span>

      <span
        className="block h-px w-20"
        style={{
          background:
            'linear-gradient(90deg, rgb(var(--ei-electric-cyan-rgb) / 0.28), rgb(var(--ei-aurora-blue-rgb) / 0.85))',
        }}
      />

      <span
        className="font-structural text-[11px] uppercase tracking-[0.32em]"
        style={{ color: 'var(--ei-text-tertiary)' }}
      >
        {label}
      </span>
    </motion.div>
  );
}

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
      <motion.section
        variants={staggerContainer(STAGGER.loose, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.loose}
        aria-labelledby="origin-heading"
        className="relative py-12 md:py-16"
      >
        <StudioSectionRail
          number={originCopy.number}
          label={originCopy.label}
        />

        <Container size="xl" className="relative z-10">
          <div
            className="
              mx-auto max-w-[1180px] pt-12 md:pt-16
            "
          >
            <div
              className="
                grid items-center gap-12
                lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)]
                lg:gap-12 
              "
            >
              <div>
                <motion.h2
                  id="origin-heading"
                  variants={driftUp}
                  className="ei-section-title whitespace-pre-line px-6 mb-5"
                  style={{ color: 'var(--ei-text-primary)' }}
                >
                  {originCopy.heading}
                </motion.h2>

                <motion.div variants={fadeSoft} className="mt-8 space-y-5">
                  {originCopy.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="
                        max-w-[60ch] px-8 ei-body-large whitespace-pre-line
                      "
                      style={{ color: 'var(--ei-text-secondary)' }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
              </div>

              <QuoteCard lines={studioQuoteLines} />
            </div>
          </div>
        </Container>
      </motion.section>

      {/* PHILOSOPHY */}
      <motion.section
        variants={fadeSoft}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.loose}
        aria-labelledby="philosophy-heading"
        className="relative py-12 md:py-16 md:px-10"
      >
        <StudioSectionRail number="02" label="Philosophy" />

        <Container size="xl" className="relative z-10">
          <div
            className="
              mx-auto max-w-[1180px]
            "
          >
 
<div className="mx-auto mt-12 grid max-w-[1180px] grid-cols-1 gap-7 px-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">               {philosophyItems.map((item, index) => (
                  <PhilosophyCard
                    key={item.title}
                    {...item}
                    index={index}
                    variant="philosophy"
                  />
                ))}
              </div>
            </div>
        
        </Container>
      </motion.section>

      {/* VALUES */}
      <motion.section
        variants={fadeSoft}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.loose}
        aria-labelledby="values-heading"
        className="relative py-12 md:py-16"
      >
        <StudioSectionRail number="03" label="Values" />

        <Container size="xl" className="relative z-10">
          <div
            className="
              mx-auto max-w-[1180px] pt-12 md:pt-16
            "
          >
        

              <div>
                <ValuesGrid showHeader={false} />
              </div>
            </div>
       
        </Container>
      </motion.section>

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