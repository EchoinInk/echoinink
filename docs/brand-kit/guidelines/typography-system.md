# ECHO IN INK — Typography System

Yes — here’s an updated, cleaner **Echo in Ink Typography System** that matches the newer color direction, your current file structure, and the brand’s cinematic tone.

I’d also recommend simplifying the implementation because your current `globals.css` imports **three typography files at once**: `typography.css`, `typography-enhanced.css`, and `typography-system.css`, which can create duplicated class definitions and conflicting typography rules. Your base font setup is already clear: **Fraunces** for editorial display, **Neue Montreal** for structural/body/UI, and **Geist Mono** for labels and metadata.

---

## Typography Philosophy

Echo in Ink typography should feel:

**authored, not templated**  
**cinematic, not corporate**  
**emotional, not decorative**  
**spacious, not dense**  
**restrained, not performative**

Typography is not decoration.  
It is **atmosphere translated into language**.

Every typographic choice should support the feeling that Echo in Ink is a cinematic creative studio: quiet, precise, emotionally intelligent, and unmistakably authored.

---

## 1. Font Roles

### Fraunces

**Role:** Emotional display font

Use Fraunces for the moments that need atmosphere, soul, and cinematic gravity.

Use for:

```text
Hero headlines
Manifesto lines
Poetic section titles
Cinematic statements
Editorial emphasis
Quote moments
Large philosophical sections
```

Fraunces should feel:

```text
emotional
atmospheric
literary
restrained
intentional
softly cinematic
```

Do not overuse Fraunces for every heading. Its power comes from restraint.

---

### Neue Montreal

**Role:** Practical structural font

Use Neue Montreal for everything that needs clarity, confidence, and modern precision.

Use for:

```text
Body copy
Navigation
Buttons
Cards
Descriptions
Forms
Offer details
Case study text
UI systems
Footer content
```

Neue Montreal should feel:

```text
clear
modern
human
precise
calm
non-corporate
```

This is the primary reading and interface font for Echo in Ink.

---

### Geist Mono

**Role:** System intelligence font

Use Geist Mono sparingly for structured system language.

Use for:

```text
Section labels
Categories
Metadata
Tags
Technical cues
Archive labels
Project classifications
Atmospheric annotations
```

Geist Mono should feel:

```text
architectural
quiet
technical
ordered
intelligent
minimal
```

Geist Mono should never dominate the page. It is the whisper of the system underneath the atmosphere.

---

## 2. Desktop Typography Rules

### Hero Headline

```text
Font: Fraunces
Size: 72–96px
Line-height: 0.95–1.05
Letter spacing: -0.04em
Weight: 400–500
```

Use for:

```text
Hero sections
Cinematic opening statements
Emotional positioning moments
Major page introductions
```

Recommended CSS:

```css
.ei-type-hero {
  font-family: 'Fraunces', Georgia, 'Times New Roman', serif;
  font-size: clamp(4.5rem, 7vw, 6rem);
  line-height: 0.98;
  letter-spacing: -0.04em;
  font-weight: 400;
  color: var(--ei-color-text-primary);
}
```

---

### Large Section Statement

```text
Font: Fraunces
Size: 48–64px
Line-height: 1.05
Letter spacing: -0.035em
Weight: 400
```

Use for:

```text
Philosophy statements
Manifesto blocks
Immersive editorial sections
Large emotional transitions
```

Recommended CSS:

```css
.ei-type-statement {
  font-family: 'Fraunces', Georgia, 'Times New Roman', serif;
  font-size: clamp(3rem, 5vw, 4rem);
  line-height: 1.05;
  letter-spacing: -0.035em;
  font-weight: 400;
  color: var(--ei-color-text-primary);
}
```

---

### Section Heading

```text
Font: Fraunces or Neue Montreal
Size: 32–44px
Line-height: 1.1
Letter spacing: -0.025em
Weight: 400–500
```

Use Fraunces when the section is emotional or editorial.

Use Neue Montreal when the section is practical, explanatory, or offer-focused.

Use for:

```text
Major content sections
Case study sections
Offer breakdowns
System overviews
Page modules
```

