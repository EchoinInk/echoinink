import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Link } from 'react-router-dom';
import GlowCard from '@/components/GlowCard';
import sessionsImage from '@/assets/ei-sessions-9x16.png';
import identityImage from '@/assets/ei-identity-9x16.png';
import worldsImage from '@/assets/Worlds.png';
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
        'Clarity before expression. Focused creative direction for moments of misalignment, evolution, or translation.',
      image: sessionsImage,
      glow: 'bg-gradient-to-br from-blue-600/[0.12] via-indigo-500/[0.08] to-transparent',
    },
    {
      to: '/identity',
      title: 'Identity',
      description:
        'Where inner worlds become coherent external form. Emotional, narrative, and visual translation for evolving brands.',
      image: identityImage,
      glow: 'bg-gradient-to-br from-fuchsia-600/[0.1] via-violet-500/[0.06] to-transparent',
    },
    {
      to: '/worlds',
      title: 'Worlds',
      description:
        'Identity extended into living systems. Immersive digital ecosystems designed for coherence and resonance.',
      image: worldsImage,
      glow: 'bg-gradient-to-br from-cyan-600/[0.1] via-blue-500/[0.06] to-transparent',
    },
  ];

  return (
    <Section spacing="xl" className="relative overflow-hidden py-24 md:py-32">
      {/* Soft atmospheric glow - integrated with surrounding sections */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 30%, rgba(79,70,229,0.06) 0%, rgba(99,102,241,0.03) 30%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Secondary blue bloom - upper area */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 30% at 50% 20%, rgba(59,130,246,0.04) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      
      {/* Subtle purple accent - lower right */}
      <div 
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[300px] pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(ellipse 40% 50% at center, rgba(139,92,246,0.04) 0%, transparent 70%)',
          filter: 'blur(80px)',
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
          <motion.div variants={driftUp} className="text-center mb-20 md:mb-28">
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
