import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({ eyebrow, title, description, className, centered }: SectionHeadingProps) {
  return (
    <div className={cn(className, centered && 'text-center')}>
      {eyebrow && (
        <span
          className={cn('block font-structural text-[10px] tracking-[0.38em] uppercase text-white/30', centered && 'mx-auto')}
          style={{ marginBottom: 'var(--ei-space-48)' }}
        >
          {eyebrow}
        </span>
      )}
      <h2
  className={cn(
    'font-editorial text-[2,1rem] text-[#E8EAF6]/90 leading-[1.24] whitespace-pre-line',
    centered && 'mx-auto'
  )}
  style={{ letterSpacing: '-0.012em' }}
>
  {title}
</h2>

      {description && (
  <p
    className={cn(
      'font-structural text-[15px] md:text-[16px] text-white/60 leading-[1.85]',
      centered ? 'max-w-[42ch] mx-auto' : 'max-w-[58ch]'
    )}
    style={{ marginTop: 'var(--ei-space-32)' }}
  >
    {description}
  </p>
)}

    </div>
  );
}
