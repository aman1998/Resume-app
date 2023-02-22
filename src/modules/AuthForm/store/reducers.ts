import { createSlice } from '@reduxjs/toolkit';

import { IPayloadAction } from 'src/rootStore/types';

import { EAuthTypes } from './../types';
import { IAuthState } from './types';

const initialState: IAuthState = {
  authModalIsOpen: false,
  authType: EAuthTypes.signin,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuthModalIsOpen(state: IAuthState, action: IPayloadAction<boolean>) {
      state.authModalIsOpen = action.payload;
    },
    changeAuthType(state: IAuthState, action: IPayloadAction<EAuthTypes>) {
      state.authType = action.payload;
    },
  },
});

export const { changeAuthModalIsOpen, changeAuthType } = authSlice.actions;

export default authSlice.reducer;
