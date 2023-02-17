import { createSelector } from '@reduxjs/toolkit';

import { IAppState } from 'src/rootStore/types';

import { IUserState } from './types';

const selectState = (state: IAppState) => state.user;

export const userInfoFetchingSelector = createSelector(
  selectState,
  (state: IUserState) => state.userInfo.fetching
);

export const userInfoSelector = createSelector(
  selectState,
  (state: IUserState) => state.userInfo.data
);

export const userInfoFailureSelector = createSelector(
  selectState,
  (state: IUserState) => state.userInfo.failure
);
