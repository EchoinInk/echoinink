import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn(className)}>
      {eyebrow && (
        <span
          className="block font-structural text-[10px] tracking-[0.38em] uppercase text-white/20"
          style={{ marginBottom: 'var(--ei-space-48)' }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="font-editorial text-[1.8rem] md:text-[2.4rem] lg:text-[3rem] text-[#E8EAF6]/85 leading-[1.24]"
        style={{ letterSpacing: '-0.012em' }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="font-structural text-[14px] md:text-[15px] text-white/55 leading-[1.95] max-w-[58ch]"
          style={{ marginTop: 'var(--ei-space-32)' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
