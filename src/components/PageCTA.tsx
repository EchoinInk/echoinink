import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  fadeSoft, 
  driftUp, 
  staggerContainer,
  STAGGER,
  VIEWPORT 
} from '@/lib/motion-cinematic';
import { Button } from '@/components/Button';

type PageType = 'home' | 'sessions' | 'identity' | 'worlds' | 'works' | 'studio';

interface CTAConfig {
  primary: {
    label: string;
    to: string;
  };
  secondary: {
    label: string;
    to: string;
  };
  exploration: {
    label: string;
    to: string;
  };
}

const ctaConfigs: Record<PageType, CTAConfig> = {
  home: {
    primary: { label: 'Work With the Studio', to: '/contact' },
    secondary: { label: 'Book a Session', to: '/sessions' },
    exploration: { label: 'Explore the Works', to: '/works' },
  },
  sessions: {
    primary: { label: 'Book a Signal Session', to: '/contact' },
    secondary: { label: 'Explore Identity Translation', to: '/identity' },
    exploration: { label: 'Explore the Works', to: '/works' },
  },
  identity: {
    primary: { label: 'Begin Identity Translation', to: '/contact' },
    secondary: { label: 'Book a Signal Session', to: '/sessions' },
    exploration: { label: 'Explore Studio Systems', to: '/worlds' },
  },
  worlds: {
    primary: { label: 'Begin a Collaboration', to: '/contact' },
    secondary: { label: 'Explore Identity Translation', to: '/identity' },
    exploration: { label: 'Explore the Works', to: '/works' },
  },
  works: {
    primary: { label: 'Work With the Studio', to: '/contact' },
    secondary: { label: 'Book a Session', to: '/sessions' },
    exploration: { label: 'Begin Identity Translation', to: '/identity' },
  },
  studio: {
    primary: { label: 'Work With the Studio', to: '/contact' },
    secondary: { label: 'Book a Signal Session', to: '/sessions' },
    exploration: { label: 'Explore the Works', to: '/works' },
  },
};

interface PageCTAProps {
  page: PageType;
}

export function PageCTA({ page }: PageCTAProps) {
  const config = ctaConfigs[page];

  return (
    <section className="relative ei-section-pause overflow-hidden">
      {/* Atmospheric glow — reduced, subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 55% 65% at 50% 52%, rgba(99,102,241,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 ei-container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={staggerContainer(STAGGER.loose, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT.loose}
          >
            <motion.span 
              variants={driftUp}
              className="ei-eyebrow ei-text-space-xl block"
            >
              Continue
            </motion.span>

            {/* Primary Action */}
            <motion.div variants={fadeSoft} className="mb-8">
              <Button to={config.primary.to}>
                {config.primary.label}
              </Button>
            </motion.div>

            {/* Secondary Entry */}
            <motion.div variants={fadeSoft} className="mb-6">
              <Link
                to={config.secondary.to}
                className="ei-link"
              >
                {config.secondary.label} →
              </Link>
            </motion.div>

            {/* Exploration Layer */}
            <motion.div variants={fadeSoft}>
              <Link
                to={config.exploration.to}
                className="ei-link-subtle"
              >
                {config.exploration.label} →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
