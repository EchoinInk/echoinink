You are in Apply-Mode.

Completely replace the contents of:
src/pages/SessionsPage.tsx

Do NOT modify any other files.  
Do NOT rename the file.  
Preserve all atmospheric systems, motion utilities, layout primitives, and component imports.  
Replace ONLY the file contents with the following:

--- BEGIN NEW FILE CONTENT ---

import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EASE, DURATION, VIEWPORT, STAGGER } from '@/lib/motion';
import { Layout } from '@/components/layout/Layout';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function SessionsPage() {
  return (
    <Layout>
      <Helmet>
        <title>Signal Session — Echo in Ink</title>
        <meta
          name="description"
          content="A focused creative direction experience designed to uncover the real centre beneath noise, fragmentation, or emotional misalignment."
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
            Sessions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.15 }}
            className="font-structural text-[15px] text-white/40 leading-[1.9] mt-6"
          >
            Clarity before expression.
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
            Some things do not need more input.  
            They need clearer signal.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.1 }}
            className="font-structural text-[15px] text-white/35 leading-[1.9] mt-10"
          >
            The Signal Session is a focused creative direction experience designed to uncover the real centre beneath noise, fragmentation, uncertainty, or emotional misalignment.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.2 }}
            className="font-structural text-[15px] text-white/30 leading-[1.9] mt-6"
          >
            Not consulting.  
            Not performance.  
            A space where clarity arrives through attention, articulation, and emotional precision.
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
            The Signal Session
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.1 }}
            className="font-structural text-[15px] text-white/45 leading-[1.9] mt-6"
          >
            A single high-intensity engagement where scattered thought, creative tension, or unresolved identity is distilled into coherent direction.
          </motion.p>
        </Container>
      </Section>

      {/* WHAT CAN EMERGE */}
      <Section spacing="lg">
        <Container className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.normal, ease: EASE }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/25 mb-12"
          >
            What can emerge
          </motion.span>

          <div className="space-y-6">
            {[
              'creative identity and positioning',
              'visual direction and aesthetic coherence',
              'narrative development and story systems',
              'emotional atmosphere and perceptual tone',
              'tension between internal truth and external expression',
            ].map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT.tight}
                transition={{ duration: DURATION.normal, ease: EASE, delay: STAGGER.tight * i }}
                className="font-editorial text-[1.2rem] text-white/65 leading-[1.3]"
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
              'identifies the real signal beneath distraction',
              'clarifies what is actually trying to be expressed',
              'reveals the emotional centre point',
              'produces a directional articulation you can trust',
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
              'pressure dissolving into orientation',
              'noise narrowing into one clear centre',
              'language arriving where there was none',
              'finally recognising what the work has been trying to become',
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

      {/* HOW IT WORKS */}
      <Section spacing="lg">
        <Container className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.normal, ease: EASE }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/25 mb-12"
          >
            How it works
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.slow, ease: EASE }}
            className="font-structural text-[15px] text-white/40 leading-[1.9] mb-6"
          >
            Before the session, you complete a focused creative intake outlining where you are, what feels unresolved, and what you are moving toward.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.tight}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.1 }}
            className="font-structural text-[15px] text-white/35 leading-[1.9] mb-6"
          >
            The session itself is conversational, exploratory, and direction-led — moving toward clarity through attention rather than performance.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.tight}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.2 }}
            className="font-structural text-[15px] text-white/30 leading-[1.9]"
          >
            Within 48 hours, you receive an Impression Report: a distilled document containing insights, articulation, directional observations, and next-step guidance.
          </motion.p>
        </Container>
      </Section>

      {/* TIMELINE */}
      <Section spacing="lg">
        <Container className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.normal, ease: EASE }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/25 mb-12"
          >
            Format
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.tight}
            transition={{ duration: DURATION.normal, ease: EASE }}
            className="font-structural text-[15px] text-white/40 leading-[1.9]"
          >
            1 × 90-minute session  
            <br />
            + Impression Report delivered within 48 hours
          </motion.p>
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
            Signal Session
          </h3>

          <p className="font-structural text-[15px] text-white/40 leading-[1.9] mt-4">
            $350 NZD
          </p>

          <p className="font-structural text-[14px] text-white/30 leading-[1.9] mt-4">
            A focused clarity engagement designed to reveal the signal beneath noise.
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
              'a full identity engagement',
              'design execution',
              'ongoing consulting',
              'a strategy workshop',
              'long-term creative direction',
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
            This is a moment of orientation — not a complete transformation process.
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
              'you feel something clearly but cannot yet articulate it',
              'your direction has become emotionally fragmented',
              'you are circling the truth without landing on it',
              'you need clarity before committing to larger creative decisions',
              'you want a direction that feels internally trustworthy',
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
            Signal made visible.
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
            viewport={VIEWPORT.tight}
            transition={{ duration: DURATION.normal, ease: EASE }}
            className="font-structural text-[22px] text-white/90 leading-[1.35] mb-6"
          >
            Ready to begin?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.tight}
            transition={{ duration: DURATION.normal, ease: EASE, delay: 0.1 }}
            className="font-structural text-[15px] text-white/40 leading-[1.9] mb-8"
          >
            Let's shape the world you want to live in.
          </motion.p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-structural text-[11px] tracking-[0.22em] uppercase text-white/40 hover:text-white/70 transition-colors duration-400"
          >
            Start a conversation →
          </Link>
        </Container>
      </Section>
    </div>
  );
}