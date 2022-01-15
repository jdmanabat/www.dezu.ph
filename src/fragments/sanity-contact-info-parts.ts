import { graphql } from 'gatsby';

interface ISanityContactInfo {
  id: string;
  _type: 'contactInfo';
  title: string;
}

const SanityContactInfoParts = graphql`
  fragment SanityContactInfoParts on SanityContactInfo {
    id: _key
    _type
    title
  }
`;

export { SanityContactInfoParts };
export type { ISanityContactInfo };
