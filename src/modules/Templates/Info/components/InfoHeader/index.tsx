import classNames from 'classnames';
import { FC } from 'react';

import styles from './info-header.module.scss';
import { ITemplateHeaderProps } from './types';

const InfoHeader: FC<ITemplateHeaderProps> = ({ title, withColors }) => (
  <div className={classNames(styles.header, { [styles['header--colors']]: withColors })}>
    {withColors && <div className={styles['header__popular-type']} />}
    <div className={styles['header__title']}>{title}</div>
  </div>
);

export default InfoHeader;
