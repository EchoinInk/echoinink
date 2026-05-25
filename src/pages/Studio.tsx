import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
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
    <main className="relative">
      <Helmet>
        <title>Studio — Echo in Ink</title>
        <meta name="description" content="The philosophy and practice behind Echo in Ink — a studio translating inner worlds into coherent identity." />
      </Helmet>
      
      {/* Atmospheric base layer */}
      <div className="absolute inset-0 ei-glow-indigo opacity-30 pointer-events-none" />
      
      {/* Header — Spacious and architectural */}
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
              A space for translating inner worlds into coherent external form.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Origin — Intimate and reflective */}
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
              className="ei-text-block space-y-6"
            >
              <p className="ei-body-large">Echo in Ink began quietly.</p>
              <p className="ei-body-large">
                Not as a business plan. Not as a brand system. Not as a strategy for visibility.
              </p>
              <p className="ei-body-large">It began as a response to dissonance.</p>
              <p className="ei-body-large">
                A fatigue with work that looked polished but felt hollow. With brands performing coherence instead of embodying it. With design reduced to aesthetics instead of emotional structure.
              </p>
              <p className="ei-body-large">
                Echo in Ink formed as a counter‑space to that loss. A place where identity could be approached with care. Where atmosphere carried meaning. Where clarity did not require self‑erasure.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy — Contemplative */}
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
            
            <motion.div variants={driftUp} className="space-y-12 mt-8">
              <div>
                <h3 className="ei-card-title mb-4">Emotional Truth is the Real Strategy</h3>
                <p className="ei-body-large">
                  If the emotional centre is unclear, everything built around it will eventually fracture.
                </p>
                <p className="ei-body-large mt-4">
                  The work begins by finding what is actually true beneath expression.
                </p>
              </div>

              <div>
                <h3 className="ei-card-title mb-4">Identity is Relational, Not Decorative</h3>
                <p className="ei-body-large">
                  Identity is not a system of assets. It is the experience of being understood. The work is not to invent identity — but to translate what already exists.
                </p>
              </div>

              <div>
                <h3 className="ei-card-title mb-4">Atmosphere is Information</h3>
                <p className="ei-body-large">
                  Nothing is neutral. Spacing carries meaning. Rhythm carries meaning. Motion carries meaning. Silence carries meaning.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values — Minimal and intentional */}
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
                'Atmosphere over decoration',
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

      {/* Core Definition — Quiet finale */}
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
              "Echo in Ink does not create identity.
              <br />
              It protects what is already true
              <br />
              from being lost during expression."
            </motion.p>
          </motion.div>
        </div>
      </section>

      <PageCTA page="studio" />
    </main>
  );
}
