import { graphql, useStaticQuery } from 'gatsby';

interface ISanitySEOSettings {
  metaDesc: string;
  metaTitle: string;
  shareDesc: string;
  shareGraphic: {
    asset: {
      url: string;
    };
  };
  shareTitle: string;
  siteTitle: string;
}

interface ISanitySEOSettingsQuery {
  sanitySeoSettings: ISanitySEOSettings;
}

function useSanitySEOSettings(): ISanitySEOSettings {
  const { sanitySeoSettings } = useStaticQuery<ISanitySEOSettingsQuery>(graphql`
    query SanitySEOSettingsQuery {
      sanitySeoSettings(_id: { eq: "seoSettings" }) {
        metaDesc
        metaTitle
        shareDesc
        shareGraphic {
          asset {
            url
          }
        }
        shareTitle
        siteTitle
      }
    }
  `);
  return sanitySeoSettings;
}

export { useSanitySEOSettings };
export type { ISanitySEOSettings, ISanitySEOSettingsQuery };
