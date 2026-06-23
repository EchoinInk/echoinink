# Echo in Ink Website Structure and Design-System Audit

## Purpose and Scope

This document is a factual developer-facing reference for an external visual/design critique of the current Echo in Ink website. It records the active implementation, design-system surfaces, page structure, and review risks visible in the repository. It is not a redesign proposal and does not recommend fixes.

The application is a Vite React TypeScript site. Runtime routing is handled by `react-router-dom` in `src/App.tsx`, with lazy-loaded route files under `src/pages/`. Styling is loaded from `src/styles/globals.css`, which imports token, base, component, and utility CSS layers before Tailwind base/components/utilities. Motion is implemented with Framer Motion plus local motion token modules.

Primary runtime entry points:

| File | Role |
| --- | --- |
| `src/main.tsx` | Creates the React root, renders `<App />`, and imports `src/styles/globals.css`. |
| `src/App.tsx` | Provides `HelmetProvider`, `BrowserRouter`, the skip link, global `Layout`, `PageTransition`, lazy route imports, and active route declarations. |
| `src/components/layout/Layout.tsx` | Adds the fixed header and desktop atmospheric cursor around routed content. |
| `src/components/layout/PageShell.tsx` | Supplies the page `<main>`, atmosphere class, optional top spacing, page glow/vignette layers, optional Helmet metadata, and shared footer. |
| `src/styles/globals.css` | Loads all active CSS layers and page/component styles. |

Project and tooling files inspected include `package.json`, `package-lock.json`, `vite.config.ts`, `vitest.config.ts`, `tailwind.config.ts`, `postcss.config.js`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `eslint.config.js`, `index.html`, `public/robots.txt`, `components.json`, `pnpm-workspace.yaml`, and `vite-env.d.ts`.

### Tooling, Metadata, Robots, and Deployment Observations

| Area | Current repository evidence |
| --- | --- |
| Package scripts | `package.json` defines `dev`, `build`, `build:dev`, `lint`, `typecheck`, `preview`, `test`, and `test:watch`. |
| Runtime/build stack | Vite 5, React 18, TypeScript, `react-router-dom`, `framer-motion`, and `react-helmet-async` are the active application dependencies. |
| Vite config | `vite.config.ts` uses `@vitejs/plugin-react-swc`, the `@` alias to `./src`, dev server port `8080`, disabled HMR overlay, development-only `lovable-tagger`, and image optimization via `@vheemstra/vite-plugin-imagemin`. |
| Tailwind config | `tailwind.config.ts` scans `./src/**/*.{ts,tsx}` plus legacy `pages`, `components`, and `app` globs, registers `tailwindcss-animate`, and keeps both shadcn-style HSL variable slots and Echo in Ink token aliases. |
| TypeScript config | `tsconfig.json` references `tsconfig.app.json` and `tsconfig.node.json`; the app config includes `src`, uses bundler module resolution, and currently has `strict: false`. |
| ESLint config | `eslint.config.js` uses flat config with `@eslint/js`, `typescript-eslint`, `react-hooks`, `react-refresh`, browser globals, and ignores `dist`. |
| Test config | `vitest.config.ts` uses React SWC, jsdom, `./src/test/setup.ts`, and includes `src/**/*.{test,spec}.{ts,tsx}`. The referenced `src/test/setup.ts` was not present in the inspected `src/` file list. |
| Metadata | `index.html` sets title, description, author, dark color scheme, theme color, favicon, Google font links, Open Graph/Twitter metadata, empty social image values, and preloads `/home-hero-desktop.webp`. |
| Robots and sitemap | `public/robots.txt` allows major crawlers and all user agents. No source `sitemap.xml` was found in root or `public/` during the filename scan. |
| Deployment config | No `vercel.json`, `netlify.toml`, `firebase.json`, or `.firebaserc` file was found in the root-depth deployment filename scan. |
| Package-manager metadata | `package-lock.json` is present. `pnpm-workspace.yaml` is also present and lists allowed build dependencies, but no `pnpm-lock.yaml` was found in the inspected root file list. |

## 1. Folder Structure

### Active `src` Structure Tree

```text
src/
  App.tsx
  main.tsx
  assets/
    brand/
    fonts/
    icons/
    imagery/
    projects/
  components/
    archive/
    atmosphere/
    cards/
    dev/
    home/
    layout/
    lumo/
    navigation/
    orbitals/
    sections/
    system/
    ui/
    works/
  data/
  lib/
  pages/
  styles/
    01-tokens/
    02-base/
    03-components/
    04-utilities/
  system/
    motion/
  types/
```

### Folder Responsibilities

| Location | Responsibility |
| --- | --- |
| `src/pages/` | Active route components mounted by `src/App.tsx`. The current route graph includes the homepage, core service pages, booking, works, Lumo case study, contact, systems, archive routes, and an internal orbitals route. |
| `src/components/layout/` | Runtime shells and layout primitives: `Layout`, `PageShell`, `Container`, `Section`, `ContentFrame`, and `EditorialArticleLayout`. |
| `src/components/navigation/` | Fixed responsive header and shared footer. |
| `src/components/home/` | Home-only section components: hero, proof strip, philosophy, creation cards, featured Lumo, systems teaser, and closing CTA. |
| `src/components/sections/` | Shared page-level sections, especially `PageSectionHero` and `CTASection`. Other section files are present but not mounted by the current active graph. |
| `src/components/ui/` | Shared UI and visual primitives: `Button`, `EchoCard`, form controls, `EchoSelect`, `FilterBar`, `IconWell`, `OrbitalVisual`, and `SectionLabel`. |
| `src/components/cards/` | Project card system. `ProjectCard.tsx` is active through Works. `DeliverableCard.tsx`, `PhilosophyCard.tsx`, and `SystemCard.tsx` are present but not active in the current import graph. |
| `src/components/archive/` | Archive constellation and archive index list used by archive routes. |
| `src/components/works/` | Works filter controls and project grid composition. |
| `src/components/lumo/` | Bespoke long-form Lumo case-study implementation. |
| `src/components/atmosphere/` | Atmospheric cursor is active globally. Other atmosphere components exist but are not imported by the current active graph. |
| `src/components/orbitals/` | SVG orbital motif library used by `OrbitalVisual` and multiple active pages. |
| `src/data/` | Structured copy/data for archive, identity, sessions, systems, works, and worlds. |
| `src/styles/01-tokens/` | Core palette, semantic color, component, spacing, type-scale, radius, and motion variables. |
| `src/styles/02-base/` | Typography, layout, browser chrome, and accessibility foundations. |
| `src/styles/03-components/` | Shared cards/forms/buttons/design-system CSS plus page-specific CSS for archive, booking, contact, identity, Lumo, sessions, studio, systems, works, and worlds. |
| `src/styles/04-utilities/` | Mobile rhythm and hover/touch atmosphere adjustments. |
| `src/assets/` | Imported brand, icon, font, hero, section, work, and Lumo project assets. |
| `public/` | Public favicon, robots file, public home hero images, public logo files, placeholder SVG, and local Neue Montreal font files referenced by CSS. |

### Central Architectural Folders

| Folder | Current importance |
| --- | --- |
| `src/pages/` | Source of truth for active route composition. |
| `src/components/layout/` | Shared shell, header/footer ownership, content frames, and page section wrappers. |
| `src/styles/01-tokens/` and `src/styles/02-base/` | Global visual primitives for color, typography, spacing, focus, reduced motion, and layout rails. |
| `src/styles/03-components/` | Most route-level visual implementation, including active page CSS. |
| `src/components/ui/` | Active reusable UI primitives and form/filter controls. |
| `src/data/` | Active authored content sources for several routes. |
| `src/assets/imagery/` | Active image source for most page heroes, section panels, and work imagery. |

### Inactive, Archived, Transitional, Unmounted, Empty, or Development-Only Areas

