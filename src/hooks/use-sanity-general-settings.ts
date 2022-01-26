import { graphql, useStaticQuery } from 'gatsby';

interface IAddress {
  address: string;
  name: string;
}

interface IHours {
  id: string;
  days: string;
  hours: string;
}

interface SocialLinks {
  id: string;
  icon:
    | 'Apple'
    | 'Facebook'
    | 'Instagram'
    | 'Soundcloud'
    | 'Spotify'
    | 'Twitter'
    | 'YouTube'
    | 'Github'
    | 'LinkedIn';
  url: string;
}

interface ISanityGeneralSettings {
  addressOne: IAddress;
  addressTwo: IAddress;
  email: Array<string>;
  id: string;
  phoneNumber: Array<string>;
  siteURL: string;
  socialLinks: Array<SocialLinks>;
  bio: string;
}

interface ISanityGeneralSettingsQuery {
  sanityGeneralSettings: ISanityGeneralSettings;
}

function useSanityGeneralSettings(): ISanityGeneralSettings {
  const { sanityGeneralSettings } =
    useStaticQuery<ISanityGeneralSettingsQuery>(graphql`
      query SanityGeneralSettingsQuery {
        sanityGeneralSettings(_id: { eq: "generalSettings" }) {
          addressOne {
            address
            name
          }
          addressTwo {
            address
            name
          }
          email
          id
          phoneNumber
          siteURL
          bio
          socialLinks {
            id: _key
            icon
            url
          }
        }
      }
    `);
  return sanityGeneralSettings;
}

export { useSanityGeneralSettings };
