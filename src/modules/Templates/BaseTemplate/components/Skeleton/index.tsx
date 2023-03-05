import { Skeleton } from '@mui/material';
import { FC } from 'react';

import styles from './skeleton.module.scss';

const BaseTemplateSkeleton: FC = () => (
  <div className={styles.skeleton}>
    <Skeleton className={styles['skeleton__item']} />
    <Skeleton className={styles['skeleton__item']} />
    <Skeleton className={styles['skeleton__item']} />
    <Skeleton className={styles['skeleton__item']} />
    <Skeleton className={styles['skeleton__item']} />
  </div>
);

export default BaseTemplateSkeleton;
