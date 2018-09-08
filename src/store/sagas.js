import { all, fork } from "redux-saga/effects";

import songsSaga from "./songs/songsSaga";
import setlistsSaga from "./setlists/setlistsSaga";
import setlistSaga from "./setlist/setlistSaga";
import authSaga from "./auth/authSaga";
import usersSaga from "./users/usersSaga";
import commonSaga from "./common/commonSaga";

export default function* rootSaga() {
  yield all([
    fork(songsSaga),
    fork(setlistsSaga),
    fork(setlistSaga),
    fork(authSaga),
    fork(usersSaga),
    fork(commonSaga)
  ]);
}
