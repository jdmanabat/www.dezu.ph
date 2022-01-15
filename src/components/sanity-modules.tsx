import * as React from 'react';

import type { ISanityContactForm } from '../fragments/sanity-contact-form-parts';
import type { ISanityCopyWithImage } from '../fragments/sanity-copy-with-image-parts';
import type { ISanityFaqs } from '../fragments/sanity-frequently-asked-questions-parts';
import type { ISanityGoogleMap } from '../fragments/sanity-google-map-parts';
import type { ISanityHeadingWithCta } from '../fragments/sanity-heading-with-cta-parts';
import type { ISanityHero } from '../fragments/sanity-hero-parts';
import type { ISanityServicesGrid } from '../fragments/sanity-services-grid-parts';
import { ContactSection } from './modules/contact-section';
import { CopyWithImage } from './modules/copy-with-image';
import { FAQs } from './modules/faqs';
import { GoogleMap } from './modules/google-map';
import { HeadingWithCta } from './modules/heading-with-cta';
import { Hero } from './modules/hero';
import { ServicesGrid } from './modules/services-grid';

type TSanityModule =
  | ISanityHero
  | ISanityCopyWithImage
  | ISanityServicesGrid
  | ISanityHeadingWithCta
  | ISanityFaqs
  | ISanityContactForm
  | ISanityGoogleMap;

interface SanityModulesProps {
  modules: TSanityModule[];
}

function SanityModules({ modules }: SanityModulesProps): JSX.Element {
  return (
    <>
      {modules.map((module) => {
        if (!module) return null;
        return <SanityModule key={module.id} module={module} />;
      })}
    </>
  );
}

interface SanityModuleProps {
  module: TSanityModule;
}

function SanityModule({ module }: SanityModuleProps): JSX.Element | null {
  switch (module._type) {
    case 'hero':
      return <Hero hero={module} />;

    case 'copyWithImage':
      return <CopyWithImage copyWithImage={module} />;

    case 'servicesGrid':
      return <ServicesGrid servicesGrid={module} />;

    case 'headingWithCta':
      return <HeadingWithCta headingWithCta={module} />;

    case 'frequentlyAskedQuestions':
      return <FAQs frequentlyAskedQuestions={module} />;

    case 'contactForm':
      return <ContactSection contactSection={module} />;

    case 'googleMap':
      return <GoogleMap googleMap={module} />;

    default:
      return null;
  }
}

export { SanityModules };
export type { TSanityModule };
