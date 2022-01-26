import * as React from 'react';

import { useSanityGeneralSettings } from '../hooks/use-sanity-general-settings';
import { TColourScheme } from '../types';
import { classNames } from '../utils/classnames';
import { getIcon } from '../utils/get-icon';
import { TEXT_COLOUR_MAP } from '../utils/object-dictionaries';

interface ContactInfoProps {
  title?: string;
  colourScheme?: TColourScheme;
}

function ContactInfo({
  colourScheme = 'dark',
  title,
}: ContactInfoProps): JSX.Element {
  const settings = useSanityGeneralSettings();
  return (
    <div className={TEXT_COLOUR_MAP[colourScheme]}>
      {title ? (
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
      ) : null}
      <dl className={classNames('space-y-4', title && 'mt-6')}>
        {/* <div>
          <dt className="inline font-bold">Phone: </dt>
          <dd className="inline">
            <a
              href={`tel:${settings.phoneNumber}`}
              className="hover:underline focus:underline"
            >
              {settings.phoneNumber}
            </a>
          </dd>
        </div> */}
        {/* <div>
          <dt className="inline font-bold">Email: </dt>
          <dd className="inline">
            <a
              href={`mailto:${settings.email}`}
              className="break-words hover:underline focus:underline"
            >
              {settings.email}
            </a>
          </dd>
        </div> */}
        {/* <div>
          <dt className="inline font-bold">Address: </dt>
          <dd className="inline">
            <a
              href={settings.address.googleMaps.link}
              className="hover:underline focus:underline"
            >
              {settings.address.streetAddress},{' '}
              <span className="inline-block">{settings.address.suburb}</span>
            </a>
          </dd>
        </div>
        <div>
          <dt className="inline font-bold">Business Hours: </dt>
          <dd className="inline">
            <ul className="inline">
              {settings.hours.map(({ days, hours, id }) => (
                <li key={id} className="inline">
                  {days}&nbsp;– <span className="inline-block">{hours}</span>
                </li>
              ))}
            </ul>
          </dd>
        </div> */}
        <div className="inline-flex items-center space-x-2">
          <dt className="inline-flex font-bold">Follow Us: </dt>
          <dd className="inline-flex">
            {settings.socialLinks.map((socialLink) => (
              <a
                key={socialLink.id}
                href={socialLink.url}
                className="inline-flex items-center hover:underline focus:underline"
              >
                <span className="sr-only">{socialLink.icon}</span>
                {getIcon({
                  socialNetwork: socialLink.icon,
                  className: 'w-6 h-6',
                })}
              </a>
            ))}
          </dd>
        </div>
      </dl>
    </div>
  );
}

export { ContactInfo };
