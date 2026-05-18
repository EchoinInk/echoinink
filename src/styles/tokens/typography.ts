/**
 * Typography tokens
 * Semantic type scale for consistent hierarchy
 */
export const typography = {
  // Font sizes - editorial (Recoleta)
  editorial: {
    display: '4.8rem',      // Hero headlines
    hero: '3.6rem',         // Page hero
    h1: '2.4rem',           // Main headings
    h2: '1.9rem',           // Section headings
    h3: '1.5rem',           // Subheadings
    h4: '1.25rem',          // Card titles
    body: '1.15rem',        // Editorial body
  },
  
  // Font sizes - structural (Suisse Intl)
  structural: {
    xs: '0.625rem',         // 10px - labels, metadata
    sm: '0.75rem',          // 12px - small UI
    base: '0.8125rem',      // 13px - body base
    md: '0.875rem',         // 14px - body emphasis
    lg: '0.9375rem',        // 15px - lead text
    xl: '1rem',             // 16px - prominent
  },
  
  // Letter spacing - tracking
  tracking: {
    tight: '0.2em',         // 0.2em - buttons
    normal: '0.22em',       // 0.22em - CTAs
    wide: '0.28em',         // 0.28em - labels
    wider: '0.35em',        // 0.35em - metadata
    widest: '0.38em',       // 0.38em - eyebrows
  },
  
  // Line height
  leading: {
    tight: '1.1',           // Headlines
    normal: '1.2',          // Subheadings
    relaxed: '1.3',         // Emphasis text
    loose: '1.85',          // Editorial
    loosest: '1.95',        // Body text
  },
  
  // Letter spacing adjustment (negative)
  letterSpacing: {
    tight: '-0.018em',      // Hero headlines
    normal: '-0.012em',     // Large headings
    relaxed: '-0.008em',    // Medium headings
    base: '-0.006em',       // Small headings
  },
} as const;

/**
 * Typography class mappings
 * For use in className props
 */
export const typographyClass = {
  editorial: {
    display: 'text-[4.8rem]',
    hero: 'text-[3.6rem]',
    h1: 'text-[2.4rem]',
    h2: 'text-[1.9rem]',
    h3: 'text-[1.5rem]',
    h4: 'text-[1.25rem]',
    body: 'text-[1.15rem]',
  },
  structural: {
    xs: 'text-[10px]',
    sm: 'text-[12px]',
    base: 'text-[13px]',
    md: 'text-[14px]',
    lg: 'text-[15px]',
    xl: 'text-[16px]',
  },
  tracking: {
    tight: 'tracking-[0.2em]',
    normal: 'tracking-[0.22em]',
    wide: 'tracking-[0.28em]',
    wider: 'tracking-[0.35em]',
    widest: 'tracking-[0.38em]',
  },
  leading: {
    tight: 'leading-[1.1]',
    normal: 'leading-[1.2]',
    relaxed: 'leading-[1.3]',
    loose: 'leading-[1.85]',
    loosest: 'leading-[1.95]',
  },
} as const;
