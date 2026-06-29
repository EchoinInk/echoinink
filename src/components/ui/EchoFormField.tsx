import { useId, type InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface EchoFormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
  fieldClassName?: string;
}

export function EchoFormField({
  label,
  hint,
  error,
  id,
  className,
  fieldClassName,
  required,
  ...props
}: EchoFormFieldProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const descriptionId = hint || error ? `${fieldId}-description` : undefined;

  return (
    <div className={cn("ei-form-field", fieldClassName)} data-invalid={error ? "true" : "false"}>
      <label htmlFor={fieldId} className="ei-form-label">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <input
        id={fieldId}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={descriptionId}
        aria-errormessage={error ? descriptionId : undefined}
        className={cn("ei-form-input", className)}
        {...props}
      />
      {descriptionId ? (
        <p id={descriptionId} className="ei-form-message" data-error={error ? "true" : "false"}>
          {error ?? hint}
        </p>
      ) : null}
    </div>
  );
}
