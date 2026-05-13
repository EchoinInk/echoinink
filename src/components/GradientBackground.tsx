import { motion } from "framer-motion";
import watercolor from "@/assets/watercolor.png";

const GradientBackground = ({ variant = "default" }: { variant?: "default" | "soft" | "edge" }) => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* base atmosphere */}
      <div className="absolute inset-0 bg-atmosphere opacity-70" />
      {/* watercolor diffusion */}
      <motion.img
        src={watercolor}
        alt=""
        className="absolute -top-1/4 -right-1/4 w-[120%] max-w-none object-cover opacity-[0.18] mix-blend-multiply dark:mix-blend-screen dark:opacity-[0.22]"
        initial={{ opacity: 0 }}
        animate={{ opacity: variant === "edge" ? 0.22 : 0.18 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
      />
      {/* warm vignette */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at 50% 0%, transparent 40%, hsl(var(--background)) 85%)"
      }} />
    </div>
  );
};

export default GradientBackground;
