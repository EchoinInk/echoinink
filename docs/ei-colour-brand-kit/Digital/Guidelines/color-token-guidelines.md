# Echo in Ink

## Color & Interface Token Guidelines

Echo in Ink’s visual system should feel **cinematic, authored, atmospheric, emotionally intelligent, and quietly luminous**.

The color system is not meant to feel like a generic neon interface. It should feel like entering a dark inner world where light appears with intention: as signal, memory, invitation, or emphasis.

The palette is built around deep ink surfaces, spectral blue-violet light, emotional magenta accents, and moonlit typography.

---

# 1. Core Palette

## Foundational darks

```css
--ei-void: #05030B;
--ei-ink: #080718;
--ei-midnight: #0B0D2A;
```

These colors form the atmosphere of the site.

### Usage

**Void**  
Use for the deepest page background and the most immersive areas.

**Ink**  
Use for primary page surfaces, quiet section backgrounds, and broad layout fields.

**Midnight**  
Use for elevated panels, cards, navigation surfaces, form fields, dropdowns, and subtle UI depth.

### Design principle

The dark colors should do most of the work. Echo in Ink should feel like it is emerging from darkness, not covered in effects.

Recommended usage ratio:

```text
Void / Ink / Midnight: 75–85%
Light text: 10–15%
Blue / Violet / Magenta accents: 3–8%
Soft Neon / Electric Blue: 1–2%
```

---

# 2. Luminous Accent Palette

```css
--ei-electric-blue: #0B20F6;
--ei-halo-blue: #4985FD;
--ei-violet: #7107EA;
--ei-echo-magenta: #DD12CB;
--ei-soft-neon: #E669F2;
```

## Halo Blue

Halo Blue is the primary interactive light.

Use it for:

```text
Primary hover glows
Active navigation indicators
Subtle link states
Interactive halos
Focus states
Orbital UI elements
```

Avoid using Halo Blue for large flat surfaces. It should feel like light, not paint.

## Violet

Violet is the atmospheric depth color.

Use it for:

```text
Background gradients
Nebula effects
Worldbuilding sections
Secondary glows
Icon atmospheres
Large immersive visuals
```

Violet should feel spacious, mysterious, and dimensional.

## Echo Magenta

Echo Magenta is the emotional signal.

Use it for:

```text
Monogram glow
Rare highlights
Active filters
Quote accents
Emotional emphasis
Special offer moments
```

Do not overuse it. Magenta should feel like a pulse or echo, not a dominant brand fill.

## Soft Neon

Soft Neon is a rare luminous detail.

Use it for:

```text
Hover shimmer
Tiny decorative light points
Soft gradients
Premium accents
Atmospheric illustrations
```

Soft Neon should be treated as a highlight, not a primary UI color.

## Electric Blue

Electric Blue is the highest-energy color in the system.

Use it rarely for:

```text
Tiny signal points
Special active states
Motion trails
Monogram energy
Rare visual emphasis
```

Avoid using Electric Blue as a large CTA background. It is too intense for the core Echo in Ink tone and may push the experience toward gaming or cyberpunk.

---

# 3. Typography Colors

```css
--ei-moonlit: #E3D8FD;
--ei-ice-white: #F7F5FA;
```

## Ice White

Use Ice White for:

```text
Primary headings
Important hero copy
Primary button text
High-contrast moments
Key navigation labels
```

Ice White should never feel like harsh pure white. It is soft, premium, and slightly spectral.

## Moonlit

Use Moonlit for:

```text
Body copy
Secondary headings
Descriptions
Muted UI labels
Footer text
Supporting paragraphs
```

Moonlit is the main text atmosphere of Echo in Ink. It should replace generic grey wherever possible.

## Recommended text hierarchy

