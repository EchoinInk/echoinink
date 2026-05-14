export function StarDivider() {
  return (
    <div className="flex justify-center my-4 md:my-6">
      <svg
        width="260"
        height="40"
        viewBox="0 0 260 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="20" x2="110" y2="20" stroke="url(#fade)" strokeWidth="1.2" />
        <g filter="url(#glow)">
          <path d="M130 10 L134 20 L130 30 L126 20 Z" fill="#A78BFA" />
          <circle cx="130" cy="20" r="4" fill="#C084FC" />
        </g>
        <line x1="150" y1="20" x2="260" y2="20" stroke="url(#fade)" strokeWidth="1.2" />
        <defs>
          <linearGradient
            id="fade"
            x1="0"
            y1="0"
            x2="110"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0" />
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
          </linearGradient>
          <filter
            id="glow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
