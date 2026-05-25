import { motion } from 'framer-motion';
import { fadeSoft, driftUp, staggerContainer, STAGGER, VIEWPORT } from '@/lib/motion-cinematic';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.05] bg-[#030617]">
      {/* Reduced atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-[5%] w-[400px] h-[400px] bg-violet-500/[0.025] blur-[140px]" />
        <div className="absolute right-[5%] bottom-[20%] w-[300px] h-[300px] bg-indigo-500/[0.02] blur-[120px]" />
      </div>

      <motion.div 
        className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 md:pt-24 pb-0"
        variants={staggerContainer(STAGGER.normal, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.loose}
      >
        {/* Top content grid */}
        <div className="grid lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16 pb-16 border-b border-white/[0.05]">
          {/* Brand column */}
          <motion.div variants={driftUp}>
            <span className="ei-eyebrow ei-text-space-lg block">
              Echo In Ink
            </span>

            <h2 className="ei-footer-heading ei-text-space-lg">
              Building worlds with clarity, atmosphere and intention.
            </h2>

            <p className="ei-body max-w-md">
              Identity systems, digital experiences and cinematic brand worlds built with emotional intelligence and luminous restraint.
            </p>
          </motion.div>

          {/* Navigation column */}
          <motion.div variants={driftUp}>
            <h3 className="ei-eyebrow ei-text-space-md block">
              Navigation
            </h3>
            <ul className="space-y-4">
              <li><a href="/" className="ei-body hover:text-white/70 transition-colors duration-300">Home</a></li>
              <li><a href="/studio" className="ei-body hover:text-white/70 transition-colors duration-300">Studio</a></li>
              <li><a href="/works" className="ei-body hover:text-white/70 transition-colors duration-300">Works</a></li>
              <li><a href="/contact" className="ei-body hover:text-white/70 transition-colors duration-300">Contact</a></li>
            </ul>
          </motion.div>

          {/* Services column */}
          <motion.div variants={driftUp}>
            <h3 className="ei-eyebrow ei-text-space-md block">
              Services
            </h3>
            <ul className="space-y-4">
              <li><a href="/identity" className="ei-body hover:text-white/70 transition-colors duration-300">Identity Translation</a></li>
              <li><a href="/sessions" className="ei-body hover:text-white/70 transition-colors duration-300">Signal Sessions</a></li>
              <li><a href="/worlds" className="ei-body hover:text-white/70 transition-colors duration-300">Creative Worlds</a></li>
              <li><a href="/lumo" className="ei-body hover:text-white/70 transition-colors duration-300">LUMO</a></li>
            </ul>
          </motion.div>

          {/* Connect column */}
          <motion.div variants={driftUp}>
            <h3 className="ei-eyebrow ei-text-space-md block">
              Connect
            </h3>
            <ul className="space-y-4">
              <li><a href="mailto:hello@echoinink.com" className="ei-body hover:text-white/70 transition-colors duration-300">hello@echoinink.com</a></li>
              <li><a href="/" className="ei-body hover:text-white/70 transition-colors duration-300">Instagram</a></li>
              <li><a href="/" className="ei-body hover:text-white/70 transition-colors duration-300">LinkedIn</a></li>
              <li><a href="/contact" className="ei-body hover:text-white/70 transition-colors duration-300">Start a Conversation</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom legal row */}
        <motion.div 
          variants={fadeSoft}
          className="pt-8 pb-12 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <p className="ei-body-small">
            © {new Date().getFullYear()} Echo In Ink. All rights reserved.
          </p>

          <div className="flex items-center gap-8 ei-body-small">
            <a href="/" className="hover:text-white/50 transition-colors duration-300">Privacy</a>
            <a href="/" className="hover:text-white/50 transition-colors duration-300">Terms</a>
            <a href="/" className="hover:text-white/50 transition-colors duration-300">Credits</a>
          </div>
        </motion.div>
      </motion.div>

      {/* Poetic closing strip */}
      <div className="border-t border-white/[0.04]">
        <div className="ei-container">
          <div className="flex items-end justify-between py-6 md:py-8">
            <span className="ei-body-small tracking-[0.2em] uppercase">
              INK MEETS LIGHT.
            </span>
            <span className="ei-body-small tracking-[0.2em] uppercase">
              EMOTIONS BECOME DESIGN.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
