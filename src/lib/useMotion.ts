import { useReducedMotion as useFramerReducedMotion } from 'framer-motion';

/**
 * Hook that respects user's reduced motion preference.
 * Returns true if the user prefers reduced motion, false otherwise.
 * 
 * Use this to conditionally disable or simplify animations:
 * 
 * ```tsx
 * const prefersReduced = useMotion();
 * 
 * if (prefersReduced) {
 *   // Show static version
 *   return <StaticComponent />
 * }
 * 
 * // Show animated version
 * return <AnimatedComponent />
 * ```
 */
export function useMotion() {
  return useFramerReducedMotion();
}

/**
 * Hook that returns motion-safe animation props.
 * Automatically respects reduced motion preference.
 * 
 * ```tsx
 * const motionProps = useMotionProps({
 *   initial: { opacity: 0, y: 20 },
 *   whileInView: { opacity: 1, y: 0 },
 *   transition: { duration: 0.8 }
 * });
 * 
 * return <motion.div {...motionProps}>Content</motion.div>
 * ```
 */
export function useMotionProps<T extends Record<string, unknown>>(
  props: T
): T {
  const prefersReduced = useMotion();
  
  if (prefersReduced) {
    // Return minimal/no animation for reduced motion
    return {
      ...props,
      initial: undefined,
      animate: undefined,
      whileInView: undefined,
      whileHover: undefined,
      whileTap: undefined,
      transition: { duration: 0 },
    } as T;
  }
  
  return props;
}
