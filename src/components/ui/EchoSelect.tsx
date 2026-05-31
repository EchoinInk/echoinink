import { Fragment, useId } from 'react';
import { Listbox, Transition } from '@headlessui/react';

type EchoSelectOption = {
  label: string;
  value: string;
};

interface EchoSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: EchoSelectOption[];
  placeholder?: string;
  className?: string;
}

export function EchoSelect({
  label,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  className = '',
}: EchoSelectProps) {
  const id = useId();
  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={className}>
      <Listbox value={value} onChange={onChange}>
        <Listbox.Label
          htmlFor={id}
          className="mb-4 block font-structural text-[11px] font-medium uppercase tracking-[0.24em] text-white/60"
        >
          {label}
        </Listbox.Label>

        <div className="relative">
          <Listbox.Button
            id={id}
            className="
              group relative min-h-[58px] w-full overflow-hidden rounded-[14px]
              border border-white/[0.08]
              bg-[linear-gradient(to_bottom,rgb(var(--ei-deep-indigo-rgb)/0.22),rgb(var(--ei-void-black-rgb)/0.78))]
              px-5 py-4 pr-12 text-left
              font-mono text-[13px] text-white/78
              shadow-[inset_0_1px_0_rgb(var(--ei-ice-white-rgb)/0.04)]
              outline-none transition-all duration-500
              hover:border-white/[0.14]
              hover:bg-[linear-gradient(to_bottom,rgb(var(--ei-deep-indigo-rgb)/0.30),rgb(var(--ei-void-black-rgb)/0.82))]
              focus-visible:border-[rgb(var(--ei-aurora-blue-rgb)/0.42)]
              focus-visible:ring-2
              focus-visible:ring-white/35
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#05070D]
              focus-visible:shadow-[0_0_0_1px_rgb(var(--ei-aurora-blue-rgb)/0.22),0_0_28px_rgb(var(--ei-aurora-blue-rgb)/0.08)]
            "
          >
            <span
              className={
                selectedOption ? 'block truncate text-white/82' : 'block truncate text-white/42'
              }
            >
              {selectedOption?.label ?? placeholder}
            </span>

            <span
              aria-hidden="true"
              className="
                pointer-events-none absolute right-5 top-1/2 -translate-y-1/2
                text-[12px] text-white/42 transition-transform duration-500
                group-data-[headlessui-state=open]:rotate-180
              "
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
          </Listbox.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-2 scale-[0.98]"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 translate-y-2 scale-[0.98]"
          >
            <Listbox.Options
              className="
                absolute z-50 mt-3 max-h-72 w-full overflow-auto rounded-[16px]
                border border-white/[0.10]
                bg-[linear-gradient(to_bottom,rgb(var(--ei-deep-indigo-rgb)/0.96),rgb(var(--ei-void-black-rgb)/0.98))]
                p-2
                shadow-[0_24px_70px_rgb(var(--ei-void-black-rgb)/0.72),inset_0_1px_0_rgb(var(--ei-ice-white-rgb)/0.05)]
                backdrop-blur-xl
                focus:outline-none
              "
            >
              <Listbox.Option
                value=""
                className={({ active }) =>
                  `
                    relative cursor-pointer select-none rounded-[11px] px-4 py-3
                    font-mono text-[13px] transition-colors duration-300
                    ${active ? 'bg-white/[0.07] text-white/88' : 'text-white/48'}
                  `
                }
              >
                <span className="block truncate">Select an option</span>
              </Listbox.Option>

              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  value={option.value}
                  className={({ active, selected }) =>
                    `
                      relative cursor-pointer select-none rounded-[11px] px-4 py-3
                      font-mono text-[13px] transition-colors duration-300
                      ${
                        active
                          ? 'bg-[rgb(var(--ei-aurora-blue-rgb)/0.10)] text-white'
                          : selected
                            ? 'text-white/90'
                            : 'text-white/68'
                      }
                    `
                  }
                >
                  {({ selected }) => (
                    <div className="flex items-center justify-between gap-4">
                      <span className="block truncate">{option.label}</span>

                      {selected && (
                        <span
                          aria-hidden="true"
                          className="text-[rgb(var(--ei-aurora-blue-rgb)/0.92)]"
                        >
                          ✓
                        </span>
                      )}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}