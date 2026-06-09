# Echo in Ink Design-System Inconsistency Audit

This audit is limited to design-system inconsistencies found in the current repository. It is based on active routes and their supporting files, with inactive or transitional components identified separately where relevant. No redesign is proposed.

## 1. Executive Summary

The website has a recognisable and generally coherent visual identity: dark atmospheric backgrounds, moonlit text, editorial serif headings, restrained glows, large-radius surfaces, orbital motifs, and slow cinematic motion. The strongest consistency is at the level of art direction.

Implementation consistency is weaker. The site currently operates as several overlapping visual systems:

- shared tokens and base classes in `src/styles/01-tokens/` and `src/styles/02-base/`
- shared component treatments in `src/styles/03-components/`
- Tailwind utility and arbitrary-value styling in active TSX files
- extensive page-specific CSS for Identity, Sessions, Worlds, Systems, Studio, and Archive
- bespoke Home and Lumo visual systems
- multiple layout, hero, CTA, typography, and motion implementations

The main risk is not that the pages look unrelated. The risk is that visually similar elements are controlled by different values and files, making site-wide refinement difficult. A designer may request one adjustment to hero depth, card glow, label spacing, or mobile rhythm, but the change may need to be reproduced manually across several implementations.

### Overall health

| Area | Consistency health | Main concern |
| --- | --- | --- |
| Brand palette and atmosphere | Moderate to strong | Core palette is clear, but many active values bypass tokens. |
| Typography | Moderate | Font roles are coherent; page-specific scales and direct overrides are extensive. |
| Layout and spacing | Moderate to weak | Shared scales exist, but many pages use local spacing and container rules. |
| Heroes | Weak | Five materially different hero implementations are active. |
| Cards | Moderate | A shared base exists, but page variants frequently replace its surface, glow, radius, and hover behavior. |
| Buttons and controls | Moderate | Main `Button` is shared, but header CTAs, filters, select controls, and Contact submit styling form separate systems. |
| Responsive behavior | Moderate | Mobile support is thorough but page-specific and based on several breakpoint models. |
| Motion | Moderate | The motion language is coherent, but there are multiple token modules and some randomized timing. |
| Maintainability for visual polish | Weak to moderate | The same visual decision often exists in multiple independent implementations. |

---

## 2. Highest-Priority Inconsistencies

### 1. Active components reference undefined design tokens

`src/components/layout/Layout.tsx` uses `--ei-ink-black`, and `src/components/home/HomeClosingSection.tsx` uses `--ei-color-background-void`. Neither variable is defined in the active token files.

This can invalidate the affected background declarations and cause those areas to inherit or fall back differently from their intended treatment. The Home closing fade also includes the unresolved variable inside a gradient, which invalidates the whole gradient value.

- **Priority:** High
- **Timing:** Fix before external design review
- **Reason:** The reviewer should see the intended background and transition rather than a browser fallback.

### 2. Mobile/browser chrome metadata conflicts with the dark website

`index.html` declares `<meta name="theme-color" content="#fafafa">` and `color-scheme` as `light dark`, while the implemented site is predominantly Void (`#05030b`) and dark-only in presentation.

On supported mobile browsers, the browser chrome can appear light against the dark site. This is especially relevant to screenshot-based or device-based review.

- **Priority:** High
- **Timing:** Fix before external design review
- **Reason:** It can make the site appear visually unfinished even though the page CSS is dark.

### 3. The active hero system is fragmented

Four routes use `PageSectionHero`, while Home, Identity, Sessions, Worlds, and Archive each use separate hero structures. These implementations differ in:

- minimum height
- vertical alignment
- header offset
- copy width and left inset
- image saturation/brightness
- scrim geometry
- mobile copy placement
- CTA spacing
- heading scale

The variation may be intentional, but it is not represented as one controlled hero system. Hero polish cannot currently be applied consistently from one source.

- **Priority:** High
- **Timing:** Show to the external reviewer; standardize after visual direction is confirmed
- **Reason:** The reviewer should decide which differences are meaningful page character and which are drift.

### 4. Lumo functions as a separate typography, spacing, and atmosphere system

`src/components/lumo/LumoSignatureCaseStudy.tsx` contains a large concentration of direct values: small `12–14px` body text, line heights up to `1.95`, custom lavender opacity levels, many custom section paddings, bespoke grid proportions, and literal RGB atmosphere values.

