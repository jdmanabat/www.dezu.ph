import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';

import type { ISanityHero } from '../../fragments/sanity-hero-parts';
import { classNames } from '../../utils/classnames';
import { ButtonLink } from '../button-link';

interface HeroProps {
  hero: ISanityHero;
}

function Hero({ hero }: HeroProps): JSX.Element {
  const maxHeight = hero.isSmall ? 'max-h-[24rem]' : 'max-h-[36rem]';
  return (
    <div className={classNames(maxHeight, 'relative overflow-hidden')}>
      <div className="md:aspect-w-16 md:aspect-h-9">
        {hero.backgroundImage?.asset ? (
          <div
            className={classNames(
              maxHeight,
              'absolute inset-0 flex md:inset-auto md:pointer-events-none'
            )}
          >
            <GatsbyImage
              image={hero.backgroundImage.asset.gatsbyImageData}
              alt={hero.backgroundImage.alt || ''}
              className="flex-1"
            />
          </div>
        ) : null}
        <div
          className={classNames(
            maxHeight,
            'relative flex flex-col items-center justify-center py-12 text-center bg-opacity-25 bg-dark px-4 sm:px-6 lg:px-8'
          )}
        >
          <h1 className="max-w-4xl font-semibold text-light">
            {hero.heading.map((line, index) => (
              <React.Fragment key={line.id}>
                <span
                  className={`text-5xl inline-block leading-tight ${
                    line.isBold ? 'uppercase' : ''
                  }`}
                >
                  {line.text}
                </span>
                {index !== hero.heading.length - 1 ? <br /> : null}
              </React.Fragment>
            ))}
          </h1>
          <p className="mt-2">
            {hero.ctas
              ? hero.ctas.map((cta) => (
                  <ButtonLink
                    key={cta.id}
                    link={cta}
                    colourScheme={
                      cta.styles?.style === 'is-outline' ? 'dark' : 'light'
                    }
                  />
                ))
              : null}
          </p>
        </div>
      </div>
    </div>
  );
}

export { Hero };
