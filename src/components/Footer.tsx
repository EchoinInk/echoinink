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
    <footer className="relative overflow-hidden">
      {/* Top boundary */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgb(var(--ei-ice-white-rgb) / 0.06) 30%, rgb(var(--ei-ice-white-rgb) / 0.08) 50%, rgb(var(--ei-ice-white-rgb) / 0.06) 70%, transparent 100%)",
        }}
      />

      {/* Atmospheric depth */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[50%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 0%, rgb(var(--ei-echo-magenta-rgb) / 0.035) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 ei-container max-w-[1400px]">
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
          className="pt-12 md:pt-16 pb-5"
        >
          {/* 4-column grid */}
<div className="grid grid-cols-2 md:grid-cols-[1.35fr_0.75fr_0.9fr_1.1fr] gap-10 md:gap-10 items-start">              {/* Col 1 — Brand */}
            <div className="col-span-2 md:col-span-1">
              <span className="font-structural text-[11px] tracking-[0.18em] uppercase text-white/75 block mb-3">
                Echo in Ink
              </span>
              <p className="font-structural text-[12px] leading-[1.7] text-white/60 max-w-[30ch] mb-4">
                Designing worlds that hold meaning, transform perception, and
                outlive trends.
              </p>
            </div>

            {/* Col 2 — Navigation */}
            <nav aria-label="Footer navigation">
              <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-white/60 block mb-4">
                Navigation
              </span>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-structural text-[12px] text-white/70 hover:text-white/90 transition-colors duration-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Col 3 — Connect */}
            <div>
              <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-white/60 block mb-4">
                Connect
              </span>
              <a
                href="mailto:hello@echoin.ink"
                className="font-structural text-[12px] text-white/70 hover:text-white/90 transition-colors duration-400 block mb-1.5"
              >
                hello@echoin.ink
              </a>
              <span className="font-structural text-[12px] text-white/68 block mb-5">
                Auckland, New Zealand
              </span>
              <div className="flex items-center gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] tracking-[0.14em] text-white/68 hover:text-white/82 transition-colors duration-400"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 4 — Atmospheric Intelligence */}
<div className="relative">
  <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-white/60 block mb-4">
    Atmospheric Intelligence
  </span>

  <div className="flex items-start justify-between gap-5">
   <p className="font-structural text-[12px] leading-[1.7] text-white/60 mb-4 max-w-[30ch]">
  Exploring the intersection of identity, emotion, and reflective
  technology.
</p>

    <div className="shrink-0 pt-0.5 opacity-70">
      <OrbitalVisual variant="uikit" size={52} />
    </div>
  </div>

  <Link
    to="/systems"
    className="group inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--ei-echo-magenta)]/70 hover:text-[var(--ei-echo-magenta)] transition-colors duration-400"
  >
    Learn more about our future systems
    <span className="group-hover:translate-x-0.5 transition-transform duration-400">
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
          className="py-5"
        >
          <div
            aria-hidden="true"
            className="w-full h-px mb-5"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgb(var(--ei-ice-white-rgb) / 0.04) 25%, rgb(var(--ei-ice-white-rgb) / 0.05) 50%, rgb(var(--ei-ice-white-rgb) / 0.04) 75%, transparent 100%)",
            }}
          />
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <span className="font-structural text-[10px] tracking-[0.1em] text-white/55">
              © 2025 Echo in Ink
            </span>
            <span className="font-structural text-[10px] tracking-[0.12em] uppercase text-white/32">
              Founded 2025
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}