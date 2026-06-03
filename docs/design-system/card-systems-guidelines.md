Echo in Ink — Card System Guidelines

1. Card Philosophy

Cards are central to the Echo in Ink interface.

They are not ordinary UI boxes.
They are atmospheric containers — quiet portals into worlds, systems, ideas, and transformations.

Cards should:

Hold atmosphere
Organise meaning
Create depth
Support hierarchy
Feel premium through reduction

Cards should not feel:

Generic SaaS
Overdesigned
Glowy for no reason
Crowded
Template-based

Core principle:

Cards are portals, not panels.

⸻

2. Canonical Card Types

Echo in Ink should have three main card archetypes.

2.1 Transformation Cards

Use for:

Identity
Creative direction
Narrative architecture
Studio philosophy
Offer previews
Emotional outcomes
Values
Philosophy sections

Tone:

Editorial
Human
Spacious
Reflective
Warm

Structure:

Eyebrow / icon
Title
Short body copy
Optional CTA

Your PhilosophyCard is a Transformation Card.

It should use the shared card base, then add its centered editorial structure.

⸻

2.2 Systems Cards

Use for:

Digital products
Tools
Frameworks
Identity Canvas
GPT systems
Templates
UI kits
Archive systems
Product-like modules

Tone:

Intelligent
Structured
Archival
Precise
Instrument-like

Structure:

System visual
Title
One-sentence description
Metadata label
Status badge

Your SystemCard is correct in spirit, but it should rely more on shared card tokens/classes and less on custom inline styling.

⸻

2.3 Featured World Cards

Use for:

Lumo
Major case studies
Worldbuilding prototypes
Flagship projects
Immersive proof sections
Featured Works cards

Tone:

Cinematic
Narrative
Immersive
Expansive
World-like

Structure:

Left: narrative / title / description / CTA
Right: atmospheric image or visual

Your featured ProjectCard and GlowCard are both versions of Featured World Cards.

Long term, I would merge their logic or make them variants of the same underlying card primitive.

⸻

3. Shared Card Foundation

Every Echo in Ink card should start from the same base.

/* src/styles/03-components/cards.css */
@layer base {
  :root {
    --ei-card-radius-sm: 20px;
    --ei-card-radius-md: 24px;
    --ei-card-radius-lg: 28px;
    --ei-card-radius-xl: 32px;
    --ei-card-bg:
      linear-gradient(
        180deg,
        rgba(11, 13, 42, 0.72),
        rgba(5, 3, 11, 0.92)
      );
    --ei-card-bg-soft:
      linear-gradient(
        180deg,
        rgba(11, 13, 42, 0.48),
        rgba(5, 3, 11, 0.72)
      );
    --ei-card-bg-hover:
      linear-gradient(
        180deg,
        rgba(11, 13, 42, 0.86),
        rgba(5, 3, 11, 0.96)
      );
    --ei-card-border: rgba(227, 216, 253, 0.10);
    --ei-card-border-hover: rgba(227, 216, 253, 0.20);
    --ei-card-shadow:
      0 0 60px rgba(113, 7, 234, 0.08);
    --ei-card-shadow-hover:
      0 36px 140px rgba(0, 0, 0, 0.54),
      0 0 80px rgba(221, 18, 203, 0.10);
    --ei-card-inner-highlight:
      inset 0 1px 0 rgba(247, 245, 250, 0.04);
    --ei-card-padding-sm: 1.5rem;
    --ei-card-padding-md: 1.75rem;
    --ei-card-padding-lg: 2.5rem;
    --ei-card-padding-xl: 3rem;
  }
}

⸻

4. Core Card Classes

Use these as the reusable visual system.

