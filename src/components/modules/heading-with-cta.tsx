import * as React from 'react';

import type { ISanityHeadingWithCta } from '../../fragments/sanity-heading-with-cta-parts';
import { classNames } from '../../utils/classnames';
import {
  BG_COLOUR_MAP,
  TEXT_COLOUR_MAP,
} from '../../utils/object-dictionaries';
import { ButtonLink } from '../button-link';

interface HeroProps {
  headingWithCta: ISanityHeadingWithCta;
}
function HeadingWithCta({ headingWithCta }: HeroProps): JSX.Element {
  return (
    <div
      className={classNames(
        BG_COLOUR_MAP[headingWithCta.colourScheme],
        TEXT_COLOUR_MAP[headingWithCta.colourScheme]
      )}
    >
      <div className="w-full max-w-4xl px-4 py-24 mx-auto text-center sm:px-6 lg:px-24">
        <h2 className="font-semibold">
          {headingWithCta.heading.map((line, index) => (
            <React.Fragment key={line.id}>
              <span
                className={classNames('inline-block leading-tight text-4xl')}
              >
                {line.text}
              </span>
              {index !== headingWithCta.heading.length - 1 ? <br /> : null}
            </React.Fragment>
          ))}
        </h2>

        <div className="mt-10">
          {headingWithCta.ctas
            ? headingWithCta.ctas.map((cta) => (
                <ButtonLink
                  key={cta.id}
                  link={cta}
                  colourScheme={headingWithCta.colourScheme}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export { HeadingWithCta };
