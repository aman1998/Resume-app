import { FC } from 'react';

import styles from './info-header.module.scss';
import { ITemplateHeaderProps } from './types';

const InfoHeader: FC<ITemplateHeaderProps> = ({ title, type = 'popular' }) => (
  <div className={styles.header}>
    {type === 'popular' && <div className={styles['header__popular-type']} />}
    <div className={styles['header__title']}>{title}</div>
  </div>
);

export default InfoHeader;
