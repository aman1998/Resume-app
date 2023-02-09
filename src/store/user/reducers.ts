import { fromJS, RecordOf, FromJS } from 'immutable';

import { ISignUpSuccess, IUserState } from '@store/user/types';
import { initialStateData } from '@store/constants';
import { SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from '@store/user/actions';
import { IPayloadAction, TRecordOf } from '@store/types';

import createReducer from '@utils/createReducer';

const initialState: FromJS<unknown> = fromJS({
  signUp: initialStateData,
});

const setSignUpFetching = (value: boolean) => (state: TRecordOf<IUserState>) =>
  state.setIn(['sign_up', 'fetching'], value);

const setSignUpSuccess = (state: TRecordOf<IUserState>, action: IPayloadAction<ISignUpSuccess>) =>
  state.setIn(['sign_up', 'data'], action.payload);

const setSignUpFailure = (state: TRecordOf<IUserState>, action: IPayloadAction<unknown>) =>
  state.setIn(['sign_up', 'failure'], action.payload);

export default createReducer<RecordOf<IUserState>>(initialState, {
  [SIGN_UP_REQUEST]: setSignUpFetching(true),
  [SIGN_UP_SUCCESS]: [setSignUpFetching(false), setSignUpSuccess],
  [SIGN_UP_FAILURE]: [setSignUpFetching(false), setSignUpFailure],
});
