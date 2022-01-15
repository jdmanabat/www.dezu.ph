import { graphql } from 'gatsby';

interface ISanityContactForm {
  id: string;
  _type: 'contactForm';
  showContactInfo?: boolean;
}

const SanityContactFormParts = graphql`
  fragment SanityContactFormParts on SanityContactForm {
    id: _key
    _type
    showContactInfo
  }
`;

export { SanityContactFormParts };
export type { ISanityContactForm };
