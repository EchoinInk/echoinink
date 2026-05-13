import { motion } from "framer-motion";
import watercolor from "@/assets/watercolor.png";

const GradientBackground = ({ variant = "default" }: { variant?: "default" | "soft" | "edge" }) => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* base atmosphere — soft luminous wash */}
      <div className="absolute inset-0 bg-atmosphere opacity-60" />

      {/* layered watercolor diffusions — multiple drifting plates */}
      <motion.img
        src={watercolor}
        alt=""
        className="absolute -top-[20%] -right-[15%] w-[110%] max-w-none object-cover opacity-[0.15] mix-blend-multiply dark:mix-blend-screen dark:opacity-[0.15]"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: variant === "edge" ? 0.18 : 0.15, scale: 1 }}
        transition={{ duration: 4.2, ease: "easeOut" }}
      />
      <motion.img
        src={watercolor}
        alt=""
        className="absolute top-[35%] -left-[25%] w-[120%] max-w-none object-cover opacity-[0.10] mix-blend-multiply dark:mix-blend-screen dark:opacity-[0.12] rotate-180"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.10 }}
        transition={{ duration: 5.0, ease: "easeOut", delay: 0.8 }}
      />
      <motion.img
        src={watercolor}
        alt=""
        className="absolute bottom-[-10%] right-[-10%] w-[90%] max-w-none object-cover opacity-[0.08] mix-blend-multiply dark:mix-blend-screen dark:opacity-[0.11]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 5.8, ease: "easeOut", delay: 1.2 }}
      />

      {/* gentle luminous bloom near top */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% -6%, hsl(var(--grad-pink) / 0.12), transparent 65%)",
        }}
      />

      {/* warm edge vignette to hold the page together */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 65%, hsl(var(--background) / 0.94) 100%)",
        }}
      />

      {/* paper grain — handcrafted feel */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
};

export default GradientBackground;
