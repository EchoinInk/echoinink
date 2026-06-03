interface NumberedSectionLabelProps {
  number: string;
  label: string;
}

export function NumberedSectionLabel({ number, label }: NumberedSectionLabelProps) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="font-mono text-[10px] uppercase tracking-[0.28em]"
        style={{ color: 'var(--ei-text-muted)' }}
      >
        {number}
      </span>
      <div
        className="h-px w-8 shrink-0"
        style={{ background: 'rgb(var(--ei-ice-white-rgb) / 0.08)' }}
        aria-hidden="true"
      />
      <span
        className="font-mono text-[10px] uppercase tracking-[0.28em]"
        style={{ color: 'var(--ei-text-muted)' }}
      >
        {label}
      </span>
    </div>
  );
}
