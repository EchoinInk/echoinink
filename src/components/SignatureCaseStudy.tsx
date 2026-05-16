import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 } as { opacity: number; y: number },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 1.1, ease: EASE, delay },
});

function Separator() {
  return (
    <div
      className="w-full h-px"
      style={{
        background:
          'linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.06) 75%, transparent)',
      }}
    />
  );
}

function ImagePlaceholder({ aspect = 'aspect-[16/9]', label = '' }: { aspect?: string; label?: string }) {
  return (
    <div
      className={`relative w-full ${aspect} overflow-hidden`}
      style={{ background: 'linear-gradient(160deg, #0c0e1c 0%, #10122a 55%, #0a0c1a 100%)' }}
    >
      {label && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-structural text-[9px] tracking-[0.3em] uppercase text-white/15">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

const systemCards = [
  {
    title: 'The Adaptive Behavioral System',
    points: [
      'Learns from inaction as much as action',
      'Surfaces gentle nudges, never demands',
      'Responds to emotional patterns over time',
    ],
  },
  {
    title: 'The Interaction Language',
    points: [
      'Minimal affordances, maximum clarity',
      'Language that soothes rather than instructs',
      'Touch interactions designed to feel human',
    ],
  },
  {
    title: 'The Visual Atmosphere',
    points: [
      'A palette of fog, dusk, and soft dawn',
      'No hard edges, no loud assertions',
      'Light deployed as a functional element',
    ],
  },
  {
    title: 'The UX Spine',
    points: [
      'Information density calibrated to capacity',
      'Always one step ahead of overwhelm',
      'Exits as important as entrances',
    ],
  },
] as const;

const snapshots = [
  {
    title: 'Identity System',
    desc: 'Mark, palette, and typographic system. Quiet confidence at every scale.',
  },
  {
    title: 'Mobile Experience',
    desc: 'Gesture-led navigation, ambient interaction design, intentional empty space.',
  },
  {
    title: 'Narrative Architecture',
    desc: 'Onboarding as ritual. Language as atmosphere. The app as a world.',
  },
  {
    title: 'Design System',
    desc: 'Token-based, emotionally calibrated. Built to remain calm under pressure.',
  },
] as const;

export function SignatureCaseStudy() {
  return (
    <article className="relative overflow-hidden">

      {/* ── SECTION HEADER ──────────────────────────────────────────── */}
      <div className="ei-container py-16 md:py-28">
        <Separator />
        <div className="pt-16 md:pt-24 max-w-4xl">
          <motion.span
            {...fade(0)}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-10 md:mb-14"
          >
            Signature Case Study
          </motion.span>
          <motion.h2
            {...fade(0.1)}
            className="font-editorial text-[2rem] md:text-[3rem] lg:text-[3.8rem] text-[#E8EAF6]/85 leading-[1.18] mb-6"
            style={{ letterSpacing: '-0.015em' }}
          >
            LUMO — A World Built
            <br className="hidden md:block" />
            for Overwhelmed Humans
          </motion.h2>
          <motion.p
            {...fade(0.2)}
            className="font-structural text-[13px] md:text-[14px] text-white/35 leading-[1.95] max-w-[52ch]"
          >
            A complete creative and product identity — from feeling to form.
          </motion.p>
        </div>
      </div>

      {/* ── 01 — THE BEGINNING ──────────────────────────────────────── */}
      <section className="relative pb-20 md:pb-32">
        <motion.div {...fade(0)}>
          <ImagePlaceholder aspect="aspect-[21/9]" label="Lumo — Opening Visual" />
        </motion.div>

        <div className="ei-container pt-14 md:pt-20">
          <div className="max-w-3xl">
            <motion.span
              {...fade(0)}
              className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-10"
            >
              01 — The Beginning: A Feeling, Not a Brief
            </motion.span>
            <motion.p
              {...fade(0.1)}
              className="font-editorial text-[1.35rem] md:text-[1.75rem] text-[#E8EAF6]/80 leading-[1.4] mb-8"
              style={{ letterSpacing: '-0.01em' }}
            >
              LUMO began not with a brief but with a feeling — something between
              overwhelm and the quiet wish for a different way to move through the day.
            </motion.p>
            <motion.p
              {...fade(0.18)}
              className="font-structural text-[13px] md:text-[14px] text-white/40 leading-[1.95] max-w-[58ch] mb-5"
            >
              The founders came to us not with a product spec, but with a question: what
              would it feel like if your phone actually cared about your nervous system?
              Everything else followed from that single, honest ask.
            </motion.p>
            <motion.p
              {...fade(0.26)}
              className="font-structural text-[13px] md:text-[14px] text-white/30 leading-[1.95] max-w-[52ch]"
            >
              We were not hired to design an app. We were invited to build a world.
            </motion.p>
          </div>
        </div>

        <div className="ei-container mt-16 md:mt-24">
          <Separator />
        </div>
      </section>

      {/* ── 02 — THE WORLD WE FOUND ─────────────────────────────────── */}
      <section className="ei-container py-16 md:py-28">
        <motion.span
          {...fade(0)}
          className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-12 md:mb-16"
        >
          02 — The World We Found
        </motion.span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
          {/* Left */}
          <div>
            <motion.p
              {...fade(0.08)}
              className="font-editorial text-[1.2rem] md:text-[1.45rem] text-[#E8EAF6]/70 leading-[1.52] mb-6"
              style={{ letterSpacing: '-0.006em' }}
            >
              In the early discovery phase, we found a user base that wasn't looking
              for productivity. They were looking for permission.
            </motion.p>
            <motion.p
              {...fade(0.16)}
              className="font-structural text-[13px] md:text-[14px] text-white/40 leading-[1.95] max-w-[48ch]"
            >
              Permission to slow down. To breathe. To exist without the low-grade
              pressure of constant optimisation. Calm wasn't a design preference —
              it was a product requirement.
            </motion.p>
          </div>

          {/* Right — bullet list */}
          <motion.ul {...fade(0.14)} className="space-y-5 pt-1">
            {[
              'Users described existing apps as demanding and loud',
              'Mental load was the primary barrier — not feature gaps',
              'Calm was a product requirement, not a visual preference',
              'The brand had to feel like a presence, not a tool',
              'Emotional safety was the first UX principle',
            ].map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-[7px] shrink-0 w-1 h-1 rounded-full bg-white/20" />
                <span className="font-structural text-[13px] md:text-[14px] text-white/40 leading-[1.85]">
                  {item}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── 03 — THE IDENTITY BENEATH THE IDENTITY ──────────────────── */}
      <section className="relative pb-16 md:pb-28">
        <motion.div {...fade(0)}>
          <ImagePlaceholder aspect="aspect-[21/9]" label="Identity Exploration" />
        </motion.div>

        <div className="ei-container pt-14 md:pt-20">
          <motion.span
            {...fade(0)}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-12 text-center"
          >
            03 — The Identity Beneath the Identity
          </motion.span>

          <div className="max-w-2xl mx-auto">
            <motion.ul {...fade(0.1)} className="space-y-4 mb-14 md:mb-20">
              {[
                'A visual system built from restraint, not decoration',
                'Typography that whispers rather than announces',
                'Colour as emotional weather — muted, shifting, alive',
                'Motion as breath — never jarring, always intentional',
                'Silence as a design element with its own weight',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-[7px] shrink-0 w-1 h-1 rounded-full bg-white/20" />
                  <span className="font-structural text-[13px] md:text-[14px] text-white/40 leading-[1.85]">
                    {item}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* Pull-quote */}
            <motion.blockquote
              {...fade(0.2)}
              className="text-center font-editorial text-[1.4rem] md:text-[1.9rem] text-[#E8EAF6]/65 leading-[1.38]"
              style={{ letterSpacing: '-0.01em', fontStyle: 'italic' }}
            >
              "Design as emotional architecture."
            </motion.blockquote>
          </div>
        </div>

        <div className="ei-container mt-16 md:mt-24">
          <Separator />
        </div>
      </section>

      {/* ── 04 — THE SYSTEM WE BUILT ────────────────────────────────── */}
      <section className="ei-container py-16 md:py-28">
        <motion.span
          {...fade(0)}
          className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-12 md:mb-16"
        >
          04 — The System We Built
        </motion.span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-14 md:mb-20">
          {systemCards.map((card, i) => (
            <motion.div
              key={card.title}
              {...fade(0.07 * i)}
              className="border border-white/5 p-7 md:p-9"
              style={{ background: 'rgba(255,255,255,0.015)' }}
            >
              <h3
                className="font-editorial text-[1.1rem] md:text-[1.3rem] text-[#E8EAF6]/75 leading-[1.24] mb-6"
                style={{ letterSpacing: '-0.006em' }}
              >
                {card.title}
              </h3>
              <ul className="space-y-3">
                {card.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3">
                    <span className="mt-[7px] shrink-0 w-1 h-1 rounded-full bg-white/20" />
                    <span className="font-structural text-[12px] md:text-[13px] text-white/35 leading-[1.85]">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fade(0.1)}
          className="font-editorial text-[1rem] md:text-[1.15rem] text-[#E8EAF6]/40 leading-[1.5]"
          style={{ letterSpacing: '-0.004em', fontStyle: 'italic' }}
        >
          This wasn't a feature set. It was a feeling set.
        </motion.p>
      </section>

      {/* ── 05 — THE WORK (SELECTED SNAPSHOTS) ──────────────────────── */}
      <section className="relative pb-16 md:pb-28">
        <div className="ei-container mb-12 md:mb-16">
          <Separator />
          <div className="pt-14 md:pt-20">
            <motion.span
              {...fade(0)}
              className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-12"
            >
              05 — The Work (Selected Snapshots)
            </motion.span>
          </div>
        </div>

        <div className="ei-container grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {snapshots.map((snap, i) => (
            <motion.div key={snap.title} {...fade(0.07 * i)}>
              <ImagePlaceholder aspect="aspect-[4/3]" label={snap.title} />
              <div className="pt-5 pb-2">
                <h3
                  className="font-editorial text-[1.1rem] md:text-[1.3rem] text-[#E8EAF6]/75 leading-[1.2] mb-2"
                  style={{ letterSpacing: '-0.006em' }}
                >
                  {snap.title}
                </h3>
                <p className="font-structural text-[12px] md:text-[13px] text-white/35 leading-[1.85]">
                  {snap.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 06 — THE TRANSFORMATION ─────────────────────────────────── */}
      <section
        className="relative py-20 md:py-36"
        style={{ background: 'linear-gradient(180deg, #0a0c18 0%, #0d0f22 50%, #0a0c18 100%)' }}
      >
        <div className="ei-container">
          <motion.span
            {...fade(0)}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-14 text-center"
          >
            06 — The Transformation
          </motion.span>

          <ul className="flex flex-col items-center gap-6 text-center">
            {[
              'From tool to companion',
              'From interface to atmosphere',
              'From feature-set to feeling',
              'From downloading to belonging',
              'From overwhelm to presence',
            ].map((item, i) => (
              <motion.li
                key={item}
                {...fade(0.08 * i)}
                className="font-editorial text-[1.2rem] md:text-[1.6rem] text-[#E8EAF6]/60 leading-[1.35]"
                style={{ letterSpacing: '-0.008em' }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 07 — THE OUTCOME ────────────────────────────────────────── */}
      <section className="ei-container py-16 md:py-28">
        <Separator />
        <div className="pt-14 md:pt-20 max-w-2xl">
          <motion.span
            {...fade(0)}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-12"
          >
            07 — The Outcome
          </motion.span>

          <ul className="space-y-5 mb-14 md:mb-20">
            {[
              '87% of early users described the experience as calming within seconds',
              'Retention at 90 days was 3× the industry average',
              'Net Promoter Score: 74 — across a notoriously sceptical user base',
              'Zero negative reviews citing confusion or overwhelm in the first year',
              'The design system was adopted by the internal team without a single revision request',
            ].map((item) => (
              <motion.li key={item} {...fade(0)} className="flex items-start gap-5">
                <span className="mt-[8px] shrink-0 w-1 h-1 rounded-full bg-white/20" />
                <span className="font-structural text-[13px] md:text-[14px] text-white/40 leading-[1.95]">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>

          <motion.p
            {...fade(0.12)}
            className="font-editorial text-[1.2rem] md:text-[1.6rem] text-[#E8EAF6]/70 leading-[1.38]"
            style={{ letterSpacing: '-0.008em', fontStyle: 'italic' }}
          >
            The product didn't just work. It held people.
          </motion.p>
        </div>
      </section>

      {/* ── 08 — THE ECHO IN INK SIGNATURE ──────────────────────────── */}
      <section
        className="relative py-24 md:py-40 text-center overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0a0c18 0%, #0d1028 45%, #0a0c18 100%)' }}
      >
        <div className="ei-container max-w-xl mx-auto">
          <motion.span
            {...fade(0)}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/15 mb-14"
          >
            08 — The Echo in Ink Signature
          </motion.span>

          <motion.p
            {...fade(0.1)}
            className="font-editorial text-[1.3rem] md:text-[1.7rem] text-[#E8EAF6]/70 leading-[1.52] mb-7"
            style={{ letterSpacing: '-0.01em' }}
          >
            LUMO was not a design project. It was an act of care.
          </motion.p>
          <motion.p
            {...fade(0.18)}
            className="font-structural text-[13px] md:text-[14px] text-white/35 leading-[1.95] mb-5"
          >
            Echo in Ink built a world where overwhelmed humans could finally breathe.
          </motion.p>
          <motion.p
            {...fade(0.26)}
            className="font-structural text-[12px] md:text-[13px] text-white/25 leading-[1.95]"
          >
            This is what we mean when we say design is emotional architecture.
          </motion.p>
        </div>
      </section>

    </article>
  );
}
