import { put, takeLatest, all } from 'redux-saga/effects';

import { IPayloadAction } from '@store/types';
import { TSignUpRequest, ISignUpSuccess } from '@store/user/types';
import { SIGN_UP_REQUEST, signUpFailure, signUpSuccess } from '@store/user/actions';

function* signUp(action: IPayloadAction<TSignUpRequest>) {
  try {
    console.warn('action.payload', action.payload);
    const data: ISignUpSuccess = { confirm_token: '123' };
    yield put(signUpSuccess(data));
  } catch (e) {
    put(signUpFailure('error'));
  }
}

function* Saga(): Generator {
  yield all([takeLatest(SIGN_UP_REQUEST, signUp)]);
}

export default Saga;
