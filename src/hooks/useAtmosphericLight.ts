import { useCallback, useEffect, useRef, useState } from "react";
import { ATMOSPHERE, type DensityLevel } from "@/lib/cinematic";

interface LightState {
  intensity: 0.04 | 0.08 | 0.12 | 0.16;
  isActive: boolean;
  sources: number;
}

interface UseAtmosphericLightOptions {
  density: DensityLevel;
  baseSources?: number;
  enableOnHover?: boolean;
  enableOnFocus?: boolean;
}

/**
 * useAtmosphericLight — Reactive lighting system
 * 
 * Light behaves like fog, not glow. It appears only when needed:
 * - On scroll focus (controlled by density)
 * - On interaction intent (hover/focus)
 * - On content emphasis
 * 
 * Principle: Light is reactive, not ornamental.
 */
export function useAtmosphericLight(options: UseAtmosphericLightOptions) {
  const { density, baseSources = 1, enableOnHover = true, enableOnFocus = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [lightState, setLightState] = useState<LightState>({
    intensity: ATMOSPHERE.reactive.ambient,
    isActive: false,
    sources: baseSources,
  });
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const densityConfig = {
    silence: { base: ATMOSPHERE.reactive.ambient, max: ATMOSPHERE.reactive.focus },
    low: { base: ATMOSPHERE.reactive.ambient, max: ATMOSPHERE.reactive.focus },
    medium: { base: ATMOSPHERE.reactive.focus, max: ATMOSPHERE.reactive.interaction },
    high: { base: ATMOSPHERE.reactive.focus, max: ATMOSPHERE.reactive.emphasis },
    climax: { base: ATMOSPHERE.reactive.interaction, max: ATMOSPHERE.reactive.emphasis },
  };

  const config = densityConfig[density];

  const updateIntensity = useCallback(() => {
    let targetIntensity: LightState["intensity"] = config.base;
    let sources = baseSources;

    if (isHovered && enableOnHover) {
      targetIntensity = config.max;
      sources = Math.min(baseSources + 1, 2);
    } else if (isFocused && enableOnFocus) {
      targetIntensity = config.max;
      sources = baseSources;
    }

    setLightState({
      intensity: targetIntensity,
      isActive: targetIntensity > config.base,
      sources,
    });
  }, [isHovered, isFocused, config, baseSources, enableOnHover, enableOnFocus]);

  useEffect(() => {
    updateIntensity();
  }, [updateIntensity]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    if (enableOnHover) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    if (enableOnFocus) {
      element.addEventListener("focus", handleFocus, true);
      element.addEventListener("blur", handleBlur, true);
    }

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("focus", handleFocus, true);
      element.removeEventListener("blur", handleBlur, true);
    };
  }, [enableOnHover, enableOnFocus]);

  const getGlowStyle = useCallback(
    (index: number = 0) => {
      const positions = [
        { x: "50%", y: "40%" },
        { x: "30%", y: "60%" },
        { x: "70%", y: "50%" },
      ];
      const position = positions[index % positions.length];
      const color: keyof typeof ATMOSPHERE.light = index === 0 ? "indigo" : "violet";
      const opacity = lightState.intensity;

      return {
        background: `radial-gradient(ellipse 50% 40% at ${position.x} ${position.y}, ${ATMOSPHERE.light[color]}${opacity}) 0%, transparent 70%)`,
        filter: "blur(80px)",
        opacity: lightState.isActive ? 1 : 0.3,
        transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
      };
    },
    [lightState]
  );

  return { ref, lightState, getGlowStyle, isHovered, isFocused };
}

export default useAtmosphericLight;
