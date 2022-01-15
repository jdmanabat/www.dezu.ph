import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import type { TCustomRatio } from '../types';

interface ISanityFigure {
  id: string;
  _type: 'figure';
  alt?: string;
  asset: {
    gatsbyImageData: IGatsbyImageData;
  };
  customRatio: TCustomRatio;
}

const SanityFigureParts = graphql`
  fragment SanityFigureParts on SanityFigure {
    id: _key
    _type
    alt
    asset {
      gatsbyImageData(width: 960)
    }
    customRatio
  }
`;

export { SanityFigureParts };
export type { ISanityFigure };
