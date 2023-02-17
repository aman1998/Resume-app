import { createSlice } from '@reduxjs/toolkit';

import { IPayloadAction } from 'src/rootStore/types';

import { EAuthTypes } from './../types';
import { IAuthState } from './types';

const initialState: IAuthState = {
  authModalIsOpen: false,
  isAuth: false,
  authType: EAuthTypes.signin,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeIsAuth(state: IAuthState, action: IPayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    changeAuthModalIsOpen(state: IAuthState, action: IPayloadAction<boolean>) {
      state.authModalIsOpen = action.payload;
    },
    changeAuthType(state: IAuthState, action: IPayloadAction<EAuthTypes>) {
      state.authType = action.payload;
    },
  },
});

export const { changeIsAuth, changeAuthModalIsOpen, changeAuthType } = authSlice.actions;

export default authSlice.reducer;
