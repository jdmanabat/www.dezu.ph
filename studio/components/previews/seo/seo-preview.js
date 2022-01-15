/* eslint-disable promise/always-return, promise/catch-or-return, react/prop-types */
// eslint-disable-next-line import/no-unresolved
import sanityClient from 'part:@sanity/base/client';
import * as React from 'react';

import FacebookShare from './facebook-share';
import GoogleSearchResult from './google-search';
import TwitterCard from './twitter-card';

function SeoPreviews({ options, document }) {
  const [defaultSEO, setDefaultSEO] = React.useState({});
  const { displayed } = document;

  React.useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "seoSettings"][0]{
          siteTitle,
          metaTitle,
          metaDesc,
          shareTitle,
          shareDesc,
          shareGraphic
        }
      `
      )
      .then((seo) => {
        setDefaultSEO(seo || {});
      });
  }, []);

  return (
    <>
      <GoogleSearchResult
        default={defaultSEO}
        document={displayed}
        options={options}
      />
      <TwitterCard
        default={defaultSEO}
        document={displayed}
        options={options}
      />
      <FacebookShare
        default={defaultSEO}
        document={displayed}
        options={options}
      />
    </>
  );
}

export default SeoPreviews;
