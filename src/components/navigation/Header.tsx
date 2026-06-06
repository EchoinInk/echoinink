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
  { label: "Archive", href: "/archive" },
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

  <div className="flex gap-8 lg:gap-9">

    {navItems.map((item) => {

      const active = pathname === item.href;

      return (

        <Link

          key={item.label}

          to={item.href}

          className={`

            group relative pb-1.5

            font-structural text-[11px] tracking-[0.16em] uppercase font-medium

            transition-colors duration-500

            ${

              active

                ? "text-[rgb(var(--ei-halo-blue-rgb)/0.95)]"

                : "text-white/68 hover:text-white/95"

            }

          `}

        >

          {item.label}

          <span

            className={`

              pointer-events-none absolute left-0 -bottom-0.5 h-px

              rounded-full

              bg-[linear-gradient(90deg,rgb(var(--ei-halo-blue-rgb)/0.95),rgb(var(--ei-echo-magenta-rgb)/0.72))]

              shadow-[0_0_10px_rgb(var(--ei-halo-blue-rgb)/0.45)]

              transition-all duration-500 ease-out

              ${

                active

                  ? "w-full opacity-100"

                  : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"

              }

            `}

          />

        </Link>

      );

    })}

  </div>

  <Link

    to="/contact"

    className={`

      ei-focus-rounded

      rounded-full px-4 py-2

      border border-white/[0.12]

      bg-white/[0.035]

      text-[10px] tracking-[0.18em] uppercase font-medium

      text-white/78

      transition-all duration-700

      hover:text-white

      hover:bg-white/[0.07]

      hover:border-[rgb(var(--ei-halo-blue-rgb)/0.32)]

      hover:shadow-[0_0_24px_rgb(var(--ei-halo-blue-rgb)/0.12)]

    `}

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