The current repo does not contain the older `src/components/_archive/`, `src/styles/_archive/`, or `src/app/` folders that existed in prior snapshots. Current inactive or transitional surfaces are:

| Area | Classification | Evidence |
| --- | --- | --- |
| `src/components/dev/OrbitalSheet.tsx` | Development-only catalogue | Present under `components/dev`; not in the active import graph from `src/main.tsx` and `src/App.tsx`. |
| `src/pages/OrbitalsPage.tsx` | Internal routed page | Mounted at `/internal/orbitals`; not linked from the public header/footer navigation in `Header.tsx` or `Footer.tsx`. |
| `src/components/atmosphere/AtmospherePause.tsx` | Unmounted | Present but not reached by the active import graph. |
| `src/components/atmosphere/AtmosphericBridge.tsx` | Unmounted | Present but not reached by the active import graph. |
| `src/components/atmosphere/AtmosphericContinuity.tsx` | Unmounted | Present but not reached by the active import graph. |
| `src/components/atmosphere/AtmosphericSystem.tsx` | Unmounted | Present but not reached by the active import graph. |
| `src/components/cards/DeliverableCard.tsx` | Unmounted | Present but not reached by the active import graph. |
| `src/components/cards/PhilosophyCard.tsx` | Unmounted | Present but not reached by the active import graph. |
| `src/components/cards/SystemCard.tsx` | Unmounted | Present but not reached by the active import graph. |
| `src/components/layout/CaseStudyLayout.tsx` | Unmounted | Present but not reached by the active import graph. |
| `src/components/lumo/LumoHero.tsx` | Unmounted | Present but not reached by the active import graph; `/works/lumo` uses `LumoSignatureCaseStudy.tsx`. |
| `src/components/sections/BeforeAfterSection.tsx` | Unmounted | Present but not reached by the active import graph. |
| `src/components/sections/PricingTiers.tsx` | Unmounted | Present but not reached by the active import graph. |
| `src/components/sections/ProcessSteps.tsx` | Unmounted | Present but not reached by the active import graph. |
| `src/components/sections/UseCasesList.tsx` | Unmounted | Present but not reached by the active import graph. |
| `src/components/system/index.ts` | Unmounted barrel | Present but not reached by the active import graph. |
| `src/components/ui/NumberedSectionLabel.tsx` | Unmounted | Present but not reached by the active import graph. |
| `dist/` | Build output | Contains generated files such as `dist/index.html` and `dist/robots.txt`; not an authoring source. |
| `vite.config.ts.timestamp-*.mjs` | Development/config artifacts | Timestamped Vite config files at repo root; not imported by active source. |
| `components.json` | Transitional/tooling metadata | shadcn-style component configuration is present; it references `src/index.css`, while the active runtime CSS entry is `src/styles/globals.css`. |
| `autocommit.sh` and `autocommit.log` | Development automation artifacts | Present at repo root; not imported by runtime source. |
| `screenshot-page.mjs` | Development QA utility | Present at repo root; not imported by runtime source. |
| `cleanup/` and `docs/` | Support/documentation folders | Present at repo root; not mounted by the active route graph. |
| `.DS_Store` files | OS artifacts | Present under `src/`, `src/assets/`, `src/assets/imagery/`, `src/assets/imagery/backgrounds/`, `src/assets/imagery/hero/`, `src/components/`, `src/styles/`, and `public/`. |

## 2. Page Structure

Routes are declared in `src/App.tsx`. All active route components are lazy loaded and rendered inside `Layout` and `PageTransition`. Most public pages use `PageShell`; `/internal/orbitals` does not use `PageShell`.

### Active Route Table

| Route | Page file | Main sections | Shared shell / special behavior |
| --- | --- | --- | --- |
| `/` | `src/pages/HomePage.tsx` | Home hero, proof strip, philosophy, What We Create, featured Lumo, emerging systems, closing section. | Uses `PageShell` with `atmosphere="default"` and `withTopSpacing={false}`. |
| `/identity` | `src/pages/IdentityPage.tsx` | `PageSectionHero`; orientation/use cases; identity kit; coherence panel; process; CTA. | Uses `PageShell` with identity page class; content from `src/data/identityContent.ts`. |
| `/sessions` | `src/pages/SessionsPage.tsx` | `PageSectionHero`; offer/definition; outcomes; process; takeaways; fit; formats; CTA. | Uses `PageShell`; content from `src/data/sessionsContent.ts`. |
| `/booking` | `src/pages/BookingPage.tsx` | Booking intro; multi-step front-end booking workspace; next steps; preparation note; CTA. | Uses `PageShell`; prototype-only booking logic with local state and generated upcoming weekdays. |
| `/worlds` | `src/pages/WorldsPage.tsx` | `PageSectionHero`; definition; audience; architecture; outputs; collaboration; world types; process; CTA. | Uses `PageShell`; content from `src/data/worldsContent.ts`; includes a local scroll helper for definition. |
| `/works` | `src/pages/WorksPage.tsx` | `PageSectionHero`; selected signals; credibility anchor; client reflection; filter/sort and works grid; process framework; CTA. | Uses `PageShell`; active filters and sorts drive `WorkFilterBar` and `WorksGrid`. |
| `/works/lumo` | `src/pages/LumoPage.tsx` | `SignatureCaseStudy`. | Uses `PageShell` with `withFooter={false}`; `Header` returns `null` for this path. |
| `/studio` | `src/pages/StudioPage.tsx` | `PageSectionHero`; philosophy; service pillars; process; featured work; slim CTA. | Uses `PageShell`; largely composed directly in the page file. |
| `/contact` | `src/pages/ContactPage.tsx` | `PageSectionHero`; split contact/form panel; success state; trust signals. | Uses `PageShell`; form state remains client-side. |
| `/systems` | `src/pages/SystemsPage.tsx` | `PageSectionHero`; system architecture categories; featured system; tools/modules; use cases; pathway; CTA. | Uses `PageShell`; content from `src/data/systemsContent.ts`. |
| `/archive` | `src/pages/ArchivePage.tsx` | `PageSectionHero`; featured archive entry; pathway cards; filters/sort; recent notes; index; constellation; CTA. | Uses `PageShell`; archive data from `src/data/archiveContent.ts`. |
| `/archive/atmosphere-is-information` | `src/pages/ArchiveEssayPage.tsx` | Editorial article layout; essay content; related archive entries; CTA. | Uses `PageShell` plus `EditorialArticleLayout`; data from `src/data/archiveContent.ts`. |
| `/archive/notes` | `src/pages/ArchiveNotesPage.tsx` | `PageSectionHero`; featured note; start-here cards; recent notes; browse threads; note index; CTA. | Uses `PageShell`; data from `src/data/archiveContent.ts`. |
| `/archive/map` | `src/pages/ArchiveIndexPage.tsx` | `PageSectionHero`; featured entries; category map; full index; archive constellation; CTA. | Uses `PageShell`; includes `EchoSelect`, `FilterBar`, and archive index composition. |
| `/internal/orbitals` | `src/pages/OrbitalsPage.tsx` | Orbital visual catalogue grid. | Internal/dev-style route; no `PageShell`; not public navigation. |

### Shared Page Patterns

| Pattern | Current implementation |
| --- | --- |
| Hero strategy | `PageSectionHero` is active across Identity, Sessions, Worlds, Works, Studio, Contact, Systems, and archive subroutes. Home uses bespoke Home hero components. Lumo uses a bespoke case-study hero inside `LumoSignatureCaseStudy.tsx`. Booking uses a text-first intro instead of `PageSectionHero`. |
| Page shell usage | Public routes generally use `PageShell`. The shell owns `<main id="main-content">`, atmosphere class, glow/vignette layers, and footer rendering. |
| Header/footer ownership | `Layout` owns `Header` globally. `PageShell` owns `Footer` unless `withFooter={false}`. Lumo case study suppresses both the shared header and footer through path logic and `PageShell` props. |
| Containers | Active pages commonly use `Container size="xl"` and inner wrappers such as `mx-auto max-w-[1180px]` or `.ei-layout-page-rail`. Archive article routes also use `ContentFrame` through `EditorialArticleLayout`. |
| CTAs | Shared `Button` and `CTASection` are active. Page-specific CTA strips also exist in Home and Studio. |
| Labels | `SectionLabel` is the active shared label primitive. Many pages use small uppercase labels with optional index and luminous rule. |
| Motion | Most route sections use `motion.div` or `motion.section` with `staggerContainer`, `driftUp`, `fadeSoft`, and `blurEmergence` from `src/lib/motion-cinematic.ts`. Footer imports from `src/system/motion/cinematic.ts`. |
| Ending patterns | Most pages end with `CTASection` or a route-specific closing component, followed by shared footer unless disabled. |

