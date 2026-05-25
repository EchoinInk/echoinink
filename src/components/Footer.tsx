import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DURATION, EASE_LUXURY } from '@/lib/motion-cinematic';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Single subtle veil — soft transition from above */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(5,7,16,0.3) 100%)',
        }}
      />

      {/* One faint radial glow — barely perceptible depth */}
      <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 50% at 50% 100%, rgba(99,102,241,0.02) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Content — compact and restrained */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        {/* Brand mark — small, quiet */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: DURATION.slow, ease: EASE_LUXURY }}
          className="mb-6"
        >
          <span className="font-structural text-[9px] tracking-[0.28em] uppercase text-white/25">
            Echo In Ink
          </span>
        </motion.div>

        {/* Muted line — short, not oversized */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.05 }}
          className="font-structural text-[11px] md:text-[12px] text-white/30 leading-[1.6] max-w-md mb-10"
        >
          Translating inner worlds into identities that hold their shape.
        </motion.p>

        {/* Navigation — compact row */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.1 }}
          className="flex flex-wrap gap-x-8 gap-y-2 mb-12"
        >
          <Link to="/" className="font-structural text-[10px] tracking-[0.16em] uppercase text-white/30 hover:text-white/50 transition-colors duration-300">
            Studio
          </Link>
          <Link to="/works" className="font-structural text-[10px] tracking-[0.16em] uppercase text-white/30 hover:text-white/50 transition-colors duration-300">
            Works
          </Link>
          <Link to="/identity" className="font-structural text-[10px] tracking-[0.16em] uppercase text-white/30 hover:text-white/50 transition-colors duration-300">
            Identity
          </Link>
          <Link to="/sessions" className="font-structural text-[10px] tracking-[0.16em] uppercase text-white/30 hover:text-white/50 transition-colors duration-300">
            Sessions
          </Link>
          <Link to="/worlds" className="font-structural text-[10px] tracking-[0.16em] uppercase text-white/30 hover:text-white/50 transition-colors duration-300">
            Worlds
          </Link>
          <a href="mailto:hello@echoink.co" className="font-structural text-[10px] tracking-[0.16em] uppercase text-white/30 hover:text-white/50 transition-colors duration-300">
            Contact
          </a>
        </motion.nav>

        {/* Bottom line — quiet ending */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: DURATION.slower, ease: EASE_LUXURY, delay: 0.15 }}
          className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <span className="font-structural text-[9px] tracking-[0.12em] uppercase text-white/20">
            © 2025 Echo in Ink
          </span>
          <span className="font-structural text-[9px] tracking-[0.12em] uppercase text-white/15">
            Aotearoa New Zealand
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
