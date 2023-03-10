import { FC } from 'react';

import Seo from '@components/SEO';

import Home from '@modules/Home';

const HomePage: FC = () => (
  <>
    <Seo seoTitle="Резюме. Бесплатные шаблоны на любой вкус" />
    <Home />
  </>
);

export default HomePage;
