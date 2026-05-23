import { Link, useLocation } from "react-router-dom";
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
    <nav className="absolute top-0 left-0 w-full z-50 px-10 py-8 flex items-center justify-between">
      {/* Wordmark */}
      <Link to="/" className="shrink-0">
        <img
          src={wordmark}
          alt="Echo in Ink"
          className="h-3 md:h-4 w-auto opacity-90"
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-10">
        {/* Nav Links */}
        <div className="flex gap-8 text-xs tracking-[0.25em] uppercase">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.label}
                to={item.href}
                className={`transition-colors ${
                  active ? "text-white" : "text-white/60 hover:text-white/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          to="/sessions"
          className="px-5 py-2 rounded-full border border-violet-400/40 bg-white/5 backdrop-blur-md text-[11px] tracking-[0.24em] uppercase text-white/80 hover:bg-white/10 transition"
        >
          Enter the Studio
        </Link>
      </div>

      {/* Mobile Menu */}
      <button
        className="md:hidden text-xs tracking-[0.25em] uppercase text-white/60"
        aria-label="Open navigation menu"
      >
        Menu
      </button>
    </nav>
  );
}