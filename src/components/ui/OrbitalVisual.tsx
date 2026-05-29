export type OrbitalVariant =
  | 'triangle'
  | 'orbit'
  | 'nodes'
  | 'compass'
  | 'canvas'
  | 'reflection'
  | 'architect'
  | 'gpt'
  | 'uikit'
  | 'hexgrid'
  | 'signal'
  | 'constellation'
  | 'prism'
  | 'threshold'
  | 'fold'
  | 'sigil'
  | 'pathway'
  | 'axis'
  | 'frame'
  | 'echo'
  | 'flare'
  | 'glyph'
  | 'archive'
  | 'beacon';


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
  const photon = 'rgb(var(--ei-ice-white-rgb) / 0.88)';
const photonSoft = 'rgb(var(--ei-ice-white-rgb) / 0.48)';
const photonDim = 'rgb(var(--ei-ice-white-rgb) / 0.22)';

const cobalt = 'rgb(var(--ei-aurora-blue-rgb) / 0.92)';
const cobaltSoft = 'rgb(var(--ei-aurora-blue-rgb) / 0.52)';
const cobaltDim = 'rgb(var(--ei-aurora-blue-rgb) / 0.28)';

const orbitBlue = 'rgb(var(--ei-deep-indigo-rgb) / 0.72)';
const orbitBlueSoft = 'rgb(var(--ei-deep-indigo-rgb) / 0.42)';

const violet = 'rgb(var(--ei-luxe-violet-rgb) / 0.82)';
const violetSoft = 'rgb(var(--ei-luxe-violet-rgb) / 0.48)';
const violetDim = 'rgb(var(--ei-luxe-violet-rgb) / 0.24)';

