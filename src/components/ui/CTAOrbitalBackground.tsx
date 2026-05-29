export function CtaOrbitalBackground() {

  return (

    <div

      aria-hidden="true"

      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"

    >

      <svg

        className="absolute left-1/2 top-[54%] h-[220px] w-[1650px] -translate-x-1/2 -translate-y-1/2 md:h-[240px] md:w-[1850px]"

        viewBox="0 0 1600 320"

        preserveAspectRatio="xMidYMid slice"

        fill="none"

      >

        <defs>

          <radialGradient id="cta-violet-glow" cx="50%" cy="50%" r="50%">

            <stop offset="0%" stopColor="#9A5CFF" stopOpacity="0.52" />

            <stop offset="45%" stopColor="#9A5CFF" stopOpacity="0.15" />

            <stop offset="100%" stopColor="#9A5CFF" stopOpacity="0" />

          </radialGradient>

          <radialGradient id="cta-cobalt-glow" cx="50%" cy="50%" r="50%">

            <stop offset="0%" stopColor="#6AF6FF" stopOpacity="0.42" />

            <stop offset="55%" stopColor="#6AF6FF" stopOpacity="0.12" />

            <stop offset="100%" stopColor="#6AF6FF" stopOpacity="0" />

          </radialGradient>

          <radialGradient id="cta-center-wash" cx="50%" cy="50%" r="50%">

            <stop offset="0%" stopColor="#9A5CFF" stopOpacity="0.14" />

            <stop offset="42%" stopColor="#6AF6FF" stopOpacity="0.055" />

            <stop offset="100%" stopColor="#05070D" stopOpacity="0" />

          </radialGradient>

          {/* Darker / subtler orbit line gradient */}

          <linearGradient id="cta-orbit-line" x1="0" y1="0" x2="1600" y2="0">

            <stop offset="0%" stopColor="#9A5CFF" stopOpacity="0" />

            <stop offset="30%" stopColor="#9A5CFF" stopOpacity="0.09" />

            <stop offset="50%" stopColor="#6AF6FF" stopOpacity="0.13" />

            <stop offset="70%" stopColor="#FF4FD8" stopOpacity="0.07" />

            <stop offset="100%" stopColor="#9A5CFF" stopOpacity="0" />

          </linearGradient>

          <filter id="cta-soft-blur">

            <feGaussianBlur stdDeviation="10" />

          </filter>

        </defs>

        {/* central atmosphere */}

        <ellipse

          cx="800"

          cy="172"

          rx="330"

          ry="108"

          fill="url(#cta-center-wash)"

          opacity="0.36"

          filter="url(#cta-soft-blur)"

        />

        {/* main orbit system — darker and softer */}

        <ellipse

          cx="800"

          cy="168"

          rx="560"

          ry="48"

          stroke="url(#cta-orbit-line)"

          strokeWidth="0.9"

          opacity="0.26"

        />

        <ellipse

          cx="800"

          cy="168"

          rx="440"

          ry="38"

          stroke="url(#cta-orbit-line)"

          strokeWidth="0.75"

          opacity="0.18"

        />

        <ellipse

          cx="800"

          cy="168"

          rx="330"

          ry="28"

          stroke="url(#cta-orbit-line)"

          strokeWidth="0.65"

          opacity="0.12"

        />

        {/* tilted atmospheric rings — darker and more restrained */}

        <ellipse

          cx="800"

          cy="168"

          rx="565"

          ry="50"

          stroke="#9A5CFF"

          strokeOpacity="0.055"

          strokeWidth="0.9"

          transform="rotate(-5 800 168)"

        />

        <ellipse

          cx="800"

          cy="168"

          rx="455"

          ry="40"

          stroke="#6AF6FF"

          strokeOpacity="0.04"

          strokeWidth="0.75"

          transform="rotate(4 800 168)"

        />

        <ellipse

          cx="800"

          cy="168"

          rx="650"

          ry="54"

          stroke="#9A5CFF"

          strokeOpacity="0.035"

          strokeWidth="0.7"

          transform="rotate(-7 800 168)"

        />

        {/* glow points */}

        <circle cx="800" cy="104" r="3" fill="#9A5CFF" opacity="0.74" />

        <circle

          cx="800"

          cy="104"

          r="22"

          fill="url(#cta-violet-glow)"

          opacity="0.44"

        />

        <circle cx="420" cy="172" r="2.6" fill="#9A5CFF" opacity="0.62" />

        <circle

          cx="420"

          cy="172"

          r="20"

          fill="url(#cta-violet-glow)"

          opacity="0.34"

        />

        <circle cx="1180" cy="158" r="2.8" fill="#9A5CFF" opacity="0.66" />

        <circle

          cx="1180"

          cy="158"

          r="24"

          fill="url(#cta-violet-glow)"

          opacity="0.36"

        />

        <circle cx="676" cy="222" r="2.3" fill="#6AF6FF" opacity="0.48" />

        <circle

          cx="676"

          cy="222"

          r="20"

          fill="url(#cta-cobalt-glow)"

          opacity="0.26"

        />

      </svg>

    </div>

  );

}