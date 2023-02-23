import { createSlice } from '@reduxjs/toolkit';

import { IPayloadAction } from 'src/rootStore/types';
import { defaultState } from 'src/rootStore/constants';

import { IMainInfo, IUserState, IUserInfo } from '@modules/UserInfo/store/types';

const initialState: IUserState = {
  mainInfo: defaultState,
  userInfo: defaultState,
  updateUserInfo: defaultState,
  isAuth: false,
  experiencesModalIsOpen: false,
  educationsModalIsOpen: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
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

    mainInfoFetching(state: IUserState) {
      state.mainInfo.fetching = true;
    },
    mainInfoSuccess(state: IUserState, action: IPayloadAction<IMainInfo>) {
      state.mainInfo = { ...defaultState, data: action.payload };
    },
    mainInfoFailure(state: IUserState, action) {
      state.mainInfo = { ...defaultState, failure: action.payload };
    },

    userInfoFetching(state: IUserState) {
      state.userInfo.fetching = true;
    },
    userInfoSuccess(state: IUserState, action: IPayloadAction<IUserInfo>) {
      state.userInfo = { ...defaultState, data: action.payload };
    },
    userInfoFailure(state: IUserState, action) {
      state.userInfo = { ...defaultState, failure: action.payload };
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateUserInfoFetching(state: IUserState, _) {
      state.updateUserInfo.fetching = true;
    },
    updateUserSuccess(state: IUserState, action: IPayloadAction<unknown>) {
      state.updateUserInfo = { ...defaultState, data: action.payload };
    },
    updateUserFailure(state: IUserState, action) {
      state.updateUserInfo = { ...defaultState, failure: action.payload };
    },
  },
});

export const {
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

  mainInfoFailure,
  mainInfoFetching,
  mainInfoSuccess,
} = userSlice.actions;

export default userSlice.reducer;
