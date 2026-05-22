import { useEffect, useRef, useState, useCallback } from "react";
import type { Phase } from "@/lib/cinematic";
import { THRESHOLD } from "@/lib/cinematic";

interface UseScrollEmotionReturn {
  ref: React.RefObject<HTMLElement>;
  phase: Phase;
  isInView: boolean;
}

/**
 * useScrollEmotion — Intersection-based scroll state inference
 * 
 * Determines cinematic phase based on element visibility:
 * - "drift": Element entering (0-50% visible) — ambient state
 * - "focus": Element centered (50%+ visible) — stable reading state
 * - "cut": Element leaving (exiting viewport) — transition state
 * 
 * NO viewport percentage calculations. NO screen height dependencies.
 * State is inferred from intersection ratios only — stable across all viewport sizes.
 */
export function useScrollEmotion(): UseScrollEmotionReturn {
  const ref = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<Phase>("drift");
  const [isInView, setIsInView] = useState(false);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (!entry) return;

    const ratio = entry.intersectionRatio;
    const isIntersecting = entry.isIntersecting;

    setIsInView(isIntersecting);

    // State inference — deterministic mapping
    if (!isIntersecting) {
      // Element not visible at all
      setPhase(phase => phase === "focus" ? "cut" : "drift");
    } else if (ratio < THRESHOLD.focus) {
      // Element entering but not fully visible
      setPhase("drift");
    } else if (ratio >= THRESHOLD.focus && ratio < THRESHOLD.exit) {
      // Element is the primary focus
      setPhase("focus");
    } else {
      // Element fully visible or beginning to exit
      setPhase(ratio < 1 ? "focus" : "cut");
    }
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Stable thresholds — do NOT depend on viewport height
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [THRESHOLD.enter, THRESHOLD.focus, 0.75, THRESHOLD.exit],
      rootMargin: "0px",
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [handleIntersection]);

  return { ref, phase, isInView };
}

export default useScrollEmotion;
