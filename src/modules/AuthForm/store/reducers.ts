import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { defaultState } from '@store/constants';

import { IAuthState } from './types';

const initialState: IAuthState = {
  authModalIsOpen: false,
  signIn: defaultState,
  signUp: defaultState,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuthModalIsOpen(state: IAuthState, action: PayloadAction<boolean>) {
      state.authModalIsOpen = action.payload;
    },

    signInFetching(state: IAuthState, _) {
      state.signIn.fetching = true;
    },
    signInSuccess(state: IAuthState, action) {
      state.signIn = { ...defaultState, data: action.payload };
    },
    signInFailure(state: IAuthState, action) {
      state.signIn = { ...defaultState, failure: action.payload };
    },

    signUpFetching(state: IAuthState, _) {
      state.signUp.fetching = true;
    },
    signUpSuccess(state: IAuthState, action) {
      state.signUp = { ...defaultState, data: action.payload };
    },
    signUpFailure(state: IAuthState, action) {
      state.signUp = { ...defaultState, failure: action.payload };
    },
  },
});

export const {
  changeAuthModalIsOpen,
  signInFailure,
  signInFetching,
  signInSuccess,
  signUpFailure,
  signUpFetching,
  signUpSuccess,
} = authSlice.actions;

export default authSlice.reducer;
