# Echo in Ink — Dead Code & Unused File Audit
**Generated:** Phase 1 — Audit Only (no deletions performed)
**Project:** `/Users/meltmyheart/Documents/GitHub/echoinink`
**Stack:** Vite + React + TypeScript + Tailwind CSS 3 + Framer Motion v12

---

## Methodology

Full dependency trace across all `src/` directories:
- Checked every import chain from `main.tsx` → `App.tsx` → pages → components → lib/hooks
- Searched for direct imports, barrel re-exports, CSS class usage, and asset references
- No dynamic imports or lazy-loaded routes exist in this codebase
- No MDX, JSON-driven content, or runtime asset loading beyond direct imports

---

## 1. Definitely Unused — Files with zero external consumers

### `src/pages/Works.tsx`
- **Why unused:** `App.tsx` imports `WorksPage` from `@/pages/WorksPage` for the `/works` route. `Works.tsx` is a completely separate, earlier version of the same page. It exports a default `Works` component that is never imported anywhere.
- **What replaced it:** `src/pages/WorksPage.tsx`
- **Risk:** None — zero import references found across entire codebase.
- **Confidence:** HIGH

### `src/components/FeaturedWorkPreview.tsx`
- **Why unused:** No file in the project imports `FeaturedWorkPreview`. It also imports `HOVER` from `@/lib/motion` which doesn't exist in that file — it would fail to compile if it were ever imported.
- **What replaced it:** `src/components/SelectedWorks.tsx` (current works display)
- **Risk:** None.
- **Confidence:** HIGH

### `src/components/FeaturedWorkPreview 2.tsx`
- **Why unused:** Duplicate/variant of `FeaturedWorkPreview.tsx` with a space in filename. Also imports `HOVER` from `@/lib/motion` (non-existent export). Never imported anywhere.
- **What replaced it:** `src/components/SelectedWorks.tsx`
- **Risk:** None. The space in the filename also makes this problematic for some tooling.
- **Confidence:** HIGH

### `src/components/AtmospherePause.tsx`
- **Why unused:** Only references are the 2 internal self-references (own imports). No page or component imports it.
- **What replaced it:** The current `CinematicStatement.tsx` fills a similar breathing-moment role on the homepage.
- **Risk:** Low — it's a complete, self-contained cinematic section. Could be revived later.
- **Confidence:** HIGH

### `src/components/AtmosphericContinuity.tsx`
- **Why unused:** Exports `AtmosphericContinuity`, `AtmosphericBridge`, and `AtmosphericVeil`. None of these are imported anywhere outside the file itself. The `atmosphericBridge` export in `motion-cinematic.ts` is a similarly-named variant but is a different `Variants` object.
- **What replaced it:** Inline gradient divs used directly in page components.
- **Risk:** Low — sophisticated component, may have been planned for future use.
- **Confidence:** HIGH

### `src/components/BackgroundLayer.tsx`
- **Why unused:** No file imports `BackgroundLayer`. Uses `ei-hero-bg-dark-16x9.png`, `ei-hero-bg-dark-21x9.png`, and `ei-hero-bg-dark-mobile-9x16.png`.
- **What replaced it:** `HeroBackground.tsx` (which uses the `ei-min-hero-*` assets instead).
- **Risk:** Removing this makes the 3 `ei-hero-bg-dark-*` assets unused as well (see Section 5).
- **Confidence:** HIGH

### `src/components/CinematicSection.tsx`
- **Why unused:** No file imports `CinematicSection`. Uses `cinematic.ts` types and both `useScrollEmotion` + `useAtmosphericLight` hooks (see cascade effects below).
- **What replaced it:** Sections are built inline in each page component using `motion-cinematic.ts` variants directly.
- **Risk:** Medium — removing this breaks the only callers of `useScrollEmotion` and `useAtmosphericLight`, which then become orphaned too.
- **Confidence:** HIGH

