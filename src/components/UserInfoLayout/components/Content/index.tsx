import classNames from 'classnames';
import { FC } from 'react';

import { ILayoutProps } from '@components/UserInfoLayout/types';

import styles from './content.module.scss';

const Content: FC<ILayoutProps> = ({ title, getButton, widthHeaderMargin, children }) => (
  <div className={styles['content']}>
    {title && (
      <div
        className={classNames(styles['content__header'], {
          [styles['content__header--margin']]: widthHeaderMargin,
        })}
      >
        <div className={styles['content__title']}>{title}</div>
        {!!getButton && getButton()}
      </div>
    )}
    <div>{children}</div>
  </div>
);

export default Content;
