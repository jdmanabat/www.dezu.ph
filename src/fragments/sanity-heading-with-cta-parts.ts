import { graphql } from 'gatsby';

import type { IHeading, TColourScheme } from '../types';
import type { TCta } from './sanity-cta-parts';

interface ISanityHeadingWithCta {
  id: string;
  _type: 'headingWithCta';
  ctas?: TCta[];
  colourScheme: TColourScheme;
  heading: IHeading[];
}

const SanityHeadingWithCtaParts = graphql`
  fragment SanityHeadingWithCtaParts on SanityHeadingWithCta {
    id: _key
    _type
    colourScheme
    ctas {
      ...SanityCtaParts
    }
    heading {
      id: _key
      isUnderlined
      text
    }
  }
`;

export { SanityHeadingWithCtaParts };
export type { ISanityHeadingWithCta };
