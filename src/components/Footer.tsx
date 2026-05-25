import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeSoft, driftUp, staggerContainer, STAGGER, VIEWPORT } from '@/lib/motion-cinematic';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Subtle top border */}
      <div 
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05) 50%, transparent)' }}
      />
      
      {/* Reduced atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-[5%] w-[400px] h-[400px] bg-violet-500/[0.02] blur-[140px]" />
        <div className="absolute right-[5%] bottom-[20%] w-[300px] h-[300px] bg-indigo-500/[0.015] blur-[120px]" />
      </div>

      <motion.div 
        className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 md:pt-24 pb-0"
        variants={staggerContainer(STAGGER.normal, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT.loose}
      >
        {/* Top content grid */}
        <div className="grid lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16 pb-16">
          {/* Brand column */}
          <motion.div variants={driftUp}>
            <span className="ei-eyebrow ei-text-space-lg block">
              Echo In Ink
            </span>

            <p className="ei-body-large max-w-sm">
              Translating inner worlds into coherent identity.
            </p>
          </motion.div>

          {/* Navigation column */}
          <motion.div variants={driftUp}>
            <h3 className="ei-eyebrow ei-text-space-md block">
              Navigate
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="ei-link">Studio</Link></li>
              <li><Link to="/works" className="ei-link">Works</Link></li>
              <li><Link to="/contact" className="ei-link">Begin</Link></li>
            </ul>
          </motion.div>

          {/* Services column */}
          <motion.div variants={driftUp}>
            <h3 className="ei-eyebrow ei-text-space-md block">
              Explore
            </h3>
            <ul className="space-y-3">
              <li><Link to="/identity" className="ei-link">Identity</Link></li>
              <li><Link to="/sessions" className="ei-link">Sessions</Link></li>
              <li><Link to="/worlds" className="ei-link">Worlds</Link></li>
            </ul>
          </motion.div>

          {/* Connect column */}
          <motion.div variants={driftUp}>
            <h3 className="ei-eyebrow ei-text-space-md block">
              Connect
            </h3>
            <ul className="space-y-3">
              <li><a href="mailto:hello@echoink.co" className="ei-link">hello@echoink.co</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom strip */}
        <motion.div 
          variants={fadeSoft}
          className="py-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <p className="ei-body-small">
            © 2025 Echo in Ink
          </p>
          <p className="ei-body-small">
            Aotearoa New Zealand
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
