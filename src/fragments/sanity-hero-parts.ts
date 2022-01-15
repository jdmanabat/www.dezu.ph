import { graphql } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

import type { IHeading, TCustomRatio } from '../types';
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

interface ISanityHero {
  id: string;
  _type: 'hero';
  backgroundImage: IBackgroundImage;
  ctas?: TCta[];
  heading: IHeading[];
  layout: 'small' | 'large';
  isSmall: boolean;
}

const SanityHeroParts = graphql`
  fragment SanityHeroParts on SanityHero {
    id: _key
    _type
    isSmall
    backgroundImage {
      alt
      asset {
        gatsbyImageData(width: 1920)
      }
      customRatio
      hotspot {
        height
        width
        x
        y
      }
    }
    ctas {
      ...SanityCtaParts
    }
    heading {
      id: _key
      isBold
      text
    }
  }
`;

export { SanityHeroParts };
export type { ISanityHero };
