export function CtaOrbitalBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <svg
        className="absolute left-1/2 top-[54%] h-[240px] w-[1650px] -translate-x-1/2 -translate-y-1/2 md:h-[260px] md:w-[1850px]"
        viewBox="0 0 1600 320"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id="cta-orbital-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(var(--ei-halo-blue-rgb))" stopOpacity="0.24" />
            <stop offset="42%" stopColor="rgb(var(--ei-violet-rgb))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(var(--ei-midnight-rgb))" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="cta-orbital-node-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(var(--ei-soft-neon-rgb))" stopOpacity="0.44" />
            <stop offset="48%" stopColor="rgb(var(--ei-violet-rgb))" stopOpacity="0.16" />
            <stop offset="100%" stopColor="rgb(var(--ei-violet-rgb))" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="cta-orbital-line" x1="240" y1="0" x2="1360" y2="0">
            <stop offset="0%" stopColor="rgb(var(--ei-violet-rgb))" stopOpacity="0" />
            <stop offset="26%" stopColor="rgb(var(--ei-violet-rgb))" stopOpacity="0.12" />
            <stop offset="50%" stopColor="rgb(var(--ei-halo-blue-rgb))" stopOpacity="0.22" />
            <stop offset="74%" stopColor="rgb(var(--ei-soft-neon-rgb))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="rgb(var(--ei-violet-rgb))" stopOpacity="0" />
          </linearGradient>

          <filter id="cta-orbital-soft-blur">
            <feGaussianBlur stdDeviation="8" />
          </filter>

          <filter id="cta-orbital-line-glow">
            <feGaussianBlur stdDeviation="2.2" />
          </filter>
        </defs>

        {/* central atmospheric wash */}
        <ellipse
          cx="800"
          cy="166"
          rx="300"
          ry="92"
          fill="url(#cta-orbital-core-glow)"
          opacity="0.48"
          filter="url(#cta-orbital-soft-blur)"
        />

        {/* long, quiet orbital field */}
        <ellipse
          cx="800"
          cy="166"
          rx="610"
          ry="50"
          stroke="url(#cta-orbital-line)"
          strokeWidth="0.85"
          opacity="0.34"
        />

        <ellipse
          cx="800"
          cy="166"
          rx="490"
          ry="38"
          stroke="url(#cta-orbital-line)"
          strokeWidth="0.7"
          opacity="0.24"
        />

        <ellipse
          cx="800"
          cy="166"
          rx="365"
          ry="28"
          stroke="url(#cta-orbital-line)"
          strokeWidth="0.6"
          opacity="0.16"
        />

        {/* tilted orbitals */}
        <ellipse
          cx="800"
          cy="166"
          rx="620"
          ry="52"
          stroke="rgb(var(--ei-violet-rgb))"
          strokeOpacity="0.07"
          strokeWidth="0.75"
          transform="rotate(-6 800 166)"
        />

        <ellipse
          cx="800"
          cy="166"
          rx="470"
          ry="39"
          stroke="rgb(var(--ei-halo-blue-rgb))"
          strokeOpacity="0.065"
          strokeWidth="0.7"
          transform="rotate(5 800 166)"
        />

        {/* central axis, closer to the small orbital icons */}
        <path
          d="M800 92V240"
          stroke="rgb(var(--ei-moonlit-rgb))"
          strokeOpacity="0.16"
          strokeWidth="0.8"
          strokeDasharray="6 10"
        />

        <path
          d="M724 166H876"
          stroke="rgb(var(--ei-moonlit-rgb))"
          strokeOpacity="0.11"
          strokeWidth="0.8"
          strokeDasharray="8 12"
        />

        {/* centre signal diamond */}
        <path
          d="M800 128L838 166L800 204L762 166Z"
          stroke="rgb(var(--ei-halo-blue-rgb))"
          strokeOpacity="0.34"
          strokeWidth="1"
        />

        <path
          d="M800 142L824 166L800 190L776 166Z"
          stroke="rgb(var(--ei-soft-neon-rgb))"
          strokeOpacity="0.28"
          strokeWidth="0.9"
        />

        <circle
          cx="800"
          cy="166"
          r="4"
          fill="rgb(var(--ei-ice-white-rgb))"
          opacity="0.72"
        />

        <circle
          cx="800"
          cy="166"
          r="18"
          stroke="rgb(var(--ei-halo-blue-rgb))"
          strokeOpacity="0.18"
          strokeWidth="0.8"
        />

        <circle
          cx="800"
          cy="166"
          r="42"
          stroke="rgb(var(--ei-violet-rgb))"
          strokeOpacity="0.11"
          strokeWidth="0.75"
        />

        {/* side signal nodes */}
        <g opacity="0.9">
          <circle cx="520" cy="166" r="2.8" fill="rgb(var(--ei-violet-rgb))" />
          <circle
            cx="520"
            cy="166"
            r="22"
            fill="url(#cta-orbital-node-glow)"
            opacity="0.34"
          />

          <circle cx="1080" cy="166" r="2.8" fill="rgb(var(--ei-soft-neon-rgb))" />
          <circle
            cx="1080"
            cy="166"
            r="22"
            fill="url(#cta-orbital-node-glow)"
            opacity="0.28"
          />

          <circle cx="650" cy="208" r="2.2" fill="rgb(var(--ei-halo-blue-rgb))" opacity="0.72" />
          <circle cx="950" cy="124" r="2.2" fill="rgb(var(--ei-halo-blue-rgb))" opacity="0.66" />
        </g>

        {/* small alignment ticks */}
        <g stroke="rgb(var(--ei-moonlit-rgb))" strokeOpacity="0.14" strokeWidth="0.8">
          <path d="M520 148V158" />
          <path d="M520 174V184" />
          <path d="M506 166H516" />
          <path d="M524 166H534" />

          <path d="M1080 148V158" />
          <path d="M1080 174V184" />
          <path d="M1066 166H1076" />
          <path d="M1084 166H1094" />
        </g>

        {/* soft line glow overlay */}
        <ellipse
          cx="800"
          cy="166"
          rx="610"
          ry="50"
          stroke="url(#cta-orbital-line)"
          strokeWidth="1"
          opacity="0.12"
          filter="url(#cta-orbital-line-glow)"
        />
      </svg>
    </div>
  );
}