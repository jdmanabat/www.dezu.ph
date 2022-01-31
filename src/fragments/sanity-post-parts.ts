import { graphql } from 'gatsby';

const SanityPostParts = graphql`
  fragment SanityPostParts on SanityPostConnection {
    nodes {
      id
      _rawExcerpt
      mainImage {
        alt
        asset {
          gatsbyImageData(width: 640)
        }
      }
      publishedAt(formatString: "MMMM DD, YYYY")
      publishedAtISO: publishedAt
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

export { SanityPostParts };
