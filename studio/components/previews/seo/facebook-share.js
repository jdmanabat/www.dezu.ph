import imageUrlBuilder from '@sanity/image-url';
// eslint-disable-next-line import/no-unresolved
import sanityClient from 'part:@sanity/base/client';
import PropTypes from 'prop-types';
import * as React from 'react';

import { assemblePageUrl } from './frontend-utils';
// import styles from './seo-preview.css'

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) => builder.image(source);

function FacebookShare({
  default: defaultSEO = null,
  document = null,
  options,
  width = 580,
}) {
  const { seo } = document;

  const url = assemblePageUrl({ document, options });
  const websiteUrlWithoutProtocol = url.split('://')[1];

  const shareTitle = seo?.shareTitle || defaultSEO?.shareTitle;
  const shareDesc = seo?.shareDesc || defaultSEO?.shareDesc;
  const shareGraphic = seo?.shareGraphic || defaultSEO?.shareGraphic;

  return (
    <div>
      <h3>Facebook share</h3>
      <div>
        {shareTitle ? (
          <div>
            <div style={{ width }}>
              <div>
                {shareGraphic ? (
                  <img
                    src={urlFor(shareGraphic.asset)
                      .width(1200)
                      .height(630)
                      .url()}
                    alt=""
                  />
                ) : (
                  <span />
                )}
              </div>
              <div>
                <div>{websiteUrlWithoutProtocol}</div>
                <div>
                  <a href={url} target="_blank" rel="noreferrer">
                    {shareTitle}
                  </a>
                </div>
                {shareDesc && <div>{shareDesc}</div>}
              </div>
            </div>
          </div>
        ) : (
          <p>Please add a title and fill out your SEO fields first.</p>
        )}
      </div>
    </div>
  );
}

FacebookShare.propTypes = {
  default: PropTypes.object,
  document: PropTypes.object,
  width: PropTypes.number,
  options: PropTypes.any,
};

export default FacebookShare;
