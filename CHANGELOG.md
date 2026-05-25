# Changelog

## 2025-05-26 (Refinement Phase)

### 7-Phase Homepage Refinement

**Phase 1 — Hero Clarity**
- Added supporting positioning line beneath main heading
- Line clarifies offering: "Brand systems and atmospheric digital experiences designed with emotional precision."
- Preserves poetic tone while improving clarity

**Phase 2 — CTA Hierarchy**
- Implemented three-tier button system: Primary / Secondary / Tertiary
- Primary: Subtle filled glow, brighter border, elegant hover lift, stronger shadow
- Secondary: Ghost button, clean outline, calmer interaction
- Tertiary: Text link only with subtle underline reveal on hover
- Motion: restrained 500ms duration with luxury easing

**Phase 3 — Readability Refinement**
- Increased opacity ~10-15% across typography system while preserving mood:
  - `.ei-eyebrow`: 0.24 → 0.32
  - `.ei-section-title`: 0.88 → 0.92
  - `.ei-section-description`: 0.44 → 0.52
  - `.ei-body-large`: 0.45 → 0.54
  - `.ei-body`: 0.48 → 0.56
  - `.ei-card-description`: 0.42 → 0.50
  - `.ei-link`: 0.35 → 0.45 (hover 0.60 → 0.70)
  - `.ei-link-subtle`: 0.25 → 0.35 (hover 0.45 → 0.55)

**Phase 4 — Conversion Anchor**
- Created `WhatWeCreate.tsx` component with grounded functional layout
- Editorial list format: Brand Identity, Digital Experience, Narrative Systems, Creative Direction
- Minimal structure with subtle horizontal divider
- No corporate service-grid styling

**Phase 5 — Tempo Change Section**
- Created `CinematicStatement.tsx` — full-width breathing moment
- Tonal contrast through brighter atmospheric layers
- Statement: "We do not decorate brands. We reveal what they are becoming."
- Immersive 70-80vh height, emotionally resonant pacing

**Phase 6 — Card Differentiation**
- Added `featured` and `glowPosition` props to GlowCard
- Identity card: featured (larger, stronger shadow, enhanced glow)
- Sessions: glowPosition 'top', Worlds: glowPosition 'bottom'
- Varied hover lift: featured -3px, standard -2px
- Differentiated glow intensities: 0.70 featured, 0.50/0.55 standard

**Phase 7 — Footer Rebuild**
- Complete cinematic conclusion with atmospheric fade into black
- Final statement: "Let the next world begin quietly."
- Subtle contact CTA: Primary "Begin a conversation" + Tertiary "View selected works"
- Restrained navigation row with improved readability
- Premium multi-layer atmospheric dissolves

## 2025-05-26

### Restored
- Homepage structure: Hero, Philosophy, Pathways, LumoCaseStudyTeaser, EmergingSystems, ClosingSection, Footer.

### Added
- Cinematic motion identity system with blur emergence, ambient drift, and orchestrated reveal patterns.
- Atmospheric continuity components for subtle section transitions.
- Refined button system with thinner borders and quieter premium styling.
- Enhanced Hero depth separation with volumetric haze layers.
- LumoCaseStudyTeaser editorial polish — magazine-style composition.
- Footer atmospheric epilogue styling with visual dissolution.

### Corrected
- Full vertical rhythm and section spacing pass across homepage.
- Reduced Section spacing scale: lg now 28/28 (was 40/40), xl now 32/32 (was 48/48).
- Compressed all section internal spacing from lg to md for tighter pacing.
- Fixed Pathways double spacing (removed custom py-24 md:py-32 on top of Section xl).
- Reduced AtmosphericBridge from 96-128px to 48-64px with softer opacity (0.08→0.03).
- Eliminated atmospheric banding by simplifying gradient overlays.
- Reduced ClosingSection from py-32 md:py-40 to py-20 md:py-28.
- Streamlined transitions: removed excessive bridges between sections.
- Footer rebuilt as compact quiet epilogue, not a hero section.

### Final Structural Corrections (2025-05-26)
- Compressed all sections to `spacing="sm"` for tight cinematic pacing.
- Eliminated dead space between EmergingSystems and ClosingSection.
- Removed all AtmosphericBridge components - seamless section flow.
- ClosingSection: py-14 md:py-20 (was py-20 md:py-28), removed atmospheric wrapper.
- LUMO card: repositioned content upward, reduced padding and spacing clusters.
- Footer: completely rebuilt with three-column compact layout.
- Footer: unified atmospheric fade, no horizontal bands or oversized elements.
- Pathways: reduced header margin mb-8 md:mb-10 (was mb-12 md:mb-16).
- Philosophy: reduced to sm spacing, softer blur (0.02).
- EmergingSystems: reduced to sm spacing, tighter card gaps.
- All sections: reduced grid gaps (4/5 vs 5/6), tighter internal spacing.
