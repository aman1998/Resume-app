import { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';

import { wrapper } from '@store/store';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <Head>
      <title>NextJS App From Scratch</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default wrapper.withRedux(MyApp);
