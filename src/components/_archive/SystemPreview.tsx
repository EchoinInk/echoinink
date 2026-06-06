import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SystemGrid } from './SystemGrid';
import { driftUp, staggerContainer, STAGGER, VIEWPORT } from '@/lib/motion-cinematic';
import type { SystemCardProps } from '../cards/SystemCard';

// ═══════════════════════════════════════════════════════════════
// SYSTEM PREVIEW — The Echo in Ink Systems grid section
// Frameworks, cognitive tools, UI systems, GPT companions
// ═══════════════════════════════════════════════════════════════

const systems: SystemCardProps[] = [
  {
    title: 'Identity Canvas',
    description:
      'A structured framework for mapping emotional and visual identity. Built for founders translating inner meaning into outer form.',
    category: 'Framework',
    status: 'available',
    accent: 'rgb(227, 216, 253 / 0.07)',
  },
  {
    title: 'Founder Reflection Workbook',
    description:
      'A guided reflective practice for founders navigating becoming. Questions that reveal what wants to emerge.',
    category: 'Cognitive Tool',
    status: 'available',
    accent: 'rgb(221, 18, 203 / 0.06)',
  },
  {
    title: 'Narrative Tension Map',
    description:
      'A diagnostic tool for identifying where story, identity, and audience drift out of coherence.',
    category: 'Framework',
    status: 'available',
    accent: 'rgb(73, 133, 253 / 0.06)',
  },
  {
    title: 'Atmosphere Direction System',
    description:
      'A visual and tonal system for directing atmospheric quality across brand touchpoints and digital environments.',
    category: 'UI System',
    status: 'soon',
    accent: 'rgb(11, 13, 42 / 0.07)',
  },
  {
    title: 'Identity GPT',
    description:
      'An intelligent companion for brand identity exploration. Trained on the Echo in Ink method for emotionally resonant work.',
    category: 'GPT System',
    status: 'soon',
    accent: 'rgb(227, 216, 253 / 0.06)',
  },
  {
    title: 'Creative Direction GPT',
    description:
      'A generative thinking partner for creative directors and founders navigating conceptual decisions with clarity.',
    category: 'GPT System',
    status: 'soon',
    accent: 'rgb(113, 7, 234 / 0.07)',
  },
];

export function SystemPreview() {
  return (
    <Section spacing="sm" className="relative overflow-hidden">
      {/* Soft atmospheric layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 35% at 50% 40%, rgb(73, 133, 253 / 0.025) 0%, transparent 60%)',
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
          <motion.div variants={driftUp} className="mb-8 md:mb-12">
            <span className="ei-type-label ei-text-space-md block">
              Systems
            </span>
            <h2 className="ei-type-section">
              Tools for building worlds.
            </h2>
            <p className="ei-section-description max-w-[46ch] mt-3">
              Structured frameworks and intelligent tools for identity, narrative, and atmospheric design.
            </p>
          </motion.div>

          {/* Top editorial divider */}
          <motion.div
            variants={driftUp}
            className="w-full h-px mb-8 md:mb-10"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgb(73, 133, 253 / 0.12) 20%, rgb(113, 7, 234 / 0.10) 50%, rgb(221, 18, 203 / 0.12) 80%, transparent 100%)',
            }}
          />

          {/* Systems grid */}
          <SystemGrid systems={systems} columns={3} />
        </motion.div>
      </Container>
    </Section>
  );
}
