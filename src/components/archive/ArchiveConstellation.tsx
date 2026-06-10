import { OrbitalVisual } from '@/components/ui/OrbitalVisual';
import { archivePhilosophy } from '@/data/archiveContent';
import { cn } from '@/lib/utils';

interface ArchiveConstellationProps {
  className?: string;
}

export function ArchiveConstellation({ className }: ArchiveConstellationProps) {
  return (
    <div className={cn('ei-archive-constellation', className)} aria-hidden="true">
      <span className="ei-archive-constellation-orbit" />
      <span className="ei-archive-constellation-axis" />
      {archivePhilosophy.themes.map((theme, index) => (
        <span
          key={theme}
          className="ei-archive-constellation-node"
          data-node={String(index + 1)}
        >
          <span />
          {theme}
        </span>
      ))}
      <OrbitalVisual
        variant="synthesisStar"
        size={74}
        className="ei-archive-constellation-center"
      />
    </div>
  );
}
