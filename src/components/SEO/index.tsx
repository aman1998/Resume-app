import { FC } from 'react';
import Head from 'next/head';

import { ISEOProps } from './types';

const Seo: FC<ISEOProps> = ({ seoTitle }) => (
  <Head>
    <title>{seoTitle}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content="Футбольные обзоры матчей топ-лиг" />
    <meta name="keywords" content="футбол, обзор" />
  </Head>
);

export default Seo;