const magenta = 'rgb(var(--ei-orchid-pink-rgb) / 0.78)';
const magentaSoft = 'rgb(var(--ei-orchid-pink-rgb) / 0.42)';
const orchid = 'rgb(var(--ei-orchid-pink-rgb) / 0.72)';

 const icons: Record<OrbitalVariant, React.ReactElement> = {

    triangle: (

      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">

        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.5" />

        <polygon

          points={`${c},${9} ${size - 9},${size - 9} ${9},${size - 9}`}

          stroke={violetSoft}

          strokeWidth="0.9"

        />

        <circle cx={c} cy={9} r="2.5" fill={photon} />

        <circle cx={c} cy={c} r="1.5" fill={cobalt} />

      </svg>

    ),

    orbit: (

      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">

        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.6" />

        <ellipse

          cx={c}

          cy={c}

          rx={r - 4}

          ry={(r - 4) * 0.42}

          stroke={cobaltSoft}

          strokeWidth="0.8"

        />

        <circle cx={c + (r - 4)} cy={c} r="2.5" fill={violet} />

        <circle cx={c} cy={c} r="2" fill={cobalt} />

      </svg>

    ),

    nodes: (

      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">

        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.4" />

        <line x1={c} y1={11} x2={11} y2={size - 11} stroke={violetSoft} strokeWidth="0.4" />

        <line x1={c} y1={11} x2={size - 11} y2={size - 11} stroke={violetSoft} strokeWidth="0.7" />

        <line x1={11} y1={size - 11} x2={size - 11} y2={size - 11} stroke={violetSoft} strokeWidth="0.5" />

        <circle cx={c} cy={11} r="2.5" fill={cobalt} />

        <circle cx={11} cy={size - 11} r="2" fill={cobalt} />

        <circle cx={size - 11} cy={size - 11} r="2" fill={cobalt} />

      </svg>

    ),

    compass: (

      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">

        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.5" />

        <circle cx={c} cy={c} r={r - 9} stroke={violetDim} strokeWidth="0.4" />

        <line x1={c} y1={7} x2={c} y2={size - 7} stroke={cobaltSoft} strokeWidth="0.7" />

        <line x1={7} y1={c} x2={size - 7} y2={c} stroke={photonSoft} strokeWidth="0.5" />

        <circle cx={c} cy={c} r="1.8" fill={photon} />

        <circle cx={c} cy={7} r="1.5" fill={photon} />

      </svg>

    ),

    canvas: (

      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">

        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.6" />

        <circle cx={c} cy={c} r={r - 9} stroke={violetDim} strokeWidth="0.4" />

        <ellipse

          cx={c}

          cy={c}

          rx={r - 9}

          ry={(r - 9) * 0.48}

          stroke={magentaSoft}

          strokeWidth="0.8"

          transform={`rotate(42 ${c} ${c})`}

        />

        <circle cx={c} cy={c} r="2" fill={cobalt} />

      </svg>

    ),

    reflection: (

      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">

        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.4" />

        <line x1={c} y1={9} x2={c} y2={size - 9} stroke={cobaltSoft} strokeWidth="0.6" />

        <line x1={9} y1={c} x2={size - 9} y2={c} stroke={photonSoft} strokeWidth="0.3" />

        <line x1={15} y1={15} x2={size - 15} y2={size - 15} stroke={violetDim} strokeWidth="0.5" />

        <line x1={size - 15} y1={15} x2={15} y2={size - 15} stroke={magentaSoft} strokeWidth="0.8" />

        <circle cx={c} cy={c} r="2.5" fill={photon} />

      </svg>

    ),

    architect: (

      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">

        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.6" />

        <ellipse

          cx={c}

          cy={c}

          rx={r - 5}

          ry={(r - 5) * 0.38}

          stroke={cobaltSoft}

          strokeWidth="1"

        />

        <ellipse

          cx={c}

          cy={c}

          rx={r - 5}

          ry={(r - 5) * 0.38}

          stroke={violetSoft}

          strokeWidth="0.7"

          transform={`rotate(58 ${c} ${c})`}

        />

        <circle cx={c} cy={c} r="2" fill={cobalt} />

      </svg>

    ),

    gpt: (

      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">

        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.6" />

        <circle

          cx={c}

          cy={c}

          r={14}

          stroke={violetSoft}

          strokeWidth="0.6"

          fill="rgb(var(--ei-luxe-violet-rgb) / 0.09)"

        />

        <circle cx={c} cy={c} r={5} fill="rgb(var(--ei-aurora-blue-rgb) / 0.18)" />

        <circle cx={c} cy={c} r={2.5} fill={photon} />

        <circle cx={c} cy={c} r={1} fill={cobalt} />

      </svg>

    ),

    uikit: (

      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">

        <circle cx={c} cy={c} r={r} stroke={cobaltSoft} strokeWidth="0.8" />

        <circle cx={c} cy={c} r={r - 9} stroke={photonDim} strokeWidth="0.3" />

        <circle cx={c} cy={c} r={r - 17} stroke={violetSoft} strokeWidth="0.7" />

        <circle cx={c} cy={c} r={r - 23} stroke={magentaSoft} strokeWidth="0.4" />

        <circle cx={c} cy={c} r={2} fill={cobalt} />

      </svg>

    ),

    constellation: (

      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">

        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.3" />

        <line x1="16" y1="18" x2={c} y2={c} stroke={photonSoft} strokeWidth="0.7" />

        <line x1={c} y1={c} x2={size - 14} y2="16" stroke={cobaltSoft} strokeWidth="1.2" />

        <line x1={c} y1={c} x2={size - 18} y2={size - 18} stroke={violetSoft} strokeWidth="0.6" />

        <circle cx="16" cy="18" r="2" fill={photonSoft} />

        <circle cx={c} cy={c} r="2.5" fill={photon} />

        <circle cx={size - 14} cy="16" r="2" fill={cobalt} />

        <circle cx={size - 18} cy={size - 18} r="2" fill={violet} />

      </svg>

    ),

    signal: (

      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">

        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.6" />

        <path

          d={`M10 ${c} Q ${c} 10 ${size - 10} ${c}`}

          stroke={cobaltSoft}

          strokeWidth="1.1"

          fill="none"

        />

        <path

          d={`M10 ${c + 8} Q ${c} 18 ${size - 10} ${c + 8}`}

          stroke={violetSoft}

          strokeWidth="0.6"

          fill="none"

        />

        <circle cx={size - 10} cy={c} r="2.5" fill={cobalt} />

      </svg>

    ),

    hexgrid: (

      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">

        <circle cx={c} cy={c} r={r} stroke={photonDim} strokeWidth="0.6" />

        <polygon

          points={`${c},8 ${size - 12},18 ${size - 12},${size - 18} ${c},${size - 8} 12,${size - 18} 12,18`}

          stroke={violetSoft}

          strokeWidth="0.5"

        />

        <circle cx={c} cy={8} r="2.5" fill={photon} />

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
          background:
            'radial-gradient(circle, rgb(var(--ei-aurora-blue-rgb) / 0.13) 0%, rgb(var(--ei-luxe-violet-rgb) / 0.09) 42%, rgb(var(--ei-orchid-pink-rgb) / 0.05) 62%, transparent 72%)',
          filter: 'blur(7px)',
          borderRadius: '50%',
        }}
      />
      {icons[variant]}
    </div>
  );
}
