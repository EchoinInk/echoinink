import { motion } from 'framer-motion';
import { EchoCard } from '@/components/ui/EchoCard';
import { driftUp, staggerContainer, STAGGER, VIEWPORT } from '@/lib/motion-cinematic';

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  duration?: string;
}

interface PricingTiersProps {
  tiers: PricingTier[];
}

export function PricingTiers({ tiers }: PricingTiersProps) {
  return (
    <motion.div
      variants={staggerContainer(STAGGER.loose, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT.normal}
      className="grid gap-5 md:grid-cols-2 md:gap-6"
    >
      {tiers.map((tier, index) => (
        <motion.div
          key={tier.name}
          variants={driftUp}
          transition={{ delay: index * 0.06 }}
        >
          <EchoCard variant="feature" padding="none" className="p-6 md:p-8">
            <h3 className="ei-type-card-title">{tier.name}</h3>
            {tier.duration && (
              <p className="mt-2 ei-type-meta">{tier.duration}</p>
            )}
            <p className="mt-4 font-editorial text-[1.5rem] text-[var(--ei-text-primary)]">{tier.price}</p>
            <p className="mt-4 ei-type-body-small">{tier.description}</p>
          </EchoCard>
        </motion.div>
      ))}
    </motion.div>
  );
}
