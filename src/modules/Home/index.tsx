import { FC } from 'react';

// import Seo from '@components/SEO';
import Footer from '@components/Footer';

import AuthForm from '@modules/AuthForm';

import HomeHeader from './components/HomeHeader';
import Templates from './components/Templates';
import Steps from './components/Steps';

const Home: FC = () => (
  <>
    <div className="container">
      <HomeHeader />
      <Steps />
      <Templates />
      <AuthForm />
    </div>
    <Footer />
  </>
);

export default Home;
