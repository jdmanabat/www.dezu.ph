import { graphql } from 'gatsby';

import type { IPageCta } from './sanity-page-slug-parts';

interface ICta {
  id: string;
  isButton?: boolean;
  styles: {
    isBlock?: boolean;
    isLarge?: boolean;
    style: 'is-primary' | 'is-outline';
  };
  text: string;
}

interface IFileCta extends ICta {
  _type: 'fileCta';
  file: {
    asset: {
      url: string;
    };
  };
}

interface ILinkCta extends ICta {
  _type: 'linkCta';
  url: string;
}

type TCta = IPageCta | IFileCta | ILinkCta;

const SanityCtaParts = graphql`
  fragment SanityCtaParts on SanityFileCtaOrLinkCtaOrPageCta {
    ... on SanityFileCta {
      id: _key
      _type
      file {
        asset {
          url
        }
      }
      text
      isButton
      styles {
        isBlock
        isLarge
        style
      }
    }
    ... on SanityLinkCta {
      id: _key
      _type
      url
      text
      isButton
      styles {
        isBlock
        isLarge
        style
      }
    }
    ... on SanityPageCta {
      id: _key
      _type
      page {
        ...SanityPageSlugParts
      }
      text
      isButton
      linkSection
      styles {
        isBlock
        isLarge
        style
      }
    }
  }
`;

export { SanityCtaParts };
export type { ICta, IFileCta, ILinkCta, TCta };
