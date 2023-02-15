import { all, fork } from 'redux-saga/effects';

import authSaga from '@modules/AuthForm/store/effects';

function* rootSaga(): Generator {
  yield all([fork(authSaga)]);
}

export default rootSaga;
