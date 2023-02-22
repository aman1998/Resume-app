import { all, fork } from 'redux-saga/effects';

// import authSaga from '@modules/AuthForm/store/effects';
import userSaga from '@modules/UserInfo/store/effects';

function* rootSaga(): Generator {
  // yield all([fork(authSaga)]);
  yield all([fork(userSaga)]);
}

export default rootSaga;
