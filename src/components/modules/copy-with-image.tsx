import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';

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
    <div className={classNames(BG_COLOUR_MAP[copyWithImage.colourScheme])}>
      <div className="w-full px-4 py-12 mx-auto max-w-prose lg:py-24 lg:max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {copyWithImage.modules.map((module) => {
            if (module._type === 'copy') {
              return (
                <Copy
                  key={module.id}
                  module={module}
                  colourScheme={copyWithImage.colourScheme}
                />
              );
            }
            if (module._type === 'figure') {
              return <Figure key={module.id} module={module} />;
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
}

function Figure({ module }: FigureProps): JSX.Element {
  return (
    <div className="relative order-last lg:order-none">
      <div
        className="relative overflow-hidden"
        style={{ paddingBottom: `${100 / module.customRatio}%` }}
      >
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
}

function Copy({ module, colourScheme }: CopyProps): JSX.Element {
  return (
    <div className="pb-5 lg:py-12">
      <BlockContent
        renderContainerOnSingleChild
        blocks={module._rawBody}
        className={classNames(
          'prose',
          TEXT_COLOUR_MAP[colourScheme],
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
