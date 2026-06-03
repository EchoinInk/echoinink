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

export default function SessionsPage() {
  const canEmerge = [
    'creative identity and positioning',
    'visual direction and aesthetic coherence',
    'narrative development and story systems',
    'emotional atmosphere and perceptual tone',
    'tension between internal truth and external expression',
  ];

  const does = [
    'identifies the real signal beneath distraction',
    'clarifies what is actually trying to be expressed',
    'reveals the emotional centre point',
    'produces a directional articulation you can trust',
  ];

  const feels = [
    'pressure dissolving into orientation',
    'noise narrowing into one clear centre',
    'language arriving where there was none',
    'finally recognising what the work has been trying to become',
  ];

  const boundaries = [
    'a full identity engagement',
    'design execution',
    'ongoing consulting',
    'a strategy workshop',
    'long-term creative direction',
  ];

  const forYou = [
    'you feel something clearly but cannot yet articulate it',
    'your direction has become emotionally fragmented',
    'you are circling the truth without landing on it',
    'you need clarity before committing to larger creative decisions',
    'you want a direction that feels internally trustworthy',
  ];

  return (
    <PageShell atmosphere="sessions" withTopSpacing={false}>
      <Helmet>
        <title>Signal Session — Echo in Ink</title>
        <meta name="description" content="A focused creative direction experience designed to uncover the real centre beneath noise, fragmentation, or emotional misalignment." />
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
              Signal Session
            </motion.span>
            <motion.h1 
              variants={driftUp}
              className="ei-type-section whitespace-pre-line"
            >
              {"Clarity before\nexpression"}
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
              "Some things do not need more input. They need clearer signal."
            </motion.p>
            <motion.p 
              variants={fadeSoft}
              className="ei-type-body-large mt-10"
            >
              The Signal Session is a focused creative direction experience designed to uncover the real centre beneath noise, fragmentation, uncertainty, or emotional misalignment.
            </motion.p>
            <motion.p 
              variants={fadeSoft}
              className="ei-type-body mt-6"
            >
              Not consulting. Not performance. A space where clarity arrives through attention, articulation, and emotional precision.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What Can Emerge */}
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
              What can emerge
            </motion.span>
            
            <motion.div 
              variants={staggerContainer(STAGGER.tight, 0.1)}
              className="mt-8 space-y-4"
            >
              {canEmerge.map((item, i) => (
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

      {/* Format */}
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
              Format
            </motion.span>
            
            <motion.div variants={driftUp} className="mt-8">
              <p className="ei-type-body-large">1 × 90-minute session</p>
              <p className="ei-type-body mt-2">+ Impression Report delivered within 48 hours</p>
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
              <h3 className="ei-type-section">Signal Session</h3>
              <p className="ei-type-body-large mt-4">$350 NZD</p>
              <p className="ei-type-body mt-4 max-w-md">
                A focused clarity engagement designed to reveal the signal beneath noise.
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
              This is a moment of orientation — not a complete transformation process.
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

      <PageCTA page="sessions" />
    </PageShell>
  );
}
