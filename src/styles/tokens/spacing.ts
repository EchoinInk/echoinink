/**
 * Spacing tokens
 * Semantic spacing scale for consistent rhythm
 */
export const spacing = {
  // Micro spacing - tight elements
  micro: '0.25rem',   // 4px
  xs: '0.5rem',       // 8px
  sm: '0.75rem',      // 12px
  
  // Base spacing - standard rhythm
  base: '1rem',       // 16px
  md: '1.5rem',       // 24px
  lg: '2rem',         // 32px
  xl: '2.5rem',       // 40px
  
  // Section spacing - vertical rhythm
  section: '3rem',    // 48px
  sectionLg: '4rem',  // 64px
  sectionXl: '5rem',  // 80px
  
  // Component spacing
  gapSm: '0.75rem',   // 12px
  gapMd: '1rem',      // 16px
  gapLg: '1.5rem',    // 24px
  gapXl: '2.5rem',    // 40px
  
  // Text spacing
  textTight: '0.5rem',   // 8px
  textBase: '1rem',      // 16px
  textLoose: '1.5rem',   // 24px
  textXLoose: '2rem',    // 32px
} as const;

/**
 * Spacing scale mapping to Tailwind classes
 * For use in className props
 */
export const spacingClass = {
  micro: 'gap-1 p-1 m-1',
  xs: 'gap-2 p-2 m-2',
  sm: 'gap-3 p-3 m-3',
  base: 'gap-4 p-4 m-4',
  md: 'gap-6 p-6 m-6',
  lg: 'gap-8 p-8 m-8',
  xl: 'gap-10 p-10 m-10',
  section: 'py-12',
  sectionLg: 'py-16',
  sectionXl: 'py-20',
} as const;
