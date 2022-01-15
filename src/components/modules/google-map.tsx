import * as React from 'react';

import type { ISanityGoogleMap } from '../../fragments/sanity-google-map-parts';
import { useSanityGeneralSettings } from '../../hooks/use-sanity-general-settings';

interface GoogleMapProps {
  googleMap: ISanityGoogleMap;
}

function GoogleMap({ googleMap }: GoogleMapProps): JSX.Element | null {
  const { address } = useSanityGeneralSettings();
  if (googleMap?.showMap !== true) return null;
  return (
    <div className="relative h-0 aspect-ratio-16/9 lg:aspect-ratio-none lg:h-96">
      <iframe
        src={address.googleMaps.embed}
        frameBorder={0}
        allowFullScreen
        aria-hidden={false}
        tabIndex={0}
        loading="lazy"
        title="Location"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

export { GoogleMap };
