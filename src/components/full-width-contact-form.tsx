import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Input } from './form-elements/input';
import { NetlifyForm } from './form-elements/netlify-form';
import { Textarea } from './form-elements/textarea';

interface FormData {
  full_name: string;
  email_address: string;
  contact_number: string;
  message: string;
}

function FullWidthContactForm(): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onBlur', reValidateMode: 'onChange' });

  const classes =
    'block w-full border-light bg-light focus:border-secondary focus:ring-secondary focus:ring-opacity-50 focus:ring-2';

  return (
    <div className="text-light">
      <h2 className="text-2xl font-bold text-center text-primary">
        Get in touch
      </h2>
      <NetlifyForm
        handleSubmit={handleSubmit}
        className="grid w-full grid-cols-1 gap-6 mx-auto mt-6 max-w-prose"
      >
        <Input
          label="Name"
          autoComplete="name"
          className={classes}
          {...register('full_name', { required: true })}
          errors={errors}
        />
        <Input
          label="Email"
          type="email"
          autoComplete="email"
          className={classes}
          {...register('email_address', { required: true })}
          errors={errors}
        />
        <Input
          label="Phone"
          type="tel"
          autoComplete="tel"
          className={classes}
          {...register('contact_number', { required: true })}
          errors={errors}
        />
        <Textarea
          label="Leave a message..."
          className={classes}
          {...register('message', { required: true })}
          errors={errors}
        />
        <div className="text-center">
          <button
            type="submit"
            className="inline-block px-12 py-1 text-sm font-semibold tracking-wider uppercase border-2 bg-primary border-primary text-light"
          >
            Submit
          </button>
        </div>
      </NetlifyForm>
    </div>
  );
}

export { FullWidthContactForm };
