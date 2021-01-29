import React from 'react';
import Head from 'next/head';

import TopBar from './topbar/topbar';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => (
  <div>
    <Head>
      <title>Blog</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <TopBar />
    <main>{children}</main>
  </div>
);

export default Layout;

