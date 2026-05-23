import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EASE, DURATION, VIEWPORT, STAGGER } from '@/lib/motion';
import { Layout } from '@/components/Layout';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/Button';

export default function WorldsPage() {
  return (
    <Layout>
      <Helmet>
        <title>Worlds — Echo in Ink</title>
        <meta
          name="description"
          content="Studio Systems Build — identity extended into living systems."
        />
      </Helmet>

      {/* HEADER — PRESENCE */}
      <Section spacing="xl">
        <Container className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE }}
            className="font-editorial text-[2.8rem] md:text-[4rem] text-white/90 leading-[1.1]"
          >
            Worlds
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.15 }}
            className="font-structural text-[15px] text-white/40 leading-[1.9] mt-6"
          >
            Identity extended into living systems.
          </motion.p>
        </Container>
      </Section>

      {/* ATMOSPHERIC ORIENTATION */}
      <Section spacing="lg">
        <Container className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.slow, ease: EASE }}
            className="font-editorial text-[1.8rem] md:text-[2.2rem] text-white/80 leading-[1.3]"
          >
            Some identities are too dimensional to exist as static brands.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.1 }}
            className="font-structural text-[15px] text-white/35 leading-[1.9] mt-10"
          >
            They require systems capable of holding continuity across time, expression, interaction, and growth.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.2 }}
            className="font-structural text-[15px] text-white/30 leading-[1.9] mt-6"
          >
            Studio Systems Build is a full expressive ecosystem designed to preserve emotional coherence across digital presence, narrative, atmosphere, and evolving creative expansion.
          </motion.p>
        </Container>
      </Section>

      {/* CORE OFFER */}
      <Section spacing="lg">
        <Container className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.slow, ease: EASE }}
            className="font-editorial text-[2rem] md:text-[2.6rem] text-white/90 leading-[1.2]"
          >
            Studio Systems Build
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.1 }}
            className="font-structural text-[15px] text-white/45 leading-[1.9] mt-6"
          >
            From identity to living infrastructure.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.2 }}
            className="font-structural text-[15px] text-white/35 leading-[1.9] mt-4"
          >
            This is not branding.
            <br />
            It is operational philosophy translated into experiential form.
          </motion.p>
        </Container>
      </Section>

      {/* WHAT IT INCLUDES */}
      <Section spacing="lg">
        <Container className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.normal, ease: EASE }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/25 mb-12"
          >
            What it includes
          </motion.span>

          <div className="space-y-6">
            {[
              'narrative system architecture',
              'visual coherence systems',
              'interaction and motion principles',
              'atmospheric perception systems',
              'digital presence architecture',
              'long-term continuity mapping',
              'expansion frameworks for future expression',
            ].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT.tight}
                transition={{ duration: DURATION.normal, ease: EASE, delay: STAGGER.tight * i }}
                className="font-structural text-[15px] text-white/40 leading-[1.9]"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHAT IT DOES */}
      <Section spacing="lg">
        <Container className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.normal, ease: EASE }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/25 mb-12"
          >
            What it does
          </motion.span>

          <div className="space-y-6">
            {[
              'transforms identity into a living environment',
              'stabilises expression across growth and scale',
              'removes contradiction between platforms and presence',
              'builds continuity between atmosphere, interaction, and meaning',
              'allows the work to evolve without losing itself',
            ].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT.tight}
                transition={{ duration: DURATION.normal, ease: EASE, delay: STAGGER.tight * i }}
                className="font-structural text-[15px] text-white/40 leading-[1.9]"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </Container>
      </Section>

      {/* WHAT IT FEELS LIKE */}
      <Section spacing="lg">
        <Container className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.normal, ease: EASE }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/25 mb-12"
          >
            What it feels like
          </motion.span>

          <div className="space-y-6">
            {[
              'stepping into a complete environment rather than disconnected parts',
              'everything already knowing what it is supposed to be',
              'clarity persisting even as complexity increases',
              'the absence of emotional contradiction across the system',
            ].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT.tight}
                transition={{ duration: DURATION.normal, ease: EASE, delay: STAGGER.tight * i }}
                className="font-structural text-[15px] text-white/40 leading-[1.9]"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </Container>
      </Section>

      {/* SAMPLE WORLD STRUCTURE */}
      <Section spacing="lg">
        <Container className="max-w-4xl">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.slow, ease: EASE }}
            className="font-editorial text-[1.8rem] text-white/85 leading-[1.2] mb-10"
          >
            World Architecture
          </motion.h3>

          <div className="space-y-4">
            {[
              'Identity Core',
              'Atmospheric Register',
              'Narrative Spine',
              'System Architecture',
              'Interaction Logic',
              'Touchpoint Mapping',
              'Expansion Pathways',
              'Continuity Principles',
            ].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT.tight}
                transition={{ duration: DURATION.normal, ease: EASE, delay: STAGGER.tight * i }}
                className="font-structural text-[15px] text-white/40 leading-[1.9]"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </Container>
      </Section>

      {/* PROCESS */}
      <Section spacing="lg">
        <Container className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.normal, ease: EASE }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/25 mb-12"
          >
            Process
          </motion.span>

          <div className="space-y-10">
            {[
              {
                title: 'Listening & Signal Discovery',
                body: 'Understanding the deeper structure beneath the existing expression.',
              },
              {
                title: 'World Architecture',
                body: 'Defining the emotional, narrative, and systemic foundations.',
              },
              {
                title: 'System Construction',
                body: 'Designing the frameworks governing interaction, perception, and continuity.',
              },
              {
                title: 'Atmospheric Integration',
                body: 'Aligning rhythm, tone, interface, and experiential language.',
              },
              {
                title: 'Expansion & Evolution',
                body: 'Ensuring the world can grow without fragmenting.',
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT.tight}
                transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.tight * i }}
              >
                <h4 className="font-editorial text-[1.4rem] text-white/80 leading-[1.3] mb-3">
                  {step.title}
                </h4>
                <p className="font-structural text-[15px] text-white/35 leading-[1.9]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* PRICING */}
      <Section spacing="lg">
        <Container className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.normal, ease: EASE }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/25 mb-12"
          >
            Investment
          </motion.span>

          <h3 className="font-editorial text-[1.8rem] text-white/90 leading-[1.2]">
            Studio Systems Build
          </h3>

          <p className="font-structural text-[15px] text-white/40 leading-[1.9] mt-4">
            Starting at $12,000 NZD
          </p>
        </Container>
      </Section>

      {/* BOUNDARIES */}
      <Section spacing="lg">
        <Container className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.normal, ease: EASE }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/25 mb-12"
          >
            This is not
          </motion.span>

          <div className="space-y-4">
            {[
              'website development',
              'content production',
              'ongoing creative management',
              'campaign strategy',
              'isolated branding deliverables',
            ].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT.tight}
                transition={{ duration: DURATION.normal, ease: EASE, delay: STAGGER.tight * i }}
                className="font-structural text-[15px] text-white/35 leading-[1.9]"
              >
                {item}
              </motion.p>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.tight}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.3 }}
            className="font-structural text-[15px] text-white/50 leading-[1.9] mt-10"
          >
            This is infrastructure — not execution.
          </motion.p>
        </Container>
      </Section>

      {/* WHO IT IS FOR */}
      <Section spacing="lg">
        <Container className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.normal, ease: EASE }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/25 mb-12"
          >
            This is for you if…
          </motion.span>

          <div className="space-y-6">
            {[
              'your work has outgrown fragmented expression',
              'you want coherence across every touchpoint and platform',
              'you need systems capable of preserving emotional truth at scale',
              'you are building something expansive enough to require continuity architecture',
              'you want your identity to behave like a world rather than a collection of assets',
            ].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT.tight}
                transition={{ duration: DURATION.normal, ease: EASE, delay: STAGGER.tight * i }}
                className="font-structural text-[15px] text-white/40 leading-[1.9]"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </Container>
      </Section>

      {/* LUMO LINK */}
      <Section spacing="lg">
        <Container className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.normal, ease: EASE }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/25 mb-6"
          >
            Lumo Link
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.tight}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.1 }}
            className="font-structural text-[15px] text-white/40 leading-[1.9] mb-8"
          >
            A world made coherent.
          </motion.p>

          <Link
            to="/lumo"
            className="font-structural text-[11px] tracking-[0.22em] uppercase text-white/40 hover:text-white/70 transition-colors duration-400"
          >
            View LUMO →
          </Link>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section spacing="xl">
        <Container className="max-w-3xl text-center">
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.slow, ease: EASE }}
            className="font-editorial text-[2rem] md:text-[2.6rem] text-white/90 leading-[1.2] mb-10"
          >
            Begin a Collaboration
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.1 }}
            className="font-structural text-[14px] text-white/40 leading-[1.9] mb-12"
          >
            Some worlds require infrastructure before they can fully emerge.
          </motion.p>

          <Button to="/contact">Begin</Button>
        </Container>
      </Section>
    </Layout>
  );
}
