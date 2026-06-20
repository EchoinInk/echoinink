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
  disciplines: string[];
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
    category: 'Emotionally supportive companion app concept',
    disciplines: ['Identity System', 'Digital Experience', 'Emotional UX'],
    description:
      'An emotionally supportive companion app concept shaped around gentle planning, reduced cognitive load, and emotionally safe interaction.',
    proofLine:
      'Turning an emotionally supportive product concept into a calmer, more coherent digital world for overwhelmed humans.',
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
    category: 'Premium financial identity system',
    disciplines: ['Identity System', 'Visual Direction'],
    description:
      'For a next-generation payments platform seeking a clearer, more credible financial presence.',
    proofLine:
      'Clarifying positioning, architecture, and trust signals for a more confident financial experience.',
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
    category: 'Private investment digital experience concept',
    disciplines: ['Digital Experience', 'Narrative Architecture', 'Art Direction'],
    description:
      'For a private investment collective needing a more coherent digital presence for long-term, trust-led work.',
    proofLine:
      'Creating a more confident digital presence built around clarity, patience, and quiet confidence.',
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
    category: 'Luxury skincare identity concept',
    disciplines: ['Brand Identity', 'Material Direction'],
    description:
      'A skincare identity concept balancing natural purity with quiet luxury and long-term recognition.',
    proofLine:
      'Building a more coherent identity for a skincare concept shaped by restraint, texture, and lasting recognition.',
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
    category: 'Scalable UI system prototype',
    disciplines: ['UI System', 'Interaction Patterns'],
    description:
      'A modular interface system prototype built to keep digital products coherent as they expand.',
    proofLine:
      'Turning an early design system into a clearer interface language teams can reuse with confidence.',
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
