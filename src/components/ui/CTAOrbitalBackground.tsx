export function CtaOrbitalBackground() {

  return (

    <svg

      aria-hidden="true"

      className="pointer-events-none absolute inset-0 z-0 h-full w-full"

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

        <linearGradient id="cta-orbit-line" x1="0" y1="0" x2="1600" y2="0">

          <stop offset="0%" stopColor="rgb(var(--ei-ion-violet-rgb))" stopOpacity="0" />

          <stop offset="35%" stopColor="rgb(var(--ei-ion-violet-rgb))" stopOpacity="0.28" />

          <stop offset="50%" stopColor="rgb(var(--ei-electric-cobalt-rgb))" stopOpacity="0.38" />

          <stop offset="65%" stopColor="rgb(var(--ei-orchid-pink-rgb))" stopOpacity="0.22" />

          <stop offset="100%" stopColor="rgb(var(--ei-ion-violet-rgb))" stopOpacity="0" />

        </linearGradient>

      </defs>

      <line

        x1="0"

        y1="34"

        x2="1600"

        y2="34"

        stroke="rgb(var(--ei-photon-white-rgb))"

        strokeOpacity="0.08"

      />

      <ellipse

        cx="800"

        cy="160"

        rx="540"

        ry="74"

        stroke="url(#cta-orbit-line)"

        strokeWidth="1.1"

        opacity="0.7"

      />

      <ellipse

        cx="800"

        cy="160"

        rx="430"

        ry="58"

        stroke="url(#cta-orbit-line)"

        strokeWidth="0.9"

        opacity="0.5"

      />

      <ellipse

        cx="800"

        cy="160"

        rx="320"

        ry="42"

        stroke="url(#cta-orbit-line)"

        strokeWidth="0.8"

        opacity="0.4"

      />

      <ellipse

        cx="800"

        cy="160"

        rx="545"

        ry="76"

        stroke="rgb(var(--ei-ion-violet-rgb))"

        strokeOpacity="0.22"

        strokeWidth="1"

        transform="rotate(-7 800 160)"

      />

      <ellipse

        cx="800"

        cy="160"

        rx="440"

        ry="60"

        stroke="rgb(var(--ei-electric-cobalt-rgb))"

        strokeOpacity="0.14"

        strokeWidth="0.8"

        transform="rotate(6 800 160)"

      />

      <ellipse

        cx="800"

        cy="160"

        rx="310"

        ry="100"

        fill="url(#cta-violet-glow)"

        opacity="0.3"

      />

      <circle cx="800" cy="74" r="3.5" fill="rgb(var(--ei-ion-violet-rgb))" opacity="0.9" />

      <circle cx="418" cy="166" r="2.8" fill="rgb(var(--ei-ion-violet-rgb))" opacity="0.8" />

      <circle cx="1182" cy="150" r="3.2" fill="rgb(var(--ei-ion-violet-rgb))" opacity="0.85" />

      <circle cx="676" cy="230" r="2.3" fill="rgb(var(--ei-electric-cobalt-rgb))" opacity="0.65" />

    </svg>

  );

}