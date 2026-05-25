export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030617] px-6 lg:px-14 pt-24 pb-0">

      {/* atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-[10%] w-[500px] h-[500px] bg-violet-500/5 blur-[160px]" />
        <div className="absolute right-[5%] bottom-[0%] w-[420px] h-[420px] bg-blue-500/5 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-[1450px] mx-auto">

        {/* top */}
        <div className="grid lg:grid-cols-[2fr_1fr_1fr_1fr] gap-16 pb-20 border-b border-white/10">
          <div>
            <p className="uppercase tracking-[0.35em] text-violet-300/70 text-xs mb-8">
              Echo In Ink
            </p>

            <h2 className="font-serif text-4xl md:text-5xl leading-[0.95] mb-8">
              Building worlds
              <br />
              with clarity,
              <br />
              atmosphere
              <br />
              and intention.
            </h2>

            <p className="text-white/60 leading-relaxed max-w-md">
              Identity systems, digital experiences
              and cinematic brand worlds built with
              emotional intelligence and luminous restraint.
            </p>
          </div>

          <div>
            <h3 className="uppercase text-xs tracking-[0.28em] text-violet-300/70 mb-8">
              Navigation
            </h3>
            <ul className="space-y-5 text-white/65">
              <li><a href="/">Home</a></li>
              <li><a href="/studio">Studio</a></li>
              <li><a href="/works">Works</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-xs tracking-[0.28em] text-violet-300/70 mb-8">
              Services
            </h3>
            <ul className="space-y-5 text-white/65">
              <li><a href="/identity">Identity Translation</a></li>
              <li><a href="/sessions">Signal Sessions</a></li>
              <li><a href="/worlds">Creative Worlds</a></li>
              <li><a href="/lumo">LUMO</a></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-xs tracking-[0.28em] text-violet-300/70 mb-8">
              Connect
            </h3>
            <ul className="space-y-5 text-white/65">
              <li><a href="mailto:hello@echoinink.com">hello@echoinink.com</a></li>
              <li><a href="/">Instagram</a></li>
              <li><a href="/">LinkedIn</a></li>
              <li><a href="/contact">Start a Conversation</a></li>
            </ul>
          </div>
        </div>

        {/* bottom legal row */}
        <div className="pt-10 pb-16 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Echo In Ink. All rights reserved.
          </p>

          <div className="flex items-center gap-8 text-sm text-white/40">
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
            <a href="/">Credits</a>
          </div>
        </div>
      </div>

      {/* poetic strip from old footer */}
      <div className="border-t border-white/10">
        <div className="ei-container">
          <div className="flex items-end justify-between py-8 md:py-12">
            <span className="font-structural text-[10px] tracking-[0.25em] uppercase text-white/40">
              INK MEETS LIGHT.
            </span>
            <span className="font-structural text-[10px] tracking-[0.25em] uppercase text-white/40">
              EMOTIONS BECOME DESIGN.
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}
