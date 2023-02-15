import { combineReducers } from 'redux';

import auth from '@modules/AuthForm/store/reducers';

import user from '@store/user/reducers';
import { IAppState } from '@store/types';

const rootReducer = combineReducers<IAppState>({
  user,
  auth,
});

export default rootReducer;
