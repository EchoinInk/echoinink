# Changelog

## 2026-06-24 — Audit Notes and Repo Docs

This week’s highlights:

- Added a refreshed README with the current project stack, local development, build, and contact-form notes.
- Produced a new design inconsistencies report to capture source-verified review risks and intentional exceptions.
- Reworked the design system audit and added a concise audit-priorities brief for future reviews.

## 2026-06-21 — Lumo and Homepage Polish

This week’s highlights:

- Updated the Lumo case study with cinematic production polish and a long-form numbered story structure.
- Refined the Home page with clearer proof hierarchy, an early proof strip, and stronger service-card distinction.
- Updated the Works page with tighter proof sequencing, an editorial testimonial, and a calmer closing CTA.
- Updated the Studio page with unified section rails and aligned editorial section structures.

## 2026-06-19 — Orbitals and Repo Cleanup

This week’s highlights:

- Added a new visual Orbitals page and expanded the orbitals set to 30 total entries.
- Standardised page rails and the typography system across the main page set for more consistent framing and rhythm.
- Simplified shared page hero variants and tightened hero CSS overrides across the main page set.
- Removed unused page/component scaffolds, pruned old archive and asset leftovers, and cleaned up related styling files.
- Ran a formatting sweep across core token and typography files to keep the design system tidy.

## 2026-06-09 — Redesigned Page Registry

Current active redesigned pages as of this update:

- `/` — `HomePage`: cinematic world-entry homepage with modular hero, philosophy, creation, featured Lumo, systems, and closing sections.
- `/identity` — `IdentityPage`: atmospheric identity offer page with image-led hero, audience framing, deliverables, process, transformation, pricing, and CTA flow.
- `/sessions` — `SessionsPage`: Echo Sessions offer page with immersive hero imagery, orbital signal cards, session types, outcomes, pricing, and booking CTA.
- `/worlds` — `WorldsPage`: World Architecture offer page using the shared offer-section system for use cases, layers, deliverables, proof, pricing, and closing CTA.
- `/works` — `WorksPage`: redesigned works archive with cinematic page hero, filter/sort controls, project grid, and image-backed project CTA.
- `/works/lumo` — `LumoPage`: Lumo signature case-study route with the full case-study component, process sequence, and related CTA.
- `/studio` — `StudioPage`: studio philosophy page with cinematic hero, principles, pillars, process, featured work, manifesto, and closing CTA.
- `/contact` — `ContactPage`: intimate contact route with cinematic hero, guided form flow, service signals, trust notes, and orbital accents.
- `/systems` — `SystemsPage`: systems/product route using shared offer hero, category pills, and atmospheric systems grid.
- `/archive` — `ArchivePage`: editorial archive route using shared offer sections for featured archive content, categories, and recent notes.

Maintenance notes:
- Active route source of truth is `src/App.tsx`.
- Page modules now use named exports aligned with route page names.
- `src/pages/EasyPage.tsx` is not included because it is not currently routed.
- Archive folders are not included unless actively imported by the live app.

---

## 2026-06-08 — WCAG Contrast and Focus Pass

- Improved muted text contrast for meaningful small copy while keeping faint text reserved for decorative marks.
- Strengthened visible focus indicators with the shared WCAG-safe halo treatment.
- Improved form labels, placeholders, footer links, and subtle-link readability.
- Fixed system status pill text contrast.
- Refined the mobile navigation Close button focus ring to match its rounded control shape without reducing contrast.

---

## 2026-06-04 — Design System Migration: Echo in Ink Palette Update

### Color Token System Migration

**Core Palette Update**
- Migrated from Aurora/Luxe/Orchid palette to new Echo in Ink system
- **New core tokens**: `--ei-void`, `--ei-ink`, `--ei-midnight` (foundational darks)
- **New accent tokens**: `--ei-electric-blue`, `--ei-halo-blue`, `--ei-violet`, `--ei-echo-magenta`, `--ei-soft-neon`
- **New typography colors**: `--ei-moonlit`, `--ei-ice-white`

