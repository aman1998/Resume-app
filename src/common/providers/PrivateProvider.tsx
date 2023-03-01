import { FC, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { authInfoFetchingSelector, isAuthSelector } from '@modules/UserInfo/store/selectors';

const PrivateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const isAuth = useSelector(isAuthSelector);

  return <>{isAuth && children}</>;
};

export default PrivateProvider;
