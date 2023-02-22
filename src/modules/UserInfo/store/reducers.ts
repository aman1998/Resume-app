import { createSlice } from '@reduxjs/toolkit';

import { IPayloadAction } from 'src/rootStore/types';
import { defaultState } from 'src/rootStore/constants';

import { IMainInfo, IUserState, TUserInfo } from '@modules/UserInfo/store/types';

const initialState: IUserState = {
  mainInfo: defaultState,
  userInfo: defaultState,
  updateUserInfo: defaultState,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
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
    userInfoSuccess(state: IUserState, action: IPayloadAction<TUserInfo>) {
      state.userInfo = { ...defaultState, data: action.payload };
    },
    userInfoFailure(state: IUserState, action) {
      state.userInfo = { ...defaultState, failure: action.payload };
    },

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
