import { graphql } from 'gatsby';

import type { TColourScheme } from '../types';

interface ISanityList {
  id: string;
  _type: 'list';
  colourScheme: TColourScheme;
  columnOne: Array<string>;
  columnTwo: Array<string>;
  title: string;
  subtitle: string;
}

const SanityListParts = graphql`
  fragment SanityListParts on SanityList {
    id: _key
    _type
    colourScheme
    title
    subtitle
    columnOne
    columnTwo
  }
`;

export { SanityListParts };
export type { ISanityList };
