import { Skeleton } from '@mui/material';
import { FC } from 'react';

import styles from './skeleton.module.scss';

const MainTemplateSkeleton: FC<{ isReverse: boolean }> = ({ isReverse }) => (
  <div className={styles.skeleton} style={{ flexDirection: isReverse ? 'row-reverse' : 'row' }}>
    <Skeleton className={styles['skeleton__sidebar']} />
    <Skeleton className={styles['skeleton__content']} />
  </div>
);

export default MainTemplateSkeleton;