@layer components {
  .ei-card {
    position: relative;
    overflow: hidden;
    border-radius: var(--ei-card-radius-lg);
    background: var(--ei-card-bg);
    border: 1px solid var(--ei-card-border);
    box-shadow:
      var(--ei-card-inner-highlight),
      var(--ei-card-shadow);
    transition:
      border-color 500ms cubic-bezier(0.22, 1, 0.36, 1),
      background 500ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 500ms cubic-bezier(0.22, 1, 0.36, 1),
      transform 500ms cubic-bezier(0.22, 1, 0.36, 1);
  }
  .ei-card:hover {
    background: var(--ei-card-bg-hover);
    border-color: var(--ei-card-border-hover);
    box-shadow:
      var(--ei-card-inner-highlight),
      var(--ei-card-shadow-hover);
  }
  .ei-card-interactive {
    cursor: pointer;
  }
  .ei-card-interactive:hover {
    transform: translateY(-2px);
  }
  .ei-card-soft {
    background: var(--ei-card-bg-soft);
  }
  .ei-card-small {
    border-radius: var(--ei-card-radius-md);
  }
  .ei-card-large {
    border-radius: var(--ei-card-radius-xl);
  }
  .ei-card-content {
    position: relative;
    z-index: 10;
  }
  .ei-card-atmosphere {
    pointer-events: none;
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 700ms cubic-bezier(0.22, 1, 0.36, 1);
  }
  .ei-card:hover .ei-card-atmosphere {
    opacity: 1;
  }
}

⸻

5. Card Archetype Classes

Transformation Card

@layer components {
  .ei-card-transformation {
    min-height: 320px;
    padding: var(--ei-card-padding-lg);
    text-align: center;
  }
  .ei-card-transformation .ei-card-atmosphere {
    background:
      radial-gradient(
        circle at 20% 12%,
        rgba(73, 133, 253, 0.13),
        transparent 34%
      ),
      radial-gradient(
        circle at 84% 88%,
        rgba(113, 7, 234, 0.12),
        transparent 38%
      );
  }
  .ei-card-transformation-icon {
    margin-inline: auto;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    filter: drop-shadow(0 0 18px rgba(73, 133, 253, 0.18));
  }
  .ei-card-transformation-title {
    color: var(--ei-color-text-primary);
  }
  .ei-card-transformation-copy {
    margin-inline: auto;
    margin-top: 1rem;
    max-width: 18rem;
    color: var(--ei-color-text-secondary);
  }
}

⸻

Systems Card

@layer components {
  .ei-card-system {
    min-height: 180px;
    padding: var(--ei-card-padding-md);
    border-radius: var(--ei-card-radius-md);
    background:
      radial-gradient(
        ellipse 80% 80% at 50% 0%,
        rgba(113, 7, 234, 0.06),
        transparent 60%
      ),
      rgba(247, 245, 250, 0.02);
    border: 1px solid rgba(247, 245, 250, 0.07);
  }
  .ei-card-system::before {
    content: "";
    position: absolute;
    top: 0;
    left: 1.5rem;
    right: 1.5rem;
    height: 1px;
    opacity: 0.42;
    background:
      linear-gradient(
        90deg,
        transparent,
        rgba(73, 133, 253, 0.55),
        transparent
      );
    transition: opacity 500ms cubic-bezier(0.22, 1, 0.36, 1);
  }
  .ei-card-system:hover::before {
    opacity: 0.72;
  }
  .ei-card-system-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;
  }
  .ei-card-system-category {
    display: block;
    margin-bottom: 0.375rem;
    font-family: var(--ei-font-system);
    font-size: 0.5625rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--ei-color-text-muted);
  }
  .ei-card-system-title {
    color: var(--ei-color-text-primary);
  }
  .ei-card-system-copy {
    margin-top: 0.75rem;
    color: var(--ei-color-text-tertiary);
  }
  .ei-card-system-status {
    flex-shrink: 0;
    border-radius: 999px;
    padding: 0.25rem 0.5rem;
    font-family: var(--ei-font-system);
    font-size: 0.5rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
}

⸻

Featured World Card

@layer components {
  .ei-card-world {
    min-height: 420px;
    border-radius: var(--ei-card-radius-xl);
  }
  .ei-card-world-link {
    display: grid;
    min-height: inherit;
    color: inherit;
    text-decoration: none;
  }
  @media (min-width: 1024px) {
    .ei-card-world-link {
      grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    }
  }
  .ei-card-world-copy {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    padding: clamp(1.75rem, 4vw, 3rem);
  }
  .ei-card-world-media {
    position: relative;
    min-height: 240px;
    overflow: hidden;
  }
  .ei-card-world-media img {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
  }
  .ei-card-world:hover .ei-card-world-media img {
    transform: scale(1.02);
  }
  .ei-card-world-overlay {
    position: absolute;
    inset: 0;
    background: var(--ei-gradient-image-overlay-soft);
  }
  .ei-card-world-title {
    color: var(--ei-color-text-primary);
  }
  .ei-card-world-category,
  .ei-card-world-meta {
    color: var(--ei-color-text-tertiary);
  }
  .ei-card-world-copy-text {
    max-width: 38ch;
    color: var(--ei-color-text-secondary);
  }
}