## 3. Key Components

### Global Layout and Navigation

| Component | File path | Active use | Responsibility | Important behavior |
| --- | --- | --- | --- | --- |
| `Layout` | `src/components/layout/Layout.tsx` | Active globally from `src/App.tsx`. | Wraps routed content. | Adds `AtmosphericCursor` and fixed `Header`; does not create a nested `<main>`. |
| `PageShell` | `src/components/layout/PageShell.tsx` | Active on public routes. | Page `<main>`, atmosphere class, page glow, vignette, optional Helmet metadata, footer. | Supports atmosphere variants `default`, `identity`, `sessions`, `worlds`, `works`, and `studio`; `studio` maps to default atmosphere. |
| `Container` | `src/components/layout/Container.tsx` | Active across most routes and sections. | Tailwind-based max-width and gutter wrapper. | Sizes map to `max-w-4xl`, `max-w-5xl`, `max-w-6xl`, `max-w-[1440px]`, or `max-w-none`; gutters are `px-6 md:px-10 xl:px-16`. |
| `Section` | `src/components/layout/Section.tsx` | Active across most route pages. | Semantic section wrapper. | Maps `none`, `compact`, `intimate`, `standard`, `expansive`, `pause`, and `closing` to CSS rhythm classes. |
| `ContentFrame` | `src/components/layout/ContentFrame.tsx` | Active through `EditorialArticleLayout`. | Content width/gutter wrapper. | Uses `.ei-content-frame-*` classes from `design-system.css`. |
| `EditorialArticleLayout` | `src/components/layout/EditorialArticleLayout.tsx` | Active on `ArchiveEssayPage.tsx`. | Article layout for long-form archive content. | Uses `ContentFrame` and editorial archive CSS classes. |
| `Header` | `src/components/navigation/Header.tsx` | Active globally except `/works/lumo`. | Fixed desktop/mobile navigation. | Uses wordmark asset, route-active checks, Framer Motion entrance, mobile menu sheet, and hides on Lumo case-study route. |
| `Footer` | `src/components/navigation/Footer.tsx` | Active through `PageShell` when `withFooter` is true. | Shared footer navigation/contact/brand block. | Uses `OrbitalVisual`, Framer Motion, and `src/system/motion/cinematic.ts`. |
| `PageTransition` | `src/components/system/PageTransition.tsx` | Active around all routes. | Route fade, scroll reset, atmospheric loading overlay. | Bypasses motion for `prefers-reduced-motion`; uses a 50ms ready delay and opacity-only route transition. |

### Heroes and Major Sections

| Component | File path | Active use | Responsibility | Important behavior |
| --- | --- | --- | --- | --- |
| `PageSectionHero` | `src/components/sections/PageSectionHero.tsx` | Active on most non-home routes. | Shared image-led hero. | Uses `<picture>` with desktop/mobile sources, layered scrims, `Container`, CTA buttons, Framer Motion stagger, and an `sr-only` image alt fallback. |
| `Hero` | `src/components/home/HomeHero.tsx` | Active on `/`. | Bespoke home hero composition. | Composes Home hero background, heading, and CTA components. |
| `HomeHeroBackground` | `src/components/home/HomeHeroBackground.tsx` | Active through Home hero. | Home hero imagery and atmosphere. | Uses public home hero images rather than imported `src/assets` hero images. |
| `HomeProofStrip` | `src/components/home/HomeProofStrip.tsx` | Active on `/`. | Compact proof/signals section. | Home-specific implementation. |
| `Philosophy` | `src/components/home/HomePhilosophySection.tsx` | Active on `/`. | Home philosophy section. | Uses local layout and motion patterns. |
| `WhatWeCreate` | `src/components/home/HomeWhatWeCreate.tsx` | Active on `/`. | Home capability cards. | Uses home-specific card classes from `cards.css`. |
| `LumoCaseStudyTeaser` | `src/components/home/HomeFeaturedLumo.tsx` | Active on `/`. | Featured Lumo teaser. | Uses imported Lumo feature imagery and reduced-motion checks. |
| `EmergingSystems` | `src/components/home/HomeOurSystems.tsx` | Active on `/`. | Systems teaser section. | Home-specific composition. |
| `ClosingSection` | `src/components/home/HomeClosingSection.tsx` | Active on `/`. | Home closing CTA. | Home-specific ending pattern. |
| `CTASection` | `src/components/sections/CTASection.tsx` | Active on many route endings. | Shared CTA panel/strip. | Variants are `slim`, `imagePanel`, and `editorialInvitation`; accepts optional image and shared `SectionLabel`. |
| `SignatureCaseStudy` | `src/components/lumo/LumoSignatureCaseStudy.tsx` | Active on `/works/lumo`. | Bespoke Lumo long-form case study. | Contains section rail/mobile nav, local active-section observer, narrative panels, Lumo cloud assets, and extensive dedicated CSS. |

### Cards and Work Presentation

| Component | File path | Active use | Responsibility | Important behavior |
| --- | --- | --- | --- | --- |
| `EchoCard` | `src/components/ui/EchoCard.tsx` | Active across archive, booking, works, systems, contact, and other pages. | Generic semantic card wrapper. | Supports `article`, `aside`, `div`, `li`, and `section`; exposes `data-variant`, `data-interactive`, and `data-padding` for CSS. |
| `ProjectCard` | `src/components/cards/ProjectCard.tsx` | Active through `WorksGrid`. | Work/project card. | Uses `EchoCard`, optional `Link`, lazy image, status/category metadata, hover lift gated by reduced-motion preference. |
| `WorksGrid` | `src/components/works/WorksGrid.tsx` | Active on `/works`. | Filters and sorts work projects, then renders selected studies and fragments. | Uses `worksProjects`, `WorkFilter`, `WorkSort`, empty state, `ProjectCard`, and a fragments subsection. |
| `WorkFilterBar` | `src/components/works/WorkFilterBar.tsx` | Active on `/works`. | Work filter and sort controls. | Uses filter buttons and `EchoSelect` sorting. |
| `ArchiveIndexList` | `src/components/archive/ArchiveIndexList.tsx` | Active on archive routes. | Table/list of archive entries. | Uses `EchoCard`, `Link`, `IconWell`, `OrbitalVisual`, and data-driven rows. |
| `ArchiveConstellation` | `src/components/archive/ArchiveConstellation.tsx` | Active on archive routes. | Decorative archive theme map. | Uses archive theme data and `OrbitalVisual`; marked `aria-hidden`. |
| `DeliverableCard` | `src/components/cards/DeliverableCard.tsx` | Not active in current graph. | Legacy/general deliverable card. | Present but should not be treated as live visual behavior without new imports. |
| `PhilosophyCard` | `src/components/cards/PhilosophyCard.tsx` | Not active in current graph. | Legacy/general philosophy card. | Present but not active. |
| `SystemCard` | `src/components/cards/SystemCard.tsx` | Not active in current graph. | Legacy/general system card. | Present but not active. |

### UI, Atmospheric, and Motion Elements

