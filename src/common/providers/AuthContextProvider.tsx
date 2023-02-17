import { createContext, FC, ReactNode, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from 'firebase-config';
import { TNullable } from 'src/rootStore/types';

import { IUserContext } from './types';

const AuthContext = createContext<IUserContext>({ user: null });

export const useAuth = (): IUserContext => useContext(AuthContext);

const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>loading</div> : children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
