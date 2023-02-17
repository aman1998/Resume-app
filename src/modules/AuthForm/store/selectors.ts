import { createSelector } from '@reduxjs/toolkit';

import { IAppState } from 'src/rootStore/types';

import { IAuthState } from './types';

const selectState = (state: IAppState) => state.auth;

export const isAuthSelector = createSelector(selectState, (state: IAuthState) => state.isAuth);

export const authModalIsOpenSelector = createSelector(
  selectState,
  (state: IAuthState) => state.authModalIsOpen
);

export const authTypeSelector = createSelector(selectState, (state: IAuthState) => state.authType);
