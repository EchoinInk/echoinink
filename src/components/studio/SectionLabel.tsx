interface SectionLabelProps {
  children: string;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span
      className="font-mono text-[10px] uppercase tracking-[0.28em]"
      style={{ color: 'var(--ei-text-muted)' }}
    >
      {children}
    </span>
  );
}
