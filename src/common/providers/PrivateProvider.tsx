import { FC, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { authInfoFetchingSelector } from '@modules/UserInfo/store/selectors';

const PrivateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const loading = useSelector(authInfoFetchingSelector);

  return <>{!loading && children}</>;
};

export default PrivateProvider;
