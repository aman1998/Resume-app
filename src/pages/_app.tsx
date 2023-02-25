import { FC } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Roboto } from '@next/font/google';
import { CacheProvider, EmotionCache } from '@emotion/react';

import { wrapper } from 'src/rootStore/index';

import MainLayout from '@components/Layouts/components/MainLayout';
import HomeLayout from '@components/Layouts/components/HomeLayout';
import Header from '@components/Header';

import AuthProvider from '@common/providers/AuthProvider';
import '@common/styles/main.scss';
import MaterialUIProvider from '@common/providers/MUIProvider';

import { createEmotionCache } from '@utils/createEmotionCashe';

const font = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
});

// создаем клиентский кэш
const clientSideEmotionCache = createEmotionCache();

const App: FC<AppProps & { emotionCache?: EmotionCache }> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => {
  const { pathname } = useRouter();

  return (
    <div className={font.className}>
      {/* провайдер кэша */}
      <CacheProvider value={emotionCache}>
        {/* провайдер темы */}
        <MaterialUIProvider>
          {/* <AuthProvider>
            {pathname === '/' ? (
              <HomeLayout>
                <Component {...pageProps} />
              </HomeLayout>
            ) : (
              <>
                <MainLayout>
                  <Component {...pageProps} />
                </MainLayout>
              </>
            )}
          </AuthProvider> */}
          <>
            <Header />
            <AuthProvider>
              <main className="main">
                {pathname === '/' ? (
                  <Component {...pageProps} />
                ) : (
                  <>
                    <MainLayout>
                      <Component {...pageProps} />
                    </MainLayout>
                  </>
                )}
              </main>
            </AuthProvider>
          </>
        </MaterialUIProvider>
      </CacheProvider>
    </div>
  );
};

export default wrapper.withRedux(App);