| Component/module | File path | Active use | Responsibility | Important behavior |
| --- | --- | --- | --- | --- |
| `Button` | `src/components/ui/Button.tsx` | Active broadly. | Router-link or native button primitive. | Variants are `primary`, `secondary`, and `tertiary`; includes focus rings, disabled states, uppercase structural typography, and restrained hover translation. |
| `EchoSelect` | `src/components/ui/EchoSelect.tsx` | Active in Contact, Works, Archive, Booking. | Custom select/listbox. | Uses hidden input, ARIA listbox behavior, keyboard navigation, click-outside close, hint/error messaging, and `form`/`editorial` variants. |
| `EchoFormField` | `src/components/ui/EchoFormField.tsx` | Active in Booking and Contact. | Shared form input wrapper. | Styled through `forms.css` and page CSS. |
| `EchoFormPanel` | `src/components/ui/EchoFormPanel.tsx` | Active in Booking and Contact. | Form panel wrapper. | Uses form panel semantic tokens. |
| `EchoTextarea` | `src/components/ui/EchoTextarea.tsx` | Active in Booking and Contact. | Shared textarea control. | Styled through `forms.css`. |
| `FilterBar` | `src/components/ui/FilterBar.tsx` | Active in archive map/index contexts. | Generic filter pill row. | Uses `design-system.css` filter classes. |
| `IconWell` | `src/components/ui/IconWell.tsx` | Active across archive, booking, systems, sessions, works, worlds, identity. | Circular icon container. | Uses data attributes for size/tone/orbital/glow styling. |
| `SectionLabel` | `src/components/ui/SectionLabel.tsx` | Active broadly. | Shared small label with optional index/rule. | CSS target is `.ei-section-label-system`. |
| `OrbitalVisual` | `src/components/ui/OrbitalVisual.tsx` | Active broadly. | Wrapper for SVG orbital variants. | Pulls motifs from `src/components/orbitals/orbitals.tsx`. |
| `orbitals.tsx` | `src/components/orbitals/orbitals.tsx` | Active via `OrbitalVisual`. | SVG motif library. | Used for icons, atmospheres, archive constellation, footer, and internal route catalogue. |
| `AtmosphericCursor` | `src/components/atmosphere/AtmosphericCursor.tsx` | Active globally through `Layout`. | Desktop pointer-following glow. | Runs outside route content; desktop-only behavior is implemented in component/CSS. |
| `src/lib/motion-cinematic.ts` | `src/lib/motion-cinematic.ts` | Active in pages/components. | Main motion token and variant module. | Exports deterministic `organicOffset`, `STAGGER`, `VIEWPORT`, `DURATION`, and variants such as `driftUp`, `fadeSoft`, `blurEmergence`, `staggerContainer`. |
| `src/system/motion/cinematic.ts` | `src/system/motion/cinematic.ts` | Active in `Footer.tsx`. | Second motion token module. | Overlaps with `src/lib/motion-cinematic.ts` and retains legacy variants. |

## 4. Spacing Rhythm and Layout Rules

### Core Spacing Tokens

`src/styles/02-base/layout.css` defines the current named spacing scale:

| Token | Value |
| --- | --- |
| `--ei-space-1` | `0.25rem` |
| `--ei-space-2` | `0.5rem` |
| `--ei-space-3` | `0.75rem` |
| `--ei-space-4` | `1rem` |
| `--ei-space-5` | `1.5rem` |
| `--ei-space-6` | `2rem` |
| `--ei-space-7` | `3rem` |
| `--ei-space-8` | `4rem` |
| `--ei-space-9` | `6rem` |
| `--ei-space-10` | `8rem` |
| `--ei-space-11` | `12rem` |
| `--ei-space-12` | `16rem` |

Compatibility aliases also exist in `tokens.css`, including `--ei-page-max-width`, `--ei-page-gutter`, `--ei-section-padding-y`, and `--ei-section-padding-y-sm`.

### Grid Gaps

| Token | Value |
| --- | --- |
| `--ei-grid-gap-sm` | `1rem` |
| `--ei-grid-gap-md` | `1.5rem` |
| `--ei-grid-gap-lg` | `2.5rem` |
| `--ei-grid-gap-xl` | `4rem` |

### Container Implementations and Gutters

| Implementation | File | Behavior |
| --- | --- | --- |
| `Container.tsx` | `src/components/layout/Container.tsx` | Tailwind wrapper with `px-6 md:px-10 xl:px-16`; `xl` max width is `1440px`. |
| `.ei-container` | `src/styles/02-base/layout.css` | CSS wrapper with `--ei-gutter-mobile: 1.25rem`, `--ei-gutter-tablet: 3rem`, `--ei-gutter-desktop: clamp(4rem, 6vw, 6rem)`, and max width `--ei-page-max: 1440px`. |
| `.ei-layout-page-rail` | `src/styles/02-base/layout.css` | Width rail capped at `--ei-page-max`. |
| `.ei-layout-rail` | `src/styles/02-base/layout.css` | Content rail capped at `--ei-content-max: 1180px`. |
| `.ei-layout-reading` | `src/styles/02-base/layout.css` | Reading rail capped at `--ei-reading-max: 680px`. |
| `.ei-layout-narrow` | `src/styles/02-base/layout.css` | Editorial narrow rail capped at `--ei-editorial-narrow-max: 860px`. |
| `ContentFrame` classes | `src/styles/03-components/design-system.css` | Adds `.ei-content-frame-*` variants for standard, reading, narrow, page, and full widths. |

### Content and Read Widths

| Token/class | Value / behavior |
| --- | --- |
| `--ei-page-max` | `1440px` |
| `--ei-content-max` | `1180px` |
| `--ei-reading-max` | `680px` |
| `--ei-narrow-max` | `520px` |
| `--ei-editorial-narrow-max` | `860px` |
| Common route wrapper | `Container size="xl"` plus inner `mx-auto max-w-[1180px]` appears on multiple active routes. |

### Section Spacing Variants

`Section.tsx` maps semantic spacing names to the following CSS classes in `layout.css`:

| Section prop | Class | Behavior |
| --- | --- | --- |
| `none` | none | Caller/page CSS owns spacing. |
| `compact` | `.ei-section-compact` | Top `clamp(2.5rem, 5vh, 4rem)`, bottom `clamp(2rem, 4vh, 3.25rem)`. |
| `intimate` | `.ei-section-intimate` | Uses `--ei-section-intimate-top` and `--ei-section-intimate-bottom`. |
| `standard` | `.ei-section-standard` | Uses `--ei-section-standard-top` and `--ei-section-standard-bottom`. |
| `expansive` | `.ei-section-expansive` | Uses `--ei-section-expansive-y`. |
| `pause` | `.ei-section-pause` | Uses `--ei-section-pause-top` and `--ei-section-pause-bottom`. |
| `closing` | `.ei-section-closing` | Uses `--ei-section-closing-top` and `--ei-section-closing-bottom`. |

### Common Active Route-Level Spacing Patterns

| Route family | Observed pattern |
| --- | --- |
| Studio/Works/Systems/Worlds/Sessions/Identity | `Section` wrappers with route-specific `.ei-*` classes and `Container size="xl"` inner frames. |
| Booking | `Section spacing="none"` in multiple places, page CSS owns flow and stepper layout. |
| Archive | Mixes shared `PageSectionHero`, `Section`, `ContentFrame`, `ArchiveIndexList`, and dedicated archive/editorial CSS. |
| Lumo | Mostly bypasses shared route section rhythm inside `LumoSignatureCaseStudy.tsx`; dedicated `.ei-lumo-*` CSS controls both dark and light case-study sections. |
| Home | Uses home-specific section components and card classes rather than a single shared page-section composition. |

### Responsive Grids, Gaps, Card Padding, and Fractional Layouts

Active CSS uses page-specific grids and breakpoints. Common breakpoints found in active styles include `389px`, `430px`, `480px`, `520px`, `639px`, `640px`, `700px`, `767px`, `768px`, `899px`, `900px`, `959px`, `960px`, `1023px`, `1024px`, `1100px`, `1180px`, `1280px`, and `1320px`.

