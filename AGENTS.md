# Echo in Ink — Codex Agent Instructions

## Project

This is the Echo in Ink website: a cinematic, atmospheric, editorial creative-studio site.

The visual direction is:
- premium
- dark
- poetic
- cinematic
- atmospheric
- editorial
- spacious
- refined
- emotionally intelligent

Avoid making the site look generic, SaaS-like, corporate, bright, busy, or template-like.

## Tech assumptions

Use the existing project structure and conventions.

Before editing:
- inspect the relevant files first
- identify the component, style, and token files involved
- avoid creating duplicate systems when one already exists

After editing:
- summarise changed files
- explain why each change was made
- mention any commands run
- mention any build/lint issues

## Safety rules

You may:
- read project files
- edit files inside this workspace
- create new files inside this workspace
- run safe local commands such as build, lint, test, typecheck, or dev checks

Ask before:
- deleting files
- installing packages
- changing dependencies
- editing lockfiles
- changing environment variables
- moving large folder structures
- deploying
- running git push
- making network requests

Never:
- rewrite the whole app unless explicitly asked
- remove brand styling without replacing it intentionally
- hard-code colours in React components
- introduce a second design system
- flatten the visual hierarchy into generic cards/grids

## Design system rules

Prefer existing tokens and classes.

Use semantic/component tokens where possible.

Avoid hard-coded colour values in React components.

Respect the Echo in Ink palette:
- void / ink / midnight backgrounds
- moonlit lavender text
- halo blue accents
- violet glow
- restrained echo-magenta highlights

The dark colours should do most of the work.
Effects should feel subtle and atmospheric, not neon-heavy.

## Layout rules

Prefer:
- spacious sections
- editorial rhythm
- generous negative space
- cinematic split layouts
- elegant typography hierarchy
- restrained motion
- soft gradients
- subtle borders
- atmospheric image treatment

Avoid:
- cramped layouts
- generic 4-card grids
- overly bright panels
- heavy dividers
- excessive glows
- default-looking buttons
- visual clutter

## Component rules

Before creating a new component, check whether an existing one should be reused or extended.

Common layout/component files may include:
- PageShell
- Container
- Section
- Button
- EditorialImageHero
- OrbitalVisual
- cards
- page-specific CSS
- token files
- atmosphere files

Keep page-level styling page-specific unless it belongs in the shared system.

## CSS rules

Prefer editing the relevant CSS file instead of inline styles.

Do not casually replace entire CSS files unless asked.

When changing global/token CSS, be careful because it may affect the whole site.

Use existing class naming patterns.

Keep hover, focus, and responsive states intact.

## Image rules

Use existing imagery from the assets folder where possible.

Do not change image paths or imports unless needed.

For hero/CTA images:
- preserve cinematic cropping
- avoid harsh rings or overly saturated effects
- keep the composition atmospheric and premium

## Copy rules

Keep copy poetic but clear.

Tone:
- authored
- calm
- intelligent
- cinematic
- emotionally precise

Avoid:
- startup jargon
- hype
- generic marketing language
- over-explaining

## Preferred workflow

1. Inspect relevant files.
2. Explain the likely files to change.
3. Make the smallest effective edit.
4. Run a local check if appropriate.
5. Summarise the changes clearly.