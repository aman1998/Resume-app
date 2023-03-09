import { FC } from 'react';

import Home from '@modules/Home';
import Seo from '@components/SEO';

const HomePage: FC = () => (
    <>
        <Seo seoTitle="Резюме. Бесплатные шаблоны на любой вкус" />
        <Home />
    </>
);

export default HomePage;
