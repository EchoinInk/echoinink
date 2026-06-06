import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { DURATION } from "@/lib/motion-cinematic";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.slower, ease: "easeOut", delay: 0.3 }}
        className="fixed left-0 top-0 z-50 w-full px-6 py-4 md:px-10 md:py-7 lg:px-12"
      >
        <div
          className="pointer-events-none absolute inset-0 backdrop-blur-[1px]"
          style={{
            background:
              "linear-gradient(to bottom, rgb(11 13 42 / 0.78) 0%, rgb(11 13 42 / 0.42) 45%, transparent 100%)",
          }}
        />

        <nav className="relative flex items-center justify-between">
          <Link to="/" className="group shrink-0" onClick={closeMenu}>
            <img
              src={wordmark}
              alt="Echo in Ink"
              className="h-3.5 w-auto opacity-75 transition-opacity duration-500 group-hover:opacity-95 md:h-4"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-10 md:flex lg:gap-12">
            <div className="flex gap-8 lg:gap-9">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`
                      group relative pb-1.5
                      font-structural text-[11px] font-medium uppercase tracking-[0.16em]
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
                        pointer-events-none absolute -bottom-0.5 left-0 h-px rounded-full
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
              className="
                ei-focus-rounded rounded-full border border-white/[0.12]
                bg-white/[0.035] px-4 py-2
                text-[10px] font-medium uppercase tracking-[0.18em]
                text-white/78 transition-all duration-700
                hover:border-[rgb(var(--ei-halo-blue-rgb)/0.32)]
                hover:bg-white/[0.07] hover:text-white
                hover:shadow-[0_0_24px_rgb(var(--ei-halo-blue-rgb)/0.12)]
              "
            >
              Start a Conversation
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            className="
              flex min-h-[44px] min-w-[60px] items-center justify-center
              font-structural text-[11px] font-medium uppercase tracking-[0.16em]
              text-white/78 transition-colors duration-500 hover:text-white md:hidden
            "
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
className="
  fixed left-0 right-0 top-0 z-40
  max-h-[82vh] overflow-y-auto
  rounded-b-[28px]
  border-b border-white/[0.1]
  bg-[rgb(var(--ei-void-rgb)/0.96)]
  shadow-[0_32px_120px_rgb(0_0_0/0.58)]
  backdrop-blur-xl
  md:hidden
"          >
            {/* Atmosphere */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 50% at 72% 18%, rgb(var(--ei-violet-rgb) / 0.18) 0%, transparent 62%), radial-gradient(ellipse 60% 42% at 22% 82%, rgb(var(--ei-halo-blue-rgb) / 0.12) 0%, transparent 64%)",
              }}
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgb(var(--ei-void-rgb) / 0.72) 0%, rgb(var(--ei-void-rgb) / 0.94) 100%)",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 12, filter: "blur(8px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
className="relative z-10 flex flex-col px-6 pb-8 pt-24"
            >
              <span className="mb-8 font-structural text-[10px] uppercase tracking-[0.28em] text-white/38">
                Navigation
              </span>

              <div className="flex flex-col">
                {navItems.map((item, index) => {
                  const active = pathname === item.href;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.08 + index * 0.045,
                      }}
                    >
                      <Link
                        to={item.href}
                        onClick={closeMenu}
                        className={`
                          group relative flex items-center justify-between
                          border-b border-white/[0.07] py-5
                          font-editorial text-[2rem] leading-none tracking-[-0.035em]
                          transition-colors duration-500
                          ${
                            active
                              ? "text-[rgb(var(--ei-halo-blue-rgb)/0.96)]"
                              : "text-white/82 hover:text-white"
                          }
                        `}
                      >
                        <span>{item.label}</span>

                        <span
                          className={`
                            font-structural text-[0.7rem] uppercase tracking-[0.2em]
                            transition-all duration-500
                            ${
                              active
                                ? "text-[rgb(var(--ei-halo-blue-rgb)/0.78)]"
                                : "text-white/28 group-hover:translate-x-1 group-hover:text-white/54"
                            }
                          `}
                        >
                          →
                        </span>

                        <span
                          className={`
                            pointer-events-none absolute bottom-[-1px] left-0 h-px
                            bg-[linear-gradient(90deg,rgb(var(--ei-halo-blue-rgb)/0.95),rgb(var(--ei-echo-magenta-rgb)/0.64))]
                            shadow-[0_0_12px_rgb(var(--ei-halo-blue-rgb)/0.38)]
                            transition-all duration-500
                            ${active ? "w-full opacity-100" : "w-0 opacity-0"}
                          `}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-auto pt-10">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="
                    inline-flex min-h-[48px] w-full items-center justify-center rounded-full
                    border border-[rgb(var(--ei-halo-blue-rgb)/0.26)]
                    bg-[linear-gradient(to_bottom,rgb(var(--ei-midnight-rgb)/0.72),rgb(var(--ei-void-rgb)/0.92))]
                    px-6 py-4
                    font-structural text-[10px] font-medium uppercase tracking-[0.2em]
                    text-white/88
                    shadow-[inset_0_1px_0_rgb(var(--ei-ice-white-rgb)/0.08),0_0_28px_rgb(var(--ei-halo-blue-rgb)/0.09)]
                    transition-all duration-500
                    hover:border-[rgb(var(--ei-halo-blue-rgb)/0.42)]
                    hover:text-white
                  "
                >
                  Start a Conversation
                </Link>

                <p className="mt-5 max-w-[32ch] font-structural text-[0.75rem] leading-[1.7] text-white/42">
                  Designing worlds that hold meaning, atmosphere, and emotional intelligence.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}