export const identityHero = {
  eyebrow: 'IDENTITY',
  title: 'Every world begins with a feeling.',
  italicWord: 'feeling',
  subheading: 'Atmospheric Identity Direction',
  body: [
    'Before a name. Before a logo. Before the visuals.',
    'Identity begins as a feeling — an atmosphere waiting to be understood, shaped, and expressed.',
    'I translate that feeling into visual language, rhythm, and voice.',
  ],
  extendedBody: [
    'Before a brand becomes visual, it has a temperature, a rhythm, a voice, and a world it belongs to.',
    'Atmospheric Identity Kits translate the emotional shape of your work into a clear creative direction — so everything you make begins from the same centre.',
    'So your work moves with coherence — and feels unmistakably yours.',
  ],
  primaryCta: { label: 'Begin an Identity Kit', href: '/contact' },
  secondaryCta: { label: 'View the process', href: '#process' },
  atmosphereRail: ['Atmosphere', 'Language', 'Rhythm', 'Voice', 'Presence'],
};

export const identityAudience = {
  eyebrow: 'For the creator who can feel the world, but cannot yet see it clearly.',
  intro: [
    'Some creators begin with clarity. Others begin with a feeling. This is for the second kind.',
    'For founders, artists, writers, makers, and independent creatives building something with emotional weight — but still seeking clarity around how it should look, sound, and feel.',
  ],
};

export const identityUseCases = [
  'You are starting a new project and need its aesthetic direction.',
  'Your current brand feels scattered or generic.',
  'You know the emotion, but not the visual language.',
  'You need a palette, type direction, tone, and mood before building.',
  'You want the visuals, tone, and feeling to finally belong to the same world.',
  'You want your work to feel authored, not assembled.',
];

export const identityDeliverables = {
  heading: 'A compact identity atmosphere.',
  closing:
    'Each piece is small on purpose — together they form the emotional architecture of your world.',
  items: [
    {
      title: 'Palette',
      description:
        'A refined colour direction designed around emotional tone, not trend.',
      motif: 'palette' as const,
    },
    {
      title: 'Typography pairing',
      description:
        'A type direction that gives your world structure, softness, tension, or restraint.',
      motif: 'type' as const,
    },
    {
      title: 'Moodboard',
      description:
        'A cinematic visual field showing texture, light, reference, rhythm, and atmosphere.',
      motif: 'moodboard' as const,
    },
    {
      title: 'Tone guide',
      description: 'A short language system defining how your world should speak.',
      motif: 'tone' as const,
    },
    {
      title: 'Micro-manifesto',
      description: 'A compact written piece that captures the soul of the project.',
      motif: 'manifesto' as const,
    },
    {
      title: 'Visual direction notes',
      description:
        'Guidance on imagery, layout, contrast, pacing, and emotional presence.',
      motif: 'notes' as const,
    },
    {
      title: 'The feeling',
      description:
        'The invisible centre: what people should sense before they understand.',
      motif: 'feeling' as const,
    },
  ],
};

export const identityProcess = {
  heading: 'The process is quiet, precise, and intuitive.',
  closing:
    'The result is a direction you can build from — without second-guessing the feeling.',
  steps: [
    {
      number: '01',
      title: 'Intake',
      description:
        'You share the project, its emotional intent, audience, references, and what feels misaligned.',
    },
    {
      number: '02',
      title: 'Reading the atmosphere',
      description:
        'I look for the emotional pattern beneath the visuals: the tone, tension, world, rhythm, and signal.',
    },
    {
      number: '03',
      title: 'Direction building',
      description:
        'The identity kit is shaped through palette, typography, mood, language, and visual notes.',
    },
    {
      number: '04',
      title: 'Delivery',
      description:
        'You receive a concise, beautiful direction document you can use for your website, brand, product, visuals, or creative system.',
    },
  ],
};

export const identityTransformation = {
  heading: 'From scattered references to a coherent world.',
  divider: 'Identity is not created — it is clarified.',
};

export const identityPricing = {
  eyebrow: 'Investment',
  heading: 'A starting point for emotional clarity.',
  intro:
    'Atmospheric Identity Kits are designed as focused first-step creative direction pieces. They are compact enough to move quickly, but deep enough to give your project a real creative centre.',
  anchor: 'The goal is simple: give your work a centre to return to.',
  tiers: [
    {
      name: 'Small Direction Kit',
      price: '$150',
      currency: 'NZD',
      description: 'For early ideas, personal projects, or small creative shifts.',
      summary: 'A focused identity atmosphere to align your vision and guide your next steps.',
      features: ['Palette direction', 'Typography pairing', 'Moodboard', 'Tone guide'],
      cta: { label: 'Start with clarity', href: '/contact' },
    },
    {
      name: 'Full Atmospheric Kit',
      price: '$300-$400',
      currency: 'NZD',
      description:
        'For projects needing a complete emotional and visual foundation.',
      summary: 'A complete identity direction with expanded clarity, depth, and future-facing guidance.',
      features: [
        'Everything in the Small Kit',
        'Micro-manifesto',
        'Visual direction notes',
        'Delivery within 10 business days',
      ],
      cta: { label: 'Build the full world', href: '/contact' },
      featured: true,
    },
  ],
};

export const identityClosing = {
  heading: 'Give the work a world to belong to.',
  subline: 'Identity begins here — quietly, clearly, and with intention.',
  cta: { label: 'Begin an Identity Kit', href: '/contact' },
};
