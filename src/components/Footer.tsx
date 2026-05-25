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
            MIDDLE SECTION — Navigation and metadata
            Enhanced visibility while maintaining restraint
            ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT.normal}
          transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.1 }}
          className="py-10 md:py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-start">
            {/* LEFT — Brand identity */}
            <div className="md:col-span-4">
              <span className="font-structural text-[11px] tracking-[0.24em] uppercase text-white/45 block mb-3">
                Echo in Ink
              </span>
              <p className="font-structural text-[12px] text-white/55 leading-[1.6] max-w-[220px]">
                Translating inner worlds into identities that hold their shape.
              </p>
            </div>

            {/* CENTER — Primary navigation */}
            <nav className="md:col-span-4 md:text-center">
              <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
                <Link to="/works" className="font-structural text-[11px] tracking-[0.12em] uppercase text-white/48 hover:text-white/78 transition-colors duration-400">
                  Works
                </Link>
                <Link to="/identity" className="font-structural text-[11px] tracking-[0.12em] uppercase text-white/48 hover:text-white/78 transition-colors duration-400">
                  Identity
                </Link>
                <Link to="/sessions" className="font-structural text-[11px] tracking-[0.12em] uppercase text-white/48 hover:text-white/78 transition-colors duration-400">
                  Sessions
                </Link>
                <Link to="/worlds" className="font-structural text-[11px] tracking-[0.12em] uppercase text-white/48 hover:text-white/78 transition-colors duration-400">
                  Worlds
                </Link>
              </div>
            </nav>

            {/* RIGHT — Contact and location */}
            <div className="md:col-span-4 md:text-right">
              <a
                href="mailto:hello@echoink.co"
                className="font-structural text-[11px] tracking-[0.12em] uppercase text-white/50 hover:text-white/82 transition-colors duration-400 block mb-2"
              >
                hello@echoink.co
              </a>
              <span className="font-structural text-[10px] tracking-[0.1em] uppercase text-white/38 block">
                Aotearoa New Zealand
              </span>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            BOTTOM SECTION — Copyright and quiet close
            The final fade to black — subtle but visible
            ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT.normal}
          transition={{ duration: DURATION.slower, ease: EASE_LUXURY, delay: 0.2 }}
          className="py-6 md:py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Copyright */}
            <span className="font-structural text-[10px] tracking-[0.1em] uppercase text-white/32">
              © 2025 Echo in Ink
            </span>

            {/* Quiet brand mark */}
            <span className="font-structural text-[10px] tracking-[0.16em] uppercase text-white/28">
              Est. MMXXV
            </span>
          </div>
        </motion.div>

        {/* Final breath — minimal */}
        <div className="h-6 md:h-8" />
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
