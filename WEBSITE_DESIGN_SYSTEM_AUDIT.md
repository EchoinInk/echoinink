# Echo in Ink Website Structure and Design-System Audit

## Purpose and Scope

This document is a developer-facing handoff for an external visual/design audit of the current Echo in Ink website. It describes the implementation as it exists in the repository and does not propose a redesign.

The active application is a Vite-powered React 18 and TypeScript site. Routing is handled by `react-router-dom`, styling combines Tailwind utility classes with layered CSS files, and motion is primarily implemented with Framer Motion.

Primary entry points:

- `src/main.tsx` mounts the application and imports `src/styles/globals.css`.
- `src/App.tsx` defines the active route table, route-level lazy loading, the shared layout, and page transitions.
- `src/components/layout/Layout.tsx` adds the fixed header and desktop atmospheric cursor around routed content.
- `src/components/layout/PageShell.tsx` supplies page atmosphere, ambient overlays, and the shared footer.

---

## 1. Folder Structure

### Active `src` structure

```text
src/
├── App.tsx
├── main.tsx
├── pages/
├── components/
│   ├── atmosphere/
│   ├── cards/
│   ├── home/
│   ├── layout/
│   ├── lumo/
│   ├── navigation/
│   ├── orbitals/
│   ├── sections/
│   ├── studio/
│   ├── system/
│   ├── ui/
│   ├── works/
│   ├── dev/
│   └── _archive/
├── styles/
│   ├── 01-tokens/
│   ├── 02-base/
│   ├── 03-components/
│   ├── 04-utilities/
│   └── _archive/
├── assets/
│   ├── brand/
│   ├── fonts/
│   ├── icons/
│   ├── imagery/
│   ├── projects/
│   └── video/
├── data/
├── hooks/
├── lib/
├── system/
│   └── motion/
└── types/
```

### Folder responsibilities

| Location | Responsibility |
| --- | --- |
| `src/pages/` | Route-level page composition. Ten files are currently mounted by `src/App.tsx`; `EasyPage.tsx` is not routed. |
| `src/components/layout/` | Shared page and section structure: `Layout`, `PageShell`, `Container`, `Section`, `Grid`, and `PageSection`. |
| `src/components/navigation/` | Fixed responsive header and shared footer. |
| `src/components/home/` | Home-page-specific hero, philosophy, capabilities, featured work, systems, and closing sections. |
| `src/components/sections/` | Reusable page sections and content patterns, including the shared hero, CTA, process, use-case, offer, and comparison components. |
| `src/components/cards/` | Reusable project, deliverable, philosophy, quote, and system card patterns. |
| `src/components/ui/` | Core UI elements and visual utilities: buttons, custom select, headings, labels, and orbital wrappers. |
| `src/components/orbitals/` | The SVG orbital motif library used across cards, metadata, CTAs, and atmospheric moments. |
| `src/components/atmosphere/` | Ambient glow, grain, contour, bridge, cursor, pause, and continuity primitives. |
| `src/components/works/` | Works filter controls and project grid composition. |
| `src/components/lumo/` | The bespoke long-form Lumo case study and its atmospheric scenes. |
| `src/components/studio/` | Studio-oriented reusable components. The active Studio route currently composes its main sections directly in `StudioPage.tsx` instead of using all of these files. |
| `src/components/system/` | Route/page transition behavior. |
| `src/data/` | Structured page copy and project/system/archive data separated from page markup. |
| `src/styles/01-tokens/` | Core colour, semantic, spacing, motion, and compatibility tokens. |
| `src/styles/02-base/` | Typography, layout, accessibility, and browser-level foundations. |
| `src/styles/03-components/` | Shared card/button/form CSS plus page-specific CSS for Identity, Studio, Systems, Sessions, Worlds, and Archive. |
| `src/styles/04-utilities/` | Mobile rhythm and atmosphere reductions. |
| `src/assets/imagery/` | Desktop/mobile hero images, section images, backgrounds, and work imagery. |
| `src/assets/brand/` | Wordmarks, monograms, and brand marks. |
| `src/lib/` and `src/system/motion/` | Utilities, cinematic tokens, and Framer Motion variants. |
| `public/` | Public fonts, home hero images, favicons, robots file, and legacy/public brand images. |

