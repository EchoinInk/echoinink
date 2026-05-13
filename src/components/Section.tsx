import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  width?: "narrow" | "reading" | "wide" | "full";
  id?: string;
}

const widths = {
  narrow: "max-w-2xl",
  reading: "max-w-[720px]",
  wide: "max-w-5xl",
  full: "max-w-7xl",
};

const Section = ({ children, className = "", width = "reading", id }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`${widths[width]} mx-auto px-6 md:px-12 py-24 md:py-36 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
