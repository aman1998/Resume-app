import { ISignUpSuccess, TSignUpRequest } from '@store/user/types';

import { createAction } from '@utils/createAction';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const signUpRequest = createAction<TSignUpRequest>(SIGN_UP_REQUEST);
export const signUpSuccess = createAction<ISignUpSuccess>(SIGN_UP_SUCCESS);
export const signUpFailure = createAction<any>(SIGN_UP_FAILURE);
