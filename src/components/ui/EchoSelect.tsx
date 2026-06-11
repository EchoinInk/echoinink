import { useEffect, useId, useMemo, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

interface EchoSelectOption {
  label: string;
  value: string;
}

interface EchoSelectProps {
  id: string;
  name: string;
  label?: string;
  variant?: 'form' | 'editorial';
  value: string;
  options: readonly (string | EchoSelectOption)[];
  placeholder?: string;
  onChange: (event: {
    target: {
      name: string;
      value: string;
    };
  }) => void;
  className?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}

export function EchoSelect({
  id,
  name,
  label,
  variant = 'form',
  value,
  options,
  placeholder = 'Select an option',
  onChange,
  className = '',
  hint,
  error,
  disabled = false,
  required = false,
}: EchoSelectProps) {
  const generatedId = useId();
  const listboxId = `${id || generatedId}-listbox`;
  const descriptionId = hint || error ? `${id || generatedId}-description` : undefined;
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const normalizedOptions = useMemo(
    () =>
      options.map((option) =>
        typeof option === 'string' ? { label: option, value: option } : option,
      ),
    [options],
  );
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(() => {
    const selectedIndex = normalizedOptions.findIndex((option) => option.value === value);
    return selectedIndex;
  });

  const displayValue =
    normalizedOptions.find((option) => option.value === value)?.label || value || placeholder;

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
    const selectedIndex = normalizedOptions.findIndex((option) => option.value === value);
    setActiveIndex(selectedIndex);
  }, [normalizedOptions, value]);

  function selectOption(option: EchoSelectOption | undefined) {
    if (!option) {
      return;
    }

    onChange({
      target: {
        name,
        value: option.value,
      },
    });

    setIsOpen(false);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (disabled) {
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex((current) => Math.min(current + 1, normalizedOptions.length - 1));
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

      selectOption(normalizedOptions[activeIndex]);
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      setIsOpen(false);
    }
  }

  return (
    <div
      ref={wrapperRef}
      className={cn('ei-select', className)}
      data-variant={variant}
      data-invalid={error ? 'true' : 'false'}
    >
      {label && (
        <label id={`${id}-label`} className="ei-form-label ei-select-label">
          {label}
          {required ? <span aria-hidden="true"> *</span> : null}
        </label>
      )}

      <input type="hidden" id={id} name={name} value={value} />

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={label ? `${id}-label` : undefined}
        aria-controls={listboxId}
        aria-activedescendant={
          isOpen && normalizedOptions[activeIndex]
            ? `${listboxId}-option-${activeIndex}`
            : undefined
        }
        aria-describedby={descriptionId}
        aria-invalid={error ? true : undefined}
        aria-required={required || undefined}
        disabled={disabled}
        onClick={() => setIsOpen((current) => !current)}
        onKeyDown={handleKeyDown}
        className="ei-select-trigger"
      >
        <span
          className="ei-select-value block truncate"
          data-placeholder={!value ? 'true' : 'false'}
        >
          {displayValue}
        </span>

        <span
          aria-hidden="true"
          className="ei-select-chevron"
          data-open={isOpen ? 'true' : 'false'}
        >
          ↓
        </span>
      </button>

      {isOpen && (
        <ul
          id={listboxId}
          role="listbox"
          aria-labelledby={label ? `${id}-label` : undefined}
          className="ei-select-list"
        >
          <li
            role="option"
            aria-selected={!value}
            onClick={() => selectOption({ label: placeholder, value: '' })}
            className="ei-select-option"
            data-active={activeIndex < 0 && !value ? 'true' : 'false'}
          >
            {placeholder}
          </li>

          {normalizedOptions.map((option, index) => {
            const selected = value === option.value;
            const active = activeIndex === index;

            return (
              <li
                id={`${listboxId}-option-${index}`}
                key={option.value}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => selectOption(option)}
                className="ei-select-option"
                data-active={active || selected ? 'true' : 'false'}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="block truncate">{option.label}</span>

                  {selected && (
                    <span aria-hidden="true" className="ei-select-check">
                      ✓
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {descriptionId ? (
        <p
          id={descriptionId}
          className="ei-form-message mt-3"
          data-error={error ? 'true' : 'false'}
        >
          {error ?? hint}
        </p>
      ) : null}
    </div>
  );
}
