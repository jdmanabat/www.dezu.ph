import type { HLocation } from '@reach/router';
import { graphql } from 'gatsby';
import * as React from 'react';

import { Layout } from '../components/layout';
import type { TSanityModule } from '../components/sanity-modules';
import { SanityModules } from '../components/sanity-modules';
import { SEO } from '../components/seo';
import type { ISeo } from '../types';

interface IndexPageProps {
  data: {
    sanityHomePage: {
      modules: TSanityModule[];
      seo: ISeo;
    };
  };
  location: HLocation;
}

function IndexPage({ data, location }: IndexPageProps): JSX.Element {
  const { modules, seo } = data.sanityHomePage;
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
  query HomePageQuery {
    sanityHomePage(_id: { eq: "homePage" }) {
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
        ... on SanityHeadingWithCta {
          ...SanityHeadingWithCtaParts
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

export default IndexPage;
