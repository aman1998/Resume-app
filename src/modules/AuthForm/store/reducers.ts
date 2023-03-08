import { createSlice } from '@reduxjs/toolkit';

import { IPayloadAction } from 'src/rootStore/types';

import { defaultState } from './../../../rootStore/constants';
import { EAuthTypes } from './../types';
import { IAuthState } from './types';

const initialState: IAuthState = {
  signIn: defaultState,
  signUp: defaultState,
  signOut: defaultState,
  resetEmailPassword: defaultState,
  authModalIsOpen: false,
  authType: EAuthTypes.signin,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeAuthModalIsOpen(state: IAuthState, action: IPayloadAction<boolean>) {
      state.authModalIsOpen = action.payload;
      state.authType = EAuthTypes.signin;
    },
    changeAuthType(state: IAuthState, action: IPayloadAction<EAuthTypes>) {
      state.authType = action.payload;
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signInFetching(state: IAuthState, _) {
      state.signIn.fetching = true;
    },
    signInSuccess(state: IAuthState, action: IPayloadAction<unknown>) {
      state.signIn = { ...defaultState, data: action.payload };
    },
    signInFailure(state: IAuthState, action: IPayloadAction<unknown>) {
      state.signIn = { ...defaultState, failure: action.payload };
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signUpFetching(state: IAuthState, _) {
      state.signUp.fetching = true;
    },
    signUpSuccess(state: IAuthState, action: IPayloadAction<unknown>) {
      state.signUp = { ...defaultState, data: action.payload };
    },
    signUpFailure(state: IAuthState, action: IPayloadAction<unknown>) {
      state.signUp = { ...defaultState, failure: action.payload };
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signOutFetching(state: IAuthState, _) {
      state.signOut.fetching = true;
    },
    signOutSuccess(state: IAuthState, action: IPayloadAction<unknown>) {
      state.signOut = { ...defaultState, data: action.payload };
    },
    signOutFailure(state: IAuthState, action: IPayloadAction<unknown>) {
      state.signOut = { ...defaultState, failure: action.payload };
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resetEmailPasswordFetching(state: IAuthState, _) {
      state.resetEmailPassword.fetching = true;
    },
    resetEmailPasswordSuccess(state: IAuthState, action: IPayloadAction<unknown>) {
      state.resetEmailPassword = { ...defaultState, data: action.payload };
    },
    resetEmailPasswordFailure(state: IAuthState, action: IPayloadAction<unknown>) {
      state.resetEmailPassword = { ...defaultState, failure: action.payload };
    },
  },
});

export const {
  changeAuthModalIsOpen,
  changeAuthType,

  signInFailure,
  signInFetching,
  signInSuccess,

  signOutFailure,
  signOutFetching,
  signOutSuccess,

  signUpFailure,
  signUpFetching,
  signUpSuccess,

  resetEmailPasswordFailure,
  resetEmailPasswordFetching,
  resetEmailPasswordSuccess,
} = authSlice.actions;

export default authSlice.reducer;