Recommended CSS:

```css
.ei-type-section {
  font-family: 'Fraunces', Georgia, 'Times New Roman', serif;
  font-size: clamp(2rem, 3.6vw, 2.75rem);
  line-height: 1.1;
  letter-spacing: -0.025em;
  font-weight: 400;
  color: var(--ei-color-text-primary);
}

.ei-type-section-structural {
  font-family: 'Neue Montreal', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: clamp(2rem, 3.2vw, 2.5rem);
  line-height: 1.12;
  letter-spacing: -0.025em;
  font-weight: 500;
  color: var(--ei-color-text-primary);
}
```

---

### Body Copy

```text
Font: Neue Montreal
Size: 17–19px
Line-height: 1.55–1.7
Letter spacing: -0.005em
Weight: 400
```

Body copy should feel:

```text
calm
breathable
intelligent
emotionally restrained
easy to read
```

Recommended CSS:

```css
.ei-type-body {
  font-family: 'Neue Montreal', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: clamp(1.0625rem, 1.15vw, 1.1875rem);
  line-height: 1.65;
  letter-spacing: -0.005em;
  font-weight: 400;
  color: var(--ei-color-text-secondary);
}
```

---

### Small Body / Card Copy

```text
Font: Neue Montreal
Size: 14–16px
Line-height: 1.5–1.65
Weight: 400
```

Use for:

```text
Cards
Descriptions
Supporting UI content
Captions
Helper text
Small offer details
```

Recommended CSS:

```css
.ei-type-small {
  font-family: 'Neue Montreal', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: clamp(0.875rem, 1vw, 1rem);
  line-height: 1.6;
  letter-spacing: -0.003em;
  font-weight: 400;
  color: var(--ei-color-text-tertiary);
}
```

---

### Navigation

```text
Font: Neue Montreal
Size: 13–14px
Line-height: 1
Letter spacing: 0.02em
Weight: 400–500
```

Navigation should feel:

```text
minimal
architectural
effortless
spacious
quietly premium
```

Recommended CSS:

```css
.ei-type-nav {
  font-family: 'Neue Montreal', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 0.8125rem;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 500;
  color: var(--ei-color-text-tertiary);
}
```

I would avoid forcing all nav items uppercase unless the nav feels too casual. Uppercase can work, but with Echo in Ink, sentence/title case may feel more elegant and less “interface-heavy.”

---

### Buttons

```text
Font: Neue Montreal
Size: 14–15px
Letter spacing: 0.01em
Weight: 500
```

Buttons should feel:

```text
calm
premium
understated
intentional
clear
```

Avoid oversized CTA styling.

Recommended CSS:

```css
.ei-type-button {
  font-family: 'Neue Montreal', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 0.875rem;
  line-height: 1;
  letter-spacing: 0.01em;
  font-weight: 500;
  color: var(--ei-button-text);
}
```

---

### System Labels

```text
Font: Geist Mono
Size: 10–12px
Transform: Uppercase
Letter spacing: 0.12–0.18em
Weight: 400–500
```

Use for:

```text
Section labels
Metadata
Interface systems
Atmospheric annotations
Project categories
Offer labels
Archive taxonomy
```

Recommended CSS:

```css
.ei-type-label {
  font-family: 'Geist Mono', 'JetBrains Mono', 'Fira Code', monospace;
  font-size: clamp(0.625rem, 0.75vw, 0.75rem);
  line-height: 1.4;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--ei-color-text-muted);
}
```

---

## 3. Mobile Typography Rules

### Hero Headline

```text
Font: Fraunces
Size: 44–56px
Line-height: 0.95–1.05
Letter spacing: -0.035em
```

Recommended CSS:

```css
@media (max-width: 767px) {
  .ei-type-hero {
    font-size: clamp(2.75rem, 13vw, 3.5rem);
    line-height: 1;
    letter-spacing: -0.035em;
  }
}
```

---

### Section Statement

```text
Font: Fraunces
Size: 34–42px
Line-height: 1.05–1.1
```

Recommended CSS:

```css
@media (max-width: 767px) {
  .ei-type-statement {
    font-size: clamp(2.125rem, 10vw, 2.625rem);
    line-height: 1.07;
  }
}
```

---

### Section Heading

```text
Font: Fraunces / Neue Montreal
Size: 26–32px
Line-height: 1.1
```

Recommended CSS:

```css
@media (max-width: 767px) {
  .ei-type-section,
  .ei-type-section-structural {
    font-size: clamp(1.625rem, 8vw, 2rem);
    line-height: 1.1;
  }
}
```

---

### Body Copy

```text
Font: Neue Montreal
Size: 16–17px
Line-height: 1.55–1.65
```

Recommended CSS:

```css
@media (max-width: 767px) {
  .ei-type-body {
    font-size: 1rem;
    line-height: 1.62;
  }
}
```

---

### Labels

```text
Font: Geist Mono
Size: 10–11px
Letter spacing: 0.12em
```

Recommended CSS:

```css
@media (max-width: 767px) {
  .ei-type-label {
    font-size: 0.625rem;
    letter-spacing: 0.12em;
  }
}
```

---

## 4. Color + Contrast Rules

### Primary Text

Use:

```css
var(--ei-color-text-primary)
```

Recommended value:

```css
rgba(247, 245, 250, 0.96)
```

Use for:

```text
Hero headlines
Major headings
Important statements
Primary CTAs
High-emphasis navigation
```

---

### Body Copy

Use:

```css
var(--ei-color-text-secondary)
```

Recommended value:

```css
rgba(227, 216, 253, 0.78)
```

This creates softness without losing readability.

Use for:

```text
Main paragraphs
Offer descriptions
Case study body copy
Page introductions
Studio philosophy text
```

---

### Secondary Copy

Use:

```css
var(--ei-color-text-tertiary)
```

Recommended value:

```css
rgba(227, 216, 253, 0.58)
```

Use for:

```text
Metadata
Supporting descriptions
Card descriptions
Footer text
Atmospheric hierarchy
```

---

### Muted Copy

Use:

```css
var(--ei-color-text-muted)
```

Recommended value:

```css
rgba(227, 216, 253, 0.42)
```

Use for:

```text
Labels
Quiet annotations
Inactive filter states
Secondary UI details
```

Do not use muted copy for important paragraphs.

---

### Minimum Readability

Never place body copy below:

```text
16px
```

Small labels can be 10–12px, but only when they are decorative, categorical, or supplemental.

---

## 5. Accent Usage

Use blue, violet, or magenta only for:

```text
Emphasis
Interaction states
Links
Hover states
Selected filters
Subtle highlights
Atmospheric metadata
```

Do not use bright gradients for full paragraphs.

Do not use magenta or violet as long-form reading colors.

Use accent text sparingly:

```css
.ei-type-accent {
  color: var(--ei-halo-blue);
}

.ei-type-accent-secondary {
  color: var(--ei-soft-neon);
}
```

---

## 6. Hierarchy Rule

Each section should use no more than:

```text
1 display style
1 body style
1 label style
```

This restraint is what keeps Echo in Ink feeling:

```text
cinematic
premium
emotionally intelligent
calm
spacious
```

Avoid stacking too many typographic treatments in one section.

A good section structure:

```text
Label — Geist Mono
Heading — Fraunces
Body — Neue Montreal
CTA — Neue Montreal
```

A practical offer section can use:

```text
Label — Geist Mono
Heading — Neue Montreal
Body — Neue Montreal
Metadata — Geist Mono
```

---

## 7. Best Pairing Structure

### Fraunces = Soul

Emotional gravity.  
Editorial atmosphere.  
Human resonance.

Use it when the visitor should feel something.

---

### Neue Montreal = Clarity

Precision.  
Structure.  
Readability.  
Modern restraint.

Use it when the visitor needs to understand something.

---

### Geist Mono = System Intelligence

Architecture.  
Metadata.  
Quiet technical rhythm.

Use it when the interface needs structure, classification, or quiet authority.

---

## 8. Recommended Class Architecture