The page is internally coherent, but it diverges more than any other route from the shared type and spacing classes.

- **Priority:** High
- **Timing:** Show to the external reviewer; normalize only after review
- **Reason:** The reviewer should assess whether the case study is intentionally more editorial and quiet or whether it has become visually detached from the main site.

### 5. Shared card styles apply interactive hover treatment to non-interactive cards

`src/styles/03-components/cards.css` applies hover background, border, and shadow changes to every `.ei-card`. Many informational cards on Sessions, Worlds, Identity, Archive, and Systems use `.ei-card` without being links or buttons.

This creates a visual cue that a static card may be interactive, while some truly interactive cards add a separate lift or image-scale treatment.

- **Priority:** High
- **Timing:** Review before external review if hover behavior will be demonstrated; otherwise decide with the reviewer and fix afterward
- **Reason:** Interaction semantics and visual feedback should align.

### 6. Canonical spacing exists but is routinely bypassed

The shared `Section` component exposes named spacing variants, yet most active pages use `spacing="none"` and add local `pt-*`/`pb-*` values. Studio, Systems, and Home repeat a tight `pt-6 pb-2 md:pt-8 md:pb-4` rhythm, while Identity, Sessions, Worlds, Archive, Contact, and Lumo use separate page systems.

- **Priority:** High
- **Timing:** Show rhythm differences to the reviewer; consolidate after review
- **Reason:** Section density is a visual-direction decision. Premature normalization could remove intentional pacing.

### 7. The palette is tokenized but active artwork and controls use parallel literal palettes

The largest examples are:

- `src/components/ui/CTAOrbitalBackground.tsx`
- `src/components/home/HomeHeroBackground.tsx`
- `src/components/lumo/LumoSignatureCaseStudy.tsx`
- `src/components/ui/EchoSelect.tsx`
- `src/components/orbitals/orbitals.tsx`
- `src/components/navigation/Header.tsx`
- `src/components/navigation/Footer.tsx`

Some literals reproduce the token values, while others introduce nearby but different violet, cyan, pink, and near-black values.

- **Priority:** High
- **Timing:** Show visibly distinct colour treatments to the reviewer; perform token cleanup afterward
- **Reason:** The external review should confirm which colour differences are intentional before implementation is unified.

### 8. Motion has multiple sources of truth and randomized timing

Motion definitions are split across:

- `src/lib/motion-cinematic.ts`
- `src/system/motion/cinematic.ts`
- `src/lib/cinematic.ts`

Most active routes use the first module, while `PageSection`, `Footer`, and one atmospheric component use the second. The main `src/lib/motion-cinematic.ts` also uses `Math.random()` in reveal duration, offset, and stagger calculations.

- **Priority:** Medium
- **Timing:** Stabilize random timing before review if motion is being recorded or compared; consolidate modules after review
- **Reason:** Repeated captures can show slightly different timing, complicating precise motion feedback.

---

## 3. Inconsistencies by File

