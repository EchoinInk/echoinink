import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  image: string;
  glow?: string;
  className?: string;
  horizontal?: boolean;
}

export default function GlowCard({
  title,
  description,
  image,
  glow,
  className,
  horizontal,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-[28px]",
        "border border-white/[0.06]",
        horizontal ? "min-h-[200px] md:min-h-[240px]" : "min-h-[480px] md:min-h-[520px]",
        "bg-[#070B1A]",
        className
      )}
    >
      {horizontal ? (
        <>
          {/* HORIZONTAL LAYOUT */}
          <div className="flex flex-col md:flex-row h-full">
            {/* CONTENT LEFT */}
            <div className="relative flex flex-col flex-1 p-8 text-left items-start z-10 bg-[#070B1A]">
              <h3 className="font-serif text-xl md:text-2xl font-light tracking-tight text-white/90">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-white/50 mt-3 max-w-[44ch]">
                {description}
              </p>
              <span className="mt-auto pt-6 text-[11px] uppercase tracking-[0.2em] text-white/40 group-hover:text-violet-300/60 transition-colors duration-500">
                Explore →
              </span>
            </div>

            {/* IMAGE RIGHT */}
            <div className="relative flex-1 overflow-hidden min-h-[200px]">
              <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070B1A] via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* VERTICAL LAYOUT - full bleed image */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
          />

          {/* DARK CINEMATIC OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#060816]/40 to-[#050816]/95" />

          {/* ATMOSPHERIC GLOW */}
          {glow && <div className={cn("absolute inset-0 opacity-60", glow)} />}

          {/* SOFT VIGNETTE */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.5)_100%)]" />

          {/* SUBTLE EDGE SOFTENING */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.04)' }}
          />

          {/* CONTENT - positioned at bottom of card */}
          <div className="absolute inset-x-0 bottom-0 z-10 px-8 md:px-10 pb-10 md:pb-12 pt-24">
            <div className="space-y-4">
              <h3
                className="font-serif text-[1.75rem] md:text-[2rem] font-light leading-[1.1] tracking-tight text-white/95"
                style={{ letterSpacing: '-0.02em' }}
              >
                {title}
              </h3>

              <p className="max-w-[32ch] text-[14px] pt-6 leading-[1.8] text-white/60 whitespace-pre-line">
                {description}
              </p>

              <span className="block pt-8 text-[11px] uppercase tracking-[0.28em] text-white/50 transition-colors duration-500 group-hover:text-white/80">
                Explore →
              </span>
            </div>
          </div>
        </>
      )}

    </motion.div>
  );
}
