// components/GlowCard.tsx

import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  image: string;
}

export default function GlowCard({
  title,
  description,
  image,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
    >
      <div className="absolute inset-0 opacity-40 group-hover:opacity-70 transition">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10">
        <h3 className="text-3xl font-light">{title}</h3>

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