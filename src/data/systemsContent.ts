import type { OrbitalVariant } from '@/components/orbitals/orbitals';

import atmosphereReferenceImage from '@/assets/imagery/sections/works-image-3.webp';
import toneOfVoiceImage from '@/assets/imagery/sections/ei-lightwave-work-card.png';
import worldLoreImage from '@/assets/imagery/sections/ei-planetsilhouette-work-card.png';
import clientOnboardingImage from '@/assets/imagery/sections/nexus-work-card.png';

export const systemsHero = {
  eyebrow: 'Systems',
  title: 'Tools for building atmospheric worlds.',
  italicWord: 'atmospheric worlds',
  description:
    'Creative systems, templates, prompts, and digital products for shaping identity, atmosphere, and narrative coherence.',
  primaryCta: {
    label: 'Browse Systems',
    href: '#systems-categories',
  },
  secondaryCta: {
    label: 'Learn More',
    href: '#featured-system',
  },
} as const;

export interface SystemsCategory {
  title: string;
  description: string;
  icon: OrbitalVariant;
}

export const systemsCategories: SystemsCategory[] = [
  {
    title: 'Identity prompts',
    description:
      'Guided prompts that help you find your voice, clarify direction, and define your world.',
    icon: 'chorusCore',
  },
  {
    title: 'Atmosphere mapping tools',
    description:
      'Tools for analysing, shaping, and refining the emotional tone and sensory atmosphere.',
    icon: 'focusDial',
  },
  {
    title: 'Creative direction workbooks',
    description:
      'Structured workbooks for building coherent visual and narrative direction.',
    icon: 'synthesisStar',
  },
  {
    title: 'Worldbuilding systems',
    description:
      'Systems for designing worlds, lore, symbols, languages, and narrative structures.',
    icon: 'vectorLattice',
  },
  {
    title: 'Digital UI kits',
    description:
      'Premium UI kits and components for building beautiful, atmospheric digital experiences.',
    icon: 'quietAxis',
  },
];

export const featuredSystem = {
  category: 'Identity Prompts',
  title: 'The Identity Clarity Prompt Kit',
  description:
    'A guided set of prompts to help you uncover your essence, shape your identity, and align every element of your brand or project.',
  features: [
    '50+ deep prompts',
    'Identity clarity framework',
    'Reflection + discovery exercises',
    'PDF + Notion compatible',
  ],
  cta: {
    label: 'View Product',
    href: '/contact',
  },
} as const;

export interface LatestSystem {
  title: string;
  description: string;
  price: string;
  image: string;
  imagePosition?: string;
}

export const latestSystems: LatestSystem[] = [
  {
    title: 'Atmosphere Reference Atlas',
    description:
      'A library of atmosphere references to inspire tone, texture, and mood.',
    price: '$29 NZD',
    image: atmosphereReferenceImage,
    imagePosition: 'center',
  },
  {
    title: 'Tone of Voice Builder',
    description:
      'Build a brand voice that feels consistent, natural, and unmistakably yours.',
    price: '$24 NZD',
    image: toneOfVoiceImage,
    imagePosition: '62% center',
  },
  {
    title: 'World Lore Blueprint',
    description:
      'A structured system for building rich, believable, and interconnected worlds.',
    price: '$34 NZD',
    image: worldLoreImage,
    imagePosition: 'center',
  },
  {
    title: 'Client Onboarding Toolkit',
    description:
      'A refined onboarding experience for creative studios and solo creators.',
    price: '$19 NZD',
    image: clientOnboardingImage,
    imagePosition: 'center',
  },
];

export const systemsClosing = {
  title: 'Built for creators who care about depth, clarity, and coherence.',
  description:
    'Tools that support your process — so you can focus on creating what matters.',
  cta: {
    label: 'Join the Circle',
    href: '/contact',
  },
} as const;
