import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  fadeSoft, 
  driftUp, 
  staggerContainer,
  STAGGER,
  VIEWPORT 
} from '@/lib/motion-cinematic';
import { SelectedWorks } from '@/components/SelectedWorks';
import { PageCTA } from '@/components/PageCTA';

export function WorksPage() {
  return (
    <main className="relative">
      <Helmet>
        <title>Selected Works — Echo in Ink</title>
        <meta name="description" content="A curated record of visual and narrative experiments — atmospheres built, identities discovered, and worlds made luminous." />
      </Helmet>

      {/* Faint violet ambient top right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '0%',
          right: '-6%',
          width: 'clamp(320px, 42vw, 640px)',
          height: 'clamp(280px, 36vw, 560px)',
          background: 'radial-gradient(ellipse 66% 62% at 68% 38%, rgba(168,85,247,0.04) 0%, transparent 72%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Page header */}
      <section className="relative ei-section-expansive overflow-hidden">
        <div className="ei-container max-w-4xl">
          <motion.div
            variants={staggerContainer(STAGGER.cinematic, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.loose}
          >
            <motion.span 
              variants={driftUp}
              className="ei-eyebrow ei-text-space-xl block"
            >
              The Archive
            </motion.span>
            <motion.h1 
              variants={driftUp}
              className="ei-hero-display whitespace-pre-line"
            >
              {"Selected\nWorks"}
            </motion.h1>
            <motion.p 
              variants={fadeSoft}
              className="ei-section-description mt-8 max-w-xl"
            >
              A curated record of visual and narrative experiments — atmospheres built, identities discovered, and worlds made luminous.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Works gallery */}
      <SelectedWorks hideViewAll />

      {/* CTA */}
      <PageCTA page="works" />

      {/* Page footer strip */}
      <section className="relative ei-section-intimate overflow-hidden">
        <div className="ei-container">
          <div
            className="w-full h-px mb-10 md:mb-14"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.04) 75%, transparent)',
            }}
          />
          <div className="flex items-center justify-between">
            <span className="font-structural text-[9px] tracking-[0.28em] uppercase text-white/15">
              INK MEETS LIGHT.
            </span>
            <span className="font-structural text-[9px] tracking-[0.28em] uppercase text-white/15">
              EMOTIONS BECOME DESIGN.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