```css
--ei-color-text-primary: rgba(247, 245, 250, 0.96);
--ei-color-text-secondary: rgba(227, 216, 253, 0.78);
--ei-color-text-tertiary: rgba(227, 216, 253, 0.58);
--ei-color-text-muted: rgba(227, 216, 253, 0.42);
--ei-color-text-faint: rgba(227, 216, 253, 0.28);
```

### Usage

**Primary**  
Hero headings, major section headings, primary labels.

**Secondary**  
Body copy and important explanatory content.

**Tertiary**  
Metadata, card descriptions, small interface copy.

**Muted**  
Footer copy, secondary labels, helper text.

**Faint**  
Decorative details only. Do not use for essential content.

---

# 4. Background Guidelines

## Body background

Use a layered background that creates subtle depth without overwhelming the content.

```css
--ei-background-body:
  radial-gradient(circle at 18% 18%, rgba(73, 133, 253, 0.16) 0%, transparent 30%),
  radial-gradient(circle at 78% 22%, rgba(221, 18, 203, 0.14) 0%, transparent 34%),
  radial-gradient(circle at 50% 88%, rgba(113, 7, 234, 0.16) 0%, transparent 46%),
  linear-gradient(135deg, #05030B 0%, #080718 48%, #0B0D2A 100%);
```

### Rule

Background gradients should be **felt before they are noticed**.

Avoid high-contrast, saturated gradients behind long-form text.

## Deep space background

Use for immersive hero sections, page intros, and dramatic atmospheric moments.

```css
--ei-background-deep-space:
  radial-gradient(circle at 20% 18%, rgba(73, 133, 253, 0.18) 0%, transparent 34%),
  radial-gradient(circle at 82% 24%, rgba(221, 18, 203, 0.16) 0%, transparent 38%),
  radial-gradient(circle at 50% 88%, rgba(113, 7, 234, 0.16) 0%, transparent 46%),
  var(--ei-void);
```

## Glow field

Use behind atmospheric visuals, monogram sections, and special CTA moments.

```css
--ei-background-glow-field:
  radial-gradient(circle at 30% 20%, rgba(73, 133, 253, 0.28) 0%, transparent 32%),
  radial-gradient(circle at 78% 28%, rgba(221, 18, 203, 0.26) 0%, transparent 36%),
  radial-gradient(circle at 48% 78%, rgba(113, 7, 234, 0.22) 0%, transparent 44%);
```

Use sparingly. This is a feature treatment, not a default page background.

---

# 5. Surface Guidelines

```css
--ei-color-surface: rgba(11, 13, 42, 0.64);
--ei-color-surface-elevated: rgba(11, 13, 42, 0.82);
--ei-color-surface-hover: rgba(11, 13, 42, 0.96);
--ei-color-surface-glass: rgba(227, 216, 253, 0.055);
--ei-color-surface-scrim: rgba(5, 3, 11, 0.72);
```

## Default cards

Use default surfaces for most cards and content modules.

```css
background: var(--ei-color-surface);
border: 1px solid rgba(227, 216, 253, 0.10);
```

## Elevated cards

Use elevated surfaces for:

```text
Featured case studies
Offer summary cards
Pricing / investment modules
Forms
Important callouts
```

```css
background: var(--ei-color-surface-elevated);
border: 1px solid rgba(227, 216, 253, 0.14);
```

## Glass surfaces

Use glass surfaces only for subtle atmospheric UI.

Good for:

```text
Nav pills
Filters
Tiny metadata badges
Secondary buttons
```

Avoid using glass for long body text areas because it may reduce readability.

---

# 6. Border Guidelines

```css
--ei-color-border-hairline: rgba(227, 216, 253, 0.08);
--ei-color-border-soft: rgba(227, 216, 253, 0.12);
--ei-color-border-medium: rgba(227, 216, 253, 0.18);
--ei-color-border-bright: rgba(247, 245, 250, 0.28);

--ei-color-border-blue: rgba(73, 133, 253, 0.34);
--ei-color-border-violet: rgba(113, 7, 234, 0.36);
--ei-color-border-magenta: rgba(221, 18, 203, 0.36);
```

