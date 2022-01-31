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
  const minHeight = hero.isSmall ? 'min-h-[24rem]' : 'min-h-[600px]';
  const customRatio = hero.isSmall ? '' : 'md:aspect-w-16 md:aspect-h-9';
  const isCentered = hero.isCentered ? 'items-center text-center' : '';
  return (
    <div className={classNames(minHeight, 'relative overflow-hidden')}>
      <div className={classNames(customRatio)}>
        {hero.backgroundImage?.asset ? (
          <div
            className={classNames(
              'absolute inset-0 flex md:inset-auto md:pointer-events-none h-full'
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
            minHeight,
            'flex items-center relative bg-opacity-60 bg-dark'
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
              <h1 className="max-w-2xl font-bold text-light">
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
              {hero.ctas.length > 0 ? (
                <p className="mt-12">
                  {hero.ctas
                    ? hero.ctas.map((cta) => (
                        <ButtonLink
                          key={cta.id}
                          link={cta}
                          colourScheme={
                            cta.styles?.style === 'is-outline'
                              ? 'dark'
                              : 'light'
                          }
                        />
                      ))
                    : null}
                </p>
              ) : (
                ''
              )}
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
