import { graphql } from 'gatsby';

import type { TColourScheme } from '../types';
import type { ISanityContactInfo } from './sanity-contact-info-parts';
import type { ISanityCopy } from './sanity-copy-parts';
import type { ISanityFigure } from './sanity-figure-parts';

type TSanityCopyWithImage = ISanityFigure | ISanityCopy | ISanityContactInfo;

interface ISanityCopyWithImage {
  id: string;
  _type: 'copyWithImage';
  colourScheme: TColourScheme;
  anchorID?: string;
  modules: TSanityCopyWithImage[];
}

const SanityCopyWithImageParts = graphql`
  fragment SanityCopyWithImageParts on SanityCopyWithImage {
    id: _key
    _type
    colourScheme
    anchorID
    modules {
      ... on SanityCopy {
        ...SanityCopyParts
      }
      ... on SanityContactInfo {
        ...SanityContactInfoParts
      }
      ... on SanityFigure {
        ...SanityFigureParts
      }
    }
  }
`;

export { SanityCopyWithImageParts };
export type { ISanityCopyWithImage };
