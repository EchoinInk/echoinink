import { useEffect, useRef, useState } from 'react';

interface UseInViewSuspensionOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook for detecting when an element enters/leaves the viewport.
 * Returns true when the element is visible, false when offscreen.
 * Useful for pausing animations when content is not visible to improve performance.
 */
export function useInViewSuspension(options: UseInViewSuspensionOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = false } = options;
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}
