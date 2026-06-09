import { useId, type TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface EchoTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  hint?: string;
  error?: string;
  fieldClassName?: string;
}

export function EchoTextarea({
  label,
  hint,
  error,
  id,
  className,
  fieldClassName,
  required,
  ...props
}: EchoTextareaProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const descriptionId = hint || error ? `${fieldId}-description` : undefined;

  return (
    <div className={cn("ei-form-field", fieldClassName)} data-invalid={error ? "true" : "false"}>
      <label htmlFor={fieldId} className="ei-form-label">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <textarea
        id={fieldId}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={descriptionId}
        className={cn("ei-form-textarea", className)}
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
