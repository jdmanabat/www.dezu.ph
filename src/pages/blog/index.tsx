import type { HLocation } from '@reach/router';
import { graphql } from 'gatsby';
import * as React from 'react';

import { Layout } from '../../components/layout';
import { MostRecentPost } from '../../components/most-recent-post';
import { PostPreviews } from '../../components/post-previews';
import { SanityModules } from '../../components/sanity-modules';
import { SEO } from '../../components/seo';
import { ISanityHeadingWithCta } from '../../fragments/sanity-heading-with-cta-parts';
import { ISanityHero } from '../../fragments/sanity-hero-parts';
import type { ISanityPostPreview, ISeo } from '../../types';

interface BlogPageTemplateProps {
  data: {
    allSanityPost: {
      nodes: ISanityPostPreview[];
      totalCount: number;
    };
    mostRecentPost: {
      nodes: ISanityPostPreview[];
    };
    sanityBlogPage: {
      hero: ISanityHero;
      seo: ISeo;
      headingWithCta: ISanityHeadingWithCta;
    };
  };
  location: HLocation;
}

function BlogPageTemplate({
  data,
  location,
}: BlogPageTemplateProps): JSX.Element {
  const { hero, seo, headingWithCta } = data.sanityBlogPage;
  const blogHero = { ...hero, ...{ isSmall: true } };

  console.log(headingWithCta);
  return (
    <>
      <SEO
        title={seo?.metaTitle}
        image={seo?.shareGraphic?.asset.url}
        pathname={location.pathname}
      />
      <Layout>
        <SanityModules modules={[blogHero]} />
        {/* <MostRecentPost post={data.mostRecentPost.nodes[0]} /> */}
        {data.allSanityPost.nodes.length > 0 ? (
          <PostPreviews
            posts={data.allSanityPost.nodes}
            totalCount={data.allSanityPost.totalCount}
          />
        ) : (
          <div className="w-full max-w-4xl px-4 py-24 mx-auto text-center sm:px-6 lg:px-24">
            <p className="text-lg text-center">
              Sorry, there is no posts available yet.
            </p>
          </div>
        )}

        <SanityModules modules={[headingWithCta]} />
      </Layout>
    </>
  );
}

export const query = graphql`
  query BlogPageQuery {
    sanityBlogPage(_id: { eq: "blogPage" }) {
      hero {
        ...SanityHeroParts
      }
      headingWithCta {
        ...SanityHeadingWithCtaParts
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
    allSanityPost(sort: { fields: publishedAt, order: DESC }) {
      ...SanityPostParts
      totalCount
    }
    mostRecentPost: allSanityPost(
      limit: 1
      sort: { fields: publishedAt, order: DESC }
    ) {
      ...SanityPostParts
    }
  }
`;

export default BlogPageTemplate;
