import { orbitals, type OrbitalVariant } from "../orbitals/orbitals";

export type { OrbitalVariant } from "../orbitals/orbitals";

interface OrbitalVisualProps {
  variant: OrbitalVariant;
  size?: number;
  className?: string;
}

export function OrbitalVisual({
  variant,
  size = 96,
  className,
}: OrbitalVisualProps) {
  return <div className={className}>{orbitals[variant](size)}</div>;
}
