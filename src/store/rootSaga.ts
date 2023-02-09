import { all, fork } from 'redux-saga/effects';

import userSaga from '@store/user/effects';

function* rootSaga(): Generator {
  yield all([fork(userSaga)]);
}

export default rootSaga;
