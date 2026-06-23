# Echo in Ink Design Inconsistencies Report

## Purpose

This report identifies implementation consistency risks and visual-review watchpoints across the current Echo in Ink codebase. It is not a redesign agenda. It does not treat deliberate atmospheric art direction, bespoke editorial layouts, or page-specific creative systems as defects by default.

The goal is to help a senior designer/developer reviewer understand where the site may be harder to critique consistently because similar visual outcomes are implemented through different systems, tokens, breakpoints, or component patterns. Findings are source-verified unless explicitly marked as requiring live-browser verification.

## Confidence labels

- **Verified inconsistency**: Source inspection proves two or more active implementations, tokens, selectors, components, or patterns differ for the same general role.
- **Likely visual-review risk**: Source inspection shows a pattern that may create visible inconsistency, but screenshots or live browser inspection are needed before calling it a visual defect.
- **Intentional exception / bespoke treatment**: Source inspection shows a deliberate page-specific system or art direction that should be protected from automatic normalization unless visual review says otherwise.
- **Needs live-browser verification**: The source suggests a possible issue, but computed CSS, layout, responsive behavior, or rendered screenshots are required to verify the outcome.

## Executive summary

- Verified inconsistencies: **12**
- Likely visual-review risks: **12**
- Intentional exceptions / bespoke treatments: **6**

The 5 most important areas for external review:

1. Container and width rhythm across `Container.tsx`, `.ei-container`, `.ei-layout-*`, and route-local `max-w-[1180px]` wrappers.
2. Hero consistency between `PageSectionHero` and bespoke Home, Booking, Lumo, archive essay, and route-specific CSS hero overrides.
3. Typography drift between canonical `.ei-type-*` classes, route-specific type classes, direct Tailwind text values, and footer/header local values.
4. Lumo’s deliberately divergent product-world system versus the dark Echo in Ink site language.
5. Responsive behavior at intermediate widths because active CSS uses many page-specific breakpoints beyond the shared Tailwind model.

## 1. Layout and spacing consistency

| ID | Confidence | Area | Files / components | What differs | Why it matters for review |
| --- | --- | --- | --- | --- | --- |
| L01 | Verified inconsistency | Duplicate container systems | `src/components/layout/Container.tsx`; `src/styles/02-base/layout.css`; `src/styles/03-components/design-system.css` | `Container` uses Tailwind gutters `px-6 md:px-10 xl:px-16` and `max-w-[1440px]`; `.ei-container` uses `--ei-gutter-mobile`, `--ei-gutter-tablet`, and `--ei-gutter-desktop`; `ContentFrame` adds another width/gutter layer. | Similar page shells can align differently depending on whether a route uses the React wrapper, `.ei-container`, `.ei-layout-*`, or `ContentFrame`. This is implementation-only until screenshots confirm visible drift. |
| L02 | Verified inconsistency | Page max-width aliases | `src/styles/01-tokens/tokens.css`; `src/styles/02-base/layout.css` | `tokens.css` declares `--ei-page-max-width: 1280px`; `layout.css` declares `--ei-page-max: 1440px` and aliases `--ei-page-max-width: var(--ei-page-max)`. | The same semantic alias appears in more than one source with different values before cascade/layer resolution. Reviewers should verify computed width behavior rather than relying on token names. |
| L03 | Verified inconsistency | Route-local inner rails | `src/pages/SystemsPage.tsx`; `src/pages/ArchivePage.tsx`; `src/pages/ArchiveIndexPage.tsx`; `src/pages/ArchiveNotesPage.tsx`; `src/pages/BookingPage.tsx`; `src/pages/SessionsPage.tsx`; `src/pages/WorldsPage.tsx`; `src/pages/ContactPage.tsx` | Many active pages use repeated `mx-auto max-w-[1180px]` wrappers inside `Container size="xl"` instead of a single shared rail component/class. | The visual intent may be consistent, but the repeated arbitrary value makes future alignment reviews and changes easier to miss across routes. |
| L04 | Verified inconsistency | Section spacing ownership | `src/components/layout/Section.tsx`; `src/styles/02-base/layout.css`; route CSS in `src/styles/03-components/*.css` | `Section` defines semantic spacing props, but many pages pass `spacing="none"` and rely on `.ei-*-section` page CSS or route-local Tailwind spacing. | Reviewers should compare actual vertical rhythm in screenshots because the semantic prop alone does not predict page spacing. |
| L05 | Likely visual-review risk | Arbitrary Tailwind layout values | `src/pages/StudioPage.tsx`; `src/pages/ContactPage.tsx`; `src/components/home/HomeFeaturedLumo.tsx`; `src/components/sections/PageSectionHero.tsx`; `src/components/navigation/Header.tsx`; `src/components/navigation/Footer.tsx` | Active TSX uses values such as `grid-cols-[...]`, `max-w-[...]`, `rounded-[...]`, `text-[...]`, `tracking-[...]`, and inline gradient utilities. | These values may be visually intentional, but they bypass a central reviewable scale and should be compared against neighboring pages. |
| L06 | Verified inconsistency | Grid gap sources | `src/styles/02-base/layout.css`; route/page classes in `src/pages/*.tsx`; `src/styles/03-components/*.css` | Global gap tokens `--ei-grid-gap-*` coexist with Tailwind `gap-*`, page CSS gaps, and arbitrary grid fractions such as `md:grid-cols-[0.9fr_1.6fr]`. | Gaps and fractions can be difficult to normalize visually because similar layouts are not all driven by the same spacing contract. |
| L07 | Likely visual-review risk | Bespoke layout fractions | `src/pages/StudioPage.tsx`; `src/components/navigation/Footer.tsx`; `src/pages/ContactPage.tsx`; `src/components/home/HomePhilosophySection.tsx` | Several active sections use custom fractional grid templates for editorial composition. | These may be correct art direction, but screenshots should compare whether proportional rhythm feels intentional across desktop and tablet. |
| L08 | Needs live-browser verification | Header offset ownership | `src/components/layout/PageShell.tsx`; route pages using `withTopSpacing={false}`; `src/components/sections/PageSectionHero.tsx`; `src/components/home/HomeHero.tsx` | `PageShell` can add `pt-24 md:pt-32`, but many hero-led pages disable top spacing and let the hero own header clearance. | Source shows mixed ownership; only live viewport checks can verify whether the fixed header overlaps or crowds hero copy on each route. |

