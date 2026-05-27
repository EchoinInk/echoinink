import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import {
  driftUp,
  blurEmergence,
  staggerContainer,
  STAGGER,
  VIEWPORT,
} from '@/lib/motion-cinematic';

// ═══════════════════════════════════════════════════════════════
// ECOSYSTEM PATHWAYS — Three layers of the Echo in Ink studio
// Studio → Systems → Lumo
// ═══════════════════════════════════════════════════════════════

const layers = [
  {
    to: '/contact',
    label: 'Studio',
    headline: 'Identity systems, immersive worlds, creative direction.',
    description:
      'The studio arm. Bespoke creative work for founders and artists building something real.',
    accent: 'rgb(var(--ei-stellar-lilac-rgb) / 0.08)',
    accentLine: 'rgb(var(--ei-stellar-lilac-rgb) / 0.4)',
    tag: '01',
  },
  {
    to: '/systems',
    label: 'Systems',
    headline: 'Frameworks, cognitive tools, identity maps, atmospheric UI systems.',
    description:
      'Structured tools for building identity, narrative, and digital worlds with cinematic clarity.',
    accent: 'rgb(var(--ei-electric-cobalt-rgb) / 0.07)',
    accentLine: 'rgb(var(--ei-electric-cobalt-rgb) / 0.35)',
    tag: '02',
  },
  {
    to: '/lumo',
    label: 'Lumo',
    headline: 'Reflective technology for identity, narrative, and emotional clarity.',
    description:
      'An intelligent companion for people navigating creative becoming. Built on reflection, not noise.',
    accent: 'rgb(var(--ei-neon-magenta-rgb) / 0.08)',
    accentLine: 'rgb(var(--ei-neon-magenta-rgb) / 0.4)',
    tag: '03',
  },
];

export function EcosystemPathways() {
  return (
    <Section spacing="sm" className="relative overflow-hidden">
      {/* Atmospheric foundation */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 40% at 50% 50%, rgb(var(--ei-orbit-blue-rgb) / 0.03) 0%, transparent 65%)',
          filter: 'blur(70px)',
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
          {/* Section heading */}
          <motion.div variants={driftUp} className="text-center mb-8 md:mb-14">
            <span className="ei-eyebrow ei-text-space-md block">
              The Ecosystem
            </span>
            <h2 className="ei-section-title">
              Three layers. One world.
            </h2>
            <p className="ei-section-description max-w-[42ch] mx-auto mt-4">
              Echo in Ink operates across studio work, systematic tools, and reflective technology.
            </p>
          </motion.div>

          {/* Layer rows */}
          <div className="flex flex-col gap-4 md:gap-5">
            {layers.map((layer) => (
              <motion.div key={layer.label} variants={driftUp}>
                <Link
                  to={layer.to}
                  className="ei-focus-block group block rounded-2xl overflow-hidden"
                  style={{
                    background: `radial-gradient(ellipse 80% 100% at 0% 50%, ${layer.accent} 0%, transparent 55%), rgb(var(--ei-photon-white-rgb) / 0.025)`,
                    border: '1px solid rgb(var(--ei-photon-white-rgb) / 0.07)',
                  }}
                >
                  {/* Inner hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
                    style={{
                      background: `radial-gradient(ellipse 70% 90% at 0% 50%, ${layer.accent} 0%, transparent 60%)`,
                    }}
                  />

                  <div className="relative z-10 grid md:grid-cols-12 gap-4 md:gap-8 items-center px-6 py-7 md:px-10 md:py-9">
                    {/* Number tag */}
                    <div className="md:col-span-1 hidden md:block">
                      <span className="font-structural text-[10px] tracking-[0.22em] text-white/30">
                        {layer.tag}
                      </span>
                    </div>

                    {/* Label */}
                    <div className="md:col-span-2">
                      <motion.span
                        variants={blurEmergence}
                        className="font-structural text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-white/55 group-hover:text-white/70 transition-colors duration-500 block"
                      >
                        {layer.label}
                      </motion.span>
                    </div>

                    {/* Accent line */}
                    <div className="md:col-span-1 hidden md:flex items-center justify-center">
                      <div
                        className="w-px h-10 opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                        style={{ background: layer.accentLine }}
                      />
                    </div>

                    {/* Content */}
                    <div className="md:col-span-6">
                      <p className="font-editorial text-[1.05rem] md:text-[1.2rem] text-white/80 group-hover:text-white/92 transition-colors duration-500 leading-[1.4] mb-2">
                        {layer.headline}
                      </p>
                      <p className="font-structural text-[12px] md:text-[13px] text-white/48 group-hover:text-white/62 transition-colors duration-500 leading-[1.72]">
                        {layer.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="md:col-span-2 flex md:justify-end items-center">
                      <span className="font-structural text-[11px] tracking-[0.16em] text-white/30 group-hover:text-white/55 transition-all duration-500 group-hover:translate-x-1">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
