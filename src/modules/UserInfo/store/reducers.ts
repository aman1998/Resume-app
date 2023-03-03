import { createSlice } from '@reduxjs/toolkit';

import { IPayloadAction } from 'src/rootStore/types';
import { defaultState } from 'src/rootStore/constants';

import {
  IUserState,
  IUserInfo,
  IUserInfoDefaultData,
  IAuthInfo,
} from '@modules/UserInfo/store/types';

const initialState: IUserState = {
  authInfo: { ...defaultState, fetching: true }, // probably need refactoring
  isAuth: false,
  userInfo: defaultState,
  updateUserInfo: defaultState,
  experiencesModalIsOpen: false,
  educationsModalIsOpen: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authInfoFetching(state: IUserState) {
      state.authInfo.fetching = true;
    },
    authInfoSuccess(state: IUserState, action: IPayloadAction<IAuthInfo>) {
      state.authInfo = { ...defaultState, data: action.payload };
    },
    authInfoFailure(state: IUserState, action) {
      state.authInfo = { ...defaultState, failure: action.payload };
    },

    changeIsAuth(state: IUserState, action: IPayloadAction<boolean>) {
      state.isAuth = action.payload;
    },

    changeExperiencesModalIsOpen(state: IUserState, action: IPayloadAction<boolean>) {
      state.experiencesModalIsOpen = action.payload;
    },

    changeEducationsModalIsOpen(state: IUserState, action: IPayloadAction<boolean>) {
      state.educationsModalIsOpen = action.payload;
    },

    closeAllModal(state: IUserState) {
      state.experiencesModalIsOpen = false;
      state.educationsModalIsOpen = false;
    },

    userInfoFetching(state: IUserState) {
      state.userInfo.fetching = true;
    },
    userInfoSuccess(state: IUserState, action: IPayloadAction<IUserInfo>) {
      const { educations = [], experiences = [] } = action.payload;

      const sortedEducations = [...educations].sort(
        (a, b) => Number(a.startYear) - Number(b.startYear)
      );
      const sortedExperiences = [...experiences].sort(
        (a, b) => Number(a.startYear) - Number(b.startYear)
      );

      const newData = {
        ...action.payload,
        educations: sortedEducations,
        experiences: sortedExperiences,
      };

      state.userInfo = { ...defaultState, data: newData };
    },
    userInfoFailure(state: IUserState, action) {
      state.userInfo = { ...defaultState, failure: action.payload };
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateUserInfoFetching(state: IUserState, _) {
      state.updateUserInfo.fetching = true;
    },
    updateUserSuccess(state: IUserState, action: IPayloadAction<IUserInfoDefaultData>) {
      state.updateUserInfo = { ...defaultState, data: action.payload };
    },
    updateUserFailure(state: IUserState, action) {
      state.updateUserInfo = { ...defaultState, failure: action.payload };
    },

    resetUserInfo(state: IUserState) {
      state.userInfo = defaultState;
      state.updateUserInfo = defaultState;
      state.isAuth = false;
      state.experiencesModalIsOpen = false;
      state.educationsModalIsOpen = false;
    },
  },
});

export const {
  authInfoFailure,
  authInfoFetching,
  authInfoSuccess,

  changeIsAuth,

  changeExperiencesModalIsOpen,
  changeEducationsModalIsOpen,
  closeAllModal,

  userInfoFetching,
  userInfoSuccess,
  userInfoFailure,

  updateUserFailure,
  updateUserInfoFetching,
  updateUserSuccess,

  resetUserInfo,
} = userSlice.actions;

export default userSlice.reducer;
