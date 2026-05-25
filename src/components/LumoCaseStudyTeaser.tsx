import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import lumocloudform from '@/assets/ei-lumofeatured-bg.png';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { 
  fadeSoft, 
  driftUp, 
  staggerContainer,
  STAGGER,
  VIEWPORT,
  EASE_CINEMATIC,
  DURATION 
} from '@/lib/motion-cinematic';

export function LumoCaseStudyTeaser() {
  return (
    <Section spacing="lg" className="ei-section-intimate overflow-hidden relative">
      {/* Atmospheric glow - reduced visibility */}
      <div className="absolute inset-0 ei-glow-violet opacity-30" />

      <Container>
        <motion.div
          variants={staggerContainer(STAGGER.normal, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
        >
          {/* Cinematic card - reduced border visibility */}
          <div className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl border border-white/[0.05] bg-white/[0.015]">
            {/* Background image */}
            <img
              src={lumocloudform}
              alt="Lumo Indigo Cloudform"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Sophisticated overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c18]/80 via-[#0a0c18]/50 to-transparent" />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

            {/* Content */}
            <div className="relative grid md:grid-cols-2 items-center min-h-[380px] p-10 md:p-16">
              {/* Left side text */}
              <div className="flex flex-col justify-center">
                <motion.span
                  variants={driftUp}
                  className="ei-eyebrow ei-text-space-md block"
                >
                  Featured Case
                </motion.span>

                <motion.h2
                  variants={driftUp}
                  className="font-editorial text-4xl md:text-5xl font-light leading-tight text-[#E8EAF6]/95"
                  style={{ letterSpacing: '-0.015em' }}
                >
                  LUMO
                </motion.h2>

                <motion.p
                  variants={driftUp}
                  className="ei-section-description mt-3 max-w-[42ch]"
                >
                  A world built for overwhelmed humans.
                </motion.p>

                <motion.p
                  variants={fadeSoft}
                  className="ei-body mt-4 max-w-[44ch]"
                >
An emotionally intelligent app shaped by an identity system built to calm cognitive noise through atmosphere, rhythm, and restraint — a gentle productivity companion designed for neurodivergent minds.                </motion.p>

                <motion.div variants={driftUp}>
                  <Link
                    to="/work/lumo"
                    className="ei-cta-text mt-8 inline-block text-violet-300/80 hover:text-violet-300 transition-colors duration-500"
                  >
                    View Case Study →
                  </Link>
                </motion.div>
              </div>

              {/* Right side empty (image serves as visual) */}
              <div className="hidden md:block" />
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}