| File path | Issue found | Likely visual impact | Priority | Fix timing |
| --- | --- | --- | --- | --- |
| `src/components/layout/Layout.tsx` | Uses undefined `--ei-ink-black` instead of an active background token. | Root wrapper background declaration may be invalid; inherited background may mask the defect inconsistently. | High | Before review |
| `src/components/home/HomeClosingSection.tsx` | Uses undefined `--ei-color-background-void` for the section and its bottom gradient. | Closing background/fade can render differently from the intended Void transition. | High | Before review |
| `index.html` | Light `#fafafa` theme colour and `light dark` browser colour scheme conflict with the dark-only presentation. | Light mobile browser chrome can break the intended immersive frame. | High | Before review |
| `src/styles/01-tokens/tokens.css` and `src/styles/02-base/layout.css` | `--ei-page-max-width` is declared as `1280px` and later aliased to a `1440px` page maximum. | Developers cannot infer the effective canonical page width from the token file alone. | Medium | After review |
| `src/components/layout/Container.tsx` and `src/styles/02-base/layout.css` | Two active container systems use different gutter values and APIs. | Pages using `Container` and `.ei-container` can align differently, especially Lumo versus the main route pages. | High | Show in review; fix after |
| `src/styles/02-base/layout.css`, `src/styles/02-base/typography-system.css`, and `src/styles/04-utilities/mobile.css` | Text-spacing and mobile section rules are declared more than once, sometimes with different desktop values. | Cascade and layer order, rather than one explicit rule, determines the final rhythm. | Medium | After review |
| `src/styles/03-components/cards.css` | Base card tokens such as `--ei-card-bg`, border, shadow, and hover behavior are redefined relative to the core token file. | “Single source of truth” is ambiguous; changing the token file may not change live cards as expected. | High | After review |
| `src/styles/03-components/cards.css` | Every `.ei-card` receives hover surface and shadow changes, including non-interactive articles. | Static content can look clickable; interactive intensity differs unpredictably by card subtype. | High | Before review if interactions are reviewed |
| `src/components/sections/PageSectionHero.tsx` | Shared hero has three variants, but only four routes use it; its height, heading, scrim, and alignment values are largely embedded in TSX. | Shared hero changes remain difficult, and bespoke heroes cannot inherit them. | High | Show in review; fix after |
| `src/components/home/HomeHero.tsx` and `src/components/home/HomeHeroBackground.tsx` | Home hero uses fixed pixel minimum heights, custom copy offsets, and literal near-black fades separate from `PageSectionHero`. | Home establishes a different hero scale and mobile fade language from interior pages. | High | Show in review; fix after |
| `src/styles/03-components/identity.css` and `src/pages/IdentityPage.tsx` | Identity has a separate three-column hero, a 900px collapse breakpoint, an atmosphere rail, and many local typography/layout values. | Identity can feel more interface-like and structurally dense than the other offer pages. | High | Show in review; fix after |
| `src/styles/03-components/sessions.css` and `src/pages/SessionsPage.tsx` | Sessions recreates hero, card, list, quote, offer, and CTA rules locally. Mobile changes hero alignment from centered to bottom and quote alignment from center to left. | Mobile and desktop can feel like different compositions rather than responsive versions of one system. | Medium | Show in review; fix after |
| `src/styles/03-components/worlds.css` and `src/pages/WorldsPage.tsx` | Worlds uses a bespoke hero and changes architecture/fit items from rounded cards on small screens to border-only columns above 900px. | Surface language changes significantly by viewport, affecting perceived hierarchy. | Medium | Show in review; fix after |
| `src/styles/03-components/archive.css` and `src/pages/ArchivePage.tsx` | Archive has its own hero sizing, filter shell, feature card, note cards, index rows, and CTA system. | Archive is coherent internally but only partially inherits shared card/control behavior. | Medium | Show in review; fix after |
| `src/pages/StudioPage.tsx` | Repeats local section labels, 1180px wrappers, panel surfaces, section spacing, and CTA markup; body colour uses literal `rgba(232,228,245,0.72)`. | Minor colour drift and duplicated layout make Studio costly to adjust consistently with Systems and Works. | Medium | After review |
| `src/pages/SystemsPage.tsx` | Uses `PageShell atmosphere="works"` and repeats Studio’s spacing, labels, card wrappers, and closing-strip structure rather than using shared abstractions. | Systems visually borrows the Works atmosphere and may be hard to tune independently or consistently. | Medium | Show atmosphere choice in review; refactor after |
| `src/pages/WorksPage.tsx` | Closing CTA is nearly the same structure as Studio’s closing CTA but implemented independently with inline styles and an image layer. | Small border, padding, overlay, and motion differences can accumulate between visually similar CTAs. | Medium | After review |
| `src/pages/ContactPage.tsx` | Uses a shared hero but an extensively one-off split panel, quote style, trust cards, icon wells, and submit-button override. | Contact has a denser, more luminous card language and a taller/darker primary button than the rest of the site. | High | Show in review; fix after |
| `src/components/ui/Button.tsx` and `src/styles/03-components/buttons.css` | Button construction is split between Tailwind classes and CSS pseudo-elements; additional unused legacy button systems remain in CSS. | It is difficult to know which file controls size, glow, border, and hover intensity. | Medium | After review |
| `src/components/navigation/Header.tsx` | Desktop and mobile contact actions are custom links rather than `Button`; header gradients/shadows use literal values. | Header CTAs can drift from page buttons in dimensions, glow, and interaction states. | Medium | After review |
| `src/components/ui/EchoSelect.tsx` and `src/styles/03-components/forms.css` | The custom select does not use the shared form surface rules and has its own radii, literal colours, typography, shadows, and heights. | Text inputs and select controls do not read as one field family without page-level overrides. | High | Before review if Contact/forms are in scope; otherwise after |
| `src/components/works/WorkFilterBar.tsx` and `src/styles/03-components/archive.css` | Works and Archive implement visually similar pill filters separately. | Selected states, spacing, focus rings, and mobile scrolling behavior can diverge. | Medium | After review |
| `src/components/ui/CTAOrbitalBackground.tsx` | Uses hard-coded `#9A5CFF`, `#6AF6FF`, `#FF4FD8`, and `#05070D`, not the active EI palette values. | Home closing CTA can appear more cyan/neon and less restrained than the rest of the site. | High | Show in review; tokenize after |
| `src/components/orbitals/orbitals.tsx` | Repeats the core palette as TypeScript colour constants rather than using CSS variables. | Future palette changes will not automatically update orbital artwork. | Medium | After review |
| `src/components/lumo/LumoSignatureCaseStudy.tsx` | Contains extensive custom typography, spacing, colour opacity, grids, and atmosphere values. | Lumo is the most visually divergent route and the hardest to polish from global system changes. | High | Show in review; fix after |
| `src/lib/motion-cinematic.ts` | Uses random values in shared reveal timing and distance. | Motion comparisons and recordings are not fully repeatable. | Medium | Before review if motion is assessed |
| `src/system/motion/cinematic.ts` and `src/lib/cinematic.ts` | Additional timing, easing, density, and atmosphere vocabularies overlap with the main motion module. | Components can receive different motion character depending on import path. | Medium | After review |
| `tailwind.config.ts` | Retains legacy EI aliases, references undefined `--ei-electric-cyan`, and defines generic shadcn-style theme variables not used by the active EI system. | Future utility use can silently introduce invalid or off-system colour/radius behavior. | Low | After review |
| `src/styles/globals.css` and `src/styles/easy-page.css` | The unrouted Easy page system is still globally imported. | It adds another visual vocabulary and global CSS payload, though current class names are mostly isolated. | Low | After review |
| `src/components/studio/StudioHero.tsx`, `StudioCTA.tsx`, `StudioPhilosophyGrid.tsx`, and `StudioValuesGrid.tsx` | Visually similar Studio primitives exist but are not used by the active Studio route. | The repository contains two competing ideas of the Studio page system, increasing future drift risk. | Low | After review |

