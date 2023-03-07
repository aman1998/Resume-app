import { put, takeLatest, all } from 'redux-saga/effects';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as signOutFirebase,
} from 'firebase/auth';
import Router from 'next/router';

import { IPayloadAction } from 'src/rootStore/types';
import { auth } from 'firebase-config';

import {
  changeIsAuth,
  authInfoSuccess,
  updateUserInfoFetching,
  resetUserInfo,
} from '@modules/UserInfo/store/reducers';

import { showNotification, ENotificationType } from '@utils/notifications';

import { IEmailPassword, IFirebaseAuth, ISignOut } from './types';
import {
  changeAuthModalIsOpen,
  signInFailure,
  signInFetching,
  signInSuccess,
  signOutFetching,
  signUpFailure,
  signUpFetching,
  signUpSuccess,
} from './reducers';

function* signIn(action: IPayloadAction<IEmailPassword>) {
  try {
    const { email, password } = action.payload;

    const data: IFirebaseAuth = yield signInWithEmailAndPassword(auth, email, password);

    if (data && data?.user) {
      const { user } = data;
      yield put(changeIsAuth(true));
      yield put(signInSuccess({ id: user.uid, email: user.email || '' }));
      yield put(authInfoSuccess({ id: user.uid, email: user.email || '' }));
      yield Router.push('/profile/personal');
      yield put(changeAuthModalIsOpen(false));
      showNotification(ENotificationType.success, 'Вы успешно вошли в аккаунт!');
    } else {
      showNotification(ENotificationType.error, 'Неверные данные!');
    }
  } catch (e) {
    yield put(signInFailure('Ошибка!'));
    showNotification(ENotificationType.error, 'Произошла ошибка, возможно неверные данные');
  }
}

function* signUp(action: IPayloadAction<IEmailPassword>) {
  try {
    const { email, password } = action.payload;

    const data: IFirebaseAuth = yield createUserWithEmailAndPassword(auth, email, password);

    if (data && data?.user) {
      const { user } = data;
      yield put(changeIsAuth(true));
      yield put(signUpSuccess({ id: user.uid, email: user.email || '' }));
      yield put(authInfoSuccess({ id: user.uid, email: user.email || '' }));
      yield put(updateUserInfoFetching({}));
      yield Router.push('/profile/personal');
      yield put(changeAuthModalIsOpen(false));
      showNotification(ENotificationType.success, 'Вы успешно вошли в аккаунт!');
    } else {
      showNotification(ENotificationType.error, 'Неверные данные!');
    }
  } catch (e) {
    yield put(signUpFailure('Ошибка!'));
    showNotification(ENotificationType.error, 'Произошла ошибка, возможно неверные данные');
  }
}

function* signOut(action: IPayloadAction<ISignOut>) {
  try {
    yield signOutFirebase(auth);
    const { callback } = action.payload;
    yield callback();
    yield Router.push('/');
    yield put(resetUserInfo());
    showNotification(ENotificationType.success, 'Вы успешно вышли из аккаунта!');
  } catch {
    showNotification(ENotificationType.error, 'Произошла ошибка, повторите снова');
  }
}

function* Saga(): Generator {
  yield all([takeLatest(signInFetching.type, signIn)]);
  yield all([takeLatest(signUpFetching.type, signUp)]);
  yield all([takeLatest(signOutFetching.type, signOut)]);
}

export default Saga;
