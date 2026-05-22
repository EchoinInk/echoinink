import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { ScrollState, SectionRole, DensityLevel } from "@/lib/cinematic";
import { SECTION_ROLES } from "@/lib/cinematic";

interface CinematicContextType {
  // Current scroll emotional state
  scrollState: ScrollState;
  setScrollState: (state: ScrollState) => void;
  
  // Active section tracking
  activeSection: SectionRole | null;
  setActiveSection: (role: SectionRole | null) => void;
  
  // Density curve progression (0-1 across page)
  narrativeProgress: number;
  setNarrativeProgress: (progress: number) => void;
  
  // Global reduced motion preference
  prefersReducedMotion: boolean;
  
  // Section navigation
  registerSection: (role: SectionRole, element: HTMLElement) => void;
  unregisterSection: (role: SectionRole) => void;
  getSectionDensity: (role: SectionRole) => DensityLevel;
}

const CinematicContext = createContext<CinematicContextType | undefined>(undefined);

interface CinematicProviderProps {
  children: ReactNode;
  prefersReducedMotion?: boolean;
}

/**
 * CinematicProvider — Global emotional rendering state
 * 
 * Coordinates scroll state, section roles, and narrative density
 * across the entire application. Provides a unified emotional context.
 */
export function CinematicProvider({
  children,
  prefersReducedMotion = false,
}: CinematicProviderProps) {
  const [scrollState, setScrollState] = useState<ScrollState>("drift");
  const [activeSection, setActiveSection] = useState<SectionRole | null>(null);
  const [narrativeProgress, setNarrativeProgress] = useState(0);
  const [sections] = useState<Map<SectionRole, HTMLElement>>(new Map());

  const registerSection = useCallback((role: SectionRole, element: HTMLElement) => {
    sections.set(role, element);
  }, [sections]);

  const unregisterSection = useCallback((role: SectionRole) => {
    sections.delete(role);
  }, [sections]);

  const getSectionDensity = useCallback((role: SectionRole): DensityLevel => {
    return SECTION_ROLES[role]?.density ?? "medium";
  }, []);

  return (
    <CinematicContext.Provider
      value={{
        scrollState,
        setScrollState,
        activeSection,
        setActiveSection,
        narrativeProgress,
        setNarrativeProgress,
        prefersReducedMotion,
        registerSection,
        unregisterSection,
        getSectionDensity,
      }}
    >
      {children}
    </CinematicContext.Provider>
  );
}

/**
 * useCinematic — Access global cinematic engine state
 * 
 * Use this hook to coordinate emotional states across components.
 * Ensures all sections share the same cinematic context.
 */
export function useCinematic(): CinematicContextType {
  const context = useContext(CinematicContext);
  if (context === undefined) {
    throw new Error("useCinematic must be used within a CinematicProvider");
  }
  return context;
}

export default CinematicProvider;
