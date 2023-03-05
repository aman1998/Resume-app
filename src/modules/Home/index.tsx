import { FC } from 'react';
// import Seo from '@components/SEO';
import dynamic from 'next/dynamic';

import Footer from '@components/Footer';

const DynamicTemplates = dynamic(() => import('./components/Templates'), {
  ssr: false,
});
const DynamicAuthForm = dynamic(() => import('../AuthForm'), {
  ssr: false,
});

// import AuthForm from '@modules/AuthForm';

import HomeHeader from './components/HomeHeader';
// import Templates from './components/Templates';
import Steps from './components/Steps';

const Home: FC = () => (
  <>
    <div className="container">
      <HomeHeader />
      <Steps />
      <DynamicTemplates />
      <DynamicAuthForm />
    </div>
    <Footer />
  </>
);

export default Home;
