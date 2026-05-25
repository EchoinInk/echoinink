import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

export function EmergingSystems() {
  return (
<section className="relative min-h-screen flex items-center px-6 lg:px-14 overflow-hidden">
      <Container>
       <div className="absolute inset-0 pointer-events-none">

        <div className="absolute right-[8%] top-[8%] w-[720px] h-[720px] rounded-full border border-violet-500/10" />

        <div className="absolute right-[14%] top-[14%] w-[480px] h-[480px] rounded-full border border-blue-500/10" />

        <div className="absolute right-[20%] top-[18%] w-[240px] h-[240px] rounded-full border border-fuchsia-400/20" />

      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-20 items-center w-full">

        <div>

          <p className="uppercase tracking-[0.35em] text-violet-300/70 text-xs mb-10">

            Creative Universe Building

          </p>

          <h1 className="font-serif text-[4rem] md:text-[6rem] leading-[0.92] mb-12">

            An immersive
            <br />
            world built
            <br />
            around your
            <br />
            vision.

          </h1>

          <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-12">

            Rare collaborations for creators and brands
            ready to build something remembered —
            felt — and returned to.

          </p>

          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-500 to-blue-500">

            Explore Worlds

          </button>

        </div>

        <div className="hidden lg:flex justify-center">

          <div className="relative w-[620px] h-[620px]">

            <div className="absolute inset-0 rounded-full border border-violet-400/10" />

            <div className="absolute inset-[10%] rounded-full border border-violet-400/15" />

            <div className="absolute inset-[22%] rounded-full bg-violet-500/10 blur-[120px]" />

          </div>

        </div>

      </div>
      </Container>
    </Section>
  );
}
