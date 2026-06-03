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
  number: '01',
  label: 'Origin',
  heading: 'Echo in Ink began quietly —\nnot as a plan, but as a response.',
  paragraphs: [
    'There was a fatigue with work that looked polished but felt hollow. With brands performing coherence instead of embodying it. With design reduced to aesthetics instead of the emotional structure that gives identity its depth. Echo in Ink began as a response to that gap — to the sense that something essential was being lost beneath the surface.',
    'The studio formed as a counter-space. A place where identity is approached with care, where atmosphere carries meaning, and where clarity never requires self-erasure. The work here exists to protect what is true, to translate what already lives within a brand, and to create worlds that feel grounded rather than performed.',
  ],
};

export const studioQuoteLines = [
  'Not creating identity.',
  'Protecting what is true',
  'from being lost in expression.',
];

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
      'Nothing is neutral. Spacing, rhythm, motion and silence all carry meaning. Atmosphere shapes how a message is received.',
    icon: 'pulse',
  },
];

export const valueItems: ValueItem[] = [
  {
    title: 'Depth over speed',
    description: 'We move with clarity over velocity. Depth requires space.',
    icon: 'pulse',
  },
  {
    title: 'Coherence over volume',
    description: 'We build fewer things that fit together more powerfully.',
    icon: 'lens',
  },
  {
    title: 'Meaning over performance',
    description: 'We create from inner alignment, not external metrics.',
    icon: 'lattice',
  },
  {
    title: 'Restraint over excess',
    description: 'We remove more \nthan we add to \nreach clarity.',
    icon: 'veil',
  },
  {
    title: 'Truth over optimisation',
    description: 'We protect integrity over trends, algorithms, and easy wins.',
    icon: 'ember',
  },
];
