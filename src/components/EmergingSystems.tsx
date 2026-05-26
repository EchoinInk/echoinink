import { motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Link } from 'react-router-dom';
import GlowCard from '@/components/GlowCard';
import systemsImage from '@/assets/ei-systems-bg.png';
import vaultImage from '@/assets/ei-vault-bg.png';
import { 
  driftUp, 
  staggerContainer,
  STAGGER,
  VIEWPORT 
} from '@/lib/motion-cinematic';

export function EmergingSystems() {
  return (
    <Section spacing="sm" className="relative overflow-hidden">
      {/* Soft atmospheric continuation */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 40% at 50% 60%, rgba(30,200,255,0.02) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <Container>
        <motion.div
          variants={staggerContainer(STAGGER.loose, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT.normal}
          className="max-w-6xl mx-auto"
        >
          {/* Centered heading */}
          <motion.div variants={driftUp} className="text-center mb-6 md:mb-10">
            <span className="ei-eyebrow ei-text-space-md block">
              Worlds in Formation
            </span>
            <h2 className="ei-section-title whitespace-pre-line">
              {"Active archives and systems\nshaping the future."}
            </h2>
          </motion.div>

          {/* Horizontal cards */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-stretch justify-center">
            <motion.div variants={driftUp} className="flex-1">
              <Link to="/systems" className="block h-full">
                <GlowCard
                  title="Echo Systems"
                  description={`Intentional frameworks for \nbuilding identities, stories, and \ndigital worlds with cinematic \nclarity and creative precision.`}
                  image={systemsImage}
                  horizontal
                  className="h-full min-h-[200px]"
                />
              </Link>
            </motion.div>
            <motion.div variants={driftUp} className="flex-1">
              <Link to="/vault" className="block h-full">
                <GlowCard
                  title="Echo Vault"
                  description={`A curated archive of textures, \nreferences, and emotional \nenvironments for creators shaping \natmosphere with intention.`}
                  image={vaultImage}
                  horizontal
                  className="h-full min-h-[200px]"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}