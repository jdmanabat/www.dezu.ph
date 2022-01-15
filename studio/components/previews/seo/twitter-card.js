import imageUrlBuilder from '@sanity/image-url';
// eslint-disable-next-line import/no-unresolved
import sanityClient from 'part:@sanity/base/client';
import PropTypes from 'prop-types';
import * as React from 'react';

import { assemblePageUrl } from './frontend-utils';
// import styles from './seo-preview.css'

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) => builder.image(source);

const author = {
  name: 'Phiranno Designs',
  handle: 'phirannodesigns',
  image:
    // eslint-disable-next-line no-secrets/no-secrets
    'https://scontent-syd2-1.cdninstagram.com/v/t51.2885-19/s320x320/115762971_574467673236601_5118064742609230871_n.jpg?tp=1&_nc_ht=scontent-syd2-1.cdninstagram.com&_nc_ohc=JvIPnUEV4bkAX_MaJyB&edm=ABfd0MgAAAAA&ccb=7-4&oh=13642370e43cdcaea8836abde367e8bf&oe=60A2F41F&_nc_sid=7bff83',
};

function TwitterCard({
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
      <h3>Twitter card preview</h3>
      <div>
        {shareTitle ? (
          <div>
            <div style={{ width }}>
              <div>
                <img
                  src={
                    author && typeof author.image === 'object'
                      ? urlFor(author.image).width(300).url()
                      : author.image
                  }
                  alt=""
                />
                <span>{author.name}</span>
                <span>@{author.handle}</span>
              </div>

              <div>
                <p>Tweet about this...</p>
              </div>
              <div>
                <div>
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
                    <h2>{shareTitle}</h2>
                    {shareDesc && <div>{shareDesc}</div>}
                    <div>
                      <span>
                        <svg viewBox="0 0 24 24">
                          <g>
                            <path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z" />
                            <path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z" />
                          </g>
                        </svg>
                      </span>
                      {websiteUrlWithoutProtocol}
                    </div>
                  </div>
                </div>
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

TwitterCard.propTypes = {
  default: PropTypes.object,
  document: PropTypes.object,
  width: PropTypes.number,
  options: PropTypes.any,
};

export default TwitterCard;
