import { FC, useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { useDispatch } from 'react-redux';
import { Cambo } from '@next/font/google';

import { wrapper } from 'src/rootStore/index';

import Header from '@components/Header';

import PrivateProvider from '@common/providers/PrivateProvider';
import '@common/styles/main.scss';
import MaterialUIProvider from '@common/providers/MUIProvider';
import { privatePages } from '@common/constants/app';

import { authInfoFetching } from '@modules/UserInfo/store/reducers';

import { createEmotionCache } from '@utils/createEmotionCashe';

// создаем клиентский кэш
const clientSideEmotionCache = createEmotionCache();
const fontScript = Cambo({
  weight: '400',
});

const App: FC<AppProps & { emotionCache?: EmotionCache }> = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) => {
  const { pathname } = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authInfoFetching());
  }, [dispatch]);

  return (
    <>
      {/* провайдер кэша */}
      <CacheProvider value={emotionCache}>
        {/* провайдер темы */}
        <div className={fontScript.className}>
          <MaterialUIProvider>
            <Header />
            <main className="main">
              {privatePages.includes(pathname) ? (
                <PrivateProvider>
                  <Component {...pageProps} />
                </PrivateProvider>
              ) : (
                <Component {...pageProps} />
              )}
            </main>
          </MaterialUIProvider>
        </div>
      </CacheProvider>
    </>
  );
};

export default wrapper.withRedux(App);
