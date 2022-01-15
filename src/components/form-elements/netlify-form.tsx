import { navigate } from 'gatsby';
import * as React from 'react';
import type { UseFormHandleSubmit } from 'react-hook-form';

type Encode = Record<string, string> & {
  'form-name': string;
};

function encode(data: Encode): string {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

interface NetlifyFormProps {
  action?: string;
  children: React.ReactNode;
  name?: string;
  className?: string;
  handleSubmit: UseFormHandleSubmit<Record<string, string>>;
  props?: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLFormElement> &
    React.FormHTMLAttributes<HTMLFormElement>;
}

function NetlifyForm({
  action = '/success/',
  children,
  name = 'contact_form',
  className,
  handleSubmit,
  ...props
}: NetlifyFormProps): JSX.Element {
  const onSubmit = handleSubmit((data, event) => {
    if (event) {
      event.preventDefault();
      const form = event.target;
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...data,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        // eslint-disable-next-line no-alert
        .catch((error) => alert(error));
    }
  });
  return (
    <form
      name={name}
      action={action}
      method="POST"
      data-netlify
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className={className}
      {...props}
    >
      <div className="hidden">
        <label htmlFor="bot-field">
          Don't fill this out if you're human:
          <input id="bot-field" name="bot-field" />
        </label>
      </div>
      {children}
    </form>
  );
}

export { NetlifyForm };