### Central architectural folders

The most central folders are:

- `src/pages/`: route-level source of truth.
- `src/components/layout/`: global page/container/section composition.
- `src/styles/01-tokens/`, `02-base/`, and `03-components/`: the active visual system.
- `src/components/ui/`, `cards/`, and `sections/`: reusable presentation patterns.
- `src/assets/imagery/` and `src/data/`: page imagery and authored content.
- `src/lib/` and `src/system/motion/`: motion and cinematic behavior.

### Inactive or transitional areas

- `src/components/_archive/` and `src/styles/_archive/` are explicitly archived and are not part of the active design surface.
- `src/pages/EasyPage.tsx` provides alternate `easy-*` page primitives but is not mounted in `src/App.tsx`. Its stylesheet, `src/styles/easy-page.css`, is still imported by `globals.css`.
- `src/app/` is currently empty and is not a Next.js app directory.
- `src/components/dev/OrbitalSheet.tsx` is a development catalogue, not an active route.
- Several general section and Studio components exist but are not currently imported by active pages. They should not be assumed to define the live page appearance without checking usage.

---

## 2. Page Structure

Routes are declared in `src/App.tsx`. Every active route is lazy loaded, wrapped by `Layout` and `PageTransition`, and generally uses `PageShell` for atmosphere and footer integration.

| Route | Page file | Main sections |
| --- | --- | --- |
| `/` | `src/pages/HomePage.tsx` | Cinematic hero; philosophy; “What We Create” capability cards; featured Lumo work; emerging systems; closing CTA. |
| `/identity` | `src/pages/IdentityPage.tsx` | Bespoke split hero; audience/use cases; deliverables; horizontal process; transformation statement; pricing tiers; closing strip. |
| `/sessions` | `src/pages/SessionsPage.tsx` | Full-image hero; transformation quote; three signal cards; format/session types; audience panel; session offer; orientation statement; image CTA. |
| `/worlds` | `src/pages/WorldsPage.tsx` | Full-image hero; signal cards; world architecture row; investment/tier panel; fit signals; image-led journey CTA. |
| `/works` | `src/pages/WorksPage.tsx` | Shared page hero; selected-works heading; filters and sort; project grid; image-backed closing CTA. |
| `/works/lumo` | `src/pages/LumoPage.tsx` | Bespoke long-form `SignatureCaseStudy`; process list; shared continuation CTA. |
| `/studio` | `src/pages/StudioPage.tsx` | Shared page hero; philosophy panel; four service pillars; process panel; featured Lumo work; slim CTA. |
| `/contact` | `src/pages/ContactPage.tsx` | Intimate shared hero; split service/form panel; success state; three trust signals. |
| `/systems` | `src/pages/SystemsPage.tsx` | Shared page hero; category cards; featured system; latest additions; closing CTA. |
| `/archive` | `src/pages/ArchivePage.tsx` | Bespoke archive hero; filters/sort; featured essay; recent notes; archive index; closing CTA. |

### Shared page patterns

- Most pages use `PageShell` with `withTopSpacing={false}` because their hero components own the header offset.
- Heroes are either:
  - `PageSectionHero` for Studio, Systems, Works, and Contact; or
  - bespoke page-specific hero markup for Home, Identity, Sessions, Worlds, and Archive.
- Main content commonly uses `Section` + `Container size="xl"` + an inner `max-w-[1180px]` wrapper.
- Section content is usually revealed through a staggered Framer Motion parent, with `driftUp`, `fadeSoft`, or `blurEmergence` applied to children.
- Page endings typically use a restrained CTA strip or image-backed panel followed by the shared footer.
- Section labels repeatedly use a small uppercase label paired with a short luminous horizontal rule. Several pages define a local `SectionLabel` helper instead of importing one shared component.

---

## 3. Key Components

### Global layout and navigation

