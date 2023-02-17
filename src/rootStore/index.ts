import createSagaMiddleware from 'redux-saga';
import { Store } from 'redux';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/src/getDefaultMiddleware';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware),
});

const rootStore = (): Store => {
  sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper<Store>(rootStore, { debug: true });
