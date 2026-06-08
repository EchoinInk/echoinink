import lumoFeatured from '@/assets/imagery/sections/lumo-featured-bg.webp';
import auroraImage from '@/assets/imagery/sections/works-image-6.webp';
import obsidianImage from '@/assets/imagery/sections/works-image-5.webp';
import verdeImage from '@/assets/imagery/sections/works-image-4.webp';
import nexusImage from '@/assets/imagery/sections/works-image-1.webp';

export type ProjectVariant = 'large' | 'small';

export type ProjectTag =
  | 'Identity Systems'
  | 'Digital Experiences'
  | 'Narrative Worlds'
  | 'UI Systems';

export type ProjectStatus =
  | 'Case Study'
  | 'Identity Concept'
  | 'Concept Prototype'
  | 'System Prototype';

export interface WorkProject {
  title: string;
  category: string;
  description: string;
  image: string;
  href?: string;
  tags: ProjectTag[];
  variant: ProjectVariant;
  featured?: boolean;
  status?: ProjectStatus;
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
    status: 'Case Study',
  },
  {
    title: 'Aurora Payments',
    category: 'Fintech Identity',
    description:
      'A modern identity for a global fintech platform redefining seamless transactions.',
    image: auroraImage,
    tags: ['Identity Systems'],
    variant: 'small',
    status: 'Identity Concept',
  },
  {
    title: 'Obsidian',
    category: 'Brand Experience',
    description:
      'A next-generation web experience for a private investment collective focused on long-term vision.',
    image: obsidianImage,
    tags: ['Digital Experiences'],
    variant: 'small',
    status: 'Concept Prototype',
  },
  {
    title: 'Verde',
    category: 'Brand Identity',
    description:
      'A sustainable luxury skincare brand with a focus on purity, nature, and timeless elegance.',
    image: verdeImage,
    tags: ['Identity Systems'],
    variant: 'small',
    status: 'Concept Prototype',
  },
  {
    title: 'Nexus Design System',
    category: 'System Design',
    description:
      'A modular UI system built for scalability, clarity, and beautiful products.',
    image: nexusImage,
    tags: ['UI Systems'],
    variant: 'small',
    status: 'System Prototype',
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
