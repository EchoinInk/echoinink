import type { ProjectContext as ProjectContextData } from '@/data/worksProjects';

interface ProjectContextProps {
  context?: ProjectContextData;
  className?: string;
  compact?: boolean;
}

export function ProjectContext({ context, className = '', compact = false }: ProjectContextProps) {
  if (!context) return null;

  const items = [
    context.status ? { label: 'Status', value: context.status } : null,
    context.scope ? { label: 'Scope', value: context.scope } : null,
    context.type ? { label: 'Context', value: context.type } : null,
  ].filter((item): item is { label: string; value: string } => Boolean(item));

  if (items.length === 0) return null;

  return (
    <dl className={`ei-project-context ${className}`} data-compact={compact ? 'true' : undefined}>
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