| Component | File | Use |
| --- | --- | --- |
| `Layout` | `src/components/layout/Layout.tsx` | Global wrapper adding the fixed header and atmospheric cursor. |
| `PageShell` | `src/components/layout/PageShell.tsx` | Page atmosphere, vignette/glow overlays, optional top spacing, metadata support, and shared footer. |
| `Container` | `src/components/layout/Container.tsx` | Responsive horizontal gutters and width variants from `max-w-4xl` through `1440px`. |
| `Section` | `src/components/layout/Section.tsx` | Maps semantic spacing names to shared section rhythm classes. |
| `PageSection` | `src/components/layout/PageSection.tsx` | More feature-rich cinematic section primitive with atmosphere, alignment, dividers, width, in-view motion, and reduced-motion handling. It is available but not the dominant primitive in current route files. |
| `Grid` | `src/components/layout/Grid.tsx` | Responsive grid helper tied to the spacing token scale. |
| `Header` | `src/components/navigation/Header.tsx` | Fixed wordmark navigation, active-route underline, contact action, and animated mobile menu sheet. |
| `Footer` | `src/components/navigation/Footer.tsx` | Four-column desktop/footer grid with navigation, contact details, social links, atmospheric copy, and an orbital mark. |

### Heroes and major sections

| Component | File | Use |
| --- | --- | --- |
| `PageSectionHero` | `src/components/sections/PageSectionHero.tsx` | Shared image-led hero with desktop/mobile art, layered scrims, editorial copy, optional italic word, and one or two CTAs. |
| `Hero` and supporting Home hero components | `src/components/home/HomeHero*.tsx` | Home-specific full-width world-entry hero using dedicated public desktop/mobile imagery. |
| `SignatureCaseStudy` | `src/components/lumo/LumoSignatureCaseStudy.tsx` | Bespoke long-form editorial case study with multiple atmospheric scenes, image placeholders, narrative grids, and scroll-linked motion. |
| `PageCTA` | `src/components/sections/PageCTA.tsx` | Shared continuation pattern with page-specific primary, secondary, and exploratory routes. |
| `ProcessSteps` | `src/components/sections/ProcessSteps.tsx` | Stack or desktop horizontal process sequence. |
| `UseCasesList` | `src/components/sections/UseCasesList.tsx` | Quiet rail list or marked two-column list. |

### Cards and work presentation

| Component | File | Use |
| --- | --- | --- |
| `ProjectCard` | `src/components/cards/ProjectCard.tsx` | Featured and standard works cards with full-bleed imagery, overlays, metadata, descriptions, and hover image scale. |
| `DeliverableCard` | `src/components/cards/DeliverableCard.tsx` | Identity deliverable cards with small bespoke motifs and restrained hover lift. |
| `PhilosophyCard` | `src/components/cards/PhilosophyCard.tsx` | Orbital-led philosophy/value card. |
| `QuoteCard` | `src/components/cards/QuoteCard.tsx` | Centered editorial quotation with concentric blue atmosphere. |
| `SystemCard` | `src/components/cards/SystemCard.tsx` | Text-led system/tool card with status metadata. |
| `WorksGrid` | `src/components/works/WorksGrid.tsx` | Filters/sorts project data and composes featured and standard `ProjectCard` layouts. |
| `WorkFilterBar` | `src/components/works/WorkFilterBar.tsx` | Horizontally scrollable mobile filters plus desktop wrapping filters and `EchoSelect` sorting. |

### UI and atmospheric elements

| Component | File | Use |
| --- | --- | --- |
| `Button` | `src/components/ui/Button.tsx` | Router link or native button with primary, secondary, and tertiary variants, focus rings, and restrained vertical hover movement. |
| `EchoSelect` | `src/components/ui/EchoSelect.tsx` | Custom keyboard-operable listbox used by Contact, Works, and Archive controls. |
| `OrbitalVisual` | `src/components/ui/OrbitalVisual.tsx` | Wrapper around the SVG motif library in `src/components/orbitals/orbitals.tsx`. |
| Orbital library | `src/components/orbitals/orbitals.tsx` | Twelve named SVG motifs including `axiomRing`, `vectorLattice`, `signalBridge`, `prismMirror`, `chorusCore`, `synthesisStar`, and `haloGate`. |
| `AtmosphericCursor` | `src/components/atmosphere/AtmosphericCursor.tsx` | Desktop-only, spring-smoothed violet/blue radial glow following pointer movement. |
| `AtmosphericSystem` primitives | `src/components/atmosphere/AtmosphericSystem.tsx` | Reusable glow fields, beams, grain, echo rings, contours, and blooms. |
| `AtmosphericContinuity` family | `src/components/atmosphere/AtmosphericContinuity.tsx` | Faint bridge, veil, and transition atmosphere between content areas. |
| `PageTransition` | `src/components/system/PageTransition.tsx` | Route fade/dissolve, scroll reset, and reduced-motion bypass. |

