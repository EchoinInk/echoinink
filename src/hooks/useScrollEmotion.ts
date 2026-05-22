import { useEffect, useRef, useState, useCallback } from "react";
import type { ScrollState } from "@/lib/cinematic";
import { SCROLL_CONFIG, shouldReduceMotion } from "@/lib/cinematic";

interface UseScrollEmotionOptions {
  threshold?: { drift?: number; focus?: number; exit?: number };
  onStateChange?: (state: ScrollState) => void;
}

interface ScrollEmotionState {
  state: ScrollState;
  progress: number;
  isInView: boolean;
}

/**
 * useScrollEmotion — Cinematic scroll state detection
 * 
 * Tracks element position in viewport and reports cinematic states:
 * - "drift": Element entering — ambient, soft reveal
 * - "focus": Element centered — stable reading state  
 * - "cut": Element leaving — prepare for transition
 * 
 * Scroll is film editing, not navigation.
 */
export function useScrollEmotion(options: UseScrollEmotionOptions = {}) {
  const { threshold = {}, onStateChange } = options;
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<ScrollEmotionState>({
    state: "drift",
    progress: 0,
    isInView: false,
  });
  
  const prefersReduced = typeof window !== "undefined" ? shouldReduceMotion() : false;

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (!entry) return;

      const { boundingClientRect, intersectionRect, rootBounds } = entry;
      
      if (!rootBounds || prefersReduced) {
        setState({ state: "focus", progress: 1, isInView: entry.isIntersecting });
        return;
      }

      const elementHeight = boundingClientRect.height;
      const viewportHeight = rootBounds.height;
      
      if (elementHeight === 0) return;

      const elementTop = boundingClientRect.top;
      const elementBottom = boundingClientRect.bottom;
      
      const driftThreshold = threshold.drift ?? SCROLL_CONFIG.thresholds.drift;
      const focusThreshold = threshold.focus ?? SCROLL_CONFIG.thresholds.focus;
      const exitThreshold = threshold.exit ?? SCROLL_CONFIG.thresholds.exit;

      let progress = 0;
      let scrollState: ScrollState = "drift";

      if (elementTop > viewportHeight * (1 - driftThreshold)) {
        progress = Math.max(0, 1 - (elementTop / (viewportHeight * (1 - driftThreshold))));
        scrollState = "drift";
      } else if (elementBottom < viewportHeight * exitThreshold) {
        progress = Math.max(0, elementBottom / (viewportHeight * exitThreshold));
        scrollState = "cut";
      } else {
        const focusStart = viewportHeight * (1 - focusThreshold);
        const focusEnd = viewportHeight * exitThreshold;
        const elementCenter = (elementTop + elementBottom) / 2;
        progress = 1 - Math.abs(elementCenter - viewportHeight / 2) / (viewportHeight / 2);
        scrollState = "focus";
      }

      setState({ state: scrollState, progress: Math.min(1, Math.max(0, progress)), isInView: entry.isIntersecting });
      onStateChange?.(scrollState);
    },
    [threshold, onStateChange, prefersReduced]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0, 0.15, 0.5, 0.85, 1],
      rootMargin: "-10% 0px -10% 0px",
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return { ref, ...state };
}

export default useScrollEmotion;
