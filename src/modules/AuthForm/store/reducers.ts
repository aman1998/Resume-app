import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAuthState } from './types';

const initialState: IAuthState = {
  authModalIsOpen: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuthModalIsOpen(state: IAuthState, action: PayloadAction<boolean>) {
      state.authModalIsOpen = action.payload;
    },
  },
});

export const { changeAuthModalIsOpen } = authSlice.actions;

export default authSlice.reducer;