Card padding tokens in `cards.css`:

| Token | Value |
| --- | --- |
| `--ei-card-padding-sm` | `1.5rem` |
| `--ei-card-padding-md` | `1.75rem` |
| `--ei-card-padding-lg` | `2.5rem` |
| `--ei-card-padding-xl` | `3rem` |

Card radius tokens in `cards.css`:

| Token | Value |
| --- | --- |
| `--ei-card-radius-sm` | `20px` |
| `--ei-card-radius-md` | `24px` |
| `--ei-card-radius-lg` | `28px` |
| `--ei-card-radius-xl` | `32px` |

### Verified Audit Observations

| Observation | Evidence |
| --- | --- |
| Two active container systems coexist. | `Container.tsx` uses Tailwind gutters and max-width classes; `layout.css` defines `.ei-container` and `.ei-layout-*` rails with different gutter values. |
| Multiple page styles own local spacing rather than relying solely on `Section` spacing props. | Booking, Works, Studio, Archive, Lumo, and other route CSS files define many `.ei-*-section` spacing rules. |
| Raw Tailwind arbitrary values are common in active TSX. | Examples include `max-w-[1180px]`, `rounded-[var(--ei-card-radius-lg)]`, `text-[clamp(...)]`, and multiple `bg-[radial-gradient(...)]` classes in page files. |
| Lumo has a divergent local layout system. | `src/styles/03-components/lumo.css` defines extensive `.ei-lumo-*` layouts, a light case-study palette, side rail behavior, mobile nav, and route-specific breakpoints. |
| Radius tokens are split between global token and card CSS layers. | `tokens.css` defines `--radius-card: 28px` and `--radius-button: 9999px`; `cards.css` defines `--ei-card-radius-*`; Tailwind also maps `lg/md/sm` to `--radius`, but `--radius` was not found in inspected token files. |
| Accessibility CSS contains repeated focus/reduced-motion blocks. | `src/styles/02-base/accessibility.css` repeats reduced-motion and focus utility definitions in more than one layer/block. |

## 5. Typography Rules

### Font Roles, Loading, Fallbacks, and Duplicates

| Font role | Source | Use |
| --- | --- | --- |
| Fraunces | Google Fonts in `index.html`; variable declared as `--ei-font-editorial` in `typography-system.css`. | Editorial display headings, quotes, emotional emphasis. |
| Neue Montreal | Local `@font-face` declarations in `typography-system.css`, loading from `/fonts/neue-montreal/*.otf`; files exist in `public/fonts/neue-montreal/`. | Structural/body/UI type. |
| Geist Mono | Google Fonts in `index.html`; variable declared as `--ei-font-system`. | Labels, metadata, system/categorical text. |
| `--ei-font-copy` | Declared in `tokens.css` as system sans stack. | Some body/editorial copy classes and page-specific CSS use this instead of `--ei-font-structural`. |

The `src/assets/fonts/neue-montreal/` folder also contains Neue Montreal files, but the active `@font-face` paths point to `/fonts/neue-montreal/` in `public/`.

### Canonical Typography Hierarchy

| Class or token | Size | Line-height | Tracking | Role |
| --- | --- | --- | --- | --- |
| `.ei-type-hero` | `clamp(2.75rem, 7vw, 6rem)` | `0.98` | `-0.04em` | Large editorial hero display. |
| `.ei-type-hero-home` | `clamp(2.25rem, 4.55vw, 3.55rem)` | `1.04` | `-0.034em` | Home/shared hero title scale currently used by `PageSectionHero`. |
| `.ei-type-statement` | `clamp(2.125rem, 5vw, 4rem)` | `1.05` | `-0.035em` | Large editorial statement. |
| `.ei-type-section` | `clamp(1.75rem, 3.6vw, 2.75rem)` | `1.1` | `-0.025em` | Section heading. |
| `.ei-type-section-structural` | `clamp(1.75rem, 3.2vw, 2.5rem)` | `1.12` | `-0.025em` | Structural section heading. |
| `.ei-type-body` | `clamp(1rem, 1.15vw, 1.1875rem)` | `1.65` | `-0.005em` | Standard body copy. |
| `.ei-type-body-large` | `clamp(1.0625rem, 1.4vw, 1.3125rem)` | `1.68` | `-0.006em` | Larger body copy. |
| `.ei-type-body-editorial` | `clamp(1rem, 1.15vw, 1.125rem)` | `1.75` | `-0.004em` | Editorial body copy. |
| `.ei-type-small`, `.ei-type-body-small` | `clamp(0.875rem, 1vw, 1rem)` | `1.6` | `-0.003em` | Small body/supporting copy. |
| `.ei-type-meta` | `0.625rem` | `1.5` | `0.16em` | Uppercase metadata. |
| `.ei-type-label` | `clamp(0.625rem, 0.75vw, 0.75rem)` | `1.4` | `0.16em` | Uppercase label. |
| `.ei-type-hero-eyebrow` | `clamp(0.625rem, 0.75vw, 0.75rem)` | `1.4` | `0.2em` | Hero eyebrow. |
| `.ei-type-hero-description` | `clamp(0.9375rem, 1.05vw, 1rem)` | `1.85` | `-0.005em` | Hero supporting copy. |
| `.ei-type-nav` | `0.8125rem` | `1` | `0.02em` | Navigation type. |
| `.ei-type-button` | `0.875rem` | `1` | `0.01em` | Button type. |
| `.ei-type-quote` | `clamp(1.5rem, 3vw, 2.25rem)` | `1.35` | `-0.02em` | Quotation. |
| `.ei-type-manifesto` | `clamp(1.25rem, 2.4vw, 1.875rem)` | `1.5` | `-0.015em` | Manifesto/editorial copy. |
| `.ei-type-whisper` | `0.9rem` | `1.4` | `0.05em` | Small emphasized whisper text. |

### Labels, CTA Links, Metadata, Italics, and Emphasis

| Element | Current behavior |
| --- | --- |
| Section labels | `SectionLabel` renders `.ei-section-label-system` with optional index and rule. Text uses uppercase, small-size, high-tracking label styling from `design-system.css`. |
| CTA/action arrows | Several routes use `.ei-cta-arrow` classes and inline arrow text. |
| Metadata | `.ei-type-meta` and page-specific classes such as archive/works metadata appear across active routes. |
| Italics/emphasis | `PageSectionHero` supports `italicWord` and wraps matches with `.ei-type-hero-emphasis`; several pages use editorial italic copy directly. |
| Footer type | `Footer.tsx` uses footer-specific classes plus inline Tailwind font sizing/tracking. |

### Responsive Typography Behavior

Global typography classes use `clamp()` heavily. `typography-system.css` includes a mobile media block at `max-width: 767px`. Page-specific CSS also defines many route-local `clamp()` values and mobile overrides.

### Verified Audit Observations

| Observation | Evidence |
| --- | --- |
| Typography has a canonical `.ei-type-*` naming rule, but active page code also uses page-specific type classes. | `typography-system.css` declares the rule; active files use classes such as `ei-type-studio-body`, `ei-type-editorial-heading`, and `ei-type-section-heading`. |
| Active TSX includes direct Tailwind type overrides. | Header, Footer, Contact, Studio, and Orbitals files include `text-[...]`, tracking, font, and clamp values in className strings. |
| There are multiple body/copy font variables. | `--ei-font-structural` and `--ei-font-copy` both appear in active CSS. |
| Google font loading is external. | `index.html` preconnects and links to Google Fonts for Fraunces and Geist Mono. |
| Neue Montreal is duplicated in source and public asset folders. | `src/assets/fonts/neue-montreal/` and `public/fonts/neue-montreal/` both exist; active CSS references `/fonts/...`. |

## 6. Colour Rules

### Core Palette

