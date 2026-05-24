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
      style={{ height: "450px" }}
    >
      {/* IMAGE */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-1 p-0">
        <div className="flex flex-col flex-1 p-8">

          {/* TITLE */}
          <h2
            className={cn(
              "font-editorial text-[1.6rem] text-[#E8EAF6]/90 leading-[1.24] whitespace-pre-line",
              centered && "mx-auto"
            )}
            style={{ letterSpacing: "-0.012em" }}
          >
            {title}
          </h2>

          {/* DESCRIPTION — tightened spacing */}
          <p
            className={cn(
              "font-structural text-[13px] md:text-[14px] text-white/60 leading-[1.85] mt-3", whitespace-pre-line,
              centered ? "max-w-[42ch] mx-auto" : "max-w-[58ch]"
            )}
          >
            {description}
          </p>

          {/* EXPLORE — anchored lower */}
          <button
            className="mt-auto pt-6 pb-2 text-sm uppercase tracking-[0.2em] text-violet-300 text-left"
          >
            Explore →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
