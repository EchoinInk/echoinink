import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { OrbitalVisual } from "@/components/ui/OrbitalVisual";
import {
  atmosphericFade,
  EASE_LUXURY,
  DURATION,
  VIEWPORT,
} from "@/system/motion/cinematic";

const navLinks = [
  { label: "Studio", href: "/studio" },
  { label: "Systems", href: "/systems" },
  { label: "Work", href: "/works" },
  { label: "Lumo", href: "/works/lumo" },
  { label: "About", href: "/studio" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "IG", href: "https://instagram.com" },
  { label: "LN", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pb-0">
      {/* Top boundary */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgb(var(--ei-ice-white-rgb) / 0.06) 30%, rgb(var(--ei-ice-white-rgb) / 0.08) 50%, rgb(var(--ei-ice-white-rgb) / 0.06) 70%, transparent 100%)",
        }}
      />

      {/* Atmospheric depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[50%] w-[50%] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 0%, rgb(113 7 234 / 0.035) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 ei-container max-w-[1220px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          variants={atmosphericFade}
          transition={{
            duration: DURATION.slow,
            ease: EASE_LUXURY,
            delay: 0.1,
          }}
          className="pt-10 pb-0 md:pt-10"
        >
          <div className="grid grid-cols-2 items-start gap-8 md:grid-cols-[1.05fr_0.95fr_0.85fr_1.1fr] md:gap-8 lg:gap-10">
            {/* Col 1 — Brand */}
            <div className="col-span-2 md:col-span-1">
              <span className="mb-3 block font-structural text-[11px] uppercase tracking-[0.18em] text-white/75">
                Echo in Ink
              </span>

              <p className="max-w-[31ch] font-structural text-[12px] leading-[1.7] text-white/60">
                Building the kind of worlds brands grow into, not out of —
                intentional, enduring, and unmistakably theirs.
              </p>
            </div>

            {/* Col 2 — Navigation */}
            <nav aria-label="Footer navigation">
              <span className="mb-4 block font-mono text-[9px] uppercase tracking-[0.22em] text-white/60">
                Navigation
              </span>

              <ul className="grid grid-cols-2 gap-x-7 gap-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-structural text-[12px] text-white/70 transition-colors duration-400 hover:text-white/90"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Col 3 — Connect */}
            <div>
              <span className="mb-4 block font-mono text-[9px] uppercase tracking-[0.22em] text-white/60">
                Connect
              </span>

              <a
                href="mailto:hello@echoin.ink"
                className="mb-1.5 block font-structural text-[12px] text-white/70 transition-colors duration-400 hover:text-white/90"
              >
                hello@echoin.ink
              </a>

              <span className="mb-5 block font-structural text-[12px] text-white/68">
                Auckland, New Zealand
              </span>

              <div className="flex items-center gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] tracking-[0.14em] text-white/68 transition-colors duration-400 hover:text-white/82"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 4 — Atmospheric Intelligence */}
            <div className="relative">
              <span className="mb-4 block font-mono text-[9px] uppercase tracking-[0.22em] text-white/60">
                Atmospheric Intelligence
              </span>

              <div className="flex items-start justify-between gap-5">
                <p className="mb-4 max-w-[32ch] font-structural text-[12px] leading-[1.7] text-white/60">
                  Exploring how identity, emotion, and reflective technology
                  shape the next generation of creative systems — and the
                  brands bold enough to build with them.
                </p>

                <div className="shrink-0 pt-0.5 opacity-70">
                  <OrbitalVisual variant="uikit" size={44} />
                </div>
              </div>

              <Link
                to="/systems"
                className="group inline-flex max-w-[34ch] items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ei-violet)]/70 transition-colors duration-400 hover:text-[var(--ei-violet)]"
              >
                <span>Learn more about our future systems</span>
                <span className="shrink-0 transition-transform duration-400 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          variants={atmosphericFade}
          transition={{
            duration: DURATION.slower,
            ease: EASE_LUXURY,
            delay: 0.2,
          }}
          className="pt-3 pb-2"
        >
          <div
            aria-hidden="true"
            className="mb-5 h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgb(var(--ei-ice-white-rgb) / 0.04) 25%, rgb(var(--ei-ice-white-rgb) / 0.05) 50%, rgb(var(--ei-ice-white-rgb) / 0.04) 75%, transparent 100%)",
            }}
          />

          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <span className="font-structural text-[10px] tracking-[0.1em] text-white/55">
              © 2025 Echo in Ink
            </span>

            <span className="font-structural text-[10px] uppercase tracking-[0.12em] text-white/32">
              Founded 2025
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}