⸻

6. Quote Card

Your QuoteCard is not one of the three core card types, but it belongs in the system as a Reflective Card.

Use for:

Quotes
Manifesto fragments
Emotional thesis moments
Reflective pauses
Studio statements

Tone:

Quiet
Luminous
Emotional
Reverent
Minimal

Add this as a fourth supporting variant:

@layer components {
  .ei-card-quote {
    min-height: 260px;
    max-width: 420px;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--ei-card-radius-lg);
    padding: 2.5rem 2rem;
    text-align: center;
    background:
      radial-gradient(
        circle at 50% 68%,
        rgba(73, 133, 253, 0.14) 0%,
        rgba(73, 133, 253, 0.055) 22%,
        transparent 46%
      ),
      radial-gradient(
        ellipse 78% 66% at 50% 42%,
        rgba(11, 13, 42, 0.34) 0%,
        rgba(11, 13, 42, 0.16) 54%,
        rgba(5, 3, 11, 0.42) 100%
      );
    border: 1px solid rgba(73, 133, 253, 0.18);
    box-shadow:
      inset 0 0 72px rgba(73, 133, 253, 0.055),
      0 0 42px rgba(73, 133, 253, 0.045);
  }
  .ei-card-quote:hover {
    border-color: rgba(73, 133, 253, 0.28);
    box-shadow:
      inset 0 0 82px rgba(73, 133, 253, 0.075),
      0 0 54px rgba(73, 133, 253, 0.07);
  }
  .ei-card-quote-orbit {
    pointer-events: none;
    position: absolute;
    left: 50%;
    top: 50%;
    height: 150px;
    width: 78%;
    border-radius: 999px;
    border: 1px solid rgba(73, 133, 253, 0.09);
    opacity: 0.45;
    transform: translate(-50%, -50%) rotate(-7deg);
  }
  .ei-card-quote-text {
    position: relative;
    z-index: 10;
    max-width: 24ch;
    white-space: pre-line;
    color: rgba(73, 133, 253, 0.88);
    text-shadow: 0 0 18px rgba(73, 133, 253, 0.10);
  }
}

⸻

7. Card Rules

Do

Use shared card classes.
Use semantic tokens.
Keep card copy short.
Use one visual idea per card.
Use hover lift between -2px and -4px only.
Use glow sparingly.
Use image overlays for readability.
Keep card interiors spacious.

Don’t

Do not hard-code colors inside React unless unavoidable.
Do not make every card visually unique.
Do not scale cards aggressively.
Do not use pure black card backgrounds.
Do not overload cards with long descriptions.
Do not use generic SaaS icons.
Do not use different border radii randomly.
Do not create new card types unless they are truly needed.

⸻

8. Recommended Component Cleanup

Current issue

Your cards are doing too much inline styling.

For example, PhilosophyCard, QuoteCard, ProjectCard, GlowCard, and SystemCard each define their own:

backgrounds
borders
box-shadows
hover states
text colors
radii
motion values
glow intensity

That makes the system harder to maintain.

Better structure

Use shared CSS classes:

className="ei-card ei-card-interactive ei-card-transformation"

Then React handles only:

content
layout variant
motion entrance
conditional rendering
links
accessibility labels

⸻

9. Updated PhilosophyCard Direction

Your PhilosophyCard should become:

<motion.article
  initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={VIEWPORT.normal}
  transition={{
    duration: DURATION.normal,
    ease: EASE_CINEMATIC,
    delay: index * 0.08,
  }}
  whileHover={
    prefersReducedMotion
      ? undefined
      : {
          y: -2,
          transition: {
            duration: DURATION.instant,
            ease: EASE_CINEMATIC,
          },
        }
  }
  className={[
    'ei-card',
    'ei-card-interactive',
    'ei-card-transformation',
    isValue ? 'ei-card-transformation-compact' : '',
  ].join(' ')}
