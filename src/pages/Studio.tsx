import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PageShell } from '@/components/system';
import {
  fadeSoft,
  driftUp,
  staggerContainer,
  STAGGER,
  VIEWPORT
} from '@/lib/motion-cinematic';
import { PageCTA } from '@/components/PageCTA';

export function Studio() {
  return (
    <PageShell atmosphere="studio" withTopSpacing={false}>
      <Helmet>
        <title>Studio — Echo in Ink</title>
        <meta name="description" content="The philosophy and practice behind Echo in Ink — translating inner worlds into coherent identity." />
      </Helmet>
      
      {/* Header */}
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
              className="ei-eyebrow ei-text-space-lg block"
            >
              Studio
            </motion.span>
            <motion.h1 
              variants={driftUp}
              className="ei-section-title whitespace-pre-line"
            >
              {"The philosophy\nbehind the work"}
            </motion.h1>
            <motion.p 
              variants={fadeSoft}
              className="ei-section-description mt-8"
            >
              Translating inner worlds into coherent external form.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Origin */}
      <section className="relative ei-section-intimate overflow-hidden">
        <div className="ei-container max-w-3xl">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.span 
              variants={driftUp}
              className="ei-eyebrow ei-text-space-md block"
            >
              Origin
            </motion.span>
            
            <motion.div 
              variants={fadeSoft}
              className="space-y-6"
            >
              <p className="ei-body-large">Echo in Ink began quietly — not as a plan, but as a response.</p>
              <p className="ei-body-large">
                A fatigue with work that looked polished but felt hollow. With brands performing coherence instead of embodying it. With design reduced to aesthetics instead of emotional structure.
              </p>
              <p className="ei-body-large">
                This studio formed as a counter-space. Where identity is approached with care. Where atmosphere carries meaning. Where clarity does not require self-erasure.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
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
              className="ei-eyebrow ei-text-space-md block"
            >
              Philosophy
            </motion.span>
            
            <motion.div variants={driftUp} className="space-y-10 mt-8">
              <div>
                <h3 className="ei-card-title mb-4">Emotional Truth is Strategy</h3>
                <p className="ei-body-large">
                  If the emotional centre is unclear, everything built around it fractures. The work begins by finding what is actually true beneath expression.
                </p>
              </div>

              <div>
                <h3 className="ei-card-title mb-4">Identity is Relational</h3>
                <p className="ei-body-large">
                  Not a system of assets. The experience of being understood. The work is not to invent identity — but to translate what already exists.
                </p>
              </div>

              <div>
                <h3 className="ei-card-title mb-4">Atmosphere is Information</h3>
                <p className="ei-body-large">
                  Nothing is neutral. Spacing, rhythm, motion, silence — all carry meaning.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative ei-section-intimate overflow-hidden">
        <div className="ei-container max-w-3xl">
          <motion.div
            variants={staggerContainer(STAGGER.normal, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.span 
              variants={driftUp}
              className="ei-eyebrow ei-text-space-md block"
            >
              Values
            </motion.span>
            
            <motion.div 
              variants={staggerContainer(STAGGER.tight, 0.1)}
              className="mt-8 space-y-4"
            >
              {[
                'Depth over speed',
                'Coherence over volume',
                'Meaning over performance',
                'Restraint over excess',
                'Truth over optimisation',
              ].map((value, i) => (
                <motion.p 
                  key={i}
                  variants={fadeSoft}
                  className="ei-body-large"
                >
                  {value}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Definition */}
      <section className="relative ei-section-intimate overflow-hidden">
        <div className="ei-container max-w-3xl">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.loose}
          >
            <motion.p 
              variants={fadeSoft}
              className="ei-atmosphere-text text-center"
            >
              "Not creating identity.
              <br />
              Protecting what is true
              <br />
              from being lost in expression."
            </motion.p>
          </motion.div>
        </div>
      </section>

      <PageCTA page="studio" />
    </PageShell>
  );
}