## Usage

**Hairline**  
Large section dividers, subtle separators.

**Soft**  
Default cards and quiet UI boundaries.

**Medium**  
Interactive components, form fields, hover states.

**Bright**  
Only for active, focused, or highly important UI states.

**Blue / Violet / Magenta borders**  
Use for special active states, selected filters, accent cards, and atmospheric components.

### Rule

Borders should feel like faint light hitting glass, not like outlines.

---

# 7. Button Guidelines

## Primary button

Use for the main action on each page.

Examples:

```text
Start a Conversation
Begin Identity Translation
Book a Signal Session
Start a World
Explore the Systems
```

```css
--ei-button-bg:
  linear-gradient(
    110deg,
    var(--ei-halo-blue) 0%,
    var(--ei-violet) 48%,
    var(--ei-echo-magenta) 100%
  );

--ei-button-border: 1px solid rgba(247, 245, 250, 0.18);
--ei-button-text: var(--ei-ice-white);
```

### Primary button rule

Use only one primary CTA per section.

Do not place multiple glowing primary buttons side by side unless one is clearly visually quieter.

## Primary button hover

```css
--ei-button-bg-hover:
  linear-gradient(
    110deg,
    var(--ei-halo-blue) 0%,
    var(--ei-soft-neon) 50%,
    var(--ei-echo-magenta) 100%
  );
```

Hover should feel like light intensifying, not a color change for its own sake.

Recommended hover:

```css
transform: translateY(-1px);
box-shadow:
  0 0 28px rgba(73, 133, 253, 0.22),
  0 0 52px rgba(221, 18, 203, 0.20);
```

## Secondary button

Use for supporting actions.

Examples:

```text
View the Work
Explore Lumo
Read the Philosophy
View Details
```

```css
--ei-button-secondary-bg: rgba(227, 216, 253, 0.055);
--ei-button-secondary-border: 1px solid rgba(227, 216, 253, 0.14);
--ei-button-secondary-text: var(--ei-moonlit);
```

Secondary buttons should feel restrained, glassy, and quiet.

---

# 8. Link Guidelines

Links should be elegant and low-noise.

```css
a {
  color: var(--ei-color-text-secondary);
}

a:hover {
  color: var(--ei-halo-blue);
}
```

For inline editorial links, use a soft underline:

```css
text-decoration-color: rgba(73, 133, 253, 0.36);
text-underline-offset: 0.18em;
```

For navigational links, use subtle active states:

```css
.nav-link[aria-current="page"] {
  color: var(--ei-ice-white);
  text-shadow: 0 0 18px rgba(73, 133, 253, 0.32);
}
```

---

# 9. Filter / Pill Guidelines

Filters should feel like quiet instruments, not loud tags.

```css
.ei-filter {
  background: rgba(227, 216, 253, 0.055);
  border: 1px solid rgba(227, 216, 253, 0.12);
  color: rgba(227, 216, 253, 0.58);
}
```

Active state:

```css
.ei-filter.is-active,
.ei-filter[aria-pressed='true'] {
  background: rgba(221, 18, 203, 0.14);
  border: 1px solid rgba(221, 18, 203, 0.36);
  color: rgba(247, 245, 250, 0.96);
}
```

Use active magenta sparingly. It should feel like a selected signal.

---

# 10. Card Guidelines

Cards are a major part of the Echo in Ink interface language. They should feel like luminous, atmospheric containers.

## Default card

```css
.ei-card {
  background: rgba(11, 13, 42, 0.64);
  border: 1px solid rgba(227, 216, 253, 0.10);
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.34);
}
```

## Hover card

```css
.ei-card:hover {
  background: rgba(11, 13, 42, 0.88);
  border: 1px solid rgba(227, 216, 253, 0.20);
  box-shadow:
    0 36px 140px rgba(0, 0, 0, 0.54),
    0 0 80px rgba(221, 18, 203, 0.10);
}
```

