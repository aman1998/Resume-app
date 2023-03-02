import { FC } from 'react';

import NotFound from '@components/NotFound';
import Seo from '@components/SEO';

const NotFoundPage: FC = () => (
  <>
    <Seo seoTitle="404 - страница не найдена" />
    <NotFound />
  </>
);

export default NotFoundPage;
