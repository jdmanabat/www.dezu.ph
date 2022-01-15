import * as React from 'react';
import { DeepMap, FieldError } from 'react-hook-form';

import { ErrorMessage } from './error-message';

interface InputProps {
  autoComplete?: string;
  className?: string;
  errors: DeepMap<Record<string, unknown>, FieldError>;
  label: string;
  name: string;
  type?: 'email' | 'number' | 'password' | 'search' | 'tel';
  props?: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLInputElement> &
    React.InputHTMLAttributes<HTMLInputElement>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { autoComplete, className, errors, label, name, type = 'text', ...props },
    ref
  ) => {
    const hasErrors = Boolean(errors?.[name]);
    return (
      <div>
        <label htmlFor={name} className="block">
          <span className="sr-only">{label}</span>
          <input
            id={name}
            name={name}
            type={type}
            placeholder={label}
            ref={ref}
            aria-invalid={hasErrors}
            autoComplete={autoComplete}
            className={className}
            {...props}
          />
        </label>
        <ErrorMessage errors={errors} name={name} label={label} />
      </div>
    );
  }
);

export { Input };