## 2. Typography consistency

| ID | Confidence | Area | Files / components | What differs | Why it matters for review |
| --- | --- | --- | --- | --- | --- |
| T01 | Verified inconsistency | Canonical type classes versus page-specific type systems | `src/styles/02-base/typography-system.css`; `src/pages/StudioPage.tsx`; `src/pages/ContactPage.tsx`; `src/styles/03-components/studio.css`; `src/styles/03-components/editorial-archive.css` | The base file says new typography should use `.ei-type-*`, but active pages also use classes such as `ei-type-studio-body`, `ei-type-studio-label`, `ei-type-editorial-heading`, and `ei-type-section-heading`. | This is a source-level drift point: visual hierarchy may still align, but naming and scale sources are split. |
| T02 | Verified inconsistency | Body font stacks | `src/styles/01-tokens/tokens.css`; `src/styles/02-base/typography-system.css`; route CSS | `--ei-font-structural` is the primary Neue Montreal stack, while `--ei-font-copy` is a separate system sans stack used by some body/editorial classes. | Body text may render through different fallback stacks if Neue Montreal fails or if a route uses `--ei-font-copy` instead of the structural font. |
| T03 | Verified inconsistency | Direct Tailwind font sizing | `src/components/navigation/Header.tsx`; `src/components/navigation/Footer.tsx`; `src/components/ui/Button.tsx`; `src/components/home/HomeFeaturedLumo.tsx`; `src/pages/ContactPage.tsx`; `src/pages/StudioPage.tsx` | Active components use direct values such as `text-[10px]`, `text-[0.70rem]`, `text-[1.55rem]`, `text-[clamp(...)]`, and custom tracking values alongside `.ei-type-*`. | The rendered type may be appropriate, but the hierarchy is partly outside the canonical typography table. |
| T04 | Likely visual-review risk | Hero title scale variants | `src/components/sections/PageSectionHero.tsx`; `src/components/home/HomeHeroHeading.tsx`; `src/components/lumo/LumoSignatureCaseStudy.tsx`; `src/pages/BookingPage.tsx`; `src/pages/ArchiveEssayPage.tsx` | Shared hero routes use `.ei-type-hero-home`; Home uses its own hero heading component; Lumo and Booking do not use the same hero title system. | Reviewers should compare H1 scale, line-height, and perceived hierarchy across route families before calling this drift. |
| T05 | Verified inconsistency | Footer/header local typography | `src/components/navigation/Header.tsx`; `src/components/navigation/Footer.tsx`; `src/styles/02-base/typography-system.css` | Navigation and footer use a mix of `.ei-type-footer-*`, direct Tailwind text sizes, and font utilities instead of only `.ei-type-nav`, `.ei-type-meta`, or `.ei-type-label`. | Site chrome may be visually stable, but its type implementation is not fully governed by the canonical type classes. |
| T06 | Likely visual-review risk | Label tracking variations | `src/components/ui/SectionLabel.tsx`; `src/styles/03-components/design-system.css`; `src/components/navigation/Header.tsx`; `src/components/navigation/Footer.tsx`; route-local label classes | Shared labels use `.ei-section-label-system`; header/footer and some page copy use their own uppercase/tracking values. | Compare label density across hero eyebrows, section labels, footer headings, and navigation before treating differences as defects. |