---

## 4. Spacing Rhythm and Layout Rules

### Core spacing system

The canonical layout scale is defined in `src/styles/02-base/layout.css`:

- Named scale: `--ei-space-1` through `--ei-space-12`, from `0.25rem` to `16rem`.
- Compatibility aliases: `--ei-space-8px`, `--ei-space-12px`, and `--ei-space-16` through `--ei-space-128`.
- Grid gaps:
  - small: `1rem`
  - medium: `1.5rem`
  - large: `2.5rem`
  - extra large: `4rem`

The `Grid` component exposes a subset of numeric steps using spacing variables and responsive column maps.

### Containers

Two overlapping container implementations are active:

- `Container.tsx` uses `px-6`, `md:px-10`, `xl:px-16`, with `xl` capped at `1440px`.
- `.ei-container` in `layout.css` uses:
  - mobile gutter: `1.25rem`
  - tablet gutter: `3rem`
  - desktop gutter: `clamp(4rem, 6vw, 6rem)`
  - maximum width: `1440px`

Additional CSS widths:

- content maximum: `1180px`
- reading maximum: `680px`
- narrow maximum: `520px`

Most route pages use `Container size="xl"` and then add `max-w-[1180px]`, effectively using the 1440px shell for gutters and an 1180px inner content frame.

### Section rhythm

The shared `Section` spacing variants map to CSS classes:

- `compact`: approximately `2.5–4rem` top and `2–3.25rem` bottom.
- `intimate`: `clamp(4rem, 10vh, 7rem)` top and `clamp(2.5rem, 6vh, 5rem)` bottom.
- `standard`: `clamp(4.5rem, 10vh, 8rem)` top and `clamp(3.5rem, 8vh, 6.5rem)` bottom.
- `expansive`: `clamp(5.5rem, 12vh, 10rem)` on both axes.
- `pause`: `clamp(7rem, 20vh, 13rem)` top and `clamp(4.5rem, 10vh, 7rem)` bottom.
- `closing`: `clamp(3.5rem, 8vh, 6rem)` top and `clamp(7rem, 20vh, 12rem)` bottom.

The active Studio, Systems, and Home compositions often use `spacing="none"` and apply a tighter repeated local cadence:

- regular content sections: `pt-6 pb-2`, becoming `md:pt-8 md:pb-4`
- opening philosophy sections: commonly `pt-12 pb-2`, becoming `md:pt-16 md:pb-4`
- closing strips: commonly `pt-8 pb-10`, becoming `md:pt-10 md:pb-12`

This creates a notably denser rhythm than the canonical `standard` and `expansive` section tokens.

### Grids and gaps

Recurring patterns include:

- one-column mobile layouts that become two columns at `md` and three/four/five columns at larger breakpoints
- `gap-4`/`1rem` for card grids
- `gap-5`/`1.25rem` for larger work grids
- editorial split layouts with gaps from `2.5rem` to `4rem`
- bespoke fractional columns such as `0.44fr/0.56fr`, `0.9fr/1.6fr`, and `0.84fr/1.16fr`
- cards generally padded between `1.5rem` and `3rem`, with larger feature panels using responsive `clamp()` padding

### Audit observations: spacing

- The shared spacing tokens are well defined, but active pages frequently bypass them with Tailwind arbitrary padding, gap, width, and minimum-height values.
- `Container.tsx` and `.ei-container` use different mobile/tablet gutters. Both are active, especially on the Lumo page.
- The repeated `max-w-[1180px]` content wrapper matches `--ei-content-max`, but is often expressed as a literal Tailwind value instead of the token.
- One-off layout values are common in bespoke areas, including `1180px`, `1220px`, `1240px`, `1280px`, `680px`, and numerous custom grid fractions.
- The Identity page has the most page-specific layout system, including seven-column deliverables on large screens and additional breakpoints at `1180px`, `900px`, and `640px`.

