import { Link } from 'react-router-dom';

const navItems = ['HOME', 'ABOUT', 'PORTFOLIO', 'EXPERIENCE', 'JOURNAL', 'CONTACT', 'MENU'];

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="ei-container">
        <nav className="flex items-center justify-between py-6 md:py-8">
          <div className="font-structural text-sm tracking-widest uppercase text-white/80">
            Ei
          </div>
          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item === 'HOME' ? '/' : '#'}
                  className="font-structural text-[11px] tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <button className="md:hidden font-structural text-[11px] tracking-[0.2em] uppercase text-white/60">
            MENU
          </button>
        </nav>
      </div>
    </header>
  );
}
