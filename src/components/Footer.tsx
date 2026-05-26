import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  atmosphericFade,
  EASE_LUXURY,
  DURATION,
  VIEWPORT,
} from '@/system/motion/cinematic';

// ═══════════════════════════════════════════════════════════════
// FOOTER — Cinematic Closing System
// The final frame. Quiet, intentional, resolved.
// Not a utility dump — an atmospheric epilogue.
// ═══════════════════════════════════════════════════════════════

const navLinks = [
  { label: 'Works', href: '/works' },
  { label: 'Identity', href: '/identity' },
  { label: 'Sessions', href: '/sessions' },
  { label: 'Worlds', href: '/worlds' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* ── ATMOSPHERIC GROUNDING ─────────────────────────────── */}
      {/* Soft radial glow behind the brand */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[60%] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 0%, rgba(99,102,241,0.045) 0%, rgba(139,92,246,0.02) 50%, transparent 75%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Deep tonal gradient from surface to ink */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(8,10,18,0.6) 0%, rgba(5,7,14,0.85) 50%, rgba(3,5,12,1) 100%)',
        }}
      />

      {/* Faint top boundary */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.08) 80%, transparent 100%)',
        }}
      />

      {/* ── CONTENT ────────────────────────────────────────────── */}
      <div className="relative z-10 ei-container max-w-[1400px]">
        {/* Main footer block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          variants={atmosphericFade}
          transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.1 }}
          className="pt-14 md:pt-16 pb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
            {/* LEFT — Brand + closing line */}
            <div className="md:col-span-5">
              <span className="font-structural text-[11px] tracking-[0.16em] uppercase text-white/70 block mb-4">
                Echo in Ink
              </span>
              <p className="font-editorial text-[1.05rem] md:text-[1.15rem] text-white/60 leading-[1.5] max-w-[28ch] italic">
                Let the next world begin quietly.
              </p>
            </div>

            {/* CENTER — Navigation */}
            <nav
              aria-label="Footer navigation"
              className="md:col-span-4 md:text-center"
            >
              <span className="font-structural text-[9px] tracking-[0.22em] uppercase text-white/40 block mb-4">
                Navigate
              </span>
              <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="ei-link-distinguished font-structural text-[11px] tracking-[0.14em] uppercase text-white/65 hover:text-white/90 transition-colors duration-500 py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* RIGHT — Contact + Location */}
            <div className="md:col-span-3 md:text-right">
              <span className="font-structural text-[9px] tracking-[0.22em] uppercase text-white/40 block mb-4">
                Connect
              </span>
              <a
                href="mailto:hello@echoin.ink"
                className="ei-link-distinguished font-structural text-[11px] tracking-[0.14em] uppercase text-white/80 hover:text-white transition-colors duration-500 block mb-2 py-1"
              >
                hello@echoin.ink
              </a>
              <span className="font-structural text-[11px] text-white/50">
                Aotearoa New Zealand
              </span>
            </div>
          </div>
        </motion.div>

        {/* Bottom row — quiet meta */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          variants={atmosphericFade}
          transition={{ duration: DURATION.slower, ease: EASE_LUXURY, delay: 0.2 }}
          className="py-5"
        >
          {/* Restrained separator */}
          <div
            aria-hidden="true"
            className="w-full h-px mb-5"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 20%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.04) 80%, transparent 100%)',
            }}
          />

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <span className="font-structural text-[10px] tracking-[0.1em] uppercase text-white/40">
              © 2025 Echo in Ink Studio
            </span>
            <span className="font-structural text-[10px] tracking-[0.14em] uppercase text-white/40">
              Founded MMXXV
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
