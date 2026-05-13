import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import monogram from "@/assets/monogram.png";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled ? "backdrop-blur-md bg-background/60" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={monogram} alt="Echo in Ink" className="w-8 h-8 object-contain transition-transform duration-700 group-hover:scale-105" />
          <span className="font-serif-display text-base tracking-tight">Echo in Ink</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition-colors duration-500 ${
                    isActive ? "text-foreground" : "text-foreground/55 hover:text-foreground"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="hidden md:inline-block text-sm tracking-wide text-foreground/70 hover:text-foreground transition">
          Say hello →
        </Link>
      </nav>
      <div className="md:hidden px-6 pb-4 flex gap-5 text-sm overflow-x-auto">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === "/"}
            className={({ isActive }) => `whitespace-nowrap ${isActive ? "text-foreground" : "text-foreground/55"}`}>
            {l.label}
          </NavLink>
        ))}
      </div>
      <div className="hairline" />
      <div className="sr-only">Current path: {location.pathname}</div>
    </motion.header>
  );
};

export default Nav;
