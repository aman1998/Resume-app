import { FC } from 'react';

import Seo from '@components/SEO';

import AuthForm from '@modules/AuthForm';

import HomeHeader from './components/HomeHeader';
import Templates from './components/Templates';

const Home: FC = () => (
  <div className="container" style={{ marginTop: 48 }}>
    <Seo seoTitle="Резюме. Бесплатные шаблоны на любой вкус" />
    <HomeHeader />
    <Templates />
    <AuthForm />
  </div>
);

export default Home;
