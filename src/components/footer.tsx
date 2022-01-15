import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import type {
  INavDropdown,
  INavLink,
  INavPage,
} from '../hooks/use-sanity-menu';
import { useSanityMenu } from '../hooks/use-sanity-menu';
import { useSanitySEOSettings } from '../hooks/use-sanity-seo-settings';
import { Logo } from '../icons/logo';
import { classNames } from '../utils/classnames';
import { ContactInfo } from './contact-info';

function Footer(): JSX.Element {
  const { items } = useSanityMenu();
  const { siteTitle } = useSanitySEOSettings();
  return (
    <footer className="bg-dark" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <Link to="/" className="inline-block p-2 -m-2">
                  <span className="sr-only">{siteTitle}</span>
                  {/* <Logo aria-hidden className="w-auto h-24" /> */}
                  <StaticImage
                    src="../images/footer.jpg"
                    alt=""
                    className="flex-1"
                  />
                </Link>
              </div>
              <div>
                <ul className="space-y-4">
                  {items.map((item) => {
                    switch (item._type) {
                      case 'navLink':
                        return <NavLink key={item.id} item={item} />;

                      case 'navPage':
                        return <NavPage key={item.id} item={item} />;

                      case 'navDropdown':
                        return <NavDropdown key={item.id} item={item} />;

                      default:
                        return null;
                    }
                  })}
                </ul>
              </div>
            </div>
            <div className="md:grid md:gap-8">
              <div className="mt-12 md:mt-0">
                <ContactInfo colourScheme="dark" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-dark md:flex md:items-center md:justify-between">
          <p className="mt-8 text-base text-light md:mt-0">
            <a
              href="https://www.thewebsitefactory.com.au/"
              className="underline"
            >
              Website by The Website Factory.
            </a>
          </p>
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
        className="text-base font-medium text-light hover:text-gray-900"
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
  const { pathname } = useLocation();
  let href;
  if (item.page._type === 'homePage') href = '/';
  if (item.page._type === 'blogPage') href = '/blog/';
  if (item.page._type === 'page') href = item.page.slug.current;
  return (
    <li>
      <Link
        to={href}
        className={classNames(
          pathname === href && 'underline',
          'text-base font-medium text-light hover:text-primary'
        )}
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
