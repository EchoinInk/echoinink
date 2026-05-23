import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Link } from 'react-router-dom';

export function Pathways() {
  return (
    <Section className="relative py-32 md:py-40">
      <Container>

        {/* Eyebrow */}
        <p className="font-structural uppercase text-[11px] tracking-[0.28em] text-white/30 mb-6">
          What We Design
        </p>

        {/* Main Heading */}
        <h2 className="font-editorial text-[2.6rem] md:text-[3rem] leading-[1.2] text-white/90 mb-4">
          We build worlds with intention and precision.
        </h2>

        {/* Subheading */}
        <p className="font-structural text-[15px] text-white/55 leading-[1.85] max-w-[60ch] mb-20">
          Explore our core areas of creative direction.
        </p>

        {/* Cards */}
        <div className="grid gap-20 md:gap-28">

          <div>
            <h3 className="font-editorial text-[1.6rem] md:text-[2rem] text-white/85 mb-4">
              Sessions
            </h3>
            <p className="font-structural text-[14px] md:text-[15px] text-white/50 leading-[1.85] max-w-[48ch] mb-4">
              Clarity before expression. Focused creative direction for moments of misalignment, evolution, or translation.
            </p>
            <Link
              to="/sessions"
              className="font-structural text-[11px] tracking-[0.26em] uppercase text-white/40 hover:text-white/70 transition-colors duration-700"
            >
              Explore Sessions →
            </Link>
          </div>

          <div>
            <h3 className="font-editorial text-[1.6rem] md:text-[2rem] text-white/85 mb-4">
              Identity
            </h3>
            <p className="font-structural text-[14px] md:text-[15px] text-white/50 leading-[1.85] max-w-[48ch] mb-4">
              Where inner worlds become coherent external form. Emotional, narrative, and visual translation for founders, studios, and evolving brands.
            </p>
            <Link
              to="/identity"
              className="font-structural text-[11px] tracking-[0.26em] uppercase text-white/40 hover:text-white/70 transition-colors duration-700"
            >
              Explore Identity →
            </Link>
          </div>

          <div>
            <h3 className="font-editorial text-[1.6rem] md:text-[2rem] text-white/85 mb-4">
              Worlds
            </h3>
            <p className="font-structural text-[14px] md:text-[15px] text-white/50 leading-[1.85] max-w-[48ch] mb-4">
              Identity extended into living systems. Immersive digital ecosystems designed for coherence, resonance, and long‑term evolution.
            </p>
            <Link
              to="/worlds"
              className="font-structural text-[11px] tracking-[0.26em] uppercase text-white/40 hover:text-white/70 transition-colors duration-700"
            >
              Explore Worlds →
            </Link>
          </div>

        </div>
      </Container>
    </Section>
  );
}
