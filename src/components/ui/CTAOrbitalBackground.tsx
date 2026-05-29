export function CtaOrbitalBackground() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      viewBox="0 0 1600 320"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <radialGradient id="cta-violet-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgb(var(--ei-ion-violet-rgb))" stopOpacity="0.55" />
          <stop offset="45%" stopColor="rgb(var(--ei-ion-violet-rgb))" stopOpacity="0.18" />
          <stop offset="100%" stopColor="rgb(var(--ei-ion-violet-rgb))" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="cta-cobalt-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgb(var(--ei-electric-cobalt-rgb))" stopOpacity="0.45" />
          <stop offset="55%" stopColor="rgb(var(--ei-electric-cobalt-rgb))" stopOpacity="0.12" />
          <stop offset="100%" stopColor="rgb(var(--ei-electric-cobalt-rgb))" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="cta-orbit-line" x1="0" y1="0" x2="1600" y2="0">
          <stop offset="0%" stopColor="rgb(var(--ei-ion-violet-rgb))" stopOpacity="0" />
          <stop offset="34%" stopColor="rgb(var(--ei-ion-violet-rgb))" stopOpacity="0.22" />
          <stop offset="50%" stopColor="rgb(var(--ei-electric-cobalt-rgb))" stopOpacity="0.32" />
          <stop offset="66%" stopColor="rgb(var(--ei-ion-violet-rgb))" stopOpacity="0.22" />
          <stop offset="100%" stopColor="rgb(var(--ei-ion-violet-rgb))" stopOpacity="0" />
        </linearGradient>

        <filter id="cta-soft-blur">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      {/* faint top divider */}
      <line
        x1="0"
        y1="32"
        x2="1600"
        y2="32"
        stroke="rgb(var(--ei-photon-white-rgb))"
        strokeOpacity="0.06"
      />

      {/* large orbital system */}
      <ellipse
        cx="800"
        cy="160"
        rx="520"
        ry="72"
        stroke="url(#cta-orbit-line)"
        strokeWidth="1"
        opacity="0.55"
      />
      <ellipse
        cx="800"
        cy="160"
        rx="420"
        ry="58"
        stroke="url(#cta-orbit-line)"
        strokeWidth="1"
        opacity="0.42"
      />
      <ellipse
        cx="800"
        cy="160"
        rx="310"
        ry="42"
        stroke="url(#cta-orbit-line)"
        strokeWidth="0.8"
        opacity="0.35"
      />

      {/* tilted orbit rings */}
      <ellipse
        cx="800"
        cy="160"
        rx="520"
        ry="72"
        stroke="rgb(var(--ei-ion-violet-rgb))"
        strokeOpacity="0.16"
        strokeWidth="1"
        transform="rotate(-7 800 160)"
      />
      <ellipse
        cx="800"
        cy="160"
        rx="430"
        ry="60"
        stroke="rgb(var(--ei-electric-cobalt-rgb))"
        strokeOpacity="0.10"
        strokeWidth="0.8"
        transform="rotate(6 800 160)"
      />

      {/* atmospheric center glow */}
      <ellipse
        cx="800"
        cy="160"
        rx="290"
        ry="95"
        fill="url(#cta-violet-glow)"
        opacity="0.22"
        filter="url(#cta-soft-blur)"
      />

      {/* light nodes */}
      <circle cx="800" cy="72" r="4" fill="rgb(var(--ei-ion-violet-rgb))" opacity="0.85" />
      <circle cx="800" cy="72" r="22" fill="url(#cta-violet-glow)" opacity="0.65" />

      <circle cx="420" cy="166" r="3" fill="rgb(var(--ei-ion-violet-rgb))" opacity="0.75" />
      <circle cx="420" cy="166" r="18" fill="url(#cta-violet-glow)" opacity="0.45" />

      <circle cx="1180" cy="150" r="3.5" fill="rgb(var(--ei-ion-violet-rgb))" opacity="0.8" />
      <circle cx="1180" cy="150" r="24" fill="url(#cta-violet-glow)" opacity="0.5" />

      <circle cx="675" cy="230" r="2.5" fill="rgb(var(--ei-electric-cobalt-rgb))" opacity="0.45" />
      <circle cx="675" cy="230" r="18" fill="url(#cta-cobalt-glow)" opacity="0.35" />

      {/* very faint lower arc shadows */}
      <path
        d="M180 245 C430 185 620 205 800 225 C1000 250 1180 220 1420 250"
        stroke="rgb(var(--ei-ion-violet-rgb))"
        strokeOpacity="0.08"
        strokeWidth="1"
      />
      <path
        d="M250 88 C520 38 950 35 1270 94"
        stroke="rgb(var(--ei-electric-cobalt-rgb))"
        strokeOpacity="0.06"
        strokeWidth="1"
      />
    </svg>
  );
}