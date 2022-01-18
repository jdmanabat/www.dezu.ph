import type { HLocation } from '@reach/router';
import { graphql } from 'gatsby';
import * as React from 'react';

import { Layout } from '../../components/layout';
import { MostRecentPost } from '../../components/most-recent-post';
import { PostPreviews } from '../../components/post-previews';
import { SanityModules } from '../../components/sanity-modules';
import { SEO } from '../../components/seo';
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
    };
  };
  location: HLocation;
}

function BlogPageTemplate({
  data,
  location,
}: BlogPageTemplateProps): JSX.Element {
  const { hero, seo } = data.sanityBlogPage;
  return (
    <>
      <SEO
        title={seo?.metaTitle}
        image={seo?.shareGraphic?.asset.url}
        pathname={location.pathname}
      />
      <Layout>
        <SanityModules modules={[hero]} />
        <MostRecentPost post={data.mostRecentPost.nodes[0]} />
        <PostPreviews
          posts={data.allSanityPost.nodes}
          totalCount={data.allSanityPost.totalCount - 1}
        />
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
    allSanityPost(skip: 1, sort: { fields: publishedAt, order: DESC }) {
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