>
  <div className="ei-card-atmosphere" aria-hidden="true" />
  <div className="ei-card-content">
    <div className="ei-card-transformation-icon" aria-hidden="true">
      <OrbitalVisual variant={icon} size={isValue ? 60 : 70} />
    </div>
    <h3 className="ei-type-section ei-card-transformation-title">
      {title}
    </h3>
    <p className="ei-type-small ei-card-transformation-copy">
      {description}
    </p>
  </div>
</motion.article>

Cleaner. More controlled. More scalable.

⸻

10. Updated SystemCard Direction

Your SystemCard should become:

<motion.article
  variants={driftUp}
  className="ei-card ei-card-system"
>
  <div className="ei-card-content">
    <div className="ei-card-system-header">
      <div>
        {category && (
          <span className="ei-card-system-category">
            {category}
          </span>
        )}
        <h3 className="ei-type-section-structural ei-card-system-title">
          {title}
        </h3>
      </div>
      <span
        className="ei-card-system-status"
        data-status={status}
      >
        {statusLabel[status]}
      </span>
    </div>
    <p className="ei-type-small ei-card-system-copy">
      {description}
    </p>
  </div>
</motion.article>

Then let CSS handle status colors:

.ei-card-system-status[data-status='available'] {
  color: rgba(73, 133, 253, 0.62);
  background: rgba(73, 133, 253, 0.10);
  border: 1px solid rgba(73, 133, 253, 0.20);
}
.ei-card-system-status[data-status='soon'] {
  color: rgba(227, 216, 253, 0.52);
  background: rgba(227, 216, 253, 0.08);
  border: 1px solid rgba(227, 216, 253, 0.16);
}
.ei-card-system-status[data-status='active'] {
  color: rgba(221, 18, 203, 0.62);
  background: rgba(221, 18, 203, 0.10);
  border: 1px solid rgba(221, 18, 203, 0.20);
}

⸻

11. Updated ProjectCard Direction

Your ProjectCard is mostly good. It already uses tokens like:

var(--ei-card-bg)
var(--ei-card-border)
var(--ei-card-bg-hover)
var(--ei-card-shadow-hover)

But it should move repeated structures into card classes.

For featured cards:

className="ei-card ei-card-interactive ei-card-world"

For small project cards:

className="ei-card ei-card-interactive ei-card-project"

For image overlays:

<div className="ei-card-world-overlay" aria-hidden="true" />

Instead of inline:

style={{ background: 'var(--ei-image-overlay-soft)' }}

Both are acceptable, but class-based is cleaner.

⸻

12. Updated GlowCard Direction

GlowCard is the one I would simplify the most.

It currently has too much archetype-specific logic inside the component. Keep the archetype idea, but move styling to CSS data attributes.

Use this instead:

<motion.article
  whileHover={
    prefersReducedMotion
      ? undefined
      : { y: featured ? -3 : -2 }
  }
  className={cn(
    'ei-card',
    'ei-card-interactive',
    'ei-card-glow',
    featured && 'ei-card-large',
    horizontal && 'ei-card-glow-horizontal',
    className
  )}
  data-archetype={archetype}
  data-featured={featured ? 'true' : 'false'}
>

Then CSS handles:

.ei-card-glow[data-archetype='sessions'] {}
.ei-card-glow[data-archetype='identity'] {}
.ei-card-glow[data-archetype='worlds'] {}

This keeps React much cleaner.

⸻

13. Final Card File Structure

Put the guidelines here:

docs/design-system/card-system-guidelines.md

Put the CSS here:

src/styles/03-components/cards.css

Put the React cards here:

src/components/cards/
  PhilosophyCard.tsx
  QuoteCard.tsx
  ProjectCard.tsx
  GlowCard.tsx
  SystemCard.tsx

Or, better long term:

src/components/cards/
  Card.tsx
  TransformationCard.tsx
  SystemCard.tsx
  FeaturedWorldCard.tsx
  QuoteCard.tsx
  ProjectCard.tsx

⸻

14. What to do next

First, create:

src/styles/03-components/cards.css

Then move all shared card styling into it.

After that, update the card components one by one:

1. PhilosophyCard
2. SystemCard
3. QuoteCard
4. ProjectCard
5. GlowCard

Do not rewrite all cards at once. Start with PhilosophyCard, because it is the simplest and will prove the new system works.