**Deprecated Token Aliases**
- Added backward-compatibility aliases to prevent breaking changes
- `--ei-void-black` → `--ei-void`
- `--ei-deep-indigo` → `--ei-midnight`
- `--ei-aurora-blue` → `--ei-halo-blue`
- `--ei-luxe-violet` → `--ei-violet`
- `--ei-orchid-pink` → `--ei-echo-magenta`
- `--ei-soft-lavender` → `--ei-moonlit`
- All deprecated RGB variants aliased to new tokens

**New Semantic Tokens**
- Added semantic color system: `--ei-color-text-primary`, `--ei-color-text-secondary`, etc.
- Added component tokens: `--ei-card-bg`, `--ei-button-bg`, `--ei-button-bg-hover`, etc.
- Added background gradients: `--ei-background-body`, `--ei-background-glow-field`, `--ei-background-nebula`
- Added glow effects: `--ei-glow-blue`, `--ei-glow-violet`, `--ei-glow-magenta`, `--ei-glow-balanced`, `--ei-glow-soft-field`
- Added shadow/ring tokens: `--ei-shadow-soft`, `--ei-shadow-elevated`, `--ei-ring-focus`, `--ei-ring-accent`, `--ei-ring-accent-secondary`
- **NEW**: Added `--ei-button-focus-ring: 0 0 0 4px rgba(73, 133, 253, 0.18)` for accessible focus states

### Typography System Consolidation

**Single Canonical File**
- Merged `typography.css`, `typography-enhanced.css` into unified `typography-system.css`
- Marked deprecated files with clear migration notes for gradual cleanup
- Added comprehensive font-face declarations for all Neue Montreal weights
- Kept font roles: Fraunces (emotional/editorial), Neue Montreal (structural/body), Geist Mono (system/labels)

**New Canonical Naming Convention (.ei-type-*)**
- `.ei-type-hero` — Cinematic hero headlines (clamp 2.75-6rem)
- `.ei-type-statement` — Large section statements (clamp 2.125-4rem)
- `.ei-type-section` — Major section headings (clamp 1.75-2.75rem)
- `.ei-type-body` — Standard body copy (clamp 1-1.1875rem, 1.65 line-height)
- `.ei-type-small` — Small UI copy (clamp 0.875-1rem)
- `.ei-type-label` — Micro labels with uppercase tracking (clamp 0.625-0.75rem, 0.16em tracking)
- `.ei-type-nav` — Navigation text (0.8125rem, 0.02em tracking)
- `.ei-type-button` — Button/CTA text (0.875rem, 0.01em tracking, 500 weight)
- `.ei-type-quote` — Quote text (clamp 1.5-2.25rem)
- `.ei-type-manifesto` — Editorial manifestos (clamp 1.25-1.875rem)
- `.ei-type-whisper`, `.ei-type-whisper-uppercase` — Faint secondary text

**Backward Compatibility**
- Added aliases for legacy classes: `.text-editorial-hero`, `.ei-hero-display`, `.ei-section-title`, etc.
- All legacy classes map to new canonical styles
- Migration path: Replace legacy `.text-*` and `.ei-*` with `.ei-type-*` in new components

### CSS Architecture Cleanup

**Import Order Reorganized** (globals.css)
1. `tokens.css` (base) — All color, spacing, motion, and semantic tokens
2. `typography-system.css` (base) — Canonical typography with font-faces
3. `layout.css` (base) — Page layout and spacing utilities
4. `spacing-enhanced.css` (base) — Additional spacing utilities
5. `atmosphere.css` (components) — Atmospheric effects and backgrounds
6. `hero.css` (components) — Button and hero styles
7. `forms-luxury.css` (components) — Form component styles
8. `mobile-refinements.css` (utilities) — Mobile-specific adjustments
9. `accessibility.css` — Accessibility-focused rules
10. `browser-chrome.css` (base) — Browser UI overrides
11. Tailwind layers (base, components, utilities)

