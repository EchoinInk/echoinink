import { Link } from 'react-router-dom';
import balancedLogo from '@/assets/monogram-balanced.png';

const navItems = ['HOME', 'ABOUT', 'PORTFOLIO', 'EXPERIENCE', 'JOURNAL', 'CONTACT', 'MENU'];

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="ei-container">
        <nav className="flex items-center py-6 md:py-8">
          <img
            src={balancedLogo}
            alt="Echo in Ink"
            className="shrink-0 h-7 md:h-9"
            style={{ filter: 'drop-shadow(0 0 6px rgba(167, 139, 250, 0.3))' }}
          />
          <div className="flex-1 flex justify-center">
            <ul className="hidden md:flex items-center gap-8 lg:gap-10">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'HOME' ? '/' : '#'}
                    className="font-structural text-[11px] tracking-[0.2em] uppercase text-white/90 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button className="md:hidden shrink-0 font-structural text-[11px] tracking-[0.2em] uppercase text-white/90">
            MENU
          </button>
          <div className="hidden md:block shrink-0" style={{ width: '36px' }} />
        </nav>
      </div>
    </header>
  );
}
