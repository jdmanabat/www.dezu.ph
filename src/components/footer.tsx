import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import * as React from 'react';

import type {
  INavDropdown,
  INavLink,
  INavPage,
} from '../hooks/use-sanity-footer-menu';
import { useSanitySEOSettings } from '../hooks/use-sanity-seo-settings';
import { useSanityGeneralSettings } from '../hooks/use-sanity-general-settings';
import { useSanityFooterMenu } from '../hooks/use-sanity-footer-menu';
import { Logo } from '../icons/logo';
import { classNames } from '../utils/classnames';
import { nanoid } from 'nanoid';

function Footer(): JSX.Element {
  const { siteTitle } = useSanitySEOSettings();
  const general = useSanityGeneralSettings();
  const footerMenu = useSanityFooterMenu();

  return (
    <footer className="bg-light" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-24">
        <div className="grid gap-12 pb-8 xl:gap-8 xl:grid-cols-5">
          <div className="grid gap-12 xl:col-span-1 lg:col-span-2">
            <div>
              <Link to="/" className="inline-block p-2 -m-2">
                <span className="sr-only">{siteTitle}</span>
                <Logo aria-hidden className="w-auto h-12 text-primary" />
              </Link>
              <p className="mt-6">© Copyright 2022 | Dezu Corporation</p>
            </div>

            <p>{general.bio}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 lg:col-span-4">
            <div>
              <p className="font-bold text-dark">{footerMenu.columnOneName}</p>
              <ul className="mt-3 space-y-2 mt">
                {footerMenu.columnOneItems.map((item) => {
                  switch (item._type) {
                    case 'navLink':
                      return <NavLink key={item.id} item={item} />;

                    case 'navPage':
                      return <NavPage key={item.id} item={item} />;

                    default:
                      return null;
                  }
                })}
              </ul>
            </div>
            <div>
              <p className="font-bold text-dark">{footerMenu.columnTwoName}</p>
              <ul className="mt-3 space-y-2">
                {footerMenu.columnTwoItems.map((item) => {
                  switch (item._type) {
                    case 'navLink':
                      return <NavLink key={item.id} item={item} />;

                    case 'navPage':
                      return <NavPage key={item.id} item={item} />;

                    default:
                      return null;
                  }
                })}
              </ul>
            </div>
            <div>
              <p className="font-bold text-dark">Contact Numbers</p>
              <ul className="mt-3 space-y-2 mt">
                {general.phoneNumber.map((item) => (
                  <li key={nanoid()}>
                    <a
                      href={`tel:${item}`}
                      className={classNames(
                        'text-base font-medium hover:text-primary'
                      )}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-dark">Email</p>
              <ul className="mt-3 space-y-2">
                {general.email.map((item) => (
                  <li key={nanoid()}>
                    <a
                      href={`tel:${item}`}
                      className={classNames(
                        'text-base font-medium hover:text-primary'
                      )}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-dark">{general.addressOne?.name}</p>
              <p className="mt-3">{general.addressOne?.address}</p>
            </div>
            <div>
              <p className="font-bold text-dark">{general.addressTwo?.name}</p>
              <p className="mt-3">{general.addressTwo?.address}</p>
            </div>
            <div>
              <p className="font-bold text-dark">Social Media</p>
              <ul className="flex mt-3">
                {general.socialLinks.map((item, index) => (
                  <>
                    <li key={item.id}>
                      <a
                        href={item.url}
                        className={classNames(
                          'text-base font-medium hover:text-primary'
                        )}
                      >
                        {item.icon}
                      </a>
                    </li>
                    {index !== general.socialLinks.length - 1 && (
                      <span className="mx-2">|</span>
                    )}
                  </>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface NavLinkProps {
  item: INavLink;
}

function NavLink({ item }: NavLinkProps): JSX.Element {
  return (
    <li>
      <a
        href={item.url}
        className={classNames('text-base font-medium hover:text-primary')}
      >
        {item.title}
      </a>
    </li>
  );
}

interface NavPageProps {
  item: INavPage;
}

function NavPage({ item }: NavPageProps): JSX.Element {
  let href;
  if (item.page._type === 'homePage') href = '/';
  if (item.page._type === 'blogPage') href = '/blog/';
  if (item.page._type === 'page') href = item.page.slug.current;
  return (
    <li>
      <Link
        to={href}
        className={classNames('text-base font-medium hover:text-primary')}
      >
        {item.title}
      </Link>
    </li>
  );
}

interface NavDropdownProps {
  item: INavDropdown;
}

function NavDropdown({ item }: NavDropdownProps): JSX.Element | null {
  const [firstItem] = item.dropdownItems;
  switch (firstItem._type) {
    case 'navLink':
      return <NavLink key={item.id} item={firstItem} />;

    case 'navPage':
      return <NavPage key={item.id} item={firstItem} />;

    default:
      return null;
  }
}

export { Footer };
