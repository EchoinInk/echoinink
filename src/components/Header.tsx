import { Link, useLocation } from 'react-router-dom';
import balancedLogo from '@/assets/monogram-balanced.png';
import wordmark from '@/assets/echo-in-ink-wordmark.png';


const navItems = [
  { label: 'STUDIO', href: '/' },
  { label: 'WORKS', href: '/works' },
  { label: 'IDENTITY', href: '/identity' },
  { label: 'SESSIONS', href: '/sessions' },
  { label: 'WORLDS', href: '/worlds' },
];

export function Header() {
  const { pathname } = useLocation();

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="ei-container">
        <nav className="flex items-center py-6 md:py-8">
          <Link to="/" className="shrink-0">
            <Link to="/" className="shrink-0">
  <img
    src={wordmark}
    alt="Echo in Ink"
    className="h-2 md:h-3 lg:h-4 w-auto"
  />
</Link>

          </Link>
          <div className="flex-1 flex justify-end">
            <ul className="hidden md:flex items-center gap-8 lg:gap-10">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    className="font-structural text-[11px] tracking-[0.24em] uppercase transition-all duration-500 relative focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#0F1220] rounded-sm"
                    style={{
                      color:
                        pathname === item.href
                          ? 'rgba(255,255,255,0.95)'
                          : 'rgba(255,255,255,0.55)',
                    }}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <span className="absolute -bottom-1 left-0 right-0 h-px bg-white/60" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button 
            className="md:hidden shrink-0 font-structural text-[11px] tracking-[0.24em] uppercase text-white/60 focus:text-white/85 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#0F1220]"
            aria-label="Open navigation menu"
            aria-expanded="false"
          >
            MENU
          </button>
          <div className="hidden md:block shrink-0" style={{ width: '36px' }} />
        </nav>
      </div>
    </header>
  );
}
