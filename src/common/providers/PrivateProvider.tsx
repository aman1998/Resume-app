import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect } from 'react';

import { useAuth } from './AuthContextProvider';

const PrivateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [router, user]);

  return <>{user ? children : null}</>;
};

export default PrivateProvider;
