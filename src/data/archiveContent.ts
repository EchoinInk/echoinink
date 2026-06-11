export const archiveHero = {
  eyebrow: 'Archive',
  titleLines: ['Thoughts.', 'Notes.', 'Worlds.'],
  italicLine: 'Worlds.',
  description:
    'A living archive of philosophy, process, emotional design, atmosphere, and creative worldbuilding.',
};

export const archiveFilters = [
  'All',
  'Philosophy',
  'Notes',
  'Worldbuilding',
  'Case Fragments',
  'Experiments',
  'Systems',
] as const;

export const archiveSortOptions = ['Latest'] as const;
export const archiveIndexSortOptions = ['Latest', 'Oldest', 'Title'] as const;

export const archiveFeatured = {
  label: 'Featured Essay',
  category: 'Philosophy',
  readTime: '12 min read',
  title: 'Atmosphere is information.',
  emphasis: 'information.',
  excerpt:
    'Atmosphere is not decoration. It is the first data your audience receives. Before words, before identity, before logic — there is feeling.',
  action: 'Read Essay',
  href: '/archive/atmosphere-is-information',
};

export const archiveNotes = [
  {
    id: 'identity-is-not-decoration',
    category: 'Notes',
    readTime: '6 min read',
    title: 'Identity is not decoration.',
    emphasis: 'decoration.',
    excerpt:
      'Your identity should carry the weight of meaning — not just the weight of visual preference.',
    action: 'Read Note',
    thread: 'Identity',
  },
  {
    id: 'the-feeling-is-the-product',
    category: 'Notes',
    readTime: '5 min read',
    title: 'The feeling is the product.',
    emphasis: 'product.',
    excerpt:
      'You are not selling features. You are transmitting a state. Everything else is in service of that.',
    action: 'Read Note',
    thread: 'Atmosphere',
  },
  {
    id: 'designing-for-memory',
    category: 'Notes',
    readTime: '7 min read',
    title: 'Designing for memory.',
    emphasis: 'memory.',
    excerpt:
      'Memory is not about what people see. It’s about what they feel, what lingers, and what repeats.',
    action: 'Read Note',
    thread: 'Memory',
  },
] as const;

export const archiveIndex = [
  {
    title: 'Why coherence matters more than volume.',
    descriptor: 'On restraint, recognition, and the discipline of a clear signal.',
    category: 'Philosophy',
    readTime: '8 min read',
    date: 'May 12, 2025',
    icon: 'synthesisStar',
    href: '/archive/map',
  },
  {
    title: 'The invisible architecture of a world.',
    descriptor: 'The structures an audience feels before they can name them.',
    category: 'Worldbuilding',
    readTime: '10 min read',
    date: 'May 9, 2025',
    icon: 'axiomRing',
    href: '/archive/map',
  },
  {
    title: 'Process is poetry in motion.',
    descriptor: 'A note on method, rhythm, and leaving room for discovery.',
    category: 'Notes',
    readTime: '6 min read',
    date: 'May 6, 2025',
    icon: 'innerTide',
    href: '/archive/notes',
  },
  {
    title: 'Case fragment: Obsidian.',
    descriptor: 'A study in depth, restraint, and material atmosphere.',
    category: 'Case Fragments',
    readTime: '4 min read',
    date: 'May 3, 2025',
    icon: 'vectorLattice',
    href: '/archive/map',
  },
  {
    title: 'Systems thinking for creative clarity.',
    descriptor: 'How connected decisions create a more coherent whole.',
    category: 'Systems',
    readTime: '9 min read',
    date: 'Apr 28, 2025',
    icon: 'signalBridge',
    href: '/archive/map',
  },
  {
    title: 'Light, contrast, and emotional pacing.',
    descriptor: 'An experiment in directing attention through tonal rhythm.',
    category: 'Experiments',
    readTime: '7 min read',
    date: 'Apr 24, 2025',
    icon: 'haloGate',
    href: '/archive/map',
  },
] as const;

export const archivePhilosophy = {
  title: 'Every entry is a point in a larger field.',
  description:
    'The archive is less a timeline than a map: recurring questions around atmosphere, identity, systems, story, signal, and worldbuilding.',
  themes: ['Atmosphere', 'Identity', 'Systems', 'Story', 'Signal', 'Worldbuilding'],
} as const;

export const archiveCta = {
  title: 'The archive grows. Meaning stays.',
  description: 'Stay connected to new thoughts, notes, and worlds as they are added.',
  action: 'Join the Archive',
  href: '/contact',
};

export type ArchiveFilter = (typeof archiveFilters)[number];
export type ArchiveSort = (typeof archiveSortOptions)[number];
export type ArchiveIndexSort = (typeof archiveIndexSortOptions)[number];

export type ArchiveIndexIcon = (typeof archiveIndex)[number]['icon'];
export type ArchiveIndexEntry = (typeof archiveIndex)[number];