Your current files include both `.ei-*` classes and `.text-*` classes, with duplicate definitions in different typography files. For long-term maintainability, I would standardize around **one naming system**.

Recommended system:

```text
.ei-type-hero
.ei-type-statement
.ei-type-section
.ei-type-section-structural
.ei-type-body
.ei-type-small
.ei-type-label
.ei-type-nav
.ei-type-button
.ei-type-quote
.ei-type-manifesto
```

Then keep old class names temporarily as aliases only.

---

## 9. Recommended Consolidated CSS

Use this as your cleaned typography system.

```css
/* ═══════════════════════════════════════════════════════════════
   Echo in Ink — Typography System
   Cinematic, authored, restrained typographic hierarchy.
   ═══════════════════════════════════════════════════════════════ */

@layer base {
  :root {
    --ei-font-editorial: 'Fraunces', Georgia, 'Times New Roman', serif;
    --ei-font-structural: 'Neue Montreal', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --ei-font-system: 'Geist Mono', 'JetBrains Mono', 'Fira Code', monospace;

    --ei-type-color-primary: var(--ei-color-text-primary);
    --ei-type-color-secondary: var(--ei-color-text-secondary);
    --ei-type-color-tertiary: var(--ei-color-text-tertiary);
    --ei-type-color-muted: var(--ei-color-text-muted);
  }

  .ei-type-hero {
    font-family: var(--ei-font-editorial);
    font-size: clamp(2.75rem, 7vw, 6rem);
    line-height: 0.98;
    letter-spacing: -0.04em;
    font-weight: 400;
    color: var(--ei-type-color-primary);
  }

  .ei-type-statement {
    font-family: var(--ei-font-editorial);
    font-size: clamp(2.125rem, 5vw, 4rem);
    line-height: 1.05;
    letter-spacing: -0.035em;
    font-weight: 400;
    color: var(--ei-type-color-primary);
  }

  .ei-type-section {
    font-family: var(--ei-font-editorial);
    font-size: clamp(1.75rem, 3.6vw, 2.75rem);
    line-height: 1.1;
    letter-spacing: -0.025em;
    font-weight: 400;
    color: var(--ei-type-color-primary);
  }

  .ei-type-section-structural {
    font-family: var(--ei-font-structural);
    font-size: clamp(1.75rem, 3.2vw, 2.5rem);
    line-height: 1.12;
    letter-spacing: -0.025em;
    font-weight: 500;
    color: var(--ei-type-color-primary);
  }

  .ei-type-body {
    font-family: var(--ei-font-structural);
    font-size: clamp(1rem, 1.15vw, 1.1875rem);
    line-height: 1.65;
    letter-spacing: -0.005em;
    font-weight: 400;
    color: var(--ei-type-color-secondary);
  }

  .ei-type-body-large {
    font-family: var(--ei-font-structural);
    font-size: clamp(1.0625rem, 1.35vw, 1.25rem);
    line-height: 1.68;
    letter-spacing: -0.006em;
    font-weight: 400;
    color: var(--ei-type-color-secondary);
  }

  .ei-type-small {
    font-family: var(--ei-font-structural);
    font-size: clamp(0.875rem, 1vw, 1rem);
    line-height: 1.6;
    letter-spacing: -0.003em;
    font-weight: 400;
    color: var(--ei-type-color-tertiary);
  }

  .ei-type-label {
    font-family: var(--ei-font-system);
    font-size: clamp(0.625rem, 0.75vw, 0.75rem);
    line-height: 1.4;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    font-weight: 400;
    color: var(--ei-type-color-muted);
  }

  .ei-type-nav {
    font-family: var(--ei-font-structural);
    font-size: 0.8125rem;
    line-height: 1;
    letter-spacing: 0.02em;
    font-weight: 500;
    color: var(--ei-type-color-tertiary);
  }

  .ei-type-button {
    font-family: var(--ei-font-structural);
    font-size: 0.875rem;
    line-height: 1;
    letter-spacing: 0.01em;
    font-weight: 500;
    color: var(--ei-button-text);
  }

  .ei-type-quote {
    font-family: var(--ei-font-editorial);
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    line-height: 1.35;
    letter-spacing: -0.02em;
    font-weight: 400;
    color: var(--ei-type-color-primary);
  }

  .ei-type-manifesto {
    font-family: var(--ei-font-editorial);
    font-size: clamp(1.25rem, 2.4vw, 1.875rem);
    line-height: 1.5;
    letter-spacing: -0.015em;
    font-weight: 400;
    color: var(--ei-type-color-secondary);
  }
}

@layer utilities {
  .ei-text-balance {
    text-wrap: balance;
  }

  .ei-text-pretty {
    text-wrap: pretty;
  }

  .ei-measure-tight {
    max-width: 36ch;
  }

  .ei-measure {
    max-width: 52ch;
  }

  .ei-measure-wide {
    max-width: 68ch;
  }
}
```

