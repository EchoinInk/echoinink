import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
        eyebrow="Studio"
        title="The philosophy behind the worlds."
        italicWord="worlds."
        description="Translating inner worlds into coherent external form."
        image={studioHeroDesktop}
        mobileImage={studioHeroMobile}
        imageAlt="Cinematic cosmic void surrounded by violet and blue nebula energy"
      />

      <Container size="xl" className="relative z-10">
        <motion.section
          variants={staggerContainer(STAGGER.loose, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          aria-labelledby="origin-heading"
          className="
            mx-auto grid max-w-[1180px] items-stretch gap-12
            py-[clamp(4rem,8vw,6.5rem)]
            lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]
            lg:gap-16 xl:gap-20
          "
        >
          <div>
            <motion.div variants={driftUp}>
              <NumberedSectionLabel
                number={originCopy.number}
                label={originCopy.label}
              />
            </motion.div>

            <motion.h2
              id="origin-heading"
              variants={driftUp}
              className="
                mt-6 max-w-[24ch] whitespace-pre-line
                font-editorial text-[clamp(1.75rem,3vw,2.5rem)]
                leading-[1.2] tracking-tight
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
                    max-w-[38ch] font-structural text-[15px]
                    leading-[1.78] md:text-[16px]
                  "
                  style={{ color: 'var(--ei-text-secondary)' }}
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>

          <QuoteCard lines={studioQuoteLines} />
        </motion.section>
      </Container>

      <Container size="xl" className="relative z-10">
        <motion.section
          variants={fadeSoft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          aria-labelledby="philosophy-heading"
          className="mx-auto max-w-[1180px] py-[clamp(4rem,8vw,6.5rem)]"
        >
          <motion.div variants={driftUp}>
            <NumberedSectionLabel number="02" label="Philosophy" />
          </motion.div>

          <motion.div variants={driftUp} className="mt-6">
            <h2
              id="philosophy-heading"
              className="
                max-w-[18ch] font-editorial text-[clamp(1.75rem,3vw,2.4rem)]
                leading-[1.18] tracking-tight
              "
              style={{ color: 'var(--ei-text-primary)' }}
            >
              Three beliefs shape the work.
            </h2>

            <p
              className="
                mt-4 max-w-[40ch] font-structural text-[15px]
                leading-[1.75] md:text-[16px]
              "
              style={{ color: 'var(--ei-text-secondary)' }}
            >
              A studio philosophy built around clarity, emotional truth, and
              meaningful expression.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
            {philosophyItems.map((item, index) => (
              <PhilosophyCard
                key={item.title}
                {...item}
                index={index}
                variant="philosophy"
              />
            ))}
          </div>
        </motion.section>
      </Container>

      <Container size="xl" className="relative z-10">
        <motion.section
          variants={fadeSoft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          aria-labelledby="values-heading"
          className="mx-auto max-w-[1180px] py-[clamp(4rem,8vw,6.5rem)]"
        >
          <motion.div variants={driftUp}>
            <NumberedSectionLabel number="03" label="Values" />
          </motion.div>

          <motion.div variants={driftUp} className="mt-6">
            <h2
              id="values-heading"
              className="
                max-w-[20ch] font-editorial text-[clamp(1.75rem,3vw,2.4rem)]
                leading-[1.18] tracking-tight
              "
              style={{ color: 'var(--ei-text-primary)' }}
            >
              The principles that keep the work clear.
            </h2>
          </motion.div>

          <div className="mt-10">
            <ValuesGrid />
          </div>
        </motion.section>
      </Container>

      <Container
  size="xl"
  className="relative z-10 pb-[clamp(5rem,8vw,7rem)]"
>
  <div className="mx-auto max-w-[1180px]">
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
    /><div className="mt-6 flex flex-wrap items-center gap-6">
    {secondaryLinks?.map((link) => (
      <Link
        key={link.href}
        to={link.href}
        className="
          group inline-flex items-center
          text-sm font-medium
          transition-colors duration-300
        "
        style={{
          color: 'var(--ei-text-secondary)',
        }}
      >
        {link.label}
  
        <span
          className="
            ml-2 transition-transform duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </Link>
    ))}
  </div>
  </div>
</Container>
    </PageShell>
  );
}