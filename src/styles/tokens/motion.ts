/**
 * Motion tokens
 * Consistent animation timing and easing
 */
export const motion = {
  // Easing curves
  ease: {
    soft: [0.22, 1, 0.36, 1] as const,      // Cinematic ease
    smooth: [0.4, 0, 0.2, 1] as const,     // Standard ease
    bounce: [0.34, 1.56, 0.64, 1] as const, // Subtle bounce
  },
  
  // Duration in seconds
  duration: {
    instant: 0.2,      // Micro interactions
    fast: 0.4,         // Quick transitions
    normal: 0.8,       // Standard motion
    slow: 1.2,         // Deliberate motion
    slower: 1.6,       // Cinematic entrance
    cinematic: 2.0,    // Hero sequences
  },
  
  // Stagger delays
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
  
  // Z-index layers
  zIndex: {
    base: 1,
    overlay: 2,
    dropdown: 10,
    sticky: 20,
    header: 50,
    modal: 100,
    tooltip: 200,
    cursor: 9998,
  },
} as const;

/**
 * Motion class mappings
 */
export const motionClass = {
  duration: {
    instant: 'duration-200',
    fast: 'duration-400',
    normal: 'duration-800',
    slow: 'duration-1200',
    slower: 'duration-1600',
    cinematic: 'duration-2000',
  },
} as const;
