import { put, takeLatest, all, select } from 'redux-saga/effects';
import {
  query,
  where,
  getDocs,
  collection,
  Query,
  doc,
  setDoc,
  updateDoc,
  deleteField,
  FieldValue,
  arrayRemove,
} from 'firebase/firestore';

import { IPayloadAction } from 'src/rootStore/types';
import { database } from 'firebase-config';

import { IPersonalInfoStage } from '@components/Stages/PersonalInfoStage/types';

import { IMainInfo, IUserInfo } from '@modules/UserInfo/store/types';
import {
  updateUserFailure,
  updateUserInfoFetching,
  updateUserSuccess,
  userInfoFailure,
  userInfoFetching,
  userInfoSuccess,
  closeAllModal,
} from '@modules/UserInfo/store/reducers';

import { mainInfoSelector, userInfoSelector } from './selectors';

function* userInfo() {
  try {
    const { id }: IMainInfo = yield select(mainInfoSelector);

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
    const { id }: IMainInfo = yield select(mainInfoSelector);
    const user: IUserInfo = yield select(userInfoSelector);

    const userRef = doc(database, 'users', id);
    yield setDoc(userRef, { id, ...action.payload }, { merge: true });
    yield put(updateUserSuccess({ id, text: 'success' }));
    yield put(userInfoSuccess({ ...user, ...action.payload }));
    yield put(closeAllModal());
  } catch (e) {
    yield put(updateUserFailure(e));
  }
}

function* Saga(): Generator {
  yield all([takeLatest(updateUserInfoFetching.type, updateUserInfo)]);
  yield all([takeLatest(userInfoFetching.type, userInfo)]);
}

export default Saga;
