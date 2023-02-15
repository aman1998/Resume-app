import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { Roboto } from '@next/font/google';

import '@common/styles/main.scss';

const font = Roboto({
  weight: '400',
  subsets: ['latin'],
});

import ChakraProvider from '@common/providers/ChakraProvider';

import { wrapper } from '@store/store';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <ChakraProvider>
        <div className={font.className}>
          <Component {...pageProps} />
        </div>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
