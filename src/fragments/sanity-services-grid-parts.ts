import { graphql } from 'gatsby';

import type { TColourScheme, TLayout } from '../types';
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

interface ISanityService {
  id: string;
  _rawDescription: [];
  figure: ISanityFigure;
  page: TPage;
  title: string;
}

interface ISanityServicesGrid {
  id: string;
  _type: 'servicesGrid';
  colourScheme: TColourScheme;
  layout: TLayout;
  services: ISanityService[];
  title: 'Our Services';
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
    }
    title
  }
`;

export { SanityServicesGridParts };
export type { ISanityService, ISanityServicesGrid };
