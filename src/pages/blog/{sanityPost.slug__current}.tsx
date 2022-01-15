import type { HLocation } from '@reach/router';
import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';

import { Layout } from '../../components/layout';
import { SEO } from '../../components/seo';
import type { ISanityPost } from '../../types';

interface PostPageProps {
  data: {
    sanityPost: ISanityPost;
  };
  location: HLocation;
}

function PostPage({ data, location }: PostPageProps): JSX.Element {
  const { sanityPost } = data;
  return (
    <>
      <SEO
        title={sanityPost.title}
        image={sanityPost.seo?.shareGraphic?.asset.url}
        pathname={location.pathname}
      />
      <Layout>
        <Hero hero={sanityPost} />
        <article>
          <BlockContent
            renderContainerOnSingleChild
            blocks={sanityPost._rawBody}
            className="w-full py-12 mx-auto prose"
          />
        </article>
      </Layout>
    </>
  );
}

interface HeroProps {
  hero: ISanityPost;
}

function Hero({ hero }: HeroProps): JSX.Element {
  return (
    <div className="relative max-h-[24rem]">
      <div className="md:aspect-w-16 md:aspect-h-9">
        {hero.mainImage?.asset ? (
          <div className="absolute inset-0 flex md:inset-auto max-h-[24rem]">
            <GatsbyImage
              image={hero.mainImage.asset.gatsbyImageData}
              alt={hero.mainImage.alt || ''}
              className="flex-1"
            />
          </div>
        ) : null}
        <div className="relative flex flex-col items-center justify-center py-12 text-center bg-opacity-25 max-h-[24rem] bg-dark px-4 sm:px-6 lg:px-8">
          <h1 className="inline-block max-w-4xl text-5xl font-semibold leading-tight uppercase text-light">
            {hero.title}
          </h1>
          <p className="mt-2 text-xl font-medium uppercase text-light">
            <time dateTime={hero.publishedAtISO}>{hero.publishedAt}</time>
          </p>
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query PostPageQuery($slug__current: String!) {
    sanityPost(slug: { current: { eq: $slug__current } }) {
      id
      _type
      _rawBody
      _rawExcerpt
      mainImage {
        alt
        asset {
          gatsbyImageData(width: 1920)
        }
      }
      publishedAt(formatString: "MMMM DD, YYYY")
      publishedAtISO: publishedAt
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
      slug {
        current
      }
      title
    }
  }
`;

export default PostPage;
