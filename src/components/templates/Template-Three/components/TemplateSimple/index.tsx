import { FC } from 'react';

import styles from './simple.module.scss';
import { ITemplateSimpleProps } from './types';

const TemplateSimple: FC<ITemplateSimpleProps> = ({ title, text }) => (
  <div className={styles.simple}>
    <div className={styles['simple__title']}>{title}</div>
    <div className={styles['simple__text']}>{text}</div>
  </div>
);

export default TemplateSimple;
