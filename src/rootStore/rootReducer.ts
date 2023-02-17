import { combineReducers } from 'redux';

import auth from '@modules/AuthForm/store/reducers';
import user from '@modules/UserInfo/store/reducers';

const rootReducer = combineReducers({
  auth,
  user,
});

export default rootReducer;
