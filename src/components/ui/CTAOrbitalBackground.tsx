export function CtaOrbitalBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <svg
        className="absolute left-1/2 top-1/2 h-[360px] w-[1800px] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 1600 320"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id="cta-violet-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(var(--ei-luxe-violet-rgb))" stopOpacity="0.75" />
            <stop offset="45%" stopColor="rgb(var(--ei-luxe-violet-rgb))" stopOpacity="0.22" />
            <stop offset="100%" stopColor="rgb(var(--ei-luxe-violet-rgb))" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="cta-cobalt-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(var(--ei-cobalt-rgb))" stopOpacity="0.55" />
            <stop offset="55%" stopColor="rgb(var(--ei-cobalt-rgb))" stopOpacity="0.16" />
            <stop offset="100%" stopColor="rgb(var(--ei-cobalt-rgb))" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="cta-orbit-line" x1="0" y1="0" x2="1600" y2="0">
            <stop offset="0%" stopColor="rgb(var(--ei-luxe-violet-rgb))" stopOpacity="0" />
            <stop offset="32%" stopColor="rgb(var(--ei-luxe-violet-rgb))" stopOpacity="0.35" />
            <stop offset="50%" stopColor="rgb(var(--ei-cobalt-rgb))" stopOpacity="0.55" />
            <stop offset="68%" stopColor="rgb(var(--ei-orchid-pink-rgb))" stopOpacity="0.28" />
            <stop offset="100%" stopColor="rgb(var(--ei-luxe-violet-rgb))" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="1600" height="320" fill="transparent" />

        <ellipse
          cx="800"
          cy="160"
          rx="560"
          ry="78"
          stroke="url(#cta-orbit-line)"
          strokeWidth="1.4"
          opacity="0.9"
        />

        <ellipse
          cx="800"
          cy="160"
          rx="440"
          ry="60"
          stroke="url(#cta-orbit-line)"
          strokeWidth="1"
          opacity="0.65"
        />

        <ellipse
          cx="800"
          cy="160"
          rx="330"
          ry="44"
          stroke="url(#cta-orbit-line)"
          strokeWidth="0.9"
          opacity="0.48"
        />

        <ellipse
          cx="800"
          cy="160"
          rx="565"
          ry="78"
          stroke="rgb(var(--ei-luxe-violet-rgb))"
          strokeOpacity="0.22"
          strokeWidth="1"
          transform="rotate(-7 800 160)"
        />

        <ellipse
          cx="800"
          cy="160"
          rx="455"
          ry="62"
          stroke="rgb(var(--ei-cobalt-rgb))"
          strokeOpacity="0.16"
          strokeWidth="0.9"
          transform="rotate(6 800 160)"
        />

        <ellipse
          cx="800"
          cy="160"
          rx="340"
          ry="110"
          fill="url(#cta-violet-glow)"
          opacity="0.38"
        />

        <circle cx="800" cy="74" r="4" fill="rgb(var(--ei-luxe-violet-rgb))" opacity="0.95" />
        <circle cx="800" cy="74" r="26" fill="url(#cta-violet-glow)" opacity="0.75" />

        <circle cx="418" cy="166" r="3" fill="rgb(var(--ei-luxe-violet-rgb))" opacity="0.85" />
        <circle cx="418" cy="166" r="22" fill="url(#cta-violet-glow)" opacity="0.55" />

        <circle cx="1182" cy="150" r="3.4" fill="rgb(var(--ei-luxe-violet-rgb))" opacity="0.9" />
        <circle cx="1182" cy="150" r="28" fill="url(#cta-violet-glow)" opacity="0.6" />

        <circle cx="676" cy="230" r="2.6" fill="rgb(var(--ei-cobalt-rgb))" opacity="0.7" />
        <circle cx="676" cy="230" r="22" fill="url(#cta-cobalt-glow)" opacity="0.45" />
      </svg>
    </div>
  );
}