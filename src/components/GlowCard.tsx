// components/GlowCard.tsx
import { cn } from '@/lib/utils';
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  image: string;
   eyebrow?: string;
  className?: string;
  centered?: boolean;
}

export default function GlowCard({
  title,
  description,
  image,
  centered,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.03] p-8 backdrop-blur-xl"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10">
        <h2
          className={cn(
            'font-editorial text-[2.1rem] text-[#E8EAF6]/90 leading-[1.24] whitespace-pre-line',
            centered && 'mx-auto'
          )}
          style={{ letterSpacing: '-0.012em' }}
        >{title}</h2>

        <p className="mt-4 text-white/60 leading-relaxed">
          {description}
        </p>

        <button className="mt-8 text-sm uppercase tracking-[0.2em] text-violet-300">
          Explore →
        </button>
      </div>
    </motion.div>
  );
}