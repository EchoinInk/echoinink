import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  image: string;
  centered?: boolean;
}

export default function GlowCard({ title, description, image, centered }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group flex flex-col rounded-3xl overflow-hidden border border-white/5 bg-white/[0.03] backdrop-blur-xl"
      style={{ height: "520px" }} // ← FIXED HEIGHT, adjust as needed
    >
      {/* IMAGE — flush, no padding */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT — no padding on card, padding only here */}
      <div className="flex flex-col flex-1 p-0">
        {/* Inner content wrapper with padding */}
        <div className="flex flex-col flex-1 p-8">
          <h3 className="text-3xl font-light">{title}</h3>

<p
    className={cn(
      'font-structural text-[15px] md:text-[16px] text-white/60 leading-[1.85]',
      centered ? 'max-w-[42ch] mx-auto' : 'max-w-[58ch]'
    )}
    style={{ marginTop: 'var(--ei-space-48)' }}
  >            {description}
          </p>

          <button
            className="mt-8 text-sm uppercase tracking-[0.2em] text-violet-300 text-left"
          >
            Explore →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
