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
          className={cn('block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20', centered && 'mx-auto')}
          style={{ marginBottom: 'var(--ei-space-48)' }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn('font-editorial text-[1.8rem] md:text-[2.4rem] lg:text-[3rem] text-[#E8EAF6]/85 leading-[1.24]', centered && 'mx-auto')}
        style={{ letterSpacing: '-0.012em' }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn('font-structural text-[14px] md:text-[15px] text-white/55 leading-[1.95]', centered ? 'max-w-[42ch] mx-auto' : 'max-w-[58ch]')}
          style={{ marginTop: 'var(--ei-space-32)' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