## Featured card

Use for Lumo, major offers, and primary proof modules.

```css
.ei-card-featured {
  background:
    radial-gradient(circle at 80% 20%, rgba(73, 133, 253, 0.16), transparent 34%),
    radial-gradient(circle at 20% 80%, rgba(221, 18, 203, 0.12), transparent 38%),
    rgba(11, 13, 42, 0.72);
  border: 1px solid rgba(227, 216, 253, 0.14);
}
```

---

# 11. Image Overlay Guidelines

Atmospheric imagery should never compete with text.

## Soft bottom overlay

Use for cards and image-heavy modules.

```css
--ei-gradient-image-overlay-soft:
  linear-gradient(
    180deg,
    rgba(5, 3, 11, 0) 0%,
    rgba(5, 3, 11, 0.46) 62%,
    rgba(5, 3, 11, 0.84) 100%
  );
```

## Left text overlay

Use when text sits on top of hero imagery.

```css
--ei-gradient-image-overlay-left:
  linear-gradient(
    90deg,
    rgba(5, 3, 11, 0.88) 0%,
    rgba(5, 3, 11, 0.46) 48%,
    rgba(5, 3, 11, 0) 100%
  );
```

### Rule

If text sits over an image, the image must be darkened enough that the text remains calm and readable.

---

# 12. Glow Guidelines

Glows are central to Echo in Ink, but they should be controlled.

```css
--ei-glow-blue:
  0 0 24px rgba(73, 133, 253, 0.36),
  0 0 64px rgba(73, 133, 253, 0.18);

--ei-glow-violet:
  0 0 30px rgba(113, 7, 234, 0.36),
  0 0 86px rgba(113, 7, 234, 0.18);

--ei-glow-magenta:
  0 0 28px rgba(221, 18, 203, 0.34),
  0 0 72px rgba(230, 105, 242, 0.18);
```

## Use glows for

```text
Monogram
Primary CTA hover
Active navigation
Orbital icons
Atmospheric dividers
Hero visuals
Important featured cards
```

## Avoid glows on

```text
Long body text
Every card
All buttons
Dense UI grids
Footer links
Form labels
```

### Rule

Glow should indicate presence, not decoration.

---

# 13. Form Guidelines

Forms should feel quiet, secure, and intentional.

```css
.ei-input {
  background: rgba(11, 13, 42, 0.72);
  border: 1px solid rgba(227, 216, 253, 0.12);
  color: var(--ei-ice-white);
}
```

Placeholder:

```css
.ei-input::placeholder {
  color: rgba(227, 216, 253, 0.38);
}
```

Focus:

```css
.ei-input:focus {
  border-color: rgba(73, 133, 253, 0.42);
  box-shadow:
    0 0 0 1px rgba(73, 133, 253, 0.24),
    0 0 32px rgba(73, 133, 253, 0.12);
}
```

### Form principle

The Contact page should feel like a gentle invitation, not a transactional form.

Helpful microcopy:

```text
You do not need a polished brief. Share what is forming.
```

---

# 14. Accessibility Guidelines

Echo in Ink uses a dark, low-light visual system, so contrast needs to be intentionally protected.

## Minimum rules

- Do not use `text-faint` for essential content.
- Body copy should use `text-secondary` or stronger.
- Small uppercase labels should not drop below `text-tertiary`.
- Important CTAs should use Ice White text.
- Avoid placing Moonlit text over bright nebula areas without a scrim.
- Never use magenta or violet alone for small body text.
- Interactive states should not rely on color alone. Use glow, border, underline, or movement as well.

## Recommended text sizes

```text
Body copy: 16px minimum
Small labels: 11–13px, uppercase, increased letter spacing
Hero headings: large, but with generous line-height
Long-form copy: 16–18px for readability
```

---

# 15. Motion Guidelines

