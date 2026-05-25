import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { fadeSoft, STAGGER, VIEWPORT } from '@/lib/motion-cinematic';
import wordmark from "@/assets/echo-in-ink-wordmark.png";

const navItems = [
  { label: "Studio", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Identity", href: "/identity" },
  { label: "Sessions", href: "/sessions" },
  { label: "Worlds", href: "/worlds" },
];

export function Header() {
  const { pathname } = useLocation();

  return (
    <motion.header 
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-6 md:py-8"
    >
      {/* Background gradient for readability */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(5,7,16,0.8) 0%, rgba(5,7,16,0.4) 50%, transparent 100%)',
        }}
      />
      
      <nav className="relative flex items-center justify-between">
        {/* Wordmark */}
        <Link to="/" className="shrink-0 group">
          <img
            src={wordmark}
            alt="Echo in Ink"
            className="h-3 md:h-4 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {/* Nav Links */}
          <div className="flex gap-8">
            {navItems.map((item, i) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`ei-nav-text transition-colors duration-400 ${
                    active 
                      ? "text-white/90" 
                      : "text-white/50 hover:text-white/75"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA — refined */}
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-[10px] tracking-[0.24em] uppercase text-white/70 hover:text-white/90 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-500"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden ei-nav-text text-white/50 hover:text-white/75 transition-colors"
          aria-label="Open navigation menu"
        >
          Menu
        </button>
      </nav>
    </motion.header>
  );
}
