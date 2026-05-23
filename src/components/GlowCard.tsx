import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  image: string;
}

export default function GlowCard({ title, description, image }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group rounded-3xl overflow-hidden border border-white/5 bg-white/[0.03] backdrop-blur-xl"
    >
      {/* Top Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Soft glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="p-8">
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