---

## 4. Repeated Patterns That May Need Standardising

The following patterns are visually similar enough to merit one shared implementation or a controlled variant API after the external review.

### Section label with luminous rule

Near-identical local helpers exist in:

- `src/pages/StudioPage.tsx`
- `src/pages/SystemsPage.tsx`
- `src/pages/SessionsPage.tsx`
- `src/pages/WorldsPage.tsx`
- `src/pages/ContactPage.tsx`
- `src/pages/WorksPage.tsx`
- `src/pages/ArchivePage.tsx`

`EyebrowLabel` and `NumberedSectionLabel` also represent related label patterns. A shared section-label component would make line colour, gap, type size, tracking, metadata, and alignment centrally controllable.

### 1180px inner content frame

`max-w-[1180px]` is repeated across Studio, Systems, Works, Contact, and shared section components, while `--ei-content-max: 1180px` already exists.

This is a strong candidate for a named layout primitive or token-backed class.

### Tight section cadence

Home, Studio, and Systems repeatedly use:

```text
pt-6 pb-2 md:pt-8 md:pb-4
```

Opening philosophy sections often use:

```text
pt-12 pb-2 md:pt-16 md:pb-4
```

Closing strips often use:

```text
pt-8 pb-10 md:pt-10 md:pb-12
```

These are already de facto section variants but are not represented in `Section`’s spacing map.

### Hero composition

The repeated hero ingredients are:

- desktop/mobile image source
- top and bottom fades
- left copy scrim
- section label
- editorial heading with italic emphasis
- supporting copy
- one or two actions
- route-specific image position and height

These could be controlled by a shared hero shell with deliberate variants once the reviewer identifies the preferred visual range.

### Closing CTA strip

Studio, Works, Systems, Identity, Archive, Sessions, Home, and Lumo all end differently, despite sharing the same functional role. Studio and Works are especially close in structure.

The shared system likely needs a small set of intentional variants, such as:

- slim tonal strip
- image-backed strip
- centered orbital invitation
- full editorial closing panel

