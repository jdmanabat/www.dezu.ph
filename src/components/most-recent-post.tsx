import BlockContent from '@sanity/block-content-to-react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';

import type { ISanityPostPreview } from '../types';
import { classNames } from '../utils/classnames';
import {
  PROSE_COLOUR_MAP,
  TEXT_COLOUR_MAP,
} from '../utils/object-dictionaries';

interface MostRecentPostProps {
  post: ISanityPostPreview;
}

function MostRecentPost({ post }: MostRecentPostProps): JSX.Element {
  return (
    <div className="w-full px-4 mx-auto mt-12 max-w-screen-2xl sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2">
        <div className="relative">
          <div className="absolute inset-0 flex">
            <GatsbyImage
              image={post.mainImage.asset.gatsbyImageData}
              className="flex-1 bg-primary"
              alt=""
            />
          </div>
        </div>
        <div className="relative px-4 py-12 bg-dark text-light sm:px-6 lg:px-8">
          <span className="absolute top-0 px-4 py-1 rounded-b-md bg-primary right-4">
            Most recent
          </span>
          <time dateTime={post.publishedAtISO}>{post.publishedAt}</time>
          <BlockContent
            renderContainerOnSingleChild
            blocks={post._rawExcerpt}
            className={classNames(
              'prose mt-5',
              TEXT_COLOUR_MAP.dark,
              PROSE_COLOUR_MAP.dark
            )}
          />
          <p className="mt-5">
            <Link
              to={`/blog/${post.slug.current}`}
              className="uppercase text-light"
            >
              Read more
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export { MostRecentPost };
