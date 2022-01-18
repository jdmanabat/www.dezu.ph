import { graphql } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

import type { TCustomRatio } from '../types';
import type { TCta } from './sanity-cta-parts';

interface IBackgroundImage {
  alt?: string;
  asset: {
    gatsbyImageData: IGatsbyImageData;
  };
  customRatio: TCustomRatio;
  hotspot: {
    height: number;
    width: number;
    x: number;
    y: number;
  };
}
interface ISanityCopy {
  id: string;
  _type: 'copy';
  _rawBody: [];
  ctas: TCta[];
  backgroundImage: IBackgroundImage;
}

const SanityCopyParts = graphql`
  fragment SanityCopyParts on SanityCopy {
    id: _key
    _type
    _rawBody
    ctas {
      ...SanityCtaParts
    }
    backgroundImage {
      alt
      asset {
        gatsbyImageData(width: 1500)
      }
      customRatio
      hotspot {
        height
        width
        x
        y
      }
    }
  }
`;

export { SanityCopyParts };
export type { ISanityCopy };
