import { FC } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { auth } from 'firebase-config';

import { isAuthSelector } from '@modules/UserInfo/store/selectors';
import { resetUserInfo } from '@modules/UserInfo/store/reducers';

import Button from '@UI/Button';

const Header: FC = () => {
  const [signOut] = useSignOut(auth);

  const isAuth = useSelector(isAuthSelector);

  const { push } = useRouter();
  const dispatch = useDispatch();

  const logout = async () => {
    await signOut();
    dispatch(resetUserInfo());
    push('/');
  };
  return <header>{isAuth && <Button onClick={logout} text="Выйти" />}</header>;
};

export default Header;
