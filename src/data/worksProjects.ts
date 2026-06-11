import lumoFeatured from '@/assets/imagery/sections/lumo-featured-bg.webp';
import auroraImage from '@/assets/imagery/sections/works-image-6.webp';
import obsidianImage from '@/assets/imagery/sections/works-image-5.webp';
import verdeImage from '@/assets/imagery/sections/works-image-4.webp';
import nexusImage from '@/assets/imagery/sections/works-image-1.webp';

export type ProjectPresentation = 'study' | 'fragment';

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
  proofLine: string;
  challenge: string;
  scope: string;
  output: string;
  result: string;
  image: string;
  href?: string;
  tags: ProjectTag[];
  presentation: ProjectPresentation;
  featured?: boolean;
  status?: ProjectStatus;
}

export const worksProjects: WorkProject[] = [
  {
    title: 'LUMO',
    category: 'Identity + Digital Experience',
    description:
      'An emotionally intelligent identity and web experience for a platform built to support overwhelmed humans.',
    proofLine:
      'A calm, coherent product world that turns emotional intelligence into a usable digital experience.',
    challenge: 'Translate emotional safety into a clear, credible product world.',
    scope: 'Identity system, digital atmosphere, and interface direction.',
    output: 'A connected visual language and modular experience system.',
    result: 'A calmer, more recognisable expression of Lumo across its core touchpoints.',
    image: lumoFeatured,
    href: '/works/lumo',
    tags: ['Identity Systems', 'Digital Experiences'],
    presentation: 'study',
    featured: true,
    status: 'Case Study',
  },
  {
    title: 'Aurora Payments',
    category: 'Fintech Identity',
    description:
      'A modern identity for a global fintech platform redefining seamless transactions.',
    proofLine: 'Clarity and trust shaped into a distinctive financial identity.',
    challenge: 'Make seamless global transactions feel clear, modern, and trustworthy.',
    scope: 'Identity concept and visual direction.',
    output: 'A focused fintech identity concept with a distinct trust signal.',
    result: 'A concept demonstrating how clarity and confidence can coexist without visual noise.',
    image: auroraImage,
    tags: ['Identity Systems'],
    presentation: 'study',
    status: 'Identity Concept',
  },
  {
    title: 'Obsidian',
    category: 'Brand Experience',
    description:
      'A next-generation web experience for a private investment collective focused on long-term vision.',
    proofLine: 'A restrained digital presence designed to make long-term vision feel tangible.',
    challenge: 'Express privacy, patience, and long-term vision without financial clichés.',
    scope: 'Brand experience concept and web direction.',
    output: 'A restrained digital prototype with an editorial investment atmosphere.',
    result: 'A concept demonstrating a quieter, more tangible expression of long-term value.',
    image: obsidianImage,
    tags: ['Digital Experiences'],
    presentation: 'study',
    status: 'Concept Prototype',
  },
  {
    title: 'Verde',
    category: 'Brand Identity',
    description:
      'A sustainable luxury skincare brand with a focus on purity, nature, and timeless elegance.',
    proofLine: 'A quiet luxury identity built around material restraint and enduring recognition.',
    challenge: 'Connect sustainability and luxury without relying on familiar category signals.',
    scope: 'Brand identity concept.',
    output: 'A material-led visual direction for a premium skincare world.',
    result: 'A concept demonstrating quiet recognition through restraint and natural texture.',
    image: verdeImage,
    tags: ['Identity Systems'],
    presentation: 'fragment',
    status: 'Concept Prototype',
  },
  {
    title: 'Nexus Design System',
    category: 'System Design',
    description:
      'A modular UI system built for scalability, clarity, and beautiful products.',
    proofLine: 'A reusable interface language that keeps product expression coherent at scale.',
    challenge: 'Create consistency across a growing interface without flattening its character.',
    scope: 'UI system prototype.',
    output: 'A modular component and interaction language.',
    result: 'A prototype demonstrating how reusable patterns can support clarity at scale.',
    image: nexusImage,
    tags: ['UI Systems'],
    presentation: 'fragment',
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
