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
import { PageCTA } from '@/components/PageCTA';

export default function WorldsPage() {
  const includes = [
    'narrative system architecture',
    'visual coherence systems',
    'interaction and motion principles',
    'atmospheric perception systems',
    'digital presence architecture',
    'long-term continuity mapping',
    'expansion frameworks for future expression',
  ];

  const does = [
    'transforms identity into a living environment',
    'stabilises expression across growth and scale',
    'removes contradiction between platforms and presence',
    'builds continuity between atmosphere, interaction, and meaning',
    'allows the work to evolve without losing itself',
  ];

  const feels = [
    'stepping into a complete environment rather than disconnected parts',
    'everything already knowing what it is supposed to be',
    'clarity persisting even as complexity increases',
    'the absence of emotional contradiction across the system',
  ];

  const architecture = [
    'Identity Core',
    'Atmospheric Register',
    'Narrative Spine',
    'System Architecture',
    'Interaction Logic',
    'Touchpoint Mapping',
    'Expansion Pathways',
    'Continuity Principles',
  ];

  const boundaries = [
    'website development',
    'content production',
    'ongoing creative management',
    'campaign strategy',
    'isolated branding deliverables',
  ];

  const forYou = [
    'your work has outgrown fragmented expression',
    'you want coherence across every touchpoint and platform',
    'you need systems capable of preserving emotional truth at scale',
    'you are building something expansive enough to require continuity architecture',
    'you want your identity to behave like a world rather than a collection of assets',
  ];

  return (
    <PageShell atmosphere="worlds" withTopSpacing={false}>
      <Helmet>
        <title>Worlds — Echo in Ink</title>
        <meta name="description" content="Studio Systems Build — identity extended into living systems." />
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
              Studio Systems Build
            </motion.span>
            <motion.h1 
              variants={driftUp}
              className="ei-type-section whitespace-pre-line"
            >
              {"Identity extended\ninto living systems"}
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
              "Some identities are too dimensional to exist as static brands."
            </motion.p>
            <motion.p 
              variants={fadeSoft}
              className="ei-type-body-large mt-10"
            >
              They require systems capable of holding continuity across time, expression, interaction, and growth.
            </motion.p>
            <motion.p 
              variants={fadeSoft}
              className="ei-type-body mt-6"
            >
              This is not branding. It is operational philosophy translated into experiential form.
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

      {/* World Architecture */}
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
              World Architecture
            </motion.span>
            
            <motion.div 
              variants={staggerContainer(STAGGER.tight, 0.1)}
              className="mt-8 space-y-4"
            >
              {architecture.map((item, i) => (
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
              <h3 className="ei-type-section">Studio Systems Build</h3>
              <p className="ei-type-body-large mt-4">Starting at $12,000 NZD</p>
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
              This is infrastructure — not execution.
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

      <PageCTA page="worlds" />
    </PageShell>
  );
}
