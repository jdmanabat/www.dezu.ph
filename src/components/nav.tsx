import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import * as React from 'react';
import { HiMenu } from 'react-icons/hi';

import { useSanityGeneralSettings } from '../hooks/use-sanity-general-settings';
import type {
  INavDropdown,
  INavLink,
  INavPage,
  INavPageDropdown,
} from '../hooks/use-sanity-menu';
import { useSanityMenu } from '../hooks/use-sanity-menu';
import { useSanitySEOSettings } from '../hooks/use-sanity-seo-settings';
import { Logo } from '../icons/logo';
import { classNames } from '../utils/classnames';
import { getIcon } from '../utils/get-icon';
import { MobileMenu } from './mobile-menu';

function Nav(): JSX.Element {
  const { items } = useSanityMenu();
  const { siteTitle } = useSanitySEOSettings();
  const settings = useSanityGeneralSettings();
  return (
    <Popover as="header" className="absolute inset-x-0 top-0 z-20">
      {({ open }) => (
        <>
          {/* <div className="bg-primary text-light">
            <div className="flex items-center justify-end px-4 py-1 mx-auto space-x-4 font-semibold max-w-screen-2xl sm:px-6 lg:px-8">
              <a href={`tel:${settings.phoneNumber}`}>{settings.phoneNumber}</a>
              <ul className="inline-flex items-center space-x-2">
                {settings.socialLinks.map(({ icon, url }) => {
                  return (
                    <li key={url} className="inline-flex">
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-block"
                      >
                        {getIcon({
                          socialNetwork: icon,
                          className: 'w-6 h-6 text-light',
                        })}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div> */}
          <div className="relative">
            <div className="flex items-center justify-between px-4 py-5 mx-auto sm:px-6 sm:py-12 lg:px-24 md:justify-start md:space-x-10">
              <div>
                <Link
                  to="/"
                  className="flex p-2 -m-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                >
                  <span className="sr-only">{siteTitle}</span>
                  <Logo aria-hidden className="w-auto h-5 text-white sm:h-6" />
                </Link>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out bg-opacity-0 rounded-md bg-light text-primary hover:bg-opacity-25 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="sr-only">Open menu</span>
                  <HiMenu aria-hidden className="w-6 h-6" />
                </Popover.Button>
              </div>
              <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                <nav className="flex justify-end ml-auto space-x-10">
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
                </nav>
              </div>
            </div>
          </div>
          <MobileMenu open={open} />
        </>
      )}
    </Popover>
  );
}

interface NavLinkProps {
  item: INavLink;
}

function NavLink({ item }: NavLinkProps): JSX.Element {
  return (
    <div>
      <a
        key={item.id}
        href={item.url}
        className="px-2 -mx-2 text-xl font-medium text-white hover:underline focus:outline-none focus:ring-2 focus:ring-offset-dark focus:ring-offset-2 focus:ring-primary"
      >
        {item.title}
      </a>
    </div>
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
  if (item.page._type === 'page') href = `/${item.page.slug.current}/`;
  return (
    <div>
      <Link
        key={item.id}
        to={href}
        className={classNames(
          pathname === href ? 'text-primary' : 'text-light',
          'px-2 -mx-2 text-xl font-medium rounded-md focus:outline-none'
        )}
      >
        {item.title}
      </Link>
    </div>
  );
}

interface NavDropdownProps {
  item: INavDropdown;
}

function NavDropdown({ item }: NavDropdownProps): JSX.Element {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? 'text-primary' : 'text-light',
              'inline-flex items-center px-2 -mx-2 text-xl font-medium rounded-md group focus:outline-none '
            )}
          >
            <span>{item.title}</span>
            {/* <ChevronDownIcon className="w-5 h-5 ml-2" aria-hidden /> */}
          </Popover.Button>

          <Transition
            show={open}
            as={React.Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              static
              className="absolute left-0 z-10 w-screen max-w-xs px-2 mt-3 -translate-x-1/2 transform-gpu sm:px-0"
            >
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-dark ring-opacity-5">
                <div className="relative grid gap-6 p-8 bg-light sm:gap-8">
                  {item.dropdownItems.map((dropdownItem) => {
                    if (dropdownItem._type === 'navLink') {
                      return (
                        <NavDropdownLink key={item.id} item={dropdownItem} />
                      );
                    }
                    if (dropdownItem._type === 'navPage') {
                      return (
                        <NavDropdownPage key={item.id} item={dropdownItem} />
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

function NavDropdownLink({ item }: NavLinkProps): JSX.Element {
  return (
    <a
      key={item.id}
      href={item.url}
      className="block p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
    >
      <p className="text-xl font-medium text-gray-900">{item.title}</p>
    </a>
  );
}

interface NavDropdownPageProps {
  item: INavPageDropdown;
}

function NavDropdownPage({ item }: NavDropdownPageProps): JSX.Element {
  return (
    <Link
      key={item.id}
      to={`/${item.page.slug.current}/`}
      className="block p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-gray-50"
    >
      <p className="text-xl font-medium text-gray-900">{item.title}</p>
    </Link>
  );
}

export { Nav };