| Token | Value | Use |
| --- | --- | --- |
| `--ei-void` | `#05030b` | Deepest shadows, overlays, dark canvas. |
| `--ei-ink` | `#080718` | Primary background/canvas. |
| `--ei-midnight` | `#0b0d2a` | Secondary dark surfaces. |
| `--ei-electric-blue` | `#0b20f6` | Strong blue accent. |
| `--ei-halo-blue` | `#4985fd` | Secondary accent, focus, borders, glow. |
| `--ei-violet` | `#7107ea` | Primary atmospheric violet. |
| `--ei-echo-magenta` | `#dd12cb` | Magenta accent and gradient endpoint. |
| `--ei-soft-neon` | `#e669f2` | Softer pink/violet accent. |
| `--ei-moonlit` | `#e3d8fd` | Light lavender text/surface tone. |
| `--ei-ice-white` | `#f7f5fa` | Lightest text/surface tone. |

RGB helper tokens exist for each core palette color and are used throughout CSS as `rgb(var(--token-rgb) / alpha)`.

### Semantic Background, Text, Border, Surface, Interactive, and Glow Rules

| Token group | Examples |
| --- | --- |
| Background | `--ei-color-background-html`, `--ei-color-background-body`, `--ei-color-background-canvas`, `--ei-background-body`, `--ei-background-deep-space`, `--ei-background-glow-field`, `--ei-background-nebula`. |
| Surface | `--ei-color-surface`, `--ei-color-surface-elevated`, `--ei-color-surface-hover`, `--ei-color-surface-glass`, `--ei-color-surface-scrim`. |
| Text | `--ei-color-text-primary`, `--ei-color-text-secondary`, `--ei-color-text-tertiary`, `--ei-color-text-muted`, `--ei-color-text-faint`, plus `--ei-type-color-*` aliases. |
| Border | `--ei-color-border-hairline`, `--ei-color-border-soft`, `--ei-color-border-medium`, `--ei-color-border-bright`, `--ei-color-border-blue`, `--ei-color-border-violet`, `--ei-color-border-magenta`. |
| Interactive | `--ei-button-*`, `--ei-filter-*`, `--ei-form-control-*`, `--ei-form-panel-*`. |
| Glow/shadow/ring | `--ei-glow-blue`, `--ei-glow-violet`, `--ei-glow-magenta`, `--ei-glow-balanced`, `--ei-glow-soft-field`, `--ei-shadow-*`, `--ei-ring-*`, `--ei-button-focus-ring`. |

### Gradients, Overlays, Shadows, and Card Radii

| Element | Current implementation |
| --- | --- |
| Primary gradient | `--ei-gradient-primary` from halo blue through violet to echo magenta. |
| Hover gradient | `--ei-gradient-primary-hover` shifts through soft neon. |
| Image overlays | `--ei-gradient-image-overlay-soft` and `--ei-gradient-image-overlay-left`. |
| Cards | `cards.css` redefines `--ei-card-bg`, `--ei-card-bg-soft`, `--ei-card-bg-hover`, card border, card shadow, and radius/padding tokens. |
| Focus | `accessibility.css` and `Button.tsx` use halo-blue focus rings. |
| Header | `Header.tsx` includes inline gradient backgrounds using token RGB values. |

### Verified Hard-Coded Colours or Alternate Palettes Outside Token Usage

| Area | Evidence |
| --- | --- |
| Lumo case study | `src/styles/03-components/lumo.css` defines alternate light/lavender tokens such as `--ei-lumo-canvas: #f4f0ff` and `--ei-lumo-ink-text: #121032`, plus several hard-coded swatch/illustration colors including `#22d3ff`, `#4f46e5`, `#ff7a59`, `#22d3a7`, `#6dd9a7`, `#ff7ccf`, and `#ffd27c`. |
| Token gradients | `tokens.css` includes hard-coded dark hex values inside background gradients in addition to token references. |
| Tailwind config | `tailwind.config.ts` still includes shadcn-style HSL variable mappings such as `border`, `input`, `ring`, `background`, `foreground`, `primary`, `secondary`, and sidebar values. These are config entries, not necessarily active route visual output. |
| Page/utility CSS | Studio, Works, and design-system CSS include occasional `#080718`; buttons CSS includes `#fff`. |

### Visual Alignment vs Token Consistency

Most active site surfaces visually align with the dark Echo in Ink palette through token RGB usage, low-alpha borders, glow gradients, and moonlit text. Token consistency is not absolute: Lumo intentionally diverges into a lighter product case-study palette; route-level CSS and TSX arbitrary classes include raw gradients and hard-coded values; Tailwind config retains older HSL/shadcn-style color slots.

## 7. Visual Language

The active visual system is dark, cinematic, editorial, and atmosphere-led. Most public routes use image-led heroes, deep ink backgrounds, lavender/blue/violet glow, thin low-alpha borders, orbital SVG motifs, uppercase labels, and restrained CTA language.

| Element | Current active behavior |
| --- | --- |
| Imagery strategy | Most route heroes import desktop and mobile `.webp` files from `src/assets/imagery/hero/`. Home hero uses `public/home-hero-desktop.webp` and `public/home-hero-mobile.webp`. Lumo imports hero and project images directly. |
| Atmospheric treatments | `PageShell` adds global page glow and vignette. Page CSS adds route-specific radial gradients, scrims, and luminous borders. `AtmosphericCursor` adds a global pointer glow except where unavailable by device/component conditions. |
| Cards | `EchoCard` and `.ei-card` systems use translucent dark surfaces, low-alpha borders, inner highlights, soft shadows, and slight hover lifts. |
| Borders | Borders are usually token RGB with low opacity, often moonlit, halo, violet, or soft neon. |
| Radii | Active cards use `20px` to `32px` tokenized radii; buttons use pill radii. |
| Labels | Small uppercase labels with high tracking and optional luminous rules are active across routes. |
| Typography roles | Fraunces carries display/editorial voice; Neue Montreal carries structure/body/UI; Geist Mono carries metadata/system labels. |
| Icons/orbitals | SVG orbital motifs are a central visual motif in icons, footer, archive constellations, internal catalogue, and page visuals. |
| CTA tone | CTAs use restrained uppercase button type, subtle motion, and often arrow affordances. |
| Negative space | Large `clamp()` section spacing and content rails create spacious desktop layouts; mobile CSS reduces atmosphere and spacing in several page styles. |
| Desktop vs mobile art direction | `PageSectionHero` uses `<picture>` desktop/mobile source switching. Most hero assets have paired desktop/mobile files. Mobile CSS adjusts overlays, grids, and atmosphere density. |

## 8. Responsive Behaviour

### Breakpoint Model

The codebase uses a mixed breakpoint model:

| Source | Breakpoint examples |
| --- | --- |
| Tailwind classes in TSX | `sm`, `md`, `lg`, `xl` patterns, plus arbitrary sizes. |
| `layout.css` | `768px`, `1024px`, `1180px`, `900px`. |
| Page/component CSS | `389px`, `430px`, `480px`, `520px`, `639px`, `640px`, `700px`, `767px`, `768px`, `899px`, `900px`, `959px`, `960px`, `1023px`, `1024px`, `1100px`, `1180px`, `1280px`, `1320px`. |

### Desktop, Tablet, and Mobile Behavior

| Surface | Behavior |
| --- | --- |
| Header | Desktop nav appears from `md`; mobile uses a button-controlled sheet with Framer Motion entrance/exit. Header hides entirely on `/works/lumo`. |
| Page heroes | `PageSectionHero` sets minimum heights around `620px`, `720px`, and `760px` across responsive widths and uses scrims for copy readability. |
| Containers | Tailwind `Container` and CSS `.ei-container` both adjust gutters by breakpoint. |
| Grids | Route CSS uses custom grid templates and collapses around route-specific breakpoints. |
| Archive | Archive and editorial archive CSS use `900px`, `899px`, `767px`, `520px`, and `768px` breakpoint bands. |
| Lumo | Lumo CSS includes dedicated breakpoints at `1320px`, `1180px`, `1100px`, `1023px`, `767px`, `700px`, and `430px`. |
| Mobile utilities | `src/styles/04-utilities/mobile.css` adjusts rhythm below `768px`, smaller details below `480px`, and hoverless devices. |

