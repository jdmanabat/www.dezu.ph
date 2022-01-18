import * as React from 'react';

import { Footer } from './footer';
import { Nav } from './nav';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <div className="relative flex flex-col min-h-screen mx-auto font-sans antialiased bg-light fill-available text-dark-light max-w-[1920px]">
        <Nav />
        <main className="relative flex flex-col flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export { Layout };
