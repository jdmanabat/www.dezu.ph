import { graphql } from 'gatsby';

import { ICta } from './sanity-cta-parts';

interface HomePageCta extends ICta {
  _type: 'homePage';
}

interface BlogPageCta extends ICta {
  _type: 'blogPage';
}

interface ISanityPageCta extends ICta {
  _type: 'pageCta';
  id: string;
  linkSection: string;
  page:
    | HomePageCta
    | BlogPageCta
    | {
        _type: 'page';
        slug: {
          current: string;
        };
      };
}

type IPageCta = HomePageCta | BlogPageCta | ISanityPageCta;

const SanityPageSlugParts = graphql`
  fragment SanityPageSlugParts on SanityHomePageOrPage {
    ... on SanityHomePage {
      _type
    }
    ... on SanityPage {
      _type
      slug {
        current
      }
    }
  }
`;

export { SanityPageSlugParts };
export type { IPageCta };
