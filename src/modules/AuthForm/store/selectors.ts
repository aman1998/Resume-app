import { createSelector } from 'reselect';

import { TAuthApplication, TAuthStateProps } from '@modules/AuthForm/store/types';

import { IAppState } from '@store/types';

const selectState = (state: IAppState): TAuthApplication => state.auth;

export const signUpFetchingSelector = createSelector(selectState, (state: TAuthStateProps) =>
  state?.getIn(['sign_up', 'fetching'])
);
