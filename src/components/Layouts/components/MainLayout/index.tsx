import { FC } from 'react';

import Navigation from '@components/Navigation';

import { ILayoutProps } from '../../types';

import styles from './layout.module.scss';

const MainLayout: FC<ILayoutProps> = ({ children }) => (
  <div className={`container ${styles.layout}`}>
    <aside className={styles['layout__sidebar']}>
      <Navigation />
    </aside>
    <div className={styles['layout__content']}>{children}</div>
  </div>
);

export default MainLayout;
