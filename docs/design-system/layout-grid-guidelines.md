# Echo in Ink — Layout & Spacing Guidelines

## **1. Layout Philosophy**

Echo in Ink layouts should feel composed, not filled.

The website should use generous negative space, cinematic pacing, and strong spatial hierarchy. Pages should feel like they are unfolding with intention rather than simply stacking content.

The layout system should guide visitors through this rhythm:

Arrival → Orientation → Depth → Proof → Invitation

This keeps the site atmospheric without becoming vague.

⸻

## 2. Core Layout Principles

Use space as atmosphere.
Use alignment as quiet structure.
Use asymmetry only when it feels intentional.
Avoid dense grids unless the content is archival, systematic, or product-based.
Let important ideas sit alone.

Echo in Ink should not feel crowded, modular in a generic way, or overly centered. It should feel cinematic, editorial, spacious, and emotionally paced.

⸻

## 3. Layout Tokens

These are the core layout values used across the site:
```
:root {
  --ei-page-max: 1440px;
  --ei-content-max: 1180px;
  --ei-reading-max: 680px;
  --ei-narrow-max: 520px;
  --ei-gutter-mobile: 1.25rem;
  --ei-gutter-tablet: 3rem;
  --ei-gutter-desktop: clamp(4rem, 6vw, 6rem);
  --ei-grid-gap-sm: 1rem;
  --ei-grid-gap-md: 1.5rem;
  --ei-grid-gap-lg: 2.5rem;
  --ei-grid-gap-xl: 4rem;
}
```
## 4. Container Usage

Use ei-container for main page sections.

Use ei-container-content for slightly narrower content areas.

Use ei-container-reading for editorial copy, philosophy, archive text, and long-form sections.

Use ei-container-narrow for intimate copy blocks, quotes, form intros, and focused statements.

```
.ei-container {
  width: 100%;
  max-width: var(--ei-page-max);
  margin-inline: auto;
  padding-inline: var(--ei-gutter-mobile);
}
```
⸻

## 5. Page Rhythm

Every major page should follow this structure:

1. Arrival
Atmospheric hero / emotional opening
2. Orientation
Plain-language grounding / what this page is
3. Depth
Philosophy, offer, system, narrative, or process
4. Proof
Case study, examples, cards, framework, outcomes
5. Invitation
Soft CTA / next step

This is the main page architecture for:

Home
Studio
Identity
Sessions
Worlds
Works
Lumo
Archive
Systems
Contact

⸻

# Spacing Guidelines

## 6. Spacing Philosophy

Spacing is one of the most important parts of the Echo in Ink identity.

Spacing creates luxury.
Spacing creates breath.
Spacing creates emotional pacing.
Spacing tells the visitor what matters.

Echo in Ink should feel slower than a conventional agency site. Sections need enough air for the copy and atmosphere to resonate.

⸻

## 7. Spacing Scale

```
:root {
  --ei-space-1: 0.25rem;
  --ei-space-2: 0.5rem;
  --ei-space-3: 0.75rem;
  --ei-space-4: 1rem;
  --ei-space-5: 1.5rem;
  --ei-space-6: 2rem;
  --ei-space-7: 3rem;
  --ei-space-8: 4rem;
  --ei-space-9: 6rem;
  --ei-space-10: 8rem;
  --ei-space-11: 12rem;
  --ei-space-12: 16rem;
}
```
⸻

8. Section Spacing

Use these section classes consistently:

.ei-section-hero
.ei-section-intimate
.ei-section-standard
.ei-section-expansive
.ei-section-pause
.ei-section-closing

Hero

Use for page openings.

Home hero
Studio hero
Offer page hero
Lumo intro
Worlds intro

Intimate

Use for quiet, reflective sections.

Intro copy
Studio philosophy
Contact form sections
Archive text
Small explanatory sections

Standard

Use for normal content modules.

Offer sections
Case study blocks
Card grids
Process sections
Works content

Expansive

Use for cinematic transitions and immersive sections.

Hero-to-content transitions
Worldbuilding sections
Lumo-style moments
Major atmospheric breaks

Pause

Use for emotional emphasis.

Manifesto statements
Quotes
Emotional thesis sections
Monogram moments

Closing

Use for final invitations.

Final CTAs
Footer invitations
End-of-page atmospheric sections

⸻

9. Do

Use wide cinematic sections.
Use narrow reading columns for philosophical copy.
Use offset layouts for editorial tension.
Use cards to group related ideas.
Use whitespace to create emotional pacing.
Use asymmetry when it creates atmosphere.
Use section spacing to control emotion, not just layout.

⸻

10. Don’t

Do not center every section.
Do not overuse symmetrical grids.
Do not fill every screen with content.
Do not let atmospheric visuals interrupt reading.
Do not use cramped cards or dense service blocks.
Do not use large spacing randomly.
Do not make mobile feel like a squeezed desktop layout.

⸻

11. Mobile Layout Rules

On mobile, the layout should feel more intimate, not simply smaller.

Use one-column flow for most sections.
Reduce atmospheric decoration.
Keep body copy readable.
Keep section spacing generous but not excessive.
Make CTAs easy to reach.
Crop visuals intentionally.
Do not let decorative glows compete with content.

Mobile priority:

Clarity first.
Atmosphere second.
Decoration last.

⸻

12. Implementation Pairing

Use this guideline document with:

src/styles/02-base/layout.css

That file should contain:

Layout tokens
Spacing tokens
Container classes
Section spacing classes
Grid utilities
Reading measure utilities
Aspect ratio helpers
Mobile spacing reductions

So yes — what you pasted is the guideline. I’d just clean it into the format above and keep the actual CSS implementation separate.