---

## 5. Typography Rules

### Font roles

Defined in `src/styles/02-base/typography-system.css`:

- Editorial/display: `Fraunces`, with Georgia and Times fallbacks.
- Structural/body/UI: `Neue Montreal`, with Inter and system sans-serif fallbacks.
- System/metadata: `Geist Mono`, with JetBrains Mono and Fira Code fallbacks.
- `--ei-font-copy` separately uses a system sans-serif stack.

Neue Montreal font files are self-hosted under `public/fonts/neue-montreal/` and duplicated under `src/assets/fonts/neue-montreal/`. Fraunces and Geist Mono are expected to be loaded externally or by the existing document setup.

### Canonical hierarchy

| Class | Size | Line height | Tracking | Role |
| --- | --- | --- | --- | --- |
| `.ei-type-hero` | `clamp(2.75rem, 7vw, 6rem)` | `0.98` | `-0.04em` | Largest editorial hero. |
| `.ei-type-hero-home` | `clamp(2.25rem, 4.55vw, 3.55rem)` | `1.04` | `-0.034em` | Restrained shared hero scale. |
| `.ei-type-statement` | `clamp(2.125rem, 5vw, 4rem)` | `1.05` | `-0.035em` | Manifesto/statement. |
| `.ei-type-section` | `clamp(1.75rem, 3.6vw, 2.75rem)` | `1.1` | `-0.025em` | Editorial section heading. |
| `.ei-type-section-structural` | `clamp(1.75rem, 3.2vw, 2.5rem)` | `1.12` | `-0.025em` | Sans-serif section heading. |
| `.ei-type-body-large` | `clamp(1.0625rem, 1.4vw, 1.3125rem)` | `1.68` | `-0.006em` | Larger supporting copy. |
| `.ei-type-body` | `clamp(1rem, 1.15vw, 1.1875rem)` | `1.65` | `-0.005em` | Standard body copy. |
| `.ei-type-small` | `clamp(0.875rem, 1vw, 1rem)` | `1.6` | `-0.003em` | Supporting/body-small copy. |
| `.ei-type-label` | `clamp(0.625rem, 0.75vw, 0.75rem)` | `1.4` | `0.16em` | Uppercase metadata/eyebrow. |
| `.ei-type-hero-eyebrow` | `clamp(0.625rem, 0.75vw, 0.75rem)` | `1.4` | `0.2em` | Hero eyebrow. |
| `.ei-type-quote` | `clamp(1.5rem, 3vw, 2.25rem)` | `1.35` | `-0.02em` | Editorial quotation. |

`src/styles/03-components/studio.css` adds the widely used Studio typography family:

- `.ei-type-studio-hero`: `clamp(2.55rem, 5vw, 4.65rem)`, `0.99` line height.
- `.ei-type-studio-philosophy`: `clamp(1.65rem, 2.6vw, 2.55rem)`.
- `.ei-type-studio-body`: approximately `0.98–1.1rem`, `1.72` line height.
- `.ei-type-studio-card-title`: approximately `1.45–1.75rem`.
- `.ei-type-studio-feature-title`: `clamp(3.35rem, 6vw, 5.2rem)`.
- `.ei-type-studio-slim-cta`: `clamp(1.65rem, 2.85vw, 2.55rem)`.

### Labels, links, and emphasis

- Labels are generally uppercase with wide tracking between `0.16em` and `0.38em`.
- Section-label rows use structural type at `0.6875rem` with `0.24em` tracking.
- Primary links use `0.6875rem`, uppercase, `0.22em` tracking.
- Subtle links use `0.625rem`, uppercase, `0.22em` tracking.
- Editorial italic emphasis uses `.ei-type-studio-hero-emphasis` and secondary moonlit text rather than a bright accent.

### Responsive typography

At widths below `768px`:

- hero type is capped around `3.5rem` with tighter line height
- statement and section sizes reduce to viewport-based clamps
- body and body-large normalize to `1rem`
- labels reduce to `0.625rem` and `0.12em` tracking
- Studio hero/philosophy classes receive separate mobile scales in `studio.css`

