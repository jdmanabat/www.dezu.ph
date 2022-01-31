import type { HLocation } from '@reach/router';
import BlockContent from '@sanity/block-content-to-react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';

import { Layout } from '../../components/layout';
import { PostPreviews } from '../../components/post-previews';
import { SanityModules } from '../../components/sanity-modules';
import { SEO } from '../../components/seo';
import { ISanityHeadingWithCta } from '../../fragments/sanity-heading-with-cta-parts';
import type { ISanityPost, ISanityPostPreview } from '../../types';

interface PostPageProps {
  data: {
    sanityPost: ISanityPost;
    allSanityPost: {
      nodes: ISanityPostPreview[];
    };
  };
  location: HLocation;
}

function PostPage({ data, location }: PostPageProps): JSX.Element {
  const {
    sanityPost,
    allSanityPost: { nodes },
  } = data;

  const headingWithCta: ISanityHeadingWithCta = {
    id: '',
    _type: 'headingWithCta',
    colourScheme: 'primary',
    ctas: [
      {
        id: '83845e8b9070',
        _type: 'pageCta',
        page: {
          _type: 'page',
          slug: {
            current: 'contact',
          },
        },
        text: 'Contact us',
        isButton: true,
        linkSection: '',
        styles: {
          isBlock: undefined,
          isLarge: true,
          style: 'is-outline',
        },
      },
    ],
    heading: [
      {
        id: '29864ba662c5',
        isUnderlined: undefined,
        text: 'Unlock the power of water jetting.',
      },
    ],
  };

  const [posts, setPosts] = React.useState(data.allSanityPost.nodes);

  const [filterCategory, setFilterCategory] = React.useState(
    sanityPost.category.name
  );

  React.useEffect(() => {
    const filtered = data.allSanityPost.nodes.filter(
      (post) => post.category.name === filterCategory
    );

    setPosts(filtered);
  }, [data.allSanityPost.nodes, filterCategory]);

  const slicedPosts = posts.slice(0, 3);

  return (
    <>
      <SEO
        title={sanityPost.title}
        image={sanityPost.seo?.shareGraphic?.asset.url}
        pathname={location.pathname}
      />
      <Layout>
        <Hero hero={sanityPost} />
        <article className="max-w-4xl px-4 py-24 mx-auto sm:px-6">
          <p className="text-lg font-medium text-primary">
            {sanityPost.category.name}
          </p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight md:text-5xl text-dark">
            {sanityPost.title}
          </h1>
          <p className="mt-3 text-lg">
            <time dateTime={sanityPost.publishedAtISO}>
              {sanityPost.publishedAt}
            </time>
          </p>

          <BlockContent
            renderContainerOnSingleChild
            blocks={sanityPost._rawBody}
            className="w-full mx-auto mt-20 prose md:mt-24 max-w-none"
          />
        </article>

        {slicedPosts.length > 0 && (
          <PostPreviews
            posts={slicedPosts}
            totalCount={slicedPosts.length}
            title="Read more"
          />
        )}

        <SanityModules modules={[headingWithCta]} />
      </Layout>
    </>
  );
}

interface HeroProps {
  hero: ISanityPost;
}

function Hero({ hero }: HeroProps): JSX.Element {
  return (
    <div className="relative min-h-[24rem] overflow-hidden border-b-8 border-primary">
      <div className="h-full">
        {hero.mainImage?.asset ? (
          <div className="absolute inset-0 flex md:inset-auto max-h-[24rem]">
            <GatsbyImage
              image={hero.mainImage.asset.gatsbyImageData}
              alt={hero.mainImage.alt || ''}
              className="flex-1"
            />
          </div>
        ) : null}
        <div className="relative flex flex-col items-center justify-center py-12 text-center bg-opacity-25 min-h-[24rem] bg-dark px-4 sm:px-6 lg:px-8"></div>
      </div>
    </div>
  );
}

export const query = graphql`
  query PostPageQuery($slug__current: String!) {
    allSanityPost(sort: { fields: publishedAt, order: DESC }) {
      ...SanityPostParts
      totalCount
    }
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
      category {
        name
      }
    }
  }
`;

export default PostPage;
