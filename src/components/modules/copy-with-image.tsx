import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { MdOutlineCancel, MdWarningAmber } from 'react-icons/md';

import type { ISanityCopy } from '../../fragments/sanity-copy-parts';
import type { ISanityCopyWithImage } from '../../fragments/sanity-copy-with-image-parts';
import type { ISanityFigure } from '../../fragments/sanity-figure-parts';
import type { TColourScheme } from '../../types';
import { classNames } from '../../utils/classnames';
import {
  BG_COLOUR_MAP,
  PROSE_COLOUR_MAP,
  TEXT_COLOUR_MAP,
} from '../../utils/object-dictionaries';
import { ButtonLink } from '../button-link';
import { ContactInfo } from '../contact-info';

interface CopyWithImageProps {
  copyWithImage: ISanityCopyWithImage;
}

function CopyWithImage({ copyWithImage }: CopyWithImageProps): JSX.Element {
  return (
    <div
      className={classNames(
        BG_COLOUR_MAP[copyWithImage.colourScheme],
        'relative'
      )}
      id={`${copyWithImage.anchorID}`}
    >
      <div className="">
        <div className="grid items-center lg:grid-cols-5">
          {copyWithImage.modules.map((module, index) => {
            const colSpan = index === 0 ? 'lg:col-span-3' : 'lg:col-span-2';

            if (module._type === 'copy') {
              return (
                <Copy
                  key={module.id}
                  module={module}
                  colSpan={colSpan}
                  colourScheme={copyWithImage.colourScheme}
                />
              );
            }
            if (module._type === 'figure') {
              return (
                <Figure key={module.id} colSpan={colSpan} module={module} />
              );
            }
            if (module._type === 'contactInfo') {
              return (
                <ContactInfo
                  key={module.id}
                  title={module.title}
                  colourScheme={copyWithImage.colourScheme}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

interface FigureProps {
  module: ISanityFigure;
  colSpan: string;
}

function Figure({ module, colSpan }: FigureProps): JSX.Element {
  return (
    <div
      className={classNames(
        colSpan,
        'relative order-last lg:order-none h-full w-full'
      )}
    >
      <div className="relative w-full h-full overflow-hidden aspect-w-4 aspect-h-3 lg:aspect-w-4 lg:aspect-h-5">
        <div className="absolute inset-0 flex w-full h-full">
          <GatsbyImage
            image={module.asset.gatsbyImageData}
            alt=""
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
}

interface CopyProps {
  module: ISanityCopy;
  colourScheme: TColourScheme;
  colSpan: string;
}
const serializers = {
  marks: {
    cancelBullet: (props) => (
      <span className="flex items-center pl-6">
        <MdOutlineCancel className="flex-shrink-0 mr-6 text-4xl text-primary" />
        {props.children}
      </span>
    ),
    warningBullet: (props) => (
      <span className="flex items-center pl-6">
        <MdWarningAmber className="flex-shrink-0 mr-6 text-4xl text-primary" />
        {props.children}
      </span>
    ),
    color: (props) => (
      <span style={{ color: props.mark.hex }}>{props.children}</span>
    ),
  },
};

function Copy({ module, colourScheme, colSpan }: CopyProps): JSX.Element {
  return (
    <div
      className={classNames(
        colSpan,
        'py-12 lg:py-24 relative overflow-hidden h-full pr-4 sm:pr-6 lg:pr-8 pl-4 sm:pl-6 lg:pl-24 flex',
        module.backgroundImage?.asset
          ? 'min-h-[836px] items-end'
          : ' items-center'
      )}
    >
      {module.backgroundImage?.asset ? (
        <>
          <div
            className={classNames(
              'absolute inset-0 flex md:pointer-events-none'
            )}
          >
            <GatsbyImage
              image={module.backgroundImage.asset.gatsbyImageData}
              alt={module.backgroundImage.alt || ''}
              className="flex-1"
            />
          </div>
          <div className="absolute inset-0 flex bg-opacity-60 bg-dark" />
        </>
      ) : null}
      <BlockContent
        renderContainerOnSingleChild
        blocks={module._rawBody}
        serializers={serializers}
        className={classNames(
          'prose relative',
          module.backgroundImage?.asset
            ? 'text-light'
            : TEXT_COLOUR_MAP[colourScheme],
          PROSE_COLOUR_MAP[colourScheme]
        )}
      />
      {module.ctas
        ? module.ctas.map((cta) => (
            <p key={cta.id} className="mt-5">
              <ButtonLink link={cta} colourScheme={colourScheme} />
            </p>
          ))
        : null}
    </div>
  );
}

export { CopyWithImage };
export type { ISanityCopyWithImage };
