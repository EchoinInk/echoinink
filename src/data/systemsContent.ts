import type { SystemCardProps } from '@/components/cards/SystemCard';

export const systemsHero = {
  eyebrow: 'Systems',
  title: 'Tools for building atmospheric worlds.',
  description:
    'Creative systems, templates, prompts, and digital products for shaping identity, atmosphere, and narrative coherence.',
};

export const systemsCategories = [
  'Identity prompts',
  'Atmosphere mapping tools',
  'Creative direction workbooks',
  'Worldbuilding systems',
  'Digital UI kits',
];

export const systemsGrid: SystemCardProps[] = [
  {
    title: 'Identity Canvas',
    description:
      'A structured framework for mapping emotional and visual identity. Built for founders translating inner meaning into outer form.',
    category: 'Framework',
    status: 'soon',
  },
  {
    title: 'Founder Reflection',
    description: 'A guided system for clarity, identity, and next alignment.',
    category: 'Reflective Tool',
    status: 'soon',
  },
  {
    title: 'Narrative Architect',
    description: 'Build stories that hold meaning, tension, and transformation.',
    category: 'Framework',
    status: 'soon',
  },
  {
    title: 'Identity GPT',
    description:
      'An intelligent companion for brand identity exploration. Trained on the Echo in Ink method for emotionally resonant work.',
    category: 'GPT System',
    status: 'soon',
  },
  {
    title: 'Atmosphere UI Kit',
    description: 'Cinematic UI components for immersive digital worlds.',
    category: 'UI System',
    status: 'soon',
  },
];
