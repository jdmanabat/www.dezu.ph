import { graphql } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import type { TColourScheme, TLayout, TCustomRatio } from '../types';
import type { ISanityFigure } from './sanity-figure-parts';

interface IPage {
  _type: 'page';
  slug: {
    current: 'services';
  };
}

interface IHome {
  _type: 'homePage';
}

interface IBlog {
  _type: 'blogPage';
}

type TPage = IPage | IHome | IBlog;

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

interface ISanityService {
  id: string;
  _rawDescription: [];
  figure: ISanityFigure;
  page: TPage;
  title: string;
  subtitle: string;
}

interface ISanityServicesGrid {
  id: string;
  _type: 'servicesGrid';
  colourScheme: TColourScheme;
  layout: TLayout;
  services: ISanityService[];
  title: 'Our service';
  subtitle: string;
  backgroundImage: IBackgroundImage;
}

const SanityServicesGridParts = graphql`
  fragment SanityServicesGridParts on SanityServicesGrid {
    id: _key
    _type
    colourScheme
    layout
    services {
      id: _key
      _rawDescription
      figure {
        ...SanityFigureParts
      }
      page {
        ...SanityPageSlugParts
      }
      title
      subtitle
    }
    title
    subtitle
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
  }
`;

export { SanityServicesGridParts };
export type { ISanityService, ISanityServicesGrid };
