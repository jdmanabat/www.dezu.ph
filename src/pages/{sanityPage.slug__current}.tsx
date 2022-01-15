import type { HLocation } from '@reach/router';
import { graphql } from 'gatsby';
import * as React from 'react';

import { Layout } from '../components/layout';
import { SanityModules, TSanityModule } from '../components/sanity-modules';
import { SEO } from '../components/seo';
import type { ISeo } from '../types';

interface PageTemplateProps {
  data: {
    sanityPage: {
      modules: TSanityModule[];
      seo: ISeo;
    };
  };
  location: HLocation;
}

function PageTemplate({ data, location }: PageTemplateProps): JSX.Element {
  const { modules, seo } = data.sanityPage;
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
  query PageTemplateQuery($slug__current: String!) {
    sanityPage(slug: { current: { eq: $slug__current } }) {
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
        ... on SanityFrequentlyAskedQuestions {
          ...SanityFrequentlyAskedQuestionsParts
        }
        ... on SanityContactForm {
          ...SanityContactFormParts
        }
        ... on SanityHeadingWithCta {
          ...SanityHeadingWithCtaParts
        }
        ... on SanityGoogleMap {
          ...SanityGoogleMapParts
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

export default PageTemplate;
