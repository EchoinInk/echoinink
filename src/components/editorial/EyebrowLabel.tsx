interface EyebrowLabelProps {
  children: string;
}

export function EyebrowLabel({ children }: EyebrowLabelProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="ei-eyebrow">{children}</span>
      <div
        className="h-px w-10 shrink-0 rounded-full shadow-[0_0_12px_rgb(var(--ei-aurora-blue-rgb)/0.45)]"
        style={{
          background:
            'linear-gradient(90deg, rgb(var(--ei-midnight-rgb) / 0.15) 0%, rgb(var(--ei-aurora-blue-rgb) / 0.95) 100%)',
        }}
        aria-hidden="true"
      />
    </div>
  );
}
