import type { HLocation } from '@reach/router';
import { graphql } from 'gatsby';
import * as React from 'react';

import { Layout } from '../components/layout';
import type { TSanityModule } from '../components/sanity-modules';
import { SanityModules } from '../components/sanity-modules';
import { SEO } from '../components/seo';
import type { ISeo } from '../types';

interface NotFoundPageProps {
  data: {
    sanityErrorPage: {
      modules: TSanityModule[];
      seo: ISeo;
    };
  };
  location: HLocation;
}

function NotFoundPage({ data, location }: NotFoundPageProps): JSX.Element {
  const { modules, seo } = data.sanityErrorPage;
  return (
    <>
      <SEO
        title={seo?.metaTitle}
        image={seo?.shareGraphic?.asset.url}
        pathname={location.pathname}
      />
      <Layout>
        <SanityModules modules={modules} />
      </Layout>
    </>
  );
}

export const query = graphql`
  query ErrorPageQuery {
    sanityErrorPage(_id: { eq: "errorPage" }) {
      modules {
        ... on SanityHero {
          ...SanityHeroParts
        }
        ... on SanityCopyWithImage {
          ...SanityCopyWithImageParts
        }
        ... on SanityServicesGrid {
          ...SanityServicesGridParts
        }
        ... on SanityContactForm {
          ...SanityContactFormParts
        }
        ... on SanityList {
          ...SanityListParts
        }
      }
      seo {
        metaDesc
        metaTitle
        shareDesc
        shareGraphic {
          asset {
            url
          }
        }
        shareTitle
      }
    }
  }
`;

// ... on SanityFrequentlyAskedQuestions {
//   ...SanityFrequentlyAskedQuestionsParts
// }
// ... on SanityGoogleMap {
//   ...SanityGoogleMapParts
// }

export default NotFoundPage;
