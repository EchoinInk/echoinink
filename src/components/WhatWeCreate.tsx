import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { OrbitalVisual } from '@/components/ui/OrbitalVisual';
import { driftUp, staggerContainer, STAGGER, VIEWPORT } from '@/lib/motion-cinematic';

const capabilities = [
  {
    variant: 'hinge' as const,
    title: 'Brand Identity',
    description: 'Identity systems that uncover essence and create emotional resonance.',
    href: '/identity',
  },
  {
    variant: 'echo' as const,
    title: 'Digital Experiences',
    description: 'Immersive websites and interfaces that feel like entering a world.',
    href: '/worlds',
  },
  {
    variant: 'pathway' as const,
    title: 'Narrative Architecture',
    description: 'Story systems that bring coherence, clarity, and transformational depth.',
    href: '/sessions',
  },
  {
    variant: 'fold' as const,
    title: 'Creative Direction',
    description: 'Atmospheric direction that aligns every detail with the bigger vision.',
    href: '/works',
  },
];

export function WhatWeCreate() {
  return (
    <Section spacing="sm" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 30%, rgb(var(--ei-luxe-violet-rgb) / 0.025) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer(STAGGER.loose, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={driftUp} className="flex items-center gap-3 mb-10 md:mb-14">
            <span className="ei-eyebrow">What We Create</span>
<div
          className="h-px w-10 shrink-0 rounded-full shadow-[0_0_12px_rgb(var(--ei-orchid-pink-rgb)/0.45)]"
          style={{
            background:
              'linear-gradient(90deg, rgb(var(--ei-deep-indigo-rgb) / 0.15) 0%, rgb(var(--ei-orchid-pink-rgb) / 0.95) 100%)',
          }}
        />          </motion.div>

          {/* 4-card transformation grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {capabilities.map((cap) => (
              <motion.article key={cap.title} variants={driftUp}>
                <Link
                  to={cap.href}
                  className="group flex flex-col h-full rounded-[var(--radius-card)] border border-white/10 bg-gradient-to-b from-white/[0.04] to-[var(--ei-deep-indigo)]/80 p-6 transition-all duration-500 hover:border-[var(--ei-luxe-violet)]/30 hover:shadow-[0_0_60px_rgb(var(--ei-luxe-violet-rgb)/0.08)] backdrop-blur-sm"
                  aria-label={`Explore ${cap.title}`}
                >
                  {/* Icon */}
                  <div className="mb-8">
                    <OrbitalVisual variant={cap.variant} size={72} />
                  </div>

                  {/* Title */}
                  <h3 className="font-editorial text-xl text-[var(--ei-text-primary)] mb-3 leading-tight">
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="font-structural text-[13px] leading-[1.7] text-white/60 mb-6 flex-1">
                    {cap.description}
                  </p>

                  {/* CTA */}
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--ei-orchid-plasma)]/75 group-hover:text-[var(--ei-orchid-plasma)] transition-colors duration-500">
                    Explore →
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