---

## 10. Backwards Compatibility Aliases

Because your current typography system already uses classes like `.ei-hero-display`, `.ei-body`, `.ei-eyebrow`, `.text-editorial-hero`, and `.text-cinematic-heading`, I would keep aliases during the transition. Your files currently define those legacy classes in multiple places.

Add this below the main system:

```css
@layer base {
  .ei-hero-display,
  .text-editorial-hero {
    composes: ei-type-hero;
  }

  .ei-hero-lead,
  .text-editorial-hero-lead {
    composes: ei-type-body;
  }

  .ei-eyebrow,
  .text-structural {
    composes: ei-type-label;
  }

  .ei-section-title,
  .text-cinematic-heading {
    composes: ei-type-section;
  }

  .ei-section-description,
  .ei-body,
  .text-atmospheric,
  .text-atmospheric-large {
    composes: ei-type-body;
  }

  .ei-body-small,
  .ei-card-description,
  .text-card-body,
  .text-atmospheric-small {
    composes: ei-type-small;
  }

  .ei-cta-text,
  .text-structural-cta {
    composes: ei-type-button;
  }

  .ei-nav-text,
  .text-structural-nav {
    composes: ei-type-nav;
  }

  .ei-quote,
  .text-quote {
    composes: ei-type-quote;
  }

  .ei-atmosphere-text,
  .text-manifesto,
  .text-manifesto-large {
    composes: ei-type-manifesto;
  }
}
```

Important: native CSS does **not** support `composes` unless your build setup supports CSS Modules composition. If not, use this safer plain CSS version:

```css
@layer base {
  .ei-hero-display,
  .text-editorial-hero {
    font-family: var(--ei-font-editorial);
    font-size: clamp(2.75rem, 7vw, 6rem);
    line-height: 0.98;
    letter-spacing: -0.04em;
    font-weight: 400;
    color: var(--ei-type-color-primary);
  }

  .ei-eyebrow,
  .text-structural {
    font-family: var(--ei-font-system);
    font-size: clamp(0.625rem, 0.75vw, 0.75rem);
    line-height: 1.4;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    font-weight: 400;
    color: var(--ei-type-color-muted);
  }
}
```

---

## 11. Implementation Recommendation

Right now, your `globals.css` imports all three typography systems. I would change that to one canonical file.

Recommended:

```css
@import './tokens.css' layer(base);
@import './typography-system.css' layer(base);
@import './layout.css' layer(base);
@import './spacing-enhanced.css' layer(base);
@import './atmosphere-enhanced.css' layer(components);
@import './atmosphere.css' layer(components);
@import './hero.css' layer(components);
@import './mobile-refinements.css' layer(utilities);
@import './forms-luxury.css' layer(components);
@import './accessibility.css';
@import './browser-chrome.css' layer(base);

@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then use `typography-system.css` as the single source of truth.

---

## 12. Final Rule

Echo in Ink typography should always follow this relationship:

```text
Fraunces = soul
Neue Montreal = clarity
Geist Mono = system intelligence
```

Fraunces creates the emotional atmosphere.  
Neue Montreal makes the work understandable.  
Geist Mono gives the system quiet structure.

The typography should feel like an authored world speaking with restraint.
