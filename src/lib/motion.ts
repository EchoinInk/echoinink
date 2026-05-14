export const motion = {
  ease: {
    soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
  },
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.8,
    slower: 1.2,
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  stagger: {
    container: {
      animate: { transition: { staggerChildren: 0.12 } },
    },
  },
} as const;
