import { graphql } from 'gatsby';

interface ISanityGoogleMap {
  id: string;
  _type: 'googleMap';
  showMap?: boolean;
}

const SanityGoogleMapParts = graphql`
  fragment SanityGoogleMapParts on SanityGoogleMap {
    id: _key
    _type
    showMap
  }
`;

export { SanityGoogleMapParts };
export type { ISanityGoogleMap };
