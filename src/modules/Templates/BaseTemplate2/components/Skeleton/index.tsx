import { Skeleton } from '@mui/material';
import { FC } from 'react';

import styles from './skeleton.module.scss';

const TemplateSkeleton: FC = () => (
  <div className={styles.skeleton}>
    <div className={styles['skeleton-header']}>
      <Skeleton className={styles['skeleton-header__image']} />
      <Skeleton className={styles['skeleton-header__item']} />
    </div>
    <Skeleton className={styles['skeleton__content']} />
  </div>
);

export default TemplateSkeleton;