## 3. Colour, surfaces, and effects consistency

| ID | Confidence | Area | Files / components | What differs | Why it matters for review |
| --- | --- | --- | --- | --- | --- |
| C01 | Verified inconsistency | Token usage versus hard-coded palette values | `src/styles/01-tokens/tokens.css`; `src/styles/03-components/lumo.css`; `src/styles/03-components/buttons.css`; `src/styles/03-components/works.css`; `src/styles/03-components/studio.css`; `src/styles/03-components/design-system.css` | Core palette tokens coexist with hard-coded values including `#fff`, `#080718`, and many Lumo-specific hex colors. Difference type: aligned but bypassing tokens, except Lumo where the palette is bespoke. | A visual reviewer should distinguish token bypasses that still match the palette from true visible divergence. |
| C02 | Intentional exception / bespoke treatment | Lumo alternate palette | `src/components/lumo/LumoSignatureCaseStudy.tsx`; `src/styles/03-components/lumo.css` | Lumo defines `--ei-lumo-canvas`, `--ei-lumo-ink-text`, `--ei-lumo-muted-text`, custom swatches, mascot colors, and light product-world panels. Difference type: intentional bespoke treatment. | Lumo is a case-study/product world and should not be automatically normalized into the dark site palette without visual judgment. |
| C03 | Verified inconsistency | Card radius tokens | `src/styles/01-tokens/tokens.css`; `src/styles/03-components/cards.css`; `src/styles/03-components/design-system.css`; `tailwind.config.ts`; route TSX | `tokens.css` defines `--radius-card`; `cards.css` defines `--ei-card-radius-sm/md/lg/xl`; Tailwind maps radii to `--radius`, which was not found in the inspected token files; route TSX uses `rounded-[32px]` and `rounded-[var(--ei-card-radius-lg)]`. | Card corners may look consistent now, but radius governance is split across multiple naming systems. |
| C04 | Likely visual-review risk | Surface opacity and border strength | `src/styles/01-tokens/tokens.css`; `src/styles/03-components/cards.css`; `src/styles/03-components/design-system.css`; route CSS files | Surfaces use many low-alpha combinations from token RGB values plus page-specific backgrounds and border opacities. Difference type: aligned but potentially variable. | Screenshot review should compare whether panels feel equally weighted across Studio, Works, Systems, Archive, Booking, and Contact. |
| C05 | Likely visual-review risk | Glow intensity | `src/styles/01-tokens/tokens.css`; `src/components/atmosphere/AtmosphericCursor.tsx`; `src/components/navigation/Header.tsx`; page CSS | Global glow tokens coexist with inline radial gradients, text shadows, cursor glow, page glows, and route-specific glow fields. Difference type: needs screenshot/browser review. | Glow is part of the Echo in Ink language, so the risk is uneven intensity, not the presence of glow itself. |
| C06 | Verified inconsistency | Tailwind config color slots | `tailwind.config.ts`; `src/styles/01-tokens/tokens.css` | Tailwind still exposes shadcn-style HSL slots (`border`, `input`, `ring`, `background`, `foreground`, `primary`, etc.) alongside Echo-specific `ei.*` colors. Difference type: implementation-only. | These config slots may not be visible in active routes, but they can create future confusion when adding utility classes. |
| C07 | Needs live-browser verification | Undefined-looking internal route color token | `src/pages/OrbitalsPage.tsx`; `src/styles/01-tokens/tokens.css` | `/internal/orbitals` uses `bg-[var(--ei-color-bg)]`; inspected core tokens define `--ei-color-background-*`, not `--ei-color-bg`. Difference type: needs browser verification. | This is an internal route, but a rendered check is needed to confirm whether it falls back or gets the intended background. |