**File Consolidation**
- Removed `atmosphere-enhanced.css` from imports (consolidated into `atmosphere.css`)
- Marked `typography.css` and `typography-enhanced.css` as deprecated (not removed for safety)
- Removed duplicate typography imports from globals.css

### Component Updates

**Updated 40+ Components**
- Replaced deprecated RGB token references with new semantic values
- Changed `--ei-electric-cyan` references to `--ei-halo-blue` (primary interactive light)
- Updated all gradient references to use new token system
- Fixed inline color values to use new rgba token base colors

**Key Component Updates**
- `StudioHero.tsx` — Updated overlay gradients to use new void/midnight tokens
- `QuoteCard.tsx` — Updated to use halo-blue for atmospheric glows
- `hero.css` — Updated gradient border buttons to use `--ei-gradient-primary` and `--ei-gradient-orbital-border`
- All UI components now reference semantic tokens instead of deprecated palette

### Quality Assurance

**Build Results**
- ✅ Build passed with no errors (504 modules transformed)
- ✅ Linter check passed (1 unrelated warning)
- ✅ CSS bundle: 89.53 kB → 16.41 kB gzipped
- ✅ No breaking changes to public API
- ✅ Backward compatibility maintained through token aliases

**Next Steps**
- [ ] Gradually migrate component inline styles to use new `--ei-type-*` classes
- [ ] Replace deprecated token aliases with direct new token references
- [ ] Clean up old typography files once migration is complete
- [ ] Update component documentation with new naming conventions

---

## 2026-06-01 — Studio Page Redesign

### Studio Page (editorial, measured spec)

**New components**
- `StudioHero` — 45/55 grid, `clamp(3.5rem, 5vw, 5.8rem)` heading, integrated hero image (no card container)
- `NumberedSectionLabel`, `EyebrowLabel` — reusable editorial labels
- `OriginSection`, `QuoteCard`, `PhilosophyGrid`, `ValuesGrid`, `StudioCTA`
- `PhilosophyCard` — shared philosophy/value card with quiet hover
- `src/data/studioContent.ts` — page copy and card data

**Design notes**
- Hero image uses left-edge gradient blend, not absolute bleed or rounded card
- Quote card: indigo surface, serif italic, subtle glow point
- CTA: `hero-01.png` horizon crop, text left / image right
- Existing Header, Footer, tokens, Button, and motion system preserved

---

## 2026-06-01 — Works Page Redesign

### Works Page Restructure

**New Components**
- `src/components/hero/EditorialHero.tsx` — Reusable cinematic page hero with eyebrow, editorial title (optional italic word), description, CTA, and responsive `<picture>` background
- `src/components/works/ProjectCard.tsx` — Reusable project card with `large` / `small` variants; featured horizontal split for LUMO; image-led overlay for large cards; compact layout for small cards
- `src/components/works/WorkFilterBar.tsx` — Category filter row with `aria-pressed` states + `EchoSelect` sort dropdown
- `src/components/works/WorksGrid.tsx` — Data-driven responsive grid with filter/sort logic
- `src/components/works/ProjectCTA.tsx` — Full-width cinematic CTA card (Contact “Book a session” pattern)
- `src/data/worksProjects.ts` — Centralised project data for LUMO, Aurora, Obsidian, Verde, Nexus

**WorksPage.tsx — Full Rewrite**
- Replaced inline typography hero with `EditorialHero` using `works-hero.png` / `works-hero-mobile.png`
- Replaced `SelectedWorks` gallery and `PageCTA` with filter bar, grid, and `ProjectCTA`
- Removed custom footer strip (“INK MEETS LIGHT.”)
- SEO: title → “Works | Echo In Ink”; updated meta description
- Existing `Header` (via `Layout`) and `Footer` (via `PageShell`) preserved — no duplicate variants

**Design System**
- Card styling uses `--ei-card-bg`, `--ei-card-border`, `--ei-card-shadow-hover`, `--radius-card`
- Filter active states use `--ei-filter-bg-active`, `--ei-filter-border-active`
- Hover: border brighten, -4px lift, image scale 1.02/1.025, CTA arrow shift; respects `prefers-reduced-motion`
- Motion via `@/lib/motion-cinematic` (`fadeSoft`, `driftUp`, `staggerContainer`)