### Dedicated Mobile Imagery and Picture/Source Switching

Dedicated desktop/mobile hero assets are active for Identity, Sessions, Booking, Worlds, Works, Contact, Systems, Archive, Archive Notes, Archive Map, Archive Essay, Studio, Lumo, and Home. `PageSectionHero` uses a desktop `<source media="(min-width: 768px)">` and a mobile `<img>` fallback. Some page-specific sections also import desktop/mobile imagery.

### Mobile Navigation

`Header.tsx` uses a fixed header with desktop links and a mobile menu trigger. The mobile menu uses `AnimatePresence`, a dark rounded-bottom sheet, route-active states, and a full-width contact CTA. The menu is not rendered on `/works/lumo` because the entire header returns `null` for that path.

### Custom Page Breakpoints

| Page/style | Custom responsive behavior evidence |
| --- | --- |
| `src/styles/03-components/lumo.css` | Extensive case-study breakpoints and reduced-motion handling; includes both dark and light section systems. |
| `src/styles/03-components/archive.css` and `editorial-archive.css` | Archive-specific responsive layouts for index, notes, essay, category map, and constellation. |
| `src/styles/03-components/booking.css` | Booking flow breakpoint bands at `640px`, `768px`, `1024px`, and `639px`. |
| `src/styles/03-components/works.css` | Works layout changes at `768px` and `1100px`. |
| `src/styles/03-components/systems.css` | Systems layout changes at `700px`, `960px`, `959px`, `767px`, and `520px`. |

### Verified Responsive-Risk Areas Needing Future Visual Review

These are implementation observations only, not prescribed fixes:

| Area | Risk to visual review |
| --- | --- |
| Mixed breakpoint values | Many route CSS files use local breakpoint bands, so visual changes may not land consistently across pages at tablet widths. |
| Dual container systems | `Container.tsx` and `.ei-container` can create different horizontal rhythm even when both target 1440px outer width. |
| Lumo route | Lumo is visually and structurally divergent, with its own rails, palette, and breakpoints. |
| Internal orbitals route | `/internal/orbitals` does not use `PageShell` and references `var(--ei-color-bg)`, which is not part of the inspected core token list. |
| Page-specific hero overlays | `PageSectionHero` handles many heroes, but Home, Booking, and Lumo have separate hero strategies. |

## 9. Motion and Interaction

### Libraries and Motion Modules

| Source | Role |
| --- | --- |
| `framer-motion` | Page transitions, section reveals, hover states, header/menu animation, footer animation, Lumo case-study motion. |
| `src/lib/motion-cinematic.ts` | Main active motion token/variant module for route pages and components. |
| `src/system/motion/cinematic.ts` | Secondary motion module used by `Footer.tsx`; overlaps with the main module. |
| `tailwindcss-animate` | Installed and configured in `tailwind.config.ts`; no active route behavior was inferred solely from the dependency. |

### Route Transitions

`src/components/system/PageTransition.tsx` resets scroll to top on `location.pathname`, delays readiness by 50ms, renders an opacity transition wrapper, and overlays a fixed dark atmospheric layer that fades out. If `useReducedMotion()` returns true, it returns children without motion wrappers.

### Framer Motion Variants

Common active variants from `src/lib/motion-cinematic.ts`:

| Variant/token | Behavior |
| --- | --- |
| `staggerContainer` | Staggers children with supplied delay and stagger values. |
| `STAGGER` | `tight: 0.06`, `normal: 0.12`, `loose: 0.22`, `cinematic: 0.32`. |
| `VIEWPORT` | Once-only reveal margins from tight to generous. |
| `fadeSoft` | Opacity reveal. |
| `driftUp` | Small vertical reveal. |
| `blurEmergence` | Opacity, vertical movement, blur, and scale reveal. |
| `heroReveal` | Larger hero entrance with blur. |
| `ambientGlow`, `parallaxFloat`, `ambientDrift`, `atmosphericFloat` | Repeating atmospheric motion presets. |

`organicOffset` is retained for compatibility and returns the base value, making shared timing deterministic.

### CSS Transitions

Buttons, cards, filters, form controls, header links, mobile menu elements, CTA arrows, and route-specific panels use CSS transitions. Common durations come from CSS variables `--ei-duration-fast`, `--ei-duration-normal`, `--ei-duration-slow`, and `--ei-duration-slower`, plus direct transition durations in Tailwind classes and CSS.

### Hover, Active, and Focus Behavior

| Element | Behavior |
| --- | --- |
| `Button` | Primary/secondary hover translate slightly upward; tertiary animates underline width. |
| `EchoCard` | Interactive cards lift by `translateY(-2px)` and shift border/background/shadow. |
| `ProjectCard` | Framer hover lift applies only when linked and reduced motion is not preferred. |
| Header links | Active/hover underline and luminous text state. |
| Form controls | Border/background/shadow shifts on hover/focus. |
| Filters | Active pills use magenta-tinted background and border. |
| Focus | Global `:focus-visible` rules use halo-blue outlines and glow; component-specific focus classes exist. |

### Atmospheric Motion

Ambient motion appears through page glows, atmospheric cursor, route transitions, Framer variants, CSS gradients, and Lumo-specific scroll/section behaviors. The Lumo case study also tracks active sections via `IntersectionObserver` and uses a side rail/mobile nav.

### Reduced-Motion Handling

Reduced-motion handling exists in:

| File | Behavior |
| --- | --- |
| `src/components/system/PageTransition.tsx` | Bypasses route transition wrappers when reduced motion is preferred. |
| `src/styles/02-base/accessibility.css` | Globally reduces animation/transition durations and scroll behavior. |
| `src/styles/03-components/archive.css` | Contains a reduced-motion block. |
| `src/styles/03-components/booking.css` | Contains a reduced-motion block. |
| `src/styles/03-components/design-system.css` | Contains a reduced-motion block. |
| `src/styles/03-components/editorial-archive.css` | Contains a reduced-motion block. |
| `src/styles/03-components/lumo.css` | Contains reduced-motion blocks. |
| `src/styles/03-components/systems.css` | Contains a reduced-motion block. |
| `src/styles/03-components/works.css` | Contains a reduced-motion block. |

### Duplicated or Competing Motion Systems

Two motion modules are active: `src/lib/motion-cinematic.ts` and `src/system/motion/cinematic.ts`. They define overlapping easing, duration, viewport, stagger, and legacy reveal variants. The footer imports from `src/system/motion/cinematic.ts`, while most pages/components import from `src/lib/motion-cinematic.ts`.

### Deterministic Versus Randomized Timing

The inspected `organicOffset` helper in `src/lib/motion-cinematic.ts` is deterministic and returns the base value. No active randomized shared timing behavior was verified in the current motion token module.

## 10. Audit Handoff Summary

### How the Active Site Is Built

Echo in Ink is built as a Vite React TypeScript single-page app. `src/App.tsx` lazy-loads fifteen routes under a shared `BrowserRouter`, `Layout`, and `PageTransition`. The global header is always owned by `Layout` except for the `/works/lumo` path, where `Header` returns `null`. Public route pages generally use `PageShell` to own the `<main>`, atmospheric background layers, and footer.

### Where the Live Design System Lives

The live design system is distributed across:

