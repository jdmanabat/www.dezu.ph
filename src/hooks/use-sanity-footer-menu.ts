import { graphql, useStaticQuery } from 'gatsby';

interface INavLink {
  id: string;
  _type: 'navLink';
  url: string;
  title: string;
}

interface IHome {
  _type: 'homePage';
  slug: {
    current: string;
  };
}

interface IBlog {
  _type: 'blogPage';
  slug: {
    current: string;
  };
}

interface IPage {
  _type: 'page';
  id: string;
  title: string;
  slug: {
    current: string;
  };
}

interface INavPage {
  id: string;
  _type: string;
  page: IHome | IBlog | IPage;
  title: string;
}

interface INavPageDropdown {
  id: string;
  _type: 'navPage';
  page: IPage;
  title: string;
}

interface INavDropdown {
  id: string;
  _type: 'navDropdown';
  dropdownItems: Array<INavLink | INavPageDropdown>;
  title: 'Services';
}

interface ISanityMenu {
  columnOneName: string;
  columnOneItems: Array<INavLink | INavPage>;
  columnTwoName: string;
  columnTwoItems: Array<INavLink | INavPage>;
}

interface ISanityMenuQuery {
  sanityFooterMenu: ISanityMenu;
}

function useSanityFooterMenu(): ISanityMenu {
  const { sanityFooterMenu } = useStaticQuery<ISanityMenuQuery>(graphql`
    query SanityFooterMenuQuery {
      sanityFooterMenu(_id: { eq: "footerMenu" }) {
        columnOneName
        columnOneItems {
          ... on SanityNavLink {
            id: _key
            _type
            title
            url
          }
          ... on SanityNavPage {
            id: _key
            _type
            page {
              ... on SanityBlogPage {
                _type
              }
              ... on SanityHomePage {
                _type
              }
              ... on SanityPage {
                _type
                id
                title
                slug {
                  current
                }
              }
            }
            title
          }
        }
        columnTwoName
        columnTwoItems {
          ... on SanityNavLink {
            id: _key
            _type
            title
            url
          }
          ... on SanityNavPage {
            id: _key
            _type
            page {
              ... on SanityBlogPage {
                _type
              }
              ... on SanityHomePage {
                _type
              }
              ... on SanityPage {
                _type
                id
                title
                slug {
                  current
                }
              }
            }
            title
          }
        }
      }
    }
  `);
  return sanityFooterMenu;
}

export { useSanityFooterMenu };
export type {
  INavDropdown,
  INavLink,
  INavPage,
  INavPageDropdown,
  ISanityMenu,
  ISanityMenuQuery,
};
