Echo in Ink — Atmosphere Guidelines

1. Atmosphere Philosophy

Atmosphere is one of Echo in Ink’s primary design materials.

It should feel like emotional weather: subtle, cinematic, spacious, and intentional.

Atmosphere should support the content.
It should never compete with the content.

The strongest atmospheric effects should be felt before they are noticed.

Core principle:

Atmosphere is not decoration.
Atmosphere is emotional context.

⸻

2. Atmosphere Should Feel

Echo in Ink atmosphere should feel:

Cinematic
Shadow-rich
Luminous
Quiet
Immersive
Emotional
Spatial
Restrained
Premium

It should not feel:

Gaming
Crypto
Cyberpunk
Over-glowy
Noisy
Busy
Template-like
Generic sci-fi

⸻

3. Core Atmospheric Materials

The atmosphere system is built from:

Radial glows
Soft vignettes
Gradient bridges
Film grain
Light fields
Monogram halos
Section fades
Image overlays
Atmospheric dividers
Low-opacity page presets

Every atmospheric layer should have a job.

No glow should exist only because it looks nice.

⸻

4. Glow Guidelines

Glows are the most delicate part of the system.

Use glow for:

Hero visuals
EI monogram moments
Primary atmospheric sections
Featured world cards
Major page transitions
Selected states
Subtle interaction feedback

Do not use glow for:

Every card
Every button
Long body text
Footer links
Form labels
Dense grids
Archive lists
Small UI elements everywhere

Glow Rules

Glows should stay low-opacity.

Recommended opacity range:

Background glows: 0.015–0.06
Hero glows: 0.08–0.18
Interaction glows: 0.10–0.28
Rare emphasis glows: 0.30 max

Recommended blur range:

Small glows: 24–48px
Medium atmosphere: 60–90px
Large page atmosphere: 80–120px

Avoid stacking too many large blurred layers on mobile.

⸻

5. Glow Color Roles

Use the updated Echo in Ink palette.

Violet

Primary atmospheric depth.

Use for:

Worldbuilding atmosphere
Page-level glow
Background depth
Monogram halos
Cinematic section fields

Halo Blue

Primary signal and interaction light.

Use for:

Focus states
Subtle hover glows
Sessions page atmosphere
System/technical accents
Selected states

Echo Magenta

Emotional signal.

Use for:

Identity atmosphere
Rare highlights
Monogram energy
Emotional emphasis
Featured moments

Midnight / Ink / Void

Depth and shadow.

Use for:

Vignettes
Section fades
Scrims
Image overlays
Atmospheric bridges

⸻

6. Naming Rules

Your old atmosphere file uses names like:

--ei-luxe-violet-rgb
--ei-aurora-blue-rgb
--ei-orchid-pink-rgb
--ei-deep-indigo-rgb
--ei-void-black-rgb

Going forward, use the new palette names:

--ei-violet-rgb
--ei-halo-blue-rgb
--ei-echo-magenta-rgb
--ei-midnight-rgb
--ei-void-rgb
--ei-ice-white-rgb

Temporary aliases can stay in tokens.css, but new files should use the new names only.

⸻

7. Atmosphere CSS Categories

Your final atmosphere.css should include only atmosphere-specific classes.

It should not include typography rules, layout spacing, or React logic.

Recommended structure:

1. Surface atmosphere
2. Glow primitives
3. Vignettes
4. Section fades / bridges
5. Grain / texture
6. Light fields
7. Dividers
8. Monogram framing
9. Page atmosphere presets
10. Mobile atmosphere reductions
11. Reduced-motion support

⸻

8. Surface Atmosphere Guidelines

Surface atmosphere creates subtle depth without becoming a full card system.

Use surface atmosphere for:

Glass panels
Elevated page sections
Quiet overlays
Navigation surfaces
Atmospheric containers

Do not use these classes as replacements for the card system. Cards should use cards.css.

Recommended surface classes:

.ei-surface-void
.ei-surface-ink
.ei-surface-midnight
.ei-surface-glass
.ei-surface-elevated

Rules:

Never use pure black for surfaces.
Use translucent midnight or ink.
Keep borders faint.
Use blur carefully.
Avoid heavy shadows.

⸻

9. Vignette Guidelines

Vignettes create cinematic depth and protect readability.

Use vignettes for:

Hero sections
Full-width imagery
Featured cards
Page transitions
Atmospheric sections

