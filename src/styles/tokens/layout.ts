/**
 * Layout tokens
 * Container widths and content constraints
 */
export const layout = {
  // Container max-widths
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
  },
  
  // Content max-widths for readability
  content: {
    narrow: '28rem',    // 448px - captions
    base: '44rem',      // 704px - body text
    wide: '52rem',      // 832px - lead text
    xl: '58rem',        // 928px - emphasis
    '2xl': '68rem',     // 1088px - hero
  },
  
  // Character counts for text width
  ch: {
    tight: '44ch',      // Compact body
    base: '50ch',       // Standard body
    wide: '55ch',       // Loose body
    xl: '58ch',         // Emphasis
    '2xl': '60ch',      // Maximum readability
  },
} as const;

/**
 * Layout class mappings
 */
export const layoutClass = {
  container: {
    sm: 'max-w-[640px]',
    md: 'max-w-[768px]',
    lg: 'max-w-[1024px]',
    xl: 'max-w-[1280px]',
    '2xl': 'max-w-[1440px]',
  },
  content: {
    narrow: 'max-w-[28rem]',
    base: 'max-w-[44rem]',
    wide: 'max-w-[52rem]',
    xl: 'max-w-[58rem]',
    '2xl': 'max-w-[68rem]',
  },
} as const;
