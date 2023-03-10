import { useDispatch, useSelector } from 'react-redux';
import { FC, useEffect } from 'react';

import Navigation from '@components/UserInfoLayout/components/Navigation';
import Seo from '@components/SEO';

import { isAuthSelector, userInfoSelector } from '@modules/UserInfo/store/selectors';
import { userInfoFetching } from '@modules/UserInfo/store/reducers';

import { ILayoutProps } from './types';
import styles from './layout.module.scss';
import Content from './components/Content';

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
    <>
      <Seo seoTitle={`Резюме. ${title}`} />
      <div className={`container ${styles.layout}`}>
        <aside className={styles['layout__sidebar']}>
          <Navigation />
        </aside>
        <Content getButton={getButton} widthHeaderMargin={widthHeaderMargin} title={title}>
          {children}
        </Content>
      </div>
    </>
  );
};

export default UserInfoLayout;
