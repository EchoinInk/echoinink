Echo in Ink

A cinematic, atmospheric creative studio website built with React, TypeScript, Vite, Tailwind CSS, layered CSS, and Framer Motion.

Live site: https://echoin.ink

Echo in Ink is designed as a premium authored studio experience for immersive brand worlds, identity systems, digital atmospheres, creative systems, and emotionally intelligent product concepts.

Stack

* React 18
* TypeScript
* Vite
* React Router
* Tailwind CSS
* Layered CSS design system
* Framer Motion

Local development

Requirements

* Node.js 18+
* npm

Install

npm install

Run locally

npm run dev

The local development server URL will be shown in the terminal.

Production build

npm run build

Preview production build

npm run preview

Quality checks

Run the scripts available in package.json, typically:

npm run typecheck
npm run lint
npm run build

Project structure

src/
├── App.tsx                 # Route table, lazy-loaded pages, page transitions
├── main.tsx                # Application entry point
├── pages/                  # Route-level page composition
├── components/
│   ├── atmosphere/         # Ambient glows, grain, cursor, continuity effects
│   ├── cards/              # Reusable project, quote, system, and deliverable cards
│   ├── home/               # Home-page-specific sections and hero
│   ├── layout/             # Layout, PageShell, Container, Section, Grid
│   ├── lumo/               # Bespoke Lumo case-study experience
│   ├── navigation/         # Shared header and footer
│   ├── orbitals/           # SVG orbital motif library
│   ├── sections/           # Shared heroes, CTAs, process, offer, and content sections
│   ├── system/             # Page transitions and shared system behavior
│   ├── ui/                 # Buttons, labels, selects, headings, visual utilities
│   └── works/              # Work filtering and project-grid composition
├── data/                   # Structured content and route data
├── hooks/                  # Shared React hooks
├── lib/                    # Utilities and cinematic motion definitions
├── styles/
│   ├── 01-tokens/          # Colour, semantic, spacing, and motion tokens
│   ├── 02-base/            # Typography, layout, accessibility, foundations
│   ├── 03-components/      # Shared and page-level component styling
│   └── 04-utilities/       # Responsive and atmospheric utility rules
├── assets/                 # Brand, imagery, icons, project media, fonts
└── types/                  # Shared TypeScript types
public/                     # Public assets, favicons, fonts, static imagery

Key routes

Route	Purpose
/	Studio landing page
/studio	Studio positioning, process, and services
/works	Selected projects and creative explorations
/works/lumo	Bespoke Lumo case study
/systems	Creative systems and structured offerings
/worlds	Worldbuilding and immersive experience direction
/identity	Identity direction and visual systems
/sessions	Creative-direction sessions
/archive	Essays, notes, and editorial material
/contact	Enquiry route

Design system

The active visual system is centred around:

* Ink-black and midnight surfaces
* Moonlit lavender typography
* Blue, violet, and magenta atmospheric light
* Fraunces for editorial display moments
* Neue Montreal for structural copy and UI
* Wide-tracked labels and metadata
* Large negative space and slow editorial rhythm
* Soft image scrims, grain, vignettes, and broad glows
* Orbital SVG motifs as a recurring system language
* Restrained motion with reduced-motion support

Primary design-system files:

src/styles/01-tokens/tokens.css
src/styles/02-base/typography-system.css
src/styles/02-base/layout.css
src/styles/02-base/accessibility.css
src/styles/03-components/

Implementation principles

When making changes:

* Preserve the dark cinematic editorial direction.
* Prefer existing design tokens before introducing raw spacing, colour, or typography values.
* Reuse shared primitives before creating new one-off variants.
* Keep route-specific styling focused on intentional composition and art direction.
* Maintain dedicated mobile image crops where they already exist.
* Respect prefers-reduced-motion.
* Test at desktop, tablet, and mobile widths.
* Avoid generic SaaS styling, bright utility surfaces, excessive cards, or conventional agency-template patterns.

Before committing

Run:

npm run typecheck
npm run lint
npm run build

Also check:

* Desktop at approximately 1440px wide
* Mobile at approximately 390px wide
* No horizontal overflow
* Hero image crops remain intentional
* CTA and form states remain readable
* Keyboard focus and mobile navigation still work
* No console errors

Documentation

Useful repository documents:

WEBSITE_DESIGN_SYSTEM_AUDIT.md
WEBSITE_DESIGN_INCONSISTENCIES_REPORT.md
ECHO_IN_INK_UPDATED_BLUEPRINT.md

Security and repository hygiene

Do not commit:

node_modules/
dist/
build/
.env
.env.local
.env.production
API keys
deployment tokens
private customer data
database exports

Use .env.example for required environment-variable names without real credentials.