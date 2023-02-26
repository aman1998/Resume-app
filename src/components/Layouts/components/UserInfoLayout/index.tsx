import { FC } from 'react';

import Navigation from '@components/Navigation';

import { ILayoutProps } from '../../types';

import styles from './layout.module.scss';

const UserInfoLayout: FC<ILayoutProps> = ({ children, title }) => (
  <div className={`container ${styles.layout}`}>
    <aside className={styles['layout__sidebar']}>
      <Navigation />
    </aside>
    <div className={styles['layout__content']}>
      <div className={styles['layout__title']}>{title}</div>
      <div>{children}</div>
    </div>
  </div>
);

export default UserInfoLayout;
