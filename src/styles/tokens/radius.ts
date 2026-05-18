/**
 * Border radius tokens
 * Consistent corner rounding
 */
export const radius = {
  none: '0',
  sm: '0.25rem',      // 4px - subtle
  md: '0.5rem',       // 8px - cards
  lg: '0.75rem',      // 12px - panels
  xl: '1rem',         // 16px - large cards
  full: '9999px',     // Pill buttons
} as const;

/**
 * Radius class mappings
 */
export const radiusClass = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  full: 'rounded-full',
} as const;
