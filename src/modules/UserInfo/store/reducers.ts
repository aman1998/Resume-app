import { createSlice } from '@reduxjs/toolkit';

import { IPayloadAction } from 'src/rootStore/types';
import { defaultState } from 'src/rootStore/constants';

import { IUserInfo, IUserState } from '@modules/UserInfo/store/types';

const initialState: IUserState = {
  userInfo: defaultState,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInfoFetching(state: IUserState, _) {
      state.userInfo.fetching = true;
    },
    userInfoSuccess(state: IUserState, action: IPayloadAction<IUserInfo>) {
      state.userInfo = { ...defaultState, data: action.payload };
    },
    userInfoFailure(state: IUserState, action) {
      state.userInfo = { ...defaultState, failure: action.payload };
    },
  },
});

export const { userInfoFetching, userInfoSuccess, userInfoFailure } = userSlice.actions;

export default userSlice.reducer;
