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
// The final frame of the film. Quiet, intentional, resolved.
// Not a utility dump — an atmospheric epilogue.
// ═══════════════════════════════════════════════════════════════

const navLinks = [
  { label: 'Works', href: '/works' },
  { label: 'Identity', href: '/identity' },
  { label: 'Sessions', href: '/sessions' },
  { label: 'Worlds', href: '/worlds' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* ATMOSPHERIC BASE — Subtle indigo wash */}
      <div className="ei-glow-page" />

      {/* Bottom dissolve — world fading to black */}
      <div className="ei-gradient-ink absolute inset-x-0 bottom-0 h-[60%]" />

      {/* Content — composed, grounded, resolved */}
      <div className="relative z-10 ei-container max-w-[1400px]">
        {/* TOP BLOCK — Primary footer content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          variants={atmosphericFade}
          transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.1 }}
          className="pt-16 md:pt-20 pb-10 md:pb-14"
        >
          {/* Atmospheric separator */}
          <div className="ei-divider-atmospheric mb-10 md:mb-14" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
            {/* LEFT — Brand identity */}
            <div className="md:col-span-5">
              <span className="text-structural block text-space-sm">
                Echo in Ink
              </span>
              <p className="text-atmospheric max-w-[280px]">
                Design studio translating inner worlds into identities that hold their shape.
              </p>
            </div>

            {/* CENTER — Primary navigation */}
            <nav className="md:col-span-4 md:text-center">
              <span className="text-whisper-uppercase block text-space-md">
                Navigate
              </span>
              <div className="flex flex-wrap gap-x-8 gap-y-3 md:justify-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="link-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* RIGHT — Contact */}
            <div className="md:col-span-3 md:text-right">
              <span className="text-whisper-uppercase block text-space-md">
                Connect
              </span>
              <a
                href="mailto:hello@echoink.co"
                className="link-primary block mb-2"
              >
                hello@echoink.co
              </a>
              <span className="text-whisper block">
                Aotearoa New Zealand
              </span>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM BLOCK — Closing composition */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          variants={atmosphericFade}
          transition={{ duration: DURATION.slower, ease: EASE_LUXURY, delay: 0.2 }}
          className="py-8 md:py-10"
        >
          {/* Closing separator — quieter than the top */}
          <div className="ei-divider-deep mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright — grounded presence */}
            <span className="text-whisper uppercase tracking-[0.1em]">
              © 2025 Echo in Ink Studio
            </span>

            {/* Brand mark */}
            <span className="text-whisper uppercase tracking-[0.14em]">
              Founded MMXXV
            </span>
          </div>
        </motion.div>

        {/* Intentional breathing room before the absolute close */}
        <div className="h-6 md:h-8" />
      </div>

      {/* Final edge dissolve */}
      <div className="ei-fade-to-ink absolute inset-x-0 bottom-0 h-20" />
    </footer>
  );
}