## 4. Components and pattern reuse

| ID | Confidence | Area | Files / components | What differs | Why it matters for review |
| --- | --- | --- | --- | --- | --- |
| P01 | Verified inconsistency | Active versus unmounted component families | Active graph from `src/main.tsx` and `src/App.tsx`; unmounted files under `src/components/sections/`, `src/components/cards/`, `src/components/atmosphere/`, `src/components/lumo/` | Components such as `BeforeAfterSection`, `PricingTiers`, `ProcessSteps`, `UseCasesList`, `DeliverableCard`, `PhilosophyCard`, `SystemCard`, `LumoHero`, and several atmosphere components are present but not active. | External reviewers should not infer live design behavior from folder names alone. These files are future/confusion risk, not active visual defects. |
| P02 | Verified inconsistency | Hero reuse pattern | `src/components/sections/PageSectionHero.tsx`; `src/components/home/HomeHero.tsx`; `src/components/lumo/LumoSignatureCaseStudy.tsx`; `src/pages/BookingPage.tsx`; `src/pages/ArchiveEssayPage.tsx` | Most public routes use `PageSectionHero`, but Home, Lumo, Booking, and archive essay use bespoke entry compositions. | The site has a shared hero system and deliberate exceptions. Visual critique should compare whether exceptions feel authored rather than drifted. |
| P03 | Verified inconsistency | CTA implementations | `src/components/sections/CTASection.tsx`; `src/components/home/HomeClosingSection.tsx`; `src/components/home/HomeHeroCTA.tsx`; `src/pages/StudioPage.tsx`; route page CTAs | `CTASection` exists, but Home and Studio include bespoke CTA sections and local CTA arrow/button arrangements. | CTA hierarchy can appear consistent or divergent depending on route; screenshots should compare action prominence and spacing. |
| P04 | Likely visual-review risk | Buttons plus local link/button styling | `src/components/ui/Button.tsx`; `src/components/navigation/Header.tsx`; `src/components/navigation/Footer.tsx`; route-specific links | Shared `Button` handles primary/secondary/tertiary, while header/footer links and some card actions use local link classes and arrows. | This may be correct because nav/footer are different components, but visual audit should compare CTA language and action affordances. |
| P05 | Verified inconsistency | Card systems overlap | `src/components/ui/EchoCard.tsx`; `src/styles/03-components/cards.css`; `src/styles/03-components/design-system.css`; `src/components/cards/ProjectCard.tsx`; Home classes in `cards.css` | `EchoCard` is active, `.ei-card` CSS also remains active, and page/home/project card classes build on different class structures. | Similar card surfaces may be governed by different selectors, making surface/padding/radius consistency harder to audit. |
| P06 | Verified inconsistency | Form controls | `src/components/ui/EchoFormField.tsx`; `src/components/ui/EchoTextarea.tsx`; `src/components/ui/EchoSelect.tsx`; `src/styles/03-components/forms.css`; `src/pages/BookingPage.tsx`; `src/pages/ContactPage.tsx` | Shared form primitives exist and are active, but Booking builds a multi-step prototype shell around them while Contact uses a more compact contact panel. | This is not a defect by itself; reviewers should compare form field density, validation messaging, and panel weight across both flows. |

## 5. Hero and imagery consistency

