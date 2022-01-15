// First, we must import the schema creator
// Then import schema types from any plugins that might expose them
// eslint-disable-next-line import/no-unresolved
import schemaTypes from 'all:part:@sanity/base/schema-type';
// eslint-disable-next-line import/no-unresolved
import createSchema from 'part:@sanity/base/schema-creator';

// Array types
import blogPostPortableText from './arrays/blog-post-portable-text';
import ctas from './arrays/ctas';
import excerptPortableText from './arrays/excerpt-portable-text';
import richText from './arrays/rich-text';
import socialLink from './arrays/social-link';
// Document types
import menu from './documents/menu';
import page from './documents/page';
import blogPage from './documents/page-blog';
import errorPage from './documents/page-error';
import homePage from './documents/page-home';
import post from './documents/post';
import generalSettings from './documents/settings-general';
import seoSettings from './documents/settings-seo';
// Modules
import contactForm from './modules/contact-form';
import copyWithImage from './modules/copy-with-image';
import frequentlyAskedQuestions from './modules/frequently-asked-questions';
import googleMap from './modules/google-map';
import hero from './modules/hero';
import modules from './modules/modules';
import headingWithCta from './modules/heading-with-cta';
import servicesGrid from './modules/services-grid';
// Object types
import address from './objects/address';
import blogPostImage from './objects/blog-post-image';
import contactInfo from './objects/contact-info';
import copy from './objects/copy';
import faq from './objects/faq';
import figure from './objects/figure';
import fileCta from './objects/file-cta';
import googleMaps from './objects/google-maps';
import headingLine from './objects/heading-line';
import linkCta from './objects/link-cta';
import navDropdown from './objects/nav-dropdown';
import navLink from './objects/nav-link';
import navPage from './objects/nav-page';
import openHours from './objects/open-hours';
import pageCta from './objects/page-cta';
import seo from './objects/seo';
import service from './objects/service';
import styles from './objects/styles';
// String types
import colourScheme from './strings/colour-scheme';
import layout from './strings/layout';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: [
    ...schemaTypes,
    // Array types
    blogPostPortableText,
    ctas,
    excerptPortableText,
    richText,
    socialLink,
    // Document types
    blogPage,
    errorPage,
    generalSettings,
    homePage,
    menu,
    page,
    post,
    seoSettings,
    // Modules
    contactForm,
    copyWithImage,
    frequentlyAskedQuestions,
    googleMap,
    hero,
    modules,
    servicesGrid,
    headingWithCta,
    // Object types
    address,
    blogPostImage,
    contactInfo,
    copy,
    faq,
    figure,
    fileCta,
    googleMaps,
    headingLine,
    linkCta,
    navDropdown,
    navLink,
    navPage,
    openHours,
    pageCta,
    seo,
    service,
    styles,
    // String types
    colourScheme,
    layout,
  ],
});