**Token Cleanup**
- `--ei-text-muted`: 85% → 48% opacity (decorative/minor text)
- `--ei-text-soft`: new token at 85% opacity (editorial italic accents)
- Tailwind `ei.text-muted` and `ei.text-soft` updated to match

**Imagery Wired**
- Hero: `works-hero.png`, `works-hero-mobile.png`
- Cards: `lumo-featured-bg.png`, `ei-lightwave-work-card.png`, `ei-planetsilhouette-work-card.png`, `placeholder-works-card.png`, `nexus-work-card.png`
- CTA: `cosmic-rings-bg.png`

**Verification**
- TypeScript: 0 errors
- Vite build: exit 0
- Image optimizer ENOENT errors: pre-existing (avifenc/cwebp/pngquant binaries absent from environment)

---

## 2026-05-28 (Phase 4 — EI Colour Brand Kit Implementation)

### Global Colour Token Migration

**Phase 4 — Hero Atmosphere Refinement**
- Replaced all hardcoded rgba and hex colour values in `/src/components` with new EI Colour Brand Kit tokens
- Implemented CSS variable RGB variants for opacity control: `rgb(var(--token-rgb) / opacity)`
- Updated 20 component files with brand-compliant colour mappings

**Components Updated (20 files)**
- `SignatureCaseStudy.tsx` — Gradients, background styles, SVG ring strokes, text colours
- `GlowCard.tsx` — Archetype vignettes, shadow depths, overlay intensities, card backgrounds
- `PageCTA.tsx` — Atmospheric glow field
- `Footer.tsx` — Top boundary gradients, atmospheric depth, bottom separator
- `ClosingSection.tsx` — Heading text colour
- `AtmosphericBridge.tsx` — Gradient bridge styles (ink, violet, aqua variants)
- `WhatWeCreate.tsx` — Ambient glow, accent line, card backgrounds, hover shadows
- `SystemCard.tsx` — Status colours, accent defaults, background gradients, borders
- `ProductHero.tsx` — Accent colour defaults, luminance veil, bottom fade
- `AtmospherePause.tsx` — Ambient glow fields, depth layers, decorative line, bottom transition
- `Philosophy.tsx` — Ambient glow, accent line, vertical dividers, glow anchor dots, text colours
- `SelectedWorks.tsx` — Work gradients, scene backgrounds, vignettes, reading gradients, section atmosphere, dividers, title colours
- `EmergingSystems.tsx` — Ambient glow, accent line, card backgrounds, hover shadows
- `AtmosphericContinuity.tsx` — Colour map (indigo, violet, pink, aqua), texture layers, bridge gradients, veil backgrounds
- `PageTransition.tsx` — Loading overlay, placeholder line, image loading background
- `SignatureMoment.tsx` — Atmospheric layers, SVG gradient stops, surrounding glow, bottom fade, ink diffusion
- `SystemPreview.tsx` — System accent colours, ambient glow, editorial divider
- `AtmosphericCursor.tsx` — Cursor radial gradient
- `TrustSignal.tsx` — Atmospheric depth, separator gradient
- `OrbitalVisual.tsx` — Stroke colours, fill colours, ambient glow

**Colour Token Mappings Applied**
- `--ei-void-plum-rgb` → Deep atmospheric layers, vignettes
- `--ei-stellar-lilac-rgb` → Text accents, subtle glows, dividers
- `--ei-ion-violet-rgb` → Primary atmospheric glows, gradients
- `--ei-orbit-blue-rgb` → Secondary atmospheric accents
- `--ei-neon-magenta-rgb` → Accent highlights, gradient stops
- `--ei-electric-cobalt-rgb` → Blue atmospheric variants
- `--ei-photon-white-rgb` → White opacity controls, dividers
- `--ei-cosmic-black-rgb` → Deep background layers
- `--ei-deep-nebula-rgb` → Nebula backgrounds, gradients
- `--ei-electric-violet` → Stroke colours, fill accents
- `--ei-orchid-plasma` → Text accents, highlight fills

