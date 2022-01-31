import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useLocation } from '@reach/router';
import BlockContent from '@sanity/block-content-to-react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { nanoid } from 'nanoid';
import * as React from 'react';

import type { ISanityPostPreview } from '../types';
import { classNames } from '../utils/classnames';

const POSTS_PER_PAGE = 6;

interface PostPreviewsProps {
  posts: ISanityPostPreview[];
  totalCount: number;
  showPagination?: boolean;
  title?: string;
}

function PostPreviews({
  posts,
  totalCount,
  showPagination = true,
  title,
}: PostPreviewsProps): JSX.Element {
  const pageCount = Math.ceil(totalCount / POSTS_PER_PAGE);
  const { search } = useLocation();
  const currentPage = Number(new URLSearchParams(search).get('page') ?? 1);
  const index = currentPage - 1;
  const from = index * POSTS_PER_PAGE;
  const to = from + POSTS_PER_PAGE;

  return (
    <div className="relative px-4 py-24 sm:px-6 lg:px-24">
      <div className="relative mx-auto max-w-screen-2xl">
        {title && (
          <h2 className="text-3xl font-bold text-dark mb-7">{title}</h2>
        )}
        <div className="grid max-w-lg gap-8 mx-auto lg:grid-cols-3 lg:max-w-none">
          {posts.slice(from, to).map((post) => (
            <div
              key={nanoid()}
              className="relative flex flex-col overflow-hidden border border-solid rounded group border-dark-lighter hover:border-primary"
            >
              <div className="absolute top-0 left-0 z-20 w-full h-3 opacity-0 bg-primary group-hover:opacity-100" />
              <div className="relative z-10 flex flex-shrink-0 aspect-w-16 aspect-h-10 bg-dark-lighter">
                <Link
                  aria-hidden
                  tabIndex={-1}
                  to={`/blog/${post.slug.current}/`}
                  className="flex-1 block"
                >
                  {post.mainImage ? (
                    <GatsbyImage
                      image={post.mainImage.asset.gatsbyImageData}
                      alt={post.mainImage.alt || ''}
                      className="h-full"
                    />
                  ) : null}
                </Link>
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="">{post.category.name}</p>

                  <Link
                    to={`/blog/${post.slug.current}/`}
                    className="block mt-2"
                  >
                    <p className="text-xl font-semibold text-gray-900 line-clamp-2">
                      {post.title}
                    </p>
                    <BlockContent
                      renderContainerOnSingleChild
                      blocks={post._rawExcerpt}
                      className="mt-3 prose line-clamp-3"
                    />
                  </Link>
                </div>
                <p className="mt-4 text-lg">
                  <Link
                    aria-hidden
                    tabIndex={-1}
                    to={`/blog/${post.slug.current}/`}
                    className=" group-hover:border-b-2 border-primary group-hover:text-primary"
                  >
                    Read more
                  </Link>
                </p>
              </div>
            </div>
          ))}
        </div>

        {showPagination && (
          <Pagination currentPage={currentPage} pageCount={pageCount} />
        )}
      </div>
    </div>
  );
}

interface PaginationProps {
  currentPage: number;
  pageCount: number;
}

function Pagination({
  currentPage,
  pageCount,
}: PaginationProps): JSX.Element | null {
  if (pageCount <= 1) return null;
  return (
    <nav className="flex items-center justify-center px-4 mt-12 sm:px-0">
      <div className="flex justify-end flex-1 w-0 -mt-px">
        <Link
          aria-disabled={currentPage <= 1}
          tabIndex={currentPage <= 1 ? -1 : undefined}
          to={
            currentPage > 1 ? `/blog/?page=${currentPage - 1}` : `/blog/?page=1`
          }
          className={classNames(
            currentPage <= 1 && 'pointer-events-none',
            'inline-flex items-center pt-4 pb-2 pr-1 text-sm font-medium border-t-2 border-transparent text-dark hover:text-gray-700 hover:border-gray-300'
          )}
        >
          <ChevronLeftIcon className="w-5 h-5 text-gray-400" aria-hidden />
          <span className="sr-only">Previous</span>
        </Link>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {Array.from({ length: pageCount }, (_, index: number) => {
          const page = index + 1;
          return (
            <Link
              key={page}
              to={`/blog/?page=${page}`}
              className={classNames(
                currentPage === page
                  ? 'border-primary text-primary'
                  : 'border-transparent hover:text-gray-700 hover:border-gray-300',
                'inline-flex items-center px-4 pt-4 pb-2 text-sm font-medium border-t-2'
              )}
            >
              {page}
            </Link>
          );
        })}
      </div>
      <div className="flex justify-start flex-1 w-0 -mt-px">
        <Link
          aria-disabled={currentPage >= pageCount}
          tabIndex={currentPage >= pageCount ? -1 : undefined}
          to={
            currentPage < pageCount
              ? `/blog/?page=${currentPage + 1}`
              : `/blog/?page=${pageCount}`
          }
          className={classNames(
            currentPage >= pageCount && 'pointer-events-none',
            'inline-flex items-center pt-4 pb-2 pl-1 text-sm font-medium text-gray-500 border-t-2 border-transparent hover:text-gray-700 hover:border-gray-300'
          )}
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="w-5 h-5 text-gray-400" aria-hidden />
        </Link>
      </div>
    </nav>
  );
}

export { PostPreviews };