### Audit observations: typography

- The core type hierarchy is coherent: editorial serif for emotional hierarchy, Neue Montreal for clarity, and monospaced/structural labels for system detail.
- The repository maintains canonical `.ei-type-*` classes but also retains legacy aliases for compatibility.
- Bespoke pages, especially Lumo and Contact, use many direct Tailwind font sizes, line heights, and tracking values rather than canonical classes alone.
- `PageSectionHeading` overrides `.ei-type-section` with a fixed `2.1rem` size and custom spacing.
- Body copy alternates between Neue Montreal-based classes and `--ei-font-copy`, which is a separate system sans-serif stack.

---

## 6. Colour Rules

### Core palette

The source of truth is `src/styles/01-tokens/tokens.css`:

| Token | Value | Use |
| --- | --- | --- |
| `--ei-void` | `#05030b` | Deepest page background and scrims. |
| `--ei-ink` | `#080718` | Canvas/deep surface. |
| `--ei-midnight` | `#0b0d2a` | Elevated dark surface and blue-black atmosphere. |
| `--ei-electric-blue` | `#0b20f6` | Strong blue accent. |
| `--ei-halo-blue` | `#4985fd` | Main interactive/accent blue. |
| `--ei-violet` | `#7107ea` | Primary atmospheric violet. |
| `--ei-echo-magenta` | `#dd12cb` | Secondary accent and gradient endpoint. |
| `--ei-soft-neon` | `#e669f2` | Softer luminous pink/violet accent. |
| `--ei-moonlit` | `#e3d8fd` | Lavender text and soft borders. |
| `--ei-ice-white` | `#f7f5fa` | Highest-contrast text and highlights. |

RGB helper tokens mirror the core palette for alpha-based gradients and borders.

### Semantic colours

- Backgrounds: body uses Void; canvas uses Ink; surfaces use translucent Midnight.
- Text:
  - primary: Ice White at `0.96`
  - secondary: Moonlit at `0.78`
  - tertiary: Moonlit at `0.58`
  - muted: Moonlit at `0.42`
  - faint: Moonlit at `0.28`
- Borders:
  - hairline: Moonlit at `0.08`
  - soft: `0.12`
  - medium: `0.18`
  - bright: Ice White at `0.28`
- Accent borders use translucent Halo Blue, Violet, or Echo Magenta.
- Header active states use Halo Blue; default navigation uses translucent Ice White.

### Gradients, glows, and shadows

- Primary brand gradients move from Halo Blue through Violet to Echo Magenta.
- Image overlays are predominantly Void-based vertical fades or left-to-right text scrims.
- Page backgrounds combine multiple radial blue/violet/magenta fields over Void/Ink/Midnight.
- Glows are deliberately broad and low opacity, often using blur radii from roughly `40px` to `120px`.
- Card shadows are deep black elevation shadows, sometimes combined with a faint violet or blue outer glow.
- Card radii are tokenized in `src/styles/03-components/cards.css`:
  - small: `20px`
  - medium: `24px`
  - large: `28px`
  - extra large: `32px`
- Buttons and filters use pill radii.

### Hard-coded colour observations

The palette is strongly tokenized, but some active TSX bypasses the semantic token layer:

- `src/pages/StudioPage.tsx` uses `rgba(232,228,245,0.72)` for philosophy body copy.
- `src/components/ui/EchoSelect.tsx` uses literal Midnight, Void, Halo Blue, and white alpha values.
- `src/components/ui/EyebrowLabel.tsx`, `src/components/cards/QuoteCard.tsx`, `src/components/cards/SystemCard.tsx`, `src/components/navigation/Header.tsx`, and several atmosphere components use literal RGB values that correspond to the core palette.
- `src/components/lumo/LumoSignatureCaseStudy.tsx` contains many literal palette values for its bespoke atmospheric artwork.
- `src/components/orbitals/orbitals.tsx` defines palette colours as TS constants rather than consuming CSS variables.
- `src/components/ui/CTAOrbitalBackground.tsx` contains additional hard-coded SVG hex colours (`#9A5CFF`, `#6AF6FF`, `#FF4FD8`, and `#05070D`) that do not directly match the current core token values.
- `src/lib/cinematic.ts` contains an alternate dark/light palette (`#050505`, `#080808`, `#0A0A0A`, indigo/violet/aqua rgba values) separate from the active EI colour tokens.

