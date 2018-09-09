import firebase from "firebase";
import {
  all,
  call,
  fork,
  put,
  take,
  select,
  takeEvery,
  takeLatest
} from "redux-saga/effects";

import {
  types,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  addUserData
} from "./authActions";

import rsf from "../rsf";

const authProvider = new firebase.auth.FacebookAuthProvider();

function* loginSaga() {
  try {
    yield call(rsf.auth.signInWithPopup, authProvider);
    // successful login will trigger the loginStatusWatcher, which will update the state
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* logoutSaga() {
  try {
    yield call(rsf.auth.signOut);
    // successful logout will trigger the loginStatusWatcher, which will update the state
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

function* updateUserDataSaga(action) {
  const userId = yield select(store => store.auth.user.id);
  yield call(rsf.firestore.updateDocument, `users/${userId}`, {
    ...action.user
  });
}

function* addUserDataSaga(action) {
  yield call(rsf.firestore.setDocument, `users/${action.user.uid}`, {
    displayName: action.user.displayName,
    photoURL: action.user.photoURL,
    email: action.user.email,
    color: action.user.color,
    singer: action.user.singer
  });
}

function* loginStatusWatcher() {
  // events on this channel fire when the user logs in or logs out
  const channel = yield call(rsf.auth.channel);

  while (true) {
    const { user } = yield take(channel);

    if (user) {
      let userData = {};
      const snapshot = yield call(rsf.firestore.getCollection, "users");
      let users;
      snapshot.forEach(user => {
        users = {
          ...users,
          [user.id]: user.data()
        };
      });
      if (users !== undefined && user.uid in users) {
        userData = users[user.uid];
      } else {
        userData = { ...user, color: "#607d8b", singer: true };
        yield put(addUserData(userData));
      }
      yield put(loginSuccess({ ...userData, id: user.uid }));
    } else yield put(logoutSuccess());
  }
}

export default function* loginRootSaga() {
  yield fork(loginStatusWatcher);
  yield all([
    takeEvery(types.AUTH.LOGIN.REQUEST, loginSaga),
    takeEvery(types.AUTH.LOGOUT.REQUEST, logoutSaga),
    takeLatest(types.AUTH.UPDATE.USER, updateUserDataSaga),
    takeLatest(types.AUTH.ADD.USER, addUserDataSaga)
  ]);
}
