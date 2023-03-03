import { useDispatch, useSelector } from 'react-redux';
import { FC, useEffect } from 'react';
import classNames from 'classnames';

import Navigation from '@components/Navigation';

import { isAuthSelector, userInfoSelector } from '@modules/UserInfo/store/selectors';
import { userInfoFetching } from '@modules/UserInfo/store/reducers';

import { ILayoutProps } from '../../types';

import styles from './layout.module.scss';

const UserInfoLayout: FC<ILayoutProps> = ({
  children,
  title,
  getButton,
  widthHeaderMargin = true,
}) => {
  const user = useSelector(userInfoSelector);
  const isAuth = useSelector(isAuthSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user && isAuth) {
      dispatch(userInfoFetching());
    }
  }, [dispatch, user, isAuth]);

  return (
    <div className={`container ${styles.layout}`}>
      <aside className={styles['layout__sidebar']}>
        <Navigation />
      </aside>
      <div className={styles['layout__content']}>
        {title && (
          <div
            className={classNames(styles['layout__header'], {
              [styles['layout__header--margin']]: widthHeaderMargin,
            })}
          >
            <div className={styles['layout__title']}>{title}</div>
            {!!getButton && getButton()}
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default UserInfoLayout;
