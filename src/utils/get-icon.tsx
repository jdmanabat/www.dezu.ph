import React from 'react';

import { FacebookIcon } from '../icons/facebook';
import { InstagramIcon } from '../icons/instagram';
import { TwitterIcon } from '../icons/twitter';

interface GetIcon {
  socialNetwork: string;
  className: string;
}

function getIcon({ socialNetwork, className }: GetIcon): JSX.Element | null {
  switch (socialNetwork) {
    case 'Facebook':
      return <FacebookIcon aria-hidden className={className} />;

    case 'Instagram':
      return <InstagramIcon aria-hidden className={className} />;

    case 'Twitter':
      return <TwitterIcon aria-hidden className={className} />;

    case 'YouTube':
      return null;

    default:
      return null;
  }
}

export { getIcon };
