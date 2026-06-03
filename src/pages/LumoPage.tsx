import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/layout/PageShell';
import {
  fadeSoft,
  driftUp,
  staggerContainer,
  STAGGER,
  VIEWPORT
} from '@/lib/motion-cinematic';
import { SignatureCaseStudy } from '@/components/SignatureCaseStudy';
import { PageCTA } from '@/components/PageCTA';

export function LumoPage() {
  return (
    <PageShell atmosphere="works" withTopSpacing={false}>
      <Helmet>
        <title>Lumo — Echo in Ink</title>
        <meta name="description" content="A signature case study exploring atmospheric identity, narrative design, and cinematic digital experience." />
      </Helmet>

      {/* Full case study */}
      <SignatureCaseStudy />

      {/* Process Breakdown — Minimal */}
      <section className="relative ei-section-standard overflow-hidden">
        <div className="ei-container max-w-3xl">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.span 
              variants={driftUp}
              className="ei-type-label ei-text-space-md block"
            >
              The Process
            </motion.span>
            
            <motion.div 
              variants={staggerContainer(STAGGER.tight, 0.1)}
              className="mt-8 space-y-4"
            >
              {[
                'Emotional discovery',
                'Narrative mapping',
                'System architecture',
                'Visual atmosphere',
                'Interaction language',
                'Integration & refinement',
              ].map((step, i) => (
                <motion.p 
                  key={i}
                  variants={fadeSoft}
                  className="ei-type-body-large"
                >
                  {step}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <PageCTA page="worlds" />
    </PageShell>
  );
}
