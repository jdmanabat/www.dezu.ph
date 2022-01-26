import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { FiChevronDown } from 'react-icons/fi';

import type { ISanityHero } from '../../fragments/sanity-hero-parts';
import { classNames } from '../../utils/classnames';
import { ButtonLink } from '../button-link';

interface HeroProps {
  hero: ISanityHero;
}

function Hero({ hero }: HeroProps): JSX.Element {
  // const maxHeight = hero.isSmall ? 'max-h-[24rem]' : 'max-h-[36rem]';
  const isCentered = hero.isCentered ? 'items-center text-center' : '';
  return (
    <div className={classNames('relative overflow-hidden')}>
      <div className="md:aspect-w-16 md:aspect-h-9">
        {hero.backgroundImage?.asset ? (
          <div
            className={classNames(
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
            'flex items-center relative bg-opacity-60 bg-dark min-h-[600px]'
          )}
        >
          <div
            className={classNames(
              hero.anchorTargetID ? 'pt-12 pb-12 lg:pb-28 ' : 'py-12',
              'w-full h-full px-4 sm:px-6 lg:px-24'
            )}
          >
            <div
              className={classNames(
                isCentered,
                'flex flex-col justify-center w-full relative mx-auto h-full'
              )}
            >
              {hero.subheading && (
                <p className="max-w-2xl mb-5 text-lg text-light">
                  {hero.subheading}
                </p>
              )}
              <h1 className="max-w-2xl font-semibold text-light">
                {hero.heading.map((line, index) => (
                  <React.Fragment key={line.id}>
                    <span className={`text-4xl inline-block leading-tight`}>
                      {line.text}
                    </span>
                    {index !== hero.heading.length - 1 ? <br /> : null}
                  </React.Fragment>
                ))}
              </h1>
              {hero.body && (
                <p className="max-w-2xl mt-5 text-xl text-light">{hero.body}</p>
              )}
              <p className="mt-12">
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
            {hero.anchorTargetID && (
              <div className="flex justify-center">
                <a href={`#${hero.anchorTargetID}`}>
                  <FiChevronDown className="w-8 h-8 text-light" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