This is an implementation standardisation observation, not a recommendation that every page use the same visual treatment.

### Filter and select controls

Works and Archive both use:

- pill filters
- an active indicator
- a custom `EchoSelect`
- mobile horizontal scrolling or constrained layouts

Their selected states and shells are implemented separately.

### Orbital icon wells

Circular bordered icon wells recur in Contact, Systems, Sessions, Worlds, Archive, and Identity with slightly different:

- dimensions
- border alpha
- background alpha
- glow blur
- icon size

A shared icon-well primitive could preserve variants while preventing arbitrary drift.

### Card families

The site contains several visually adjacent card concepts:

- base `.ei-card`
- soft card
- transformation card
- capability card
- project card
- systems product card
- Sessions signal/detail cards
- Worlds signal/fit/architecture cards
- Archive notes/feature/index cards
- Identity deliverable/pricing cards

The family should be reviewed as a hierarchy of intentional variants. At present, several page-specific cards redefine the same surface properties independently.

### Button-like interactions

The shared `Button` does not cover:

- header contact actions
- filter pills
- custom select trigger
- some secondary text links
- Archive filter controls

These do not all need to become buttons, but their type, focus, radius, height, and interaction tokens should come from the same control system.

---

## 5. Design-Token and CSS Rule Issues

### Colour

- The active core palette is well defined, but hard-coded RGB/rgba values remain common in active TSX.
- Some literals exactly reproduce tokens, which creates maintenance duplication rather than immediate visual drift.
- Other literals are nearby but different colours, especially the Home CTA SVG cyan/violet/pink values and Home hero near-black values.
- `src/lib/cinematic.ts` defines a separate neutral black and indigo/violet/aqua palette unrelated to the primary EI token names.
- The same alpha levels for borders and glows are repeatedly entered directly instead of represented as semantic component tokens.

### Spacing

- `Section` has semantic spacing variants, but most active pages opt out with `spacing="none"`.
- Container widths are expressed through both CSS variables and Tailwind arbitrary values.
- The site uses several inner maximum widths: `1180px`, `1220px`, `1240px`, `1280px`, and `1440px`.
- Page-local spacing often uses isolated values such as `1.35rem`, `1.55rem`, `1.7rem`, `1.8rem`, and `2.6rem`, making rhythm changes difficult to propagate.
- Mobile section rules are duplicated between `layout.css` and `mobile.css`.

### Typography

- Canonical `.ei-type-*` classes are present and conceptually strong.
- `studio.css` adds another broadly used typography family under `.ei-type-studio-*`.
- Page CSS then adds more direct font sizes and line heights on top of those classes.
- Lumo and Contact contain the greatest concentration of direct typography values.
- `--ei-font-copy` uses a system sans-serif stack while the principal structural font is Neue Montreal. Components using `font-copy` may not visually match normal body copy.
- Footer type classes are frequently supplemented with direct `text-[...]`, line-height, and tracking utilities.

### Borders and radii

- Core card radii are tokenized at `20`, `24`, `28`, and `32px`.
- Controls also use one-off `8`, `11`, `14`, and `16px` radii.
- Desktop Worlds architecture/fit items explicitly switch from rounded surfaces to square, border-only columns.
- Button and filter controls consistently use pill radii, but their border opacity values vary by implementation.

### Glows and shadows

- The global card hover shadow is relatively strong and includes magenta, while many page-specific cards add their own blue/violet shadows.
- Glow blur values and opacity levels are extensively local rather than derived from a small intensity scale.
- Contact uses several nested icon-well glows in one screen, creating a brighter local visual density than adjacent pages.
- Home’s CTA orbital artwork uses a more cyan-led glow than the primary Halo Blue/Violet/Magenta token system.

### Layout

- `Container.tsx` and `.ei-container` differ in gutters.
- Shared layout helpers such as `PageSection` and `Grid` exist but are rarely used by live pages.
- Most page composition is written directly with Tailwind grids or page-specific CSS.
- Several route pages use custom breakpoints that do not align with the main Tailwind breakpoints.

### Responsive rules

- Mobile behavior is carefully implemented but not centrally governed.
- Hero alignment varies: top, center, and bottom placement all occur on mobile.
- Breakpoints include `560`, `640`, `767/768`, `900`, `1024`, `1100`, and `1180px`.
- Some card families change structure rather than simply reflowing, especially Worlds and Identity.
- Home has a dedicated mobile image fade using colours not used by the desktop fade.

