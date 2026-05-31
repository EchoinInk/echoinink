import lumoFeatured from '@/assets/imagery/sections/lumo-featured-bg.png';
import auroraImage from '@/assets/imagery/sections/ei-lightwave-work-card.png';
import obsidianImage from '@/assets/imagery/sections/ei-planetsilhouette-work-card.png';
import verdeImage from '@/assets/imagery/sections/placeholder-works-card.png';
import nexusImage from '@/assets/imagery/sections/nexus-work-card.png';

export type ProjectVariant = 'large' | 'small';

export type ProjectTag =
  | 'Identity Systems'
  | 'Digital Experiences'
  | 'Narrative Worlds'
  | 'UI Systems';

export interface WorkProject {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  tags: ProjectTag[];
  variant: ProjectVariant;
  featured?: boolean;
}

export const worksProjects: WorkProject[] = [
  {
    title: 'LUMO',
    category: 'Identity + Digital Experience',
    description:
      'An emotionally intelligent identity and web experience for a platform built to support overwhelmed humans.',
    image: lumoFeatured,
    href: '/works/lumo',
    tags: ['Identity Systems', 'Digital Experiences'],
    variant: 'large',
    featured: true,
  },
  {
    title: 'Aurora Payments',
    category: 'Brand Identity',
    description:
      'A modern identity for a global fintech platform redefining seamless transactions.',
    image: auroraImage,
    href: '/works/aurora',
    tags: ['Identity Systems'],
    variant: 'large',
  },
  {
    title: 'Obsidian',
    category: 'Digital Experience',
    description:
      'A next-generation web experience for a private investment collective focused on long-term vision.',
    image: obsidianImage,
    href: '/works/obsidian',
    tags: ['Digital Experiences'],
    variant: 'small',
  },
  {
    title: 'Verde',
    category: 'Brand Identity',
    description:
      'A sustainable luxury skincare brand with a focus on purity, nature, and timeless elegance.',
    image: verdeImage,
    href: '/works/verde',
    tags: ['Identity Systems'],
    variant: 'small',
  },
  {
    title: 'Nexus Design System',
    category: 'UI System',
    description:
      'A modular UI system built for scalability, clarity, and beautiful products.',
    image: nexusImage,
    href: '/works/nexus',
    tags: ['UI Systems'],
    variant: 'small',
  },
];

export const workFilters = [
  'All Works',
  'Identity Systems',
  'Digital Experiences',
  'Narrative Worlds',
  'UI Systems',
] as const;

export type WorkFilter = (typeof workFilters)[number];

export const workSortOptions = ['Latest', 'Featured', 'A–Z'] as const;

export type WorkSort = (typeof workSortOptions)[number];
