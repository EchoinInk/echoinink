import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DURATION, EASE_LUXURY } from '@/lib/motion-cinematic';

export default function Footer() {
  return (
    <footer className="relative">
      {/* One continuous atmospheric fade — world dissolving downward */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, rgba(5,7,16,0.5) 0%, transparent 30%),
            radial-gradient(ellipse 100% 50% at 50% 0%, rgba(99,102,241,0.015) 0%, transparent 50%)
          `,
        }}
      />

      {/* Content — compact three-column epilogue */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-start">
          {/* LEFT — Brand essence */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.slow, ease: EASE_LUXURY }}
          >
            <span className="font-structural text-[9px] tracking-[0.28em] uppercase text-white/25 block mb-2">
              Echo In Ink
            </span>
            <p className="font-structural text-[10px] md:text-[11px] text-white/30 leading-[1.5] max-w-[180px]">
              Translating inner worlds into identities that hold their shape.
            </p>
          </motion.div>

          {/* CENTER — Compact navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.05 }}
            className="flex flex-wrap gap-x-6 gap-y-1 md:justify-center"
          >
            <Link to="/" className="font-structural text-[9px] tracking-[0.14em] uppercase text-white/30 hover:text-white/50 transition-colors duration-300">
              Studio
            </Link>
            <Link to="/works" className="font-structural text-[9px] tracking-[0.14em] uppercase text-white/30 hover:text-white/50 transition-colors duration-300">
              Works
            </Link>
            <Link to="/identity" className="font-structural text-[9px] tracking-[0.14em] uppercase text-white/30 hover:text-white/50 transition-colors duration-300">
              Identity
            </Link>
            <Link to="/sessions" className="font-structural text-[9px] tracking-[0.14em] uppercase text-white/30 hover:text-white/50 transition-colors duration-300">
              Sessions
            </Link>
            <Link to="/worlds" className="font-structural text-[9px] tracking-[0.14em] uppercase text-white/30 hover:text-white/50 transition-colors duration-300">
              Worlds
            </Link>
          </motion.nav>

          {/* RIGHT — Location metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.1 }}
            className="md:text-right"
          >
            <span className="font-structural text-[9px] tracking-[0.12em] uppercase text-white/20 block">
              Aotearoa New Zealand
            </span>
          </motion.div>
        </div>

        {/* BOTTOM — Copyright only */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: DURATION.slower, ease: EASE_LUXURY, delay: 0.15 }}
          className="mt-8 pt-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}
        >
          <span className="font-structural text-[8px] tracking-[0.1em] uppercase text-white/15">
            © 2025 Echo in Ink
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