| ID | Confidence | Area | Files / components | What differs | Why it matters for review |
| --- | --- | --- | --- | --- | --- |
| H01 | Verified inconsistency | Shared hero versus bespoke heroes | `src/components/sections/PageSectionHero.tsx`; `src/components/home/HomeHero*.tsx`; `src/components/lumo/LumoSignatureCaseStudy.tsx`; `src/pages/BookingPage.tsx`; `src/pages/ArchiveEssayPage.tsx` | Shared heroes use one picture/scrim/copy model; Home, Lumo, Booking, and archive essay do not share that exact structure. | Hero consistency should be judged across live pages, not assumed from the shared component. |
| H02 | Verified inconsistency | Desktop/mobile source strategy | `src/components/sections/PageSectionHero.tsx`; `src/components/home/HomeHeroBackground.tsx`; route page imports from `src/assets/imagery/hero/`; public home hero images | Shared heroes use imported desktop/mobile assets with a `768px` picture source; Home uses public `/home-hero-*.webp`; Lumo imports its own case-study images. | Source strategy differs by route; visual review should compare mobile crop behavior and loading priorities. |
| H03 | Likely visual-review risk | Object-position overrides | `src/styles/03-components/archive.css`; `contact.css`; `identity.css`; `sessions.css`; `systems.css`; `works.css`; `worlds.css`; `lumo.css`; `studio.css` | Many page CSS files override `object-position` for hero and section imagery, often with desktop/mobile-specific values. | Object-position differences are likely art-directed, but they are the main place where focal-point clipping should be checked. |
| H04 | Verified inconsistency | Hero height ownership | `src/components/sections/PageSectionHero.tsx`; `src/components/home/HomeHero.tsx`; `src/styles/03-components/lumo.css`; `src/pages/BookingPage.tsx` | `PageSectionHero` and Home use min-height bands around `620/720/760px`; Lumo and Booking own separate route-specific hero/intro heights. | Reviewers should compare first-viewport rhythm and whether each page establishes similar perceived weight. |
| H05 | Needs live-browser verification | Decorative image semantics | `src/components/sections/PageSectionHero.tsx`; `src/components/cards/ProjectCard.tsx`; `src/pages/WorksPage.tsx`; `src/pages/ArchivePage.tsx`; `src/components/lumo/LumoSignatureCaseStudy.tsx` | Several images are `alt=""` and/or `aria-hidden`; `PageSectionHero` supplies image description in an `sr-only` span; Lumo has meaningful mascot alt text for some images. | Source shows intentional decorative/semantic splits, but accessibility review should verify the resulting screen-reader experience route by route. |

## 6. Responsive consistency

| ID | Confidence | Area | Files / components | What differs | Why it matters for review |
| --- | --- | --- | --- | --- | --- |
| R01 | Verified inconsistency | Mixed breakpoint model | `src/styles/02-base/layout.css`; `src/styles/03-components/*.css`; `src/styles/04-utilities/mobile.css`; Tailwind classes in TSX | Active CSS uses `389`, `430`, `480`, `520`, `639`, `640`, `700`, `767`, `768`, `899`, `900`, `959`, `960`, `1023`, `1024`, `1100`, `1180`, `1280`, and `1320px` breakpoints. | Intermediate widths may behave differently by route because there is no single breakpoint contract. |
| R02 | Likely visual-review risk | Mobile gutters | `src/components/layout/Container.tsx`; `src/styles/02-base/layout.css`; `src/styles/04-utilities/mobile.css`; route-local wrappers | Mobile gutters come from Tailwind `px-6`, CSS `--ei-gutter-mobile: 1.25rem`, and route-specific padding. | Mobile screenshots should compare left/right alignment across pages, especially hero copy and CTA panels. |
| R03 | Likely visual-review risk | Grid collapse behavior | `src/styles/03-components/booking.css`; `systems.css`; `worlds.css`; `archive.css`; `editorial-archive.css`; `lumo.css`; route TSX grid templates | Grids collapse at different route-specific widths and use custom fractions before collapsing. | Dense sections may feel consistent on desktop and mobile but drift at tablet/intermediate widths. |
| R04 | Verified inconsistency | Mobile navigation exception | `src/components/navigation/Header.tsx`; `src/pages/LumoPage.tsx` | The shared header renders mobile menu behavior on most routes but returns `null` on `/works/lumo`. | This is intentional for the immersive case study, but reviewers should know Lumo does not test shared navigation coherence. |
| R05 | Needs live-browser verification | Mobile CTA stacking | `src/components/ui/Button.tsx`; `src/components/sections/PageSectionHero.tsx`; `src/components/sections/CTASection.tsx`; `src/components/home/HomeHeroCTA.tsx`; route CTAs | Buttons and CTA action rows often switch from stacked to row layouts at `sm`/`md`, but each CTA family owns its own spacing. | Only rendered mobile pages can show whether CTA hierarchy stays clear and commercially consistent. |

