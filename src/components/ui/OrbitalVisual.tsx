export type OrbitalVariant =
  | 'triangle'    // Brand Identity
  | 'orbit'       // Digital Experiences
  | 'nodes'       // Narrative Architecture
  | 'compass'     // Creative Direction
  | 'canvas'      // Identity Canvas
  | 'reflection'  // Founder Reflection
  | 'architect'   // Narrative Architect
  | 'gpt'         // Identity GPT
  | 'uikit'       // Atmosphere UI Kit
  | 'hexgrid'
  | 'signal'
  | 'constellation';


interface OrbitalVisualProps {
  variant?: OrbitalVariant;
  size?: number;
  className?: string;
}

export function OrbitalVisual({
  variant = 'orbit',
  size = 64,
  className = '',
}: OrbitalVisualProps) {
  const c = size / 2;
  const r = c - 4;
  const strokeLight = 'rgba(200,190,255,0.55)';
  const strokeDim = 'rgba(200,190,255,0.28)';
  const orchid = '#B55CFF';
  const blue = 'rgba(42,107,255,0.85)';
  const violet = '#7B5CFF';

  const icons: Record<OrbitalVariant, React.ReactElement> = {
    triangle: (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <circle cx={c} cy={c} r={r} stroke={strokeDim} strokeWidth="1.2" />
        <polygon
          points={`${c},${9} ${size - 9},${size - 9} ${9},${size - 9}`}
          stroke={strokeLight}
          strokeWidth="1.3"
        />
        <circle cx={c} cy={9} r="2.5" fill={orchid} />
        <circle cx={c} cy={c} r="1.5" fill={strokeDim} />
      </svg>
    ),
    orbit: (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <circle cx={c} cy={c} r={r} stroke={strokeDim} strokeWidth="1.2" />
        <ellipse cx={c} cy={c} rx={r - 4} ry={(r - 4) * 0.42} stroke={strokeLight} strokeWidth="1.3" />
        <circle cx={c + (r - 4)} cy={c} r="2.5" fill={violet} />
        <circle cx={c} cy={c} r="2" fill={strokeDim} />
      </svg>
    ),
    nodes: (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <circle cx={c} cy={c} r={r} stroke={strokeDim} strokeWidth="1.2" />
        <line x1={c} y1={11} x2={11} y2={size - 11} stroke={strokeLight} strokeWidth="1.2" />
        <line x1={c} y1={11} x2={size - 11} y2={size - 11} stroke={strokeLight} strokeWidth="1.7" />
        <line x1={11} y1={size - 11} x2={size - 11} y2={size - 11} stroke={strokeLight} strokeWidth="1.2" />
        <circle cx={c} cy={11} r="2.5" fill={orchid} />
        <circle cx={11} cy={size - 11} r="2" fill={strokeLight} />
        <circle cx={size - 11} cy={size - 11} r="2" fill={strokeLight} />
      </svg>
    ),
    compass: (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <circle cx={c} cy={c} r={r} stroke={strokeDim} strokeWidth="1.9" />
        <circle cx={c} cy={c} r={r - 9} stroke={strokeLight} strokeWidth="1.3" />
        <line x1={c} y1={7} x2={c} y2={size - 7} stroke={strokeDim} strokeWidth="0.9" />
        <line x1={7} y1={c} x2={size - 7} y2={c} stroke={strokeDim} strokeWidth="0.9" />
        <circle cx={c} cy={c} r="2.5" fill={violet} />
        <circle cx={c} cy={7} r="1.5" fill={strokeLight} />
      </svg>
    ),
    canvas: (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <circle cx={c} cy={c} r={r} stroke={strokeDim} strokeWidth="1.9" />
        <circle cx={c} cy={c} r={r - 9} stroke={strokeLight} strokeWidth="1.4" />
        <ellipse
          cx={c} cy={c}
          rx={r - 9} ry={(r - 9) * 0.48}
          stroke={strokeDim} strokeWidth="1.0"
          transform={`rotate(42 ${c} ${c})`}
        />
        <circle cx={c} cy={c} r="2" fill={orchid} />
      </svg>
    ),
    reflection: (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <circle cx={c} cy={c} r={r} stroke={strokeDim} strokeWidth="1.2" />
        <line x1={c} y1={9} x2={c} y2={size - 9} stroke={strokeLight} strokeWidth="1.3" />
        <line x1={9} y1={c} x2={size - 9} y2={c} stroke={strokeLight} strokeWidth="1.3" />
        <line x1={15} y1={15} x2={size - 15} y2={size - 15} stroke={strokeDim} strokeWidth="0.9" />
        <line x1={size - 15} y1={15} x2={15} y2={size - 15} stroke={strokeDim} strokeWidth="0.9" />
        <circle cx={c} cy={c} r="2.5" fill={orchid} />
      </svg>
    ),
    architect: (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <circle cx={c} cy={c} r={r} stroke={strokeDim} strokeWidth="1.2" />
        <ellipse cx={c} cy={c} rx={r - 5} ry={(r - 5) * 0.38} stroke={strokeLight} strokeWidth="1.3" />
        <ellipse
          cx={c} cy={c}
          rx={r - 5} ry={(r - 5) * 0.38}
          stroke={strokeDim} strokeWidth="0.9"
          transform={`rotate(58 ${c} ${c})`}
        />
        <circle cx={c} cy={c} r="2" fill={blue} />
      </svg>
    ),
    gpt: (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <circle cx={c} cy={c} r={r} stroke={strokeDim} strokeWidth="1.2" />
        <circle cx={c} cy={c} r={14} stroke={strokeDim} strokeWidth="0.9" fill="rgba(181,92,255,0.07)" />
        <circle cx={c} cy={c} r={5} fill="rgba(181,92,255,0.22)" />
        <circle cx={c} cy={c} r={2.5} fill={orchid} />
        <circle cx={c} cy={c} r={1} fill="rgba(255,255,255,0.85)" />
      </svg>
    ),
    uikit: (
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <circle cx={c} cy={c} r={r} stroke={strokeDim} strokeWidth="1.2" />
        <circle cx={c} cy={c} r={r - 9} stroke={strokeLight} strokeWidth="1.2" />
        <circle cx={c} cy={c} r={r - 17} stroke={strokeDim} strokeWidth="0.9" />
        <circle cx={c} cy={c} r={r - 23} stroke={strokeDim} strokeWidth="0.6" />
        <circle cx={c} cy={c} r={2} fill={blue} />
      </svg>
    ),
    constellation: (
  <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
    <circle cx={c} cy={c} r={r} stroke={strokeDim} strokeWidth="1.2" />

    <line x1="16" y1="18" x2={c} y2={c} stroke={strokeLight} strokeWidth="0.9" />
    <line x1={c} y1={c} x2={size-14} y2="16" stroke={strokeLight} strokeWidth="0.9" />
    <line x1={c} y1={c} x2={size-18} y2={size-18} stroke={strokeLight} strokeWidth="0.9" />

    <circle cx="16" cy="18" r="2" fill={strokeLight} />
    <circle cx={c} cy={c} r="2.5" fill={orchid} />
    <circle cx={size-14} cy="16" r="2" fill={blue} />
    <circle cx={size-18} cy={size-18} r="2" fill={strokeLight} />
  </svg>
  ),
  signal: (
  <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
    <circle cx={c} cy={c} r={r} stroke={strokeDim} strokeWidth="1.2" />

    <path
      d={`M10 ${c} Q ${c} 10 ${size-10} ${c}`}
      stroke={strokeLight}
      strokeWidth="1.3"
      fill="none"
    />

    <path
      d={`M10 ${c+8} Q ${c} 18 ${size-10} ${c+8}`}
      stroke={strokeDim}
      strokeWidth="0.9"
      fill="none"
    />

    <circle cx={size-10} cy={c} r="2.5" fill={blue} />
  </svg>
),
hexgrid: (
  <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
    <circle cx={c} cy={c} r={r} stroke={strokeDim} strokeWidth="1.2" />

    <polygon
      points={`
        ${c},8
        ${size-12},18
        ${size-12},${size-18}
        ${c},${size-8}
        12,${size-18}
        12,18
      `}
      stroke={strokeLight}
      strokeWidth="1.2"
    />

    <circle cx={c} cy={8} r="2.5" fill={orchid} />
  </svg>
),
  };

  return (
    <div
      className={`relative flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(123,92,255,0.1) 0%, transparent 65%)',
          filter: 'blur(6px)',
          borderRadius: '50%',
        }}
      />
      {icons[variant]}
    </div>
  );
}
