import { createSelector } from '@reduxjs/toolkit';

import { IAppState } from 'src/rootStore/types';

import { IUserState } from './types';

const selectState = (state: IAppState) => state.user;

export const authInfoFetchingSelector = createSelector(
  selectState,
  (state: IUserState) => state.authInfo.fetching
);
export const authInfoFailureSelector = createSelector(
  selectState,
  (state: IUserState) => state.authInfo.failure
);
export const authInfoSelector = createSelector(
  selectState,
  (state: IUserState) => state.authInfo.data
);

export const isAuthSelector = createSelector(selectState, (state: IUserState) => state.isAuth);

export const experiencesModalIsOpenSelector = createSelector(
  selectState,
  (state: IUserState) => state.experiencesModalIsOpen
);

export const educationsModalIsOpenSelector = createSelector(
  selectState,
  (state: IUserState) => state.educationsModalIsOpen
);

export const userInfoFetchingSelector = createSelector(
  selectState,
  (state: IUserState) => state.userInfo.fetching
);
export const userInfoFailureSelector = createSelector(
  selectState,
  (state: IUserState) => state.userInfo.failure
);
export const userInfoSelector = createSelector(
  selectState,
  (state: IUserState) => state.userInfo.data
);

export const experiencesInfoSelector = createSelector(
  selectState,
  (state: IUserState) => state.userInfo.data?.experiences
);

export const educationsInfoSelector = createSelector(
  selectState,
  (state: IUserState) => state.userInfo.data?.educations
);

export const updateUserInfoFetchingSelector = createSelector(
  selectState,
  (state: IUserState) => state.updateUserInfo.fetching
);
export const updateUserInfoSelector = createSelector(
  selectState,
  (state: IUserState) => state.updateUserInfo.data
);
export const updateUserInfoFailureSelector = createSelector(
  selectState,
  (state: IUserState) => state.updateUserInfo.failure
);
