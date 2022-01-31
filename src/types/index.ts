import type { Block } from '@sanity/types';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export type TCustomRatio =
  /** Original */
  | 0
  /** 5:7 */
  | 0.714_285_714_3
  /** 4:5 */
  | 0.8
  /** Square */
  | 1
  /** 16:9 */
  | 1.777_777_777_8;

export type TColourScheme = 'light' | 'primary' | 'secondary' | 'dark';

export type TLayout = 'large' | 'small';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyBlock = { [key: string]: any; _type: string };

export type PortableText<B extends AnyBlock = AnyBlock> = (Block | B)[];

export interface ISeo {
  metaDesc: string;
  metaTitle: string;
  shareDesc: string;
  shareGraphic: {
    asset: {
      url: string;
    };
  };
  shareTitle: string;
}

interface MainImage {
  alt?: string;
  asset: {
    gatsbyImageData: IGatsbyImageData;
  };
}

export interface ISanityPostPreview {
  id: string;
  _rawExcerpt: PortableText;
  mainImage: MainImage;
  publishedAt: string;
  publishedAtISO: string;
  slug: {
    current: string;
  };
  title: string;
  category: {
    name: string;
  };
}

export interface ISanityPost extends ISanityPostPreview {
  seo: ISeo;
  _rawBody: PortableText;
  _type: string;
}

export interface IHeading {
  id: string;
  isUnderlined?: boolean;
  text: string;
}
