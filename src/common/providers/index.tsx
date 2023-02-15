'use client';

import { FC, ReactNode } from 'react';

import ReduxProvider from './ReduxProvider';
import ChakraProvider from './ChakraProvider';

const Providers: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <ReduxProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </ReduxProvider>
  </>
);

export default Providers;
