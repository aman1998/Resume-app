import { FC } from 'react';
import Head from 'next/head';

import { ISEOProps } from './types';

const Seo: FC<ISEOProps> = ({ seoTitle }) => (
  <Head>
    <title>{seoTitle}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content="Бесплатные резюме для поиска работы" />
    <meta name="keywords" content="резюме, бесплатно, resume, resumenator" />
  </Head>
);

export default Seo;
