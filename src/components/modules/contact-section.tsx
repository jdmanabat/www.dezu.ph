import * as React from 'react';

import type { ISanityContactForm } from '../../fragments/sanity-contact-form-parts';
import { ContactForm } from '../contact-form';
import { ContactInfo } from '../contact-info';
import { FullWidthContactForm } from '../full-width-contact-form';

interface ContactSectionProps {
  contactSection: ISanityContactForm;
}

function ContactSection({ contactSection }: ContactSectionProps): JSX.Element {
  return (
    <div id="contact-form" className="bg-dark">
      <div className="w-full px-4 py-12 mx-auto max-w-prose lg:py-24 lg:max-w-screen-2xl sm:px-6 lg:px-8">
        {contactSection?.showContactInfo === true ? (
          <div className="grid gap-8 lg:grid-cols-2">
            <ContactInfo title="Contact us" />
            <ContactForm />
          </div>
        ) : (
          <FullWidthContactForm />
        )}
      </div>
    </div>
  );
}

export { ContactSection };
