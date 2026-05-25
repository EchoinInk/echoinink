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
  imageWrapperClass?: string;
}

export default function GlowCard({
  title,
  description,
  image,
  centered,
  className,
  horizontal,
  imageWrapperClass,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: DURATION.fast, ease: EASE_CINEMATIC }}
      className={cn(
        "group rounded-2xl overflow-hidden transition-all duration-500",
        "bg-[#0F1220] border border-white/[0.04]",
        "before:absolute before:inset-0 before:bg-white/[0.015] before:pointer-events-none",
        "hover:bg-white/[0.025] hover:border-white/[0.06]",
        horizontal ? "flex flex-row" : "flex flex-col",
        className
      )}
    >
      {horizontal ? (
        <>
          {/* CONTENT LEFT */}
          <div className="flex flex-col flex-1 p-8 text-left items-start">
            <h3 className="ei-card-title">
              {title}
            </h3>
            <p className="ei-card-description mt-3 max-w-[44ch]">
              {description}
            </p>
            <span className="ei-cta-text mt-auto pt-6 pb-2 text-violet-300/80 group-hover:text-violet-300 transition-colors duration-500">
              Explore →
            </span>
          </div>

          {/* IMAGE RIGHT */}
          <div className={cn("relative flex-1 overflow-hidden", imageWrapperClass)}>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </>
      ) : (
        <>
          {/* VERTICAL IMAGE WITH TITLE INSIDE */}
          <div
            className={cn(
              "relative w-full h-64 md:h-72 overflow-hidden bg-[#0F1220]"
            )}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />

            {/* TITLE OVERLAY */}
            <div className="absolute bottom-0 left-0 w-full p-6">
              <h3 className="ei-card-title text-white drop-shadow-lg">
                {title}
              </h3>
            </div>
          </div>

          {/* VERTICAL CONTENT */}
          <div className="flex flex-col flex-1 p-8">
            {/* title removed because it's now inside the image */}
            <p className={cn("ei-card-description mt-3", centered && "text-center mx-auto max-w-[40ch]")}>
              {description}
            </p>
            <span className={cn("ei-cta-text mt-auto pt-6 pb-2 text-violet-300/80 group-hover:text-violet-300 transition-colors duration-500", centered && "text-center")}>
              Explore →
            </span>
          </div>
        </>
      )}
    </motion.div>
  );
}