import { useDispatch, useSelector } from 'react-redux';
import { FC, ReactNode, useEffect } from 'react';

import UserInfoLayout from '@components/Layouts/components/UserInfoLayout';

import { isAuthSelector, userInfoSelector } from '@modules/UserInfo/store/selectors';
import { userInfoFetching } from '@modules/UserInfo/store/reducers';

const UserInfoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const user = useSelector(userInfoSelector);
  const isAuth = useSelector(isAuthSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user && isAuth) dispatch(userInfoFetching());
  }, [dispatch, user, isAuth]);

  return <UserInfoLayout>{children}</UserInfoLayout>;
};

export default UserInfoProvider;
