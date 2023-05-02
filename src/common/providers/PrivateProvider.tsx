import { FC, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { authInfoFetchingSelector, isAuthSelector } from '@modules/UserInfo/store/selectors';

const PrivateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const isAuth = useSelector(isAuthSelector);
  const authLoading = useSelector(authInfoFetchingSelector);

  const { push } = useRouter();

  useEffect(() => {
    if (!isAuth && !authLoading) {
      push('/');
    }
  }, [isAuth, push, authLoading]);

  return <>{isAuth && children}</>;
};

export default PrivateProvider;