## 7. Motion and interaction consistency

| ID | Confidence | Area | Files / components | What differs | Why it matters for review |
| --- | --- | --- | --- | --- | --- |
| M01 | Verified inconsistency | Duplicated motion modules | `src/lib/motion-cinematic.ts`; `src/system/motion/cinematic.ts`; `src/components/navigation/Footer.tsx`; active pages | Most pages import from `src/lib/motion-cinematic.ts`; `Footer.tsx` imports from `src/system/motion/cinematic.ts`. Both modules define overlapping easing, duration, viewport, and reveal variants. | Similar motion may currently match, but duplicated sources make timing consistency harder to maintain. |
| M02 | Verified inconsistency | CSS and Framer duration scales | `src/styles/01-tokens/tokens.css`; `src/lib/motion-cinematic.ts`; `src/system/motion/cinematic.ts`; `src/components/system/PageTransition.tsx` | CSS tokens use `0.2s`, `0.4s`, `0.8s`, `1.2s`; Framer modules use `0.2`, `0.5`, `0.9`, `1.4`, `2.0`, `8`, and `12`; route transition uses `0.6` and `0.8`. | Animation feel may still be restrained, but timing is not governed by a single scale. |
| M03 | Verified inconsistency | Reduced-motion coverage mechanisms | `src/components/system/PageTransition.tsx`; `src/components/cards/ProjectCard.tsx`; `src/components/home/HomeFeaturedLumo.tsx`; `src/styles/02-base/accessibility.css`; page CSS reduced-motion blocks | Reduced motion is handled partly through `useReducedMotion`, partly through global CSS, and partly through route CSS blocks. | The coverage is meaningful, but audit should verify that all motion-heavy routes actually reduce as expected. |
| M04 | Verified inconsistency | Deterministic shared timing after retained compatibility API | `src/lib/motion-cinematic.ts` | `organicOffset(base, variance)` is retained but currently ignores variance and returns `base`. | Older notes about randomized timing should not be repeated for the current source; the verified state is deterministic shared timing. |
| M05 | Likely visual-review risk | Hover and touch behavior | `src/components/ui/Button.tsx`; `src/components/ui/EchoCard.tsx`; `src/components/cards/ProjectCard.tsx`; `src/styles/03-components/cards.css`; `src/styles/04-utilities/mobile.css` | Hover lifts exist in shared components and CSS, while touch/hoverless devices are handled in CSS utilities and card styles. | Live testing should compare whether hover affordances translate cleanly to touch and reduced-motion contexts. |
| M06 | Needs live-browser verification | Route transition readiness | `src/components/system/PageTransition.tsx`; `src/App.tsx` | `PageTransition` wraps `AppRoutes`, while `AppRoutes` also uses `AnimatePresence` and `Suspense fallback={null}`. | Source suggests a quiet dissolve, but perceived blank states or timing should be checked in a browser. |

## 8. Accessibility and semantic consistency

