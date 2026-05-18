import { Link, useLocation } from 'react-router-dom';
import balancedLogo from '@/assets/monogram-balanced.png';

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
            <img
              src={balancedLogo}
              alt="Echo in Ink"
              className="h-7 md:h-9"
              style={{ filter: 'drop-shadow(0 0 6px rgba(167, 139, 250, 0.3))' }}
            />
          </Link>
          <div className="flex-1 flex justify-center">
            <ul className="hidden md:flex items-center gap-8 lg:gap-10">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    className="font-structural text-[11px] tracking-[0.2em] uppercase transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0F1220] rounded-sm"
                    style={{
                      color:
                        pathname === item.href
                          ? 'rgba(255,255,255,0.95)'
                          : 'rgba(255,255,255,0.45)',
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
            className="md:hidden shrink-0 font-structural text-[11px] tracking-[0.2em] uppercase text-white/50 focus:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#0F1220]"
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
