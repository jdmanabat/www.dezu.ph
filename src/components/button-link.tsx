import { Link } from 'gatsby';
import * as React from 'react';

import type { TCta } from '../fragments/sanity-cta-parts';
import { TColourScheme } from '../types';
import { classNames } from '../utils/classnames';

const BUTTON_LINK_PRIMARY_COLOURS_MAP = {
  light: 'text-light bg-primary border-primary',
  primary: 'text-primary bg-light border-light',
  secondary: 'text-light bg-primary border-primary',
  dark: 'text-primary bg-light border-light',
};

const BUTTON_LINK_OUTLINE_COLOURS_MAP = {
  light: 'text-primary bg-transparent',
  primary: 'text-light bg-transparent border-light',
  secondary: 'text-primary bg-transparent',
  dark: 'text-light bg-transparent border-light',
};

interface ButtonLinkProps {
  colourScheme?: TColourScheme;
  link: TCta;
}

function ButtonLink({
  link,
  colourScheme = 'light',
}: ButtonLinkProps): JSX.Element | null {
  const buttonStyles =
    'inline-block border-2 border-primary font-semibold tracking-wider rounded ';
  const largeStyles = 'px-7 py-2 text-lg';
  const smallStyles = 'px-4 py-1 text-sm';
  const styles = classNames(
    link.isButton && buttonStyles,
    link.styles?.style === 'is-primary' &&
      BUTTON_LINK_PRIMARY_COLOURS_MAP[colourScheme],
    link.styles?.style === 'is-outline' &&
      BUTTON_LINK_OUTLINE_COLOURS_MAP[colourScheme],
    link.styles?.isLarge ? largeStyles : smallStyles
  );

  if (link._type === 'pageCta') {
    let href;
    if (link.page._type === 'homePage') href = '/';
    if (link.page._type === 'blogPage') href = '/blog/';
    if (link.page._type === 'page') href = `/${link.page.slug.current}/`;
    if (link.linkSection) href += link.linkSection;
    return (
      <Link to={href} className={styles}>
        {link.text}
      </Link>
    );
  }

  if (link._type === 'linkCta') {
    return (
      <a href={link.url} className={styles}>
        {link.text}
      </a>
    );
  }

  if (link._type === 'fileCta') {
    return (
      <a href={link.file.asset.url} className={styles}>
        {link.text}
      </a>
    );
  }

  return null;
}

export { ButtonLink };
