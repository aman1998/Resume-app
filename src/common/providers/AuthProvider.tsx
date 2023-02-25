import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authInfoFetchingSelector } from '@modules/UserInfo/store/selectors';
import { authInfoFetching } from '@modules/UserInfo/store/reducers';

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const loading = useSelector(authInfoFetchingSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authInfoFetching());
  }, [dispatch]);

  return <>{loading ? <div>loading</div> : children}</>;
};

export default AuthProvider;
