import { FC } from 'react';

import Header from '@components/Header';

import { ILayoutProps } from '../types';

const HomeLayout: FC<ILayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default HomeLayout;