Recommended classes:

.ei-vignette-deep
.ei-vignette-soft
.ei-vignette-edges

Use ei-vignette-deep when visuals need to dissolve into darkness.

Use ei-vignette-soft when the page needs subtle edge depth.

Use ei-vignette-edges for top/bottom section transitions.

Rule:

Vignettes should make content easier to read, not simply make the page darker.

⸻

10. Section Bridge Guidelines

Atmospheric bridges prevent harsh visual cuts between sections.

Use bridges between:

Hero → philosophy
Offer intro → process
Worlds intro → world cards
Lumo feature → proof
Final section → footer

Recommended classes:

.ei-fade-to-ink
.ei-fade-from-ink
.ei-gradient-bridge
.ei-gradient-bleed-top

Bridge intensity should stay subtle.

Subtle bridge: standard page transitions
Medium bridge: hero-to-body transitions
Deep bridge: major cinematic cuts

Avoid placing strong bridge gradients inside dense content areas.

⸻

11. Grain Guidelines

Film grain adds tactile depth and stops gradients from feeling too digital.

Use grain for:

Hero sections
Full-page atmosphere
Large visual sections
Worldbuilding moments
Monogram sections

Avoid grain for:

Forms
Small cards
Text-heavy archive pages
Dense UI grids

Rules:

Grain should be barely visible.
Opacity should usually sit between 0.02 and 0.06.
It should never look like noise or dirt.

⸻

12. Light Field Guidelines

Light fields are large diffused atmospheric sources.

Use light fields for:

Hero lighting
Monogram glow
Page-level atmospheric identity
Major emotional sections

Recommended variants:

.ei-light-field
.ei-light-field-warm
.ei-light-field-cool

Use warm light fields for:

Identity
emotional sections
creative direction
reflective prompts

Use cool light fields for:

Sessions
systems
clarity sections
technical explanation

Use violet/deep light fields for:

Worlds
Studio
Lumo
major immersive sections

⸻

13. Atmospheric Divider Guidelines

Dividers should feel like light catching the edge of glass.

Use dividers for:

Archive sections
Offer modules
Footer separation
Long page rhythm
Process sections

Recommended classes:

.ei-divider-atmospheric
.ei-divider-quiet
.ei-divider-deep

Rules:

Never use hard white divider lines.
Never use thick dividers.
Avoid dividers if spacing alone can separate the content.

⸻

14. Monogram Atmosphere Guidelines

The EI monogram is sacred brand space.

Use monogram atmosphere for:

Hero sections
Closing CTAs
Studio page
Brand identity moments
Worldbuilding transitions

Recommended class:

.ei-monogram-frame

Rules:

Protect space around the monogram.
Do not crowd it with copy.
Do not over-animate it.
Do not place it inside busy gradients.
Let it feel iconic and still.

⸻

15. Page Atmosphere Presets

Use page presets to give each page a slightly different emotional field without breaking the brand.

Recommended classes:

.ei-atmosphere-default
.ei-atmosphere-identity
.ei-atmosphere-sessions
.ei-atmosphere-worlds
.ei-atmosphere-works
.ei-atmosphere-archive
.ei-atmosphere-systems

Default

Use for Home and general pages.

Tone:

Balanced violet / blue atmosphere

Identity

Use for Identity pages.

Tone:

Warmer, more emotional, violet-magenta

Sessions

Use for Sessions pages.

Tone:

Cooler, clearer, signal-focused, blue-violet

Worlds

Use for Worlds pages.

Tone:

Deeper, more cosmic, dimensional, violet-heavy

Works

Use for Works and case studies.

Tone:

Quiet, editorial, image-led

Archive

Use for Archive pages.

Tone:

Literary, faint, low-contrast, minimal glow

Systems

Use for Systems pages.

Tone:

Technical, structured, halo-blue signal

⸻

16. Mobile Atmosphere Guidelines

Mobile atmosphere should be quieter than desktop.

On mobile:

Reduce blur intensity.
Reduce glow opacity.
Remove unnecessary decorative layers.
Avoid multiple large glows in one viewport.
Prioritise readability.
Keep body copy clear.

Mobile priority:

Clarity first.
Atmosphere second.
Decoration last.

Recommended mobile changes:

Large blur: reduce from 100px to 60px
Small screens: reduce to 40px
Disable cursor atmosphere
Reduce grain opacity
Simplify page presets
Avoid hover-only atmosphere

