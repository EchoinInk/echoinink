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
import { PageCTA } from '@/components/sections/PageCTA';

export default function Identity() {
  const includes = [
    'Narrative identity architecture',
    'Tone of voice system',
    'Atmospheric direction system',
    'Visual language principles',
    'Emotional positioning framework',
    'Foundational identity articulation',
  ];

  const does = [
    'It aligns who you are with how you appear.',
    'It removes fragmentation across expression.',
    'It builds coherence between feeling, language, and form.',
  ];

  const feels = [
    'Becoming legible without becoming smaller',
    'Seeing your internal world reflected accurately for the first time',
    'Relief from inconsistency',
    'A quiet sense that things finally align',
  ];

  const boundaries = [
    'logo design',
    'website design',
    'content creation',
    'ongoing brand management',
    'marketing strategy',
  ];

  const forYou = [
    'you feel clear internally but fragmented externally',
    'your current identity no longer reflects your actual work',
    'you value coherence over visibility',
    'you want expression that feels like recognition, not performance',
    'you need structure that preserves emotional nuance',
  ];

  return (
    <PageShell atmosphere="identity" withTopSpacing={false}>
      <Helmet>
        <title>Identity Translation — Echo in Ink</title>
        <meta name="description" content="Identity Translation — where inner worlds become coherent external form." />
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
              className="ei-type-label ei-text-space-lg block"
            >
              Identity Translation
            </motion.span>
            <motion.h1 
              variants={driftUp}
              className="ei-type-section"
            >
              Where inner worlds become coherent external form.
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Orientation */}
      <section className="relative ei-section-standard overflow-hidden">
        <div className="ei-container max-w-3xl">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.normal}
          >
            <motion.p 
              variants={driftUp}
              className="ei-atmosphere-text"
            >
              "Identity Translation is for those who can feel the truth of what they are — but cannot yet fully express it."
            </motion.p>
            <motion.p 
              variants={fadeSoft}
              className="ei-type-body-large mt-10"
            >
              Not because it is unclear internally. But because it has never been translated with enough care.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What It Includes */}
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
              What it includes
            </motion.span>
            
            <motion.div 
              variants={staggerContainer(STAGGER.tight, 0.1)}
              className="mt-8 space-y-4"
            >
              {includes.map((item, i) => (
                <motion.p 
                  key={i}
                  variants={fadeSoft}
                  className="ei-type-body-large"
                >
                  {item}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What It Does */}
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
              What it does
            </motion.span>
            
            <motion.div 
              variants={staggerContainer(STAGGER.tight, 0.1)}
              className="mt-8 space-y-4"
            >
              {does.map((item, i) => (
                <motion.p 
                  key={i}
                  variants={fadeSoft}
                  className="ei-type-body-large"
                >
                  {item}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What It Feels Like */}
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
              What it feels like
            </motion.span>
            
            <motion.div 
              variants={staggerContainer(STAGGER.tight, 0.1)}
              className="mt-8 space-y-4"
            >
              {feels.map((item, i) => (
                <motion.p 
                  key={i}
                  variants={fadeSoft}
                  className="ei-type-body-large"
                >
                  {item}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment */}
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
              className="ei-type-label ei-text-space-md block"
            >
              Investment
            </motion.span>
            
            <motion.div variants={driftUp} className="mt-8">
              <h3 className="ei-type-section">Identity Translation</h3>
              <p className="ei-type-body-large mt-4">$6,500 NZD</p>
              <p className="ei-type-body mt-4 max-w-md">
                A complete identity system shaped with full authorial attention — translated with emotional precision.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Boundaries */}
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
              This is not
            </motion.span>
            
            <motion.div 
              variants={staggerContainer(STAGGER.tight, 0.1)}
              className="mt-8 space-y-3"
            >
              {boundaries.map((item, i) => (
                <motion.p 
                  key={i}
                  variants={fadeSoft}
                  className="ei-type-body"
                >
                  {item}
                </motion.p>
              ))}
            </motion.div>
            
            <motion.p 
              variants={fadeSoft}
              className="ei-type-body-large mt-10"
            >
              This is translation — not production.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who It's For */}
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
              This is for you if…
            </motion.span>
            
            <motion.div 
              variants={staggerContainer(STAGGER.tight, 0.1)}
              className="mt-8 space-y-4"
            >
              {forYou.map((item, i) => (
                <motion.p 
                  key={i}
                  variants={fadeSoft}
                  className="ei-type-body-large"
                >
                  {item}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <PageCTA page="identity" />
    </PageShell>
  );
}
