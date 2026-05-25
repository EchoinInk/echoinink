import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_CINEMATIC, DURATION } from "@/lib/motion-cinematic";

interface Props {
  title: string;
  description: string;
  image: string;
  centered?: boolean;
  className?: string;
  horizontal?: boolean;
  imageAlt?: string;
}

export default function GlowCard({
  title,
  description,
  image,
  centered,
  className,
  horizontal,
  imageAlt,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative rounded-xl overflow-hidden transition-all duration-700",
        "bg-[#0a0c14]/80",
        "border border-white/[0.04]",
        "hover:border-white/[0.08]",
        horizontal ? "flex flex-row" : "flex flex-col",
        className
      )}
    >
      {/* Inner atmospheric glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.06) 0%, transparent 60%)',
        }}
      />
      
      {/* Subtle edge illumination */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.03)',
        }}
      />

      {horizontal ? (
        <>
          {/* CONTENT LEFT */}
          <div className="relative flex flex-col flex-1 p-8 text-left items-start z-10">
            <h3 className="ei-card-title">
              {title}
            </h3>
            <p className="ei-card-description mt-3 max-w-[44ch]">
              {description}
            </p>
            <span className="ei-cta-text mt-auto pt-6 pb-2 text-violet-300/60 group-hover:text-violet-300/80 transition-colors duration-500">
              Explore →
            </span>
          </div>

          {/* IMAGE RIGHT */}
          <div className="relative flex-1 overflow-hidden">
            {/* Image gradient overlay for seamless blend */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, #0a0c14 0%, transparent 15%, transparent 85%, #0a0c14 100%)',
                opacity: 0.4,
              }}
            />
            <img
              src={image}
              alt={imageAlt || title}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </>
      ) : (
        <>
          {/* VERTICAL IMAGE WITH OVERLAY TITLE */}
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            {/* Bottom gradient for text legibility */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(10,12,20,0.95) 0%, rgba(10,12,20,0.4) 40%, transparent 70%)',
              }}
            />
            
            {/* Soft edge vignette */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none opacity-40"
              style={{
                boxShadow: 'inset 0 -40px 60px -20px rgba(10,12,20,0.8)',
              }}
            />
            
            <img
              src={image}
              alt={imageAlt || title}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
            />

            {/* TITLE OVERLAY - positioned over image */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
              <h3 
                className="font-serif text-xl md:text-2xl font-light tracking-tight text-white/90"
                style={{
                  textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.3)',
                  letterSpacing: '-0.01em',
                }}
              >
                {title}
              </h3>
            </div>
          </div>

          {/* VERTICAL CONTENT */}
          <div className="relative flex flex-col flex-1 p-6 z-10">
            <p 
              className={cn(
                "text-sm leading-relaxed text-white/40",
                centered && "text-center mx-auto max-w-[40ch]"
              )}
              style={{ lineHeight: 1.7 }}
            >
              {description}
            </p>
            <span 
              className={cn(
                "mt-auto pt-5 text-[11px] font-medium tracking-[0.2em] uppercase text-white/30 group-hover:text-violet-300/60 transition-colors duration-500",
                centered && "text-center"
              )}
            >
              Explore →
            </span>
          </div>
        </>
      )}
    </motion.div>
  );
}
