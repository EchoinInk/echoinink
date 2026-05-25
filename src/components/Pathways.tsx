import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Link } from 'react-router-dom';
import GlowCard from '@/components/GlowCard';
import sessionsImage from '@/assets/ei-sessions-9x16.png';
import identityImage from '@/assets/ei-identity-9x16.png';
import worldsImage from '@/assets/ei-worlds-9x16.png';
import { 
  driftUp, 
  staggerContainer,
  STAGGER,
  VIEWPORT 
} from '@/lib/motion-cinematic';

export function Pathways() {
  const pathways = [
    {
      to: '/sessions',
      title: 'Sessions',
      description:
        'Focused creative guidance for moments of transition, misalignment, or becoming. A quiet space to clarify what wants to emerge.',
      image: sessionsImage,
      glow: 'bg-gradient-to-br from-blue-600/[0.12] via-indigo-500/[0.08] to-transparent',
    },
    {
      to: '/identity',
      title: 'Identity',
      description:
        'Emotional, narrative, and visual systems for brands in evolution. Inner meaning translated into a coherent, enduring external form.',
      image: identityImage,
      glow: 'bg-gradient-to-br from-fuchsia-600/[0.1] via-violet-500/[0.06] to-transparent',
    },
    {
      to: '/worlds',
      title: 'Worlds',
      description:
        'Immersive digital environments shaped around atmosphere, coherence, and resonance. Identity expanded into a living experience.',
      image: worldsImage,
      glow: 'bg-gradient-to-br from-cyan-600/[0.1] via-blue-500/[0.06] to-transparent',
    },
  ];

  return (
    <Section spacing="md" className="relative overflow-hidden">
      {/* Unified atmospheric layer - continuous with adjacent sections */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 30% at 50% 20%, rgba(99,102,241,0.03) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 70% 80%, rgba(139,92,246,0.02) 0%, transparent 60%)
          `,
          filter: 'blur(60px)',
        }}
      />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer(STAGGER.loose, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          className="max-w-6xl mx-auto"
        >
          {/* Section header - elegant and restrained */}
          <motion.div variants={driftUp} className="text-center mb-12 md:mb-16">
            <span 
              className="block text-[10px] font-medium tracking-[0.3em] uppercase text-white/20 mb-6"
            >
              What We Design
            </span>
            <h2 
              className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] font-light tracking-tight text-white/85 leading-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              We build worlds with
              <br />
              intention and precision.
            </h2>
          </motion.div>

          {/* Pathways grid - full-bleed cinematic panels */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {pathways.map((pathway) => (
              <motion.div
                key={pathway.to}
                variants={driftUp}
                className="h-full"
              >
                <Link to={pathway.to} className="block h-full">
                  <GlowCard
                    title={pathway.title}
                    description={pathway.description}
                    image={pathway.image}
                    glow={pathway.glow}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
