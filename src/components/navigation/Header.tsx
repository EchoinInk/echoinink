import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { DURATION } from '@/lib/motion-cinematic';
import wordmark from "@/assets/brand/marks/echo-in-ink-wordmark.png";

const navItems = [
  { label: "Studio", href: "/studio" },
  { label: "Works", href: "/works" },
  { label: "Identity", href: "/identity" },
  { label: "Sessions", href: "/sessions" },
  { label: "Worlds", href: "/worlds" },
];

export function Header() {
  const { pathname } = useLocation();

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.slower, ease: 'easeOut', delay: 0.3 }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 lg:px-12 py-4 md:py-7"
    >
      {/* Refined background gradient for readability — stronger separation */}
      <div
        className="absolute inset-0 pointer-events-none backdrop-blur-[1px]"
        style={{
          background: 'linear-gradient(to bottom, rgb(11, 13, 42 / 0.78) 0%, rgb(11, 13, 42 / 0.42) 45%, transparent 100%)',
        }}
      />

      <nav className="relative flex items-center justify-between">
        {/* Wordmark — slightly more visible */}
        <Link to="/" className="shrink-0 group">
          <img
            src={wordmark}
            alt="Echo in Ink"
            className="h-3.5 md:h-4 w-auto opacity-75 group-hover:opacity-95 transition-opacity duration-500"
          />
        </Link>

        {/* Desktop Nav — increased confidence, reduced fragility */}
        <div className="hidden md:flex items-center gap-10 lg:gap-12">
          {/* Nav Links — refined typography */}
          <div className="flex gap-8 lg:gap-9">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-structural text-[11px] tracking-[0.16em] uppercase font-medium transition-colors duration-500 ${
                    active
                      ? "text-white/92"
                      : "text-white/72 hover:text-white/92"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Link
            to="/contact"
            className="ei-focus-rounded px-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.03] text-[10px] tracking-[0.18em] uppercase font-medium text-white/76 hover:text-white/92 hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-700"
          >
            Start a Conversation
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden font-structural text-[11px] tracking-[0.16em] uppercase font-medium text-white/72 hover:text-white/90 transition-colors duration-500 min-h-[44px] min-w-[60px] flex items-center justify-center"
          aria-label="Open navigation menu"
        >
          Menu
        </button>
      </nav>
    </motion.header>
  );
}
