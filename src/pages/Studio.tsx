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
        </Container>

        <Container size="xl" className="relative z-10">
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
    </Container>
    );<Container>
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT.normal}
      transition={{
        duration: DURATION.normal,
        ease: EASE_CINEMATIC,
        delay: index * 0.08,
      }}
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -2,
              transition: { duration: DURATION.instant, ease: EASE_CINEMATIC },
            }
      }
      className={`group relative flex h-full flex-col rounded-[var(--radius-card)] border transition-[border-color,background] duration-500 hover:border-[var(--ei-card-border-hover)] ${
        isValue ? 'min-h-[196px] p-6' : 'min-h-[280px] p-7 md:p-8'
      } hover:bg-[var(--ei-card-bg-hover)]`}
      style={{
        background: 'var(--ei-card-bg)',
        borderColor: 'var(--ei-card-border)',
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full border ${
          isValue ? 'mb-4 h-10 w-10' : 'mb-6 h-12 w-12'
        }`}
        style={{
          borderColor: isValue
            ? 'rgb(var(--ei-luxe-violet-rgb) / 0.20)'
            : 'var(--border-soft)',
          background: 'rgb(var(--ei-deep-indigo-rgb) / 0.24)',
        }}
        aria-hidden="true"
      >
        <OrbitalVisual variant={icon} size={isValue ? 24 : 30} />
      </div>

      <h3
        className={`font-editorial leading-[1.14] tracking-tight ${
          isValue ? 'text-[1.05rem]' : 'text-[1.35rem] md:text-[1.45rem]'
        }`}
        style={{ color: 'var(--ei-text-primary)' }}
      >
        {title}
      </h3>

      <p
        className={`mt-3 font-structural leading-[1.68] ${
          isValue ? 'text-[13px]' : 'text-[14px] md:text-[15px]'
        }`}
        style={{ color: 'var(--ei-text-secondary)' }}
      >
        {description}
      </p>
    </motion.article>
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