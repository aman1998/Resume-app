'use client';

import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '@store/store';

const ReduxProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