Motion should feel like atmosphere, not animation.

Use:

```text
Slow fade-ins
Soft reveals
Subtle parallax
Orbital drift
Glow breathing
Gentle hover lift
Light shimmer
```

Avoid:

```text
Bouncy easing
Fast transitions
Excessive scroll-jacking
Overactive particles
Constant movement behind body text
Hard zooms
```

Recommended easing:

```css
transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
```

Recommended duration:

```text
Micro interactions: 180–260ms
Section reveals: 600–900ms
Atmospheric motion: 8–24s loops
```

---

# 16. Page-Level Usage

## Home

Use the full atmospheric palette, but maintain restraint.

Primary colors:

```text
Void
Ink
Halo Blue
Violet
Echo Magenta
Ice White
```

The Home page should feel like the portal into the world.

## Studio

Studio should be quieter and more philosophical.

Primary colors:

```text
Void
Ink
Midnight
Moonlit
Violet
Soft Neon
```

Use fewer strong CTAs. Let the atmosphere breathe.

## Identity

Identity should feel precise, elegant, and emotionally clarifying.

Primary colors:

```text
Ink
Midnight
Halo Blue
Violet
Moonlit
Ice White
```

Use magenta only as a subtle recognition signal.

## Sessions

Sessions should feel focused and clarifying.

Primary colors:

```text
Void
Midnight
Halo Blue
Moonlit
Ice White
```

Use Halo Blue for signal/focus moments. Keep magenta minimal.

## Worlds

Worlds can be more expansive and cinematic.

Primary colors:

```text
Void
Violet
Echo Magenta
Halo Blue
Moonlit
Ice White
```

This page can carry the most atmospheric gradient work.

## Works

Works should feel curated and editorial.

Primary colors:

```text
Void
Ink
Midnight
Moonlit
Halo Blue
```

Let project imagery provide most of the visual color.

## Archive

Archive should be softer, quieter, and more literary.

Primary colors:

```text
Void
Ink
Moonlit
Violet
Soft Neon
```

Keep it more editorial than promotional.

## Systems

Systems can be slightly more interface-forward.

Primary colors:

```text
Ink
Midnight
Halo Blue
Violet
Moonlit
Ice White
```

Use clearer cards, labels, and product-like structures.

---

# 17. Implementation Naming Rules

Use three levels of tokens:

## 1. Core tokens

Raw brand colors.

```json
"void": "#05030B"
```

## 2. Semantic tokens

Purpose-based roles.

```json
"text.primary": "rgba(247, 245, 250, 0.96)"
```

## 3. Component tokens

Specific UI decisions.

```json
"card.background": "rgba(11, 13, 42, 0.64)"
```

### Rule

Components should use semantic/component tokens, not raw colors directly.

Good:

```css
color: var(--ei-color-text-secondary);
```

Avoid:

```css
color: #E3D8FD;
```

This keeps the system flexible as the brand evolves.

---

# 18. Do / Don’t

## Do

- Use darkness generously.
- Let accent colors appear as light.
- Use Moonlit instead of generic grey.
- Reserve Echo Magenta for emotional emphasis.
- Use Halo Blue for interaction and clarity.
- Keep gradients subtle behind text.
- Make CTAs luminous but not loud.
- Use glows to guide attention.
- Let the site feel slow, spacious, and authored.

## Don’t

- Do not use neon colors at full strength everywhere.
- Do not make every card glow.
- Do not use pure white for all typography.
- Do not use Electric Blue as a default button color.
- Do not place small text over bright gradients.
- Do not let magenta dominate the interface.
- Do not overcomplicate the palette with extra cyans.
- Do not make the site feel like gaming, crypto, or generic sci-fi.

---

# 19. Final Design Principle

Echo in Ink’s color system should feel like:

```text
A dark world.
A soft signal.
A luminous atmosphere.
A quiet invitation.
```

The palette should not shout. It should pull people inward.
