import router from 'next/router';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { put, takeLatest, all, select, call } from 'redux-saga/effects';
import { query, where, getDocs, collection, Query, doc, setDoc } from 'firebase/firestore';

import { IPayloadAction } from 'src/rootStore/types';
import { database } from 'firebase-config';

import { IPersonalInfoStage } from '@components/stages/PersonalInfoStage/types';

import { IAuthInfo, IUserInfo } from '@modules/UserInfo/store/types';
import {
  authInfoFailure,
  authInfoFetching,
  authInfoSuccess,
  changeIsAuth,
  resetUserInfo,
  updateUserFailure,
  updateUserInfoFetching,
  updateUserSuccess,
  userInfoFailure,
  userInfoFetching,
  userInfoSuccess,
  closeAllModal,
} from '@modules/UserInfo/store/reducers';

import { showNotification, ENotificationType } from '@utils/notifications';

import { authInfoSelector, userInfoSelector } from './selectors';

const getAuthChannel = () => {
  const auth = getAuth();

  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);
      } else {
        reject(new Error('Ops!'));
      }
    });
  });
};

function* authInfo() {
  try {
    const user: User = yield call(getAuthChannel);
    if (user) {
      yield put(changeIsAuth(true));
      yield put(authInfoSuccess({ id: user.uid, email: user.email || '' }));
    } else {
      if (router.pathname !== '/') {
        showNotification(ENotificationType.error, 'Не удалось войти в аккаунт');
      }
      put(resetUserInfo());
    }
  } catch (error) {
    if (router.pathname !== '/') {
      showNotification(ENotificationType.error, 'Не удалось войти в аккаунт');
    }
    yield put(authInfoFailure(String(error)));
  }
}

function* userInfo() {
  try {
    const { id }: IAuthInfo = yield select(authInfoSelector);

    const usersRef: Query<unknown> = yield collection(database, 'users');

    const q = query(usersRef, where('id', '==', id));
    const usersSnapshot: unknown = yield getDocs(q);

    // @ts-ignore
    const users = usersSnapshot.docs.map((doc: any) => doc.data());

    if (users.length) yield put(userInfoSuccess(users[0]));
  } catch (e) {
    yield put(userInfoFailure(e));
  }
}

function* updateUserInfo(action: IPayloadAction<IPersonalInfoStage>) {
  try {
    const { id }: IAuthInfo = yield select(authInfoSelector);
    const user: IUserInfo = yield select(userInfoSelector);

    const userRef = doc(database, 'users', id);
    yield setDoc(userRef, { id, ...action.payload }, { merge: true });
    showNotification(ENotificationType.success, 'Данные обновлены!');
    yield put(updateUserSuccess({ id, text: 'success' }));
    yield put(userInfoSuccess({ ...user, ...action.payload }));
    yield put(closeAllModal());
  } catch (e) {
    yield put(updateUserFailure(e));
    showNotification(ENotificationType.error, 'Произошла ошибка, повторите снова');
  }
}

function* Saga(): Generator {
  yield all([takeLatest(updateUserInfoFetching.type, updateUserInfo)]);
  yield all([takeLatest(userInfoFetching.type, userInfo)]);
  yield all([takeLatest(authInfoFetching.type, authInfo)]);
}

export default Saga;
