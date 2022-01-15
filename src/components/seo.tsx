import { useLocation } from '@reach/router';
import * as React from 'react';
import { Helmet } from 'react-helmet';

import { useSanityGeneralSettings } from '../hooks/use-sanity-general-settings';
import { useSanitySEOSettings } from '../hooks/use-sanity-seo-settings';

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  children?: React.ReactNode;
}

function SEO({
  title,
  description,
  pathname,
  image,
  children = null,
}: SEOProps): JSX.Element {
  const location = useLocation();

  const { siteURL } = useSanityGeneralSettings();
  const { siteTitle, metaDesc, shareGraphic } = useSanitySEOSettings();

  const seo = {
    title,
    description: description || metaDesc,
    url: pathname ? `${siteURL}${pathname}` : location.href,
    image: image ? `${siteURL}/${image}` : shareGraphic.asset.url,
  };

  return (
    <Helmet
      title={title}
      defaultTitle={title}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang="en-AU" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {children}
    </Helmet>
  );
}

export { SEO };
