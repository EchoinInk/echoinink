import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EASE, DURATION, VIEWPORT, STAGGER } from '@/lib/motion';
import { Layout } from '@/components/Layout';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/Button';

export default function Identity() {
  return (
    <Layout>
      <Helmet>
        <title>Identity Translation — Echo in Ink</title>
        <meta
          name="description"
          content="Identity Translation — where inner worlds become coherent external form."
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
            Identity
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.15 }}
            className="font-structural text-[15px] text-white/40 leading-[1.9] mt-6"
          >
            Where inner worlds become coherent external form.
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
            Identity Translation is for those who can feel the truth of what they are — but cannot yet fully express it.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.1 }}
            className="font-structural text-[15px] text-white/35 leading-[1.9] mt-10"
          >
            Not because it is unclear internally.
            <br />
            But because it has never been translated with enough care.
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
            Identity Translation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.1 }}
            className="font-structural text-[15px] text-white/45 leading-[1.9] mt-6"
          >
            A deep creative engagement that translates emotional truth into language, atmosphere, positioning, and visual coherence.
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

          <div className="space-y-10">
            {[
              'Narrative identity architecture',
              'Tone of voice system',
              'Atmospheric direction system',
              'Visual language principles',
              'Emotional positioning framework',
              'Foundational identity articulation',
            ].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT.tight}
                transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.tight * i }}
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
              'It aligns who you are with how you appear.',
              'It removes fragmentation across expression.',
              'It builds coherence between feeling, language, and form.',
            ].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
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
              'Becoming legible without becoming smaller',
              'Seeing your internal world reflected accurately for the first time',
              'Relief from inconsistency',
              'A quiet sense that things finally align',
            ].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
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
                title: 'Emotional Mapping',
                body: 'We identify the underlying tensions, signals, and truths beneath the surface.',
              },
              {
                title: 'Narrative Architecture',
                body: 'We define the emotional spine and identity direction.',
              },
              {
                title: 'Atmospheric System Design',
                body: 'We shape tone, rhythm, language, and perceptual environment.',
              },
              {
                title: 'Identity Construction',
                body: 'We translate the system into coherent expression.',
              },
              {
                title: 'Refinement',
                body: 'We remove distortion until only essential truth remains.',
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT.tight}
                transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.tight * i }}
              >
                <h3 className="font-editorial text-[1.4rem] text-white/80 leading-[1.3] mb-3">
                  {step.title}
                </h3>
                <p className="font-structural text-[15px] text-white/35 leading-[1.9]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* PRICING — UPDATED */}
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

          <div className="space-y-16">
            <div>
              <h3 className="font-editorial text-[1.8rem] text-white/90 leading-[1.2]">
                Identity Translation
              </h3>
              <p className="font-structural text-[15px] text-white/40 leading-[1.9] mt-4">
                $6,500 NZD
              </p>
              <p className="font-structural text-[14px] text-white/30 leading-[1.9] mt-4">
                A complete identity system shaped with full authorial attention — translated with emotional precision and built to hold the truth of your work.
              </p>
            </div>
          </div>
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
              'logo design',
              'website design',
              'content creation',
              'ongoing brand management',
              'marketing strategy',
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
            This is translation — not production.
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
              'you feel clear internally but fragmented externally',
              'your current identity no longer reflects your actual work',
              'you value coherence over visibility',
              'you want expression that feels like recognition, not performance',
              'you need structure that preserves emotional nuance rather than flattening it',
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
            See how identity becomes a world.
          </motion.p>

          <Button to="/lumo">View Lumo →</Button>
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
            Begin Identity Translation
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.1 }}
            className="font-structural text-[14px] text-white/40 leading-[1.9] mb-12"
          >
            If it is the right fit, it will already feel clear.
          </motion.p>

          <Button to="/contact">Begin</Button>
        </Container>
      </Section>
    </Layout>
  );
}
