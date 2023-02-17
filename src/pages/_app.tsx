import { FC } from 'react';
import { AppProps } from 'next/app';
import { Roboto } from '@next/font/google';
import { useRouter } from 'next/router';
import { useSignOut } from 'react-firebase-hooks/auth';

import '@common/styles/main.scss';

import { auth } from 'firebase-config';
import { wrapper } from 'src/rootStore/index';

import ChakraProvider from '@common/providers/ChakraProvider';
import PrivateProvider from '@common/providers/PrivateProvider';
import AuthContextProvider from '@common/providers/AuthContextProvider';

const font = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const { pathname, push } = useRouter();
  const [signOut] = useSignOut(auth);

  const logout = async () => {
    await signOut();
    push('/');
  };

  return (
    <ChakraProvider>
      <AuthContextProvider>
        <div className={font.className}>
          {pathname === '/' ? (
            <Component {...pageProps} />
          ) : (
            <PrivateProvider>
              <>
                <button onClick={logout}>выйти </button>
                <Component {...pageProps} />
              </>
            </PrivateProvider>
          )}
        </div>
      </AuthContextProvider>
    </ChakraProvider>
  );
};

export default wrapper.withRedux(App);