### Motion

- Most components share a coherent easing and duration language.
- Multiple motion modules weaken source-of-truth clarity.
- Randomized reveal values create small run-to-run differences.
- Reduced-motion support is present but implemented partly through hooks, partly through Tailwind classes, and partly through global CSS.

---

## 6. Page-Level Consistency Notes

| Page | Consistency assessment | Notes |
| --- | --- | --- |
| Home | Moderately consistent | Main content sections establish the repeated tight rhythm and shared card language. The hero and closing CTA are bespoke, use hard-coded colour treatments, and contain undefined background-token usage in the closing section. |
| Studio | Strong relative consistency | Closely follows shared hero, 1180px content frame, standard card tokens, and repeated section cadence. It still duplicates labels, CTA structure, and local panel values. |
| Systems | Strong relative consistency | Shares hero and spacing language with Studio/Works. It uses the Works atmosphere and has page-specific system-card/feature treatments. |
| Works | Strong relative consistency | Uses shared hero, shared project cards, shared filters/select, and restrained closing strip. Its CTA is separately implemented despite matching Studio structurally. |
| Sessions | Internally consistent, system-divergent | Hero, cards, offer, and CTA form a coherent page, but most are page-specific. Mobile alignment changes are stronger than on other routes. |
| Worlds | Internally consistent, system-divergent | Shares visual DNA with Sessions but has its own hero and responsive transformation from cards to border-only columns. |
| Archive | Moderately divergent | Uses common palette/type/card language but implements nearly every major pattern locally, including filters and the index. |
| Contact | Highly divergent | Shared hero connects it to the site, but the main panel, form controls, icon wells, quote, trust row, and submit button create a denser and brighter local system. |
| Identity | Highly divergent | Bespoke hero structure, page atmosphere, seven-column deliverables, pricing, rails, and custom breakpoints make it structurally distinct. |
| Lumo | Most divergent | Deliberately editorial and atmospheric, but it has a separate type scale, spacing rhythm, grid language, and large literal colour system. |

### Most consistent group

Studio, Systems, and Works are the closest implementation family. Home’s middle sections also align with this group.

### Most divergent pages

Lumo is the largest design-system outlier. Identity and Contact follow, because they use bespoke layout and surface systems rather than controlled shared variants.

### Closely related but separate page family

Sessions and Worlds are visually related and use parallel page-scoped CSS structures. Their similarity suggests they could share a common offer-page shell after review.

---

## 7. Recommendation for Design Review

### Resolve before the external review

These are technical inconsistencies that can distort or distract from the intended visual design:

1. Undefined `--ei-ink-black` and `--ei-color-background-void` references.
2. Light `theme-color` and ambiguous `color-scheme` metadata.
3. Randomized motion timing if the reviewer will compare recordings or repeated interactions.
4. Static cards receiving interactive hover treatment, if hover behavior is part of the review.
5. Form/select mismatch if Contact is a primary review screen.

These fixes should preserve the existing visual intent rather than normalize the design.

### Explicitly show to the reviewer

The reviewer should see and comment on:

- the different hero families
- Home’s unique hero and orbital closing treatment
- Lumo’s separate editorial scale
- Identity’s denser structural composition
- Contact’s brighter and more layered surface treatment
- Sessions and Worlds mobile transformations
- the range of card surfaces and hover intensities
- the different closing CTA types
- section-density differences between the tight Home/Studio/Systems rhythm and the more spacious Lumo/offer-page rhythm

These are visual-direction questions. They should not be flattened into one system before the reviewer confirms which differences are intentional.

### Hold for implementation cleanup after review

After visual direction is confirmed:

1. Select one container/gutter system.
2. Represent repeated 1180px frames and section cadences as shared primitives or tokens.
3. Consolidate section labels, hero shells, closing CTAs, icon wells, filter controls, and card variants.
4. Move approved literal colours, glow levels, borders, and radii into semantic/component tokens.
5. Consolidate motion modules and remove randomized timing where repeatability is preferred.
6. Remove or isolate inactive visual systems and legacy CSS.
7. Reduce page-level typography overrides once the approved hierarchy is known.

The external review should determine the intended visual range first. The subsequent implementation pass should make that range explicit through controlled variants rather than forcing every page into identical presentation.
