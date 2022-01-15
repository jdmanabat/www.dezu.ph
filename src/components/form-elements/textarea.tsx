import * as React from 'react';
import { DeepMap, FieldError } from 'react-hook-form';

import { ErrorMessage } from './error-message';

type TextareaProps = {
  className: string;
  name: string;
  label: string;
  rows?: number;
  errors: DeepMap<Record<string, unknown>, FieldError>;
  props?: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLTextAreaElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, name, label, rows = 5, errors, ...props }, ref) => {
    const hasErrors = Boolean(errors?.[name]);
    return (
      <div>
        <label htmlFor={name} className="block">
          <span className="sr-only">{label}</span>
          <textarea
            id={name}
            name={name}
            rows={rows}
            placeholder={label}
            ref={ref}
            aria-invalid={hasErrors}
            className={className}
            {...props}
          />
        </label>
        <ErrorMessage errors={errors} name={name} label={label} />
      </div>
    );
  }
);

export { Textarea };
