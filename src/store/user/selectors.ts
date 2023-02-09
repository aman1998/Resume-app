import { createSelector } from 'reselect';

import { IAppState } from '@store/types';
import { TSelectUserApplication, TUserStateProps } from '@store/user/types';

const selectState = (state: IAppState): TSelectUserApplication => state.user;

export const signUpFetchingSelector = createSelector(selectState, (state: TUserStateProps) =>
  state?.getIn(['sign_up', 'fetching'])
);

export const signUpDataSelector = createSelector(selectState, (state: TUserStateProps) =>
  state?.getIn(['sign_up', 'data'])
);
