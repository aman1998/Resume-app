import { FC } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useSignOut } from 'react-firebase-hooks/auth';
import { Roboto } from '@next/font/google';

import '@common/styles/main.scss';

import { auth } from 'firebase-config';
import { wrapper } from 'src/rootStore/index';

import MainLayout from '@components/Layouts/components/MainLayout';
import HomeLayout from '@components/Layouts/components/HomeLayout';

import ChakraProvider from '@common/providers/ChakraProvider';
import PrivateProvider from '@common/providers/PrivateProvider';
import AuthContextProvider from '@common/providers/AuthContextProvider';

const font = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const { pathname, push } = useRouter();

  return (
    <div className={font.className}>
      <ChakraProvider>
        <AuthContextProvider>
          {pathname === '/' ? (
            <HomeLayout>
              <Component {...pageProps} />
            </HomeLayout>
          ) : (
            <PrivateProvider>
              <>
                <MainLayout>
                  <Component {...pageProps} />
                </MainLayout>
              </>
            </PrivateProvider>
          )}
        </AuthContextProvider>
      </ChakraProvider>
    </div>
  );
};

export default wrapper.withRedux(App);
