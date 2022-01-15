import S from '@sanity/desk-tool/structure-builder';
import {
  FiAlertOctagon,
  FiFileText,
  FiGlobe,
  FiHome,
  FiMenu,
  FiSettings,
} from 'react-icons/fi';

const hiddenDocTypes = (listItem) => ![
  'page',
  'homePage',
  'blogPage',
  'errorPage',
  'menu',
  'generalSettings',
  'seoSettings',
  'siteSettings',
].includes(listItem.getId());

export default () => S.list()
  .title('Website')
  .items([
    S.listItem()
      .title('Pages')
      .schemaType('page')
      .child(
        S.documentTypeList('page')
          .title('Pages')
          .child(
            (documentId) => S.document().documentId(documentId).schemaType('page'),
          ),
      ),
    S.divider(),
    S.listItem()
      .title('Home Page')
      .child(
        S.document()
          .title('Home Page')
          .id('homePage')
          .documentId('homePage')
          .schemaType('homePage'),
      )
      .icon(FiHome),
    S.divider(),
    S.listItem()
      .title('Blog Page')
      .child(
        S.document()
          .title('Blog Page')
          .id('blogPage')
          .documentId('blogPage')
          .schemaType('blogPage'),
      )
      .icon(FiFileText),
    S.divider(),
    // This returns an array of all the document types
    // defined in schema.js. We filter out those that we have
    // defined the structure above
    ...S.documentTypeListItems().filter((listItem) => hiddenDocTypes(listItem)),
    S.divider(),
    // Global settings
    S.listItem()
      .title('Settings')
      .child(
        S.list()
          .title('Settings')
          .items([
            // General Settings
            S.listItem()
              .title('General')
              .child(
                S.editor()
                  .id('generalSettings')
                  .schemaType('generalSettings')
                  .documentId('generalSettings'),
              )
              .icon(FiSettings),
            // 404 Page
            S.listItem()
              .title('Error Page')
              .child(
                S.editor()
                  .id('errorPage')
                  .schemaType('errorPage')
                  .documentId('errorPage'),
              )
              .icon(FiAlertOctagon),
            // SEO / Share settings
            S.listItem()
              .title('Default SEO / Share')
              .child(
                S.editor()
                  .id('seoSettings')
                  .schemaType('seoSettings')
                  .documentId('seoSettings'),
              )
              .icon(FiGlobe),
            // Menu
            S.listItem()
              .title('Menu')
              .child(
                S.editor().id('menu').schemaType('menu').documentId('menu'),
              )
              .icon(FiMenu),
          ]),
      )
      .icon(FiSettings),
  ]);
