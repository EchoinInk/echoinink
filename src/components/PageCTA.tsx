import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EASE, DURATION, VIEWPORT, STAGGER } from '@/lib/motion';
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
    <section className="relative py-24 md:py-32">
      {/* Atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 65% at 50% 52%, rgba(99,102,241,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 ei-container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE }}
            className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20 mb-12"
          >
            Continue
          </motion.span>

          {/* Primary Action */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.slow, ease: EASE, delay: STAGGER.tight }}
            className="mb-8"
          >
            <Button to={config.primary.to}>
              {config.primary.label}
            </Button>
          </motion.div>

          {/* Secondary Entry */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE, delay: STAGGER.normal }}
            className="mb-6"
          >
            <Link
              to={config.secondary.to}
              className="font-structural text-[11px] tracking-[0.22em] uppercase text-white/35 hover:text-white/60 transition-colors duration-400"
            >
              {config.secondary.label} →
            </Link>
          </motion.div>

          {/* Exploration Layer */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT.normal}
            transition={{ duration: DURATION.normal, ease: EASE, delay: STAGGER.loose }}
          >
            <Link
              to={config.exploration.to}
              className="font-structural text-[10px] tracking-[0.22em] uppercase text-white/25 hover:text-white/45 transition-colors duration-400"
            >
              {config.exploration.label} →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
