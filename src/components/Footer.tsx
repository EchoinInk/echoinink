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
      {/* 
        ATMOSPHERIC LAYERS — Premium fade into darkness
        Multiple gradient layers create depth and cinematic quality
      */}
      
      {/* Deep violet glow from above — atmospheric bridge */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 120% 60% at 50% 0%, rgba(99,102,241,0.04) 0%, transparent 50%),
            radial-gradient(ellipse 80% 40% at 30% 20%, rgba(139,92,246,0.03) 0%, transparent 40%)
          `,
          filter: 'blur(100px)',
        }}
      />

      {/* Fade to deep black at bottom — cinematic dissolve */}
      <div
        className="absolute inset-x-0 bottom-0 h-[60%] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(5,5,10,0.4) 50%, rgba(3,3,8,0.9) 100%)',
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
          {/* Closing statement — poetic, memorable */}
          <p className="font-editorial text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] text-white/60 leading-[1.4] tracking-tight max-w-[32ch] mx-auto mb-10">
            Let the next world begin quietly.
          </p>

          {/* Contact CTA — subtle invitation */}
          <div className="flex items-center justify-center gap-6 md:gap-8">
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
            Restrained, elegant, functional
            ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT.normal}
          transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.1 }}
          className="py-10 md:py-14"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-start">
            {/* LEFT — Brand identity */}
            <div className="md:col-span-4">
              <span className="font-structural text-[10px] tracking-[0.28em] uppercase text-white/30 block mb-3">
                Echo In Ink
              </span>
              <p className="font-structural text-[11px] md:text-[12px] text-white/40 leading-[1.6] max-w-[220px]">
                Translating inner worlds into identities that hold their shape.
              </p>
            </div>

            {/* CENTER — Primary navigation */}
            <nav className="md:col-span-4 md:text-center">
              <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
                <Link to="/works" className="font-structural text-[10px] tracking-[0.14em] uppercase text-white/35 hover:text-white/60 transition-colors duration-400">
                  Works
                </Link>
                <Link to="/identity" className="font-structural text-[10px] tracking-[0.14em] uppercase text-white/35 hover:text-white/60 transition-colors duration-400">
                  Identity
                </Link>
                <Link to="/sessions" className="font-structural text-[10px] tracking-[0.14em] uppercase text-white/35 hover:text-white/60 transition-colors duration-400">
                  Sessions
                </Link>
                <Link to="/worlds" className="font-structural text-[10px] tracking-[0.14em] uppercase text-white/35 hover:text-white/60 transition-colors duration-400">
                  Worlds
                </Link>
              </div>
            </nav>

            {/* RIGHT — Contact and location */}
            <div className="md:col-span-4 md:text-right">
              <a 
                href="mailto:hello@echoink.co" 
                className="font-structural text-[10px] tracking-[0.14em] uppercase text-white/35 hover:text-white/60 transition-colors duration-400 block mb-3"
              >
                hello@echoink.co
              </a>
              <span className="font-structural text-[10px] tracking-[0.12em] uppercase text-white/25 block">
                Aotearoa New Zealand
              </span>
            </div>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            BOTTOM SECTION — Copyright and quiet close
            The final fade to black
            ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VIEWPORT.normal}
          transition={{ duration: DURATION.slower, ease: EASE_LUXURY, delay: 0.2 }}
          className="py-8 md:py-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <span className="font-structural text-[9px] tracking-[0.12em] uppercase text-white/20">
              © 2025 Echo in Ink
            </span>

            {/* Quiet brand mark */}
            <span className="font-structural text-[9px] tracking-[0.2em] uppercase text-white/15">
              Est. MMXXV
            </span>
          </div>
        </motion.div>

        {/* Final atmospheric breath — deep fade */}
        <div className="h-8 md:h-12" />
      </div>

      {/* Absolute bottom fade — complete dissolve */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(3,3,8,0.8) 60%, rgba(2,2,6,1) 100%)',
        }}
      />
    </footer>
  );
}
