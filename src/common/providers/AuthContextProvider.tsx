import { createContext, FC, ReactNode, useContext, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';

import { auth } from 'firebase-config';

import { mainInfoSuccess, userInfoSuccess } from '@modules/UserInfo/store/reducers';
import { changeIsAuth } from '@modules/AuthForm/store/reducers';

import { IUserContext } from './types';

const AuthContext = createContext<IUserContext>({ user: null });

export const useAuth = (): IUserContext => useContext(AuthContext);

const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(mainInfoSuccess({ email: user.email || '', id: user.uid }));
      dispatch(changeIsAuth(true));
    }
  }, [dispatch, user]);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>loading</div> : children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
