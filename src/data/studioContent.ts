import type { OrbitalVariant } from '@/components/ui/OrbitalVisual';

export interface PhilosophyItem {
  title: string;
  description: string;
  icon: OrbitalVariant;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: OrbitalVariant;
}

export const originCopy = {
  label: '01 — Origin',
  heading: 'Echo in Ink began quietly — not as a plan, but as a response.',
  paragraphs: [
    'A fatigue with work that looked polished but felt hollow. With brands performing coherence instead of embodying it. With design reduced to aesthetics instead of emotional structure.',
    'This studio formed as a counter-space. Where identity is approached with care. Where atmosphere carries meaning. Where clarity does not require self-erasure.',
  ],
};

export const studioQuote =
  'Not creating identity. Protecting what is true from being lost in expression.';

export const philosophyItems: PhilosophyItem[] = [
  {
    title: 'Emotional Truth is Strategy',
    description:
      'If the emotional centre is unclear, everything built around it fractures. The work begins by finding what is actually true beneath expression.',
    icon: 'prism',
  },
  {
    title: 'Identity is Relational',
    description:
      'Not a system of assets. The experience of being understood. The work is not to invent identity — but to translate what already exists.',
    icon: 'nodes',
  },
  {
    title: 'Atmosphere is Information',
    description:
      'Nothing is neutral. Spacing, rhythm, motion, silence — all carry meaning.',
    icon: 'pulse',
  },
];

export const valueItems: ValueItem[] = [
  {
    title: 'Depth over speed',
    description: 'We favour understanding over urgency.',
    icon: 'pulse',
  },
  {
    title: 'Coherence over volume',
    description: 'Fewer elements, held with conviction.',
    icon: 'lens',
  },
  {
    title: 'Meaning over performance',
    description: 'Every visual choice should carry intention.',
    icon: 'lattice',
  },
  {
    title: 'Restraint over excess',
    description: 'Silence and space are part of the design.',
    icon: 'veil',
  },
  {
    title: 'Truth over optimisation',
    description: 'What is real will always read better than what is clever.',
    icon: 'ember',
  },
];
