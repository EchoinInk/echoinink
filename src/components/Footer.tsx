import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/Button';
import { DURATION, EASE_LUXURY, VIEWPORT } from '@/lib/motion-cinematic';

// ═══════════════════════════════════════════════════════════════
// FOOTER — Cinematic conclusion
// The final frame of the film, not a utility dump
// Strong emotional ending with atmospheric fade into black
// ═══════════════════════════════════════════════════════════════

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* ATMOSPHERIC LAYER — Simplified premium fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 100% 50% at 50% 0%, rgba(99,102,241,0.035) 0%, transparent 50%)
          `,
          filter: 'blur(80px)',
        }}
      />

      {/* Bottom dissolve — single gradient */}
      <div
        className="absolute inset-x-0 bottom-0 h-[50%] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(4,4,10,0.6) 100%)',
        }}
      />

      {/* Content — elegant vertical structure */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* ═══════════════════════════════════════════════════════════════
            TOP SECTION — Final atmospheric statement
            Emotional anchor before the quiet close
            ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT.normal}
          transition={{ duration: DURATION.slower, ease: EASE_LUXURY }}
          className="pt-20 md:pt-32 pb-16 md:pb-24 text-center"
        >
          {/* Closing statement — poetic, memorable — THE FOCAL POINT */}
          <p className="font-editorial text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] text-white/65 leading-[1.4] tracking-tight max-w-[32ch] mx-auto mb-12">
            Let the next world begin quietly.
          </p>

          {/* Contact CTA — clearer invitation */}
          <div className="flex items-center justify-center gap-6 md:gap-10">
            <Button to="/contact" variant="primary">
              Begin a conversation
            </Button>
            <Button to="/works" variant="tertiary">
              View selected works
            </Button>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            MIDDLE SECTION — Confident navigation and grounded metadata
            Clear hierarchy, intentional spacing, trustworthy presence
            ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT.normal}
          transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.1 }}
          className="py-12 md:py-14"
        >
          {/* Atmospheric separator */}
          <div
            className="w-full h-px mb-10 md:mb-12"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.1) 20%, rgba(99,102,241,0.08) 50%, rgba(139,92,246,0.1) 80%, transparent 100%)',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
            {/* LEFT — Brand identity with clearer positioning */}
            <div className="md:col-span-4">
              <span className="font-structural text-[12px] tracking-[0.2em] uppercase text-white/52 block mb-3">
                Echo in Ink
              </span>
              <p className="font-structural text-[13px] text-white/62 leading-[1.65] max-w-[240px]">
                Design studio translating inner worlds into identities that hold their shape.
              </p>
            </div>

            {/* CENTER — Primary navigation with improved confidence */}
            <nav className="md:col-span-4 md:text-center">
              <span className="font-structural text-[10px] tracking-[0.2em] uppercase text-white/35 block mb-4 md:mb-5">
                Navigate
              </span>
              <div className="flex flex-wrap gap-x-8 gap-y-3 md:justify-center">
                <Link to="/works" className="font-structural text-[12px] tracking-[0.1em] uppercase text-white/55 hover:text-white/85 transition-colors duration-400">
                  Works
                </Link>
                <Link to="/identity" className="font-structural text-[12px] tracking-[0.1em] uppercase text-white/55 hover:text-white/85 transition-colors duration-400">
                  Identity
                </Link>
                <Link to="/sessions" className="font-structural text-[12px] tracking-[0.1em] uppercase text-white/55 hover:text-white/85 transition-colors duration-400">
                  Sessions
                </Link>
                <Link to="/worlds" className="font-structural text-[12px] tracking-[0.1em] uppercase text-white/55 hover:text-white/85 transition-colors duration-400">
                  Worlds
                </Link>
              </div>
            </nav>

            {/* RIGHT — Contact with enhanced visibility */}
            <div className="md:col-span-4 md:text-right">
              <span className="font-structural text-[10px] tracking-[0.2em] uppercase text-white/35 block mb-4 md:mb-5">
                Connect
              </span>
              <a
                href="mailto:hello@echoink.co"
                className="font-structural text-[12px] tracking-[0.1em] uppercase text-white/58 hover:text-white/90 transition-colors duration-400 block mb-2"
              >
                hello@echoink.co
              </a>
              <span className="font-structural text-[11px] tracking-[0.08em] text-white/42 block">
                Aotearoa New Zealand
              </span>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            BOTTOM SECTION — Confident closing composition
            Emotionally resolved, not visually disappearing
            ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT.normal}
          transition={{ duration: DURATION.slower, ease: EASE_LUXURY, delay: 0.2 }}
          className="py-8 md:py-10"
        >
          {/* Closing separator */}
          <div
            className="w-full h-px mb-8"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.06) 30%, rgba(139,92,246,0.06) 70%, transparent 100%)',
            }}
          />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright — grounded presence */}
            <span className="font-structural text-[11px] tracking-[0.1em] uppercase text-white/42">
              © 2025 Echo in Ink Studio
            </span>

            {/* Brand mark with subtle gravitas */}
            <span className="font-structural text-[11px] tracking-[0.14em] uppercase text-white/35">
              Founded MMXXV
            </span>
          </div>
        </motion.div>

        {/* Final breath — intentional space before the close */}
        <div className="h-8 md:h-10" />
      </div>

      {/* Bottom dissolve — complete fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(3,3,8,0.7) 100%)',
        }}
      />
    </footer>
  );
}