**Verification**
- No remaining hardcoded rgba or hex colours in `/src/components`
- All opacity values preserved exactly from original implementations
- Gradient structures maintained
- Brand colour mappings strictly followed

---

## 2026-05-27 (Phase 1 — Homepage Implementation)

### New Homepage Restructure

**Orbital System**
- `src/components/orbitals/orbitals.tsx` and `src/components/ui/OrbitalVisual.tsx` — 12-variant SVG orbital registry and rendering primitive (axiomRing, vectorLattice, signalBridge, prismMirror, innerTide, quietAxis, chorusCore, memoryComet, synthesisStar, haloGate, focusDial, threadBeacon)

**Hero Refinements**
- `HeroHeading.tsx`: Eyebrow text updated from "Echo in Ink" → "WE DESIGN WORLDS"
- `HeroHeading.tsx`: textShadow updated to brand Electric Violet rgba(123,92,255,0.08)
- `HeroCTA.tsx`: Secondary button updated "View Work" → "View Our Work"

**Philosophy.tsx — Structural Refactor**
- Layout: 2-column (heading left, 4-column fragment grid right)
- Section eyebrow added with orchid accent line
- Right column: 4 philosophy fragments with glow-dot anchors
- Fragment 4 highlighted in `--ei-orchid-plasma` accent
- Removed old 4-paragraph list format

**Pathways.tsx — Full Rewrite (WHAT WE CREATE)**
- Replaces Sessions/Identity/Worlds image cards
- 4 transformation cards: Brand Identity, Digital Experiences, Narrative Architecture, Creative Direction
- Each card: OrbitalVisual icon (triangle/orbit/nodes/compass), editorial title, structural description, Explore → mono CTA
- Links: /identity, /worlds, /sessions, /works
- Card style: `--radius-card`, `from-white/[0.04]`, `border-white/10`, violet hover glow
- Removed: GlowCard, sessionsImage, identityImage, worldsImage imports

**LumoCaseStudyTeaser.tsx — Refactor**
- Layout: 2-column split card — text panel left (2fr), parallax image right (3fr)
- Discipline tags strip below card: Identity System + Narrative Architecture + Interface Direction + Emotional UX
- Route fix: `/work/lumo` → `/works/lumo`
- Removed: editorial proof block (Scope/Problem/Outcome/Positioning grid)
- Ambient glow layer added behind card
- Left-edge image fade for seamless text/image blend
- Removed unused `EASE_LUXURY` import

**EmergingSystems.tsx — Full Rewrite (OUR SYSTEMS)**
- Replaces 2-card (Echo Systems, Echo Vault) layout
- 5 system cards: Identity Canvas, Founder Reflection, Narrative Architect, Identity GPT, Atmosphere UI Kit
- Each card: OrbitalVisual (canvas/reflection/architect/gpt/uikit), title, description, mono meta label (Framework/Reflective Tool/GPT System/UI System)
- Header: eyebrow left + "Explore All Systems →" link right
- Grid: `lg:grid-cols-5`
- Removed: GlowCard, systemsImage, vaultImage imports

**ClosingSection.tsx**
- Description text updated to: "Let's build something meaningful, atmospheric, and unforgettable."

**Footer.tsx — Full Rewrite (4-Column)**
- Column 1 — Brand: "Echo in Ink" + tagline + © 2024
- Column 2 — Navigation: Studio, Systems, Work, Lumo, About, Contact
- Column 3 — Connect: hello@echoin.ink, Los Angeles CA, IG/LN/X social links
- Column 4 — Atmospheric Intelligence: description + "Learn more →" + OrbitalVisual (uikit, opacity 30%)
- Location updated: "Aotearoa New Zealand" → "Los Angeles, CA"
- Added OrbitalVisual import

