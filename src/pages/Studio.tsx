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

import { originCopy, philosophyItems, studioQuoteLines } from '@/data/studioContent';

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
          className="mx-auto grid max-w-[1180px] items-stretch gap-12 py-[clamp(5rem,10vw,7.5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20"
          aria-labelledby="origin-heading"
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
              className="mt-6 max-w-[24ch] whitespace-pre-line font-editorial text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] tracking-tight"
              style={{ color: 'var(--ei-text-primary)' }}
            >
              {originCopy.heading}
            </motion.h2>

            <motion.div variants={fadeSoft} className="mt-8 space-y-5">
              {originCopy.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="max-w-[38ch] font-structural text-[15px] leading-[1.78] md:text-[16px]"
                  style={{ color: 'var(--ei-text-secondary)' }}
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>

          <QuoteCard lines={studioQuoteLines} />
        </motion.section>

        <motion.section
          variants={fadeSoft}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.loose}
          className="py-[clamp(5rem,10vw,7.5rem)]"
          aria-labelledby="philosophy-heading"
        ><motion.div variants={driftUp}>
        <NumberedSectionLabel number="02" label="Philosophy" />
      </motion.div>

      <motion.h2 id="philosophy-heading" variants={driftUp} className="sr-only">
        Philosophy
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-7">
        {philosophyItems.map((item, index) => (
          <PhilosophyCard key={item.title} {...item} index={index} variant="philosophy" />
        ))}
      </div>
    </motion.section>
    );
          <ValuesGrid />
        <section className="pt-20 pb-24 md:pt-28 md:pb-32">
          <ProjectCTA
            eyebrow="Continue the conversation"
            heading="Aligned in philosophy?"
            body="If our approach resonates, let's explore how we can build something meaningful together."
            buttonLabel="Work with the Studio"
            buttonHref="/contact"
            backgroundImage={studioCTABg}
          />
        </section>
      </Container>
    </PageShell>
  );
}