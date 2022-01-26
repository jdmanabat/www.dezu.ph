import { ChevronRightIcon } from '@heroicons/react/outline';
import BlockContent from '@sanity/block-content-to-react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';

import type {
  ISanityService,
  ISanityServicesGrid,
} from '../../fragments/sanity-services-grid-parts';
import type { TColourScheme } from '../../types';
import { classNames } from '../../utils/classnames';
import {
  ACCENT_COLOUR_MAP,
  BG_COLOUR_MAP,
  PROSE_COLOUR_MAP,
  TEXT_COLOUR_MAP,
} from '../../utils/object-dictionaries';

const LARGE_SERVICE_CARDS_MAP = {
  2: 'md:w-1/2',
  3: 'md:w-1/3',
  4: 'md:w-1/4',
  5: 'md:w-1/3',
  6: 'md:w-1/3',
};

const SMALL_SERVICE_CARDS_MAP = {
  2: 'lg:w-1/2',
  3: 'lg:w-1/3',
  4: 'lg:w-1/4',
  5: 'lg:w-1/5',
  6: 'lg:w-1/6',
};

interface ServicesGridProps {
  servicesGrid: ISanityServicesGrid;
}

function ServicesGrid({ servicesGrid }: ServicesGridProps): JSX.Element {
  return (
    <div
      className={classNames(
        BG_COLOUR_MAP[servicesGrid.colourScheme],
        servicesGrid.backgroundImage?.asset
          ? 'relative md:aspect-w-16 md:aspect-h-9 overflow-hidden'
          : ''
      )}
    >
      {servicesGrid.backgroundImage?.asset ? (
        <>
          <div
            className={classNames(
              'absolute inset-0 flex md:pointer-events-none'
            )}
          >
            <GatsbyImage
              image={servicesGrid.backgroundImage.asset.gatsbyImageData}
              alt={servicesGrid.backgroundImage.alt || ''}
              className="flex-1"
            />
          </div>
          <div className="absolute inset-0 flex bg-opacity-60 bg-dark" />
        </>
      ) : null}
      <div className="relative flex flex-col justify-center w-full h-full px-4 py-12 sm:px-6 lg:px-24 lg:py-24">
        <p
          className={classNames(
            TEXT_COLOUR_MAP[servicesGrid.colourScheme],
            'text-lg font-semibold text-center mx-auto max-w-prose lg:max-w-4xl mb-2'
          )}
        >
          {servicesGrid.subtitle}
        </p>
        <h2
          className={classNames(
            TEXT_COLOUR_MAP[servicesGrid.colourScheme],
            'text-4xl font-semibold text-center mx-auto max-w-prose lg:max-w-4xl'
          )}
        >
          {servicesGrid.title}
        </h2>
        <div className="w-full mx-auto max-w-prose lg:max-w-6xl">
          <ul className="flex flex-wrap justify-center mt-10 -mx-4 ">
            {servicesGrid.services.map((service) =>
              servicesGrid.layout === 'large' ? (
                <ServiceLargeLayout
                  key={service.id}
                  service={service}
                  colourScheme={servicesGrid.colourScheme}
                  numberOfServices={servicesGrid.services.length}
                />
              ) : (
                <ServiceSmallLayout
                  key={service.id}
                  service={service}
                  colourScheme={servicesGrid.colourScheme}
                  numberOfServices={servicesGrid.services.length}
                />
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

interface ServiceLargeLayoutProps {
  service: ISanityService;
  colourScheme: TColourScheme;
  numberOfServices: number;
}

function ServiceLargeLayout({
  service,
  colourScheme,
  numberOfServices,
}: ServiceLargeLayoutProps): JSX.Element {
  let href;
  if (service.page?._type === 'homePage') href = '/';
  if (service.page?._type === 'blogPage') href = '/blog/';
  if (service.page?._type === 'page') href = `/${service.page.slug.current}/`;
  const imageClassnames =
    service.figure?.customRatio === 0
      ? 'flex justify-center'
      : 'absolute inset-0 flex w-full h-full';

  return (
    <li
      className={classNames(
        'p-4 mt-12 w-full max-w-lg sm:w-1/2',
        LARGE_SERVICE_CARDS_MAP[numberOfServices]
      )}
    >
      <div
        className="relative overflow-hidden"
        style={{
          paddingBottom: `${100 / service.figure?.customRatio}%`,
        }}
      >
        {service.figure?.asset ? (
          <Link
            aria-hidden
            tabIndex={-1}
            to={href}
            className={classNames(imageClassnames)}
          >
            <GatsbyImage
              image={service.figure?.asset.gatsbyImageData}
              alt={service.figure?.alt ?? ''}
              className={
                service.figure.customRatio === 0
                  ? 'w-12 lg:w-16 h-auto'
                  : 'flex-1'
              }
            />
          </Link>
        ) : null}
      </div>
      <div className="mt-4">
        <h3
          className={classNames(
            TEXT_COLOUR_MAP[colourScheme],
            'text-4xl font-semibold text-center'
          )}
        >
          {service.title}
        </h3>
        <p
          className={classNames(
            TEXT_COLOUR_MAP[colourScheme],
            'text-xl font-semibold text-center mt-2'
          )}
        >
          {service.subtitle}
        </p>
        {service._rawDescription ? (
          <BlockContent
            renderContainerOnSingleChild
            blocks={service._rawDescription}
            className={classNames(
              'prose',
              TEXT_COLOUR_MAP[colourScheme],
              PROSE_COLOUR_MAP[colourScheme]
            )}
          />
        ) : null}
        {href && (
          <p>
            <Link
              to={href}
              aria-label={`Read more about ${service.title}`}
              className={classNames(
                ACCENT_COLOUR_MAP[colourScheme],
                'inline-flex items-center mt-4 space-x-1 font-bold'
              )}
            >
              <span>Read more</span>
              <ChevronRightIcon className="w-3 h-3" />
            </Link>
          </p>
        )}
      </div>
    </li>
  );
}

interface ServiceSmallLayoutProps {
  service: ISanityService;
  colourScheme: TColourScheme;
  numberOfServices: number;
}

function ServiceSmallLayout({
  service,
  colourScheme,
  numberOfServices,
}: ServiceSmallLayoutProps): JSX.Element {
  let href;
  if (service.page._type === 'homePage') href = '/';
  if (service.page._type === 'blogPage') href = '/blog/';
  if (service.page._type === 'page') href = `/${service.page.slug.current}/`;
  return (
    <li
      className={classNames(
        'mt-12 w-full max-w-lg sm:w-1/2',
        SMALL_SERVICE_CARDS_MAP[numberOfServices]
      )}
    >
      <Link
        to={href}
        aria-label={service.title}
        className="block p-4 rounded group"
      >
        <div className="relative overflow-hidden aspect-w-1 aspect-h-1">
          {service.figure?.asset ? (
            <div className="absolute inset-0 flex w-full h-full">
              <GatsbyImage
                image={service.figure.asset.gatsbyImageData}
                alt={service.figure.alt ?? ''}
                className="flex-1"
              />
            </div>
          ) : null}
        </div>
        <div>
          <h3
            className={classNames(
              TEXT_COLOUR_MAP[colourScheme],
              'mt-4 text-lg font-semibold text-center group-hover:text-primary transition duration-150 ease-in-out'
            )}
          >
            {service.title}
          </h3>
          {service._rawDescription ? (
            <BlockContent
              renderContainerOnSingleChild
              blocks={service._rawDescription}
              className={classNames(
                'prose',
                TEXT_COLOUR_MAP[colourScheme],
                PROSE_COLOUR_MAP[colourScheme]
              )}
            />
          ) : null}
        </div>
      </Link>
    </li>
  );
}

export { ServicesGrid };