**Home.tsx — Section Order**
- Removed: WhatWeCreate, HowWeWork, CinematicStatement, TrustSignal
- Added: Footer import (direct render in page)
- Final order: Hero → Philosophy → Pathways → LumoCaseStudyTeaser → EmergingSystems → ClosingSection → Footer
- Meta title updated: "Echo in Ink — We design worlds"
- Meta description updated to match new studio positioning

**Build**
- TypeScript: 0 errors
- Vite build: 484 modules, exit 0
- Image optimizer ENOENT errors: pre-existing (avifenc/cwebp/pngquant binaries absent from environment)

**Known Outstanding**
- `/systems` route does not exist — EmergingSystems and Footer link to it (will 404)
- Orphaned components (WhatWeCreate, HowWeWork, CinematicStatement, TrustSignal) preserved but unused on homepage

---

## 2025-05-26 (Second Refinement Pass)

### 7-Phase Compression + Refinement

**Phase 1 — What We Create Atmospheric Enhancement**
- Added faint orbital traces and horizontal motion accents
- Subtle vertical linework connecting capability rows
- Restrained hover glow on rows — radial gradient at 0.04 opacity
- Deeper tonal layering with bottom gradient fade
- GPU-friendly effects only (opacity transforms, blur)

**Phase 2 — Hero Grounding Refinement**
- Added second grounding line beneath supporting positioning line
- Line: "For founders shaping identities, systems, and digital worlds with emotional precision."
- Whisper-level opacity (0.22), narrow width (36ch), quiet 11-12px typography
- Stabilizes composition without reducing mystery or spaciousness

**Phase 3 — Readability Tuning (+8-12%)**
- Micro labels: `.ei-eyebrow` 0.32 → 0.36 (+12.5%)
- Card descriptions: `.ei-card-description` 0.50 → 0.56 (+12%)
- Supporting text: `.ei-body-small` 0.35 → 0.40 (+14%)
- Atmosphere text: `.ei-atmosphere-text` 0.30 → 0.34 (+13%)
- Navigation: `.ei-link` 0.45 → 0.50 (+11%), hover 0.70 → 0.75
- Subtle links: `.ei-link-subtle` 0.35 → 0.40 (+14%), hover 0.55 → 0.60
- Hierarchy preserved, softness maintained

**Phase 4 — Card Archetype Differentiation**
- Added `archetype` prop to GlowCard: 'sessions' | 'identity' | 'worlds'
- **Sessions**: Geometric precision, structured glow, technical vignette (35% center transparent)
- **Identity**: Softer gradients, fluid glow diffusion, emotional vignette (40% center transparent)
- **Worlds**: Spatial depth, architectural atmosphere, elliptical vignette (20% center, bottom-weighted)
- Each archetype has unique shadow depth, overlay intensity, and edge glow characteristics

**Phase 5 — How We Work (Engagement Clarity)**
- Created `HowWeWork.tsx` — minimal operational anchor
- Four phases: Strategic Foundation → Identity System → Digital Experience → Atmospheric Launch
- Elegant vertical flow with connecting gradient line between phases
- Phase numbers as minimal indicators (01, 02, 03, 04)
- No corporate timeline UI, no process graphics
- Cinematic spacing with calm tonal depth

**Phase 6 — Footer Polish (Subtraction)**
- Simplified atmospheric layers — single radial gradient instead of multiple
- Reduced bottom gradient complexity
- CTA gap increased 6→10 for better visual separation
- Middle section padding reduced: py-10/14 → py-8/10
- Grid gaps tightened: 10/6 → 8/6
- Bottom section padding compressed: py-8/10 → py-6/8
- Final breath height reduced: 8/12 → 6/8
- Bottom dissolve height reduced: 24px → 16px

**Phase 7 — Mobile + Performance QA**
- All components use responsive breakpoints (sm, md, lg)
- Touch-friendly tap targets maintained
- Reduced blur rendering where possible (60-80px vs 100px)
- Consolidated gradient layers to minimize repaint
- GPU-friendly motion (opacity, transform only)
- No aggressive parallax or scroll jacking
- Clean compositing with `pointer-events-none` on atmospheric layers

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
