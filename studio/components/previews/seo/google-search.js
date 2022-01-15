import PropTypes from 'prop-types';
import * as React from 'react';

import { assemblePageUrl } from './frontend-utils';
// import styles from './seo-preview.css'

function GoogleSearchResult({
  default: defaultSEO = null,
  document = null,
  options,
  width = 580,
}) {
  const { seo } = document;

  const url = assemblePageUrl({ document, options });
  const websiteUrlWithoutProtocol = url.split('://')[1];

  const metaTitle = seo?.metaTitle || defaultSEO?.metaTitle;
  const metaDesc = seo?.metaDesc || defaultSEO?.metaDesc;

  return (
    <div>
      <h3>Google search result preview</h3>
      <div>
        {metaTitle ? (
          <div>
            <div style={{ width }}>
              <div>{websiteUrlWithoutProtocol}</div>
              <div>{metaTitle}</div>

              {metaDesc && <div>{metaDesc}</div>}
            </div>
          </div>
        ) : (
          <p>Please add a title and fill out your SEO fields first.</p>
        )}
      </div>
    </div>
  );
}

GoogleSearchResult.propTypes = {
  default: PropTypes.object,
  document: PropTypes.object,
  width: PropTypes.number,
  options: PropTypes.any,
};

export default GoogleSearchResult;
