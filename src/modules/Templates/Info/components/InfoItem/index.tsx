import { FC } from 'react';

import styles from './info-item.module.scss';
import { ITemplateInfoProps } from './types';

const InfoItem: FC<ITemplateInfoProps> = ({ text, title }) => (
  <div className={styles.item}>
    <div className={styles['item__title']}>{title}:</div>
    <div className={styles['item__text']}>{text ? text : 'Не указано'}</div>
  </div>
);

export default InfoItem;
