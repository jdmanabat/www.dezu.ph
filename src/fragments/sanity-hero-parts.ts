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
  subheading: string;
  body: string;
  isCentered?: boolean;
  anchorTargetID?: string;
  isSmall?: boolean;
}

const SanityHeroParts = graphql`
  fragment SanityHeroParts on SanityHero {
    id: _key
    _type
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
    subheading
    heading {
      id: _key
      isUnderlined
      text
    }
    body
    isCentered
    anchorTargetID
  }
`;

export { SanityHeroParts };
export type { ISanityHero };
