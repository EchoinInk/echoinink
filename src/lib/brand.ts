export const brand = {
  colors: {
    aqua: '#1EC8FF',
    indigo: '#6366F1',
    violet: '#A78BFA',
    pink: '#E879F9',
    inkBlack: '#0F1220',
    deepInk: '#151933',
    paperWhite: '#FFFFFF',
  },
  glow: {
    aqua: 'rgba(30, 200, 255, 0.35)',
    indigo: 'rgba(99, 102, 241, 0.35)',
    violet: 'rgba(167, 139, 250, 0.35)',
    pink: 'rgba(232, 121, 249, 0.35)',
  },
  gradients: {
    hero: 'linear-gradient(135deg, #1EC8FF, #6366F1, #A78BFA, #E879F9)',
    subtle: 'linear-gradient(180deg, rgba(15, 25, 51, 0.6), rgba(15, 18, 32, 0.9))',
  },
  fonts: {
    editorial: "'Recoleta', Georgia, 'Times New Roman', serif",
    structural: "'Suisse Intl', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2.5rem',
    xl: '4rem',
    '2xl': '6rem',
    '3xl': '10rem',
  },
} as const;
