import { FC } from 'react';
import Link from 'next/link';

import { sitename } from '@common/constants/app';

import styles from './logo.module.scss';

const Logo: FC = () => (
  <div className={styles.logo}>{<Link href="/">{sitename.toUpperCase()}</Link>}</div>
);

export default Logo;