These are implementation consistency observations only; many are visually aligned with the intended palette even when they bypass semantic variables.

---

## 7. Visual Language

The current site uses a dark, cinematic, editorial visual language built around:

- Void-black and midnight-blue backgrounds with very low-luminance transitions.
- Full-bleed atmospheric WebP imagery in heroes and feature panels.
- Separate mobile and desktop crops for most route heroes.
- Editorial serif headlines paired with restrained, highly readable structural body copy.
- Sparse moonlit text, wide-tracked labels, and small luminous rules.
- Large negative space around emotional statements and narrative transitions.
- Soft radial glows in blue, violet, and magenta rather than bright neon panels.
- Layered scrims, edge vignettes, image masks, and subtle grain to merge imagery into the page background.
- Cards built as dark translucent surfaces with soft borders, large radii, inset highlights, and restrained depth shadows.
- SVG orbital motifs as a recurring brand/system language for categories, process signals, metadata, and atmospheric anchors.
- Feature cards that use imagery as atmosphere rather than as isolated thumbnails.
- Low-contrast separators and hairline borders instead of heavy dividers.
- CTAs that remain dark and tonal; primary actions gain luminosity through borders, gradients, and movement rather than bright solid fills.

Contrast is intentionally hierarchical: primary editorial statements approach Ice White, supporting copy uses Moonlit alpha levels, and labels/actions are quieter until hover or focus.

---

## 8. Responsive Behaviour

### Breakpoint model

The implementation primarily follows Tailwind defaults:

- mobile-first base styles
- `sm` at `640px`
- `md` at `768px`
- `lg` at `1024px`
- `xl` at `1280px`

Page-specific CSS also uses custom thresholds at `560px`, `640px`, `767/768px`, `900px`, `1100px`, and `1180px`.

### Desktop

- Fixed header shows the full navigation and contact action from `md` upward.
- Heroes generally occupy `72–88vh`, with wide image fields and left-positioned copy.
- Multi-column layouts expand to two, three, four, five, or seven columns depending on page type.
- The atmospheric cursor is visible only from `md` upward.
- Section rails and some decorative/process lines appear only on larger viewports.

### Tablet

- `md` is the principal composition breakpoint.
- Hero imagery switches to desktop sources at `768px`.
- Editorial split layouts, process rows, footer columns, trust panels, and project grids begin forming at this breakpoint.
- Horizontal gutters expand substantially.

### Mobile

- The desktop header navigation is replaced by an animated top sheet with editorial route links.
- Content grids collapse to one column, with selective two-column arrangements for small cards or marked lists.
- Filters become horizontally scrollable in `WorkFilterBar`.
- Buttons commonly become full width or stack vertically before returning to inline layouts at `sm`.
- The shared mobile utility layer reduces section padding and glow intensity.
- Hover transforms are disabled under `@media (hover: none)`.
- The atmospheric cursor is removed.

### Mobile-specific imagery and components

Dedicated mobile hero/section assets are used for:

- Home hero
- Identity hero
- Sessions hero
- Worlds hero and journey image
- Works hero
- Studio hero
- Systems hero
- Contact hero
- Archive hero
- Home Lumo feature imagery

`PageSectionHero` and most bespoke heroes use `<picture>` sources to switch at `768px`. `StudioHero.tsx` also contains separate desktop and mobile visual containers, although the current Studio route uses `PageSectionHero` instead.

### Audit observations: responsive behavior

- Responsive intent is thorough, but logic is distributed across Tailwind classes, shared mobile utilities, and page-specific CSS.
- Several pages use custom breakpoints beyond the main Tailwind model, which should be included in cross-device visual review.
- Dense page-specific layouts such as Identity deliverables, Systems category grids, Worlds architecture rows, Archive index rows, and the Lumo editorial grids deserve particular attention around intermediate widths.

---

## 9. Motion and Interaction

### Libraries and motion sources