| Area | Files |
| --- | --- |
| Core tokens | `src/styles/01-tokens/tokens.css` |
| Layout and rhythm | `src/styles/02-base/layout.css`, `src/components/layout/Container.tsx`, `src/components/layout/Section.tsx`, `src/components/layout/ContentFrame.tsx` |
| Typography | `src/styles/02-base/typography-system.css`, `index.html` font links |
| Accessibility/browser base | `src/styles/02-base/accessibility.css`, `src/styles/02-base/browser-chrome.css` |
| Shared components | `src/styles/03-components/cards.css`, `forms.css`, `buttons.css`, `design-system.css` |
| Page-specific visual systems | `src/styles/03-components/archive.css`, `booking.css`, `contact.css`, `editorial-archive.css`, `identity.css`, `lumo.css`, `sessions.css`, `studio.css`, `systems.css`, `works.css`, `worlds.css` |
| Runtime primitives | `src/components/layout/`, `src/components/ui/`, `src/components/sections/`, `src/components/navigation/`, `src/components/orbitals/` |
| Motion | `src/lib/motion-cinematic.ts`, `src/system/motion/cinematic.ts`, `src/components/system/PageTransition.tsx` |

### Strongest System-Level Patterns

| Pattern | Evidence |
| --- | --- |
| Dark atmospheric token base | Core palette, RGB helpers, semantic tokens, and low-alpha gradients are used across active CSS. |
| Shared hero and CTA primitives | `PageSectionHero` and `CTASection` cover many route-level entry and exit patterns. |
| Reusable card wrapper | `EchoCard` provides semantic element choice, variants, interactivity, and padding data attributes. |
| Orbital visual language | `OrbitalVisual` and `orbitals.tsx` are active across footer, icons, archive, works, systems, and internal catalogue. |
| Data-driven page content | Identity, Sessions, Systems, Works, Worlds, and Archive pull substantial content from `src/data/`. |
| Motion restraint | Common Framer variants use opacity, transform, blur, and deterministic stagger values, with reduced-motion coverage present. |

### Most Important Implementation Areas for External Visual/Design Audit

| Area | Why it matters for critique |
| --- | --- |
| `src/App.tsx` route table | Defines the true active page surface, including booking, archive subroutes, Lumo, and internal orbitals. |
| `src/styles/globals.css` import order | Determines all active token/base/component/page CSS. |
| `src/styles/01-tokens/tokens.css` and `src/styles/02-base/layout.css` | Core palette, spacing, layout rails, and semantic values. |
| `src/styles/02-base/typography-system.css` | Canonical type hierarchy and font roles. |
| `src/components/sections/PageSectionHero.tsx` | Main shared hero pattern used by most public routes. |
| `src/components/ui/EchoCard.tsx` and `src/styles/03-components/cards.css` | Shared card surface behavior and card tokens. |
| `src/styles/03-components/lumo.css` and `src/components/lumo/LumoSignatureCaseStudy.tsx` | Most divergent active route implementation. |
| `src/styles/03-components/archive.css` and `editorial-archive.css` | Archive and long-form editorial surface. |
| `src/components/navigation/Header.tsx` and `Footer.tsx` | Global navigation, brand protection, and site-level framing. |
| `src/lib/motion-cinematic.ts` and `src/system/motion/cinematic.ts` | Active motion tokens and duplicated motion definitions. |

### Files Inspected

- `AGENTS.md`
- `package.json`
- `src/main.tsx`
- `src/App.tsx`
- `src/pages/ArchiveEssayPage.tsx`
- `src/pages/ArchiveIndexPage.tsx`
- `src/pages/ArchiveNotesPage.tsx`
- `src/pages/ArchivePage.tsx`
- `src/pages/BookingPage.tsx`
- `src/pages/ContactPage.tsx`
- `src/pages/HomePage.tsx`
- `src/pages/IdentityPage.tsx`
- `src/pages/LumoPage.tsx`
- `src/pages/OrbitalsPage.tsx`
- `src/pages/SessionsPage.tsx`
- `src/pages/StudioPage.tsx`
- `src/pages/SystemsPage.tsx`
- `src/pages/WorksPage.tsx`
- `src/pages/WorldsPage.tsx`
- `src/components/archive/ArchiveConstellation.tsx`
- `src/components/archive/ArchiveIndexList.tsx`
- `src/components/atmosphere/AtmosphericCursor.tsx`
- `src/components/cards/ProjectCard.tsx`
- `src/components/home/HomeClosingSection.tsx`
- `src/components/home/HomeFeaturedLumo.tsx`
- `src/components/home/HomeHero.tsx`
- `src/components/home/HomeHeroBackground.tsx`
- `src/components/home/HomeHeroCTA.tsx`
- `src/components/home/HomeHeroHeading.tsx`
- `src/components/home/HomeOurSystems.tsx`
- `src/components/home/HomePhilosophySection.tsx`
- `src/components/home/HomeProofStrip.tsx`
- `src/components/home/HomeWhatWeCreate.tsx`
- `src/components/layout/Container.tsx`
- `src/components/layout/ContentFrame.tsx`
- `src/components/layout/EditorialArticleLayout.tsx`
- `src/components/layout/Layout.tsx`
- `src/components/layout/PageShell.tsx`
- `src/components/layout/Section.tsx`
- `src/components/lumo/LumoSignatureCaseStudy.tsx`
- `src/components/navigation/Footer.tsx`
- `src/components/navigation/Header.tsx`
- `src/components/orbitals/orbitals.tsx`
- `src/components/sections/CTASection.tsx`
- `src/components/sections/PageSectionHero.tsx`
- `src/components/system/PageTransition.tsx`
- `src/components/ui/Button.tsx`
- `src/components/ui/EchoCard.tsx`
- `src/components/ui/EchoSelect.tsx`
- `src/components/works/WorksGrid.tsx`
- `src/data/archiveContent.ts`
- `src/data/identityContent.ts`
- `src/data/sessionsContent.ts`
- `src/data/systemsContent.ts`
- `src/data/worksProjects.ts`
- `src/data/worldsContent.ts`
- `src/lib/motion-cinematic.ts`
- `src/system/motion/cinematic.ts`
- `src/styles/globals.css`
- `src/styles/01-tokens/tokens.css`
- `src/styles/02-base/accessibility.css`
- `src/styles/02-base/browser-chrome.css`
- `src/styles/02-base/layout.css`
- `src/styles/02-base/typography-system.css`
- `src/styles/03-components/archive.css`
- `src/styles/03-components/booking.css`
- `src/styles/03-components/buttons.css`
- `src/styles/03-components/cards.css`
- `src/styles/03-components/contact.css`
- `src/styles/03-components/design-system.css`
- `src/styles/03-components/editorial-archive.css`
- `src/styles/03-components/forms.css`
- `src/styles/03-components/identity.css`
- `src/styles/03-components/lumo.css`
- `src/styles/03-components/sessions.css`
- `src/styles/03-components/studio.css`
- `src/styles/03-components/systems.css`
- `src/styles/03-components/works.css`
- `src/styles/03-components/worlds.css`
- `src/styles/04-utilities/mobile.css`
- `src/assets/`
- `public/`
- `vite.config.ts`
- `vitest.config.ts`
- `tailwind.config.ts`
- `postcss.config.js`
- `tsconfig.json`
- `tsconfig.app.json`
- `tsconfig.node.json`
- `eslint.config.js`
- `index.html`
- `package-lock.json`
- `components.json`
- `pnpm-workspace.yaml`
- `vite-env.d.ts`
- `public/robots.txt`

### Files Created or Changed

- Changed: `WEBSITE_DESIGN_SYSTEM_AUDIT.md`

### Limitations, Missing Assets, or Areas That Could Not Be Verified

- This audit is repository/file based. It did not run browser screenshots or visual QA.
- `dist/` was treated as generated output, not as source of truth.
- No production code, assets, styles, components, routing, dependencies, or configuration files were changed.
- The active import graph was derived from `src/main.tsx`, `src/App.tsx`, static imports, and lazy `import(...)` route imports. It does not classify components that might be used only through future manual imports or external tooling.
- `public/robots.txt` is present. No source `sitemap.xml` was found in the inspected root/public files; `dist/robots.txt` exists as build output.
- `vitest.config.ts` references `./src/test/setup.ts`, but that file was not present in the inspected `src/` file list.
- Git commit and push: not committed and not pushed.
