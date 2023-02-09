import { combineReducers } from 'redux';

import user from '@store/user/reducers';
import { IAppState } from '@store/types';

const rootReducer = combineReducers<IAppState>({
  user,
});

export default rootReducer;
