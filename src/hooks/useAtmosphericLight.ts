import { useMemo } from "react";
import type { Density } from "@/lib/cinematic";
import { DENSITY, GLOW, LIGHT } from "@/lib/cinematic";

interface UseAtmosphericLightReturn {
  intensity: number;
  sources: number;
  color: keyof typeof LIGHT;
  isReactive: boolean;
}

interface UseAtmosphericLightOptions {
  density: Density;
  isActive?: boolean; // Controlled by scroll phase or interaction
}

/**
 * useAtmosphericLight — Derives atmospheric light from density
 * 
 * Light is reactive, not ornamental. Intensity is determined by:
 * 1. Section density (from cinematic tokens)
 * 2. Active state (scroll focus, hover, etc.)
 * 
 * NO DOM manipulation. NO event listeners. Pure state derivation.
 */
export function useAtmosphericLight(options: UseAtmosphericLightOptions): UseAtmosphericLightReturn {
  const { density, isActive = false } = options;

  return useMemo(() => {
    const config = DENSITY[density];
    
    // Base intensity from density configuration
    const baseIntensity = GLOW[config.light.intensity];
    
    // Active state boosts intensity one level
    const intensity = isActive 
      ? Math.min(baseIntensity * 1.5, GLOW.emphasis)
      : baseIntensity;
    
    return {
      intensity,
      sources: config.light.sources,
      color: "indigo", // Primary atmospheric color
      isReactive: isActive,
    };
  }, [density, isActive]);
}

/**
 * Creates a glow style string from light state
 * Pure function — no hook dependencies
 */
export function createGlowStyle(
  intensity: number,
  color: keyof typeof LIGHT = "indigo",
  position: { x: string; y: string } = { x: "50%", y: "50%" }
): string {
  return `radial-gradient(ellipse 50% 40% at ${position.x} ${position.y}, ${LIGHT[color]}${intensity}) 0%, transparent 70%)`;
}

export default useAtmosphericLight;
