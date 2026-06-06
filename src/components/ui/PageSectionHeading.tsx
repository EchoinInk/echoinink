import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({ eyebrow, title, description, className, centered }: SectionHeadingProps) {
  return (
    <div className={cn(className, centered && 'text-center')}>
      {eyebrow && (
        <span
          className={cn('ei-type-label block tracking-[0.38em]', centered && 'mx-auto')}
          style={{ marginBottom: 'var(--ei-space-24)' }}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className={cn(
            'ei-type-section text-[2.1rem] leading-[1.24] whitespace-pre-line',
            centered && 'mx-auto'
          )}
          style={{ letterSpacing: '-0.012em' }}
        >
          {title}
        </h2>
      )}

      {description && (
  <p
    className={cn(
      'ei-type-small text-[15px] leading-[1.85] md:text-[16px]',
      centered ? 'max-w-[42ch] mx-auto' : 'max-w-[58ch]'
    )}
    style={{ marginTop: 'var(--ei-space-48)' }}
  >
    {description}
  </p>
)}

    </div>
  );
}