- Framer Motion is the primary animation library.
- Route changes use `AnimatePresence` and `PageTransition`.
- CSS transitions handle colour, border, shadow, opacity, underline growth, and image scale.
- `tailwindcss-animate` is installed, though the dominant visual motion is custom Framer Motion and CSS.

### Shared motion language

The main motion definitions in `src/lib/motion-cinematic.ts` use:

- cinematic easing: `[0.22, 1, 0.36, 1]`
- luxury easing: `[0.16, 1, 0.3, 1]`
- durations from `0.2s` micro-interactions to `2s` cinematic reveals
- ambient loops around `8–12s`
- viewport reveal margins from `-50px` to `-200px`
- stagger intervals from `0.06s` to `0.32s`

Common patterns:

- `fadeSoft`: opacity emergence.
- `driftUp`: small vertical rise and fade.
- `blurEmergence`: opacity, vertical movement, blur, and slight scale resolving into focus.
- `heroReveal`: slower hero entrance.
- staggered parent containers for cards, headings, and metadata.
- long ambient glow, grain, contour, and orbital breathing loops.

### Interaction patterns

- Cards lift by approximately `2–4px`; linked project imagery scales to roughly `1.02`.
- Buttons lift `1–2px`, with border, background, text, or glow intensification.
- Navigation and card actions animate underline width, arrow translation, or active-rule opacity.
- Filters and custom select controls use soft border/background changes.
- The custom desktop cursor is a large, diffused, spring-smoothed glow rather than a pointer replacement.
- Route transitions dissolve through a full-screen Void overlay and reset scroll position.

### Reduced motion and accessibility

- `useReducedMotion()` is used in page transitions, atmospheric systems, the cursor, cards, `PageSection`, Home featured work, and the Lumo case study.
- `src/styles/02-base/accessibility.css` includes `prefers-reduced-motion: reduce` rules.
- Tailwind `motion-reduce` utilities disable project-card image scaling.
- Touch devices disable hover transforms through `@media (hover: none)`.
- Focus-visible rings and skip-link support are implemented globally and reinforced in key interactive components.

### Audit observations: motion

- There are two closely related motion modules: `src/lib/motion-cinematic.ts` and `src/system/motion/cinematic.ts`. Most active pages import from `src/lib`, while `PageSection.tsx` imports from `src/system`.
- `src/lib/cinematic.ts` defines another cinematic timing/density model used by hooks, creating a third motion/token vocabulary.
- The `src/lib/motion-cinematic.ts` variants include randomized duration, offset, and stagger calculations. This produces organic variation but can make exact visual timing differ between renders.
- Reduced-motion support is present and meaningful, but not every page-level `whileInView` sequence explicitly checks the preference; coverage relies partly on global CSS and component-level safeguards.

---

## 10. Audit Handoff Summary

Echo in Ink is built as a Vite React single-page application with route-level pages, a shared shell/header/footer, reusable layout and card primitives, structured content data, layered CSS, and Framer Motion animation. The live design system is concentrated in `src/styles/01-tokens/tokens.css`, `src/styles/02-base/`, `src/styles/03-components/`, and the shared components under `src/components/layout`, `ui`, `cards`, `sections`, `navigation`, and `atmosphere`.

The current visual rules are consistent at a high level: near-black atmospheric backgrounds, moonlit typography, Fraunces editorial hierarchy, Neue Montreal structural copy, wide-tracked labels, generous negative space, soft image scrims, large-radius translucent cards, thin borders, orbital SVG motifs, and slow restrained motion. Most pages share an 1180px inner content width within a 1440px shell and collapse from editorial multi-column layouts to stacked mobile compositions around 768px.

During visual review, special attention should be given to:

- consistency between bespoke heroes and the shared `PageSectionHero`
- the tighter page-local section spacing versus the larger canonical section tokens
- the two active container/gutter implementations
- typography overrides on Lumo, Contact, and other bespoke sections
- hard-coded colour values that visually match the palette but bypass semantic tokens
- intermediate responsive widths on dense page-specific grids
- consistency of reveal timing across the duplicated motion systems
- mobile image crops, mobile menu depth, reduced glow intensity, and touch-state behavior

These are audit observations about implementation consistency and review risk, not redesign recommendations.
