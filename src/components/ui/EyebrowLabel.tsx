interface EyebrowLabelProps {
  children: string;
}

export function EyebrowLabel({ children }: EyebrowLabelProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="ei-type-label">{children}</span>
      <div
        className="h-px w-10 shrink-0 rounded-full shadow-[0_0_12px_rgb(73, 133, 253/0.45)]"
        style={{
          background:
            'linear-gradient(90deg, rgb(11, 13, 42 / 0.15) 0%, rgb(73, 133, 253 / 0.95) 100%)',
        }}
        aria-hidden="true"
      />
    </div>
  );
}
