import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { epilogueFade, blurEmergenceSlow, dissolveReveal, EASE_LUXURY, DURATION } from '@/lib/motion-cinematic';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════
          ATMOSPHERIC FADE TRANSITION
          Soft darkness veil dissolving from above
          ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(5,7,16,0.4) 40%, rgba(5,7,16,0.7) 100%)',
        }}
      />

      {/* Subtle radial depth — world receding into darkness */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central depth point */}
        <div
          className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(3,5,12,0.5) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        {/* Faint violet accent — like a distant memory */}
        <motion.div
          className="absolute left-[20%] top-[30%] w-[300px] h-[300px]"
          animate={{
            opacity: [0.015, 0.025, 0.015],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: DURATION.ambient * 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
          }}
          style={{
            background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(168,85,247,0.03) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Distant indigo — even fainter */}
        <motion.div
          className="absolute right-[15%] top-[40%] w-[250px] h-[250px]"
          animate={{
            opacity: [0.01, 0.02, 0.01],
          }}
          transition={{
            duration: DURATION.ambient * 2.5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'mirror',
            delay: 1,
          }}
          style={{
            background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(99,102,241,0.025) 0%, transparent 70%)',
            filter: 'blur(70px)',
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          EPILOGUE CONTENT
          Reduced column structure, more atmospheric
          ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 md:pt-32 pb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Top section — brand and essence statement */}
        <motion.div
          variants={epilogueFade}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <span className="font-structural text-[10px] tracking-[0.24em] uppercase text-white/30 block mb-4">
            Echo In Ink
          </span>
          <p className="font-editorial text-[1.1rem] md:text-[1.25rem] text-white/40 leading-[1.65] italic">
            "Translating inner worlds into identities that can hold their shape in the world."
          </p>
        </motion.div>

        {/* Navigation — reduced to essential pathways */}
        <motion.div
          variants={dissolveReveal}
          className="flex flex-wrap gap-x-10 gap-y-4 mb-16 md:mb-20"
        >
          <Link
            to="/"
            className="font-structural text-[11px] tracking-[0.16em] uppercase text-white/35 hover:text-white/60 transition-colors duration-500"
          >
            Studio
          </Link>
          <Link
            to="/works"
            className="font-structural text-[11px] tracking-[0.16em] uppercase text-white/35 hover:text-white/60 transition-colors duration-500"
          >
            Works
          </Link>
          <Link
            to="/identity"
            className="font-structural text-[11px] tracking-[0.16em] uppercase text-white/35 hover:text-white/60 transition-colors duration-500"
          >
            Identity
          </Link>
          <Link
            to="/sessions"
            className="font-structural text-[11px] tracking-[0.16em] uppercase text-white/35 hover:text-white/60 transition-colors duration-500"
          >
            Sessions
          </Link>
          <Link
            to="/worlds"
            className="font-structural text-[11px] tracking-[0.16em] uppercase text-white/35 hover:text-white/60 transition-colors duration-500"
          >
            Worlds
          </Link>
          <a
            href="mailto:hello@echoink.co"
            className="font-structural text-[11px] tracking-[0.16em] uppercase text-white/35 hover:text-white/60 transition-colors duration-500"
          >
            Contact
          </a>
        </motion.div>

        {/* Bottom strip — dissolving into darkness */}
        <motion.div
          variants={blurEmergenceSlow}
          className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}
        >
          <p className="font-structural text-[10px] tracking-[0.12em] uppercase text-white/25">
            © 2025 Echo in Ink
          </p>
          <p className="font-structural text-[10px] tracking-[0.12em] uppercase text-white/20">
            Aotearoa New Zealand
          </p>
        </motion.div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════
          FINAL DISSOLUTION
          Deep darkness at the very bottom — like the world disappearing
          ═══════════════════════════════════════════════════════════════ */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(3,5,12,0.9) 0%, rgba(5,7,16,0.5) 50%, transparent 100%)',
        }}
      />
    </footer>
  );
}
