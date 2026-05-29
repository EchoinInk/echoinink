export function CtaOrbitalBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <svg
        className="absolute left-1/2 top-[44%] h-[260px] w-[1700px] -translate-x-1/2 -translate-y-1/2 md:h-[280px] md:w-[1900px]"
        viewBox="0 0 1600 320"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id="cta-violet-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9A5CFF" stopOpacity="0.62" />
            <stop offset="45%" stopColor="#9A5CFF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#9A5CFF" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="cta-cobalt-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6AF6FF" stopOpacity="0.5" />
            <stop offset="55%" stopColor="#6AF6FF" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#6AF6FF" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="cta-center-wash" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9A5CFF" stopOpacity="0.2" />
            <stop offset="40%" stopColor="#6AF6FF" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#05070D" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="cta-orbit-line" x1="0" y1="0" x2="1600" y2="0">
            <stop offset="0%" stopColor="#9A5CFF" stopOpacity="0" />
            <stop offset="30%" stopColor="#9A5CFF" stopOpacity="0.22" />
            <stop offset="50%" stopColor="#6AF6FF" stopOpacity="0.34" />
            <stop offset="70%" stopColor="#FF4FD8" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#9A5CFF" stopOpacity="0" />
          </linearGradient>

          <filter id="cta-soft-blur">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        {/* subtle central atmosphere */}
        <ellipse
          cx="800"
          cy="168"
          rx="360"
          ry="120"
          fill="url(#cta-center-wash)"
          opacity="0.42"
          filter="url(#cta-soft-blur)"
        />

        {/* main orbit system */}
        <ellipse
          cx="800"
          cy="160"
          rx="560"
          ry="58"
          stroke="url(#cta-orbit-line)"
          strokeWidth="1"
          opacity="0.45"
        />

        <ellipse
          cx="800"
          cy="160"
          rx="440"
          ry="46"
          stroke="url(#cta-orbit-line)"
          strokeWidth="0.8"
          opacity="0.32"
        />

        <ellipse
          cx="800"
          cy="160"
          rx="330"
          ry="34"
          stroke="url(#cta-orbit-line)"
          strokeWidth="0.7"
          opacity="0.24"
        />

        {/* tilted atmospheric rings */}
        <ellipse
          cx="800"
          cy="160"
          rx="565"
          ry="58"
          stroke="#9A5CFF"
          strokeOpacity="0.13"
          strokeWidth="1"
          transform="rotate(-6 800 160)"
        />

        <ellipse
          cx="800"
          cy="160"
          rx="455"
          ry="48"
          stroke="#6AF6FF"
          strokeOpacity="0.09"
          strokeWidth="0.8"
          transform="rotate(5 800 160)"
        />

        <ellipse
          cx="800"
          cy="160"
          rx="640"
          ry="66"
          stroke="#9A5CFF"
          strokeOpacity="0.08"
          strokeWidth="0.8"
          transform="rotate(-8 800 160)"
        />

        {/* glow points */}
        <circle cx="800" cy="92" r="3.5" fill="#9A5CFF" opacity="0.85" />
        <circle cx="800" cy="92" r="24" fill="url(#cta-violet-glow)" opacity="0.55" />

        <circle cx="420" cy="168" r="2.8" fill="#9A5CFF" opacity="0.72" />
        <circle cx="420" cy="168" r="22" fill="url(#cta-violet-glow)" opacity="0.42" />

        <circle cx="1180" cy="150" r="3" fill="#9A5CFF" opacity="0.76" />
        <circle cx="1180" cy="150" r="26" fill="url(#cta-violet-glow)" opacity="0.45" />

        <circle cx="676" cy="224" r="2.5" fill="#6AF6FF" opacity="0.58" />
        <circle cx="676" cy="224" r="22" fill="url(#cta-cobalt-glow)" opacity="0.34" />

        {/* faint distant arcs */}
        <path
          d="M180 246 C430 186 620 206 800 226 C1000 250 1180 220 1420 250"
          stroke="#9A5CFF"
          strokeOpacity="0.06"
          strokeWidth="1"
        />

        <path
          d="M250 88 C520 38 950 35 1270 94"
          stroke="#6AF6FF"
          strokeOpacity="0.045"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}