### `src/components/CinematicProvider.tsx`
- **Why unused:** Never imported in `App.tsx`, `Layout.tsx`, or any page. Imports `ScrollState`, `SectionRole`, `DensityLevel`, and `SECTION_ROLES` from `@/lib/cinematic` — **none of these are exported from `cinematic.ts`**. This file would fail TypeScript compilation if imported.
- **What replaced it:** Global cinematic state is not used; each component handles its own motion locally.
- **Risk:** None for deletion. Has a broken import chain.
- **Confidence:** HIGH

### `src/components/SignatureMoment.tsx`
- **Why unused:** No file imports `CinematicReveal`, `DepthTransition`, `AtmosphericDissolve`, `ImmersiveEi`, or `InkDiffusion`. All 5 exported components are self-contained within the file.
- **What replaced it:** Inline motion in each page; `SignatureCaseStudy.tsx` handles the LUMO moment.
- **Risk:** Low — well-built components that could be used in future case studies.
- **Confidence:** HIGH

### `src/components/StarDivider.tsx`
- **Why unused:** No file imports `StarDivider`. The SVG content is embedded inline in the component.
- **What replaced it:** None — decorative dividers are not used in the current layout.
- **Risk:** None.
- **Confidence:** HIGH

### `src/components/LoadingScreen.tsx`
- **Why unused:** Never imported anywhere. `App.tsx` uses `PageTransition` for loading states.
- **What replaced it:** `PageTransition.tsx` and its `SectionLoading` export.
- **Risk:** None.
- **Confidence:** HIGH

### `src/components/StudioNotes.tsx`
- **Why unused:** Not imported in current `Home.tsx`. Old memory indicates it was previously a homepage section but has been removed from the composition.
- **What replaced it:** `CinematicStatement.tsx` now fills the breathing/authored moment role.
- **Risk:** Low — contains authored copy that may want to be preserved before deletion.
- **Confidence:** HIGH

### `src/components/StudioIntro.tsx`
- **Why unused:** Not imported in current `Home.tsx`. Previously a homepage section.
- **What replaced it:** `WhatWeCreate.tsx` fills the studio introduction role.
- **Risk:** Low — authored copy.
- **Confidence:** HIGH

### `src/components/WorkWithStudio.tsx`
- **Why unused:** Not imported anywhere in the current codebase.
- **What replaced it:** `Pathways.tsx` serves the same role (linking to Identity/Sessions/Worlds).
- **Risk:** Low — authored content.
- **Confidence:** HIGH

---

## 2. Probably Unused — High likelihood, one degree of separation

### `src/components/HeroMonogram.tsx`
- **Why probably unused:** Never imported in `Hero.tsx`. The hero uses `HeroBackground`, `HeroLighting`, `HeroHeading`, and `HeroCTA` — but not `HeroMonogram`. The monogram image (`monogram-balanced.png`) is imported here but not used in the hero layout.
- **What replaced it:** Monogram is not currently rendered in the hero section.
- **Risk:** Medium — intentional removal or forgotten reconnection unclear. Asset `monogram-balanced.png` becomes unused if this is deleted.
- **Confidence:** HIGH (unused), MEDIUM (intentionality)

### `src/components/HeroReflection.tsx`
- **Why probably unused:** Never imported in `Hero.tsx` or anywhere else.
- **What replaced it:** Reflection effects are now handled with inline CSS gradients in `HeroLighting.tsx`.
- **Risk:** Low.
- **Confidence:** HIGH

---

## 3. Duplicate / Replaced Systems

