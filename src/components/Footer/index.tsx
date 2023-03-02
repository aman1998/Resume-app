import { FC } from 'react';

import { sitename } from '@common/constants/app';

import styles from './footer.module.scss';

const Footer: FC = () => <footer className={styles.footer}>{sitename}</footer>;

export default Footer;
