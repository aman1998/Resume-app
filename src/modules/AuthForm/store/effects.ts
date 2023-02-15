import { PayloadAction } from '@reduxjs/toolkit';
import { takeLatest, all, AllEffect, ForkEffect, put } from 'redux-saga/effects';

import { IEmailPasswordForm } from './../types';
import {
  signInFailure,
  signInFetching,
  signInSuccess,
  signUpFailure,
  signUpFetching,
  signUpSuccess,
  changeAuthModalIsOpen,
} from './reducers';

function* signIn(action: PayloadAction<IEmailPasswordForm>) {
  try {
    console.warn('signin =>', action.payload);
    yield put(signInSuccess('success'));
    yield put(changeAuthModalIsOpen(false));
  } catch (error) {
    yield put(signInFailure('error'));
  }
}

function* signUp(action: PayloadAction<IEmailPasswordForm>) {
  try {
    console.warn('signup =>', action.payload);
    yield put(signUpSuccess('success'));
    yield put(changeAuthModalIsOpen(false));
  } catch (error) {
    yield put(signUpFailure('error'));
  }
}

function* Saga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([takeLatest(signInFetching.type, signIn)]);
  yield all([takeLatest(signUpFetching.type, signUp)]);
}

export default Saga;