### `src/lib/cinematic.ts` vs `src/lib/motion-cinematic.ts`
- **Issue:** Two motion token systems with overlapping concerns. `cinematic.ts` defines `EASE`, `TIME`, `INK`, `LIGHT`, `GLOW`, `DENSITY`, `ROLE`, `THRESHOLD`, `SILENCE`, and `variants`. `motion-cinematic.ts` defines `EASE_CINEMATIC`, `EASE_SOFT`, `EASE_LUXURY`, `DURATION`, `VIEWPORT`, and a full library of Framer Motion variants.
- **Current reality:** `cinematic.ts` is only imported by `CinematicSection.tsx` (orphaned), `CinematicProvider.tsx` (orphaned, broken), `useScrollEmotion.ts` (only used by `CinematicSection`), and `useAtmosphericLight.ts` (only used by `CinematicSection`). **`motion-cinematic.ts` is the active system** — imported by 24 files.
- **Replacement:** `motion-cinematic.ts` has fully superseded `cinematic.ts` in practice.
- **Risk:** Medium — `cinematic.ts` is architecturally sophisticated and may represent future intentions. However it is currently dead weight.
- **Confidence:** HIGH (`cinematic.ts` is the superseded system)

### `src/lib/motion.ts` (partially superseded)
- **Issue:** `motion.ts` is the original motion token file. Used by `SelectedWorks.tsx`, `SignatureCaseStudy.tsx`, `StudioNotes.tsx` (orphaned), `FeaturedWorkPreview.tsx` (orphaned), `FeaturedWorkPreview 2.tsx` (orphaned), and `Works.tsx` (orphaned). Of active, non-orphaned files: only `SelectedWorks.tsx` and `SignatureCaseStudy.tsx` still import from it.
- **Replacement:** `motion-cinematic.ts` is the dominant system. The 2 active consumers (`SelectedWorks`, `SignatureCaseStudy`) could be migrated.
- **Risk:** Medium — 2 active files still import from it.
- **Confidence:** MEDIUM (can't delete yet without migration)

### `src/styles/tokens/` directory (entire tree)
- **Issue:** All 6 token files (`spacing.ts`, `typography.ts`, `radius.ts`, `shadows.ts`, `motion.ts`, `layout.ts`) and `index.ts` are used *only* by each other (the index assembles them). Zero imports of `@/styles/tokens` or any sub-path exist anywhere in `src/`.
- **What replaced them:** CSS custom properties in `tokens.css` + Tailwind config are the active design token system.
- **Risk:** Medium — clearly planned infrastructure, but currently dead.
- **Confidence:** HIGH

---

## 4. Legacy Experimental Files

### `src/lib/brand.ts`
- **Why legacy:** Zero imports across the codebase. Defines color, glow, gradient, font, and spacing tokens that duplicate what's in `tokens.css` CSS vars and `tailwind.config.ts`.
- **What replaced it:** CSS custom properties (`--ei-aqua`, `--ei-violet`, etc.) and Tailwind config.
- **Risk:** None for deletion.
- **Confidence:** HIGH

### `src/lib/useMotion.ts`
- **Why legacy:** Only imported by `AtmosphericCursor.tsx`. Provides `useMotion()` (wraps Framer's `useReducedMotion`) and `useMotionProps()`. The rest of the codebase uses `useReducedMotion` from `framer-motion` directly without this wrapper.
- **Risk:** Low — `AtmosphericCursor.tsx` is active. Cannot delete without updating `AtmosphericCursor.tsx` to import from `framer-motion` directly.
- **Confidence:** MEDIUM (wrapper is redundant; the file isn't deletable yet without a 1-line update)

### `src/components/CinematicStatement.tsx`
- **Why to review:** Still active (used by `Home.tsx`), but uses `motion-cinematic.ts` inline rather than the `CinematicSection` system it was designed to pair with.
- **Risk:** Keep — active component.
- **Confidence:** N/A (not a deletion candidate, flagged for context)

---

## 5. Unused Assets

The following asset files have **zero references** anywhere in `src/`:

### Confirmed Unused (HIGH confidence)
| Asset | Notes |
|---|---|
| `src/assets/Identity.png` | No import or string reference in any source file |
| `src/assets/Sessions.png` | No import or string reference |
| `src/assets/Worlds.png` | No import or string reference |
| `src/assets/Systems.png` | No import or string reference |
| `src/assets/Vault.png` | No import or string reference |
| `src/assets/lumocasestudy.png` | No import (the teaser uses `ei-lumofeatured-bg.png` instead) |
| `src/assets/watercolor.png` | No import or string reference |
| `src/assets/hero-ink-light.png` | No import or string reference |
| `src/assets/monogram_elevated.png` | No import (underscore variant, unused) |
| `src/assets/monogram_ribbon.png` | No import (underscore variant, unused) |
| `src/assets/monogram-hero.png` | No import (dash variant, unused) |
| `src/assets/ei-bg-mono.png` | No import or string reference |
| `src/assets/ei-bg-moono.png` | No import (typo variant of above; 2.4MB) |
| `src/assets/star-divider.svg` | No import; `StarDivider.tsx` embeds its SVG inline |
| `src/assets/ei-hero-16x9.png` | No import (different from `ei-min-hero-16x9.png`) |
| `src/assets/ei-hero-16x9.webp` | No import |
| `src/assets/ei-hero-16x9.avif` | No import |
| `src/assets/ei-hero-21x9.png` | No import |
| `src/assets/ei-hero-21x9.webp` | No import |
| `src/assets/ei-hero-21x9.avif` | No import |
| `src/assets/ei-hero-9x16.png` | No import |
| `src/assets/ei-hero-9x16.webp` | No import |
| `src/assets/ei-hero-9x16.avif` | No import |
| `src/assets/ei-hero-bg-light-16x9.png` | No import |
| `src/assets/ei-hero-bg-light-21x9.png` | No import |
| `src/assets/ei-hero-bg-light-mobile-9x16.png` | No import |
| `src/assets/ei-hero-mobile-bg-light.png` | Duplicate of above path variant |
| `src/assets/ei-hero-mobile-bg-dark.png` | No import — `BackgroundLayer.tsx` uses `ei-hero-bg-dark-mobile-9x16.png` |
| `src/assets/ei-min-hero-21x9.png` | No import |
| `src/assets/ei-min-hero-21x9.webp` | No import |
| `src/assets/ei-min-hero-21x9.avif` | No import |
| `src/assets/ei-min-hero-9x16-bot.png` | No import |
| `src/assets/ei-min-hero-9x16-bot.webp` | No import |
| `src/assets/ei-min-hero-9x16-bot.avif` | No import |
| `src/assets/ei-minimal-dark-21x9.png` | No import |
| `src/assets/ei-minimal-dark-21x9.webp` | No import |
| `src/assets/ei-minimal-dark-21x9.avif` | No import |
| `src/assets/ei-dark-mono-16x9 2.png` + `.webp` + `.avif` | No import (numbered variants) |
| `src/assets/ei-dark-mono-16x9 3.png` + `.webp` + `.avif` | No import |
| `src/assets/ei-dark-mono-16x9 4.png` + `.webp` + `.avif` | No import |
| `src/assets/ei-dark-mono-21x9.png` + `.webp` + `.avif` | No import |
| `src/assets/ei-dark-mono-21x9 2–7.png` + `.webp` + `.avif` (×6 sets) | No import |
| `src/assets/ei-dark-mono-9x16 2.png` + `.webp` + `.avif` | No import |
| `src/assets/ei-dark-mono-9x16 3.png` + `.webp` + `.avif` | No import |
| `src/assets/ei-dark-mono-9x16 4.png` + `.webp` + `.avif` | No import |

### Unused Due to Orphaned Components (MEDIUM — cascades from component deletion)
| Asset | Orphaned By |
|---|---|
| `src/assets/ei-hero-bg-dark-mobile-9x16.png` | `BackgroundLayer.tsx` (orphaned) |
| `src/assets/ei-hero-bg-dark-16x9.png` | `BackgroundLayer.tsx` (orphaned) |
| `src/assets/ei-hero-bg-dark-21x9.png` | `BackgroundLayer.tsx` (orphaned) |
| `src/assets/monogram-balanced.png` | `HeroMonogram.tsx` (orphaned) |
| `src/assets/ei-dark-hero-16x9.png` + `.webp` + `.avif` | No confirmed active reference found |
| `src/assets/ei-dark-hero-21x9.png` + `.webp` + `.avif` | No confirmed active reference found |
| `src/assets/ei-dark-hero-9x16.png` + `.webp` + `.avif` | No confirmed active reference found |

---

## 6. Unused Styles

### `src/styles/atmosphere.css`
- **Why:** Defines `.ei-nebula-violet` and `.ei-nebula-cyan`. Zero usage of these class names anywhere in `src/`.
- **Note:** The file is imported by `globals.css` so it loads in production. Pure dead CSS.
- **Confidence:** HIGH

### `src/styles/tokens/` (entire directory — 7 TypeScript files)
- **Why:** As noted above, zero imports. These are TS-based design tokens that were never wired to any consumer.
- **Confidence:** HIGH

---

## 7. Unused Types / Utilities

### `src/lib/cinematic.ts` exports (cascade from `CinematicSection` being orphaned)
The following exports from `cinematic.ts` have **zero active consumers**:
- `ScrollState`, `SectionRole`, `DensityLevel`, `SECTION_ROLES` — referenced only in `CinematicProvider.tsx` (itself orphaned, and these don't exist in the file anyway — broken import)
- `Density`, `Role`, `Phase` types + `DENSITY`, `ROLE`, `THRESHOLD`, `SILENCE`, `INK`, `LIGHT`, `GLOW`, `TIME`, `transition`, `variants`, `Cinematic` (default) — referenced only by `CinematicSection.tsx` (orphaned) and the two hooks below

### `src/hooks/useScrollEmotion.ts`
- **Why unused:** Only consumer is `CinematicSection.tsx` (orphaned). Zero direct imports elsewhere.
- **Confidence:** HIGH (after `CinematicSection` removal)

### `src/hooks/useAtmosphericLight.ts`
- **Why unused:** Only consumer is `CinematicSection.tsx` (orphaned). Zero direct imports elsewhere.
- **Confidence:** HIGH (after `CinematicSection` removal)

### `src/hooks/useInViewSuspension.ts`
- **Why unused:** Zero imports anywhere in the codebase. A standalone hook with no consumers.
- **Confidence:** HIGH

### `src/lib/brand.ts`
- **Why unused:** Zero imports anywhere. See Section 4.
- **Confidence:** HIGH

### `src/components/PageTransition.tsx` — `SectionLoading` and `ImageLoading` exports
- **Why unused:** `PageTransition` itself is active (imported by `App.tsx`). But `SectionLoading` and `ImageLoading` are never imported anywhere.
- **Risk:** Low — the named exports can be removed from the file without touching the component.
- **Confidence:** HIGH

### `src/lib/motion.ts` — `motion` export (legacy compat block)
- **Why:** The `motion` named export at the bottom (legacy compatibility object) is never imported. Only `EASE`, `DURATION`, `VIEWPORT`, `STAGGER`, `presets` are used. The `presets` object is also never imported (only the raw constants are).
- **Confidence:** MEDIUM

---

## 8. Suspicious Barrel Exports

### `src/components/layout/index.ts`
- **Why suspicious:** Exports `Container`, `Section`, `SectionHeading`, `Stack`, `Grid`, `Cluster`, `Spacer`. However, all consumers import from the individual file paths (e.g., `@/components/layout/Section`), not from the barrel. The barrel `index.ts` itself is only referenced by `App.tsx` for the `Layout` import — but `Layout` is in `@/components/Layout.tsx`, not the layout subfolder.
- **Risk:** The barrel is effectively dead but harmless. The individual files are active.
- **Confidence:** MEDIUM

---

## 9. Safe Deletion Candidates (Grouped Batches)

These are files where deletion risk is LOW and confidence is HIGH. Recommended execution order to avoid cascade errors:

### Batch A — Orphaned pages (no route, no import)
```
src/pages/Works.tsx
```

### Batch B — Orphaned components (no import, self-contained)
```
src/components/FeaturedWorkPreview.tsx
src/components/FeaturedWorkPreview 2.tsx
src/components/LoadingScreen.tsx
src/components/StarDivider.tsx
src/components/StudioNotes.tsx
src/components/StudioIntro.tsx
src/components/WorkWithStudio.tsx
src/components/HeroReflection.tsx
```

### Batch C — Orphaned cinematic system (cascade — delete together)
```
src/components/CinematicProvider.tsx        ← broken imports (ScrollState etc. don't exist)
src/components/CinematicSection.tsx         ← sole consumer of hooks below
src/components/SignatureMoment.tsx          ← 5 unused exports, no consumers
src/components/AtmospherePause.tsx          ← no consumers
src/components/AtmosphericContinuity.tsx    ← no consumers (3 exports)
src/hooks/useScrollEmotion.ts               ← only used by CinematicSection
src/hooks/useAtmosphericLight.ts            ← only used by CinematicSection
src/lib/cinematic.ts                        ← only used by the above 3
```

### Batch D — Orphaned utilities and design tokens
```
src/lib/brand.ts
src/hooks/useInViewSuspension.ts
src/styles/tokens/index.ts
src/styles/tokens/spacing.ts
src/styles/tokens/typography.ts
src/styles/tokens/radius.ts
src/styles/tokens/shadows.ts
src/styles/tokens/motion.ts
src/styles/tokens/layout.ts
```

### Batch E — Dead CSS
```
src/styles/atmosphere.css                   ← zero class usage (imported in globals.css, remove that import too)
```

### Batch F — Root-level duplicates/artifacts
```
package-lock 2.json                         ← duplicate lockfile with space in name
vite.config.ts.timestamp-1779293795140-e819304c5471b.mjs   ← Vite build artifact
```

### Batch G — Unused assets (very large, safe)
> ⚠️ These are binary assets — verify before deletion. Estimated total size: **~250MB+ across all unused image variants.**
```
src/assets/ei-bg-moono.png                  (2.4MB — typo duplicate)
src/assets/ei-bg-mono.png
src/assets/watercolor.png
src/assets/hero-ink-light.png
src/assets/lumocasestudy.png
src/assets/Identity.png, Sessions.png, Worlds.png, Systems.png, Vault.png
src/assets/monogram_elevated.png, monogram_ribbon.png, monogram-hero.png
src/assets/star-divider.svg
src/assets/ei-hero-16x9.{png,webp,avif}
src/assets/ei-hero-21x9.{png,webp,avif}
src/assets/ei-hero-9x16.{png,webp,avif}
src/assets/ei-hero-bg-light-*.png (×3)
src/assets/ei-hero-mobile-bg-light.png, ei-hero-mobile-bg-dark.png
src/assets/ei-min-hero-21x9.{png,webp,avif}
src/assets/ei-min-hero-9x16-bot.{png,webp,avif}
src/assets/ei-minimal-dark-21x9.{png,webp,avif}
src/assets/ei-dark-hero-16x9.{png,webp,avif}
src/assets/ei-dark-hero-21x9.{png,webp,avif}
src/assets/ei-dark-hero-9x16.{png,webp,avif}
src/assets/ei-dark-mono-16x9 2.{png,webp,avif} through 4
src/assets/ei-dark-mono-21x9.{png,webp,avif} + variants 2–7
src/assets/ei-dark-mono-9x16 2.{png,webp,avif} through 4
```
> **Cascading assets** (safe only after Batch B/C deletions confirmed):
```
src/assets/ei-hero-bg-dark-mobile-9x16.png
src/assets/ei-hero-bg-dark-16x9.png
src/assets/ei-hero-bg-dark-21x9.png
src/assets/monogram-balanced.png            (after HeroMonogram.tsx confirmation)
```

---

## 10. Requires Manual Review

### `src/components/BackgroundLayer.tsx` + its 3 assets
- **Why:** Orphaned component (no consumers) but the `ei-hero-bg-dark-*` assets are distinctive dark-mode hero backgrounds that may be intended for future use or were recently swapped out for the `ei-min-hero-*` family.
- **Recommendation:** Confirm `HeroBackground.tsx` is the final hero background approach, then delete.

### `src/components/HeroMonogram.tsx` + `src/assets/monogram-balanced.png`
- **Why:** Not imported in `Hero.tsx` — but the monogram is a core brand symbol. This may be an intentional temporary removal or a forgotten re-attachment point.
- **Recommendation:** Confirm whether the monogram should appear in the hero. If no, delete both.

### `src/lib/motion.ts` (partial)
- **Why:** 2 active files (`SelectedWorks.tsx`, `SignatureCaseStudy.tsx`) still import from it. Cannot delete without a migration to `motion-cinematic.ts`.
- **Recommendation:** Migrate those 2 files to `motion-cinematic.ts`, then delete `motion.ts`.

### `src/lib/useMotion.ts`
- **Why:** Redundant wrapper but `AtmosphericCursor.tsx` uses it. 1-line fix to update the cursor to import directly from `framer-motion`.
- **Recommendation:** Update `AtmosphericCursor.tsx` to use `useReducedMotion` from `framer-motion` directly, then delete `useMotion.ts`.

### Root-level audit docs
The following markdown files exist at the project root and appear to be developer audit/migration notes:
```
MOTION_ARCHITECTURE_AUDIT.md
MOTION_MIGRATION_SUMMARY.md
VERTICAL_RHYTHM_AUDIT.md
CHANGELOG.md
```
- **Recommendation:** Keep or archive to a `docs/` folder — not code, but not noise if deliberately maintained.

### `src/components/layout/index.ts` barrel
- **Why:** No consumers import from the barrel path. Individual files are imported directly. Barrel could be removed, or consumers could be updated to use it for consistency.
- **Recommendation:** Either remove the barrel (low value) or standardize all layout imports through it.

---

## Summary Counts

| Category | Count |
|---|---|
| Definitely unused components/pages | 16 files |
| Probably unused components | 2 files |
| Superseded library systems | 2 files (cinematic.ts, tokens/ dir) |
| Orphaned hooks | 3 files |
| Unused utility files | 3 files |
| Unused CSS (dead classes) | 1 file |
| Unused assets (confirmed) | ~75+ files |
| Broken import chain | 1 file (CinematicProvider) |
| Duplicate lockfile | 1 file |
| Build artifact in repo | 1 file |

---

## ⚠️ Do NOT Delete

The following are active and must be preserved:
- All `motion-cinematic.ts` exports (24 active consumers)
- `AtmosphericCursor.tsx`, `AtmosphericSystem.tsx` (active)
- `CinematicStatement.tsx` (active, used by Home)
- All hero sub-components: `Hero.tsx`, `HeroBackground.tsx`, `HeroHeading.tsx`, `HeroCTA.tsx`, `HeroLighting.tsx`
- All layout primitives: `Container.tsx`, `Section.tsx`, `SectionHeading.tsx`, `Stack.tsx`, `Grid.tsx`, `Cluster.tsx`, `Spacer.tsx`
- All active pages: `Home.tsx`, `WorksPage.tsx`, `Identity.tsx`, `SessionsPage.tsx`, `WorldsPage.tsx`, `LumoPage.tsx`, `Studio.tsx`, `Contact.tsx`
- All active CSS: `globals.css`, `tokens.css`, `typography.css`, `typography-enhanced.css`, `layout.css`, `spacing-enhanced.css`, `atmosphere-enhanced.css`, `hero.css`, `mobile-refinements.css`, `forms-luxury.css`, `browser-chrome.css`
- Active assets: `ei-min-hero-16x9.*`, `ei-min-hero-9x16.*`, `ei-lumofeatured-bg.png`, `ei-sessions-9x16.png`, `ei-identity-9x16.png`, `ei-worlds-9x16.png`, `ei-systems-bg.png`, `ei-vault-bg.png`, `echo-in-ink-wordmark.png`

---

*Awaiting confirmation to proceed with Phase 2 deletions.*
