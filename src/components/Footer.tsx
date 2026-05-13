import { Link } from "react-router-dom";
import monogram from "../assets/monogram.png";

const Footer = () => {
  return (
    <footer className="relative mt-32 pt-20 pb-10 px-6 md:px-10">
      <div className="hairline mb-20" />
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img src={monogram} alt="" className="w-10 h-10" />
            <span className="font-serif-display text-lg">Echo in Ink</span>
          </Link>
          <p className="mt-6 text-sm text-foreground/60 max-w-xs leading-relaxed">
            A small studio for thoughtful digital work. Breathing room for creative ideas.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-5">Pages</p>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li><Link to="/work" className="hover:text-foreground transition">Selected work</Link></li>
            <li><Link to="/process" className="hover:text-foreground transition">Process</Link></li>
            <li><Link to="/studio" className="hover:text-foreground transition">About the studio</Link></li>
            <li><Link to="/contact" className="hover:text-foreground transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Elsewhere</p>
          <ul className="space-y-3 text-sm text-foreground/70">
            <li><a href="mailto:alex@echoin.ink" className="hover:text-foreground transition">alex@echoin.ink</a></li>
            <li><a href="#" className="hover:text-foreground transition">Read.cv</a></li>
            <li><a href="#" className="hover:text-foreground transition">Are.na</a></li>
            <li><a href="#" className="hover:text-foreground transition">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 flex flex-col md:flex-row justify-between gap-3 text-xs text-foreground/45">
        <p>© {new Date().getFullYear()} Echo in Ink. Made with quiet attention.</p>
        <p className="italic font-serif-display">Where ink meets light.</p>
      </div>
    </footer>
  );
};

export default Footer;