Do not put mobile typography rules in atmosphere.css. Those belong in typography.css or mobile.css.

⸻

17. Motion Guidelines for Atmosphere

Atmospheric motion should be slow and ambient.

Use motion for:

Glow breathing
Light drift
Grain pulse
Hero luminance
Subtle section reveal

Avoid motion for:

Constant busy movement
Fast loops
Bouncy effects
Heavy animated blur
Animation behind long text

Recommended timing:

Glow pulse: 8–16s
Luminance drift: 12–28s
Grain shift: 20–40s
Section bridge fade: 600–900ms

Atmospheric motion should feel like breathing, not animation.

⸻

18. Reduced Motion Guidelines

Always support prefers-reduced-motion.

If reduced motion is enabled:

Stop infinite atmosphere loops.
Use static glows.
Keep section fades simple.
Disable cursor-following effects.
Disable floating haze.
Preserve the atmosphere as a still composition.

Atmosphere should still feel beautiful without motion.

⸻

19. React Atmosphere Components

React atmosphere components should live separately from CSS.

Recommended folder:

src/components/atmosphere/

Recommended components:

HeroLighting.tsx
AtmosphericBridge.tsx
AtmospherePause.tsx
AtmosphericContinuity.tsx
AtmosphericVeil.tsx
AtmosphericCursor.tsx
GlowField.tsx
GrainOverlay.tsx
EchoRing.tsx
ContourField.tsx
AtmosphericBloom.tsx

Do not place React code inside atmosphere.css.

Component Rules

Atmosphere components should:

Use semantic props.
Respect reduced motion.
Pause when off-screen where possible.
Use transform and opacity for animation.
Avoid DOM-heavy particles.
Avoid constant event listeners unless necessary.

AtmosphericCursor should remain desktop-only and disabled for reduced motion.

⸻

20. Hook Guidelines

Hooks like useAtmosphericLight should live here:

src/hooks/useAtmosphericLight.ts

or:

src/system/atmosphere/useAtmosphericLight.ts

Hooks should only derive atmosphere state. They should not manipulate the DOM.

Good:

density → intensity → light source count → color role

Avoid:

hook directly edits styles
hook creates event listeners unless essential
hook controls global atmosphere everywhere

⸻

21. Atmosphere Do / Don’t

Do

Use darkness generously.
Let light emerge slowly.
Keep glow low-opacity.
Use atmospheric layers to support hierarchy.
Use page presets for emotional distinction.
Reduce atmosphere on mobile.
Use stillness as a luxury tool.
Use atmosphere to guide attention.

Don’t

Do not use every glow class on one page.
Do not stack blur endlessly.
Do not mix old token names into new files.
Do not animate heavy filters constantly.
Do not let atmosphere reduce readability.
Do not place motion behind long copy.
Do not make every page equally dramatic.
Do not use cursor effects on mobile.

⸻

22. What Belongs in atmosphere.css

Put these in:

Surface atmosphere
Glow primitives
Vignettes
Section fades
Grain
Light fields
Dividers
Monogram frame
Page presets
Mobile atmosphere reductions
Reduced-motion atmosphere rules

Do not put these in:

Typography sizes
Section spacing
Card system foundations
Button styles
Form styles
React components
Hooks
Cursor component logic

⸻

23. Recommended Final File Split

Use this structure:

src/styles/03-components/atmosphere.css
src/components/atmosphere/HeroLighting.tsx
src/components/atmosphere/AtmosphericBridge.tsx
src/components/atmosphere/AtmospherePause.tsx
src/components/atmosphere/AtmosphericContinuity.tsx
src/components/atmosphere/AtmosphericVeil.tsx
src/components/atmosphere/AtmosphericCursor.tsx
src/components/atmosphere/GlowField.tsx
src/hooks/useAtmosphericLight.ts
docs/design-system/atmosphere-guidelines.md

⸻

24. Atmosphere QA Checklist

Before locking a page, ask:

Does the atmosphere support the page’s meaning?
Is the copy still readable?
Are there too many glows?
Does mobile feel calmer?
Does reduced motion still look good?
Is the monogram protected?
Are page presets distinct but still unified?
Are old token names removed or aliased?
Are heavy effects limited?

Final rule:

If the atmosphere becomes the content, reduce it.

Atmosphere should make the page feel deeper, not busier.