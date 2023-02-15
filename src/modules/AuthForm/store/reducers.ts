import { FromJS, RecordOf, fromJS } from 'immutable';
import { PayloadAction } from '@reduxjs/toolkit';

import { TRecordOf } from '@store/types';

import createReducer from '@utils/createReducer';

import { AUTH_MODAL_IS_OPEN } from './actions';
import { IAuthFormState } from './types';

const initialState: FromJS<unknown> = fromJS({
  authModalIsOpen: false,
});

const setAuthModalIsOpen = (state: TRecordOf<IAuthFormState>, action: PayloadAction<boolean>) =>
  state.setIn('authModalIsOpen', action.payload);

export default createReducer<RecordOf<IAuthFormState>>(initialState, {
  [AUTH_MODAL_IS_OPEN]: setAuthModalIsOpen,
});