| ID | Confidence | Area | Files / components | What differs | Why it matters for review |
| --- | --- | --- | --- | --- | --- |
| A01 | Verified inconsistency | Landmark usage | `src/components/layout/PageShell.tsx`; `src/pages/OrbitalsPage.tsx`; `src/App.tsx` | Public pages generally use `PageShell` and therefore `<main id="main-content">`; `/internal/orbitals` does not use `PageShell`. | The internal route may not need public polish, but it differs semantically from public routes. |
| A02 | Verified inconsistency | Skip link target coverage | `src/App.tsx`; `src/components/layout/PageShell.tsx`; `src/pages/OrbitalsPage.tsx` | The skip link points to `#main-content`; `PageShell` provides that id by default, but `OrbitalsPage` does not. | This is likely internal-only, but it is a verified semantic inconsistency for the active route table. |
| A03 | Verified inconsistency | Duplicated accessibility CSS | `src/styles/02-base/accessibility.css` | Focus-visible and reduced-motion rules appear in more than one block/layer in the same file. | The rendered outcome may be fine, but duplicated definitions make future changes easier to apply unevenly. |
| A04 | Needs live-browser verification | Heading hierarchy | `src/components/sections/PageSectionHero.tsx`; `src/components/home/HomeHeroHeading.tsx`; `src/pages/BookingPage.tsx`; `src/pages/ArchiveEssayPage.tsx`; `src/components/lumo/LumoSignatureCaseStudy.tsx` | Most shared heroes provide an H1; bespoke routes define their own heading structures. | Source inspection identifies different ownership, but semantic heading order needs route-by-route DOM review. |
| A05 | Verified inconsistency | Link/button distinctions | `src/components/ui/Button.tsx`; `src/components/navigation/Header.tsx`; `src/components/navigation/Footer.tsx`; `src/components/ui/EchoSelect.tsx` | `Button` can render a router `Link` or native `button`; navigation uses direct `Link`; `EchoSelect` uses a button plus hidden input and ARIA listbox. | This is mostly correct implementation variety, but interaction semantics should be included in audit review. |
| A06 | Needs live-browser verification | Form labeling and validation | `src/components/ui/EchoFormField.tsx`; `src/components/ui/EchoTextarea.tsx`; `src/components/ui/EchoSelect.tsx`; `src/pages/BookingPage.tsx`; `src/pages/ContactPage.tsx` | Shared fields expose labels and required indicators; Booking and Contact compose different form flows and success/confirmation states. | Source suggests labels exist, but keyboard and announcement behavior should be verified in browser. |
| A07 | Verified inconsistency | Image semantics vary by route | `src/components/sections/PageSectionHero.tsx`; `src/components/cards/ProjectCard.tsx`; `src/pages/ArchiveEssayPage.tsx`; `src/components/lumo/LumoSignatureCaseStudy.tsx`; `src/components/home/HomeHeroBackground.tsx` | Some imagery is decorative with `alt=""`/`aria-hidden`, shared heroes add `sr-only` image descriptions, and Lumo includes meaningful mascot alt text in content panels. | This may be intentional, but accessibility review should know semantics are page-specific. |

## 9. Intentional exceptions to protect

| ID | Confidence | Area | Files / components | What differs | Why it matters for review |
| --- | --- | --- | --- | --- | --- |
| X01 | Intentional exception / bespoke treatment | Lumo product-world case study | `src/pages/LumoPage.tsx`; `src/components/lumo/LumoSignatureCaseStudy.tsx`; `src/styles/03-components/lumo.css`; `src/assets/projects/lumo/lumo-clouds/` | Lumo uses custom rails, active-section navigation, mascot assets, light panels, product-world colors, and a long-form case-study structure. | Treat as a protected bespoke system. Review for quality and coherence, not automatic conformity to the dark site shell. |
| X02 | Intentional exception / bespoke treatment | Home hero and home entry world | `src/components/home/HomeHero.tsx`; `src/components/home/HomeHeroBackground.tsx`; `src/components/home/HomeHeroHeading.tsx`; `public/home-hero-desktop.webp`; `public/home-hero-mobile.webp` | Home uses dedicated public imagery, custom background layers, and a bespoke entry composition. | Home is the site’s first impression and may legitimately carry different art direction from inner pages. |
| X03 | Intentional exception / bespoke treatment | Page-specific atmospheric hero art | `src/components/sections/PageSectionHero.tsx`; `src/styles/03-components/*`; route hero imports under `src/assets/imagery/hero/` | Routes use shared hero structure but route-specific imagery, object positions, scrims, and CSS override blocks. | These differences may be the main authored atmospheric language; normalize only after visual comparison. |
| X04 | Intentional exception / bespoke treatment | Long-form archive/editorial layouts | `src/pages/ArchiveEssayPage.tsx`; `src/components/layout/EditorialArticleLayout.tsx`; `src/styles/03-components/editorial-archive.css`; `src/data/archiveContent.ts` | Archive essay and archive map/notes use editorial article/index structures rather than standard service-page sections. | Protect the archive’s editorial role while checking readability and hierarchy. |
| X05 | Intentional exception / bespoke treatment | Studio editorial service panels | `src/pages/StudioPage.tsx`; `src/styles/03-components/studio.css` | Studio uses bespoke service pillar art, custom grids, and route-specific slim CTA composition. | Studio may need a more authored portfolio feel than utility pages. Compare with Works/Systems before normalizing. |
| X06 | Intentional exception / bespoke treatment | Booking front-end prototype shell | `src/pages/BookingPage.tsx`; `src/styles/03-components/booking.css` | Booking has local state, generated upcoming weekdays, a multi-step workspace, and prototype confirmation states. | Its interaction model is intentionally different from marketing pages; review as a front-end shell, not as live scheduling logic. |

