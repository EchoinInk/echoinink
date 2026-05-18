/**
 * Shadow and blur tokens
 * Atmospheric glow effects
 */
export const shadows = {
  // Blur values for atmospheric effects
  blur: {
    subtle: '8px',        // Backdrop blur
    soft: '12px',         // Button glow
    medium: '18px',       // Accent glow
    large: '24px',        // Panel glow
    xl: '36px',           // Section glow
    xxl: '48px',          // Hero glow
    atmospheric: '80px', // Background bloom
    heavy: '100px',       // Deep atmosphere
    extreme: '110px',     // Maximum bloom
  },
  
  // Glow opacity values
  glowOpacity: {
    subtle: '0.04',
    soft: '0.055',
    medium: '0.07',
    strong: '0.11',
    intense: '0.16',
  },
} as const;

/**
 * Shadow class mappings
 */
export const shadowClass = {
  blur: {
    subtle: 'blur-[8px]',
    soft: 'blur-[12px]',
    medium: 'blur-[18px]',
    large: 'blur-[24px]',
    xl: 'blur-[36px]',
    xxl: 'blur-[48px]',
    atmospheric: 'blur-[80px]',
    heavy: 'blur-[100px]',
    extreme: 'blur-[110px]',
  },
} as const;
