import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { OrbitalVisual } from '@/components/ui/OrbitalVisual';
import { driftUp, staggerContainer, STAGGER, VIEWPORT } from '@/lib/motion-cinematic';

const systems = [
  {
    variant: 'ember' as const,
    title: 'Identity Canvas',
    description: 'Map your essence, influence, and emotional positioning.',
    meta: 'Framework',
    href: '/systems',
  },
  {
    variant: 'pulse' as const,
    title: 'Founder Reflection',
    description: 'A guided system for clarity, identity, and next alignment.',
    meta: 'Reflective Tool',
    href: '/systems',
  },
  {
    variant: 'monolith' as const,
    title: 'Narrative Architect',
    description: 'Build stories that hold meaning, tension, and transformation.',
    meta: 'Framework',
    href: '/systems',
  },
  {
    variant: 'spiral' as const,
    title: 'Identity GPT',
    description: 'An AI companion for identity clarity and narrative direction.',
    meta: 'GPT System',
    href: '/systems',
  },
  {
    variant: 'lattice' as const,
    title: 'Atmosphere UI Kit',
    description: 'Cinematic UI components for immersive digital worlds.',
    meta: 'UI System',
    href: '/systems',
  },
];

export function EmergingSystems() {
  return (
    <Section spacing="sm" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 55% 40% at 50% 55%, rgb(73, 133, 253 / 0.02) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <Container>
        <motion.div
          variants={staggerContainer(STAGGER.loose, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          className="max-w-6xl mx-auto"
        >
          {/* Section header — eyebrow left, explore link right */}
          <motion.div
            variants={driftUp}
            className="flex items-center justify-between mb-10 md:mb-14"
          >
            <div className="flex items-center gap-3">
              <span className="ei-eyebrow">Our Systems</span>
<div
          className="h-px w-10 shrink-0 rounded-full shadow-[0_0_12px_rgb(73, 133, 253/0.45)]"
          style={{
            background:
              'linear-gradient(90deg, rgb(11, 13, 42 / 0.15) 0%, rgb(73, 133, 253 / 0.95) 100%)',
          }}
        />            </div>

            <Link
              to="/systems"
              className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-white/55 hover:text-[var(--ei-violet)] transition-colors duration-500"
            >
              Explore All Systems
              <span className="group-hover:translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">→</span>
            </Link>
          </motion.div>

          {/* 5 system cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-4">
            {systems.map((system) => (
              <motion.article key={system.title} variants={driftUp}>
                <Link
                  to={system.href}
                  className="group flex flex-col h-full rounded-[24px] border border-white/10 bg-[var(--ei-midnight)]/70 p-7 transition-all duration-500 hover:border-[var(--ei-violet)]/30 hover:shadow-[0_0_60px_rgb(113, 7, 234/0.12)]"
                  aria-label={system.title}
                >
                  {/* Orbital icon */}
                  <div className="mb-7 flex items-center justify-center h-20">
                    <OrbitalVisual variant={system.variant} size={72} />
                  </div>

                  {/* Title */}
                  <h3 className="font-editorial text-lg text-[var(--ei-text-primary)] mb-3 leading-tight">
                    {system.title}
                  </h3>

                  {/* Description */}
                  <p className="font-structural text-[12px] leading-[1.7] text-white/62 mb-6 flex-1">
                    {system.description}
                  </p>

                  {/* Meta label */}
                  <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/58">
                    {system.meta}
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