## 10. External visual audit watchlist

1. Compare outer container alignment across Home, Studio, Works, Systems, Archive, Booking, and Contact at desktop widths.
2. Compare inner `1180px` content rail alignment against `.ei-container`, `.ei-layout-page-rail`, and `ContentFrame` routes.
3. Compare hero crops and focal points across desktop and mobile, especially routes with page-specific `object-position` overrides.
4. Compare `PageSectionHero` pages against bespoke Home, Booking, Lumo, and archive essay entry sections.
5. Compare typography hierarchy for H1, section headings, labels, metadata, footer text, and CTA text.
6. Compare card density, padding, radius, border strength, and glow intensity across `EchoCard`, Works cards, Home cards, Archive cards, and Lumo panels.
7. Compare CTA hierarchy and action density across `CTASection`, Home closing, Studio slim CTA, Booking CTA, and hero CTAs.
8. Compare glow intensity and background contrast across dark routes and Lumo’s light/product-world sections.
9. Check tablet/intermediate widths because page CSS has many route-specific breakpoints.
10. Verify accessibility-sensitive behavior in browser: skip link target, mobile menu focus, custom selects, form labels, reduced motion, and image semantics.

## 11. Summary

Systemically consistent areas:

- The active site uses a clear dark atmospheric base through `--ei-void`, `--ei-ink`, `--ei-midnight`, moonlit text, halo-blue/violet/magenta accents, and low-alpha borders.
- Public routes generally share `Layout`, `Header`, `PageShell`, `Container`, `Section`, `Button`, `EchoCard`, `SectionLabel`, `OrbitalVisual`, and Framer Motion reveal patterns.
- Most public service/work/archive routes now use `PageSectionHero` with desktop/mobile imagery and layered scrims.
- Reduced-motion support exists in source through both Framer checks and CSS media queries.

Where implementation consistency has weakened:

- Layout widths and gutters are split across `Container.tsx`, `.ei-container`, `.ei-layout-*`, `ContentFrame`, and repeated route-local arbitrary max widths.
- Typography is split between canonical `.ei-type-*`, route-specific type classes, direct Tailwind arbitrary values, and local header/footer sizing.
- Motion has two active token modules plus CSS duration tokens and route transition durations.
- Card surfaces are shared in concept but split across `EchoCard`, `.ei-card`, page-specific classes, and route-specific CSS.
- Responsive behavior relies on many page-specific breakpoint bands, making intermediate-width review especially important.

Likely harmless or intentional findings:

- Lumo’s alternate product-world palette and layout are deliberate case-study art direction.
- Home’s bespoke hero is an intentional first-impression composition.
- Archive/editorial layouts are intentionally different from service pages.
- Header/footer local typography and link styles may be appropriate because site chrome has a different job than content sections.

Findings deserving high-priority visual review:

- Container alignment and gutters across all public routes.
- Hero crop, scrim, and copy placement across desktop and mobile.
- Typography hierarchy between shared hero pages and bespoke pages.
- Card surface weight and density across route families.
- Lumo’s separation from the main site language: validate as intentional contrast, not accidental drift.

### Files inspected

- `AGENTS.md`
- `package.json`
- `index.html`
- `tailwind.config.ts`
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
- `src/components/ui/EchoFormField.tsx`
- `src/components/ui/EchoFormPanel.tsx`
- `src/components/ui/EchoSelect.tsx`
- `src/components/ui/EchoTextarea.tsx`
- `src/components/ui/FilterBar.tsx`
- `src/components/ui/IconWell.tsx`
- `src/components/ui/OrbitalVisual.tsx`
- `src/components/ui/SectionLabel.tsx`
- `src/components/works/WorkFilterBar.tsx`
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

### Files created or changed

- Created: `WEBSITE_DESIGN_INCONSISTENCIES_REPORT.md`

### Verification limitations

- This report is based on source inspection and command output, not browser screenshots.
- Items marked **Needs live-browser verification** should not be treated as proven visual defects.
- `dist/` was not used as source of truth.
- Archived, generated, and unmounted files were considered only where they could create confusion for review or future implementation.
- No production code, styles, assets, dependencies, routes, or configuration files were edited.

### Git commit and push

- Commit: not committed.
- Push: not pushed.
