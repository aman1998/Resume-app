import { createSelector } from '@reduxjs/toolkit';

import { IAppState } from '@store/types';

import { IAuthState } from './types';

const selectState = (state: IAppState) => state.auth;

export const authModalIsOpenSelector = createSelector(
  selectState,
  (auth: IAuthState) => auth.authModalIsOpen
);
