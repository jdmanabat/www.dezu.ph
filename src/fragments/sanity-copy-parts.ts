import { graphql } from 'gatsby';

import type { TCta } from './sanity-cta-parts';

interface ISanityCopy {
  id: string;
  _type: 'copy';
  _rawBody: [];
  ctas: TCta[];
}

const SanityCopyParts = graphql`
  fragment SanityCopyParts on SanityCopy {
    id: _key
    _type
    _rawBody
    ctas {
      ...SanityCtaParts
    }
  }
`;

export { SanityCopyParts };
export type { ISanityCopy };
