import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Link } from 'react-router-dom';
import GlowCard from '@/components/GlowCard';
import sessionsImage from '@/assets/Sessions.png';
import identityImage from '@/assets/Identity.png';
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
    },
    {
      to: '/identity',
      title: 'Identity',
      description:
        'Where inner worlds become coherent external form. Emotional, narrative, and visual translation for evolving brands.',
      image: identityImage,
    },
    {
      to: '/worlds',
      title: 'Worlds',
      description:
        'Identity extended into living systems. Immersive digital ecosystems designed for coherence and resonance.',
      image: worldsImage,
    },
  ];

  return (
    <Section spacing="lg" className="ei-section-standard relative overflow-hidden">
      {/* Atmospheric depth - reduced for subtlety */}
      <div className="absolute inset-0 ei-glow-violet opacity-35" />

      <Container>
        <motion.div
          variants={staggerContainer(STAGGER.normal, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
        >
          {/* Section heading */}
          <motion.div variants={driftUp} className="max-w-2xl mb-16 md:mb-20">
            <span className="ei-eyebrow ei-text-space-md block">What We Design</span>
            <h2 className="ei-section-title whitespace-pre-line">
              {"We build worlds with\nintention and precision."}
            </h2>
            <p className="ei-section-description mt-6">
              Explore our core areas of creative direction.
            </p>
          </motion.div>

          {/* Pathways grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {pathways.map((pathway, i) => (
              <motion.div
                key={pathway.to}
                variants={driftUp}
                custom={i}
              >
                <Link to={pathway.to} className="block h-full">
                  <GlowCard
                    title={pathway.title}
                    description={pathway.description}
                    image={pathway.image}
                    className="h-full min-h-[420px]"
                    imageWrapperClass="relative bg-[#0F1220] before:absolute before:inset-0 before:bg-white/[0.015] before:mix-blend-lighten before:pointer-events-none"
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
