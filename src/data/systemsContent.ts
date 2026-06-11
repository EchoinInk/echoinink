import type { OrbitalVariant } from "@/components/orbitals/orbitals";

import atmosphereReferenceImage from "@/assets/imagery/sections/works-image-3.webp";
import toneOfVoiceImage from "@/assets/imagery/sections/ei-lightwave-work-card.png";
import worldLoreImage from "@/assets/imagery/backgrounds/planet-rings-desktop.webp";
import clientOnboardingImage from "@/assets/imagery/sections/nexus-work-card.png";

export const systemsHero = {
  eyebrow: "Systems",
  title: "Atmosphere, made usable.",
  description:
    "Modular creative infrastructure for shaping identity, atmosphere, direction, and coherent worlds — from focused prompts to connected systems.",
  primaryCta: {
    label: "Explore Systems",
    href: "#systems-categories"
  },
  secondaryCta: {
    label: "Start with a tool",
    href: "#featured-system"
  }
} as const;

export interface SystemsCategory {
  layer: string;
  title: string;
  description: string;
  bestFor: string;
  output: string;
  includes: string[];
  icon: OrbitalVariant;
}

export const systemsCategories: SystemsCategory[] = [
  {
    layer: "Orient",
    title: "Foundation systems",
    description:
      "Find the central signal before building the expression around it.",
    bestFor: "Early ideas, new offers, and unclear positioning",
    output: "A defined identity centre and next-step brief",
    includes: ["Identity prompts", "Clarity frameworks"],
    icon: "chorusCore"
  },
  {
    layer: "Shape",
    title: "Creative tools",
    description:
      "Resolve a focused question around tone, language, reference, or process.",
    bestFor: "Creators resolving one specific direction",
    output: "A usable voice, atmosphere, or decision framework",
    includes: ["Atmosphere mapping", "Voice building"],
    icon: "focusDial"
  },
  {
    layer: "Direct",
    title: "Direction kits",
    description:
      "Turn instinct and references into a coherent visual and narrative direction.",
    bestFor: "Projects ready to align story and expression",
    output: "A connected visual and narrative direction",
    includes: ["Creative workbooks", "Worldbuilding systems"],
    icon: "synthesisStar"
  },
  {
    layer: "Express",
    title: "Output systems",
    description:
      "Carry the direction into usable touchpoints without losing its atmosphere.",
    bestFor: "Teams translating direction into delivery",
    output: "Reusable tools for digital and client touchpoints",
    includes: ["Digital UI kits", "Client toolkits"],
    icon: "vectorLattice"
  }
];

export const featuredSystem = {
  category: "Foundation system",
  title: "The Identity Clarity Prompt Kit",
  description:
    "A guided set of prompts to help you uncover your essence, shape your identity, and align every element of your brand or project.",
  bestFor: "Founders and creators clarifying an early identity",
  output: "A completed clarity framework and creative brief",
  features: [
    "50+ deep prompts",
    "Identity clarity framework",
    "Reflection + discovery exercises",
    "PDF + Notion compatible"
  ],
  format: "Guided digital kit",
  cta: {
    label: "View Product",
    href: "/contact"
  }
} as const;

export interface LatestSystem {
  title: string;
  description: string;
  price: string;
  type: string;
  status: string;
  useCase: string;
  output: string;
  image: string;
  imagePosition?: string;
}

export const latestSystems: LatestSystem[] = [
  {
    title: "Atmosphere Reference Atlas",
    description:
      "A library of atmosphere references to inspire tone, texture, and mood.",
    price: "$29 NZD",
    type: "Reference tool",
    status: "Available",
    useCase: "Finding a shared emotional language",
    output: "A focused atmosphere reference set",
    image: atmosphereReferenceImage,
    imagePosition: "center"
  },
  {
    title: "Tone of Voice Builder",
    description:
      "Build a brand voice that feels consistent, natural, and unmistakably yours.",
    price: "$24 NZD",
    type: "Creative tool",
    status: "Available",
    useCase: "Clarifying how the work should sound",
    output: "Voice principles and usable language",
    image: toneOfVoiceImage,
    imagePosition: "62% center"
  },
  {
    title: "World Lore Blueprint",
    description:
      "A structured system for building rich, believable, and interconnected worlds.",
    price: "$34 NZD",
    type: "Direction kit",
    status: "Available",
    useCase: "Connecting story, symbols, and meaning",
    output: "A coherent world lore framework",
    image: worldLoreImage,
    imagePosition: "center"
  },
  {
    title: "Client Onboarding Toolkit",
    description:
      "A refined onboarding experience for creative studios and solo creators.",
    price: "$19 NZD",
    type: "Output system",
    status: "Available",
    useCase: "Making the first client touchpoint clear",
    output: "A reusable onboarding experience",
    image: clientOnboardingImage,
    imagePosition: "center"
  }
];

export const systemsUseCases = [
  {
    audience: "Founders",
    need: "Clarify the identity before investing in expression.",
    fit: "Foundation systems + direction kits"
  },
  {
    audience: "Artists & writers",
    need: "Give an emerging world a stronger internal logic.",
    fit: "Creative tools + worldbuilding systems"
  },
  {
    audience: "Creative studios",
    need: "Create repeatable structure without making the work generic.",
    fit: "Direction kits + output systems"
  },
  {
    audience: "Independent makers",
    need: "Move from scattered references to a coherent next step.",
    fit: "Prompts + focused modules"
  }
] as const;

export const systemPathway: Array<{
  title: string;
  description: string;
  icon: OrbitalVariant;
}> = [
  {
    title: "Session",
    description: "Find the signal and name what needs to become clear.",
    icon: "signalBridge"
  },
  {
    title: "System",
    description: "Use prompts, tools, and frameworks to make the signal usable.",
    icon: "focusDial"
  },
  {
    title: "Identity Kit",
    description: "Translate the direction into a coherent visual and verbal language.",
    icon: "prismMirror"
  },
  {
    title: "World",
    description: "Carry the identity into an atmosphere people can recognise and enter.",
    icon: "haloGate"
  }
];

export const systemsClosing = {
  title: "Built for creators who care about depth, clarity, and coherence.",
  description:
    "Choose a focused tool, begin with a session, or shape a larger system around the work.",
  cta: {
    label: "Explore the right system",
    href: "/contact"
  }
} as const;
