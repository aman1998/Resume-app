import { combineReducers } from 'redux';

import auth from '@modules/AuthForm/store/reducers';

import { IAppState } from '@store/types';

const rootReducer = combineReducers<IAppState>({
  auth,
});

export default rootReducer;
