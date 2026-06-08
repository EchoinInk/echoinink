import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/layout/PageShell';
import { OfferHero } from '@/components/sections/OfferHero';
import { OfferSection } from '@/components/sections/OfferSection';
import { SystemCard } from '@/components/cards/SystemCard';
import { systemsCategories, systemsGrid, systemsHero } from '@/data/systemsContent';
import { staggerContainer, STAGGER, VIEWPORT } from '@/lib/motion-cinematic';

export function SystemsPage() {
  return (
    <PageShell atmosphere="works" withTopSpacing={false}>
      <Helmet>
        <title>Systems — Echo in Ink</title>
        <meta
          name="description"
          content="Creative systems, templates, prompts, and digital products for shaping identity, atmosphere, and narrative coherence."
        />
      </Helmet>

      <OfferHero
        eyebrow={systemsHero.eyebrow}
        title={systemsHero.title}
        body={[systemsHero.description]}
      />

      <OfferSection eyebrow="Product categories">
        <ul className="flex flex-wrap gap-3">
          {systemsCategories.map((category) => (
            <li
              key={category}
              className="rounded-full border border-[var(--ei-card-border)] px-3 py-1.5 font-structural text-[10px] uppercase tracking-[0.16em] text-[var(--ei-text-tertiary)]"
            >
              {category}
            </li>
          ))}
        </ul>
      </OfferSection>

      <OfferSection title="Emerging systems">
        <motion.div
          variants={staggerContainer(STAGGER.loose, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          className="ei-system-grid"
          data-columns="3"
        >
          {systemsGrid.map((system) => (
            <SystemCard key={system.title} {...system} />
          ))}
        </motion.div>
      </OfferSection>
    </PageShell>
  );
}
