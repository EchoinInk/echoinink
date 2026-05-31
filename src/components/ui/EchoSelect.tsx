import { useEffect, useId, useRef, useState } from 'react';

interface EchoSelectProps {
  id: string;
  name: string;
  label?: string;
  value: string;
  options: string[];
  placeholder?: string;
  onChange: (event: {
    target: {
      name: string;
      value: string;
    };
  }) => void;
  className?: string;
}

export function EchoSelect({
  id,
  name,
  label,
  value,
  options,
  placeholder = 'Select an option',
  onChange,
  className = '',
}: EchoSelectProps) {
  const generatedId = useId();
  const listboxId = `${id || generatedId}-listbox`;
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(() => {
    const selectedIndex = options.findIndex((option) => option === value);
    return selectedIndex >= 0 ? selectedIndex : 0;
  });

  const displayValue = value || placeholder;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const selectedIndex = options.findIndex((option) => option === value);
    if (selectedIndex >= 0) {
      setActiveIndex(selectedIndex);
    }
  }, [options, value]);

  function selectOption(option: string) {
    onChange({
      target: {
        name,
        value: option,
      },
    });

    setIsOpen(false);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((current) => Math.min(current + 1, options.length - 1));
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((current) => Math.max(current - 1, 0));
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      if (!isOpen) {
        setIsOpen(true);
        return;
      }

      selectOption(options[activeIndex]);
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      setIsOpen(false);
    }
  }

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      {label && (
        <label
          id={`${id}-label`}
          className="mb-4 block font-structural text-[11px] font-medium uppercase tracking-[0.24em] text-white/60"
        >
          {label}
        </label>
      )}

      <input type="hidden" id={id} name={name} value={value} />

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={label ? `${id}-label` : undefined}
        aria-controls={listboxId}
        onClick={() => setIsOpen((current) => !current)}
        onKeyDown={handleKeyDown}
        className="
          group relative min-h-[58px] w-full overflow-hidden rounded-[14px]
          border border-white/[0.12]
          bg-[linear-gradient(to_bottom,rgb(var(--ei-deep-indigo-rgb)/0.24),rgb(var(--ei-void-black-rgb)/0.80))]
          px-5 py-4 pr-12 text-left
          font-mono text-[13px]
          shadow-[inset_0_1px_0_rgb(var(--ei-ice-white-rgb)/0.05)]
          outline-none transition-all duration-500
          hover:border-white/[0.18]
          hover:bg-[linear-gradient(to_bottom,rgb(var(--ei-deep-indigo-rgb)/0.32),rgb(var(--ei-void-black-rgb)/0.86))]
          focus-visible:border-[rgb(var(--ei-aurora-blue-rgb)/0.54)]
          focus-visible:ring-2
          focus-visible:ring-white/35
          focus-visible:ring-offset-2
          focus-visible:ring-offset-[#05070D]
          focus-visible:shadow-[0_0_0_1px_rgb(var(--ei-aurora-blue-rgb)/0.22),0_0_28px_rgb(var(--ei-aurora-blue-rgb)/0.08)]
        "
      >
        <span className={value ? 'relative z-10 block truncate text-white/82' : 'relative z-10 block truncate text-white/55'}>
          {displayValue}
        </span>

        <span
          aria-hidden="true"
          className={`pointer-events-none absolute right-5 top-1/2 z-10 -translate-y-1/2 text-[12px] text-white/55 transition-transform duration-500 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ↓
        </span>

        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500
            group-hover:opacity-100
            bg-[radial-gradient(circle_at_82%_20%,rgb(var(--ei-aurora-blue-rgb)/0.10),transparent_34%)]
          "
        />
      </button>

      {isOpen && (
        <ul
          id={listboxId}
          role="listbox"
          aria-labelledby={label ? `${id}-label` : undefined}
          className="
            absolute z-50 mt-3 max-h-72 w-full overflow-auto rounded-[16px]
            border border-white/[0.10]
            bg-[linear-gradient(to_bottom,rgb(var(--ei-deep-indigo-rgb)/0.96),rgb(var(--ei-void-black-rgb)/0.98))]
            p-2
            shadow-[0_24px_70px_rgb(var(--ei-void-black-rgb)/0.72),inset_0_1px_0_rgb(var(--ei-ice-white-rgb)/0.05)]
            backdrop-blur-xl
          "
        >
          <li
            role="option"
            aria-selected={!value}
            onClick={() => selectOption('')}
            className="
              relative cursor-pointer select-none rounded-[11px] px-4 py-3
              font-mono text-[13px] text-white/60 transition-colors duration-300
              hover:bg-white/[0.07] hover:text-white/88
            "
          >
            {placeholder}
          </li>

          {options.map((option, index) => {
            const selected = value === option;
            const active = activeIndex === index;

            return (
              <li
                key={option}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => selectOption(option)}
                className={`
                  relative cursor-pointer select-none rounded-[11px] px-4 py-3
                  font-mono text-[13px] transition-colors duration-300
                  ${
                    active
                      ? 'bg-[rgb(var(--ei-aurora-blue-rgb)/0.10)] text-white'
                      : selected
                        ? 'text-white/90'
                        : 'text-white/68'
                  }
                `}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="block truncate">{option}</span>

                  {selected && (
                    <span
                      aria-hidden="true"
                      className="text-[rgb(var(--ei-aurora-blue-rgb)/0.92)]"
                    >
                      ✓
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}